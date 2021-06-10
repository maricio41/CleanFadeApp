import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
// import DateTimePicker from "react-datetime-picker";
import { addNewAppointment } from "../../store/appointments";

import { Form } from "react-bootstrap";

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
  // const [min, setMin] = useState();
  // const [max, setMax] = useState();
  const [time, setTime] = useState("10:00");


  useEffect(() => {
    dispatch(getBarberShop(Number(barbershopId)));
  }, [barbershopId, dispatch]);
  if (!barbershop) {
    return <h1>Loading...</h1>;
  }



  const handleSubmit = async (e) => {
    e.preventDefault();


    if(selectBarber === 0){
      window.alert("Please select a barber!")
      return
    }

    await dispatch(addNewAppointment(selectBarber, {date, time}))
    window.alert("Appointment Created!");
    history.push(`/users/${user.id}`)
  };


  return (
    <div className="app-container">
      <Form onSubmit={handleSubmit}>
        <input
          type="date"
          value={date}
          onChange={(e) => {
            setDatetime(e.target.value);
          }}
        />


        <label for="time-selector">Select a time</label>
        <select value={time} onChange={(e) => {setTime(e.target.value)}} id="time-selector">
          <option value={"10:00"}>10:00 AM</option>
          <option value={"11:00"}>11:00 AM</option>
          <option value={"12:00"}>12:00 PM</option>
          <option value={"13:00"}>01:00 PM</option>
          <option value={"14:00"}>02:00 PM</option>
          <option value={"15:00"}>03:00 PM</option>
          <option value={"16:00"}>04:00 PM</option>
          <option value={"17:00"}>05:00 PM</option>
        </select>
        <label for="barber-selector"> Choose a Barber</label>
        <select
          value={selectBarber}
          onChange={(e) => {
            setSelectBarber(e.target.value);
          }}
          name="barbers"
          id="barber-selector"
        >
          <option value={0} >
            Please select a barber
          </option>
          {barbershop.barbers.map((barber) => {
            return (
              <option value={barber.id} key={barber.id}>
                {barber.nickname}
              </option>
            );
          })}
        </select>

        <button type="submit">Schedule an Appointment</button>
      </Form>
    </div>
  );
}
