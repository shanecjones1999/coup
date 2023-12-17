from flask import Flask
from flask_socketio import SocketIO

app = Flask(__name__, static_folder='../client/dist', static_url_path='')
app.config["SECRET_KEY"] = "topSecret"
socketio = SocketIO(app, cors_allowed_origins="*")

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    print(f'path: {path}')
    return app.send_static_file("index.html")

@app.route('/games')
def catch_all2():
    print('catch_all2')
    return app.send_static_file("index.html")
