import React from "react";
import Card from "../../../component/Card";
import arrow from "../../../../public/svg/Arrow.svg";
import leftArrow from "../../../../public/svg/Arrow right (1).svg";

const Innovations = () => {
  return (
    <div className="max-w-[1376px] mx-auto mb-[135px]">
      <div className="flex mt-[120px] mb-[50px]">
        <div className="w-[40%]">
          <h2 className="text-[48px] font-[700] text-[#141414] leading-[57px] font-avenir ">
            From the Garage: <br /> Insights & Innovations
          </h2>
        </div>
        <div className="w-[60%]">
          <p className="text-[24px] font-[400] text-[#141414] leading-[28px] pl-[50px] font-avenir ">
            Stay connected with the latest trends, stories, and insights from
            the automotive world. Our blog dives deep into the art of
            engineering, the beauty of design, and the future of mobility.
            Whether you're a car enthusiast or just curious about what drives
            us, you'll find something to inspire your journey.
          </p>
        </div>
      </div>

      {/* ========> Card part <======== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] ">
        <Card />
        <Card />
        <Card />
      </div>

      {/* =======> Delte >===== */}

      <div className="flex items-center justify-center gap-[79px]">
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
