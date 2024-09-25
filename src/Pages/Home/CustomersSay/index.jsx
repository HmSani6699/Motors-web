import React from "react";
import man from "../../../../public/images/man.png";
import play from "../../../../public/images/Play.svg";
import "./CustomerSay.css";

const CustomersSay = () => {
  return (
    <div className="lg:h-[939px] bg-[#D3D3D3] main-div ">
      <div className="max-w-[1100px] mx-auto text-white lg:py-[94px] py-[24px] px-[24px] lg:px-0">
        <h2 className="text-[24px] lg:text-[48px] font-[700] font-avenir ">
          What Our Customers Say
        </h2>
        <p className="text-[16px] lg:text-[32px] font-[400] leading-[24px] lg:leading-[38px] pl-[45px] lg:pl-[209px] mt-[16px] font-avenir ">
          Our customers are at the heart of everything we do. Here's what they
          have to say about their experience with
        </p>

        <div className="h-[222px] lg:h-[553px] relative lg:mt-[48px] mt-[16px]">
          <img className="w-full h-full" src={man} alt="" />

          <div className="lg:h-[110px] h-[70px] lg:w-[110px] w-[70px] rounded-full bg-[#fff3] flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img src={play} alt="" className="relative z-10 w-[40px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomersSay;
