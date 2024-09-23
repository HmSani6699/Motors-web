import React from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import leftArrow from "../../../../public/svg/Arrow right (1).svg";
import rightArrow from "../../../../public/svg/Arrow right.svg";

const Banner = () => {
  return (
    <div className="bg-[url('../../../../public/images/banner.png')] h-screen bg-cover absolute top-0 w-full flex items-center">
      <div className="max-w-[1200px] mx-auto w-full mt-[112px]">
        <h2 className="lg:text-[64px] font-[700] text-white leading-[76px]">
          Meet the GR <br /> Corolla Power <br /> Beyond Limits
        </h2>
        <p className="text-[24px] text-white font-[500] leading-[28px] mt-[16px]">
          Unleash the thrill of driving with unmatched <br /> performance and
          dynamic design.
        </p>
        <button className="py-[16px] px-[24px] bg-[#2498E2] text-white mt-[32px] rounded-[8px]">
          Explore more
        </button>

        {/* ======> Delete <===== */}
        <div className="flex items-center justify-between  w-full mt-[87px]">
          <div>
            <img src={leftArrow} alt="" />
          </div>

          <div className="flex items-center gap-3">
            <div className=" w-[100px] border-[3px] border-gray-50 rounded-full"></div>
            <div className=" w-[50px] border-[3px] border-gray-400 rounded-full"></div>
            <div className=" w-[50px] border-[3px] border-gray-400 rounded-full"></div>
            <div className=" w-[50px] border-[3px] border-gray-400 rounded-full"></div>
            <div className=" w-[50px] border-[3px] border-gray-400 rounded-full"></div>
          </div>

          <div>
            {" "}
            <img src={rightArrow} className="rotate-[180deg]" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
