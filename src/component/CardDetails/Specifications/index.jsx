import React from "react";

const Specifications = ({ data }) => {
  return (
    <div id="Specifications" className="lg:mt-[64px]">
      <h2 className="lg:text-[32px] text-[24px] font-[700] leading-[28px] lg:leading-[38px] text-[#141414] font-avenir mb-[24px]">
        Specifications
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-x-[67px] gap-y-[40px]">
        <div className="border-b-2 border-[#000] pb-[10px]">
          <h2 className="lg:text-[20px] text-[#141414] font-[500] lg:leading-[30px] ">
            Engine Type
          </h2>
          <h3 className="lg:text-[24px] text-[16px] text-[#141414] font-[600] lg:leading-[28px] lg:mt-[16px]">
            {data?.engine_type}
          </h3>
        </div>
        <div className="border-b-2 border-[#000] pb-[10px]">
          <h2 className="lg:text-[20px] text-[#141414] font-[500] lg:leading-[30px] ">
            Horsepower
          </h2>
          <h3 className="lg:text-[24px] text-[16px] text-[#141414] font-[600] lg:leading-[28px] lg:mt-[16px]">
            {data?.horsepower}
          </h3>
        </div>
        <div className="border-b-2 border-[#000] pb-[10px]">
          <h2 className="lg:text-[20px] text-[#141414] font-[500] lg:leading-[30px] ">
            Transmission
          </h2>
          <h3 className="lg:text-[24px] text-[#141414] font-[600] lg:leading-[28px] lg:mt-[16px]">
            {data?.transmission}
          </h3>
        </div>
        <div className="border-b-2 border-[#000] pb-[10px]">
          <h2 className="lg:text-[20px] text-[#141414] font-[500] lg:leading-[30px] ">
            Fuel Efficiency
          </h2>
          <h3 className="lg:text-[24px] text-[#141414] font-[600] lg:leading-[28px] lg:mt-[16px] whitespace-nowrap">
            {data?.fuel_efficiency}
          </h3>
        </div>
        <div className="border-b-2 border-[#000] pb-[10px]">
          <h2 className="lg:text-[20px] text-[#141414] font-[500] lg:leading-[30px] ">
            Length
          </h2>
          <h3 className="lg:text-[24px] text-[#141414] font-[600] lg:leading-[28px] lg:mt-[16px]">
            {data?.length}
          </h3>
        </div>
        <div className="border-b-2 border-[#000] pb-[10px]">
          <h2 className="lg:text-[20px] text-[#141414] font-[500] lg:leading-[30px] ">
            Width
          </h2>
          <h3 className="lg:text-[24px] text-[#141414] font-[600] lg:leading-[28px] lg:mt-[16px]">
            {data?.width}
          </h3>
        </div>
        <div className="border-b-2 border-[#000] pb-[10px]">
          <h2 className="lg:text-[20px] text-[#141414] font-[500] lg:leading-[30px] ">
            Height
          </h2>
          <h3 className="lg:text-[24px] text-[#141414] font-[600] lg:leading-[28px] lg:mt-[16px]">
            {data?.height}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Specifications;
