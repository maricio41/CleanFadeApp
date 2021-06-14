import React from "react";
import {useSelector} from 'react-redux'
import { NavLink } from "react-router-dom";
import { Container} from "react-bootstrap";
import "./HomePage.css";

const HomePage = () => {
  const user = useSelector((state) => state.session.user);
  return (
    <Container className="home-page-container">
      <div className="homepage__info">
        <div>Find a barbershop</div>
        <div>Book an Appointment</div>
        <div>Leave a review</div>
      </div>
      {user && (
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

      )}
      <div className="homepage__blank"></div>
    </Container>
  );
};

export default HomePage;
