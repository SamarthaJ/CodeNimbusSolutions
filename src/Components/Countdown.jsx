import React, { useState, useEffect } from "react";
import "./CSS/countdown.css";

const Countdown = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countDownDate = new Date("Dec 25, 2025 15:37:25").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTime({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown">
      <div className="content">
        <h2 className="text-center">
          <span>We are waiting for....</span>
          The Adventure
        </h2>
        <div className="countdown-container">
          <div className="box">
            <span>{time.days}</span>
            <br /> DAYS
          </div>
          <div className="box">
            <span>{time.hours}</span>
            <br /> HOURS
          </div>
          <div className="box">
            <span>{time.minutes}</span>
            <br /> MINS
          </div>
          <div className="box">
            <span>{time.seconds}</span>
            <br /> SECS
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
