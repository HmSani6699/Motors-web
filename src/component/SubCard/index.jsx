import React from "react";
const baseUrl = "http://localhost:1337";

const SubCard = ({ data }) => {
  const { title, image } = data;
  // console.log(data);

  return (
    <div className="relative h-[309px] w-full ">
      <img
        src={`${baseUrl}${image?.length > 0 && image[0]?.url}`}
        className="h-full w-full rounded-[8px]"
        alt=""
      />
      <div className="absolute bottom-[16px] left-[16px]">
        <h2 className="text-[24px] font-[700] text-white">{title}</h2>
      </div>
    </div>
  );
};

export default SubCard;
