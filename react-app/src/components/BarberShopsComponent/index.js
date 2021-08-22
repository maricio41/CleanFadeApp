import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import { getBarberShops } from "../../store/barbershop";
import "./BarberShops.css";
// import shoppic from "./tiny_logo.jpg"

export default function BarberShops() {
  const dispatch = useDispatch();
  const { city } = useParams();
  const shops = useSelector((state) => state.barbershops.barbershops);

  useEffect(() => {
    dispatch(getBarberShops(city));
  }, [city, dispatch]);

  return (
    <main className="shops__container">
      <h2 className="shops-title">
        Barber Shops for the city of {city}, Georgia
      </h2>
      <section className="shops__container-glass">
        {shops?.map((barbershop, i) => (
          <div className="shop-card" key={`shopcard-${i}`}>
            <NavLink
              className="barbershop-link"
              to={`/barbershops/${barbershop.id}`}
              exact={true}
              key={`barbershop-link-${i}`}
            >
              <div className="shop-entry" key={i}>
                <div className="shop-entry__name" key={`shopname-${i}`}>
                  {barbershop.name}
                </div>
                <div className="shop-entry__hours" key={`shophours-${i}`}>
                  {barbershop.operationHours}
                </div>
                <div className="shop-entry__phone" key={`shopphone-${i}`}>
                  {barbershop.phoneNumber}
                </div>
              </div>
            </NavLink>
          </div>
        ))}
      </section>
    </main>
  );
}
