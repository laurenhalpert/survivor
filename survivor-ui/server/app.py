#!/usr/bin/env python3


from flask import request, session, make_response, jsonify
from flask_restful import Resource
from sqlalchemy.exc import IntegrityError
import sys


from config import app, db, api
from models import SurvivorContestant, Tribe, Team, AmazingRaceContestant

class SurvivorContestantPool(Resource):
    def get(self):
        contestants=SurvivorContestant.query.all()
        return [contestant.to_dict() for contestant in contestants], 200
      


api.add_resource(SurvivorContestantPool, '/api/survivor_contestants', endpoint="survivor_contestants")


if __name__ == '__main__':
    app.run(port=5555, debug=True)