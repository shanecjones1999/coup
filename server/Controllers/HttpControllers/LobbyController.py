from flask import Blueprint, request, jsonify
from server.Utils import *

lobby_blueprint = Blueprint('lobby', __name__)

@lobby_blueprint.route('/api/getGames', methods=['GET'])
def get_games():
    res = []
    for game in games.get_games():
        # TODO: Func
        data = {
            'name': game.name,
            'id': game.id,
            'isStarted': game.started,
            'numPlayers': len(game.players),
            'totalPlayers': game.num_players,
        }
        res.append(data)
    return jsonify(res), 200

@lobby_blueprint.route('/api/getCurrentLobby', methods=['GET'])
def get_current_lobby():
    players = lobby.get_players()
    res = [player.to_dict() for player in players]
    return jsonify(res), 200

@lobby_blueprint.route('/api/createGame', methods=['POST'])
def handle_create_game():
    name = request.json.get('name')
    num_players = request.json.get('numPlayers')
    turn_timer_enabled = request.json.get('enableTurnTimer')
    turn_length = request.json.get('turnLength')
    if not games.is_valid_game_name(name):
        return jsonify('The game name is invalid or in use.'), 423
    game = Game(name, name, num_players, turn_timer_enabled, turn_length, socketio)
    games.add_game(game)
    return jsonify(game.id), 200