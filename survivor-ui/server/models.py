
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

# class Book (db.Model, SerializerMixin):
#     __tablename__="books"

#     serialize_rules = ('-users',)

#     id = db.Column(db.Integer, primary_key = True)
#     title = db.Column(db.String)
#     author_first_name = db.Column(db.String)
#     author_last_name = db.Column(db.String)
#     genre = db.Column(db.String)
#     book_image = db.Column(db.String)
#     description = db.Column(db.String)

    
#     posts = db.relationship('Post', backref='book')
#     users = association_proxy('posts', 'user', creator=lambda ur: Post(user=ur))
    

    
#     def __repr__(self):
#         return f'<Book: {self.title} >'

# class Post (db.Model, SerializerMixin):
#     __tablename__='posts'
#     serialize_rules = ('-book', '-user',)
#     id = db.Column(db.Integer, primary_key = True)
#     post_content = db.Column(db.String)
#     likes = db.Column(db.Integer)
#     user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
#     book_id = db.Column(db.Integer, db.ForeignKey('books.id'))

    


    
#     def __repr__(self):
#         return f'<Post: {self.id} Likes: {self.likes}>'

# class User (db.Model, SerializerMixin):
#     __tablename__ = 'users'
#     serialize_rules = ('-_password_hash', 'books')
    
#     id = db.Column(db.Integer, primary_key = True)
#     username = db.Column(db.String, unique = True, nullable=False)
#     _password_hash = db.Column(db.String)
#     image_url = db.Column(db.String)
#     bio = db.Column(db.String)

    
#     posts = db.relationship('Post', backref='user')
#     my_books = db.relationship('MyBook', backref='user')
#     books = association_proxy('posts', 'book', creator = lambda bk: Post(book = bk))
    
#     @hybrid_property
#     def password_hash(self):
#         raise AttributeError('Password hashes may not be viewed.')

#     @password_hash.setter
#     def password_hash(self, password):
#         password_hash = bcrypt.generate_password_hash(
#             password.encode('utf-8'))
#         self._password_hash = password_hash.decode('utf-8')

#     def authenticate(self, password):
#         return bcrypt.check_password_hash(
#             self._password_hash, password.encode('utf-8'))

#     def __repr__(self):
#         return f'<User {self.username} >'

# class MyBook(db.Model, SerializerMixin):
#     __tablename__ = 'my_books'
#     serialize_rules = ('-book', '-user')
#     id = db.Column(db.Integer, primary_key = True)
#     book_id = db.Column(db.Integer, db.ForeignKey('books.id'))
#     user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

   

#     def __repr__(self):
#         return f'<MyBook {self.id}>'