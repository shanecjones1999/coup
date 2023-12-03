from flask import Flask, Blueprint, request, jsonify
from flask_socketio import SocketIO
from flask_cors import CORS
from server.Game import Game
from server.Utils import *
from server.Player import Player
import jwt
from server.CreateApp import app

# app = Flask(__name__)
# app.config["SECRET_KEY"] = "topSecret"
# socketio = SocketIO(app, cors_allowed_origins="*")

# cors = CORS(app, supports_credentials=True)
from server.CreateApp import socketio

# lobby = {} # token -> player
# global_players = {} # token -> player
# games = { 'apple': Game('Apple Game', 'apple', 4, True, 30, socketio), 'banana': Game('Banana Game', 'banana', 5, False, 40, socketio) }

http_blueprint = Blueprint('http', __name__)

@http_blueprint.route('/api/getGames', methods=['GET'])
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

@http_blueprint.route('/api/joinGame', methods=['POST'])
def join_game():
    token = request.headers.get('Authorization')
    game_id = request.json.get('id')
    player = get_player(token)
    if (player):
        game = get_game(game_id)
        if (game):
            # TODO: ADD Game.add_player() method
            game.add_player(player)
            # WIP
            game_state = game.get_game_state()
            cards = [card.to_dict(False) for card in player.cards]
            exchange_cards = []
            if game.exchange_state and game.exchange_state.player_id == player.id and game.exchange_state.cards:
                exchange_cards = [card.to_dict(False) for card in game.exchange_state.cards]
            data = {
                'gameState': game_state,
                'playerId': player.id,
                'cards': cards,
                'exchangeCards': exchange_cards
                }
            return jsonify(data), 200
    return jsonify(f'Invalid token or game Id: {token}, {game_id}')

# Make sure we remove the player from correct rooms
@http_blueprint.route('/api/invalidateSession', methods=['POST'])
def invalidate_session():
    token = request.headers.get('Authorization')
    name, game, id = remove_player_from_global(token)
    if (name):
        lobby_players = get_players_in_lobby()
        ret = [player.to_dict() for player in lobby_players]
        socketio.emit('lobby_update', ret, room='lobby')
    if (game):
        game_state = game.get_game_state()
        socketio.emit('game_state_update', game_state, room=game.id)
    return jsonify('Successfully invalidated session'), 200

@http_blueprint.route('/api/createGame', methods=['POST'])
def handle_create_game():
    name = request.json.get('name')
    num_players = request.json.get('numPlayers')
    turn_timer_enabled = request.json.get('enableTurnTimer')
    turn_length = request.json.get('turnLength')
    if not validate_game_name(name):
        return jsonify('The game name is invalid or in use.'), 423
    game = Game(name, name, num_players, turn_timer_enabled, turn_length, socketio)
    global games
    games[name] = game
    return jsonify(game.id), 200

@http_blueprint.route('/api/getCurrentUser', methods=['GET'])
def get_current_user():
    token = request.headers.get('Authorization')
    player = get_player(token)
    username = 'INVALID NAME BUG CAUGHT'
    if (player):
        username = player.name
    return jsonify(username), 200

@http_blueprint.route('/api/getCurrentLobby', methods=['GET'])
def get_current_lobby():
    players = get_players_in_lobby()
    res = [player.to_dict() for player in players]
    return jsonify(res), 200

@http_blueprint.route('/api/tokenAuth', methods=['POST'])
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