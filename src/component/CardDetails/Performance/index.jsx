import React from "react";

const Performance = () => {
  return (
    <div id="Performance" className="lg:mt-[64px] mt-[32px]">
      <h2 className="lg:text-[32px] text-[24px] font-[700] lg:leading-[38px] text-[#141414] font-avenir mb-[24px]">
        Performance
      </h2>
      <div className="flex flex-col lg:flex-row gap-y-[24px] lg:gap-y-0 lg:items-center lg:justify-between">
        <div className="border-b-2 border-[#000] pb-[10px] md:w-[300px]">
          <h2 className="lg:text-[20px] text-[#141414] font-[500] lg:leading-[30px] ">
            Acceleration
          </h2>
          <h3 className="lg:text-[24px] text-[16px] text-[#141414] font-[600] lg:leading-[28px] leading-[24px] lg:mt-[16px]">
            0-60 mph in 5.4 seconds
          </h3>
        </div>
        <div className="border-b-2 border-[#000] pb-[10px] md:w-[300px]">
          <h2 className="lg:text-[20px] text-[#141414] font-[500] lg:leading-[30px] ">
            Top Speed
          </h2>
          <h3 className="lg:text-[24px] text-[#141414] font-[600] lg:leading-[28px] lg:mt-[16px]">
            155 mph
          </h3>
        </div>
        <div className="border-b-2 border-[#000] pb-[10px] md:w-[300px]">
          <h2 className="lg:text-[20px] text-[#141414] font-[500] lg:leading-[30px] ">
            Driving Modes
          </h2>
          <h3 className="lg:text-[24px] text-[#141414] font-[600] lg:leading-[28px] lg:mt-[16px]">
            Eco, Comfort, Sport, Sport+
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Performance;
