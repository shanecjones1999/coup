from flask import Blueprint, request, jsonify
from flask_cors import CORS
from server.Game.Game import Game
from server.CreateApp import socketio
from server.Globals import *

game_blueprint = Blueprint('game', __name__)

@game_blueprint.route('/api/joinGame', methods=['POST'])
def join_game():
    token = request.headers.get('Authorization')
    game_id = request.json.get('id')
    player = players.get_player(token)
    if not player:
        raise Exception('No player found')
    game = games.get_game(game_id)
    if not game:
        raise Exception('No player found')
    if len(game.get_players()) >=  game.num_players:
        return jsonify('The selected game is full.'), 401
    
    # TODO Clean this up
    game.add_player(player)
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

# Make sure we remove the player from correct rooms
@game_blueprint.route('/api/invalidateSession', methods=['POST'])
def invalidate_session():
    token = request.headers.get('Authorization')
    name, game, id = remove_player_from_global(token)
    if (game):
        game_state = game.get_game_state()
        socketio.emit('game_state_update', game_state, room=game.id)
    return jsonify('Successfully invalidated session'), 200
