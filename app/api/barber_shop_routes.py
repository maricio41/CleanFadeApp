from flask import Blueprint, jsonify, session, request
from flask_login import current_user
from ..models.db import db
from ..models.barbershop import BarberShop
# from ..models.barber import Barber
# from ..models.appointment import Appointment
# from ..forms.appointment_form import AppointmentForm
from ..forms.review_form import ReviewForm

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

# @barber_shop_route.route('/<int:id>/reviews/create', methods=['POST'])
# def create_review(id):
#     form = ReviewForm()
#     form['csrf_token'].data = request.cookies['csrf_token']
#     userId = current_user.id
#     barbershop = BarberShop.query.get(id)

#     if form.validate_on_submit():
#         review = Review()
#         review.userId = userId
#         review.barberId = barberId
#         form.populate_obj(review)
#         db.session.add(review)
#         db.session.commit()
#         return review.to_dict()
#     else:
#         return jsonify("It didn't do what it do, baby!")



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
