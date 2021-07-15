from .db import db


class Appointment(db.Model):
    __tablename__ = "appointments"

    id = db.Column(db.Integer, nullable = False, primary_key=True)
    firstName = db.Column(db.String(50), nullable=False)
    lastName = db.Column(db.String(50), nullable=False)
    datetime = db.Column(db.String(255), unique=True, nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    barberId = db.Column(db.Integer, db.ForeignKey('barbers.id'), nullable=False)

    user = db.relationship("User", back_populates="appointments")
    barber = db.relationship("Barber", uselist=False, back_populates="appointments")


    def to_dict(self):
        return {
          "id": self.id,
          "datetime": self.datetime,
          "userId": self.userId,
          "barber": self.barberId,
          "actualBarber": self.barber.to_dict()

        }
