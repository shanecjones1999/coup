from server.Utils.AuthUtils import generate_token
from server.Game.Player import Player
from server.Globals import *

def is_valid_username(username):
    if not username:
        return False
    total_players = players.get_players()
    for player in total_players:
        if username == player.name:
            return False
    return True

def handle_signin(username: str) -> str:
    cleaned_name = username.strip()
    if is_valid_username(cleaned_name):
        token = generate_token(cleaned_name)
        player = Player(cleaned_name, token)
        players.add_player(player)
        return token
    return None