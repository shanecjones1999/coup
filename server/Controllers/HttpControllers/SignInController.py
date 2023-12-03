from flask import Blueprint, request, jsonify
from server.Game.Player import Player
# import jwt
from server.Utils import *
# from server.CreateApp import app
#from server.Utils.SignInUtils import is_valid_name
# from server.Utils.TokenUtils import generate_token
from server.NewUtils.TokenUtils import generate_token

signin_blueprint = Blueprint('signin', __name__)

@signin_blueprint.route('/api/signin', methods=['POST'])
def token_auth():
    name = request.json.get('username')
    cleaned_name = name.strip()
    global global_players
    if is_valid_name(cleaned_name):
        token = generate_token(cleaned_name)
        player = Player(cleaned_name, token)
        global global_players
        global_players[token] = player
        global lobby
        lobby[token] = player
        return jsonify({'token': token}), 200
    return jsonify('Username is taken or invalid.'), 403