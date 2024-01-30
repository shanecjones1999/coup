from typing import Dict
from server.Game.Player import Player

class Players:
    def __init__(self, use_token=True):
        self.players: Dict[str, Player] = {}
        self.use_token = use_token

    def add_player(self, player: Player):
        lookup_value = player.token if self.use_token else player.id
        if lookup_value not in self.players:
            self.players[lookup_value] = player

    def remove_player(self, id):
        if id not in self.players:
            raise Exception('Trying to remove player id that does not exist')
        return self.players.pop(id)
        
    def get_player(self, id):
        # TODO btr logic, used for INVALID NAME BUG
        # if token not in self.players:
        #     raise Exception('Trying to find player id that does not exist')
        return self.players.get(id)
    
    def get_player_name(self, id):
        return self.players.get(id).name
    
    def get_players(self):
        return self.players.values()
    
    def has_player(self, id):
        return id in self.players
    
    def player_count(self):
        return len(self.players)