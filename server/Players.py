from typing import Dict
from server.Game.Player import Player

class Players:
    def __init__(self):
        self.players: Dict[str, Player] = {}

    def add_player(self, player: Player):
        if player.token in self.players:
            raise Exception('Trying to add duplicate player id')
        self.players[player.token] = player

    def remove_player(self, token):
        if token not in self.players:
            raise Exception('Trying to remove player id that does not exist')
        self.players.pop(token)
        
    def get_player(self, token):
        if token not in self.players:
            raise Exception('Trying to find player id that does not exist')
        return self.players[token]