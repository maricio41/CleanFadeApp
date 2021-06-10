from flask import Blueprint, jsonify, session, request
from flask_login import current_user
from ..models.db import db
from ..models.barbershop import BarberShop
from ..models.barber import Barber
from ..models.appointment import Appointment
from ..forms.appointment_form import AppointmentForm

barber_shop_routes = Blueprint('barbershops', __name__)

@barber_shop_routes.route('/cities')
def get_barbershop_cities():
    barbershops = BarberShop.query.all()
    if barbershops:
        return {barbershop.city: barbershop.city for barbershop in barbershops }
    else:
        return {"errors": f'{input_city} does not exist'}

@barber_shop_routes.route('/search/<string:input_city>', methods = ['GET'])
def get_city_barbershops(input_city):
    barbershops = BarberShop.query.filter(BarberShop.city == input_city).all()
    if barbershops:
        return {"barbershops": [barbershop.to_dict() for barbershop in barbershops]}
    else:
        return {"errors": f'{input_city} does not exist'}


@barber_shop_routes.route('/<int:id>', methods=['GET'])
def get_barbershop(id):
    print("-----")
    barbershop = BarberShop.query.get(id)
    print(barbershop.to_dict())
    return {
    "barbershop": barbershop.to_dict(),
    }

# @barber_shop_routes.route('/<int:id>/appointments', methods = ['POST'])
# def get_form(id):
#     form = AppointmentForm()
#     form['csrf_token'].data = request_cookies['csrf_token']

#     if form.validate_on_submit():
#         # data = Appointment()
#         app = Appointment(datetime = dt, userId = current_user.id, barberid = id)
#         db.session.add(data)
#         db.session.commit()
#         return app.to_dict()
#     else:
#         return "Something ain't right here!"
