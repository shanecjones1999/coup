from server.NewUtils.TokenUtils import generate_token
from server.Game.Player import Player
from server.Utils import *

def is_valid_username(username):
    if not username:
        return False
    players = get_players_in_global()
    for player in players:
        if username == player.name:
            return False
    return True

def handle_signin(username: str) -> str:
    cleaned_name = username.strip()
    global global_players
    if is_valid_username(cleaned_name):
        token = generate_token(cleaned_name)
        player = Player(cleaned_name, token)
        global global_players
        global_players[token] = player
        lobby.add_player(player)
        return token
    return None