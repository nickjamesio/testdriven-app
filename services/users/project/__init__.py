from flask import Flask, jsonify
from flask_restful import Resource, Api

from project.config import DevelopmentConfig

# instantiate the app
app = Flask(__name__)

api = Api(app)

# set config
app.config.from_object(DevelopmentConfig())


class UsersPing(Resource):
    def get(self):
        return {
        'status': 'success',
        'message': 'pong and stuff!',
    }


api.add_resource(UsersPing, '/users/ping')