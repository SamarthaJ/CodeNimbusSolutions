import React from "react";
import CoupleDetalies from "./CoupleDetalies";
import "./CSS/Couple.css";
const Couple = () => {
  return (
    <div className="couple-container">
      <CoupleDetalies isGroom={true} />
      <CoupleDetalies isGroom={false} />
    </div>
  );
};

export default Couple;
