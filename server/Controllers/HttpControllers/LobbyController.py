from flask import Blueprint, request, jsonify
from server.Game.Player import Player
import jwt
from server.Utils import *
from server.CreateApp import app

lobby_blueprint = Blueprint('lobby', __name__)

@lobby_blueprint.route('/api/getGames', methods=['GET'])
def get_games():
    res = []
    global games
    for game in games.values():
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
    players = get_players_in_lobby()
    res = [player.to_dict() for player in players]
    return jsonify(res), 200