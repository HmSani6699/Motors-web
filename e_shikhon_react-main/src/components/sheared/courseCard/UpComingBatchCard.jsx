import React from "react";
import profile_icon from "../../../assets/svg/user-circle.svg";
import star_icon from "../../../assets/svg/star.svg";
import group_icon from "../../../assets/svg/user-group.svg";
import arrow from "../../../assets/svg/arrow-right-btn.svg";
import { Link } from "react-router-dom";

const UpComingBatchCard = ({ item }) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const currentDate = new Date();
  // Calculate the difference in time
  const timeDifference = new Date(item?.start_date) - currentDate;

  // Convert the time difference to days
  const dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  return (
    <article className="w-[280px]">
      <div className="relative w-full rounded-t-[10px] overflow-hidden">
        <img
          alt="course image"
          src={BASE_URL + item?.thumbLinePicPath?.path}
          layout="fill"
          objectFit="cover"
          className="h-40 w-full"
        />
      </div>
      <div className="font-Baloo bg-[#0A1D29] text-white rounded-b-[10px] px-3 py-3 flex flex-col gap-1 ">
        <div className="flex flex-row justify-between border-b border-[#143952] line-clamp-1 pb-1">
          <div className="">
            <p className="leading-[18px] font-[400] text-[13px] text-#D0D0D0] line-clamp-2">
              {item?.batch_no}
            </p>
          </div>
          <div className="">
            <p className="leading-[18px] font-[400] text-[13px] text-#D0D0D0] line-clamp-2">
              {item?.seats - item?.participants} সিট বাকি
            </p>
          </div>
          <div className="">
            <p className="leading-[18px] font-[400] text-[13px] text-#D0D0D0] line-clamp-2">
              {dayDifference} দিন বাকি
            </p>
          </div>
        </div>
        <h4 className="leading-[28px] font-[600] text-lg line-clamp-1">
          {item?.courseTitle.length >= 25
            ? `${item?.courseTitle.slice(0, 25)} ...`
            : item?.courseTitle}
        </h4>
        <div className="flex justify-between items-center">
          <div className="flex gap-1 items-center">
            <img alt="icon" src={profile_icon} />
            <p className="leading-[18px] font-[400] text-sm">
              {item?.instructor}
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <img alt="icon" src={star_icon} />
            <p className="leading-[18px] font-[400] text-sm mt-1">
              {item?.averageRating}
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <p className="leading-[22px] font-[500] text-base text-[#9096A2]">
              ৳ <span className="line-through ">{item?.regularPrice}</span>
            </p>
            <p className="leading-[22px] font-[500] text-base text-[#53DFC3]">
              {item?.sellPrice}
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <img alt="icon" src={group_icon} />
            <p className="leading-[18px] font-[400] text-xs mt-1">
              {item?.participants}+
            </p>
          </div>
        </div>
        <Link to={`/courseDetails/${item?.course_id}`}>
          <button
            type="button"
            className="w-full text-sm font-[500] leading-[21px] text-white bg-secandary_color flex items-center justify-center py-[10px] px-5  gap-2 rounded-md mt-2"
          >
            এনরোল করুন <img alt="icon" src={arrow} />
          </button>
        </Link>
      </div>
    </article>
  );
};

export default UpComingBatchCard;

