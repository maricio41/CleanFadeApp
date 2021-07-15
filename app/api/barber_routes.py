from app.models.barbershop import BarberShop
from flask import Blueprint, jsonify, session, request
from flask_login import current_user
from ..models.db import db
from ..models.barber import Barber
from ..models.appointment import Appointment
from ..models.review import Review
from app.forms import AppointmentForm
from app.forms import ReviewForm
from datetime import datetime

barber_routes = Blueprint('barbers', __name__)

@barber_routes.route('/<int:barberId>/appointments', methods=['GET'])
def get_appointments(barberId):
    appointments = Appointment.query.all()
    return appointments.to_dict()

@barber_routes.route('/<int:id>/appointments', methods=['POST'])
def get_form(id):
    form = AppointmentForm()
    # print(request.get_json())
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        date_time = f"{form.data['date']} {form.data['time']}"
        dt = datetime.strptime(date_time, '%Y-%m-%d %H:%M')

        app = Appointment(
            firstName=form.data['firstName'],
            lastName=form.data['lastName'],
            datetime = dt,
            userId = current_user.id,
            barberId = id
            )
        db.session.add(app)
        db.session.commit()
        return app.to_dict()
    else:
        return jsonify("Something ain't right here!"), 500

@barber_routes.route('/<int:barberId>/reviews/create-review', methods=["POST"])
def get_review_form(barberId):
    form = ReviewForm()
    userId = current_user.id
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        review = Review()
        review.userId = userId
        review.barberId = barberId
        form.populate_obj(review)
        db.session.add(review)
        db.session.commit()
        return review.to_dict()
    else:
        return jsonify("It didn't do what it do, baby!")

@barber_routes.route('/<int:barberId>/appointments/<int:appointmentId>/delete', methods=['DELETE'])
def delete_appointments(barberId, appointmentId):
    appointment = Appointment.query.get(appointmentId)
    db.session.delete(appointment)
    db.session.commit()
    return {"message": 'Delete Success'}

@barber_routes.route("/<string:date>/available-barbers/<int:barbershopId>")
def get_barbers(date, barbershopId):
    barbers = Barber.query.filter(Barber.barbershopId == barbershopId)
    available_barbers = {}
    for barber in barbers:
        available_barbers[barber.id] = {
           "times": [
                "10:00",
                "11:00",
                "12:00",
                "13:00",
                "14:00",
                "15:00",
                "16:00",
                "17:00",
            ],
            "nickname": barber.nickname
        }

        for appointment in barber.appointments:
            print(appointment.datetime.split(" ")[0])
            if appointment.datetime.split(" ")[0] == date:
                available_barbers[barber.id]["times"].pop(available_barbers[barber.id]["times"].index(appointment.datetime.split(" ")[1]))

    return {
        "barbers": available_barbers
    }


@barber_routes.route('/<int:barberId>/availability/<string:date>')
def get_availability():
    pass
