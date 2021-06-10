from .db import db



class Barber(db.Model):
    __tablename__ = "barbers"

    id = db.Column(db.Integer, nullable = False, primary_key = True)
    firstname = db.Column(db.String(50), nullable = False)
    lastname = db.Column(db.String(50), nullable = False)
    nickname = db.Column(db.String(50), nullable = True)
    bio = db.Column(db.String(2000), nullable = False)
    email = db.Column(db.String(255), nullable = False)
    avatarUrl = db.Column(db.String(255), nullable = True)
    barbershopId = db.Column(db.Integer, db.ForeignKey("barbershops.id"), nullable = False )

    appointments = db.relationship("Appointment", back_populates='barber')
    barbershop = db.relationship("BarberShop", back_populates='barbers')
    reviews = db.relationship('Review', back_populates="barber")

    def to_dict(self):
        return {
            "id": self.id,
            "firstname": self.firstname,
            "lastname": self.lastname,
            "nickname": self.nickname,
            "bio": self.nickname,
            "email": self.email,
            "avatarUrl": self.avatarUrl,
            "barbershopId": self.barbershopId,
            
        }
