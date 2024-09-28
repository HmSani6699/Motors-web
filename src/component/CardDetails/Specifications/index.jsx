import React from "react";

const Specifications = () => {
  return (
    <div className="lg:mt-[64px]">
      <h2 className="lg:text-[32px] font-[700] lg:leading-[38px] text-[#141414] font-avenir lg:mb-[24px]">
        Specifications
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-x-[67px] gap-y-[40px]">
        <div className="border-b-2 border-[#000] pb-[10px]">
          <h2 className="lg:text-[20px] text-[#141414] font-[500] lg:leading-[30px] ">
            Engine Type
          </h2>
          <h3 className="lg:text-[24px] text-[#141414] font-[600] lg:leading-[28px] lg:mt-[16px]">
            3.5L V6 Hybrid
          </h3>
        </div>
        <div className="border-b-2 border-[#000] pb-[10px]">
          <h2 className="lg:text-[20px] text-[#141414] font-[500] lg:leading-[30px] ">
            Horsepower
          </h2>
          <h3 className="lg:text-[24px] text-[#141414] font-[600] lg:leading-[28px] lg:mt-[16px]">
            345 HP
          </h3>
        </div>
        <div className="border-b-2 border-[#000] pb-[10px]">
          <h2 className="lg:text-[20px] text-[#141414] font-[500] lg:leading-[30px] ">
            Transmission
          </h2>
          <h3 className="lg:text-[24px] text-[#141414] font-[600] lg:leading-[28px] lg:mt-[16px]">
            10-Speed Automatic
          </h3>
        </div>
        <div className="border-b-2 border-[#000] pb-[10px]">
          <h2 className="lg:text-[20px] text-[#141414] font-[500] lg:leading-[30px] ">
            Fuel Efficiency
          </h2>
          <h3 className="lg:text-[24px] text-[#141414] font-[600] lg:leading-[28px] lg:mt-[16px] whitespace-nowrap">
            25 MPG city / 34 MPG 
          </h3>
        </div>
        <div className="border-b-2 border-[#000] pb-[10px]">
          <h2 className="lg:text-[20px] text-[#141414] font-[500] lg:leading-[30px] ">
            Length
          </h2>
          <h3 className="lg:text-[24px] text-[#141414] font-[600] lg:leading-[28px] lg:mt-[16px]">
            4,920 mm
          </h3>
        </div>
        <div className="border-b-2 border-[#000] pb-[10px]">
          <h2 className="lg:text-[20px] text-[#141414] font-[500] lg:leading-[30px] ">
            Width
          </h2>
          <h3 className="lg:text-[24px] text-[#141414] font-[600] lg:leading-[28px] lg:mt-[16px]">
            1,840 mm
          </h3>
        </div>
        <div className="border-b-2 border-[#000] pb-[10px]">
          <h2 className="lg:text-[20px] text-[#141414] font-[500] lg:leading-[30px] ">
            Height
          </h2>
          <h3 className="lg:text-[24px] text-[#141414] font-[600] lg:leading-[28px] lg:mt-[16px]">
            1,500 mm
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Specifications;
