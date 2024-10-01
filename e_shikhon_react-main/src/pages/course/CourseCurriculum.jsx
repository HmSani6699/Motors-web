import React, { useContext, useEffect, useState } from "react";
import Wrapper from "../../components/sheared/Wrapper";
import home from "../../assets/svg/home_icon.svg";
import arrow from "../../assets/svg/right_gray_icon.svg";
import class_room from "../../assets/images/class_room.png";
import down_arrow from "../../assets/svg/down_arrow.svg";
import live_icon_small from "../../assets/svg/live_icon_small.svg";
import file_icon_small from "../../assets/svg/file-document-edit-outline.svg";
import file_multiple_icon_small from "../../assets/svg/file-document-multiple-outline.svg";
import small_green_tick from "../../assets/svg/small_green_tick.svg";
import small_gary_stopwatch from "../../assets/svg/small_gary_stopwatch.svg";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { get, post, put } from "../../api/axious";
import ReactPlayer from "react-player";
import { IoMdLock } from "react-icons/io";
import { IoMdUnlock } from "react-icons/io";
import { scrollToTop } from "../../api/helper";
import QuizCard from "./Quiz/index";
import { FaLock } from "react-icons/fa";
import { AuthContext } from "../../layout/MainLayout";
import Loading from "../../components/sheared/Loading";
import SuggLoading from "../../components/Common/SuggLoading";
import Assignment from "./Assigenment";

