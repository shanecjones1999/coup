from flask import Blueprint, request, jsonify
from flask_cors import CORS
from server.Game.Game import Game
from server.CreateApp import socketio
from server.Globals import *

player_blueprint = Blueprint('player', __name__)

@player_blueprint.route('/api/players', methods=['GET'])
def get_players_api():
    players = [
        {
            "type": "players",
            "id": "1",
            "attributes": {
                "name": "John Doe"
            }
        },
        {
            "type": "players",
            "id": "2",
            "attributes": {
                "name": "Jane Smith"
            }
        }
    ]
    data = {"data": players}
    return jsonify(data), 200