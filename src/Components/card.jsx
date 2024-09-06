import React from "react";
import { FaFacebook, FaTwitter, FaPinterest, FaVine } from "react-icons/fa";

const Card = ({ type }) => {
  const groomsmenContent = [
    {
      name: "John Doe",
      role: "Best Man",
      image: "https://via.placeholder.com/100",
      social: { facebook: "#", twitter: "#", pinterest: "#", vine: "#" },
    },
    {
      name: "Mike Ross",
      role: "Groomsman",
      image: "https://via.placeholder.com/100",
      social: { facebook: "#", twitter: "#", pinterest: "#", vine: "#" },
    },
    {
      name: "Harvey Specter",
      role: "Groomsman",
      image: "https://via.placeholder.com/100",
      social: { facebook: "#", twitter: "#", pinterest: "#", vine: "#" },
    },
  ];

  const bridesmaidContent = [
    {
      name: "Rachel Zane",
      role: "Maid of Honor",
      image: "https://via.placeholder.com/100",
      social: { facebook: "#", twitter: "#", pinterest: "#", vine: "#" },
    },
    {
      name: "Donna Paulsen",
      role: "Bridesmaid",
      image: "https://via.placeholder.com/100",
      social: { facebook: "#", twitter: "#", pinterest: "#", vine: "#" },
    },
    {
      name: "Jessica Pearson",
      role: "Bridesmaid",
      image: "https://via.placeholder.com/100",
      social: { facebook: "#", twitter: "#", pinterest: "#", vine: "#" },
    },
  ];

  const content = type === "groomsmen" ? groomsmenContent : bridesmaidContent;

  return (
    <div className="card-container">
      {content.map((person, index) => (
        <div key={index} className="card">
          <img
            src={person.image}
            alt={`${person.name}`}
            className="card-image"
          />{" "}
          <h3>{person.name}</h3>
          <p>{person.role}</p>
          <div className="social-icons">
            <a
              href={person.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href={person.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href={person.social.pinterest}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPinterest />
            </a>
            <a
              href={person.social.vine}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaVine />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
