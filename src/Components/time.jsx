import React from "react";
import "./CSS/Timeline.css";
import Slider from "react-slick";

const Timeline = ({ events }) => {
  const imageSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="timeline">
      {events.map((event, index) => (
        <div
          key={index}
          className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
        >
          {index % 2 === 0 ? (
            <>
              <div className="timeline-content">
                <h2>{event.text.title}</h2>
                <span className="timeline-date">{event.text.date}</span>
                <p>{event.text.description}</p>
              </div>
              <div className="timeline-pillar"></div>
              <div className="timeline-image">
                <Slider {...imageSettings}>
                  {event.image.map((img, index) => (
                    <>
                      <img
                        className="timeline-image_img"
                        src={img}
                        alt={`Slide ${index}`}
                      />
                    </>
                  ))}
                </Slider>
                {/* <img src={event.image} alt={event.text.title} /> */}
              </div>
            </>
          ) : (
            <>
              <div className="timeline-image">
                <Slider {...imageSettings}>
                  {event.image.map((img, index) => (
                    <>
                      <img
                        className="timeline-image_img"
                        src={img}
                        alt={`Slide ${index}`}
                      />
                    </>
                  ))}
                </Slider>
                {/* <img src={event.image} alt={event.text.title} /> */}
              </div>
              <div className="timeline-pillar"></div>
              <div className="timeline-content">
                <h2>{event.text.title}</h2>
                <span className="timeline-date">{event.text.date}</span>
                <p>{event.text.description}</p>
              </div>
            </>
          )}
          <div className="timeline-heart fa-solid fa-heart"></div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
