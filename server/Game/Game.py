from server.Game.Deck import Deck
from server.Game.BlockState import BlockState
from server.Game.ChallengeState import ChallengeState
from server.Game.LoseInfluenceState import LoseInfluenceState
from server.Game.RevealCardState import RevealCardState
from server.Game.Action import Action
from server.Game.ExchangeState import ExchangeState
from server.Game.UnresolvedAction import UnresolvedAction
from server.Game.Player import Player
from server.ChatLog import ChatLog
from server.Game.Log import Log
from server.Players import Players
import random
import string

# Action attributes: (name, ID, card claimed, cards blocking, cost)
actions_dict = {
    1: Action('Income', 1, None, False, [], 0),
    2: Action('Foreign Aid', 2, None, False, [1], 0),
    3: Action('Coup', 3, None, False, [], 7),
    4: Action('Tax', 4, 1, True, [], 0),
    5: Action('Assassinate', 5, 2, True, [5], 3),
    6: Action('Exchange', 6, 4, True, [], 0),
    7: Action('Steal', 7, 3, True, [3, 4], 0),
}

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
        self.log = Log()
        self.socket = socket

    def start(self):
        if not self.players:
            raise Exception('Trying to start game without any players')
        self.deck = Deck()
        self.reset_states()
        self.initialize_players()
        self.turn_order_ids = [player.id for player in self.players.get_players()]
        first_player = self.turn_order_ids[0]
        self.players.get_player(first_player).is_turn = True
        self.block_state.player_ids = list(self.players.get_players())
        self.challenge_state.player_ids = list(self.players.get_players())
        self.started = True

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
            'timeLeft': self.time_left,
            'blockState': block_state,
            'challengeState': challenge_state,
            'loseInfluenceState': lose_influence_state,
            'revealCardState': reveal_card_state,
            'exchangeState': exchange_state,
            'over': self.over,
            'gameLogs': self.log.get_logs(),
            'chatLog': self.get_messages(),
        }
    
    def handle_action(self, action_id, source_id, target_id):
        action = actions_dict[action_id]
        player = self.players.get_player(source_id)
        if action.cost > player.coins:
            return 'You need more coins to take this action.'
        else:
            player.coins -= action.cost
        
        self.unresolved_action.set(action_id, source_id, target_id)

        if action.challengable:
            self.challenge_state.activate(action.card_id, action.id, source_id, False, self.players, target_id)
        else:
            self.resolve_action(action_id, source_id, target_id)
    
    def handle_lose_influence(self, player_id, card_id):
        player = self.players.get_player(player_id)
        card = player.lose_influence(card_id)
        player_name = self.players.get_player_name(player_id)
        msg = f"{player_name} loses their {card.name} influence."
        self.add_log(msg)
        self.over = self.check_game_over()

        action_id = self.unresolved_action.action_id
        source_id = self.unresolved_action.source_id
        target_id = self.unresolved_action.target_id

        # if not coming from a reveal state, then move to next turn
        if not self.lose_influence_state.from_reveal_state:
            self.move_turn()
            return
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
                self.challenge_state.reset()

                # if the player lost in the challenge state, we need to take the necessary action.
                if self.players.has_player(target_id) and self.players.get_player(target_id).lost:
                    if action_id == 7:
                        self.handle_steal(source_id, target_id, True)
                    else:
                        self.move_turn()
                    return

                # resolve the action (before block if applicable)
                self.resolve_action(action_id, source_id, target_id)

    def check_game_over(self):
        players_left = 0
        for player in self.players.get_players():
            if not player.lost:
                players_left += 1
        if players_left >= 2:
            return False
        elif players_left == 1:
            self.over = True
            return True
        else:
            raise Exception("No players left")

    # first resolution of action
    def resolve_action(self, action_id, source_id, target_id):
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
            raise Exception("Invalid action taken:", action_id)

    def handle_pass_challenge(self, player_id):
        self.challenge_state.pending_player_ids.remove(player_id)
        if not self.challenge_state.pending_player_ids:
            action_id = self.challenge_state.action_id
            source_id = self.challenge_state.source_id
            target_id = self.challenge_state.target_id
            self.challenge_state.active = False
            # Move to block state if the action is blockable
            # Do we want this?
            block_state_already = self.block_state.action_id is not None
            if not block_state_already and actions_dict[self.challenge_state.action_id].block_card_ids:
                # self.challenge_state.active = False
                self.block_state.activate(action_id, source_id, self.players, target_id)
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

                # TODO WEBSOCKET EXCHANGE
                self.resolve_action(action_id, source_id, target_id)

    def handle_pass_block(self, player_id):
        self.block_state.pending_player_ids.remove(player_id)
        if not self.block_state.pending_player_ids:
            self.unresolved_action.successfully_blocked = True
            action_id = self.block_state.action_id
            source_id = self.block_state.source_id
            target_id = self.block_state.target_id
            self.block_state.active = False
            self.resolve_action_from_block(action_id, source_id, target_id)
    
    # TODO FIX THIS
    def resolve_action_from_block(self, action_id, source_id, target_id):
        if action_id == 2:
            self.handle_foreign_aid(source_id, True)
        elif action_id == 5:
            self.handle_assassinate(source_id, target_id, True)
        elif action_id == 7:
            self.handle_steal(source_id, target_id, True)
        elif action_id in [1, 3, 4, 6]:
            raise Exception("Should not reach resolve_action_from_block for action that cannot be blocked")
        else:
            raise Exception("Invalid action taken:", action_id)

    def handle_challenge(self, player_challenging_id):
        if self.challenge_state.active:
                self.challenge_state.active = False
        player_being_challenged_id = self.challenge_state.source_id
        self.reveal_card_state.activate(player_being_challenged_id, player_challenging_id)
        player_challenging_name = self.players.get_player_name(player_challenging_id)
        player_being_challenged_name = self.players.get_player_name(player_being_challenged_id)
        msg = f"{player_challenging_name} challenges {player_being_challenged_name}."

    def handle_block(self, block_card_id, blocked_action_id, blocker_id, target_id):
        # if we were in a block state, it should no longer be active
        if self.block_state.active:
            self.block_state.active = False
        # All blocks can be challenged
        self.challenge_state.activate(block_card_id, blocked_action_id, blocker_id, True, self.players, target_id)

    # return the player with updated cards if we find, otherwise we return None
    def handle_revealed_card(self, player_id, card_id):
        # We should only ever get here from a challenge state
        player = self.players.get_player(player_id)
        card = next((card for card in player.cards if card.id == card_id), None)

        if not card or card.revealed:
            raise Exception('Player did not reveal a card they have or they revealed a previously revealed card')
        name = self.players.get_player_name(player_id)
        msg = f"{name} reveals {card.name}."
        self.add_log(msg)

        is_correct_card = card.type_id == self.challenge_state.card_claimed.type_id
        # Challenger loses card
        if is_correct_card:
            player = self.players.get_player(self.challenge_state.source_id)
            self.replace_card_for_player(player, card.id)

            msg = f"{name} draws a new card."
            self.add_log(msg)

            update_card_player = player

            # If we were in a block state, mark the unresolved action successful block as True
            if self.block_state.action_id is not None:
                self.unresolved_action.successfully_blocked = True
            challenger_id = self.reveal_card_state.challenger_id
            # Reset reveal_card_state
            if self.reveal_card_state.active:
                self.reveal_card_state.active = False
            # The rest of the logic will be handled in handle_lose_influence_state from here
            self.reveal_card_state.active = False
            self.lose_influence_state.activate(challenger_id, True)
            return update_card_player
        # Player challenged loses card
        else:
            player = self.players.get_player(player_id)
            player.lose_influence(card_id)
            cards = [card.to_dict(False) for card in player.cards]
            self.socket.emit('set_cards', cards, room=player.token)
            # Here we need to update the player cards status on the frontend
            # Repro: block as duke, challenge, dont reveal duke - card should say 'revealed'
            over = self.check_game_over()

            # Now we need to know if this a successful challenge on a block, or a successful challenge on
            # an initial action

            challenge_on_block = (self.block_state.source_id != None)
            if challenge_on_block:
                # Block becomes void, original action goes through
                self.resolve_action_from_block(self.block_state.action_id,
                                               self.unresolved_action.source_id,
                                               self.unresolved_action.target_id)
            else:
                # Original action becomes void, turn ends
                self.move_turn()

    def replace_card_for_player(self, player: Player, card_id: int):
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
            raise Exception('Invalid card index')

    def handle_income(self, source_id):
        self.players.get_player(source_id).coins += 1
        name = self.players.get_player_name(source_id)
        msg = f"{name} incomes."
        self.add_log(msg)
        self.move_turn()

    def handle_foreign_aid(self, source_id, block_state_resolved = False):
        name = self.players.get_player_name(source_id)
        if block_state_resolved:
            self.players.get_player(source_id).coins += 2
            msg = f"{name} is attempting to foreign aid."
            self.add_log(msg)
            self.move_turn()
        else:
            msg = f"{name} foreign aids."
            self.add_log(msg)
            self.block_state.activate(2, source_id, self.players, None)

    def handle_coup(self, source_id, target_id):
        source_name = self.players.get_player_name(source_id)
        target_name = self.players.get_player_name(target_id)
        msg = f"{source_name} coups {target_name}."
        self.add_log(msg)
        target_player = self.players.get_player(target_id)
        self.lose_influence_state.activate(target_player.id, False)
    
    def handle_tax(self, source_id):
        name = self.players.get_player_name(source_id)
        msg = f"{name} taxes."
        self.add_log(msg)
        self.players.get_player(source_id).coins += 3
        self.move_turn()
    
    def handle_assassinate(self, source_id, target_id, block_state_resolved = False):
        source_name = self.players.get_player_name(source_id)
        target_name = self.players.get_player_name(target_id)
        if block_state_resolved:
            msg = f"{source_name} assassinates {target_name}."
            self.add_log(msg)
            self.lose_influence_state.activate(target_id, False)
        else:
            msg = f"{source_name} is attempting to assassinate {target_name}."
            self.add_log(msg)
            self.block_state.activate(5, source_id, self.players, target_id)
    
    def handle_exchange(self, source_id):
        name = self.players.get_player_name(source_id)
        msg = f"{name} begins their exchange with the court deck."
        self.add_log(msg)
        player = self.players.get_player(source_id)
        self.exchange_state.activate(player, self.deck)
        cards = [card.to_dict(False) for card in self.exchange_state.cards]
        self.socket.emit('update_exchange_cards', cards, room=player.token)
    
    def handle_steal(self, source_id, target_id, block_state_resolved = False):
        source_name = self.players.get_player_name(source_id)
        target_name = self.players.get_player_name(target_id)
        if block_state_resolved:
            coins_stolen = min(2, self.players.get_player(target_id).coins)
            msg = f"{source_name} steals {coins_stolen} coins from {target_name}."
            self.add_log(msg)
            self.players.get_player(source_id).coins += coins_stolen
            self.players.get_player(target_id).coins -= coins_stolen
            self.move_turn()
        else:
            msg = f"{source_name} is attempting to steal from {target_name}."
            self.add_log(msg)
            self.block_state.activate(7, source_id, self.players, target_id)
    
    def handle_resolve_exchange(self, player_id, selected_card_ids: list[int]):
        player = self.players.get_player(player_id)
        selection_count = self.exchange_state.expected_exchange_count
        if selection_count != len(selected_card_ids):
            raise Exception('Player selected wrong number of cards in Exchange')
        
        active_player_card_ids = [card.id for card in player.cards if not card.revealed]
        total_ids = selected_card_ids + active_player_card_ids
        for id in selected_card_ids:
            total_ids.remove(id)

        active_player_cards = [card for card in player.cards if not card.revealed]
        exchange_cards = self.exchange_state.cards
        total_cards = active_player_cards + exchange_cards
        for id in total_ids:
            for card in total_cards:
                if id == card.id:
                    self.deck.append(card)

        new_cards = [card for card in total_cards if card.id in selected_card_ids]
        old_revealed_cards = [card for card in player.cards if card.revealed]
        player.cards = new_cards + old_revealed_cards

        name = self.players.get_player_name(player_id)
        msg = f"{name} completed their exchange with the court deck."
        self.add_log(msg)

        # can't move turn here, need to move turn in app.py after emit
        #self.move_turn()

    def move_turn(self):
        # TODO: MOVE TO next player that IS NOT LOST
        active_id = None
        for player in self.players.get_players():
            if player.is_turn:
                if active_id:
                    raise Exception("More than 1 player's turn at a time")
                active_id = player.id
                player.is_turn = False
        if not active_id:
            raise Exception("No active player")
        current_player_index = self.turn_order_ids.index(active_id)

        # Make sure the next player set is not lost
        looked_at = 0
        next_player_set = False
        look_index = (current_player_index + 1) % len(self.turn_order_ids)
        next_player = None
        while looked_at < len(self.players.get_players()) and not next_player_set:
            next_player_id = self.turn_order_ids[look_index]
            if not self.players.has_player(next_player_id):
                raise Exception("Next player Id not found")
            if not self.players.get_player(next_player_id).lost:
                next_player_set = True
                next_player = self.players.get_player(next_player_id)
                next_player.is_turn = True
            look_index = (look_index + 1) % len(self.turn_order_ids)
            looked_at += 1
        if not next_player_set:
            raise Exception("Next player Id not found")
        
        next_player_name = self.players.get_player_name(next_player.id)
        msg = f"Moving to {next_player_name}'s turn."
        self.add_log(msg)

        self.reset_states()

    def get_player_turn(self):
        players = self.players.get_players()
        for player in players:
            if player.is_turn:
                return player.id

    def reset_states(self):
        self.block_state = BlockState()
        self.challenge_state = ChallengeState()
        self.lose_influence_state = LoseInfluenceState()
        self.reveal_card_state = RevealCardState()
        self.exchange_state = ExchangeState()
        self.unresolved_action = UnresolvedAction()

    def add_message(self, player_id, message):
        player_name = self.players.get_player_name(player_id)
        return self.chat_log.add_message(player_name, message)
    
    def get_messages(self):
        return self.chat_log.get_messages()
    
    def add_log(self, msg):
        self.log.add_log(msg)