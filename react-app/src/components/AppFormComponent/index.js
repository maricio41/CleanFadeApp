import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
// import DateTimePicker from "react-datetime-picker";
import { addNewAppointment } from "../../store/appointments";

import "./AppForm.css";
import "./AppFormII.css";
import { getBarberShop } from "../../store/barbershop";

export default function AppForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { barbershopId } = useParams();
  const user = useSelector((state) => state.session.user);
  const barbershop = useSelector((state) => state.barbershops.barbershop);
  const [selectBarber, setSelectBarber] = useState(0);
  const [date, setDatetime] = useState(new Date());
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [time, setTime] = useState("10:00");

  useEffect(() => {
    dispatch(getBarberShop(Number(barbershopId)));
  }, [barbershopId, dispatch]);
  if (!barbershop) {
    return <h1>Loading...</h1>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectBarber === 0) {
      window.alert("Please select a barber!");
      return;
    }

    await dispatch(
      addNewAppointment(selectBarber, { firstName, lastName, date, time })
    );
    window.alert("Appointment Created!");
    history.push(`/users/${user.id}`);
  };
  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const updateLastName = (e) => {
    setLastName(e.target.value);
  };
  return (
    <div className="app-container">
      <h2>Book an Appointment</h2>
      <form className="app-form" onSubmit={handleSubmit}>
        <label className="name-inputs" for="firstname-input">
          First Name
        </label>
        <input
          className="first-name"
          name="first-name"
          placeholder="First Name"
          value={firstName}
          type="text"
          onChange={updateFirstName}
        />

        <label className="name-inputs" for="lastname-input">
          Last Name
        </label>
        <input
          className="last-name"
          name="last-name"
          placeholder="Last Name"
          value={lastName}
          type="text"
          onChange={updateLastName}
        />

        <label className="appt-labels" for="date-selector">
          Select a Date
        </label>
        <input
          className="calendar"
          type="date"
          value={date}
          onChange={(e) => {
            setDatetime(e.target.value);
          }}
        />

        <label className="appt-labels" for="time-selector">
          Select a time
        </label>
        <select
          value={time}
          onChange={(e) => {
            setTime(e.target.value);
          }}
          id="time-selector"
        >
          <option value={"10:00"}>10:00 AM</option>
          <option value={"11:00"}>11:00 AM</option>
          <option value={"12:00"}>12:00 PM</option>
          <option value={"13:00"}>01:00 PM</option>
          <option value={"14:00"}>02:00 PM</option>
          <option value={"15:00"}>03:00 PM</option>
          <option value={"16:00"}>04:00 PM</option>
          <option value={"17:00"}>05:00 PM</option>
        </select>
        <label className="appt-labels" for="barber-selector">
          {" "}
          Choose a Barber
        </label>
        <select
          value={selectBarber}
          onChange={(e) => {
            setSelectBarber(e.target.value);
          }}
          name="barbers"
          id="barber-selector"
        >
          <option value={0}>Please select a barber</option>
          {barbershop.barbers.map((barber) => {
            return (
              <option value={barber.id} key={barber.id}>
                {barber.nickname}
              </option>
            );
          })}
        </select>

        <button className="booking-button" type="submit">
          Click to Book
        </button>
      </form>
    </div>
  );
}
