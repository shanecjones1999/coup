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
    if (player):
        game = games.get_game(game_id)
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
@game_blueprint.route('/api/invalidateSession', methods=['POST'])
def invalidate_session():
    token = request.headers.get('Authorization')
    name, game, id = remove_player_from_global(token)
    if (name):
        lobby_players = lobby.get_players()
        ret = [player.to_dict() for player in lobby_players]
        socketio.emit('lobby_update', ret, room='lobby')
    if (game):
        game_state = game.get_game_state()
        socketio.emit('game_state_update', game_state, room=game.id)
    return jsonify('Successfully invalidated session'), 200
