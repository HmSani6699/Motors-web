import React from "react";

const Automobile = () => {
  return (
    <div className="mt-[80px]">
      <h2 className="lg:text-[32px] font-[600] leading-[38px] text-[#141414] font-avenir">
        Post-War Prosperity and the Rise of the Automobile as a Status Symbol
      </h2>
      <div className="flex gap-2 mt-[32px]">
        <div className="h-[8px]  w-[15px] rounded-3xl mt-2 bg-black"></div>
        <div className="font-avenir">
          <p className="text-[#6D6D6D] text-[20px] font-[400]">
            <span className="text-[20px] font-[600] leading-[30px] text-[#141414] pr-[10px]">
              Overview
            </span>
            The 1930s saw a shift towards more aerodynamic designs influenced by
            the Art Deco movement. This era was characterized by smooth curves,
            long lines, and an emphasis on speed and efficiency.
          </p>
        </div>
      </div>
      <div className="flex gap-2 mt-[32px]">
        <div className="h-[8px]  w-[10px] rounded-3xl mt-2 bg-black"></div>
        <div className="font-avenir">
          <span className="text-[20px] font-[600] leading-[30px] text-[#141414] pr-[10px]">
            Iconic Designs:
          </span>

          <div className="flex gap-2 ">
            <div className="h-[8px]  w-[8px] rounded-3xl mt-2 bg-[#6D6D6D]"></div>
            <div className="font-avenir">
              <p className="text-[#6D6D6D] text-[20px] font-[400]">
                Chrysler Airflow (1934): One of the first cars to focus on
                aerodynamics, although it was not commercially successful, it
                influenced future designs.
              </p>
            </div>
          </div>
          <div className="flex gap-2 ">
            <div className="h-[8px]  w-[8px] rounded-3xl mt-2 bg-[#6D6D6D]"></div>
            <div className="font-avenir">
              <p className="text-[#6D6D6D] text-[20px] font-[400]">
                Volkswagen Beetle (1938): Known for its rounded shape and
                practical design, it became one of the most iconic cars of the
                20th century.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-[32px]">
        <div className="h-[8px]  w-[15px] rounded-3xl mt-2 bg-black"></div>
        <div className="font-avenir">
          <p className="text-[#6D6D6D] text-[20px] font-[400]">
            <span className="text-[20px] font-[600] leading-[30px] text-[#141414] pr-[10px]">
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

export default Automobile;
