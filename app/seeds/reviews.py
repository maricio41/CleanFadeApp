from app.models import db, Review


def seed_reviews():

    data = [
             Review(reviewBody = "Reese is a gifted barber and I look amazing", rating = 5, userId = 1, barberId = 1)
           ]
    for review in data:
        db.session.add(review)
    db.session.commit()


def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
