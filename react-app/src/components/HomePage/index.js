import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

// import CarouselComponent from "../CarouselComponent";
import photo1 from "./hc2.jpg";
import photo2 from "./hc3.jpg";
import photo3 from "./hc6.jpg";
import photo4 from "./hc5.jpg";
import photo5 from "./hc7.jpg";
import photo6 from "./hcpic4.jpg";
import photo7 from "./hc4.jpg";
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
        <div
          id="carousel_container"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-active-item">
              <img
                src={photo1}
                className="d-block w-100"
                alt="carousel_photo0"
              />
            </div>
            <div className="carousel-item">
              <img
                src={photo2}
                className="d-block w-100"
                alt="carousel_photo1"
              />
            </div>
            <div className="carousel-item">
              <img
                src={photo6}
                className="d-block w-100"
                alt="carousel_photo2"
              />
            </div>
            <div className="carousel-item">
              <img
                src={photo3}
                className="d-block w-100"
                alt="carousel_photo3"
              />
            </div>
            <div className="carousel-item">
              <img
                src={photo4}
                className="d-block w-100"
                alt="carousel_photo4"
              />
            </div>
            <div className="carousel-item">
              <img
                src={photo5}
                className="d-block w-100"
                alt="carousel_photo5"
              />
            </div>
            <div className="carousel-item">
              <img
                src={photo7}
                className="d-block w-100"
                alt="carousel_photo6"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carousel_container"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carousel_container"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
