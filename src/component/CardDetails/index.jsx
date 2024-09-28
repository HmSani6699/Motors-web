import React, { useState } from "react";
import Navbar from "../../Pages/Navbar";
import CardDetailsBanner from "./CardDetailsBanner";
import Introduction from "./Introduction";
import Specifications from "./Specifications";
import CardDetailsGallery from "./CardDetailsGallery";
import Features from "./Features";
import Performance from "./Performance";
import DiscoverMore from "./DiscoverMore";
import Footer from "../../Pages/Footer";
import { Link } from "react-router-dom";

const CardDetails = () => {
  const [activeTab, setActiveTabe] = useState("Overview");

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="">
      <div>
        <Navbar />
      </div>
      <CardDetailsBanner />
      <div className="max-w-[1367px] px-[20px] lg:px-0   mx-auto">
        {/* ======> Tab part <===== */}
        <div className=" card_details max-w-[1376px] mx-auto overflow-x-scroll lg:overflow-visible flex items-center lg:gap-[89px] gap-[50px] mt-[56px]  mb-[30px] lg:mb-[64px]">
          <button
            onClick={() => {
              setActiveTabe("Overview");
              scrollToSection("Overview");
            }}
            className={`pb-[15px] text-[16px] font-[600] ${
              activeTab === "Overview"
                ? "border-b-2 border-[#2498E2] text-[#2498E2]"
                : ""
            } `}
          >
            Overview
          </button>

          <button
            onClick={() => {
              setActiveTabe("Specifications");
              scrollToSection("Specifications");
            }}
            className={`pb-[15px] text-[16px] font-[600] ${
              activeTab === "Specifications"
                ? "border-b-2 border-[#2498E2] text-[#2498E2]"
                : ""
            } `}
          >
            Specifications
          </button>

          <button
            onClick={() => {
              setActiveTabe("Gallery");
              scrollToSection("Gallery");
            }}
            className={`pb-[15px] text-[16px] font-[600] ${
              activeTab === "Gallery"
                ? "border-b-2 border-[#2498E2] text-[#2498E2]"
                : ""
            } `}
          >
            Gallery
          </button>

          <button
            onClick={() => {
              setActiveTabe("Features");
              scrollToSection("Features");
            }}
            className={`pb-[15px] text-[16px] font-[600] ${
              activeTab === "Features"
                ? "border-b-2 border-[#2498E2] text-[#2498E2]"
                : ""
            } `}
          >
            Features
          </button>
          <button
            onClick={() => {
              setActiveTabe("Performance");
              scrollToSection("Performance");
            }}
            className={`pb-[15px] text-[16px] font-[600] ${
              activeTab === "Performance"
                ? "border-b-2 border-[#2498E2] text-[#2498E2]"
                : ""
            } `}
          >
            Performance
          </button>
        </div>
        <Introduction />
        <Specifications />
        <CardDetailsGallery />
        <Features />
        <Performance />
        <DiscoverMore />
      </div>
      <Footer />
    </div>
  );
};

export default CardDetails;
