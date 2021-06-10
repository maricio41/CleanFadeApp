from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  firstname = db.Column(db.String(50), nullable = True)
  lastname = db.Column(db.String(50), nullable = True)
  age = db.Column(db.Integer, nullable = True)
  username = db.Column(db.String(40), nullable = False, unique = True)
  email = db.Column(db.String(255), nullable = False, unique = True)
  hashed_password = db.Column(db.String(255), nullable = False)
  avatarUrl = db.Column(db.String(255), nullable =True)
  preferredHairStyle = db.Column(db.String(100), nullable =True)

  appointments = db.relationship("Appointment", back_populates='user')
  reviews = db.relationship('Review', back_populates='user')


  @property
  def password(self):
    return self.hashed_password


  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)


  def check_password(self, password):
    return check_password_hash(self.password, password)


  def to_dict(self):
    return {
      "id": self.id,
      "firstname": self.firstname,
      "lastname": self.lastname,
      "age": self.age,
      "username": self.username,
      "email": self.email,
      "password": self.password,
      "avatarUrl": self.avatarUrl,
      "preferredHairStyle": self.preferredHairStyle,
      "appointments": [a.to_dict() for a in self.appointments]
    }
