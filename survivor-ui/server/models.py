
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.orm import validates, relationship, backref, sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from config import db

from sqlalchemy.ext.associationproxy import association_proxy

Base=declarative_base()
class SurvivorContestant (db.Model, SerializerMixin):
    __tablename__="survivor_contestants"

    serialize_rules= ('-tribe', '-team')

    id=db.Column(db.Integer, primary_key=True)
    name=db.Column(db.String)
    age=db.Column(db.Integer)
    hometown=db.Column(db.String)
    current_residence=db.Column(db.String)
    occupation=db.Column(db.String)
    is_in_merge=db.Column(db.Boolean)
    is_eliminated=db.Column(db.Boolean)
    is_on_jury=db.Column(db.Boolean)
    image=db.Column(db.String)

    tribe_id = db.Column(db.Integer, db.ForeignKey('tribes.id'))
    team_id = db.Column(db.Integer, db.ForeignKey('teams.id'))

    def __repr__(self):
        return f'<Contestant: {self.name}>'
    
class Tribe (db.Model, SerializerMixin):
    __tablename__="tribes"

    id=db.Column(db.Integer, primary_key=True)
    name=db.Column(db.String)
    color=db.Column(db.String)

    survivor_contestants = db.relationship('SurvivorContestant', backref='tribe')

    def __repr__(self):
        return f'<Tribe: {self.name} ({self.color})>'
    
class Team (db.Model, SerializerMixin):
    __tablename__="teams"

    id=db.Column(db.Integer, primary_key=True)
    name=db.Column(db.String)

    survivor_contestants = db.relationship('SurvivorContestant', backref='team')
    amazing_race_contestants = db.relationship('AmazingRaceContestant', backref='team')

    def __repr__(self):
        return f'<Team: {self.name}>'

    
class AmazingRaceContestant (db.Model, SerializerMixin):
    __tablename__="amazing_race_contestants"

    serialize_rules= ('-team')

    id=db.Column(db.Integer, primary_key=True)
    team_members=db.Column(db.String)
    relationship=db.Column(db.String)
    is_eliminated=db.Column(db.Boolean)
    image=db.Column(db.String)

    team_id = db.Column(db.Integer, db.ForeignKey('teams.id'))
    

    def __repr__(self):
        return f'<Contestant: {self.id}>'

