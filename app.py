from flask_cors import CORS
from server.Controllers.HttpControllers.GameController import game_blueprint, socketio
from server.Controllers.HttpControllers.SignInController import signin_blueprint
from server.Controllers.HttpControllers.SignInController import signin_blueprint
from server.Controllers.HttpControllers.LobbyController import lobby_blueprint
from server.Controllers.HttpControllers.PlayerController import player_blueprint
from server.Controllers.WsControllers.WsController import *
from server.CreateApp import app

cors = CORS(app, supports_credentials=True)

app.register_blueprint(signin_blueprint)
app.register_blueprint(lobby_blueprint)
app.register_blueprint(game_blueprint)
app.register_blueprint(player_blueprint)

if __name__ == '__main__':
    socketio.run(app, debug=True)
    # Use the line below in place of the line above when deploying to production.
    # socketio.run(app,
    #     host='0.0.0.0',
    #     port=8000,
    #     debug=True)