import React from "react";
import image from "../../../../public/images/visionaries.png";

const Visionaries = () => {
  return (
    <div className="max-w-[1376px] mx-auto lg:mt-[120px] mt-[32px] px-[20px] lg:px-0">
      <div className="w-full lg:flex items-center">
        {/* ========> Left Site <======== */}
        <div className="lg:w-[40%]">
          <h2 className="lg:text-[48px] md:text-[32px] text-center lg:text-left font-[700] lg:leading-[57px] leading-[28px] mb-[16px]  lg:mb-[32px] font-avenir text-[24px]">
            Meet the Visionaries Behind the Wheel
          </h2>
        </div>
        {/* ========> Right Site <======== */}
        <div className="lg:w-[60%]">
          <p className="lg:text-[24px] text-[16px] text-center lg:text-left font-[400] leading-[28px] font-avenir">
            Our team is made up of some of the most talented and passionate
            individuals in the industry. From our designers and engineers to our
            sales and support staff, everyone at motor bay shares a common goal:
            to create the best cars in the world.
          </p>
        </div>
      </div>

      <div className="lg:h-[450px] md:h-[352px] h-[170px] mt-[40px] lg:mb-[120px] mb-[32px]">
        <img className="h-full w-full rounded-[15px]" src={image} alt="" />
      </div>
    </div>
  );
};

export default Visionaries;
