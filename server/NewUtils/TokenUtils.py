import jwt
from server.CreateApp import app

algorithm = 'HS256'

def generate_token(username):
    payload = {}
    payload['username'] = username
    token = jwt.encode(payload, app.config['SECRET_KEY'], algorithm)
    return token