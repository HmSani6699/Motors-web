import React from "react";
import Banner from "./Banner";
import Hero from "./Hero";
import Quality from "./Quality";
import BestSelling from "./BestSelling";
import CustomersSay from "./CustomersSay";

const Home = () => {
  return (
    <div>
      <Banner />
      <Hero />
      <Quality />
      <BestSelling />
      <CustomersSay />
    </div>
  );
};

export default Home;
