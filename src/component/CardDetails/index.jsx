import React, { useEffect, useState } from "react";
import Navbar from "../../Pages/Navbar";
import CardDetailsBanner from "./CardDetailsBanner";
import Introduction from "./Introduction";
import Specifications from "./Specifications";
import CardDetailsGallery from "./CardDetailsGallery";
import Features from "./Features";
import Performance from "./Performance";
import DiscoverMore from "./DiscoverMore";
import Footer from "../../Pages/Footer";
import { Link, useParams } from "react-router-dom";
import { get } from "../../api/axios";

const CardDetails = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [activeTab, setActiveTabe] = useState("Overview");
  const [cardData, setCardData] = useState([]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  // ========> Handle get Best Selling data <=======//
  useEffect(() => {
    handleGetCartData();
  }, []);

  const handleGetCartData = async () => {
    setLoading(true);
    try {
      const res = await get(`/api/cars/${id}?populate=image`);
      console.log(res);
      setCardData(res?.data);
      // Scroll to top after fetching new data
      window.scrollTo({ top: 0, behavior: "smooth" });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  console.log(cardData);

  return (
    <div className="">
      <div>
        <Navbar viewNav="cardDetails" />
      </div>
      <CardDetailsBanner data={cardData} />
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
        <Introduction data={cardData} />
        <Specifications data={cardData} />
        <CardDetailsGallery data={cardData} />
        <Features data={cardData} />
        <Performance data={cardData} />
        <DiscoverMore />
      </div>
      <Footer />
    </div>
  );
};

export default CardDetails;
