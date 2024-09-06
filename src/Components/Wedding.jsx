import React from "react";
import "./CSS/Wedding.css";
import img_1 from "../assets/event/img-1.jpg";
import img_2 from "../assets/event/img-2.jpg";
const Wedding = () => {
  return (
    <>
      <div className="story">
        <span>Wedding Events</span>
      </div>
      <div className="wedding">
        <div className="contents">
          <div>
            <img className="image" src={img_1} alt="image" />
          </div>
          <div className="text">
            <h2>THE RECEPTION</h2>
            <ul>
              <li>
                <i className="fa fa-location-dot"></i>
                <span>32 big bro road, Chanpai, London.</span>
              </li>
              <li>
                <i className="fa fa-clock"></i>
                <span>Nov 25 2017, 9AM - 5PM</span>
              </li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              ut consequuntur hic magnam nostrum animi libero, praesentium vel
              tempore veniam maiores reprehenderit sequi sunt repellat sed
              quidem. Sunt, placeat distinctio.
            </p>
            <a href="">See Location &gt;</a>
          </div>
        </div>
        <div className="contents">
          <div>
            <img className="image" src={img_2} alt="image" />
          </div>
          <div className="text">
            <h2>WEDDING PARTY </h2>
            <ul>
              <li>
                <i className="fa fa-location-dot"></i>
                <span>32 big bro road, Chanpai, London.</span>
              </li>
              <li>
                <i className="fa fa-clock"></i>
                <span>Nov 25 2017, 9AM - 5PM</span>
              </li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              ut consequuntur hic magnam nostrum animi libero, praesentium vel
              tempore veniam maiores reprehenderit sequi sunt repellat sed
              quidem. Sunt, placeat distinctio.
            </p>
            <a href="">See Location &gt;</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wedding;
