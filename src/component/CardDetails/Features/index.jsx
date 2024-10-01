import React from "react";

const Features = ({ data }) => {
  return (
    <div
      id="Features"
      className="lg:flex items-center justify-between lg:mt-[64px]"
    >
      {/* ======> Left slit <==== */}
      <div className="lg:w-[656px]">
        <h2 className="lg:text-[32px] text-[24px] font-[700] lg:leading-[38px] text-[#141414] font-avenir mb-[24px]">
          Features
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[48px] gap-y-[24px]">
          {data?.features?.features?.length >= 0 &&
            data?.features?.features?.map((item, i) => (
              <div className="flex gap-2 ">
                <div className="h-[8px]  w-[8px] rounded-3xl mt-2 bg-black"></div>
                <h2 className="lg:text-[24px] font-[500] lg:leading-[28px] text-[#141414]">
                  {item && item}
                </h2>
              </div>
            ))}
        </div>
      </div>
      {/* ======> Right slit <==== */}
      <div className="lg:w-[320px] mt-[32px] lg:mt-0">
        <h2 className="lg:text-[32px] text-[24px] font-[700] lg:leading-[38px] text-[#141414] font-avenir mb-[24px]">
          Key Features
        </h2>
        <div className="flex flex-col gap-y-[24px]">
          {data?.features?.key_features?.length >= 0 &&
            data?.features?.key_features?.map((item, i) => (
              <div className="flex gap-2 ">
                <div className="h-[8px]  w-[8px] rounded-3xl mt-2 bg-black"></div>
                <h2 className="lg:text-[24px] font-[500] lg:leading-[28px] text-[#141414]">
                  {item && item}
                </h2>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
