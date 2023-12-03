from flask import Flask
from flask_socketio import SocketIO

app = Flask(__name__)
app.config["SECRET_KEY"] = "topSecret"
socketio = SocketIO(app, cors_allowed_origins="*")