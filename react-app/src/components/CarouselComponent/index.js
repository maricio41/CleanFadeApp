import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import photo1 from "./hc2.jpg";
import photo2 from "./hc3.jpg";
import photo3 from "./hc4.jpg";

const CarouselComponent = () => {
  return (
    <div className="carousel__container">
      <Carousel infiniteLoop useKeyboardArrows autoPlay>
        <div>
          <img src={photo1} />
        </div>
        <div>
          <img src={photo2} />
        </div>
        <div>
          <img src={photo3} />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
