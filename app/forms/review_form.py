from flask_wtf import FlaskForm
from wtforms import StringField, SelectField
from wtforms.validators import DataRequired


class ReviewForm(FlaskForm):
    reviewBody = StringField('Review', validators=[DataRequired()])
    rating = SelectField('Rating', choices=[(1, "1 star"), (2, "2 stars"), (3, "3 stars"), (4, "4 stars"), (5, "5 Stars")], validators=[DataRequired()])
