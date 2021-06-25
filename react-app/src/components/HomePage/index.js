import React from "react";
import {useSelector} from 'react-redux'
import { NavLink } from "react-router-dom";
import CarouselComponent from "../CarouselComponent";
import "./HomePage.css";

const HomePage = () => {
  const user = useSelector((state) => state.session.user);
  return (
    <div className="homepage__revisited">

      <div className="home-page-container">
        <div className="homepage__info">
          <div>Find a barbershop</div>
          <div>Book an Appointment</div>
          <div>Leave a review</div>
        </div>
        {user ? (
          <NavLink
            style={{
              textDecoration: "none",
              color: "black",
              backgroundColor: "rgba(255, 255, 255, 0.0)",
            }}
            className="homepage__dashboard--link"
            to={`/users/${user.id}`}
            exact={true}
          >

        </NavLink>

        ): (
          <NavLink
            style={{
              textDecoration: "none",
              color: "black",
              backgroundColor: "rgba(255, 255, 255, 0.0)",
            }}
            className="homepage__dashboard--link"
            to={`/login`}
            exact={true}
          >

        </NavLink>

        )}
        <div className="homepage__blank"></div>
      </div>
      <div className="carousel__wrapper">
        <CarouselComponent />

      </div>
    </div>
  );
};

export default HomePage;
