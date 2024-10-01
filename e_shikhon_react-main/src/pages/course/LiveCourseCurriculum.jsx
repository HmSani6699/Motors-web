import React, { useContext, useEffect, useRef, useState } from "react";
import class_room from "../../assets/images/class_room.png";
import down_arrow from "../../assets/svg/down_arrow.svg";
import live_icon_small from "../../assets/svg/live_icon_small.svg";
import small_green_tick from "../../assets/svg/small_green_tick.svg";
import file_icon_small from "../../assets/svg/file-document-edit-outline.svg";
import file_multiple_icon_small from "../../assets/svg/file-document-multiple-outline.svg";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { AuthContext, SocketContext } from "../../layout/MainLayout";
import { post, put } from "../../api/axious";
import { todayDay } from "../../api/helper";
import Wrapper from "../../components/sheared/Wrapper";
import SuggLoading from "../../components/Common/SuggLoading";
import LiveClassCountdown from "../../components/countdown/LiveClassCountdown";
import { IoMdLock, IoMdUnlock } from "react-icons/io";
import toast from "react-hot-toast";
import Assignment from "./Assigenment";
import QuizCard from "./Quiz/index";
import { MdAssignment } from "react-icons/md";
import { MdQuiz } from "react-icons/md";

const LiveCourseCurriculum = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const { socket } = useContext(SocketContext);
  const navigate = useNavigate();
  const [courseData, setCourseData] = useState({});
  const [loading, setLoading] = useState(false);

  const [loadingApproves, setLoadingApproves] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  // const [type, setType] = useState("");
  // const [unitIndex, setUnitIndex] = useState(0);
  // const [curriculumIndex, setCurriculumIndex] = useState(0);
  const roleName = user?.roles?.roleName;
  const type = searchParams.get("type") || "unit";
  const curriculumIndex = searchParams.get("curriculumIndex") || 0;
  const unitIndex = searchParams.get("unitIndex") || 0;

  const paymentInfo = courseData?.payment_info?.[0]?.is_success;

  useEffect(() => {
    let timer;
    if (!paymentInfo || paymentInfo != 1) {
      timer = setTimeout(() => {
        navigate("/cart");
      }, 2500);
    }
    return () => clearTimeout(timer);
  }, [paymentInfo, navigate]);

  useEffect(() => {
    if (user?.id && id) {
      getSingleCourseDetails();
    }
  }, [id, user?.id]);

  const getSingleCourseDetails = async () => {
    setLoading(true);
    try {
      const response = await post(`/api/batch/get/${id}`, {
        user_id: user?.id,
      });
      if (response.success) {
        setCourseData(response?.data);
      }
    } catch (error) {
      console.error("Error creating app:", error);
    } finally {
      setLoading(false);
    }
  };

  // console.log("courseData", courseData);

  useEffect(() => {
    socket.on("send_status", (data) => {
      if (data !== undefined && data) {
        // setClickData((previous) => {
        //   const newCourseData = { ...previous };
        //   newCourseData.class_status = data.class_status;
        //   return newCourseData;
        // });
        setCourseData((previous) => {
          const newCourseData = { ...previous };
          newCourseData.courseCurriculum.forEach((curriculum) => {
            curriculum.units.forEach((unit) => {
              if (unit.id === data.id) {
                unit.class_status = data.class_status;
              }
            });
          });
          return newCourseData;
        });
      }
    });
  }, [socket]);

  const handleClassStatus = async (data) => {
    const payload = {
      class_status: data?.msg,
    };
    setLoadingApproves(true);
    try {
      const res = await put(
        `api/unit/class_status_update/${data?.id}`,
        payload
      );
      socket.emit("get_status", { id: data?.id });
      if (res.success && data?.msg === "start") {
        navigate("/zoom-meeting", {
          state:
            roleName === "Instructor"
              ? courseData?.courseCurriculum?.[curriculumIndex]?.units?.[
                  unitIndex
                ]?.instructor_link
              : courseData?.courseCurriculum?.[curriculumIndex]?.units?.[
                  unitIndex
                ]?.link,
        });
      }
    } catch (error) {
      toast.error("Failed to Start Class");
      console.log("Failed to start class:", error?.response);
    } finally {
      setLoadingApproves(false);
    }
  };

  const handleUnitLiveClassLink = (data, index, i) => {
    setSearchParams({
      type: "unit",
      unitIndex: i,
      curriculumIndex: index,
    });

    // setType("unit");
    // setUnitIndex(i);
    // setCurriculumIndex(index);
  };

  const handleQuiz = (data, index) => {
    setSearchParams({
      type: "quiz",
      unitIndex: null,
      curriculumIndex: index,
    });
    // setType("quiz");
    // setUnitIndex(null);
    // setCurriculumIndex(index);
  };
  const handleAssignment = (data, index) => {
    setSearchParams({
      type: "assignment",
      unitIndex: null,
      curriculumIndex: index,
    });

    // setType("assignment");
    // setUnitIndex(null);
    // setCurriculumIndex(index);
  };
  const compareTimes = (targetDate) => {
    try {
      const startDate = new Date(targetDate);

      if (isNaN(startDate)) {
        throw new Error("Invalid date");
      }
      const formattedStartDate = startDate.toISOString().split("T")[0];
      return formattedStartDate <= todayDay();
    } catch (error) {
      console.error("Error in compareTimes function:", error);
      return false; // or handle the error as needed
    }
  };

  // const compareTimes = (targetDate) => {
  //   const startDate = new Date(targetDate);
  //   const formattedStartDate = startDate?.toISOString().split("T")[0];
  //   return formattedStartDate <= todayDay();
  // };

  // console.log(courseData?.courseCurriculum);
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-full my-[200px]">
          <SuggLoading />
        </div>
      ) : (
        <Wrapper className="my-10">
          <div className="border-b border-[#C7CAD1]">
            <div>
              <h2 className="text-[12px] md:text-[18px] lg:text-[24px] font-[600] text_black_gray leading-[18px] md:leading-[32px] lg:leading-[40px] pb-2">
                {courseData?.course?.courseTitle} ({courseData?.batch_no}){" "}
              </h2>
            </div>
          </div>

          <div className="flex flex-col  md:flex-row gap-3">
            <div className="pt-4 w-full md:min-w-[730px] ">
              <div
                className={`w-full p-4 ${
                  type === "unit" ? "bg-white" : "contact_us_bg bg-[#F4FBFF] "
                }  rounded-[8px] border border-[#E3E5E8]`}
              >
                <h1 className="text-[20px] text-black font-[500] leading-[22px]">
                  {type === "quiz"
                    ? courseData?.courseCurriculum?.[curriculumIndex]?.quiz
                        ?.title
                    : type === "assignment"
                    ? courseData?.courseCurriculum?.[curriculumIndex]
                        ?.assignment?.title
                    : courseData?.courseCurriculum?.[curriculumIndex]?.units?.[
                        unitIndex
                      ]?.title}
                </h1>
                {courseData?.courseCurriculum?.[curriculumIndex]?.assignment &&
                type === "assignment" ? (
                  <div className=" w-full rounded-lg  pb-2 ">
                    <Assignment
                      assignment={
                        courseData?.courseCurriculum?.[curriculumIndex]
                          ?.assignment
                      }
                      title={false}
                      courseData={courseData}
                      curriculumIndex={curriculumIndex}
                      setCourseData={setCourseData}
                      type="live"
                    />
                  </div>
                ) : courseData?.courseCurriculum?.[curriculumIndex]?.quiz &&
                  type === "quiz" ? (
                  <div className=" w-full">
                    <QuizCard
                      quiz={
                        courseData?.courseCurriculum?.[curriculumIndex]?.quiz
                      }
                      curriculumIndex={curriculumIndex}
                      courseData={courseData}
                      setCourseData={setCourseData}
                      type="live"
                    />
                  </div>
                ) : (
                  <div className="flex justify-center ">
                    <div className="w-[232px] h-[435px] mx-auto flex flex-col items-center justify-center">
                      <LiveClassCountdown
                        // targetDate={clickData?.start_date}
                        targetDate={
                          courseData?.courseCurriculum?.[curriculumIndex]
                            ?.units?.[unitIndex]?.start_date
                        }
                        targetTime={
                          courseData?.courseCurriculum?.[curriculumIndex]
                            ?.units?.[unitIndex]?.start_time
                        }
                        // targetTime={clickData?.start_time}
                        link={
                          courseData?.courseCurriculum?.[curriculumIndex]
                            ?.units?.[unitIndex]?.zoom_info?.join_url
                        }
                        // link={clickData?.zoom_info?.join_url}
                        url={courseData?.course_id}
                        // duration={parseInt(clickData?.unit_duration)}
                        duration={parseInt(
                          courseData?.courseCurriculum?.[curriculumIndex]
                            ?.units?.[unitIndex]?.unit_duration
                        )}
                        // allData={clickData}
                        allData={
                          courseData?.courseCurriculum?.[curriculumIndex]
                            ?.units?.[unitIndex]
                        }
                        startClass={handleClassStatus}
                        loadingApproves={loadingApproves}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div
              className="w-full  h-[500px] overflow-auto pt-4 "
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
                      ক্লাশ কারিকুলাম
                    </h1>
                  </div>
                </div>

                <div className="flex flex-col  gap-2.5 pb-5 pt-2 px-2">
                  {courseData?.courseCurriculum?.map(
                    (dataCurriculum, index) => (
                      <section
                        key={index}
                        className="w-full rounded-[5px] border border-[#C7CAD1] bg-white cursor-pointer"
                      >
                        <details
                          className="group"
                          open={index == curriculumIndex}
                        >
                          <summary className="p-1.5 relative flex cursor-pointer list-none font-medium transition-colors duration-300 focus-visible:outline-none  [&::-webkit-details-marker]:hidden justify-between items-center">
                            <div className="flex flex-row gap-2 md:gap-[8px]">
                              <div className="py-1.5 px-2 flex items-center justify-center second_bg_color rounded-[5px]">
                                <h1
                                  className="text-white text-[20px] font-[600]
                                     leading-[22px] py-3 px-4"
                                >
                                  {index + 1}
                                </h1>
                              </div>
                              <div>
                                <h1
                                  className="text-[#343434] text-[25px] font-[600]
                                     leading-[22px] py-2"
                                >
                                  {dataCurriculum?.title}
                                </h1>
                                <div className="flex gap-3 ">
                                  {dataCurriculum?.units?.length > 0 && (
                                    <div className="flex flex-row items-center gap-1">
                                      <img
                                        className="mb-1"
                                        src={live_icon_small}
                                        alt=""
                                      />
                                      <h1 className="text-[14px] font-[400] text_black_gray leading-[10px]">
                                        {dataCurriculum?.units?.length} টি লাইভ
                                        ক্লাস
                                      </h1>
                                    </div>
                                  )}
                                  {dataCurriculum?.assignment && (
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
                                  )}
                                  {dataCurriculum?.quiz && (
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
                                  )}
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
                            // console.log(unitData?.class_status);
                            return (
                              <div
                                key={i}
                                onClick={() =>
                                  handleUnitLiveClassLink(unitData, index, i)
                                }
                                className={`px-2.5 py-3 border-t-2 ${
                                  curriculumIndex == index && unitIndex == i
                                    ? "bg-gray-200"
                                    : " "
                                }`}
                              >
                                <div className="flex justify-start">
                                  {compareTimes(unitData?.start_date) &&
                                  unitData?.class_status === "pending" ? (
                                    <button className="p-2.5 bg-orange-500 rounded-[50px] text-[14px] text-white font-[400] leading-[10px]">
                                      {roleName === "Instructor"
                                        ? "ক্লাস শুরু করুন"
                                        : "ক্লাস শুরু জন্য অপেক্ষা করুন"}
                                    </button>
                                  ) : compareTimes(unitData?.start_date) &&
                                    unitData?.class_status === "start" ? (
                                    <button className="p-2.5 bg-[#1A8C75] rounded-[50px] text-[14px] text-white font-[400] leading-[10px]">
                                      {roleName === "Instructor"
                                        ? "ক্লাস চলমান"
                                        : "ক্লাসে জয়েন করুন"}
                                    </button>
                                  ) : compareTimes(unitData?.start_date) &&
                                    unitData?.class_status === "end" ? (
                                    <button className="p-2.5 bg-red-400 rounded-[50px] text-[14px] text-white font-[400] leading-[10px]">
                                      ক্লাস শেষ
                                    </button>
                                  ) : (
                                    <button className="p-2.5 bg-gray-500 rounded-[50px] text-[14px] text-white font-[400] leading-[10px]">
                                      অপেক্ষা করুন
                                    </button>
                                  )}
                                </div>
                                <div className="flex flex-row items-center gap-2 mt-2">
                                  {unitData?.class_status === "end" ? (
                                    <img src={small_green_tick} alt="" />
                                  ) : compareTimes(unitData?.start_date) ? (
                                    <IoMdUnlock className="text-[#1a8d75] text-[18px]" />
                                  ) : (
                                    <IoMdLock className="text-[#1a8d75] text-[18px]" />
                                  )}
                                  <h1 className="text-[16px] text-black font-[600] leading-[22px]">
                                    {unitData?.title}
                                  </h1>
                                </div>
                              </div>
                            );
                          })}
                          {dataCurriculum?.quiz && (
                            <div
                              onClick={() =>
                                handleQuiz(dataCurriculum?.quiz, index)
                              }
                              className={`px-2.5 py-3 border-t-2 ${
                                curriculumIndex == index && type === "quiz"
                                  ? "bg-gray-200"
                                  : " "
                              }`}
                            >
                              <div className="flex justify-start">
                                <button className="p-2.5 bg-[#1A8C75] rounded-[50px] text-[14px] text-white font-[400] leading-[10px] flex justify-center items-center gap-1">
                                  <MdQuiz className="text-[16px]" /> কুইজ টেষ্ট
                                </button>
                              </div>
                              <div className="flex flex-row items-center gap-2 mt-2">
                                {dataCurriculum?.quiz?.result?.[0]
                                  ?.isComplete &&
                                compareTimes(
                                  dataCurriculum?.quiz?.start_date
                                ) ? (
                                  <img src={small_green_tick} alt="" />
                                ) : compareTimes(
                                    dataCurriculum?.quiz?.start_date
                                  ) ? (
                                  <IoMdUnlock className="text-[#1a8d75] text-[18px]" />
                                ) : (
                                  <IoMdLock className="text-[#1a8d75] text-[18px]" />
                                )}

                                <h1 className="text-[16px] text-black font-[600] leading-[22px]">
                                  {dataCurriculum?.quiz?.title}
                                </h1>
                              </div>
                            </div>
                          )}
                          {dataCurriculum?.assignment && (
                            <div
                              onClick={() =>
                                handleAssignment(
                                  dataCurriculum?.assignment,
                                  index
                                )
                              }
                              className={`px-2.5 py-3 border-t-2 ${
                                curriculumIndex == index &&
                                type === "assignment"
                                  ? "bg-gray-200"
                                  : " "
                              }`}
                            >
                              <div className="flex justify-start">
                                <button className="p-2.5 bg-[#1A8C75] rounded-[50px] text-[14px] text-white font-[400] leading-[10px] flex justify-center items-center gap-1">
                                  <MdAssignment className="text-[16px]" />
                                  এ্যাসাইনমেন্ট
                                </button>
                              </div>
                              <div className="flex flex-row items-center gap-2 mt-2">
                                {dataCurriculum?.assignment?.result?.[0]
                                  ?.isComplete &&
                                compareTimes(
                                  dataCurriculum?.assignment?.start_date
                                ) ? (
                                  <img src={small_green_tick} alt="" />
                                ) : compareTimes(
                                    dataCurriculum?.assignment?.start_date
                                  ) ? (
                                  <IoMdUnlock className="text-[#1a8d75] text-[18px]" />
                                ) : (
                                  <IoMdLock className="text-[#1a8d75] text-[18px]" />
                                )}

                                <h1 className="text-[16px] text-black font-[600] leading-[22px]">
                                  {/* এ্যাসাইনমেন্ট */}
                                  {dataCurriculum?.assignment?.title}
                                </h1>
                              </div>
                            </div>
                          )}
                        </details>
                      </section>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      )}
    </>
  );
};

export default LiveCourseCurriculum;
