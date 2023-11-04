import random
import string
from Deck import Deck
import asyncio
import time
from BlockState import BlockState
from ChallengeState import ChallengeState
from LoseInfluenceState import LoseInfluenceState

actions = [
    {'name': 'Income', id: 0, 'isChallengeable': False, 'isBlockable': False},
    {'name': 'Foreign Aid', id: 1, 'isChallengeable': False, 'isBlockable': True}, 
    {'name': 'Coup', id: 2, 'isChallengeable': False, 'isBlockable': False}, 
    {'name': 'Tax', id: 3, 'isChallengeable': True, 'isBlockable': False},
    {'name': 'Assassinate', id: 4, 'isChallengeable': True, 'isBlockable': True}, 
    {'name': 'Exchange', id: 5, 'isChallengeable': True, 'isBlockable': False}, 
    {'name': 'Steal', id: 6, 'isChallengeable': True, 'isBlockable': True}
]

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
        return {
            'gameName': self.name,
            'playerData': player_data, 
            'isStarted': self.is_started,
            'timeLeft': self.time_left,
            'blockState': block_state,
            'challengeState': challenge_state,
            'loseInfluenceState': lose_influence_state,
        }
    
    def handle_income(self, source_id):
        self.players[source_id].coins += 1
        self.move_turn()

    def handle_foreign_aid(self, source_id):
        self.block_state.activate_block_state(1, source_id)

    def resolve_block_state(self):
        if self.block_state.action_id == 1:
            self.execute_foreign_aid()
        self.block_state.reset()

    def resolve_challenge_state(self):
        # See if we are in foreign aid block state
        if self.block_state.active and self.block_state.action_id == 1:
            self.block_state.reset()
            self.move_turn()
        self.challenge_state.reset()

    def execute_foreign_aid(self):
        source_id = self.block_state.source_id
        self.players[source_id].coins += 2
        self.move_turn()

    def handle_coup(self, source_id, target_id):
        return
    
    def handle_tax(self, source_id):
        return
    
    def handle_assassinate(self, source_id, target_id):
        return
    
    def handle_exchange(self, source_id):
        return
    
    def handle_steal(self, source_id, target_id):
        return

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

    def get_player_turn(self):
        players = self.players.values()
        for player in players:
            if player.is_turn:
                return player.id

            
    def start_timer(self):
         for _ in range(self.turn_length, 0, -1):
            self.time_left -= 1
            time.sleep(1)
