from werkzeug.security import generate_password_hash
from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():

    data = [
              User(
                  firstname="Demo",
                  lastname="Userton",
                  age=49,
                  username='Demo',
                  email='demo@aa.io',
                  hashed_password=generate_password_hash('password'),
                  avatarUrl='https://www.minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg',
                  preferredHairStyle="Curly top Drop Fade"
                  ),
              User(
                  firstname="Maricio",
                  lastname="Harris",
                  age=42,
                  username='superduck22',
                  email='maricio@aa.io',
                  hashed_password=generate_password_hash('password'),
                  avatarUrl='https://www.minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg',
                  preferredHairStyle="Fro-hawk"
                  ),
              User(
                  firstname="Doug",
                  lastname="Funny",
                  age=78,
                  username='generic55',
                  email='generic@aa.io',
                  hashed_password=generate_password_hash('password'),
                  avatarUrl='https://www.minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg',
                  preferredHairStyle="Bald"
                  ),
            ]
    for user in data:
        db.session.add(user)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
