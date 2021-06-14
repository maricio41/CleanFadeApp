import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, NavLink } from "react-router-dom";
import { getBarberShop } from "../../store/barbershop";
import "./BarberShop.css";

export default function Barbershop() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { barbershopId } = useParams();
  const [barberId, setBarberId] = useState(null);
  const [isHidden, setIsHidden] = useState(false);


  const barbershop = useSelector((state) => state.barbershops.barbershop);

  useEffect(() => {
    dispatch(getBarberShop(barbershopId));
  }, [barbershopId, dispatch]);

  const openForm = (e, barberId) => {
    setIsHidden(false);
    setBarberId(barberId);
  };
  const onSubmit = () => {
    history.push(`/appointments/${barbershopId}`);
  };

  return (
    <div className="shop-container">
      <div className="shop-pic"></div>
      {barbershop && (

        <div className="info-container">
          <h1>{barbershop.name}</h1>
          <div>{barbershop.address1}</div>
          <div>{barbershop.address2}</div>
          <div>
            {barbershop.city}, {barbershop.state}, {barbershop.postalCode}
          </div>
          <div>{barbershop.phoneNumber}</div>
          <div>{barbershop.operationHours}</div>
          <div>Website:{barbershop.website}</div>
        </div>
      )}
      <NavLink to={"/appointments/:barbershopId"} className="appt-btn" onClick={onSubmit}>
        Shedule an Appointment
      </NavLink>
      {barbershop && (
        <NavLink to={`/barbershops/${barbershop.id}/create-review`} className="review-btn" onClick={onSubmit}>
          Write a Review
        </NavLink>

      )}
      <div>
        {barbershop?.barbershop?.barbers?.map((barber) => (
          <div>
            {barber.name}
            <div onClick={(e) => openForm(e, barber.id)}>{barber.name}</div>
            <div>{barber.id}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
