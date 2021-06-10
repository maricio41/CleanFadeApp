from .db import db


class BarberShop(db.Model):
    __tablename__ = "barbershops"

    id = db.Column(db.Integer, nullable=False, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    address1 = db.Column(db.String(100), nullable=False)
    address2 = db.Column(db.String(100), nullable=True)
    phoneNumber = db.Column(db.String(50), nullable=False)
    operationHours = db.Column(db.String(2000), nullable=False)
    website = db.Column(db.String(255), nullable=True)
    bizImage = db.Column(db.String(255), nullable=True)
    city = db.Column(db.String(50), nullable=False)
    state = db.Column(db.String(50), nullable=False)
    postalCode = db.Column(db.String(20), nullable=False)

    barbers = db.relationship("Barber", back_populates="barbershop")


    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "address1": self.address1,
            "address2": self.address2,
            "phoneNumber": self.phoneNumber,
            "operationHours": self.operationHours,
            "website": self.website,
            "bizImage": self.bizImage,
            "city": self.city,
            "state": self.state,
            "postalCode": self.postalCode,
            "barbers": [barber.to_dict() for barber in self.barbers]
        }
