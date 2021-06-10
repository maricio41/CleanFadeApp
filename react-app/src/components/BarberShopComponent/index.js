import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
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
      {barbershop && (
        <div className="info-container">
          <h1>{barbershop.name}</h1>
          <p>{barbershop.address1}</p>
          <p>{barbershop.address2}</p>
          <p>
            {barbershop.city}, {barbershop.state}, {barbershop.postalCode}
          </p>
          <p>{barbershop.phoneNumber}</p>
          <p>{barbershop.operationHours}</p>
          <p>Website:{barbershop.website}</p>
        </div>
      )}
      <button className="appt-btn" onClick={onSubmit}>
        Shedule an Appointment
      </button>
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
