from server.Game.Game import Game
from server.CreateApp import socketio

class Games:
    def __init__(self):
        self.games: dict[str, Game] = {}
        appleGame = Game('Apple Game', 4, True, 30, socketio)
        bananaGame = Game('Banana Game', 5, False, 40, socketio)
        self.add_game(appleGame)
        self.add_game(bananaGame)
    
    def add_game(self, game: Game):
        if game.id in self.games:
            raise Exception('Trying to add game with duplicate id')
        self.games[game.id] = game

    def remove_game(self, game_id: str):
        if game_id not in self.games:
            raise Exception('Trying to remove game_id that does not exist')
        self.games.pop(game_id)

    def get_games(self):
        return self.games.values()
    
    def get_games_json(self) -> list[Game]:
        game_list = []
        for game in self.get_games():
            data = {
                'name': game.name,
                'id': game.id,
                'isStarted': game.started,
                'numPlayers': len(game.players.get_players()),
                'totalPlayers': game.num_players,
            }
            game_list.append(data)
        return game_list
    
    def has_game(self, game_id):
        return game_id in self.games
    
    def get_game(self, game_id):
        if game_id not in self.games:
            raise Exception('Trying to find game with game_id that does not exist')
        return self.games[game_id]
    
    def is_valid_game_name(self, name: str) -> bool:
        if not name:
            return False
        for game in self.get_games():
            if game.name.upper() == name.upper():
                return False
        return True
    
    def remove_player(self, player_id):
        for game in self.games.values():
            if game.players.has_player(player_id):
                game.players.remove_player(player_id)