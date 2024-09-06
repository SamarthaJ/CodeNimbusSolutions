import React, { useState, useEffect } from "react"; // Import useState and useEffect
import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import Couple from "./Components/Couple";
import Countdown from "./Components/countdown";
import Separator from "./Components/Separator";
import Wedding from "./Components/Wedding";
import Timeline from "./Components/Timeline";
import LoadingScreenWithImage from "./Components/LoadingScreenWithImage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true); // State to handle loading

  // Simulate data loading with useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate a 2-second loading time
    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreenWithImage />
      ) : (
        <>
          <section id="hero">
            <Hero />
          </section>
          <Nav />
          <section id="couple">
            <Couple />
          </section>
          <Countdown />
          <section id="story">
            <Timeline />
          </section>
          <Separator />
          <section id="events">
            <Wedding />
          </section>
        </>
      )}
    </>
  );
};

export default App;
