import React from "react";
import Banner from "./Banner";
import Hero from "./Hero";
import Quality from "./Quality";
import BestSelling from "./BestSelling";
import CustomersSay from "./CustomersSay";
import Innovations from "./Innovations";
import Footer from "../Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <Hero />
      <Quality />
      <BestSelling />
      <CustomersSay />
      <Innovations />
      <Footer />
    </div>
  );
};

export default Home;
