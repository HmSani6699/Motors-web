import React from "react";

const SubCard = ({ image, title }) => {
  return (
    <div className="relative ">
      <img src={image} alt="" />
      <div className="absolute bottom-[16px] left-[16px]">
        <h2 className="text-[24px] font-[700] text-white">{title}</h2>
      </div>
    </div>
  );
};

export default SubCard;
