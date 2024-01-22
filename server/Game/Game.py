from server.Game.Deck import Deck
from server.Game.BlockState import BlockState
from server.Game.ChallengeState import ChallengeState
from server.Game.LoseInfluenceState import LoseInfluenceState
from server.Game.RevealCardState import RevealCardState
from server.Game.ExchangeState import ExchangeState
from server.Game.UnresolvedAction import UnresolvedAction
from server.Game.Player import Player
from server.ChatLog import ChatLog
from server.Game.Audit import Audit
from server.Players import Players
import random
import string
from server.Game.Action import actions_dict
from server.CoupException import CoupException
from server.Game.TurnTimer import TurnTimer

class Game:
    def __init__(self, name, num_players, turn_timer_enabled, turn_length, socket):
        self.name = name
        self.players = Players(False)
        self.turn_order_ids = []
        self.id = ''.join(random.choice(string.ascii_letters + string.digits) for _ in range(8))
        self.started = False
        self.over = False
        self.deck = Deck()
        self.num_players = num_players
        self.turn_timer_enabled = turn_timer_enabled
        self.turn_length = turn_length
        self.time_left = turn_length
        self.block_state = BlockState()
        self.challenge_state = ChallengeState()
        self.lose_influence_state = LoseInfluenceState()
        self.reveal_card_state = RevealCardState()
        self.exchange_state = ExchangeState()
        self.unresolved_action = UnresolvedAction()
        self.chat_log = ChatLog()
        self.audit = Audit()
        self.socket = socket
        self.timer = TurnTimer(turn_length, turn_timer_enabled, self.timer_expired)

    def start(self):
        if not self.players:
            raise CoupException('Trying to start game without any players')
        self.deck = Deck()
        self.reset_states()
        self.initialize_players()
        self.turn_order_ids = [player.id for player in self.players.get_players()]
        random.shuffle(self.turn_order_ids)
        first_player = self.turn_order_ids[0]
        self.players.get_player(first_player).is_turn = True
        self.block_state.player_ids = list(self.players.get_players())
        self.challenge_state.player_ids = list(self.players.get_players())
        self.started = True
        self.over = False
        self.start_timer()

    def start_timer(self):
        if self.turn_timer_enabled:
            self.timer.start_timer()

    # Callback method when the timer expires.
    def timer_expired(self):
        if self.over or not self.players.get_players():
            return
        if self.challenge_state.active:
            self.challenge_state.pending_player_ids = []
            self.pass_challenge()
        elif self.block_state.active:
            self.block_state.pending_player_ids = []
            self.pass_block()
        elif self.reveal_card_state.active:
            player_id = self.reveal_card_state.revealer_id
            player = self.get_player(player_id)
            possible_card_ids = [card.id for card in player.cards if not card.revealed]
            if not possible_card_ids:
                raise CoupException('No cards to reveal on player.')
            random.shuffle(possible_card_ids)
            self.handle_revealed_card(player_id, possible_card_ids[0])
        elif self.lose_influence_state.active:
            player_id = self.lose_influence_state.player_id
            player = self.get_player(player_id)
            possible_card_ids = [card.id for card in player.cards if not card.revealed]
            if not possible_card_ids:
                raise CoupException('No cards to lose on player.')
            random.shuffle(possible_card_ids)
            self.handle_lose_influence(player_id, possible_card_ids[0])
        elif self.exchange_state.active:
            player_id = self.exchange_state.player_id
            player = self.get_player(player_id)
            expected_count = self.exchange_state.expected_exchange_count
            selected_card_ids = [card.id for card in player.cards if not card.revealed]
            if len(selected_card_ids) != expected_count:
                raise CoupException('Selected incorrect number of cards')
            self.handle_resolve_exchange(player_id, selected_card_ids)
        else:
            player = self.current_player_turn()
            if player.coins < 10:
                # income
                self.handle_action(1, player.id, None)
            else:
                # get random Coup target
                # TODO: make this random
                coup_targets = []
                for other_player in self.players.get_players():
                    if not other_player.lost and other_player.id != player.id:
                        coup_targets.append(other_player.id)
                if not coup_targets:
                    raise CoupException('No other players in game to Coup')
                random.shuffle(coup_targets)
                self.handle_action(3, player.id, coup_targets[0])

        game_state = self.get_game_state()
        self.socket.emit('game_state_update', game_state, room=self.id)

    def add_player(self, player):
        self.players.add_player(player)

    def initialize_players(self):
        for player in self.players.get_players():
            player.coins = 2
            player.cards = self.deck.draw(2)
            player.is_turn = False
            player.lost = False
    
    def get_player_data(self):
        player_data = []
        for player in self.players.get_players():
            data = player.to_dict()
            player_data.append(data)
        return player_data
    
    # TODO refactor to a 'states' key
    def get_game_state(self):
        player_data = self.get_player_data()
        block_state = self.block_state.to_dict()
        challenge_state = self.challenge_state.to_dict()
        lose_influence_state = self.lose_influence_state.to_dict()
        reveal_card_state = self.reveal_card_state.to_dict()
        exchange_state = self.exchange_state.to_dict()
        return {
            'gameName': self.name,
            'playerData': player_data, 
            'started': self.started,
            'timeLeft': self.timer.get_time_left(),
            'timerEnabled': self.turn_timer_enabled,
            'blockState': block_state,
            'challengeState': challenge_state,
            'loseInfluenceState': lose_influence_state,
            'revealCardState': reveal_card_state,
            'exchangeState': exchange_state,
            'over': self.over,
            'gameLogs': self.audit.get_audits(),
            'chatLog': self.get_messages(),
        }
    
    def handle_action(self, action_id, source_id, target_id):
        action = actions_dict[action_id]
        player = self.players.get_player(source_id)
        if action.cost > player.coins:
            return 'You need more coins to take this action.'
        else:
            player.coins -= action.cost

        # If a player has >= 10 coins, they must Coup
        if action_id == 3 and player.coins >= 10:
            return 'You must Coup with 10 or more coins.'
        
        self.unresolved_action.set(action_id, source_id, target_id)

        if action.challengable:
            self.deactivate_states()
            self.activate_challenge_state(action.card_id, action.id, source_id, False, target_id)
        else:
            self.resolve_action(action_id, source_id, target_id)
    
    def handle_lose_influence(self, player_id, card_id):
        player = self.players.get_player(player_id)
        card = player.lose_influence(card_id)
        player_name = self.players.get_player_name(player_id)
        msg = f"{player_name} loses their {card.name} influence."
        self.add_audit(msg)
        self.over = self.check_game_over()

        action_id = self.unresolved_action.action_id
        source_id = self.unresolved_action.source_id
        target_id = self.unresolved_action.target_id

        # if not coming from a reveal state, then move to next turn
        if not self.lose_influence_state.from_reveal_state:
            self.move_turn()
        else:
            # We came from a reveal state, which came from a challenge state. Furthermore, we know that the revealed
            # card was correct, as if it were incorrect we would not call this function. The logic for handling
            # cases with incorrect revealed cards is contained within the handle_revealed_card() method.
            # Hence, we need to know whether this is an unsuccessful challenge on an initial action, where we call
            # resolve_action, or an unsucessful challenge on a block, where we end turn (block goes thru)
            block_state_already_set = self.block_state.source_id is not None
            if block_state_already_set:
                self.move_turn()
            else:
                # reset challenge state as block may be challenged later in turn
                self.challenge_state = ChallengeState()

                # if the player lost in the challenge state, we need to take the necessary action.
                if self.players.has_player(target_id) and self.players.get_player(target_id).lost:
                    if action_id == 7:
                        self.handle_steal(source_id, target_id, True)
                    else:
                        self.move_turn()
                else:
                    # resolve the action (before block if applicable)
                    self.resolve_action(action_id, source_id, target_id)
        
        player = self.players.get_player(player_id)
        cards = [card.to_dict(False) for card in player.cards]
        self.socket.emit('set_cards', cards, room=player.token)

    def check_game_over(self):
        players_left = 0
        for player in self.players.get_players():
            if not player.lost:
                players_left += 1
        if players_left >= 2:
            return False
        elif players_left == 1:
            self.over = True
            self.stop_timer()
            return True
        else:
            self.stop_timer()
            raise CoupException("No players left")

    # first resolution of action
    def resolve_action(self, action_id, source_id, target_id):
        player = self.players.get_player(source_id)
        if player.lost:
            raise CoupException('Lost player taking action')
        block_state_resolved = self.block_state.source_id is not None
        if action_id == 1:
            self.handle_income(source_id)
        elif action_id == 2:
            self.handle_foreign_aid(source_id, block_state_resolved)
        elif action_id == 3:
            self.handle_coup(source_id, target_id)
        elif action_id == 4:
            self.handle_tax(source_id)
        elif action_id == 5:
            self.handle_assassinate(source_id, target_id, block_state_resolved)
        elif action_id == 6:
            self.handle_exchange(source_id)
        elif action_id == 7:
            self.handle_steal(source_id, target_id, block_state_resolved)
        else:
            raise CoupException("Invalid action taken:", action_id)

    def handle_pass_challenge(self, player_id):
        self.verify_one_active_state()
        self.challenge_state.remove_pending_player(player_id, self.players) #.pending_player_ids.remove(player_id)
        if not self.challenge_state.pending_player_ids:
            self.pass_challenge()

    def pass_challenge(self):
        action_id = self.challenge_state.action_id
        source_id = self.challenge_state.source_id
        target_id = self.challenge_state.target_id
        # Move to block state if the action is blockable
        # Do we want this?
        block_state_already = self.block_state.action_id is not None
        if not block_state_already and actions_dict[self.challenge_state.action_id].block_card_ids:
            self.deactivate_states()
            self.activate_block_state(action_id, source_id, target_id)
        # otherwise resolve the action
        # What if you are challenging a block?
        else:
            action_id = self.challenge_state.action_id
            source_id = self.challenge_state.source_id
            target_id = self.challenge_state.target_id
            # Edge case: foreign aid
            # At this point, block state has already occurred and someone blocked as Duke
            if action_id == 2:
                self.move_turn()
                return

            self.resolve_action(action_id, source_id, target_id)
        
    def handle_pass_block(self, player_id):
        self.block_state.remove_pending_player(player_id, self.players)
        if not self.block_state.pending_player_ids:
            self.pass_block()

    def pass_block(self):
        self.unresolved_action.successfully_blocked = True
        action_id = self.block_state.action_id
        source_id = self.block_state.source_id
        target_id = self.block_state.target_id
        self.resolve_action_from_block(action_id, source_id, target_id)
    
    def resolve_action_from_block(self, action_id, source_id, target_id):
        self.verify_one_active_state()
        if action_id == 2:
            self.handle_foreign_aid(source_id, True)
        elif action_id == 5:
            self.handle_assassinate(source_id, target_id, True)
        elif action_id == 7:
            self.handle_steal(source_id, target_id, True)
        elif action_id in [1, 3, 4, 6]:
            raise CoupException("Should not reach resolve_action_from_block for action that cannot be blocked")
        else:
            raise CoupException("Invalid action taken:", action_id)

    def handle_challenge(self, player_challenging_id):
        self.verify_one_active_state()
        player_being_challenged_id = self.challenge_state.source_id
        self.deactivate_states()
        self.activate_reveal_card_state(player_being_challenged_id, player_challenging_id)
        player_challenging_name = self.players.get_player_name(player_challenging_id)
        player_being_challenged_name = self.players.get_player_name(player_being_challenged_id)
        msg = f"{player_challenging_name} challenges {player_being_challenged_name}."

    def handle_block(self, block_card_id, blocked_action_id, blocker_id, target_id):
        self.verify_one_active_state()
        # All blocks can be challenged
        self.deactivate_states()
        self.activate_challenge_state(block_card_id, blocked_action_id, blocker_id, True, target_id)

    # return the player with updated cards if we find, otherwise we return None
    def handle_revealed_card(self, player_id, card_id):
        self.verify_one_active_state()
        # We should only ever get here from a challenge state
        player = self.players.get_player(player_id)
        card = next((card for card in player.cards if card.id == card_id), None)

        if not card or card.revealed:
            raise CoupException('Player did not reveal a card they have or they revealed a previously revealed card')
        name = self.players.get_player_name(player_id)
        msg = f"{name} reveals {card.name}."
        self.add_audit(msg)

        is_correct_card = card.type_id == self.challenge_state.card_claimed.type_id
        # Challenger loses card
        if is_correct_card:
            player = self.players.get_player(self.challenge_state.source_id)
            self.replace_card_for_player(player, card.id)

            msg = f"{name} draws a new card."
            self.add_audit(msg)

            update_card_player = player

            # If we were in a block state, mark the unresolved action successful block as True
            if self.block_state.action_id is not None:
                self.unresolved_action.successfully_blocked = True
            challenger_id = self.reveal_card_state.challenger_id
            # Reset reveal_card_state
            # The rest of the logic will be handled in handle_lose_influence_state from here
            self.deactivate_states()
            self.activate_lose_influence_state(self.players.get_player(challenger_id), True)
            return update_card_player
        # Player challenged loses card
        else:
            player = self.players.get_player(player_id)
            player.lose_influence(card_id)
            cards = [card.to_dict(False) for card in player.cards]
            self.socket.emit('set_cards', cards, room=player.token)
            # Here we need to update the player cards status on the frontend
            # Repro: block as duke, challenge, dont reveal duke - card should say 'revealed'
            self.check_game_over()

            # Now we need to know if this a successful challenge on a block, or a successful challenge on
            # an initial action

            challenge_on_block = (self.block_state.source_id != None)
            if challenge_on_block:
                target_player = self.players.get_player(self.block_state.target_id)
                # If the below case is true, this is the case where the assassinated player
                # challenged and lost and also claimed 
                if self.block_state.action_id == 5 and target_player.lost:
                    self.move_turn()
                    return
                # Block becomes void, original action goes through
                self.resolve_action_from_block(self.block_state.action_id,
                                               self.unresolved_action.source_id,
                                               self.unresolved_action.target_id)
            else:
                # Original action becomes void, turn ends
                self.move_turn()

    def replace_card_for_player(self, player: Player, card_id: int):
        self.verify_one_active_state()
        index, card = player.remove_card(card_id)
        self.deck.append(card)
        # LIST
        new_card_list = self.deck.draw(1)
        # Preserve order of the cards so the card that remains doesn't switch
        if index == 0:
            player.cards = new_card_list + player.cards
        elif index == 1:
            player.cards = player.cards + new_card_list
        else:
            raise CoupException('Invalid card index')

    def handle_income(self, source_id):
        self.players.get_player(source_id).coins += 1
        name = self.players.get_player_name(source_id)
        msg = f"{name} incomes."
        self.add_audit(msg)
        self.move_turn()

    def handle_foreign_aid(self, source_id, block_state_resolved = False):
        name = self.players.get_player_name(source_id)
        if block_state_resolved:
            self.players.get_player(source_id).coins += 2
            msg = f"{name} is attempting to foreign aid."
            self.add_audit(msg)
            self.move_turn()
        else:
            msg = f"{name} foreign aids."
            self.add_audit(msg)
            self.deactivate_states()
            self.activate_block_state(2, source_id, None)

    def handle_coup(self, source_id, target_id):
        source_name = self.players.get_player_name(source_id)
        target_name = self.players.get_player_name(target_id)
        msg = f"{source_name} coups {target_name}."
        self.add_audit(msg)
        target_player = self.players.get_player(target_id)
        self.deactivate_states()
        self.activate_lose_influence_state(target_player, False)
    
    def handle_tax(self, source_id):
        name = self.players.get_player_name(source_id)
        msg = f"{name} taxes."
        self.add_audit(msg)
        self.players.get_player(source_id).coins += 3
        self.move_turn()
    
    def handle_assassinate(self, source_id, target_id, block_state_resolved = False):
        source_name = self.players.get_player_name(source_id)
        target= self.players.get_player(target_id)
        if block_state_resolved:
            msg = f"{source_name} assassinates {target.name}."
            self.add_audit(msg)
            self.deactivate_states()
            self.activate_lose_influence_state(target, False)
        else:
            msg = f"{source_name} is attempting to assassinate {target.name}."
            self.add_audit(msg)
            self.deactivate_states()
            self.activate_block_state(5, source_id, target_id)
    
    def handle_exchange(self, source_id):
        name = self.players.get_player_name(source_id)
        msg = f"{name} begins their exchange with the court deck."
        self.add_audit(msg)
        player = self.players.get_player(source_id)
        self.deactivate_states()
        self.activate_exchange_state(player)
        cards = [card.to_dict(False) for card in self.exchange_state.cards]
        self.socket.emit('update_exchange_cards', cards, room=player.token)
    
    def handle_steal(self, source_id, target_id, block_state_resolved = False):
        source_name = self.players.get_player_name(source_id)
        target_name = self.players.get_player_name(target_id)
        if block_state_resolved:
            coins_stolen = min(2, self.players.get_player(target_id).coins)
            msg = f"{source_name} steals {coins_stolen} coins from {target_name}."
            self.add_audit(msg)
            self.players.get_player(source_id).coins += coins_stolen
            self.players.get_player(target_id).coins -= coins_stolen
            self.move_turn()
        else:
            msg = f"{source_name} is attempting to steal from {target_name}."
            self.add_audit(msg)
            self.deactivate_states()
            self.activate_block_state(7, source_id, target_id)
    
    def handle_resolve_exchange(self, player_id, selected_card_ids: list[int]):
        self.verify_one_active_state()
        player = self.players.get_player(player_id)
        selection_count = self.exchange_state.expected_exchange_count
        if selection_count != len(selected_card_ids):
            raise CoupException('Player selected wrong number of cards in Exchange')
        
        active_player_cards = [card for card in player.cards if not card.revealed]
        exchange_cards = self.exchange_state.cards
        total_cards = active_player_cards + exchange_cards

        selected_cards = []

        # Return unselected cards back to the deck.
        for card in total_cards:
            if card.id in selected_card_ids:
                selected_cards.append(card)
            else:
                self.deck.append(card)

        old_revealed_cards = [card for card in player.cards if card.revealed]
        player.cards = selected_cards + old_revealed_cards

        name = self.players.get_player_name(player_id)
        msg = f"{name} completed their exchange with the court deck."
        self.add_audit(msg)

        cards = [card.to_dict(False) for card in player.cards]
        self.move_turn()
        self.socket.emit('set_cards', cards, room=player.token)

    def move_turn(self):
        self.verify_one_active_state()
        active_id = None
        for player in self.players.get_players():
            if player.is_turn:
                if active_id:
                    raise CoupException("More than 1 player's turn at a time")
                active_id = player.id
                player.is_turn = False
        if not active_id:
            raise CoupException("No active player")
        current_player_index = self.turn_order_ids.index(active_id)

        # Make sure the next player set is not lost
        looked_at = 0
        next_player_set = False
        look_index = (current_player_index + 1) % len(self.turn_order_ids)
        next_player = None
        while looked_at < len(self.players.get_players()) and not next_player_set:
            next_player_id = self.turn_order_ids[look_index]
            if not self.players.has_player(next_player_id):
                raise CoupException("Next player Id not found")
            if not self.players.get_player(next_player_id).lost:
                next_player_set = True
                next_player = self.players.get_player(next_player_id)
                next_player.is_turn = True
            look_index = (look_index + 1) % len(self.turn_order_ids)
            looked_at += 1
        if not next_player_set:
            raise CoupException("Next player Id not found")
        
        next_player_name = self.players.get_player_name(next_player.id)
        msg = f"Moving to {next_player_name}'s turn."
        self.add_audit(msg)
        self.reset_states()
        self.reset_timer()

    def reset_states(self):
        self.block_state = BlockState()
        self.challenge_state = ChallengeState()
        self.lose_influence_state = LoseInfluenceState()
        self.reveal_card_state = RevealCardState()
        self.exchange_state = ExchangeState()
        self.unresolved_action = UnresolvedAction()

    # There should only be one active state at a time.
    def verify_one_active_state(self):
        active_state_count = 0
        active_state_count += 1 if self.block_state.active else 0
        active_state_count += 1 if self.challenge_state.active else 0
        active_state_count += 1 if self.lose_influence_state.active else 0
        active_state_count += 1 if self.reveal_card_state.active else 0
        active_state_count += 1 if self.exchange_state.active else 0
        if active_state_count > 1:
            raise CoupException(f'Too many active states. Counted {active_state_count}.')

    def add_message(self, player_id, message):
        player_name = self.players.get_player_name(player_id)
        return self.chat_log.add_message(player_name, message)
    
    def get_messages(self):
        return self.chat_log.get_messages()

    def add_audit(self, audit):
        self.audit.add_audit(audit)

    def deactivate_states(self):
        self.challenge_state.deactivate()
        self.block_state.deactivate()
        self.exchange_state.deactivate()
        self.lose_influence_state.deactivate()
        self.reveal_card_state.deactivate()

    def get_player(self, player_id):
        return self.players.get_player(player_id)
    
    def get_players(self):
        return self.players.get_players()
    
    def activate_challenge_state(self, card_claimed_id, action_id, source_id, from_block, target_id):
        self.deactivate_states()
        self.reset_timer()
        self.challenge_state.activate(card_claimed_id, action_id, source_id, from_block, self.players, target_id)

    def activate_block_state(self, action_id, source_id, target_id):
        self.deactivate_states()
        self.reset_timer()
        self.block_state.activate(action_id, source_id, self.players, target_id)

    def activate_lose_influence_state(self, player, from_reveal_state):
        self.deactivate_states()
        self.reset_timer()
        self.lose_influence_state.activate(player, from_reveal_state)

    def activate_reveal_card_state(self, revealer_id, challenger_id):
        self.deactivate_states()
        self.reset_timer()
        self.reveal_card_state.activate(revealer_id, challenger_id)
    
    def activate_exchange_state(self, player):
        self.deactivate_states()
        self.reset_timer()
        self.exchange_state.activate(player, self.deck)

    def current_player_turn(self) -> Player:
        for player in self.players.get_players():
            if player.is_turn:
                return player
        raise CoupException(f'No players turn for {self.name} game')
    
    def reset_timer(self):
        if self.turn_timer_enabled:
            self.timer.reset()

    def stop_timer(self):
        if self.turn_timer_enabled:
            self.timer.stop()

    def emit_game_state(self):
        game_state = self.get_game_state()
        self.socket.emit('game_state_update', game_state, room=self.id)