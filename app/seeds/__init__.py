from flask.cli import AppGroup
from .users import seed_users, undo_users
from .barbershops import seed_barbershops, undo_barbershops
from .barbers import seed_barbers, undo_barbers
from .appointments import seed_appointments, undo_appointments
from .reviews import seed_reviews, undo_reviews

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_barbershops()
    seed_barbers()
    seed_appointments()
    seed_reviews()
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_barbershops()
    undo_barbers()
    undo_appointments()
    undo_reviews()
    # Add other undo functions here