const CourseCurriculum = () => {
  scrollToTop();
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [courseData, setCourseData] = useState(null);
  const [lock, setLock] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingBody, setLoadingBody] = useState(true);
  const [allProgress, setAllProgress] = useState([]);
  const [quizProgress, setQuizProgress] = useState([]);
  const [assignmentProgress, setAssignmentProgress] = useState([]);

  // const [unitIndex, setUnitIndex] = useState(0);
  // const [curriculumIndex, setCurriculumIndex] = useState(0);

  const curriculumIndex = searchParams.get("curriculumIndex") || 0;
  const unitIndex = searchParams.get("unitIndex") || 0;

  const allTitle =
    courseData?.courseCurriculum?.[curriculumIndex]?.units?.[unitIndex];

  const percentage = parseFloat(
    courseData?.progress?.[0]?.courses?.percentage || 0
  );
  const paymentInfo = courseData?.payment_info?.[0];

  useEffect(() => {
    if (courseData && !paymentInfo) {
      navigate("/cart");
    }
  }, [courseData, paymentInfo]);

  useEffect(() => {
    if (id && user?.id) {
      getSingleCourseDetails();
    }
  }, [id, user?.id]);

  const getSingleCourseDetails = async () => {
    setLoadingBody(true);
    try {
      const response = await post(`/api/courses/get/${id}`, {
        user_id: user?.id,
      });
      console.log("video course response:", response?.data);

      if (response.success) {
        setCourseData(response.data);
      }
    } catch (error) {
      console.error("Error creating app:", error);
    } finally {
      setLoadingBody(false);
    }
  };

  // useEffect(() => {
  //   if (courseData?.courseCurriculum?.length == curriculumIndex) {
  //     setCurriculumIndex(0);
  //   }
  // }, [curriculumIndex]);

  // const clickNext = () => {
  //   setUnitIndex(unitIndex + 1);

  //   if (
  //     courseData?.courseCurriculum?.[curriculumIndex]?.units?.length - 1 ==
  //     unitIndex
  //   ) {
  //     setUnitIndex(0);
  //     setCurriculumIndex(curriculumIndex + 1);
  //   }
  // };

  // console.log("courseData", courseData);

  useEffect(() => {
    if (courseData?.progress?.[0]?.progress) {
      const json_data = JSON.parse(courseData?.progress?.[0]?.progress);
      setAllProgress(json_data);
    }
  }, [courseData?.progress?.[0]?.progress]);

  useEffect(() => {
    if (courseData?.progress?.[0]?.quiz_progress) {
      const json_data = JSON.parse(courseData?.progress?.[0]?.quiz_progress);
      setQuizProgress(json_data);
    }
  }, [courseData?.progress?.[0]?.quiz_progress]);

  useEffect(() => {
    if (courseData?.progress?.[0]?.assignment_progress) {
      const json_data = JSON.parse(
        courseData?.progress?.[0]?.assignment_progress
      );
      setAssignmentProgress(json_data);
    }
  }, [courseData?.progress?.[0]?.assignment_progress]);

  const convertDuration = (unitDuration, unitDurationParameter) => {
    if (unitDurationParameter.toLowerCase() === "minute") {
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

  const handlePlay = async (data, index, i, condition) => {
    setLock(false);
    setSearchParams({
      unitIndex: i,
      curriculumIndex: index,
    });
    // setUnitIndex(i);
    // setCurriculumIndex(index);

    scrollToTop();
    const payload = {
      progress: { unitId: data.id },
    };
    // console.log(payload);

    if (courseData?.enrolled && condition) {
      setLoading(true);
      try {
        const res = await put(
          `/api/course/enroll/progress/update/${courseData?.progress[0]?.id}`,
          payload
        );
        // console.log("click response", res);
        if (res?.success) {
          const json_data = JSON.parse(res?.data?.progress);
          setAllProgress(json_data);
        }
      } catch (error) {
        console.log("Failed to Login/", error?.response?.data);
      } finally {
        setLoading(false);
      }
    }
  };

  // const clickPrevious = () => {
  //   setUnitIndex(unitIndex - 1);
  //   setCurriculumIndex(curriculumIndex);
  // };

  const handleQuiz = (data, index, i) => {
    // setUnitIndex(i);
    // setCurriculumIndex(index);
    setSearchParams({
      unitIndex: i,
      curriculumIndex: index,
    });
    setLock(false);
    scrollToTop();
  };
  const handleAssignment = (data, index, i) => {
    // setUnitIndex(i);
    // setCurriculumIndex(index);
    setSearchParams({
      unitIndex: i,
      curriculumIndex: index,
    });
    setLock(false);
    scrollToTop();
  };

  const handleLock = () => {
    setLock(true);
    scrollToTop();
  };

  const countHandler = (arr) => {
    let unitCount = 0;
    let quizCount = 0;
    let assignmentCount = 0;

    if (arr.length) {
      arr.forEach((data) => {
        if (data.id) {
          unitCount++;
        }
        if (data.quiz) {
          quizCount++;
        }
        if (data.assignment) {
          assignmentCount++;
        }
      });
    }

    return { assignmentCount, quizCount, unitCount };
  };

  return (
    <>
      {loadingBody ? (
        <div className="flex justify-center items-center h-full my-[200px]">
          <SuggLoading />
        </div>
      ) : (
        <div className="py-10 bg-[#F5F5F5]">
          <Wrapper>
            {/* brandi */}
            <div className="mb-5 flex items-center">
              <img src={home} alt="icon" className="mx-2 mb-1" />
              <p className="text-primary_color font-[500]">হোম</p>
              <img src={arrow} alt="icon" />
              <Link to={`/courseDetails/${id}`} >
                <p className="text-primary_color font-[500]">কোর্সসমূহ</p>
              </Link>
              <img src={arrow} alt="icon" />
              <p className="text-primary_color font-[500]">
                {courseData?.courseCategory}
              </p>
              <img src={arrow} alt="icon" />
              <p className="text-[#9096A2]">{courseData?.courseTitle}</p>
            </div>

            {/* main section */}

            <h1 className="text-[28px] font-[700] text-[#2E3138] ">
              {courseData?.courseCurriculum?.[curriculumIndex]?.title}
            </h1>

            <div className="w-full flex flex-col md:flex-row gap-3 mt-3">
              <div className={`w-full md:min-w-[730px] `}>
                <div
                  className={`w-full  ${allTitle?.title
                    ? "bg-white"
                    : "contact_us_bg bg-[#F4FBFF] rounded-[8px] border border-[#E3E5E8]"
                    }  `}
                >
                  {loading ? (
                    <div className="p-4 w-full bg-gray-200 pb-2 h-[400px]">
                      <div className="flex flex-col justify-center items-center h-full">
                        <Loading />
                      </div>
                    </div>
                  ) : !lock ? (
                    courseData?.courseCurriculum?.[curriculumIndex]?.units?.[
                      unitIndex
                    ]?.quiz ? (
                      <div className=" w-full p-3">
                        <QuizCard
                          quiz={
                            courseData?.courseCurriculum?.[curriculumIndex]
                              ?.units?.[unitIndex]?.quiz
                          }
                          courseData={courseData}
                          setCourseData={setCourseData}
                          setQuizProgress={setQuizProgress}
                          unitIndex={unitIndex}
                          curriculumIndex={curriculumIndex}
                          type="video"
                        />
                      </div>
                    ) : courseData?.courseCurriculum?.[curriculumIndex]
                      ?.units?.[unitIndex]?.assignment ? (
                      <div className=" w-full  ">
                        <Assignment
                          assignment={
                            courseData?.courseCurriculum?.[curriculumIndex]
                              ?.units?.[unitIndex]?.assignment
                          }
                          title={false}
                          setCourseData={setCourseData}
                          courseData={courseData}
                          setAssignmentProgress={setAssignmentProgress}
                          unitIndex={unitIndex}
                          curriculumIndex={curriculumIndex}
                          type="video"
                        />
                      </div>
                    ) : (
                      <div className="w-full">
                        <ReactPlayer
                          // playing={true}
                          controls={true}
                          width="100%"
                          height="415px"
                          url={
                            courseData?.courseCurriculum?.[curriculumIndex]
                              ?.units?.[unitIndex]?.video_link
                          }
                        />
                      </div>
                    )
                  ) : (
                    <div className="p-4 w-full bg-white pb-2 h-[400px]">
                      <div className="flex flex-col justify-center items-center h-full">
                        <IoMdLock className="text-[#1a8d75] text-[35px] mb-3" />
                        <p className="text-[20px]">
                          Plese Enroll to Unlock this Video
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="px-2 mb-3 mt-5">
                  <h1 className="text-[20px] font-[600] text-[#2E3138] mb-4">
                    {allTitle?.title
                      ? allTitle?.title
                      : allTitle?.assignment?.title
                        ? allTitle?.assignment?.title
                        : allTitle?.quiz?.title
                          ? allTitle?.quiz?.title
                          : "Loading..."}
                  </h1>
                </div>
              </div>

              {/* <div className="flex justify-between items-center mt-3">
                  <button
                    onClick={clickPrevious}
                    className="px-3 min-w-[100px] py-2 rounded-[4px]  text-[16px] font-[500] leading-[24px] text-white primary_green text-center"
                  >
                    Previous
                  </button>

                  <button
                    type="button"
                    onClick={clickNext}
                    className="px-3 min-w-[100px] py-2 rounded-[4px]  text-[16px] font-[500] leading-[24px] text-white primary_green text-center"
                  >
                    Next
                  </button>
                </div> */}

              {/* curriculum section */}
              <div className="rounded-[10px] px-2 w-full">
                <div className="bg-[#E3E5E8] p-2 flex flex-row items-center justify-between  rounded-t-[5px]">
                  <div className=" flex  flex-row gap-2">
                    <div className="mt-2">
                      <img src={class_room} alt="" />
                    </div>
                    <h1 className="text-[24px] font-[600] text-[#2E3138]  mb-2">
                      ক্লাস কারিকুলাম
                    </h1>
                  </div>
                  <div>
                    <h1 className="text-[20px] font-[500] text-[#2E3138]  mb-2">
                      {percentage}% সম্পূর্ন
                    </h1>
                  </div>
                </div>

                <div className="flex flex-col gap-2.5 pb-5 relative">
                  {courseData?.courseCurriculum?.map(
                    (dataCurriculam, index) => (
                      <section
                        key={index}
                        className="w-full rounded-[5px] border border-[#C7CAD1] bg-white cursor-pointer"
                      >
                        <details
                          open={index == curriculumIndex}
                          className="group "
                        >
                          <summary className="p-2.5 relative flex cursor-pointer list-none font-medium transition-colors duration-300 focus-visible:outline-none  [&::-webkit-details-marker]:hidden justify-between items-center">
                            <div className="flex flex-row gap-2 ">
                              <div className=" py-2.5 px-3 flex flex-col items-center second_bg_color rounded-[5px] ">
                                <h1
                                  className="text-white text-[20] font-[600]
                                       leading-[22px]"
                                >
                                  Class
                                </h1>
                                <h1 className="text-white text-[20] font-[600] leading-[20px]">
                                  {index + 1}
                                </h1>
                              </div>
                              <div>
                                <h1 className="text-[24px] font-[600] text_black">
                                  {dataCurriculam?.title?.length <= 26
                                    ? dataCurriculam?.title
                                    : dataCurriculam?.title.slice(0, 24) +
                                    "..."}
                                </h1>
                                <div className="flex flex-row items-center gap-2.5 md:gap-5">
                                  {dataCurriculam?.units &&
                                    countHandler(dataCurriculam?.units)
                                      .unitCount > 0 && (
                                      <div className="flex flex-row items-center gap-1">
                                        <img
                                          className="mb-1"
                                          src={live_icon_small}
                                          alt=""
                                        />
                                        <h1 className="text-[14px] font-[400] text_black_gray leading-[10px]">
                                          {
                                            countHandler(dataCurriculam?.units)
                                              .unitCount
                                          }{" "}
                                          টি ভিডিও ক্লাস
                                        </h1>
                                      </div>
                                    )}
                                  {dataCurriculam?.units &&
                                    countHandler(dataCurriculam?.units)
                                      .assignmentCount > 0 && (
                                      <div className="flex flex-row items-center gap-1">
                                        <img
                                          className="mb-1"
                                          src={file_icon_small}
                                          alt=""
                                        />
                                        <h1 className="text-[14px] font-[400] text_black_gray leading-[10px]">
                                          {
                                            countHandler(dataCurriculam?.units)
                                              .assignmentCount
                                          }{" "}
                                          টি এসাইনমেন্ট
                                        </h1>
                                      </div>
                                    )}

                                  {dataCurriculam?.units &&
                                    countHandler(dataCurriculam?.units)
                                      .quizCount > 0 && (
                                      <div className="flex flex-row items-center gap-1">
                                        <img
                                          className="mb-1"
                                          src={file_multiple_icon_small}
                                          alt=""
                                        />
                                        <h1 className="text-[14px] font-[400] text_black_gray leading-[10px]">
                                          {
                                            countHandler(dataCurriculam?.units)
                                              .quizCount
                                          }{" "}
                                          টি কুইজ
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
                          {dataCurriculam?.units?.map((videoData, i) => {
                            return (
                              <React.Fragment key={i}>
                                {videoData?.quiz ? (
                                  <div
                                    onClick={() => {
                                      if (
                                        videoData?.free_unit === "true" ||
                                        courseData?.enrolled
                                      ) {
                                        handleQuiz(videoData, index, i);
                                      } else {
                                        handleLock();
                                      }
                                    }}
                                    className={`px-2.5 py-5 border-t-2 flex flex-row justify-between items-center gap-3 cursor-pointer w-full  ${curriculumIndex == index && unitIndex == i
                                      ? "bg-gray-200"
                                      : ""
                                      }`}
                                  >
                                    <div className="flex flex-row items-center gap-2 ">
                                      {quizProgress.some(
                                        (pi) =>
                                          pi.quizId === videoData?.quiz?.id
                                      ) ? (
                                        <img src={small_green_tick} alt="" />
                                      ) : (
                                        <div className="w-18px">
                                          {videoData?.free_unit === "true" ||
                                            courseData?.enrolled ? (
                                            <IoMdUnlock className="text-[#1a8d75] text-[18px]" />
                                          ) : (
                                            <IoMdLock className="text-[#1a8d75] text-[18px]" />
                                          )}
                                        </div>
                                      )}

                                      <h1 className="text-[16px] text-black font-[600] leading-[22px]">
                                        কুইজ টেষ্ট
                                      </h1>
                                    </div>
                                  </div>
                                ) : videoData?.assignment ? (
                                  <div
                                    onClick={() => {
                                      if (
                                        videoData?.free_unit === "true" ||
                                        courseData?.enrolled
                                      ) {
                                        handleAssignment(videoData, index, i);
                                      } else {
                                        handleLock();
                                      }
                                    }}
                                    className={`px-2.5 py-5 border-t-2 flex flex-row justify-between items-center gap-3 cursor-pointer w-full  ${curriculumIndex == index && unitIndex == i
                                      ? "bg-gray-200"
                                      : ""
                                      }`}
                                  >
                                    <div className="flex flex-row items-center gap-2 ">
                                      {assignmentProgress.some(
                                        (pi) =>
                                          pi.assignId ===
                                          videoData?.assignment?.id
                                      ) ? (
                                        <img src={small_green_tick} alt="" />
                                      ) : (
                                        <div className="w-18px">
                                          {videoData?.free_unit === "true" ||
                                            courseData?.enrolled ? (
                                            <IoMdUnlock className="text-[#1a8d75] text-[18px]" />
                                          ) : (
                                            <IoMdLock className="text-[#1a8d75] text-[18px]" />
                                          )}
                                        </div>
                                      )}

                                      <h1 className="text-[16px] text-black font-[600] leading-[22px]">
                                        Assignments
                                      </h1>
                                    </div>
                                  </div>
                                ) : (
                                  <div
                                    onClick={() => {
                                      if (
                                        videoData?.free_unit === "true" ||
                                        courseData?.enrolled
                                      ) {
                                        if (
                                          allProgress.some(
                                            (pi) => pi.unitId === videoData.id
                                          )
                                        ) {
                                          handlePlay(
                                            videoData,
                                            index,
                                            i,
                                            false
                                          );
                                        } else {
                                          handlePlay(videoData, index, i, true);
                                        }
                                      } else {
                                        handleLock();
                                      }
                                    }}
                                    className=" flex flex-col cursor-pointer"
                                  >
                                    <div
                                      className={`px-2.5 py-5 border-t-2 flex flex-row justify-between items-center gap-3 w-full  ${curriculumIndex == index &&
                                        unitIndex == i
                                        ? "bg-gray-200"
                                        : ""
                                        }`}
                                    >
                                      <div>
                                        <div className="flex flex-row items-center gap-2 mt-2">
                                          {allProgress.some(
                                            (pi) => pi.unitId === videoData.id
                                          ) ? (
                                            <img
                                              src={small_green_tick}
                                              alt=""
                                            />
                                          ) : (
                                            <div className="w-18px">
                                              {videoData?.free_unit ===
                                                "true" ||
                                                courseData?.enrolled ? (
                                                <IoMdUnlock className="text-[#1a8d75] text-[18px]" />
                                              ) : (
                                                <IoMdLock className="text-[#1a8d75] text-[18px]" />
                                              )}
                                            </div>
                                          )}

                                          <h1 className="text-[16px] text-black font-[600] leading-[22px]">
                                            {videoData?.title}
                                          </h1>
                                        </div>
                                      </div>
                                      <div className="flex flex-row items-center gap-1 min-w-[77px]">
                                        <img
                                          src={small_gary_stopwatch}
                                          alt=""
                                        />
                                        <h1 className="text-[14px] font-[400] text_black_gray leading-[10px]">
                                          {convertDuration(
                                            videoData?.unit_duration,
                                            videoData?.unit_duration_parameter
                                          )}
                                        </h1>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </React.Fragment>
                            );
                          })}
                        </details>
                      </section>
                    )
                  )}
                </div>
              </div>
            </div>
          </Wrapper >
        </div >
      )}
    </>
  );
};

export default CourseCurriculum;
