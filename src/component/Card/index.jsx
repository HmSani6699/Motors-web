import React from "react";
import image from "../../.../../../public/card/image6.png";
import arrow from "../../../public/svg/Arrow.svg";
import date from "../../../public/svg/Frame.svg";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className=" lg:h-[574px] h-[520px] relative">
      <div className="h-[300px]">
        <img className="h-full w-full" src={image} alt="" />
      </div>
      <div className="mt-[32px]">
        <h2 className="mb-[16px] text-[24px] font-[600] text-[#141414] leading-[28.8px] font-avenir">
          Top 5 Must-Have Features in Modern Luxury Cars
        </h2>
        <p className="text-[16px] font-[400] text-[#141414] leading-[24px] font-avenir">
          Stay connected with the latest trends, stories, and insights from the
          automotive world.
        </p>

        <div className="mt-[24px] flex items-center justify-between">
          <Link to="/blog/details/20">
            <button className="text-[#2498E2] flex gap-2 items-center">
              <h2 className="text-[16px] font-[500]">Learn more</h2>
              <img src={arrow} alt="dsfds" />
            </button>
          </Link>
          <div className="flex gap-2 items-center ">
            <img src={date} alt="" />
            <h3 className=" text-[#B0B0B0] text-[16px] font-[400]">
              Aug 1, 2024
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
