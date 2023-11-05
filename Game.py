import random
import string
from Deck import Deck, cards, cards_dict
import asyncio
import time
from BlockState import BlockState
from ChallengeState import ChallengeState
from LoseInfluenceState import LoseInfluenceState
from RevealCardState import RevealCardState
from Action import Action
from ExchangeState import ExchangeState

actions = [
    {'name': 'Income', id: 0, 'isChallengeable': False, 'isBlockable': False},
    {'name': 'Foreign Aid', id: 1, 'isChallengeable': False, 'isBlockable': True}, 
    {'name': 'Coup', id: 2, 'isChallengeable': False, 'isBlockable': False}, 
    {'name': 'Tax', id: 3, 'isChallengeable': True, 'isBlockable': False},
    {'name': 'Assassinate', id: 4, 'isChallengeable': True, 'isBlockable': True}, 
    {'name': 'Exchange', id: 5, 'isChallengeable': True, 'isBlockable': False}, 
    {'name': 'Steal', id: 6, 'isChallengeable': True, 'isBlockable': True}
]

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
        self.is_started = False
        self.deck = Deck()
        self.turn_length = 30
        self.time_left = 30
        self.block_state = BlockState()
        self.challenge_state = ChallengeState()
        self.lose_influence_state = LoseInfluenceState()
        self.reveal_card_state = RevealCardState()
        self.exchange_state = ExchangeState()

    def start_game(self):
        if self.is_started:
            raise Exception('Game already started')
        if not self.players:
            raise Exception('Trying to start game without any players')
        self.initialize_players()
        self.turn_order_ids = list(self.players.keys())
        first_player = self.turn_order_ids[0]
        self.players[first_player].is_turn = True
        self.block_state.player_ids = list(self.players.keys())
        self.challenge_state.player_ids = list(self.players.keys())
        self.is_started = True

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
            'isStarted': self.is_started,
            'timeLeft': self.time_left,
            'blockState': block_state,
            'challengeState': challenge_state,
            'loseInfluenceState': lose_influence_state,
            'revealCardState': reveal_card_state,
            'exchangeState': exchange_state,
        }
    
    def handle_action(self, action_id, source_id, target_id):
        action = actions_dict[action_id]
        player = self.players[source_id]
        if action.cost > player.coins:
            # TODO update this?
            return
        if action.challengable:
            # go into challenge state
            self.challenge_state.activate_challenge_state(action.card_id, action.id, source_id, False, target_id)
        elif action.block_card_ids:
            # go into block state
            self.block_state.activate_block_state(action.id, source_id, target_id)
        else:
            # exceute the action (will be either income or coup)
            self.resolve_action(action_id, source_id, target_id)

    def handle_pass_challenge(self, player_id):
        self.challenge_state.pending_player_ids.remove(player_id)
        if not self.challenge_state.pending_player_ids:
            action_id = self.challenge_state.action_id
            source_id = self.challenge_state.source_id
            target_id = self.challenge_state.target_id
            # Move to block state if the action is blockable
            if actions_dict[self.challenge_state.action_id].block_card_ids:
                self.block_state.activate_block_state(action_id, source_id, target_id)
            # otherwise resolve the action
            else:
                action_id = self.challenge_state.action_id
                source_id = self.challenge_state.source_id
                target_id = self.challenge_state.target_id
                self.resolve_action(action_id, source_id, target_id)

    def handle_pass_block(self, player_id):
        self.block_state.pending_player_ids.remove(player_id)
        if not self.block_state.pending_player_ids:
            action_id = self.challenge_state.action_id
            source_id = self.challenge_state.source_id
            target_id = self.challenge_state.target_id
            self.resolve_action(action_id, source_id, target_id)
    
    def resolve_action(self, action_id, source_id, target_id):
        if action_id == 1:
            self.handle_income(source_id)
        elif action_id == 2:
            self.handle_foreign_aid(source_id)
        elif action_id == 3:
            self.handle_coup(source_id, target_id)
        elif action_id == 4:
            self.handle_tax(source_id)
        elif action_id == 5:
            self.handle_assassinate(source_id, target_id)
        elif action_id == 6:
            self.handle_exchange(source_id)
        elif action_id == 7:
            self.handle_steal(source_id, target_id)
        else:
            raise Exception("Invalid action taken:", action_id)
    
    def handle_income(self, source_id):
        self.players[source_id].coins += 1
        self.move_turn()

    def handle_foreign_aid(self, source_id):
        self.players[source_id].coins += 2
        self.move_turn()

    def resolve_block_state(self):
        if self.block_state.action_id == 1:
            self.execute_foreign_aid()

    def resolve_challenge_state(self):
        # See if we are in foreign aid block state
        if self.block_state.active and self.block_state.action_id == 1:
            self.move_turn()

    def handle_challenge(self, player_challenging_id):
        if self.challenge_state.active:
                self.challenge_state.active = False
        player_being_challenged_id = self.challenge_state.source_id
        self.reveal_card_state.activate_reveal_card_state(player_being_challenged_id, player_challenging_id)

    def handle_block(self, block_card_id, blocked_action_id, blocker_id, target_id):
        # if we were in a block state, it should no longer be active
        if self.block_state.active:
            self.block_state.active = False
        self.challenge_state.activate_challenge_state(block_card_id, blocked_action_id, blocker_id, True, target_id)

    def handle_revealed_card(self, player_id, card_id):
        is_correct_card = card_id == self.challenge_state.card_claimed.id
        # Challenger loses card
        if is_correct_card:
            challenger_id = self.reveal_card_state.challenger_id
            challenger = self.players.get(challenger_id)
            if self.reveal_card_state.active:
                self.reveal_card_state.active = False
            player_lost = self.lose_influence_state.activate_lose_influence_state(challenger)
            if player_lost:
                self.move_turn()
        # Player challenged loses card
        else:
            player = self.players.get(player_id)
            player.lose_influence(card_id)
            self.move_turn()
    
    def execute_foreign_aid(self):
        source_id = self.block_state.source_id
        self.players[source_id].coins += 2
        self.move_turn()

    def handle_coup(self, source_id, target_id):
        self.players[source_id].coins -= 7
        self.lose_influence_state.activate_lose_influence_state(target_id)
    
    def handle_tax(self, source_id):
        self.players[source_id].coins += 3
        self.move_turn()
    
    def handle_assassinate(self, source_id, target_id, from_challenge_state):
        self.block_state.activate_block_state(5, source_id, target_id)
    
    def handle_exchange(self, source_id):
        self.exchange_state.activate_exchange_state(source_id, self.deck)
    
    def handle_steal(self, source_id, target_id):
        coins_stolen = min(2, self.players[target_id].coins)
        self.players[source_id].coins += coins_stolen
        self.players[target_id].coins -= coins_stolen
        self.move_turn()
    
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
        next_player_index = (current_player_index + 1) % len(self.turn_order_ids)
        next_player_id = self.turn_order_ids[next_player_index]
        if next_player_id not in self.players:
            raise Exception("Next player Id not found")
        self.players[next_player_id].is_turn = True
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
            
    def start_timer(self):
         for _ in range(self.turn_length, 0, -1):
            self.time_left -= 1
            time.sleep(1)
