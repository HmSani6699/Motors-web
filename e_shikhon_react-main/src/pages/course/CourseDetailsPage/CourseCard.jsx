import React, { useContext } from "react";
import ReactPlayer from "react-player";
import mentor_icon from "../../../assets/images/mentor-icon.png";
import user_group_icon from "../../../assets/svg/user-group_blue.svg";
import clock_tick_icon from "../../../assets/svg/clock_tick_blue.svg";
import live_small_blue_icon from "../../../assets/svg/live_small_blue.svg";
import badge_icon from "../../../assets/svg/circle_badge_green.svg";
import units_icon from "../../../assets/svg/units_blue.svg";
import certificate_icon from "../../../assets/svg/certificate_icon_blue.svg";
import shit_icon from "../../../assets/svg/shit_icon_blue.svg";
import SupportInstructor from "../../../components/SupportInstructor";
import Loading from "../../../components/sheared/Loading";
import LeadInstructor from "../../../components/LeadInstructor";
import { AuthContext } from "../../../layout/MainLayout";
import { useLocation, useNavigate } from "react-router-dom";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const CourseCard = ({
  id,
  courseData,
  loading,
  handleCourseEnroll,
  setShowModal,
}) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  console.log("courseData ===========>", courseData);

  return (
    <div className=" w-full lg:max-w-[386px] flex flex-col gap-7">
      <div className="hidden lg:block">
        <div className="relative">
          {courseData?.data?.videoLink ? (
            <ReactPlayer
              // playing={true}
              width="386px"
              height="256px"
              className="rounded-t-lg"
              url={courseData?.data?.videoLink}
            />
          ) : (
            <img
              className="w-full brightness-50 rounded-t-[10px]"
              src={`${BASE_URL}${courseData?.data?.thumbLinePicPath.path}`}
              alt=""
            />
          )}
        </div>
        <div className="p-5 bg-white border border-s border-b border-e rounded-b-[10px] border_gray">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-1">
              <h1 className="text_black_tow text-[16px] md:text-[20px] font-[500] leading-[28px] md:leading-[32px] lg:leading-[28px] ">
                ৳<strike>{courseData?.data?.regularPrice}</strike>
              </h1>
              <h1 className="text_green text-[18px] md:text-[24px] lg:text-[20px] font-[600] lg:font-[500] leading-[28px] md:leading-[32px] lg:leading-[28px] ">
                ৳{courseData?.data?.sellPrice}
              </h1>
            </div>

            {/* <Link to="/cart"> */}
            <div className="w-full">
              {!user ? (
                <button
                  onClick={() => { navigate("/login", { state: { from: location } }); }}
                  className="w-full py-2.5 px-5 bg_green rounded-[8px] text-white text-[14px] font-[500] leading-[21px] justify-center gap-3"
                >
                  Take This Course
                </button>
              ) : courseData?.data?.enrolled?.[0]?.user_id === user?.id ? (
                courseData?.data?.courseType === "ভিডিও কোর্স" ? (
                  <button
                    onClick={() => navigate(`/courseCurriculum/${id}`)}
                    className="w-full py-2.5 px-5 bg_green rounded-[8px] text-white text-[14px] font-[500] leading-[21px] justify-center gap-3"
                  >
                    Start Video
                  </button>
                ) : (
                  <button
                    onClick={() => setShowModal(true)}
                    className="w-full py-2.5 px-5 bg_green rounded-[8px] text-white text-[14px] font-[500] leading-[21px] justify-center gap-3"
                  >
                    জয়েন লাইভ ক্লাস
                  </button>
                )
              ) : courseData?.data?.courseType === "ভিডিও কোর্স" ? (
                <button
                  onClick={() =>
                    handleCourseEnroll(
                      courseData?.data?.courseTitle,
                      courseData?.data?.sellPrice,
                      courseData?.data?.thumbLinePicPath.path,
                      courseData?.data?.courseType,
                      courseData?.data?.courseCategory
                    )
                  }
                  className="w-full py-2.5 px-5 bg_green rounded-[8px] text-white text-[14px] font-[500] leading-[21px] justify-center gap-3"
                >
                  {loading ? <Loading /> : "Take This Course"}
                </button>
              ) : (
                <button
                  onClick={() => setShowModal(true)}
                  className="w-full py-2.5 px-5 bg_green rounded-[8px] text-white text-[14px] font-[500] leading-[21px] justify-center gap-3"
                >
                  Take This Course
                </button>
              )}
            </div>
            {/* </Link> */}
          </div>
          <div className="grid grid-cols-2 pt-2.5">
            {/* <div className="flex flex-row gap-2">
              <img src={user_group_icon} alt="" />
              <h1 className="text_black text-[14px]  font-[400]  leading-[21px]  ">
                কোর্সটি করছেন {courseData?.data?.dummy_participants} জন
              </h1>
            </div> */}
            {/* {courseData?.data?.courseDuration > 999 && (
              <div className="flex flex-row gap-2">
                <img src={clock_tick_icon} alt="" />
                <h1 className="text_black text-[14px]  font-[400]  leading-[21px]  ">
                  আনলিমিটেড এক্সেস
                </h1>
              </div>
            )} */}
            <div className="flex flex-row gap-2">
              <img src={live_small_blue_icon} alt="" />
              <h1 className="text_black text-[14px]  font-[400]  leading-[21px]  ">
                {courseData?.data?.courseType} কোর্স
              </h1>
            </div>
            {courseData?.data?.badge == "true" && (
              <div className="flex flex-row gap-2">
                <img src={badge_icon} alt="" />
                <h1 className="text_black text-[14px]  font-[400]  leading-[21px] ">
                  কোর্স ব্যাজ
                </h1>
              </div>
            )}
            <div className="flex flex-row gap-2">
              <img src={units_icon} alt="" />
              <h1 className="text_black text-[14px]  font-[400]  leading-[21px]  ">
                নাম্বার অফ ইউনিটস
              </h1>
            </div>

            <div className="flex flex-row gap-2">
              <img src={user_group_icon} alt="" />
              <h1 className="text_black text-[14px]  font-[400]  leading-[21px]">
                ১০ টি লাইভ প্রজেক্ট
              </h1>
            </div>
            {/* <div className="flex flex-row gap-2">
              <img src={clock_tick_icon} alt="" />
              <h1 className="text_black text-[14px]  font-[400]  leading-[21px]  ">
                ক্লাস রেকডিং
              </h1>
            </div> */}

            {courseData?.data?.support == "true" && (
              <div className="flex flex-row gap-2">
                <img src={live_small_blue_icon} alt="" />
                <h1 className="text_black text-[14px]  font-[400]  leading-[21px]  ">
                  লাইভ সার্পোট
                </h1>
              </div>
            )}

            {courseData?.data?.completionCertificate == "true" && (
              <div className="flex flex-row gap-2">
                <img src={certificate_icon} alt="" />
                <h1 className="text_black text-[14px]  font-[400]  leading-[21px] ">
                  কোর্স সার্টিফিকেট
                </h1>
              </div>
            )}

            <div className="flex flex-row gap-2">
              <img src={shit_icon} alt="" />
              <h1 className="text_black text-[14px]  font-[400]  leading-[21px]  ">
                {courseData?.data?.maximumStudents} সিট সংখ্যা
              </h1>
            </div>
          </div>
        </div>

        <div className="py-2.5">
          <div className="flex flex-row justify-between">
            <h2 className="text-[#9096A2] text-[14px] font-[400] leading-[21px]">
              কোর্সটি সম্পর্কে বিস্তারিত জানতে
            </h2>
            <h2 className="text_green text-[14px] font-[500] leading-[21px]">
              কল করুন <a href="tel:+8801948858258">01948858258</a>
            </h2>
          </div>
        </div>
      </div>
      {/* কোর্স ইন্সট্রাক্টর */}
      <div className="hidden lg:block">
        <div className=" flex flex-row gap-2 border-b border-[#E3E5E8] bg-white p-2.5 rounded-t-[10px]">
          <div className="">
            <img className="w-6" src={mentor_icon} alt="" />
          </div>
          <h1 className="text_black text-[20px] lg:text-[24px] font-[600] leading-[28px] lg:leading-[32px] ">
            কোর্স ইন্সট্রাক্টর
          </h1>
        </div>
        <div className="bg-white p-2.5 rounded-b-[10px]">
          {courseData?.data?.instructor.map((inst, i) => {
            if (inst?.teacherCategory === "Lead instructor") {
              return <LeadInstructor inst={inst} key={i} />;
            } else {
              return <SupportInstructor inst={inst} key={i} />;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
