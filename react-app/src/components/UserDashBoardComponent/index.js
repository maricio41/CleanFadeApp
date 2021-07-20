import React, { useState, useEffect } from "react";
import { useParams, useHistory, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCities } from "../../store/barbershop";
import {
  getAppointment,
  getAppointments,
  deleteAppointment,
} from "../../store/appointments";
import photo from "./headshot2.jpg";
import MyReviews from "../Reviews";

import "./UserDashBoard.css";

export default function UserDashBoard() {
  const dispatch = useDispatch();
  const history = useHistory();
  const cities = useSelector((state) => state.barbershops.cities);
  const appointments = useSelector((state) => state.session.user.appointments);
  const [user, setUser] = useState({});
  const [city, setCity] = useState(0);

  // Notice we use useParams here instead of getting the params
  // From props.
  const { userId, barberId, appointmentId } = useParams();

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

  // useEffect(() =>{
  //   dispatch(getAppointment(barberId, appointmentId))
  // }, [barberId, appointmentId])
  // useEffect(() =>{
  //   dispatch(getAppointments(barberId))
  // }, [barberId, dispatch])

  useEffect(() => {
    dispatch(getAllCities());
  }, [dispatch]);

  if (!user) {
    return null;
  }

  const onDelete = async (barberId, appointmentId) => {
    await dispatch(deleteAppointment(barberId, appointmentId));
  };

  const onSubmit = () => {
    if (city === 0) {
      window.alert("Please select a city!");
      return;
    }
    history.push(`/barbershops/search/${city}`);
  };

  return (
    <div className="userdash__container">
      <header>
        <h2 id="userdash__title" className="userdash__title">
          {user.firstname}'s User Dashboard
        </h2>
      </header>
      <main>
        <section className="glass">
          <div className="userdash__user-profile">
            <img id="user-profile-pic" src={photo} alt=""></img>
            {user.firstname} {user.lastname}
          </div>
          <div className="userdash__features">
            {/* <div className="userdash__citySearch">
              <div className="city-container">
                <label>
                  <h3>Find a Barbershop</h3>{" "}
                </label>
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
                <button className="userdash__search-submit" onClick={onSubmit}>
                  {" "}
                  Submit{" "}
                </button>
              </div>
            </div> */}
            <div className="userdash__review-container">
              <h1>My Recent Reviews</h1>
              <MyReviews />
              <h1>Upcomings Appointments</h1>
            </div>

            <div className="userdash__appointments-container">
              <div className="userdash__appt-upcoming">
                {appointments?.map((appointment) => {
                  const event = new Date(appointment.datetime);
                  console.log(appointment.barber);
                  return (
                    <div className="single-appointment">
                      {`Your have an appointment on ${event.toDateString()} with ${
                        appointment.actualBarber.firstname
                      }`}
                      <button
                        className="userdash__AppCancel"
                        type="button"
                        onClick={() =>
                          onDelete(appointment.barber, appointment.id)
                        }
                      >
                        Cancel
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
