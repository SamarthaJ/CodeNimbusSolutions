import React from "react";
import { SocialIcon } from "react-social-icons";
import "./CSS/Couple.css";
import groom from "../assets/couples/img-1.jpg";
import bride from "../assets/couples/img-2.jpg";

const CoupleDetails = ({ isGroom }) => {
  return (
    <div className="couple">
      {isGroom ? (
        <div className="couples">
          <div>
            <img src={groom} alt="Groom" />
          </div>
          <div className="couple-details">
            <p className="couple-name">THE GROOM</p>
            <p className="couple-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
              quisquam at blanditiis, nam enim beatae fugiat illo magnam, nulla
              consequatur, numquam similique velit dolores incidunt quo maiores
              ullam error voluptatum non saepe.
            </p>
            <p className="couple-sign">- Suntina</p>
            <div className="social-icons">
              <SocialIcon
                style={{ height: "40px", width: "40px" }}
                bgColor="#5e9a8e"
                network="facebook"
                url="#"
              />
              <SocialIcon
                style={{ height: "40px", width: "40px" }}
                bgColor="#5e9a8e"
                network="twitter"
                url="#"
              />
              <SocialIcon
                style={{ height: "40px", width: "40px" }}
                bgColor="#5e9a8e"
                network="pinterest"
                url="#"
              />
              <SocialIcon
                style={{ height: "40px", width: "40px" }}
                bgColor="#5e9a8e"
                network="google"
                url="#"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="couples">
          <div className="couple-details_bride">
            <p className="couple-name">THE BRIDE</p>
            <p className="couple-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
              quisquam at blanditiis, nam enim beatae fugiat illo magnam, nulla
              consequatur, numquam similique velit dolores incidunt quo maiores
              ullam error voluptatum non saepe.
            </p>
            <p className="couple-sign">Famico -</p>
            <div className="social-icons">
              <SocialIcon
                style={{ height: "40px", width: "40px" }}
                bgColor="#5e9a8e"
                network="facebook"
                url="#"
              />
              <SocialIcon
                style={{ height: "40px", width: "40px" }}
                bgColor="#5e9a8e"
                network="twitter"
                url="#"
              />
              <SocialIcon
                style={{ height: "40px", width: "40px" }}
                bgColor="#5e9a8e"
                network="pinterest"
                url="#"
              />
              <SocialIcon
                style={{ height: "40px", width: "40px" }}
                bgColor="#5e9a8e"
                network="google"
                url="#"
              />
            </div>
          </div>
          <div>
            <img src={bride} alt="Groom" />
          </div>
        </div>
      )}
    </div>
  );
};

export default CoupleDetails;
