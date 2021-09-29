import React from "react";
import photo1 from "./hc2.jpg";
import photo2 from "./hc3.jpg";
import photo3 from "./hc6.jpg";
import photo4 from "./hc5.jpg";
import photo5 from "./hc7.jpg";
import photo6 from "./hcpic4.jpg";
import photo7 from "./hc4.jpg";
import "./Carousel.css";

const Carousel = () => {
  return (
    <section id="photo-carousel">
      <div
        id="homepage-carousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={photo1}
              className="d-block w-150 photo-frame"
              alt="hompage-photo1"
            />
          </div>
          <div className="carousel-item">
            <img
              src={photo2}
              className="d-block w-150 photo-frame"
              alt="hompage-photo2"
            />
          </div>
          <div class="carousel-item">
            <img
              src={photo3}
              className="d-block w-150 photo-frame"
              alt="hompage-photo3"
            />
          </div>
          <div class="carousel-item">
            <img
              src={photo4}
              className="d-block w-150 photo-frame"
              alt="hompage-photo4"
            />
          </div>
          <div class="carousel-item">
            <img
              src={photo5}
              className="d-block w-150 photo-frame"
              alt="hompage-photo5"
            />
          </div>
          <div class="carousel-item">
            <img
              src={photo6}
              className="d-block w-150 photo-frame"
              alt="hompage-photo6"
            />
          </div>
          <div class="carousel-item">
            <img
              src={photo7}
              className="d-block w-150 photo-frame"
              alt="hompage-photo7"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#homepage-carousel"
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
          data-bs-target="#homepage-carousel"
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
  );
};

export default Carousel;
