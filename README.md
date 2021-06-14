# CleanFade

CleanFade is a barbershop that allows a user to search for a barbershop by city, navigate the barbershops profile page, book an appointment and leave a review.

## Technologies
React
Redux
Python
Flask
SQLAlchemy

## Key Features
![search](https://github.com/maricio41/CleanFadeApp/blob/main/react-app/src/projectpics/cleanfadecitysearch.png)

![search](https://github.com/maricio41/CleanFadeApp/blob/main/react-app/src/projectpics/citysearch2.png)

![barbershop page](https://github.com/maricio41/CleanFadeApp/blob/main/react-app/src/projectpics/barbershopprofilepage.png)

## Instructions

Clone this repository

   ```bash
   git clone https://github.com/maricio41/CleanFadeApp
   ```
>1. In the root folder, run the following `pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt`
>2. Make a .env file based on the .env.example (add values where required)
>3. Create your PostgreSQL user, password, and database. The information must match your .env file.
>4. Enter your shell enviroment with `pipenv shell`
>5. `flask db upgrade`
>6. `flask seed all`
>7. `flask run`
>8. In the react-app folder, run `npm install` to install all frontend dependencies.
>9. In the react-app folder, run `npm start` to start the react app.
