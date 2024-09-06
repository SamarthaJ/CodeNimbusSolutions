import React from "react";
import { Link } from "react-scroll";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./CSS/nav.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <a href="#" className="logo">
        S<i className="fa fa-heart"></i>F
      </a>
      <ul className="nav navbar-nav">
        <li className="active">
          <Link to="hero" smooth={true} duration={500}>
            HOME
          </Link>
        </li>
        <li>
          <Link to="couple" smooth={true} duration={500}>
            COUPLE
          </Link>
        </li>
        <li>
          <Link to="story" smooth={true} duration={500}>
            STORY
          </Link>
        </li>
        <li>
          <Link to="events" smooth={true} duration={500}>
            EVENTS
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
