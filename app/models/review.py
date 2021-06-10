from .db import db


class Review(db.Model):
    __tablename__ = "reviews"

    id = db.Column(db.Integer, primary_key=True)
    reviewBody = db.Column(db.String(2000), nullable=True)
    rating = db.Column(db.Integer, nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    barberId = db.Column(db.Integer, db.ForeignKey("barbers.id"), nullable=False)

    user = db.relationship('User', back_populates="reviews")
    barber = db.relationship('Barber', back_populates='reviews')

    def to_dict(self):
        return {
            "id": self.id,
            "reviewBody": self.reviewBody,
            "rating": self.rating,
            "userId": self.userId,
            "barberId": self.barberId,
            "barber": self.barber.to_dict(),
            "user": self.user.to_dict()
             }
