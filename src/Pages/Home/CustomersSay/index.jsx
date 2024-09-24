import React from "react";
import man from "../../../../public/images/man.png";
import play from "../../../../public/images/Play.svg";
import "./CustomerSay.css";

const CustomersSay = () => {
  return (
    <div className="h-[939px] bg-[#D3D3D3] main-div ">
      <div className="max-w-[1100px] mx-auto text-white py-[94px]">
        <h2 className="text-[48px] font-[700]">What Our Customers Say</h2>
        <p className="text-[32px] font-[400] leading-[38px] pl-[209px] mt-[16px]">
          Our customers are at the heart of everything we do. Here's what they
          have to say about their experience with
        </p>

        <div className="h-[553px] relative mt-[48px]">
          <img className="w-full h-full" src={man} alt="" />

          <div className="h-[110px] w-[110px] rounded-full bg-[#fff3] flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img src={play} alt="" className="relative z-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomersSay;
