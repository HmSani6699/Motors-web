import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import ViewCard from "../../component/ViewCard";

import card_image1 from "../../../public/card/image1.png";
import prov from "../../../public/svg/Prev.svg";
import next from "../../../public/svg/Next.svg";
import more from "../../../public/svg/more.svg";
import Footer from "../Footer";
import { get } from "../../api/axios";
import PaginationExample from "../../component/Pagination";
const baseUrl = "http://localhost:1337";

const Gallery = () => {
  const [activeTab, setActiveTabe] = useState("all");
  const [cardData, setCardData] = useState([]);

  // ========> Handle get Best Selling data <=======//
  useEffect(() => {
    handleGetCardData();
  }, []);

  const handleGetCardData = async () => {
    try {
      const res = await get(`/api/cards?populate=image`);
      console.log(res);
      setCardData(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <Navbar />
      <div className="lg:pt-[120px] pt-[90px] max-w-[1376px] mx-auto">
        <div className="lg:flex items-center">
          <h2 className="lg:text-[48px] font-[700] mb-[16px] lg:mb-0 lg:leading-[57px] text-[#141414] text-center lg:text-left text-[24px] leading-[28px]">
            The Legacy Collection
          </h2>
          <p className="lg:text-[24px] font-[400] leading-[28px] lg:pl-[70px] text-center lg:text-left mb-[30px] lg:mb-0">
            A curated showcase of our finest models, where innovation meets
            tradition.
          </p>
        </div>

        <div className=" card_details max-w-[1376px] mx-auto overflow-x-scroll lg:overflow-visible flex items-center lg:gap-[89px] gap-[50px] mt-[56px]  mb-[30px] lg:mb-[64px]">
          <button
            onClick={() => setActiveTabe("all")}
            className={`py-[16px] px-[24px] text-[16px] font-[600] ${
              activeTab === "all"
                ? "border-b-2 border-[#2498E2] text-[#2498E2] bg-[#E2F0FC]"
                : "text-[#7C7C7C]"
            } `}
          >
            All
          </button>
          <button
            onClick={() => setActiveTabe("Toyota")}
            className={`py-[16px] px-[24px] text-[16px] font-[600] ${
              activeTab === "Toyota"
                ? "border-b-2 border-[#2498E2] text-[#2498E2] bg-[#E2F0FC]"
                : "text-[#7C7C7C]"
            } `}
          >
            Toyota
          </button>
          <button
            onClick={() => setActiveTabe("Hyundai")}
            className={`py-[16px] px-[24px] text-[16px] font-[600] ${
              activeTab === "Hyundai"
                ? "border-b-2 border-[#2498E2] text-[#2498E2] bg-[#E2F0FC]"
                : "text-[#7C7C7C]"
            } `}
          >
            Hyundai
          </button>
          <button
            onClick={() => setActiveTabe("Lada")}
            className={`py-[16px] px-[24px] text-[16px] font-[600] ${
              activeTab === "Lada"
                ? "border-b-2 border-[#2498E2] text-[#2498E2] bg-[#E2F0FC]"
                : "text-[#7C7C7C]"
            } `}
          >
            Lada
          </button>
          <button
            onClick={() => setActiveTabe("Ladae")}
            className={`py-[16px] px-[24px] text-[16px] font-[600] ${
              activeTab === "Ladae"
                ? "border-b-2 border-[#2498E2] text-[#2498E2] bg-[#E2F0FC]"
                : "text-[#7C7C7C]"
            } `}
          >
            Ladae
          </button>
          <button
            onClick={() => setActiveTabe("Mahindra")}
            className={`py-[16px] px-[24px] text-[16px] font-[600] ${
              activeTab === "Mahindra"
                ? "border-b-2 border-[#2498E2] text-[#2498E2] bg-[#E2F0FC]"
                : "text-[#7C7C7C]"
            } `}
          >
            Mahindra
          </button>
          <button
            onClick={() => setActiveTabe("Nissan")}
            className={`py-[16px] px-[24px] text-[16px] font-[600] ${
              activeTab === "Nissan"
                ? "border-b-2 border-[#2498E2] text-[#2498E2] bg-[#E2F0FC]"
                : "text-[#7C7C7C]"
            } `}
          >
            Nissan
          </button>
        </div>

        {/* ======> Gallery Div <====== */}
        <div className="lg:mt-[48px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[33px] lg:px-0 px-[20px]">
          {cardData?.length > 0 &&
            cardData?.map((item, i) => (
              <ViewCard
                title={"Toyota Crown Signia"}
                description={
                  "These are the vehicles that have captured the hearts of drivers everywhere. Explore our top-selling models"
                }
                image={card_image1}
                data={item}
              />
            ))}
        </div>

        {/* ======> Pagination <===== */}
        <div className=" items-center gap-[30px] mt-[48px] lg:mb-[120px] md:mb-[64px] lg:flex md:flex hidden md:px-[24px]">
          <button>
            <img src={prov} alt="" />
          </button>
          <button className="bg-[#2498E2] text-white py-[6px] px-[12px] rounded-[6px]">
            1
          </button>
          <button>2</button>
          <button>3</button>
          <button>...</button>
          <button>10</button>
          <button>
            <img src={next} alt="" />
          </button>
        </div>

        {/* =======> Mobile pagination <====== */}
        <div className=" items-center justify-center lg:hidden md:hidden flex">
          <div className="flex flex-col items-center justify-center gap-[10px] mt-[40px] mb-[32px]">
            <h2>More</h2>
            <img src={more} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
