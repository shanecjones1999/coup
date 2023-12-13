from server.Game.Player import Player
from server.Games import Games
from server.Players import Players

class Lobby:
    def __init__(self):
        self.players: Players = Players()
        self.games: Games = Games()

    def add_player(self, player: Player):
        self.players.add_player(player)

    def remove_player(self, token):
        self.players.remove_player(token)

    def get_players(self):
        return self.players.get_players()
    
    def has_player(self, token: str) -> bool:
        return self.players.has_player(token)
    
    def get_current_lobby_json(self) -> list[dict]:
        players = self.get_players()
        current_lobby = [player.to_dict() for player in players]
        return current_lobby