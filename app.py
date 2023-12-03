from flask_cors import CORS

from server.Views.http_views import http_blueprint, socketio
from server.Views.ws_views import *

from server.CreateApp import app

cors = CORS(app, supports_credentials=True)

app.register_blueprint(http_blueprint)

if __name__ == '__main__':
    socketio.run(app, debug=True)
