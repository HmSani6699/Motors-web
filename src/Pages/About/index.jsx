import React from "react";
import Navbar from "../Navbar";
import Quality from "../Home/Quality";
import JourneyThrough from "./JourneyThrough";
import DrivenByPassion from "./DrivenByPassion";
import Visionaries from "./Visionaries";
import Footer from "../Footer";

const About = () => {
  return (
    <div className="">
      <Navbar />
      <div className="pt-[60px]">
        <Quality />
        <JourneyThrough />
        <DrivenByPassion />
        <Visionaries />
        <Footer />
      </div>
    </div>
  );
};

export default About;
