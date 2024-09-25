import React from "react";
import quality_image1 from "../../../../public/images/quality1.png";
import quality_image2 from "../../../../public/images/quality2.png";

const Quality = () => {
  return (
    <div className="max-w-[1376px] lg:mx-auto lg:mt-[120px] mt-[32px] mx-[24px] ">
      <div className="lg:flex items-center w-full mb-[50px]">
        <div className="lg:w-[40%]">
          <h2 className="lg:text-[48px] text-[24px] font-[700] text-[#141414] lg:leading-[57px] leading-[28px] mb-[16px] text-center lg:text-left ">
            Our Legacy of Innovation and Quality
          </h2>
        </div>
        <div className="lg:w-[60%]">
          <p className="lg:text-[24px] text-[16px] font-[400] text-[#141414] leading-[24px] lg:leading-[28px] text-center lg:text-left">
            For over 10 years, Motor Bays has been at the forefront of the
            automotive industry, delivering unparalleled quality and
            cutting-edge design. Our commitment to excellence is reflected in
            every vehicle we offer, from timeless classics to the latest
            innovations.
          </p>
        </div>
      </div>
      <div className="lg:flex items-center gap-[20px] ">
        <div className="lg:w-[50%] mb-[24px] lg:mb-0">
          <img
            className="lg:h-[350px] h-[250px] w-full rounded-[15px]"
            src={quality_image1}
            alt=""
          />
        </div>
        <div className="lg:w-[50%]">
          <img
            className="lg:h-[350px] h-[250px] w-full rounded-[15px]"
            src={quality_image2}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Quality;
