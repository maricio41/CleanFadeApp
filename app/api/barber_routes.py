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
