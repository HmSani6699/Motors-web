import React from "react";
import Navbar from "../Navbar";
import Quality from "../Home/Quality";
import JourneyThrough from "./JourneyThrough";

const About = () => {
  return (
    <div className="mt-[15px]">
      <Navbar />
      <div className="pt-[60px]">
        <Quality />
        <JourneyThrough />
      </div>
    </div>
  );
};

export default About;
