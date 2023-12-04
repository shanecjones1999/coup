from flask import Blueprint, jsonify
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