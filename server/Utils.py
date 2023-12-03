from server.CreateApp import socketio
from server.Game.Game import Game

lobby = {} # token -> player
global_players = {} # token -> player
games = { 'apple': Game('Apple Game', 'apple', 4, True, 30, socketio), 'banana': Game('Banana Game', 'banana', 5, False, 40, socketio) }

def validate_game_name(name):
    if not name:
        return False
    global games
    for game in games.values():
        if game.name.upper() == name.upper():
            return False
    return True

def get_player(token):
    global global_players
    if token in global_players:
        return global_players.get(token)
    
def get_game(id):
    global games
    if id in games:
        return games.get(id)

def get_players_in_lobby():
    global lobby
    return lobby.values()

def get_players_in_global():
    global global_players
    return global_players.values()

def remove_player_from_lobby(token):
    global lobby
    if token in lobby:
        tmp = lobby
        player = tmp.pop(token)
        lobby = tmp
        return player.name
    return None

# Remove the player from every possible instance.
def remove_player_from_global(token):
    resGame = None
    resName = None
    resId = None
    global lobby
    if token in lobby:
        tmp = lobby
        tmp.pop(token)
        lobby = tmp
    global global_players
    if token in global_players:
        player = global_players.get(token)
        global games
        for game in games.values():
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
    global games
    if game_id not in games:
        raise Exception('Invalid game id')
    game = games.get(game_id)
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