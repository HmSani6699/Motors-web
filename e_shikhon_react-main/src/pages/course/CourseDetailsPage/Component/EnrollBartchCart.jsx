import React from "react";
import down_arrow_icon from "../../../../assets/svg/down_arrow.svg";
import calender_icon from "../../../../assets/svg/calendar-dates_green.svg";
import time from "../../../../assets/svg/timer_half_green.svg";
import right_arrow_icon from "../../../../assets/svg/right-arrow.svg";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const EnrollBartchCart = ({
  courseData,
  user,
  id,
  show = false,
  handleCourseEnrollByBatch,
}) => {
  const navigate = useNavigate();
  return (
    <div className=" flex flex-col gap-2.5 relative">
      {courseData?.batch_info?.map((batchData, i) => (
        <div
          key={i}
          className="p-2.5 md:p-5 bg-[#D6E9F5] rounded-[5px] border-0 md:border-s-2 border-[#20AC90]"
        >
          <div className="flex flex-row items-center justify-between ">
            <div className="flex items-center justify-between ">
              <div>
                <h3 className="text-[14px] font-[400] leading-[21px] text-black">
                  ব্যাচ নম্বর
                </h3>
                <h3 className="text-[14px] font-[500] leading-[21px] text_blue">
                  {batchData?.batch_no}
                </h3>
              </div>
              <div className="ps-5">
                {batchData?.dummy_participants + batchData?.participants} /{" "}
                {batchData?.seats}
              </div>
            </div>
            <hr className="w-[1px] h-[37px] border-s border-solid border-white" />
            <div>
              <div className="flex flex-row items-center gap-1">
                <img src={calender_icon} alt="" />
                <h3 className="text-[14px] font-[400] leading-[21px] text-black">
                  ক্লাস শুরু হবে
                </h3>
              </div>

              <h3 className="text-[14px] font-[500] leading-[21px] text_blue">
                {moment(batchData.start_date).format("ll")}
              </h3>
            </div>
            <hr className="w-[1px] h-[37px] border-s border-solid border-white" />
            <div>
              <div className="flex flex-row items-center gap-1">
                <img src={time} alt="" />
                <h3 className="text-[14px] font-[400] leading-[21px] text-black">
                  ক্লাস শিডিউল
                </h3>
              </div>
              <div className="flex flex-row items-center gap-1 text-[14px] font-[500] leading-[21px] text_blue">
                {batchData?.scheduleDay.map((day, i) => (
                  <span key={i}>
                    {day}
                    {i !== batchData?.scheduleDay.length - 1 ? "," : ""}
                  </span>
                ))}
                ({moment(batchData.scheduleTime, "HH:mm").format("h:mm a")})
              </div>
            </div>

            {
              courseData?.data?.enrolled &&
                courseData?.data?.enrolled?.some(enrollment =>
                  enrollment.user_id === user?.id && enrollment.batch_id === batchData?.id
                )
                ? (
                  <button
                    type="submit"
                    onClick={() => navigate(`/liveCourseCurriculum/${batchData?.id}`)}
                    className=" py-2.5 px-5 bg_green rounded-[8px] text-white text-[14px] font-[500] leading-[21px] justify-center gap-3"
                  >
                    জয়েন লাইভ ক্লাস
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      handleCourseEnrollByBatch(
                        batchData?.id,
                        batchData?.batch_no,
                        courseData?.data?.courseTitle,
                        courseData?.data?.sellPrice,
                        courseData?.data?.thumbLinePicPath.path,
                        courseData?.data?.courseType,
                        courseData?.data?.courseCategory
                      )
                    }
                    className={`py-2.5 px-5 bg_green rounded-[8px] flex flex-row items-center text-white text-[14px] font-[500] leading-[21px]`}
                  >
                    এনরোল করুন
                    <img src={right_arrow_icon} alt="" />
                  </button>
                )}
          </div>
        </div>
      ))}
      {show && courseData?.batch_info?.length > 0 && (
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 -bottom-9 ">
          <button className=" py-1.5 px-3 bg-white rounded-[50px] flex flex-row items-center text_black_gray text-[14px] font-[500] leading-[21px] justify-center gap-3 drop-shadow-xl">
            সকল ব্যাচ
            <img src={down_arrow_icon} alt="" />
          </button>
        </div>
      )}
    </div>
  );
};

export default EnrollBartchCart;
