import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import Carousel from "../Carousel";
// import photo1 from "./hc2.jpg";
// import photo2 from "./hc3.jpg";
// import photo3 from "./hc6.jpg";
// import photo4 from "./hc5.jpg";
// import photo5 from "./hc7.jpg";
// import photo6 from "./hcpic4.jpg";
// import photo7 from "./hc4.jpg";
import "./HomePage.css";

const HomePage = () => {
  const user = useSelector((state) => state.session.user);
  return (
    <div className="homepage__revisited">
      <div className="home-page-container">
        <div className="homepage__info">
          <p>Find a barbershop</p>
          <p>Book an Appointment</p>
          <p>Leave a review</p>
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
          ></NavLink>
        ) : (
          <NavLink
            style={{
              textDecoration: "none",
              color: "black",
              backgroundColor: "rgba(255, 255, 255, 0.0)",
            }}
            className="homepage__dashboard--link"
            to={`/login`}
            exact={true}
          ></NavLink>
        )}
        <div className="homepage__blank"></div>
      </div>

      <section id="homepage_carousel">
        <Carousel />
      </section>
    </div>
  );
};

export default HomePage;
