from flask import Blueprint, request
from flask_login import current_user
from ..models.db import db
from ..models.review import Review


review_routes = Blueprint('reviews', __name__)


@review_routes.route('/user', methods=['GET'])
def get_reviews():
    userId = current_user.id
    reviews = Review.query.all()
    userReviews = Review.query.filter(Review.userId == userId).all()
    return {
        "reviews": [review.to_dict() for review in reviews],
        "userReviews": {userReview.id: userReview.to_dict() for userReview in userReviews}
    }

@review_routes.route('/<int:id>', methods=["GET"])
def get_review(id):
    review = Review.query.get(id)
    return review.to_dict()

@review_routes.route('/<int:id>/reviews/edit', methods=["PATCH"])
def update_review(id):
    review = Review.query.get(id)
    if review:
        review.reviewBody = request.json['reviewBody']
        review.rating = request.json['rating']
        db.session.add(review)
        db.session.commit()
        return f'{Review} was successfully updated'
    return {"Errors": "Bad Request"}, 400


@review_routes.route('/<int:id>/delete', methods=['DELETE'])
def delete_review(id):
    review = Review.query.get(id)
    db.session.delete(review)
    db.session.commit()
    return {"message": 'Delete Success'}
