from flask import Blueprint, request, jsonify
from server.Game.Game import Game
from server.Globals import *

lobby_blueprint = Blueprint('lobby', __name__)

@lobby_blueprint.route('/api/enterLobby', methods=['GET'])
def enter_lobby():
    token = request.headers.get('Authorization')
    player = players.get_player(token)
<<<<<<< HEAD
    if player:
        lobby.add_player(player)
        games.remove_player(player.id)
=======
    if not player:
        return jsonify('Player not found'), 401
    lobby.add_player(player)
    games.remove_player(player.id)
>>>>>>> 38b132eecafae25421e42e2e6c2d2af040097e62
    game_list = games.get_games_json()
    current_lobby = lobby.get_current_lobby_json()
    data = {'games': game_list, 'lobby': current_lobby}
    return jsonify(data), 200

@lobby_blueprint.route('/api/createGame', methods=['POST'])
def handle_create_game():
    name = request.json.get('name')
    num_players = request.json.get('numPlayers')
    turn_timer_enabled = request.json.get('enableTurnTimer')
    turn_length = request.json.get('turnLength')
    if not games.is_valid_game_name(name):
        return jsonify('The game name is invalid or in use.'), 423
    game = Game(name, num_players, turn_timer_enabled, turn_length, socketio)
    games.add_game(game)
    return jsonify(game.id), 200