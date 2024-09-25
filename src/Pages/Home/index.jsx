import React from "react";
import Banner from "./Banner";
import Hero from "./Hero";
import Quality from "./Quality";
import BestSelling from "./BestSelling";
import CustomersSay from "./CustomersSay";
import Innovations from "./Innovations";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Home = () => {
  return (
    <div className="relative">
      <Navbar />
      <Banner />
      <Hero />
      <Quality />
      <BestSelling />
      <CustomersSay />
      <Innovations />
      {/*   <Footer /> */}
    </div>
  );
};

export default Home;
