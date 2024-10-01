import React, { useContext, useEffect, useState } from "react";
import class_room from "../../../../assets/images/class_room.png";
import mentor_icon from "../../../../assets/images/mentor-icon.png";
import down_arrow from "../../../../assets/svg/down_arrow.svg";
import live_icon_small from "../../../../assets/svg/live_icon_small.svg";
import file_icon_small from "../../../../assets/svg/file-document-edit-outline.svg";
import file_multiple_icon_small from "../../../../assets/svg/file-document-multiple-outline.svg";
import small_green_tick from "../../../../assets/svg/small_green_tick.svg";
import small_gary_stopwatch from "../../../../assets/svg/small_gary_stopwatch.svg";
import class_plyer from "../../../../assets/images/class_plyer.png";
import mentor_3 from "../../../../assets/images/abdurrahman_post_photo.png";
import star_yellow from "../../../../assets/svg/star_yellow.svg";
import fb_icon from "../../../../assets/svg/fb-color.svg";
import messenger_icon from "../../../../assets/svg/fb_messenger.svg";
import whatsapp_icon from "../../../../assets/svg/whatsapp.svg";
import linkedin_icon from "../../../../assets/svg/lindein-color.svg";
import github_icon from "../../../../assets/svg/gitHub_coloer.svg";
import { Link, Route, Routes, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../../layout/MainLayout";
import { get, post } from "../../../../api/axious";
import { scrollToTop } from "../../../../api/helper";
import ZoomMeeting from "../../../course/ZoomMeeting";

const MyCoursePlyer = () => {
  scrollToTop();
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [courseData, setCourseData] = useState();
  const [lock, setLock] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user?.id === undefined) {
      console.log("hello");
    } else {
      getSingleCourseDetails();
    }
  }, [id, user?.id]);

  const getSingleCourseDetails = async () => {
    try {
      const response = await post(`/api/batch/get/${id}`, {
        user_id: user?.id,
      });
      console.log(response.data);
      if (response.success) {
        setCourseData(response?.data);
      }
    } catch (error) {
      console.error("Error creating app:", error);
    }
  };

  // console.log(courseData, 'courseData')

  const [meetLink, setMeetLink] = useState();
  const [videoTitle, setLiveTitle] = useState();

  const handleUnitLiveClassLink = (data) => {
    setLiveTitle(data.title);
    setMeetLink(data.link);
  };
  console.log(meetLink);
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full max-w-[1015px] mx-auto px-[13px]">
        <div className="border-b border-[#C7CAD1]">
          <div>
            {courseData?.course?.courseTitle && (
              <h2 className="text-[12px] md:text-[18px] lg:text-[24px] font-[600] text_black_gray leading-[18px] md:leading-[32px] lg:leading-[40px] pb-2">
                {courseData?.course?.courseTitle} ({courseData?.batch_no}){" "}
              </h2>
            )}
          </div>
        </div>

        <div className="flex gap-3">
          <div
            className="w-full lg:max-w-[340px] h-[500px] overflow-auto pt-4 "
            style={{
              scrollbarWidth: "thin",
              scrollBehavior: "smooth",
              scrollbarColor: "#1A8C75 #C7CAD1",
            }}
          >
            <div className="bg-white rounded-b-md">
              <div className="bg-[#E3E5E8] rounded-t-md py-1.5 px-3">
                <div className="flex flex-row gap-2">
                  <div className="mt-2">
                    <img src={class_room} alt="" />
                  </div>
                  <h1 className="text-[20px] font-[600] text-[#2E3138]">
                    ক্লাস কারিকুলাম
                  </h1>
                </div>
              </div>

              <div className="flex flex-col  gap-2.5 pb-5 pt-2 px-2">
                {courseData?.courseCurriculum?.map((dataCurriculum, index) => (
                  <section
                    key={index}
                    className="w-full rounded-[5px] border border-[#C7CAD1] bg-white cursor-pointer"
                  >
                    <details className="group ">
                      <summary className="p-1.5 relative flex cursor-pointer list-none font-medium transition-colors duration-300 focus-visible:outline-none  [&::-webkit-details-marker]:hidden justify-between items-center">
                        <div className="flex flex-row gap-2 md:gap-[8px]">
                          <div className="py-1.5 px-2 flex items-center justify-center second_bg_color rounded-[5px]">
                            <h1
                              className="text-white text-[20] font-[600]
                                       leading-[22px] "
                            >
                              {dataCurriculum?.title}
                            </h1>
                          </div>
                          <div>
                            <div className="flex flex-col">
                              <div className="flex flex-row items-center gap-1">
                                <img
                                  className="mb-1"
                                  src={live_icon_small}
                                  alt=""
                                />
                                <h1 className="text-[14px] font-[400] text_black_gray leading-[10px]">
                                  {dataCurriculum?.units.length} টি ভিডিও ক্লাস
                                </h1>
                              </div>
                              <div className="flex flex-row items-center gap-1">
                                <img
                                  className="mb-1"
                                  src={file_icon_small}
                                  alt=""
                                />
                                <h1 className="text-[14px] font-[400] text_black_gray leading-[10px]">
                                  1 টি এসাইনমেন্ট
                                </h1>
                              </div>
                              <div className="flex flex-row items-center gap-1">
                                <img
                                  className="mb-1"
                                  src={file_multiple_icon_small}
                                  alt=""
                                />
                                <h1 className="text-[14px] font-[400] text_black_gray leading-[10px]">
                                  1 টি কুইজ
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
                      {dataCurriculum?.units?.map((unitData, i) => {
                        // console.log(videoData.quiz, "===========>");
                        return (
                          <>
                            <div key={i} className="px-2.5 py-3 border-t-2">
                              <div>
                                <div
                                  onClick={() =>
                                    handleUnitLiveClassLink(unitData)
                                  }
                                  className="flex justify-start"
                                >
                                  <button className="p-2.5 bg-[#1A8C75] rounded-[50px] text-[14px] text-white font-[400] leading-[10px]">
                                    ক্লাস জয়েন করুন
                                  </button>
                                </div>
                                <div className="flex flex-row items-center gap-2 mt-2">
                                  <img src={small_green_tick} alt="" />
                                  <h1 className="text-[16px] text-black font-[600] leading-[22px]">
                                    {unitData?.title}
                                  </h1>
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })}
                    </details>
                  </section>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 w-full">
            <div className="w-full p-4 bg-white rounded-[8px] border border-[#E3E5E8] ">
              <h1 className="text-[20px] text-black font-[500] leading-[22px]">
                {videoTitle}
              </h1>
              <div>
                <div className="w-[232px] h-[435px] mx-auto flex flex-col items-center justify-center ">
                  <img className="mx-auto" src={class_plyer} alt="" />
                  {meetLink && (
                    <div>
                      <h1 className="mt-3 text-[20px] text-black font-[500] leading-[22px] text-center">
                        Session is live!
                      </h1>
                      <h1 className="mt-1.5 text-[14px] text-black font-[400] leading-[18px] text-center">
                        You can join the live now...
                      </h1>
                    </div>
                  )}
                  <div className="flex gap-3 mt-5">
                    {meetLink && (
                      <>
                        <button
                          onClick={() =>
                            navigate("/zoom-meeting", { state: meetLink })
                          }
                          className=" p-2.5 text-white primary_green rounded-[5px] text-[14px] font-[400] leading-[18px]"
                        >
                          Join the class
                        </button>

                        <Link to={`/courseDetails/${courseData?.course_id}`}>
                          <button className=" p-2.5 text-black bg-[#E3E5E8] rounded-[5px] text-[14px] font-[400] leading-[18px]">
                            Course page
                          </button>
                        </Link>
                      </>
                    )}
                    {/*  */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCoursePlyer;
