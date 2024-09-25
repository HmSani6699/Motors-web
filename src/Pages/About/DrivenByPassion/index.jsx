import React from "react";
import image from "../.../../../../../public/images/Rectangle1.png";

const DrivenByPassion = () => {
  return (
    <div className="max-w-[1376px] mx-auto flex flex-col-reverse lg:flex-row  items-center justify-between gap-[30px] lg:mt-[120px] mt-[32px] px-[20px] lg:px-0">
      {/* =====> Left site  <====== */}

      <div className="lg:w-1/2">
        <img
          className="w-full lg:h-[380px] rounded-[15px]"
          src={image}
          alt=""
        />
      </div>

      {/* =====> Right site  <====== */}
      <div className="lg:w-1/2 mb-[24px] md:mb-[32px] lg:mb-0">
        <h2 className="lg:text-[48px] md:text-[32px] text-center lg:text-left font-[700] leading-[57px] lg:mb-[32px] font-avenir text-[24px]">
          Driven by Passion and <br className="hidden lg:block" /> Integrity
        </h2>
        <p className="lg:text-[24px] text-[16px] text-center lg:text-left font-[400] leading-[28px] font-avenir">
          Our core values are the foundation of everything we do. We are driven
          by a passion for excellence, a commitment to integrity, and a
          dedication to our customers. We believe in creating vehicles that not
          only meet the highest standards of quality but also reflect the values
          and aspirations of those who drive them.
        </p>
      </div>
    </div>
  );
};

export default DrivenByPassion;
