import React from "react";

const Introduction = ({ data }) => {
  return (
    <div className="mb-[32px]">
      <h2 className="lg:text-[32px] text-[24px] font-[700] leading-[28px] lg:leading-[38px] text-[#141414] font-avenir mb-[16px] lg:mb-[24px]">
        Introduction
      </h2>
      <p className="lg:text-[20px] font-[400] lg:leading-[30px]">
        {data?.introduction}
      </p>
    </div>
  );
};

export default Introduction;
