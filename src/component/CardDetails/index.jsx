import React from "react";
import Navbar from "../../Pages/Navbar";
import CardDetailsBanner from "./CardDetailsBanner";
import Introduction from "./Introduction";
import Specifications from "./Specifications";
import CardDetailsGallery from "./CardDetailsGallery";
import Features from "./Features";
import Performance from "./Performance";
import DiscoverMore from "./DiscoverMore";
import Footer from "../../Pages/Footer";

const CardDetails = () => {
  return (
    <div className="">
      <div>
        <Navbar />
      </div>
      <CardDetailsBanner />
      <div className="max-w-[1367px] mx-auto">
        {/* ======> Tab part <===== */}
        <div className="max-w-[1376px] mx-auto flex items-center gap-[89px] lg:mt-[56px] lg:mb-[64px]">
          <button className="text-[#2498E2] text-[16px] font-[600]">
            Overview
          </button>
          <button className="text-[16px] font-[600]">Specifications</button>
          <button className="text-[16px] font-[600]">Gallery</button>
          <button className="text-[16px] font-[600]">Features</button>
          <button className="text-[16px] font-[600]">Performance</button>
        </div>
        <Introduction />
        <Specifications />
        <CardDetailsGallery/>
        <Features/>
        <Performance/>
        <DiscoverMore/>

      </div>
      <Footer/>
    </div>
  );
};

export default CardDetails;
