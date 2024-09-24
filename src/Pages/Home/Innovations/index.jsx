import React from "react";
import Card from "../../../component/Card";

const Innovations = () => {
  return (
    <div className="max-w-[1376px] mx-auto">
      <div className="flex mt-[120px] mb-[50px]">
        <div className="w-[40%]">
          <h2 className="text-[48px] font-[700] text-[#141414] leading-[57px] ">
            From the Garage: <br /> Insights & Innovations
          </h2>
        </div>
        <div className="w-[60%]">
          <p className="text-[24px] font-[400] text-[#141414] leading-[28px] pl-[50px]">
            Stay connected with the latest trends, stories, and insights from
            the automotive world. Our blog dives deep into the art of
            engineering, the beauty of design, and the future of mobility.
            Whether you're a car enthusiast or just curious about what drives
            us, you'll find something to inspire your journey.
          </p>
        </div>
      </div>

      {/* ========> Card part <======== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Innovations;
