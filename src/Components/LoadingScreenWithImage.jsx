import React from "react";
import "./CSS/LoadingScreenWithImage.css";
import loadingImage from "../assets/Loding-image.png"; // Replace with your actual image path

const LoadingScreenWithImage = () => {
  return (
    <div className="loading-screen">
      <div className="loading-container">
        <img src={loadingImage} alt="Loading" className="loading-image" />
        <div className="rotating-border"></div>
      </div>
    </div>
  );
};

export default LoadingScreenWithImage;
