# from server.CreateApp import socketio
# from server.Game.Game import Game
from server.Globals import *

def validate_game_name(name):
    if not name:
        return False
    for game in games.get_games():
        if game.name.upper() == name.upper():
            return False
    return True

def get_player(token):
    global global_players
    if token in global_players:
        return global_players.get(token)


def get_players_in_global():
    global global_players
    return global_players.values()

# Remove the player from every possible instance.
def remove_player_from_global(token):
    resGame = None
    resName = None
    resId = None
    if lobby.has_player(token):
        lobby.remove_player(token)
    global global_players
    if token in global_players:
        player = global_players.get(token)
        for game in games.get_games():
            if player.id in game.players:
                tmp = game.players
                tmp.pop(player.id)
                game.players = tmp
                resGame = game
        tmp = global_players
        player = tmp.pop(token)
        global_players = tmp
        resName = player.name
        resId = player.id
    return resName, resGame, resId

def validate_game(game_id):
    game = games.get_game(game_id)
    if not game.started:
        raise Exception('Game not started')
    if not game.players:
        raise Exception('No players in game')
    return game

def validate_turn(player_id, game):
    if not game:
        raise Exception("No game found")
    if player_id != game.get_player_turn():
        raise Exception("Player not in game")