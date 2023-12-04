from typing import Dict
from server.Game.Game import Game
from server.CreateApp import socketio

class Games:
    def __init__(self):
        self.games:Dict[str, Game] = {}
        appleGame = Game('Apple Game', 'apple', 4, True, 30, socketio)
        bananaGame = Game('Banana Game', 'banana', 5, False, 40, socketio)
        self.games['apple'] = appleGame
        self.games['banana'] = bananaGame
    
    def add_game(self, game):
        if game.id in self.games:
            raise Exception('Trying to add game with duplicate id')
        self.games[game.id] = game

    def remove_game(self, game_id):
        if game_id not in self.games:
            raise Exception('Trying to remove game_id that does not exist')
        self.games.pop(game_id)

    def get_games(self):
        return self.games.values()
    
    def has_game(self, game_id):
        return game_id in self.games
    
    def get_game(self, game_id):
        if game_id not in self.games:
            raise Exception('Trying to find game with game_id that does not exist')
        return self.games[game_id]