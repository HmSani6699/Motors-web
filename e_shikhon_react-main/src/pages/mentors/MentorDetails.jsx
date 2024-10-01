import React, { useEffect, useState } from "react";
import Wrapper from "../../components/sheared/Wrapper";
import home from "../../assets/svg/home_icon.svg";
import arrow from "../../assets/svg/right_gray_icon.svg";
import star_yellow from "../../assets/svg/star_yellow.svg";
import mentor_bg from "../../assets/images/mentor_Details_banner.png";
import layer_white from "../../assets/svg/layer_white.svg";
import users_two_white from "../../assets/svg/users_two_white.svg";
import plus_green from "../../assets/svg/plus_green.svg";
import second_mentor_bg from "../../assets/images/second_banner_mentor_details.png";
import upWork_logo from "../../assets/images/upWork_logo.png";
import certificate_icon from "../../assets/svg/certificate_icon.svg";
// import mentor_icon from "../../assets/images/mentor-icon.png";
import mentor_icon from "../../assets/images/emty-man.png";
import crosse_icon from "../../assets/svg/crooses_icon.svg";
import red_earth from "../../assets/svg/red_earth.svg";
import file_with_badge from "../../assets/svg/file_with_badge.svg";
import CourseCardTow from "../../components/sheared/courseCard/CourseCardTow";
import course_img_1 from "../../assets/images/up_comming_course (1).png";
import course_img_2 from "../../assets/images/up_comming_course (2).png";
import course_img_3 from "../../assets/images/up_comming_course (3).png";
import course_img_4 from "../../assets/images/up_comming_course (4).png";
import { scrollToTop } from "../../api/helper";
import { useLocation, useParams } from "react-router-dom";
import MentorReview from "./MentorReview";
import MentorEducation from "./MentorEducation";
import MentorAchievement from "./MentorAchievement";
import MentorExperience from "./MentorExperience";
import { get, post } from "../../api/axious";
import MentorOther from "./MentorOther";
import SuggLoading from "../../components/Common/SuggLoading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const MentorDetails = () => {
  scrollToTop();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [isTabOpen, setIsTabOpen] = useState("এচিভমেন্ট");
  const [courseType, setCourseType] = useState("");
  const [allCourse, setAllCourse] = useState([]);
  const [mentorData, setMentorData] = useState();

  // ====== > get  instructor info  <=======//
  useEffect(() => {
    if (id) {
      handleGetMentorData(id);
    }
  }, [id]);
  const handleGetMentorData = async (id) => {
    setLoading(true);
    try {
      const res = await get(`api/auth/get_instructor/${id}`);
      console.log(res);
      if (res?.success) {
        setMentorData(res?.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // ====== > get course all by instructor  <=======//
  useEffect(() => {
    if (mentorData?.id) {
      handleGetAllCourse(mentorData?.id);
    }
  }, [mentorData?.id, courseType]);

  const handleGetAllCourse = async (id) => {
    const payload = {
      instructor_id: id.toString(),
    };

    let url;

    if (courseType) {
      url = `api/courses/course_for_instructor?courseType=${courseType}`;
    } else {
      url = `api/courses/course_for_instructor`;
    }

    setLoading(true);
    try {
      const res = await post(url, payload);
      console.log(res);
      if (res?.success) {
        setAllCourse(res?.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <SuggLoading />
        </div>
      ) : (
        <>
          <div className="py-8 bg-[#F5F5F5]">
            <Wrapper>
              <div className=" flex items-center">
                <img src={home} alt="icon" className="mx-2 mb-1" />
                <p className="text-primary_color font-[500]">হোম</p>
                <img src={arrow} alt="icon" />
                <p className="text-primary_color font-[500]">আমাদের সম্পর্কে</p>
                <img src={arrow} alt="icon" />
                <p className="text-[#9096A2]">শিক্ষক বিস্তারিত</p>
              </div>
            </Wrapper>
          </div>
          <div className="mentorDetailsBG">
            <Wrapper>
              <div className="">
                <div>
                  <div className="w-full  flex flex-col sm:flex-row justify-between items-center mt-5">
                    <div className="flex flex-col gap-0 md:gap-5 text-center md:text-start mt-8 md:mt-0">
                      <div>
                        <h1 className="text-[#FFFFFF] text-[20px] md:text-[36px] lg:text-[40px] font-[600] lg:font-[700] leading-[28px] md:leading-[48px]">
                          {mentorData?.fullName}
                        </h1>

                        <div className="justify-center md:justify-start flex items-center gap-2">
                          <img src={star_yellow} alt="" />
                          <h1 className="text-[#FFFFFF] text-[16px] md:text-[20px] lg:text-[28px] font-[500] leading-[30px]">
                            {/* 4.8 (250 Reviews) */}
                            {mentorData?.averageRating || 0}
                          </h1>
                        </div>
                      </div>
                      <div className=" flex flex-wrap gap-4">
                        {/* <span className="flex flex-col md:flex-row items-center flex-wrap gap-1">
                      <h1 className="text-[#FFFFFF] text-[16px] md:text-[18px] lg:text-[20px] font-[500] leading-[28px]">
                        ওয়েব ডিজাইনার;{" "}
                      </h1>
                      <h1 className="text-[#FFFFFF] text-[16px] md:text-[18px] lg:text-[20px] font-[500] leading-[28px]">
                        {" "}
                        Full Stack Web Developer
                      </h1>
                    </span>
                    <h1 className="text-[#FFFFFF] text-[16px] md:text-[18px] lg:text-[20px] font-[600] leading-[28px]">
                      ইশিখন.কম
                    </h1> */}

                        {mentorData?.experience?.length > 0 &&
                          mentorData?.experience?.map((item, i) => (
                            <h1 className="text-[#FFFFFF] text-[16px] md:text-[18px] lg:text-[20px] font-[600] leading-[28px]">
                              {item?.jobTitle},
                            </h1>
                          ))}
                      </div>
                      <div className="flex items-center gap-10">
                        <div className="flex items-center gap-2">
                          <img src={layer_white} alt="" />
                          <h1 className="text-[#FFFFFF] text-[16px] md:text-[18px] lg:text-[20px] font-[500] leading-[28px]">
                            ১৪ টা ব্যাচ
                          </h1>
                        </div>
                        <div className="flex items-center gap-2">
                          <img src={users_two_white} alt="" />
                          <h1 className="text-[#FFFFFF] text-[16px] md:text-[18px] lg:text-[20px] font-[500] leading-[28px]">
                            2k students
                          </h1>
                        </div>
                      </div>
                      <div className="flex justify-center md:justify-start">
                        <button
                          type="button"
                          className=" font-Baloo text-[#0F929B] bg-[#FFF] flex items-center justify-center py-[10px] px-5  gap-2 rounded-[50px]"
                        >
                          <img alt="icon" src={plus_green} />
                          Follow
                        </button>
                      </div>
                    </div>
                    {/* <img
                  className="w-[381px] md:w-[450px] lg:w-[541px]"
                  src={mentor_bg}
                  alt=""
                /> */}

                    {mentorData?.pro_pic?.path ? (
                      <img
                        className="w-[381px] md:w-[450px] lg:w-[541px]"
                        src={`${BASE_URL}${mentorData?.pro_pic?.path}`}
                        alt=""
                      />
                    ) : (
                      <img
                        className="w-[381px] md:w-[450px] lg:w-[400px]"
                        alt="icon"
                        src={mentor_icon}
                        layout="fill"
                        objectFit="scale-down"
                      />
                    )}
                  </div>
                </div>
              </div>
            </Wrapper>
          </div>
          <div className="py-5 lg:py-20 bg-[#F5F5F5]">
            <Wrapper>
              <div className="overflow-hidden bg-inherit lg:bg-[#FFF] rounded-[20px]">
                <div className="p-3 flex items-center gap-8">
                  {mentorData?.pro_pic?.path ? (
                    <img
                      className="w-[70px] md:w-[150px] lg:w-[300px]"
                      src={`${BASE_URL}${mentorData?.pro_pic?.path}`}
                      alt=""
                    />
                  ) : (
                    <img
                      className="w-[381px] md:w-[450px] lg:w-[250px]"
                      alt="icon"
                      src="https://img.freepik.com/premium-vector/young-man-avatar-character_24877-9475.jpg?w=740"
                      layout="fill"
                      objectFit="scale-down"
                    />
                  )}
                  <div className="flex flex-col gap-3">
                    <h1 className="text-[#2E3138] text-[24px] md:text-[36px] lg:text-[32px] font-[600] leading-[40px]">
                      {mentorData?.fullName}
                    </h1>
                    <div className="flex flex-wrap gap-3">
                      {mentorData?.skill?.length > 0 &&
                        mentorData?.skill?.map((item, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-[#FFF] lg:bg-[#F1F2F3] rounded-[5px]"
                          >
                            {item?.skill}
                          </span>
                        ))}
                    </div>
                    <p className="text-[#464A53] text-[14px] md:text-[16px] lg:text-[16px] font-[400] leading-[24px]">
                      {mentorData?.about?.description ? (
                        <>{mentorData?.about?.description?.slice(0, 500)}...</>
                      ) : (
                        "No data found"
                      )}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="py-5 lg:py-20">
                  <div className=" bg-[#E3E5E8] rounded-[5px] flex gap-2">
                    <button
                      onClick={() => setIsTabOpen("এচিভমেন্ট")}
                      className={`px-2 md:px-8 py-2 md:py-5 ${
                        isTabOpen === "এচিভমেন্ট" &&
                        "bg-[#FFF] border-t-2 border-[#20AC90]"
                      }`}
                    >
                      <h1>এচিভমেন্ট</h1>
                    </button>
                    <button
                      onClick={() => setIsTabOpen("অভিজ্ঞতা")}
                      className={`px-2 md:px-8 py-2 md:py-5 ${
                        isTabOpen === "অভিজ্ঞতা" &&
                        "bg-[#FFF] border-t-2 border-[#20AC90]"
                      }`}
                    >
                      <h1>অভিজ্ঞতা</h1>
                    </button>
                    <button
                      onClick={() => setIsTabOpen("শিক্ষাগত যোগ্যতা")}
                      className={`px-2 md:px-8 py-2 md:py-5 ${
                        isTabOpen === "শিক্ষাগত যোগ্যতা" &&
                        "bg-[#FFF] border-t-2 border-[#20AC90]"
                      }`}
                    >
                      <h1>শিক্ষাগত যোগ্যতা</h1>
                    </button>
                    <button
                      onClick={() => setIsTabOpen("রিভিউ")}
                      className={`px-2 md:px-8 py-2 md:py-5 ${
                        isTabOpen === "রিভিউ" &&
                        "bg-[#FFF] border-t-2 border-[#20AC90]"
                      }`}
                    >
                      <h1>রিভিউ</h1>
                    </button>
                    <button
                      onClick={() => setIsTabOpen("অন্যান্য")}
                      className={`px-2 md:px-8 py-2 md:py-5 ${
                        isTabOpen === "অন্যান্য" &&
                        "bg-[#FFF] border-t-2 border-[#20AC90]"
                      }`}
                    >
                      <h1>অন্যান্য</h1>
                    </button>
                  </div>

                  {/* Tab Contant  */}
                  {isTabOpen === "এচিভমেন্ট" ? (
                    <MentorAchievement />
                  ) : isTabOpen === "অভিজ্ঞতা" ? (
                    <MentorExperience data={mentorData?.experience} />
                  ) : isTabOpen === "শিক্ষাগত যোগ্যতা" ? (
                    <MentorEducation data={mentorData?.edu} />
                  ) : isTabOpen === "রিভিউ" ? (
                    <MentorReview
                      mantorID={mentorData?.id}
                      reviewes={mentorData?.review}
                      handleGetMentorData={handleGetMentorData}
                    />
                  ) : isTabOpen === "অন্যান্য" ? (
                    <MentorOther />
                  ) : null}
                </div>
              </div>
            </Wrapper>
          </div>
          <div className="py-5 lg:py-20 bg-[#FFF]">
            <Wrapper>
              <div className="flex flex-wrap items-center justify-between">
                <div className="flex  items-center gap-2.5 mb-2.5 ">
                  <img alt="icon" src={file_with_badge} />
                  <p className="text-[#1D5276] text-xl sm:text-5xl font-[600] leading-[28px] sm:leading-[36px]">
                    {mentorData?.fullName}
                  </p>
                </div>
                <div className="flex items-center gap-7">
                  <div>
                    <button
                      onClick={() => setCourseType("অনলাইন")}
                      className={`px-3 py-2  rounded-[5px]  text-[14px] md:text-[18px] lg:text-[20px] font-[500] md:font-[600] ${
                        courseType === "অনলাইন"
                          ? "bg-[#20AC90] text-[#FFF]"
                          : "bg-[#F5F5F5] text-[#464A53]"
                      }`}
                    >
                      অনলাইন কোর্স
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => setCourseType("ভিডিও কোর্স")}
                      className={`px-3 py-2  rounded-[5px] text-[14px] md:text-[18px] lg:text-[20px] font-[500] md:font-[600] ${
                        courseType === "ভিডিও কোর্স"
                          ? "bg-[#20AC90] text-[#FFF]"
                          : "bg-[#F5F5F5] text-[#464A53]"
                      }`}
                    >
                      ভিডিও কোর্স
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => setCourseType("আপকামিং ব্যাচ")}
                      className={`px-3 py-2  rounded-[5px] text-[14px] md:text-[18px] lg:text-[20px] font-[500] md:font-[600] ${
                        courseType === "আপকামিং ব্যাচ"
                          ? "bg-[#20AC90] text-[#FFF]"
                          : "bg-[#F5F5F5] text-[#464A53]"
                      }`}
                    >
                      আপকামিং ব্যাচ
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-14">
                {!loading && (
                  <div>
                    {allCourse?.length > 0 ? (
                      <>
                        <Swiper
                          slidesPerView="auto"
                          spaceBetween={15}
                          className="mySwiper w-full"
                        >
                          {allCourse?.map((item, i) => (
                            <SwiperSlide key={i} className="!max-w-[280px]">
                              <CourseCardTow
                                id={item?.id}
                                img={`${BASE_URL}${item?.thumbLinePicPath?.path}`}
                                title={`${item?.courseTitle?.slice(0, 25)}...`}
                                instructor={mentorData.fullName}
                                rating={item?.averageRating}
                                price={item?.regularPrice}
                                discountPrice={item?.sellPrice}
                                enrolled={item?.totalEnrolledStudents}
                              />
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </>
                    ) : (
                      <div className="flex items-center justify-center w-full mt-10">
                        <h2 className="text-[20px] font-semibold">
                          No Data Found !
                        </h2>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </Wrapper>
          </div>
        </>
      )}
    </div>
  );
};

export default MentorDetails;
