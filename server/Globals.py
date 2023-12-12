from server.CreateApp import socketio
from server.Lobby import Lobby
from server.Games import Games
from server.Players import Players

lobby = Lobby() # token -> Player
players = Players() # token -> Player
games = Games() # game_id -> Game

def remove_player_from_global(token):
    resGame = None
    resName = None
    resId = None
    if lobby.has_player(token):
        lobby.remove_player(token)
    if players.has_player(token):
        player = players.get_player(token)
        for game in games.get_games():
            if game.players.has_player(player.id):
                game.players.remove_player(player.id)
                resGame = game
        player = players.remove_player(token)
        resName = player.name
        resId = player.id
    return resName, resGame, resId