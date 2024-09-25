import React from "react";
import image_1 from "../../../../public/card/Rectangle.png";

const JourneyThrough = () => {
  return (
    <div className="max-w-[1376px] mx-auto lg:flex items-center justify-between gap-[30px] lg:mt-[120px] mt-[32px] px-[20px] lg:px-0">
      {/* =====> Left site  <====== */}
      <div className="lg:w-1/2 mb-[24px] md:mb-[32px] lg:mb-0">
        <h2 className="lg:text-[48px] md:text-[32px] text-center lg:text-left font-[700] leading-[57px] lg:mb-[32px] font-avenir text-[24px]">
          A Journey Through <br className="hidden lg:block" /> Time
        </h2>
        <p className="lg:text-[24px] text-[16px] text-center lg:text-left font-[400] leading-[28px] font-avenir">
          Founded in 2014, Motor Bay began with a vision to revolutionize the
          way people experience driving. Over the decades, we've grown from a
          small workshop into a globally recognized brand, known for our
          commitment to quality and innovation. Our journey is marked by
          groundbreaking achievements, from the launch of our first model, BMW
          to our latest innovations in automotive technology.
        </p>
      </div>
      {/* =====> Right site  <====== */}
      <div className="lg:w-1/2">
        <img className="w-full" src={image_1} alt="" />
      </div>
    </div>
  );
};

export default JourneyThrough;
