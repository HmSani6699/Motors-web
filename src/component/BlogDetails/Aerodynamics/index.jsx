import React from "react";
import dot_icon from "../../../../public/svg/dot.svg";

const Aerodynamics = () => {
  return (
    <div className="lg:mt-[48px] mt-[32px]">
      <h2 className="lg:text-[32px] md:text-[32px] text-[24px] font-[600] leading-[28px] md:leading-[38px] lg:leading-[38px] text-[#141414] font-avenir">
        Aerodynamics and Art Deco: The Rise of Streamline Design
      </h2>
      <div className="flex mt-[32px]">
        <img className="h-[30px] w-[30px]" src={dot_icon} alt="" />
        <div className="font-avenir">
          <p className="text-[#6D6D6D] lg:text-[20px] text-[16px] font-[400]">
            <span className="lg:text-[20px] md:text-[20px] text-[16px] font-[600] leading-[30px] text-[#141414] pr-[10px]">
              Overview
            </span>
            The 1930s saw a shift towards more aerodynamic designs influenced by
            the Art Deco movement. This era was characterized by smooth curves,
            long lines, and an emphasis on speed and efficiency.
          </p>
        </div>
      </div>
      <div className="flex  mt-[32px]">
        <img className="h-[30px] w-[30px]" src={dot_icon} alt="" />
        <div className="font-avenir">
          <span className="lg:text-[20px] md:text-[20px] text-[16px] font-[600] leading-[30px] text-[#141414] pr-[10px]">
            Iconic Designs:
          </span>

          <div className="flex  ">
            <img className="h-[30px] w-[30px]" src={dot_icon} alt="" />
            <div className="font-avenir">
              <p className="text-[#6D6D6D] lg:text-[20px] md:text-[20px] text-[16px] font-[400]">
                Chrysler Airflow (1934): One of the first cars to focus on
                aerodynamics, although it was not commercially successful, it
                influenced future designs.
              </p>
            </div>
          </div>
          <div className="flex  ">
            <img className="h-[30px] w-[30px]" src={dot_icon} alt="" />
            <div className="font-avenir">
              <p className="text-[#6D6D6D] lg:text-[20px] md:text-[20px] text-[16px] font-[400]">
                Volkswagen Beetle (1938): Known for its rounded shape and
                practical design, it became one of the most iconic cars of the
                20th century.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex  mt-[32px]">
        <img className="h-[30px] w-[30px]" src={dot_icon} alt="" />
        <div className="font-avenir">
          <p className="text-[#6D6D6D] lg:text-[20px] md:text-[20px] text-[16px] font-[400]">
            <span className="lg:text-[20px] md:text-[20px] text-[16px] font-[600] leading-[30px] text-[#141414] pr-[10px]">
              Iconic Designs:
            </span>
            The Chrysler Airflow and the Cadillac Series 62 are perfect examples
            of how the Streamline Moderne design philosophy influenced
            automotive styling.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aerodynamics;
