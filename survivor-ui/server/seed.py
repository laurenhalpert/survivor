#!/usr/bin/env python3


from random import random, randint, choice as rc




from app import app
from models import db, SurvivorContestant, Tribe, Team, AmazingRaceContestant
from data import s_cons, trs, tms, a_r_cons

from flask import session 


# s_cons=[
#     {
#         "name":"Ben Katzman",
#         "age":31,
#         "hometown":"Miami, FL",
#         "current_residence":"Miami, FL",
#         "occupation":"Musician",
#         "is_in_merge":False,
#         "is_eliminated":False,
#         "is_on_jury":False,
#         "image":"https://wwwimage-tve.cbsstatic.com/thumbnails/photos/w425-q80/cast/ben_katzman_800.jpg"
#     },
# ]

# # print(s_cons[0]["name"])

# trs = [
#     {
#        "name": "green tribe",
#         "color": "green"
#     },
#     {
#         "name": "purple tribe",
#         "color": "purple"
#     },
#     {
#         "name": "orange tribe",
#         "color": "orange"
#     }
# ]

# tms= [
#     {
#         "name": "Mark"
#     },
#     {
#         "name": "Kirstin"
#     }, 
#     {
#         "name": "Lauren"
#     }
# ]

# a_r_cons=[
#     {
#         "team_members": "L&L",
#         "relationship": "coworkers",
#         "is_eliminated": False,
#         "image": "https://wwwimage-tve.cbsstatic.com/thumbnails/photos/w425-q80/cast/ben_katzman_800.jpg"
#     }
# ]


def delete_records():
    db.session.query(SurvivorContestant).delete()
    db.session.query(Tribe).delete()
    db.session.query(Team).delete()
    db.session.query(AmazingRaceContestant).delete()
    db.session.commit()






def create_records():
    # def mapper_s_cons(contestant):
    #     return SurvivorContestant(
    #         name= contestant.name,
    #         age= contestant.age,
    #         hometown=contestant.hometown,
    #         current_residence=contestant.current_residence,
    #         occupation=contestant.occupation,
    #         is_in_merge=contestant.is_in_merge,
    #         is_eliminated=contestant.is_eliminated,
    #         is_on_jury=contestant.is_on_jury,
    #         image=contestant.image
    #     )
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

    # def mapper_tribes(tribe):
    #     return Tribe(
    #         name=tribe.name,
    #         color=tribe.color
    #     )
        

    tribes = [
        Tribe(
            name=tribe["name"],
            color=tribe["color"]
        ) for tribe in trs
    ]

    # def mapper_teams(team):
    #     return Team(
    #         name=team.name
    #     )

    teams = [
        Team(
            name=team["name"]
        ) for team in tms
    ]

    # def mapper_a_r_cons(contestant):
    #     return AmazingRaceContestant(
    #         team_members=contestant.team_members,
    #         relationship=contestant.relationship,
    #         is_eliminated=contestant.is_eliminated,
    #         image=contestant.image
    #     )

    amazing_race_contestants = [
        AmazingRaceContestant(
            team_members=contestant["team_members"],
            relationship=contestant["relationship"],
            is_eliminated=contestant["is_eliminated"],
            image=contestant["image"]
        ) for contestant in a_r_cons
    ]

    db.session.add_all(survivor_contestants + tribes + teams + amazing_race_contestants)
    db.session.commit()
    return survivor_contestants, tribes, teams, amazing_race_contestants

def relate_records(tribes, survivor_contestants, amazing_race_contestants, teams):
    for tribe in tribes:
        tribe.survivor_contestant = rc(survivor_contestants)
        
    
    for team in teams:
        team.survivor_contestant = rc(survivor_contestants)
        team.amazing_race_contestant = rc(amazing_race_contestants)

   

    db.session.add_all(survivor_contestants + tribes + teams + amazing_race_contestants)
    db.session.commit()



if __name__ == '__main__':
    
    with app.app_context():
        print("Starting seed...")
        
        delete_records()
        survivor_contestants, tribes, teams, amazing_race_contestants = create_records()
        relate_records(survivor_contestants, tribes, teams, amazing_race_contestants)