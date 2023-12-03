from flask import Blueprint, request, jsonify
from server.Game.Player import Player
import jwt
from server.Utils import *
from server.CreateApp import app

signin_blueprint = Blueprint('signin', __name__)

@signin_blueprint.route('/api/signin', methods=['POST'])
def token_auth():
    name = request.json.get('username')
    cleaned_name = name.strip()
    if is_valid_name(cleaned_name):
        payload = {}
        payload['playerName'] = cleaned_name
        token = jwt.encode(payload, app.config['SECRET_KEY'], algorithm='HS256')
        player = Player(cleaned_name, token)
        global global_players
        global_players[token] = player
        global lobby
        lobby[token] = player
        return jsonify({'token': token}), 200
    return jsonify('Username is taken or invalid.'), 403