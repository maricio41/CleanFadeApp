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
    <div className="shops-container">
      <h2 className="shops-title">Barber Shops for the city of {city}, Georgia</h2>

        {shops?.map((barbershop) => (
          <div className="shop-card">
            {/* <img src={shoppic} className="shop-img" alt="shop_image"/> */}
            <NavLink className="barbershop-link"to={`/barbershops/${barbershop.id}`} exact={true}>
              {barbershop.name}
            </NavLink>
          </div>
        ))}

      </div>

  );
}
