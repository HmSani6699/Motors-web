import React from "react";

const Card = ({ image }) => {
  return (
    <div>
      <div className="w-[555px] h-[574px] relative">
        <img className="h-full w-full" src={image} alt="" />
        <div className="absolute bottom-[26px] left-[24px]">
          <h2 className="mb-[16px] text-[32px] font-[700] text-white">
            Range Rover
          </h2>
          <p className="text-[14px] font-[400] text-white">
            These are the vehicles that have captured the hearts of drivers
            everywhere. Explore our top-selling models
          </p>
        </div>
      </div>

      <button className="border-2 w-full mt-[24px] border-[#2498E2] text-[#2498E2] py-[15px] rounded-[8px] ">
        View details
      </button>
    </div>
  );
};

export default Card;
