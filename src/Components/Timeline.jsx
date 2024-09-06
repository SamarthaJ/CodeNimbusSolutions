import React from "react";
import Time from "./time";
// import "./assets/story/img_1.jpg";
import img_1 from "../assets/story/img-1.jpg";
import img_2 from "../assets/story/img-2.jpg";
import img_3 from "../assets/story/img-3.jpg";
import img_5 from "../assets/story/img-5.jpg";
import img_7 from "../assets/story/img-7.jpg";
import img_8 from "../assets/story/img-8.jpg";
const events = [
  {
    text: {
      title: "FIRST MEET",
      description:
        "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend,",
      date: "Jan 12 2023",
    },
    image: [img_1],
  },
  {
    text: {
      title: "FIRST DATE",
      description:
        "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend,",
      date: "Feb 12 2023",
    },
    image: [img_2, img_3],
  },
  {
    text: {
      title: "PROPOSAL",
      description:
        "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend,",
      date: "Apr 14 2023",
    },
    image: [img_5, img_7],
  },
  {
    text: {
      title: "ENAGAGEMENT",
      description:
        "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend,",
      date: "Jul 14 2023",
    },
    image: [img_8],
  },
];

const Timeline = () => {
  return <Time events={events} />;
};

export default Timeline;
