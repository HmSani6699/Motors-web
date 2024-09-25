import React from "react";
import Card from "../../../component/Card";
import arrow from "../../../../public/svg/Arrow.svg";
import leftArrow from "../../../../public/svg/Arrow right (1).svg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Innovations = () => {
  return (
    <div className="max-w-[1376px] lg:mx-auto  mb-[32px] lg:mb-[135px]">
      <div className="lg:flex lg:mt-[120px] mt-[32px] lg:mb-[50px] mb-[24px] lg:mx-0 mx-[24px]">
        <div className="lg:w-[40%]">
          <h2 className="text-[24px] lg:text-[48px] font-[700] text-[#141414] text-center lg:text-left leading-[28px] lg:leading-[57px] font-avenir mb-[16px] lg:mb-0">
            From the Garage: <br className="hidden lg:block" /> Insights &
            Innovations
          </h2>
        </div>
        <div className="lg:w-[60%]">
          <p className="text-[16px] lg:text-[24px] font-[400] text-[#141414] leading-[24px] lg:leading-[28px] text-center lg:text-left lg:pl-[50px] font-avenir ">
            Stay connected with the latest trends, stories, and insights from
            the automotive world. Our blog dives deep into the art of
            engineering, the beauty of design, and the future of mobility.
            Whether you're a car enthusiast or just curious about what drives
            us, you'll find something to inspire your journey.
          </p>
        </div>
      </div>

      {/* ========> Card part <======== */}
      <div className=" grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] lg:grid hidden">
        <Card />
        <Card />
        <Card />
      </div>

      {/* =======> Swiper Slider <====== */}
      <div className="pl-[24px]  block lg:hidden">
        <Swiper className="mySwiper" spaceBetween={20} slidesPerView={"auto"}>
          <SwiperSlide style={{ width: "345px" }}>
            <Card />
          </SwiperSlide>
          <SwiperSlide style={{ width: "345px" }}>
            <Card />
          </SwiperSlide>
          <SwiperSlide style={{ width: "345px" }}>
            <Card />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* =======> Delte >===== */}

      <div className=" items-center justify-center gap-[79px] lg:flex hidden ">
        <div className=" relative">
          <div className="border-4 border-gray-300 w-[300px] rounded-full"></div>
          <div className="border-4 border-[#2498E2] w-[100px] absolute top-0 rounded-full"></div>
        </div>
        <div className="flex items-center gap-[32px]">
          <img className="-rotate-[135deg]" src={arrow} alt="" />
          <div className="h-[35px] w-[35px] rounded-full bg-[#2498E2] flex items-center justify-center">
            <img className="w-[25px] rotate-180" src={leftArrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Innovations;
