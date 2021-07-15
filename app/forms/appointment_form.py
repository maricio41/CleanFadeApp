from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired


class AppointmentForm(FlaskForm):
    firstName = StringField('firstName', validators = [DataRequired()])
    lastName = StringField('lastName', validators = [DataRequired()])
    date = StringField('Date', validators = [DataRequired()])
    time = StringField('Time', validators = [DataRequired()])
