import React from "react";
import locationIcon from "../../../assets/svg/location.svg";
import calender from "../../../assets/svg/calender.svg";
import timer from "../../../assets/svg/timer_white.svg";
import { timeFormat12 } from "../../../../Hooks/timeFormate12";

const SeminarCard = ({
  baseUrl,
  item,
  openModal,
  setOpenModal,
  setSelectOneSeminarData,
}) => {
  return (
    <div className=" lg:w-[358px] w-full overflow-hidden rounded_teen bg-[#0A1D29]">
      <figure>
        <img
          src={baseUrl + item?.seminarPic?.path}
          alt="class image"
          className="aspect-video w-full"
        />
      </figure>
      <div className="p-6 flex flex-col gap-3">
        <header>
          <h3 className="text-[18px] font-[600] text-[#FFF] ">
            {item?.title?.slice(0, 40)}
          </h3>
        </header>
        <div className="grid grid-cols-2 gap-10 md:gap-8">
          <div className=" ">
            <div className="flex items-center gap-1">
              <img src={locationIcon} alt="icon" />
              <span className="text-[#FFF] text-[14px] font-[400]">
                {item?.type}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <img src={calender} alt="icon" />
              <span className="text-[#FFF] text-[14px] font-[400]">
                {item?.seminarStartDate}
              </span>
            </div>
          </div>

          <div className=" ">
            <div className="flex items-center justify-start gap-1">
              <img src={locationIcon} alt="icon" />
              <span className="text-[#FFF] text-[14px] font-[400]">
                {item?.type === "Online" && item?.typeOnline }
                {item?.type === "Offline" && item?.offlineLoc?.slice(0,18)}
              </span>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <img src={timer} alt="icon" />
                <span className="text-[#FFF] text-[14px] font-[400]">
                  {item?.seminarStartTime && timeFormat12(item?.seminarStartTime)} / {item?.seminar_duration} {item?.seminar_duration_parameter}
                </span>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            setOpenModal(!openModal);
            setSelectOneSeminarData(item);
          }}
          type="button"
          className="w-full bg-[#FFF] font-Baloo flex items-center justify-center py-[5px] rounded-[3px] text-[#1D5276] font-[600] mt-3"
        >
          জয়েন করুন
        </button>
      </div>
    </div>
  );
};

export default SeminarCard;
