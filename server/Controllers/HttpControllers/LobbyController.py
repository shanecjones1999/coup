from flask import Blueprint, request, jsonify
from server.Game.Game import Game
from server.Globals import *

lobby_blueprint = Blueprint('lobby', __name__)

@lobby_blueprint.route('/api/enterLobby', methods=['GET'])
def enter_lobby():
    token = request.headers.get('Authorization')
    player = players.get_player(token)
    if not player:
        return jsonify('Player not found'), 401
    # player.reset()
    lobby.add_player(player)
    games.remove_player(player.id)
    game_list = games.get_games_json()
    current_lobby = lobby.get_current_lobby_json()
    data = {'games': game_list, 'lobby': current_lobby}
    return jsonify(data), 200

@lobby_blueprint.route('/api/loadPlayerGame', methods=['GET'])
def load_player_game():
    token = request.headers.get('Authorization')
    player = players.get_player(token)
    if not player:
        return jsonify('error'), 403
    game = games.is_player_in_active_game(player.id)
    in_game = False
    game_id = None
    if game:
        in_game = True
        game_id = game.id
    data = {'inGame': in_game, 'gameId': game_id}
    return jsonify(data), 200

@lobby_blueprint.route('/api/createGame', methods=['POST'])
def handle_create_game():
    token = request.headers.get('Authorization')
    player = players.get_player(token)
    if not player:
        return jsonify('Player not found'), 401
    name = request.json.get('name')
    num_players = request.json.get('numPlayers')
    turn_timer_enabled = request.json.get('enableTurnTimer')
    turn_length = request.json.get('turnLength')
    if not games.is_valid_game_name(name):
        return jsonify('The game name is invalid or in use.'), 423
    game = Game(name, num_players, turn_timer_enabled, turn_length, socketio)
    games.add_game(game)
    game.add_player(player)
    return jsonify(game.id), 200