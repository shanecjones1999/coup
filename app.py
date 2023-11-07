from flask import Flask, request, jsonify, send_from_directory
from flask_socketio import SocketIO, emit, join_room, leave_room
from Player import Player
from Game import Game
import json
import jwt
from Deck import Deck, cards

from flask_cors import CORS

app = Flask(__name__, static_folder='client/dist')
app.config["SECRET_KEY"] = "topSecret"
socketio = SocketIO(app, cors_allowed_origins="*")

cors = CORS(app, supports_credentials=True) #resources={r"/socket.io/*": {"origins": "http://localhost:4200"}}
#cors = CORS(app, supports_credentials=True)

lobby = {} # token -> player
global_players = {} # token -> player
games = { 'apple': Game('Apple Game', 'apple'), 'banana': Game('Banana Game', 'banana')}

# Define route for landing page
@app.route('/')
def serve_index():
    return send_from_directory(app.static_folder, 'index.html')

# Define route for any path that could be part of the Ember app.
@app.route('/<path:path>')
def serve_file(path):
    return send_from_directory(app.static_folder, path)

@app.route('/api/getGames', methods=['GET'])
def get_games():
    res = []
    global games
    for game in games.values():
        data = {
            'name': game.name,
            'id': game.id,
            'isStarted': game.started,
        }
        res.append(data)
    return jsonify(res), 200

@app.route('/api/getCurrentUser', methods=['GET'])
def get_current_user():
    token = request.headers.get('Authorization')
    player = get_player(token)
    username = 'INVALID NAME BUG CAUGHT'
    if (player):
        username = player.name
    return jsonify(username), 200

@app.route('/api/getCurrentLobby', methods=['GET'])
def get_current_lobby():
    players = get_players_in_lobby()
    res = [player.name for player in players]
    return jsonify(res), 200

@app.route('/api/tokenAuth', methods=['POST'])
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

def is_valid_name(name):
    if not name:
        return False
    if not isinstance(name, str):
        return False
    players = get_players_in_global()
    for player in players:
        if name == player.name:
            return False
    return True

@app.route('/api/joinGame', methods=['POST'])
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
            data = {'gameState': game_state, 'playerId': player.id}
            return jsonify(data), 200
    return jsonify(f'Invalid token or game Id: {token}, {game_id}')

@socketio.on('connect')
def handle_connect():
    token = request.args.get('token')
    global lobby
    if token in lobby:
        join_room('lobby')
    global global_players
    if token in global_players:
        player = global_players.get(token)
        global games
        for game in games.values():
            if player.id in game.players:
                join_room(game.id)
                join_room(token)

    print('Client connected')

@socketio.on('disconnect')
def handle_disconnect():
    try:
        # Your WebSocket endpoint code here
        print('Client disconnected successfully')
    except Exception as e:
        # Handle the exception, for example, log the error
        print(f"An error occurred: {str(e)}")

@socketio.on('join_lobby')
def handle_join_lobby(token):
    global lobby
    if token in lobby:
        player = lobby.get(token)
        emit('join_lobby', player.name, room='lobby')
        join_room('lobby')

@socketio.on('leave_lobby')
def handle_leave_lobby(token):
    name = remove_player_from_lobby(token)
    emit('leave_lobby', name, room='lobby')

# Handle emitting to games and lobby here!?
@socketio.on('invalidate_session')
def handle_invalidate_session(token):
    name, game, id = remove_player_from_global(token)
    if (name):
        emit('leave_lobby', name, room='lobby')
        leave_room('lobby')
    if (game):
        emit('leave_game', id, room=game.id)

@socketio.on('join_game')
def handle_join_game(data):
    token = data.get('token')
    id = data.get('id')
    global games
    if id in games:
        global lobby
        if token in lobby:
            player = lobby.get(token)
            game = games.get(id)
            game_state = game.get_game_state()
            emit('game_state_update', game_state, room=game.id)
            join_room(game.id)
            join_room(token)
            emit('leave_lobby', player.name, room='lobby')
            remove_player_from_lobby(token)
            leave_room('lobby')

@socketio.on('start_game')
def handle_start_game(id):
    game = get_game(id)
    if not game:
        raise Exception('No game found')
    game.start_game()
    gameState = game.get_game_state()
    emit('game_state_update', gameState, room=game.id)
    emit('game_start', id, room='lobby')

