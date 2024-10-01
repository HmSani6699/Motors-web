import React from "react";

const CourseBtn = ({ name, totalCourseNumber, value, sateValue }) => {
  return (
    <div
      onClick={() => sateValue(name)}
      className={` ${value == name ? "bg-[#1E567B] border border-[#53DFC3]" : "bg-[#143952]"
        } py-3 px-5 rounded-lg flex flex-col justify-center items-center min-w-fit cursor-pointer `}
    >
      <h6 className="font-Baloo text-white text-lg leading-[28px] font-[600]">
        {name}
      </h6>
      <p className="text-white font-Baloo text-sm leading-[18px] font-[500]">
        {totalCourseNumber} course
      </p>
    </div>
  );
};

export default CourseBtn;
