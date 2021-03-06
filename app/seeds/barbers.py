from app.models import db, Barber


def seed_barbers():

    data = [
             Barber(firstname="Maricio", lastname="Harris", nickname="Reese", bio="I do cuts and stuff!", email = "reeselend247@gmail.com", avatarUrl = "https://www.minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg", barbershopId = 1),
             Barber(firstname="Curtis", lastname="Cooper", nickname="Coop", bio="I do cuts and stuff!", email = "reeselend247@gmail.com", avatarUrl = "https://www.minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg", barbershopId = 1),
             Barber(firstname="Steph", lastname="Curry", nickname="Chef Curry", bio="I do cuts and stuff!", email = "reeselend247@gmail.com", avatarUrl = "https://www.minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg", barbershopId = 1),
             Barber(firstname="LeBron", lastname="James", nickname="LeBronto", bio="I do cuts and stuff!", email = "reeselend247@gmail.com", avatarUrl = "https://www.minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg", barbershopId = 2),
             Barber(firstname="Ralph", lastname="Hollis", nickname="Big H", bio="I do cuts and stuff!", email = "reeselend247@gmail.com", avatarUrl = "https://www.minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg", barbershopId = 2),
             Barber(firstname="Shanedra", lastname="Green", nickname="Ree", bio="I do cuts and stuff!", email = "reeselend247@gmail.com", avatarUrl = "https://www.minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg", barbershopId = 2),
             Barber(firstname="Matt", lastname="Shaw", nickname="Matt", bio="I do cuts and stuff!", email = "reeselend247@gmail.com", avatarUrl = "https://www.minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg", barbershopId = 3),
             Barber(firstname="Oscar", lastname="Robertson", nickname="O. G.", bio="I do cuts and stuff!", email = "reeselend247@gmail.com", avatarUrl = "https://www.minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg", barbershopId = 8),
             Barber(firstname="Faizon", lastname="Pippen", nickname="Pipp", bio="I do cuts and stuff!", email = "reeselend247@gmail.com", avatarUrl = "https://www.minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg", barbershopId = 4),
             Barber(firstname="Alex", lastname="Hitchens", nickname="Hitch", bio="I do cuts and stuff!", email = "reeselend247@gmail.com", avatarUrl = "https://www.minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg", barbershopId = 5),
             Barber(firstname="John", lastname="Hancock", nickname="Handcock", bio="I do cuts and stuff!", email = "reeselend247@gmail.com", avatarUrl = "https://www.minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg", barbershopId = 6),
             Barber(firstname="Otis", lastname="Redding", nickname="Big O", bio="I do cuts and stuff!", email = "reeselend247@gmail.com", avatarUrl = "https://www.minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg", barbershopId = 5),
             Barber(firstname="Lisa", lastname="Coleman", nickname="Q", bio="I do cuts and stuff!", email = "reeselend247@gmail.com", avatarUrl = "https://www.minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg", barbershopId = 5),
             Barber(firstname="Holly", lastname="Queen", nickname="Holly", bio="I do cuts and stuff!", email = "reeselend247@gmail.com", avatarUrl = "https://www.minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg", barbershopId = 4),
             Barber(firstname="Mark", lastname="Hall", nickname="Mark", bio="I do cuts and stuff!", email = "reeselend247@gmail.com", avatarUrl = "https://www.minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg", barbershopId = 3),
             Barber(firstname="Joe", lastname="Bosley", nickname="JB", bio="I do cuts and stuff!", email = "reeselend247@gmail.com", avatarUrl = "https://www.minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg", barbershopId = 2),
             Barber(firstname="Hulk", lastname="Hogan", nickname="Hulkster", bio="I do cuts and stuff!", email = "reeselend247@gmail.com", avatarUrl = "https://www.minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg", barbershopId = 2),
             Barber(firstname="Randy", lastname="Savage", nickname="MachoMan", bio="I do cuts and stuff!", email = "reeselend247@gmail.com", avatarUrl = "https://www.minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg", barbershopId = 3),
             Barber(firstname="Rick", lastname="Flair", nickname="NatureBoy", bio="I do cuts and stuff!", email = "reeselend247@gmail.com", avatarUrl = "https://www.minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg", barbershopId = 3),
             Barber(firstname="Simone", lastname="Dedman", nickname="Dee", bio="I do cuts and stuff!", email = "reeselend247@gmail.com", avatarUrl = "https://www.minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg", barbershopId = 8),
             Barber(firstname="Coal", lastname="Dancer", nickname="Tomahawk", bio="I do cuts and stuff!", email = "reeselend247@gmail.com", avatarUrl = "https://www.minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg", barbershopId = 7),
             Barber(firstname="Cuthbert", lastname="Jenkins", nickname="Old School", bio="I do cuts and stuff!", email = "reeselend247@gmail.com", avatarUrl = "https://www.minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg", barbershopId = 7),
             Barber(firstname="Hulk", lastname="Hogan", nickname="Hulkster", bio="I do cuts and stuff!", email = "reeselend247@gmail.com", avatarUrl = "https://www.minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg", barbershopId = 9),
             Barber(firstname="Chuck", lastname="Savage", nickname="Charles", bio="I do cuts and stuff!", email = "reeselend247@gmail.com", avatarUrl = "https://www.minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg", barbershopId = 9),
             Barber(firstname="Harley", lastname="Flair", nickname="Harley", bio="I do cuts and stuff!", email = "reeselend247@gmail.com", avatarUrl = "https://www.minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg", barbershopId = 10),
             Barber(firstname="Hemath", lastname="Dedman", nickname="Deek", bio="I do cuts and stuff!", email = "reeselend247@gmail.com", avatarUrl = "https://www.minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg", barbershopId = 11),
             Barber(firstname="Fire", lastname="Dancer", nickname="Hawk", bio="I do cuts and stuff!", email = "reeselend247@gmail.com", avatarUrl = "https://www.minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg", barbershopId = 12),
             Barber(firstname="Bueller", lastname="Jenkins", nickname="School", bio="I do cuts and stuff!", email = "reeselend247@gmail.com", avatarUrl = "https://www.minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg", barbershopId = 11),
           ]
    for barber in data:
        db.session.add(barber)
    db.session.commit()


def undo_barbers():
    db.session.execute('TRUNCATE barbers RESTART IDENTITY CASCADE;')
    db.session.commit()
