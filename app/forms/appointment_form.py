from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

class AppointmentForm(FlaskForm):
    date = StringField('Date', validators = [DataRequired()])
    time = StringField('Time', validators = [DataRequired()])
