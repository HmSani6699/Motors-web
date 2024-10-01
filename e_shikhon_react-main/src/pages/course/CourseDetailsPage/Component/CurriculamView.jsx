import React, { useContext } from "react";
import down_arrow_icon from "../../../../assets/svg/down_arrow.svg";
import class_room from "../../../../assets/images/class_room.png";
import down_arrow from "../../../../assets/svg/down_arrow.svg";
import live_icon_small from "../../../../assets/svg/live_icon_small.svg";
import file_multiple_icon_small from "../../../../assets/svg/file-document-multiple-outline.svg";
import small_gary_stopwatch from "../../../../assets/svg/small_gary_stopwatch.svg";
import { IoMdLock } from "react-icons/io";
import { IoMdUnlock } from "react-icons/io";
import { AuthContext } from "../../../../layout/MainLayout";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const CurriculamView = ({ courseData }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const convertDuration = (unitDuration, unitDurationParameter) => {
    if (unitDurationParameter?.toLowerCase() === "minute") {
      const hours = Math.floor(unitDuration / 60);
      const minutes = unitDuration % 60;
      return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
        2,
        "0"
      )}:00`;
    } else {
      return unitDuration;
    }
  };

  const handleLock = () => {
    toast.error("This section is lock");
  };
  return (
    <div>
      {courseData?.data?.courseCurriculum?.length > 0 && (
        <div id="curriculum">
          <div className="flex  flex-row gap-2">
            <div className="mt-2">
              <img src={class_room} alt="" />
            </div>
            <h1 className="text_black text-[20px] lg:text-[24px] font-[600] leading-[28px] lg:leading-[32px] mb-2">
              ক্লাস কারিকুলাম
            </h1>
          </div>
        </div>
      )}
      {courseData?.data?.courseCurriculum?.length > 0 && (
        <div className="flex flex-col gap-2.5 pb-5 relative">
          {courseData?.data?.courseCurriculum &&
            courseData?.data?.courseCurriculum?.map((dataCurriculum, i) => (
              <section
                key={i}
                className="w-full rounded-[5px] border border-[#C7CAD1] bg-white"
              >
                <details className="group ">
                  <summary className="p-2.5 relative flex cursor-pointer list-none font-medium transition-colors duration-300 focus-visible:outline-none  [&::-webkit-details-marker]:hidden justify-between items-center">
                    <div className="flex flex-row gap-2.5 md:gap-[30px]">
                      <div className="hidden py-2.5 px-3 md:flex flex-col items-center second_bg_color rounded-[5px] transition-transform ease-in-out">
                        <h1
                          className="text-white text-[20] font-[600]
                                       leading-[22px]"
                        >
                          Class
                        </h1>
                        <h1 className="text-white text-[20] font-[600] leading-[20px]">
                          {i + 1}
                        </h1>
                      </div>
                      <div>
                        <div className="flex flex-row gap-2.5">
                          <h1 className="text-[24px] font-[600] text_black">
                            {dataCurriculum?.title}
                          </h1>
                        </div>
                        <div className="flex flex-row items-center gap-2.5 md:gap-5">
                          <div className="flex flex-row items-center gap-1">
                            <img
                              className="mb-1"
                              src={live_icon_small}
                              alt=""
                            />
                            <h1 className="text-[14px] font-[400] text_black_gray leading-[10px]">
                              {dataCurriculum?.units?.length} Unit
                            </h1>
                          </div>
                          {/* <div className="flex flex-row items-center gap-1">
                                  <img
                                    className="mb-1"
                                    src={file_icon_small}
                                    alt=""
                                  />
                                  <h1 className="text-[14px] font-[400] text_black_gray leading-[10px]">
                                    ১ টি এসাইনমেন্ট
                                  </h1>
                                </div> */}
                          <div className="flex flex-row items-center gap-1">
                            <img
                              className="mb-1"
                              src={file_multiple_icon_small}
                              alt=""
                            />
                            <h1 className="text-[14px] font-[400] text_black_gray leading-[10px]">
                              1 Quiz
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <img
                        className="transition duration-300 group-open:-rotate-180"
                        src={down_arrow}
                        alt=""
                      />
                    </div>
                  </summary>

                  {dataCurriculum?.units?.map((videoData, i) => (
                    <React.Fragment key={i}>
                      {videoData?.quiz ? (
                        <div
                          onClick={() => {
                            if (!user) {
                              navigate("/login", { state: { from: location } });
                              return;
                            }
                            if (
                              videoData?.free_unit === "true" ||
                              courseData?.data?.enrolled?.[0]?.user_id ===
                              user?.id
                            ) {
                              navigate(`/courseCurriculum/${courseData?.data?.id}`);
                            } else {
                              handleLock();
                            }
                          }}
                          className="px-2.5 py-5 border-t-2 flex flex-row justify-between items-center cursor-pointer"
                        >
                          <div className="flex flex-row items-center gap-2 ">
                            {videoData?.free_unit === "true" ||
                              courseData?.data?.enrolled?.[0]?.user_id ===
                              user?.id ? (
                              <IoMdUnlock className="text-[#1a8d75] text-[18px]" />
                            ) : (
                              <IoMdLock className="text-[#1a8d75] text-[18px]" />
                            )}
                            <h1 className="text-[16px] text-black font-[600] leading-[22px]">
                              কুইজ টেষ্ট
                            </h1>
                          </div>
                        </div>
                      ) : videoData?.assignment ? (
                        <div
                          onClick={() => {
                            if (!user) {
                              navigate("/login", { state: { from: location } });
                              return;
                            }
                            if (
                              videoData?.free_unit === "true" ||
                              courseData?.data?.enrolled?.[0]?.user_id ===
                              user?.id
                            ) {
                              navigate(`/courseCurriculum/${courseData?.data?.id}`);
                            } else {
                              handleLock();
                            }
                          }}
                          className="px-2.5 py-5 border-t-2 flex flex-row justify-between items-center cursor-pointer"
                        >
                          <div className="flex flex-row items-center gap-2 ">
                            {videoData?.free_unit === "true" ||
                              courseData?.data?.enrolled?.[0]?.user_id ===
                              user?.id ? (
                              <IoMdUnlock className="text-[#1a8d75] text-[18px]" />
                            ) : (
                              <IoMdLock className="text-[#1a8d75] text-[18px]" />
                            )}
                            <h1 className="text-[16px] text-black font-[600] leading-[22px]">
                              Assignment
                            </h1>
                          </div>
                        </div>
                      ) : (
                        <div
                          onClick={() => {
                            if (!user) {
                              navigate("/login", { state: { from: location } });
                              return;
                            }
                            if (
                              videoData?.free_unit === "true" ||
                              courseData?.data?.enrolled?.[0]?.user_id ===
                              user?.id
                            ) {
                              navigate(`/courseCurriculum/${courseData?.data?.id}`);
                            } else {
                              handleLock();
                            }
                          }}
                          className="flex flex-col cursor-pointer"
                        >
                          <div className="px-2.5 py-5 border-t-2 flex flex-row justify-between items-center gap-3 w-full">
                            <div>
                              <div className="flex flex-row items-center gap-2 mt-2">
                                <div className="w-18px">
                                  {videoData?.free_unit === "true" ||
                                    courseData?.data?.enrolled?.[0]?.user_id ===
                                    user?.id ? (
                                    <IoMdUnlock className="text-[#1a8d75] text-[18px]" />
                                  ) : (
                                    <IoMdLock className="text-[#1a8d75] text-[18px]" />
                                  )}
                                </div>

                                <h1 className="text-[16px] text-black font-[600] leading-[22px]">
                                  {videoData?.title}
                                </h1>
                              </div>
                            </div>
                            {courseData?.data?.courseType === "ভিডিও কোর্স" && (
                              <div className="flex flex-row items-center gap-1 min-w-[77px]">
                                <img src={small_gary_stopwatch} alt="" />

                                <h1 className="text-[14px] font-[400] text_black_gray leading-[10px]">
                                  {convertDuration(
                                    videoData?.unit_duration,
                                    videoData?.unit_duration_parameter
                                  )}
                                </h1>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </details>
              </section>
            ))}

          {/* <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 -bottom-3 ">
            <button className=" py-1.5 px-3 bg-white rounded-[50px] flex flex-row items-center text_black_gray text-[14px] font-[500] leading-[21px] justify-center gap-3 drop-shadow-xl">
              সকল ক্লাস
              <img src={down_arrow_icon} alt="" />
            </button>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default CurriculamView;
