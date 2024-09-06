import React from "react";
import Slider from "react-slick";
import "./CSS/Hero.css";
import slide1 from "../assets/Slids/slide-1.jpg";
import slide2 from "../assets/Slids/slide-2.jpg";

const Hero = () => {
  const imageSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="hero-container">
      <Slider {...imageSettings}>
        <div className="carousel-slide">
          <img src={slide1} alt="Slide 1" />
        </div>
        <div className="carousel-slide">
          <img src={slide2} alt="Slide 2" />
        </div>
      </Slider>

      <div className="hero-slide">
        <div className="content">
          <h1 className="great-vibes-regular">Suntina & Famico</h1>
          <h3>WE'RE GETTING MARRIED</h3>
        </div>
        <div className="Dates">
          <h4>Save the Date</h4>
          <h5>25 Dec 2025</h5>
        </div>
      </div>
    </div>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="next-arrow" onClick={onClick}>
      &gt;
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="prev-arrow" onClick={onClick}>
      &lt;
    </div>
  );
};

export default Hero;
