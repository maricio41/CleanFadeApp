import React, { useState, useEffect } from "react";
import { useParams, useHistory, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCities } from "../../store/barbershop";
import MyReviews from "../Reviews";


import "./UserDashBoard.css";

export default function UserDashBoard() {
  const dispatch = useDispatch();
  const history = useHistory();
  const cities = useSelector((state) => state.barbershops.cities);
  const [user, setUser] = useState({});
  const [city, setCity] = useState(0);

  // Notice we use useParams here instead of getting the params
  // From props.
  const { userId } = useParams();

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId, dispatch]);

  useEffect(() => {
    dispatch(getAllCities());
  }, [dispatch]);

  if (!user) {
    return null;
  }
  const onSubmit = () => {
    if (city === 0) {
      window.alert("Please select a city!");
      return;
    }
    history.push(`/barbershops/search/${city}`);
  };

  return (
    <div className="userdash__container">
      <h2 className="userdash__title">{user.firstname}'s User Dashboard</h2>
        <div className="userdash__citySearch">
          <div className="city-container">
            <label><h3>Find a Barbershop</h3> </label>
            <select
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            >
              <option value={0}>Please choose a city</option>
              {cities &&
                Object.values(cities).map((city) => {
                  return <option value={city}>{city}</option>;
                })}
            </select>
            <button className="userdash__search-submit" onClick={onSubmit}> Submit </button>
          </div>
        </div>
        <div className="userdash__review-container">
          <MyReviews />
          <NavLink className="userdash__create-review" to={`/reviews/create`} exact={true}>Write a Review</NavLink>
        </div>
        <div className="userdash__appointments-container">
          <h2>Upcomings Appointments</h2>
          <div className="userdash__appt-upcoming">
            {user.appointments?.map((appointment) =>{
                const event = new Date(appointment.datetime)
                return <div>{`Your next appointment is scheduled for ${event.toDateString()}`}</div>
            })}

          </div>

        </div>

    </div>
  );
}
