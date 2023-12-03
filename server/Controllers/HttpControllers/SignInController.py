from flask import Blueprint, request, jsonify
from server.Game.Player import Player
from server.NewUtils.SignInUtils import handle_signin

signin_blueprint = Blueprint('signin', __name__)

@signin_blueprint.route('/api/signin', methods=['POST'])
def signin():
    name = request.json.get('username')
    cleaned_name = name.strip()
    token = handle_signin(cleaned_name)
    if token:
        return jsonify({'token': token}), 200
    return jsonify('Username is taken or invalid.'), 403