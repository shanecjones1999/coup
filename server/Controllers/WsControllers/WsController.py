from flask import request
from flask_socketio import emit, join_room, leave_room
from server.Globals import *

@socketio.on('connect')
def handle_connect():
    token = request.args.get('token')
    if lobby.has_player(token):
        join_room('lobby')
    if players.has_player(token):
        player = players.get_player(token)
        for game in games.get_games():
            if player.id in game.players:
                join_room(game.id)
                join_room(token)

@socketio.on('disconnect')
def handle_disconnect():
    try:
        # Your WebSocket endpoint code here
        print('Client disconnected successfully')
    except Exception as e:
        # Handle the exception, for example, log the error
        print(f"An error occurred: {str(e)}")

@socketio.on('leave_lobby')
def handle_leave_lobby(token):
    name = lobby.remove_player(token)
    emit('leave_lobby', name, room='lobby')

@socketio.on('lobby_update')
def handle_lobby_update():
    players = lobby.get_players()
    ret = [player.to_dict() for player in players]
    emit('lobby_update', ret, room='lobby')

# Handle emitting to games and lobby here!?
@socketio.on('invalidate_session')
def handle_invalidate_session(token):
    name, game, id = remove_player_from_global(token)
    if (name):
        lobby_players = lobby.get_players()
        ret = [player.to_dict() for player in lobby_players]
        emit('lobby_update', ret, room='lobby')
        leave_room('lobby')
    if (game):
        emit('leave_game', id, room=game.id)

@socketio.on('join_game')
def handle_join_game(data):
    token = data.get('token')
    game_id = data.get('id')
    if games.has_game(game_id):
        if lobby.has_player(token):
            game = games.get_game(game_id)
            game_state = game.get_game_state()
            emit('game_state_update', game_state, room=game.id)
            join_room(game.id)
            join_room(token)
            lobby.remove_player(token)
            lobby_players = lobby.get_players()
            ret = [player.to_dict() for player in lobby_players]
            leave_room('lobby')
            emit('lobby_update', ret, room='lobby')

@socketio.on('start_game')
def handle_start_game(id):
    game = games.get_game(id)
    game.start_game()
    gameState = game.get_game_state()
    emit('game_state_update', gameState, room=game.id)
    for player in game.players.values():
        cards = [card.to_dict(False) for card in player.cards]
        emit('set_cards', cards, room=player.token)
    emit('game_start', id, room='lobby')

@socketio.on('initiate_action')
def initiate_action(data):
    game_id = data.get('gameId')
    game = games.get_game(game_id)
    action_id = data.get('actionId')
    source_id = data.get('sourceId')
    target_id = data.get('targetId')
    # validate_turn(source_id, game)
    error = game.handle_action(action_id, source_id, target_id)
    if error:
        return
    game_state = game.get_game_state()
    emit('game_state_update', game_state, room=game.id)

# Will need to add params to handle block steal as captain vs ambassador
@socketio.on('block')
def handle_block(data):
    game_id = data.get('gameId')
    blocker_id = data.get('playerId')
    block_card_id = data.get('blockCardId')
    game = games.get_game(game_id)
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
    game = games.get_game(game_id)
    game.handle_pass_block(player_id)

    game_state = game.get_game_state()
    emit('game_state_update', game_state, room=game.id)

@socketio.on('pass_challenge')
def handle_pass_challenge(data):
    game_id = data.get('gameId')
    player_id = data.get('playerId')
    game = games.get_game(game_id)
    game.handle_pass_challenge(player_id)
    game_state = game.get_game_state()
    emit('game_state_update', game_state, room=game.id)

@socketio.on('challenge')
def handle_challenge(data):
    game_id = data.get('gameId')
    player_id = data.get('playerId')
    game = games.get_game(game_id)
    game.handle_challenge(player_id)
    game_state = game.get_game_state()
    emit('game_state_update', game_state, room=game.id)

@socketio.on('reveal_card')
def handle_reveal_card(data):
    game_id = data.get('gameId')
    player_id = data.get('playerId')
    game = games.get_game(game_id)
    card_id = data.get('cardId')
    update_cards_player = game.handle_revealed_card(player_id, card_id)
    if update_cards_player:
        cards = [card.to_dict(False) for card in update_cards_player.cards]
        emit('set_cards', cards, room=update_cards_player.token)
    game_state = game.get_game_state()
    emit('game_state_update', game_state, room=game.id)

@socketio.on('lose_influence')
def handle_lose_influence(data):
    game_id = data.get('gameId')
    player_id = data.get('playerId')
    game = games.get_game(game_id)
    card_id = data.get('cardId')

    game.handle_lose_influence(player_id, card_id)
    player = game.players[player_id]
    cards = [card.to_dict(False) for card in player.cards]
    emit('set_cards', cards, room=player.token)

    game.lose_influence_state.reset()

    game_state = game.get_game_state()
    emit('game_state_update', game_state, room=game.id)

@socketio.on('resolve_exchange_state')
def handle_resolve_exchange_state(data):
    game_id = data.get('gameId')
    player_id = data.get('playerId') # Can we just use exchange_state.player_id?
    game = games.get_game(game_id)
    selected_card_ids = data.get('selectedCardIds')
    game.handle_resolve_exchange(player_id, selected_card_ids)
    player = game.players[player_id]
    cards = [card.to_dict(False) for card in player.cards]
    game.move_turn()
    game_state = game.get_game_state()
    emit('set_cards', cards, room=player.token)
    emit('game_state_update', game_state, room=game.id)