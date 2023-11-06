import random
import string
from Deck import Deck, cards_dict
import asyncio
import time
from BlockState import BlockState
from ChallengeState import ChallengeState
from LoseInfluenceState import LoseInfluenceState
from RevealCardState import RevealCardState
from Action import Action
from ExchangeState import ExchangeState
from UnresolvedAction import UnresolvedAction

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
    def __init__(self, name, id):
        self.name = name
        self.players = {}
        self.turn_order_ids = []
        self.id = id
        self.started = False
        self.over = False
        self.deck = Deck()
        self.turn_length = 30
        self.time_left = 30
        self.block_state = BlockState()
        self.challenge_state = ChallengeState()
        self.lose_influence_state = LoseInfluenceState()
        self.reveal_card_state = RevealCardState()
        self.exchange_state = ExchangeState()
        self.unresolved_action = UnresolvedAction()

    def start_game(self):
        if self.started:
            raise Exception('Game already started')
        if not self.players:
            raise Exception('Trying to start game without any players')
        self.initialize_players()
        self.turn_order_ids = list(self.players.keys())
        first_player = self.turn_order_ids[0]
        self.players[first_player].is_turn = True
        self.block_state.player_ids = list(self.players.keys())
        self.challenge_state.player_ids = list(self.players.keys())
        self.started = True

    def add_player(self, player):
        if player.id not in self.players:
            self.players[player.id] = player

    def initialize_players(self):
        for player in self.players.values():
            player.coins = 2
            player.cards = self.deck.draw(2)
    
    def get_player_data(self):
        player_data = []
        for player in self.players.values():
            data = player.to_dict()
            player_data.append(data)
        return player_data
    
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
        }
    
    def handle_action(self, action_id, source_id, target_id):
        action = actions_dict[action_id]
        player = self.players[source_id]
        if action.cost > player.coins:
            # TODO add front-end handling
            raise Exception("Player cannot pay for action")
        else:
            player.coins -= action.cost
        
        self.unresolved_action.set(action_id, source_id, target_id)

        # Note that, for actions that can be both challenged and blocked (assassinate and steal), we will need
        # additional logic
        if action.challengable:
            # go into challenge state
            self.challenge_state.activate_challenge_state(action.card_id, action.id, source_id, False, self.players.values(), target_id)
        else:
            self.resolve_action(action_id, source_id, target_id)
    
    def handle_lose_influence(self, player_id, card_id):
        player = self.players[player_id]
        player.lose_influence(card_id)

        self.over = self.check_game_over()

        action_id = self.unresolved_action.action_id
        source_id = self.unresolved_action.source_id
        target_id = self.unresolved_action.target_id
        successfully_blocked = self.unresolved_action.successfully_blocked
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
                # Reset challenge state as block may be challenged later in turn
                self.challenge_state.reset()
                # Resolve the action (before block if applicable)
                self.resolve_action(action_id, source_id, target_id)



    def check_game_over(self):
        players_left = 0
        for player in self.players.values():
            if not player.lost:
                players_left += 1
        if players_left >= 2:
            return False
        elif players_left == 1:
            self.over = True
            return True
        else:
            raise Exception("No players left")

    # First resolution of action
    def resolve_action(self, action_id, source_id, target_id):
        block_state_resolved = self.block_state.source_id is not None
        match action_id:
            case 1:
                self.handle_income(source_id)
            case 2:
                self.handle_foreign_aid(source_id, block_state_resolved)
            case 3:
                self.handle_coup(source_id, target_id)
            case 4:
                self.handle_tax(source_id)
            case 5:
                self.handle_assassinate(source_id, target_id, block_state_resolved)
            case 6:
                self.handle_exchange(source_id)
            case 7:
                self.handle_steal(source_id, target_id, block_state_resolved)
            case _:
                raise Exception("Invalid action taken:", action_id)

    def handle_pass_challenge(self, player_id):
        self.challenge_state.pending_player_ids.remove(player_id)
        if not self.challenge_state.pending_player_ids:
            action_id = self.challenge_state.action_id
            source_id = self.challenge_state.source_id
            target_id = self.challenge_state.target_id
            # Move to block state if the action is blockable
            # Do we want this?
            block_state_already = self.block_state.action_id is not None
            if not block_state_already and actions_dict[self.challenge_state.action_id].block_card_ids:
                self.block_state.activate_block_state(action_id, source_id, target_id)
            # otherwise resolve the action
            # What if you are challenging a block?
            else:
                action_id = self.challenge_state.action_id
                source_id = self.challenge_state.source_id
                target_id = self.challenge_state.target_id
                self.resolve_action(action_id, source_id, target_id)

    def handle_pass_block(self, player_id):
        self.block_state.pending_player_ids.remove(player_id)
        if not self.block_state.pending_player_ids:
            self.unresolved_action.successfully_blocked = True
            action_id = self.block_state.action_id
            source_id = self.block_state.source_id
            target_id = self.block_state.target_id
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
        self.reveal_card_state.activate_reveal_card_state(player_being_challenged_id, player_challenging_id)

    def handle_block(self, block_card_id, blocked_action_id, blocker_id, target_id):
        # if we were in a block state, it should no longer be active
        if self.block_state.active:
            self.block_state.active = False
        # All blocks can be challenged
        self.challenge_state.activate_challenge_state(block_card_id, blocked_action_id, blocker_id, True, self.players.values(), target_id)

    def handle_revealed_card(self, player_id, card_id):
        # We should only ever get here from a challenge state
        is_correct_card = card_id == self.challenge_state.card_claimed.id
        # Challenger loses card
        if is_correct_card:
            # TODO: add card draw
            # If we were in a block state, mark the unresolved action successful block as True
            if self.block_state.action_id is not None:
                self.unresolved_action.successfully_blocked = True
            challenger_id = self.reveal_card_state.challenger_id
            challenger = self.players.get(challenger_id)
            # Reset reveal_card_state
            if self.reveal_card_state.active:
                self.reveal_card_state.active = False
            # The rest of the logic will be handled in handle_lose_influence_state from here
            self.lose_influence_state.activate_lose_influence_state(challenger.id, True)
        # Player challenged loses card
        else:
            player = self.players.get(player_id)
            player.lose_influence(card_id)
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
            

    def handle_income(self, source_id):
        self.players[source_id].coins += 1
        self.move_turn()

    def handle_foreign_aid(self, source_id, block_state_resolved = False):
        if block_state_resolved:
            self.players[source_id].coins += 2
            self.move_turn()
        else:
            self.block_state.activate_block_state(2, source_id, self.players.values(), None)

    def handle_coup(self, source_id, target_id):
        target_player = self.players[target_id]
        self.lose_influence_state.activate_lose_influence_state(target_player.id, False)
    
    def handle_tax(self, source_id):
        self.players[source_id].coins += 3
        self.move_turn()
    
    def handle_assassinate(self, source_id, target_id, block_state_resolved = False):
        if block_state_resolved:
            self.lose_influence_state.activate_lose_influence_state(target_id, False)
        else:
            self.block_state.activate_block_state(5, source_id, target_id)
    
    def handle_exchange(self, source_id):
        self.exchange_state.activate_exchange_state(source_id, self.deck)
    
    def handle_steal(self, source_id, target_id, block_state_resolved = False):
        if block_state_resolved:
            coins_stolen = min(2, self.players[target_id].coins)
            self.players[source_id].coins += coins_stolen
            self.players[target_id].coins -= coins_stolen
            self.move_turn()
        else:
            self.block_state.activate_block_state(7, source_id, target_id)
    
    def handle_resolve_exchange(self, player_id, selected_card_ids):
        player = self.players[player_id]
        player_cards = [card.id for card in player.cards]
        total_ids = selected_card_ids + player_cards
        for id in selected_card_ids:
            total_ids.remove(id)
        for id in total_ids:
            self.deck.append(cards_dict[id])
        self.move_turn()

    def move_turn(self):
        # TODO: MOVE TO next player that IS NOT LOST
        active_id = None
        for id, player in self.players.items():
            if player.is_turn:
                if active_id:
                    raise Exception("More than 1 player's turn at a time")
                active_id = id
                player.is_turn = False
        if not active_id:
            raise Exception("No active player")
        current_player_index = self.turn_order_ids.index(active_id)

        # Make sure the next player set is not lost
        looked_at = 0
        next_player_set = False
        look_index = (current_player_index + 1) % len(self.turn_order_ids)
        while looked_at < len(self.players) and not next_player_set:
            next_player_id = self.turn_order_ids[look_index]
            if next_player_id not in self.players:
                raise Exception("Next player Id not found")
            if not self.players[next_player_id].lost:
                next_player_set = True
                self.players[next_player_id].is_turn = True
            look_index = (look_index + 1) % len(self.turn_order_ids)
            looked_at += 1
        if not next_player_set:
            raise Exception("Next player Id not found")
        # Reset states
        self.reset_states()

    def get_player_turn(self):
        players = self.players.values()
        for player in players:
            if player.is_turn:
                return player.id

    def reset_states(self):
        self.block_state.reset()
        self.challenge_state.reset()
        self.lose_influence_state.reset()
        self.reveal_card_state.reset()
        self.exchange_state.reset()
        self.unresolved_action.reset()
            
    def start_timer(self):
         for _ in range(self.turn_length, 0, -1):
            self.time_left -= 1
            time.sleep(1)
