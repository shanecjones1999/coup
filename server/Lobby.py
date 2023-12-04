from typing import Dict
from server.Game.Player import Player

class Lobby:
    def __init__(self):
        # Stores tokens -> players.
        self.players: Dict[str, Player] = {}

    def add_player(self, player: Player):
        if player.token in self.players:
            raise Exception('Trying to add player with duplicate id')
        self.players[player.token] = player

    def remove_player(self, token):
        if token not in self.players:
            raise Exception('Trying to remove token that does not exist')
        player = self.players.pop(token)
        return player.name

    def get_players(self):
        return self.players.values()
    
    def has_player(self, token: str) -> bool:
        return token in self.players

    # def get_player_names(self):
    #     return set([player.name for player in self.players])