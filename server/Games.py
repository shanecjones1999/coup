from typing import Dict
from server.Game.Game import Game

class Games:
    def __init__(self):
        self.games:Dict[str, Game] = {}
    
    def add_game(self, game):
        if game.id in self.games:
            raise Exception('Trying to add game with duplicate id')
        self.games[game.id] = game

    def remove_game(self, game_id):
        if game_id not in self.games:
            raise Exception('Trying to remove game_id that does not exist')
        self.games.pop(game_id)