@socketio.on('initiate_action')
def initiate_action(data):
    game_id = data.get('gameId')
    game = validate_game(game_id)
    action_id = data.get('actionId')
    source_id = data.get('sourceId')
    target_id = data.get('targetId')
    validate_turn(source_id, game)
    game.handle_action(action_id, source_id, target_id)
    game_state = game.get_game_state()
    emit('game_state_update', game_state, room=game.id)

# Will need to add params to handle block steal as captain vs ambassador
@socketio.on('block')
def handle_block(data):
    game_id = data.get('gameId')
    blocker_id = data.get('playerId')
    block_card_id = data.get('blockCardId')
    game = validate_game(game_id)
    blocked_action_id = game.block_state.action_id
    target_id = game.block_state.target_id
    game.handle_block(block_card_id, blocked_action_id, blocker_id, target_id)
    game_state = game.get_game_state()
    emit('game_state_update', game_state, room=game.id)

# TODO ADD VALIDATION
@socketio.on('pass_block')
def handle_pass_block(data):
    game_id = data.get('gameId')
    player_id = data.get('playerId')
    game = validate_game(game_id)
    game.handle_pass_block(player_id)

    game_state = game.get_game_state()
    emit('game_state_update', game_state, room=game.id)

@socketio.on('pass_challenge')
def handle_pass_challenge(data):
    game_id = data.get('gameId')
    player_id = data.get('playerId')
    game = validate_game(game_id)
    game.handle_pass_challenge(player_id)
    game_state = game.get_game_state()
    emit('game_state_update', game_state, room=game.id)

@socketio.on('challenge')
def handle_challenge(data):
    game_id = data.get('gameId')
    player_id = data.get('playerId')
    game = validate_game(game_id)
    game.handle_challenge(player_id)
    game_state = game.get_game_state()
    emit('game_state_update', game_state, room=game.id)

@socketio.on('reveal_card')
def handle_reveal_card(data):
    game_id = data.get('gameId')
    player_id = data.get('playerId')
    game = validate_game(game_id)
    card_id = data.get('cardId')
    game.handle_revealed_card(player_id, card_id)
    game_state = game.get_game_state()
    emit('game_state_update', game_state, room=game.id)

@socketio.on('lose_influence')
def handle_lose_influence(data):
    game_id = data.get('gameId')
    player_id = data.get('playerId')
    game = validate_game(game_id)
    card_id = data.get('cardId')

    game.handle_lose_influence(player_id, card_id)

    game_state = game.get_game_state()
    emit('game_state_update', game_state, room=game.id)

@socketio.on('resolve_exchange_state')
def handle_resolve_exchange_state(data):
    game_id = data.get('gameId')
    player_id = data.get('playerId')
    game = validate_game(game_id)
    selected_card_ids = data.get('selectedCardIds')
    game.handle_resolve_exchange(player_id, selected_card_ids)

    game_state = game.get_game_state()
    emit('game_state_update', game_state, room=game.id)

def get_player(token):
    global global_players
    if token in global_players:
        return global_players.get(token)
    
def get_game(id):
    global games
    if id in games:
        return games.get(id)

def get_players_in_lobby():
    global lobby
    return lobby.values()

def get_players_in_global():
    global global_players
    return global_players.values()

def remove_player_from_lobby(token):
    global lobby
    if token in lobby:
        tmp = lobby
        player = tmp.pop(token)
        lobby = tmp
        return player.name
    return None

# Remove the player from every possible instance.
def remove_player_from_global(token):
    resGame = None
    resName = None
    resId = None
    global lobby
    if token in lobby:
        tmp = lobby
        tmp.pop(token)
        lobby = tmp
    global global_players
    if token in global_players:
        player = global_players.get(token)
        global games
        for game in games.values():
            if player.id in game.players:
                tmp = game.players
                tmp.pop(player.id)
                game.players = tmp
                resGame = game
        tmp = global_players
        player = tmp.pop(token)
        global_players = tmp
        resName = player.name
        resId = player.id
    return resName, resGame, resId

def validate_game(game_id):
    global games
    if game_id not in games:
        raise Exception('Invalid game id')
    game = games.get(game_id)
    if not game.started:
        raise Exception('Game not started')
    if not game.players:
        raise Exception('No players in game')
    return game

def validate_turn(player_id, game):
    if not game:
        raise Exception("No game found")
    if player_id != game.get_player_turn():
        raise Exception("Player not in game")

if __name__ == '__main__':
    # app.run()
    socketio.run(app, debug=True)
