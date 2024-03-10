#!/usr/bin/env python3


from random import random, randint, choice as rc




from app import app
from models import db, SurvivorContestant, Tribe, Team, AmazingRaceContestant
from data import s_cons, trs, tms, a_r_cons

from flask import session 


def delete_records():
    db.session.query(SurvivorContestant).delete()
    db.session.query(Tribe).delete()
    db.session.query(Team).delete()
    db.session.query(AmazingRaceContestant).delete()
    db.session.commit()
    






def create_records():
    
    tribes = [
        Tribe(
            name=tribe["name"],
            color=tribe["color"]
        ) for tribe in trs
    ]

   

    teams = [
        Team(
            name=team["name"]
        ) for team in tms
    ]

    survivor_contestants=[
        SurvivorContestant(
            name= contestant["name"],
            age= contestant["age"],
            hometown=contestant["hometown"],
            current_residence=contestant["current_residence"],
            occupation=contestant["occupation"],
            is_in_merge=contestant["is_in_merge"],
            is_eliminated=contestant["is_eliminated"],
            is_on_jury=contestant["is_on_jury"],
            image=contestant["image"]
        ) for contestant in s_cons
    ]


    amazing_race_contestants = [
        AmazingRaceContestant(
            team_members=contestant["team_members"],
            relationship=contestant["relationship"],
            bio=contestant["bio"],
            location=contestant["location"],
            is_eliminated=contestant["is_eliminated"],
            image=contestant["image"]
        ) for contestant in a_r_cons
    ]

    db.session.add_all(survivor_contestants + tribes + teams + amazing_race_contestants)
    db.session.commit()
    return survivor_contestants, tribes, teams, amazing_race_contestants

def relate_records(survivor_contestants, tribes, teams, amazing_race_contestants):
        
    for contestant in survivor_contestants:
        contestant.tribe = rc(tribes)
        contestant.team = rc(teams)


    for contestant in amazing_race_contestants:
        contestant.team= rc(teams)
   

    db.session.add_all(survivor_contestants + amazing_race_contestants)
    db.session.commit()
    



if __name__ == '__main__':
    
    with app.app_context():
        print("Starting seed...")
        
        delete_records()
        survivor_contestants, tribes, teams, amazing_race_contestants = create_records()
        relate_records(survivor_contestants, tribes, teams, amazing_race_contestants)