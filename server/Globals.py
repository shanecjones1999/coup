from server.CreateApp import socketio
from server.Game.Game import Game
from server.Lobby import Lobby
from server.Games import Games

lobby = Lobby() # token -> player
global_players = {} # token -> player
games = Games() # { 'apple': Game('Apple Game', 'apple', 4, True, 30, socketio), 'banana': Game('Banana Game', 'banana', 5, False, 40, socketio) }