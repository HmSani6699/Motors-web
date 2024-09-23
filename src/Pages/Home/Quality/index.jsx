import React from "react";
import quality_image1 from "../../../../public/images/quality1.png";
import quality_image2 from "../../../../public/images/quality2.png";

const Quality = () => {
  return (
    <div className="max-w-[1376px] mx-auto mt-[120px] ">
      <div className="flex items-center w-full mb-[50px]">
        <div className="w-[40%]">
          <h2 className="text-[48px] font-[700] text-[#141414] leading-[57px] ">
            Our Legacy of Innovation and Quality
          </h2>
        </div>
        <div className="w-[60%]">
          <p className="text-[24px] font-[400] text-[#141414] leading-[28px]">
            For over 10 years, Motor Bays has been at the forefront of the
            automotive industry, delivering unparalleled quality and
            cutting-edge design. Our commitment to excellence is reflected in
            every vehicle we offer, from timeless classics to the latest
            innovations.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-[20px] ">
        <div className="w-[50%]">
          <img
            className="h-[350px] w-full rounded-[15px]"
            src={quality_image1}
            alt=""
          />
        </div>
        <div className="w-[50%]">
          <img
            className="h-[350px] w-full rounded-[15px]"
            src={quality_image2}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Quality;
