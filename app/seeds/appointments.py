from app.models import db, Appointment
import datetime


def seed_appointments():

    data = [
             Appointment(datetime = datetime.datetime.utcnow(), userId = 1, barberId = 1)
           ]
    for appointment in data:
        db.session.add(appointment)
    db.session.commit()


def undo_appointments():
    db.session.execute('TRUNCATE appointments RESTART IDENTITY CASCADE;')
    db.session.commit()
