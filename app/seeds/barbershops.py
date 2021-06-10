from app.models import db, BarberShop


def seed_barbershops():

    data = [
                BarberShop(
                    name = "RaZor Sharpe",
                    address1 = "1640 N. Slappey Blvd",
                    address2 = "Suite 200",
                    phoneNumber = "(229)883-3400",
                    operationHours = "Monday - Friday: 10am - 7pm, Saturday: 8am - 6pm, Sunday: Appointment Only!",
                    website = "https://www.raZorSharpe.co",
                    bizImage = '',
                    city = "Albany",
                    state = "Georgia",
                    postalCode = "31707"
                ),
                BarberShop(
                    name = "Jones Barbershop",
                    address1 = "1200 S. Slappey Blvd",
                    address2 = "Suite 500",
                    phoneNumber = "(229)883-1001",
                    operationHours = "Monday - Friday: 10am - 7pm, Saturday: 8am - 6pm, Sunday: Appointment Only!",
                    website = "https://www.jonesbarbershop.com",
                    bizImage = '',
                    city = "Albany",
                    state = "Georgia",
                    postalCode = "31701"
                ),
                BarberShop(
                    name = "Prestige Barbers",
                    address1 = "1640 N. Slappey Blvd",
                    address2 = "Suite 200",
                    phoneNumber = "(229)888-5900",
                    operationHours = "Monday - Friday: 10am - 7pm, Saturday: 8am - 6pm, Sunday: Appointment Only!",
                    website = "https://www.prestigebarbers.biz",
                    bizImage = '',
                    city = "Albany",
                    state = "Georgia",
                    postalCode = "31705"
                ),
                BarberShop(
                    name = "Cut Above",
                    address1 = "1640 N. Slappey Blvd",
                    address2 = "Suite 200",
                    phoneNumber = "(229)435-1600",
                    operationHours = "Monday - Friday: 10am - 7pm, Saturday: 8am - 6pm, Sunday: Appointment Only!",
                    website = "https://www.cutabove.com",
                    bizImage = '',
                    city = "Albany",
                    state = "Georgia",
                    postalCode = "31710"
                ),
                BarberShop(
                    name = "Super Duper Cuts",
                    address1 = "1640 N. Slappey Blvd",
                    address2 = "Suite 200",
                    phoneNumber = "(912)883-6500",
                    operationHours = "Monday - Friday: 10am - 7pm, Saturday: 8am - 6pm, Sunday: Appointment Only!",
                    website = "https://www.dupercuts.io",
                    bizImage = '',
                    city = "Cuthbert",
                    state = "Georgia",
                    postalCode = "39840"
                ),
                BarberShop(
                    name = "Burburry Salon",
                    address1 = "1640 N. Slappey Blvd",
                    address2 = "Suite 200",
                    phoneNumber = "(912)583-6600",
                    operationHours = "Monday - Friday: 10am - 7pm, Saturday: 8am - 6pm, Sunday: Appointment Only!",
                    website = "https://www.burburrysalon.com",
                    bizImage = '',
                    city = "Cuthbert",
                    state = "Georgia",
                    postalCode = "39840"
                ),
                BarberShop(
                    name = "At Your Own Risk",
                    address1 = "1640 N. Slappey Blvd",
                    address2 = "Suite 200",
                    phoneNumber = "(229)733-3400",
                    operationHours = "Monday - Friday: 10am - 7pm, Saturday: 8am - 6pm, Sunday: Appointment Only!",
                    website = "https://www.atyourownrisk.com",
                    bizImage = '',
                    city = "Camilla",
                    state = "Georgia",
                    postalCode = "31730"
                ),
                BarberShop(
                    name = "Salon de Fabulous",
                    address1 = "500 N. Main Street",
                    address2 = "Suite 200",
                    phoneNumber = "(229)555-7500",
                    operationHours = "Monday - Friday: 10am - 7pm, Saturday: 8am - 6pm, Sunday: Appointment Only!",
                    website = "https://www.fabulous.com",
                    bizImage = '',
                    city = "Camilla",
                    state = "Georgia",
                    postalCode = "31730"
                ),
           ]
    for barbershop in data:
        db.session.add(barbershop)
    db.session.commit()


def undo_barbershops():
    db.session.execute('TRUNCATE barbershops RESTART IDENTITY CASCADE;')
    db.session.commit()
