from flask import Flask
from flask_socketio import SocketIO

app = Flask(__name__)
app.config["SECRET_KEY"] = "topSecret"
socketio = SocketIO(app, cors_allowed_origins="*")

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    print(f'path: {path}')
    return app.send_static_file("index.html")

@app.route('/games')
def lobby_route():
    return app.send_static_file("index.html")

@app.route('/game/<game_id>')
def game_route(game_id):
    print(f'id: {game_id}')
    return app.send_static_file("index.html")