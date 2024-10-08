import React from "react";
import { Link } from "react-router-dom";
const baseUrl = "http://localhost:1337";

const ViewCard = ({ data, value }) => {
  return (
    <div className="w-full">
      <div
        className={`${
          value === "home" ? "h-[354px] lg:h-[574px]" : "h-[354px] lg:h-[452px]"
        }   relative`}
      >
        <img
          className="h-full w-full rounded-[8px]"
          src={`${baseUrl}${data?.image?.length > 0 && data?.image[0]?.url}`}
          alt=""
        />
        <div className="absolute bottom-[26px] left-[24px]">
          <h2 className="mb-[16px] text-[32px] font-[700] text-white">
            {data?.title}
          </h2>
          <p className="text-[14px] font-[400] text-white">
            {data?.description}
          </p>
        </div>
      </div>

      <Link to={`/stock/details/${data?.documentId}`}>
        <button className="border-2 w-full mt-[24px] border-[#2498E2] text-[#2498E2] py-[15px] rounded-[8px] ">
          View details
        </button>
      </Link>
    </div>
  );
};

export default ViewCard;
