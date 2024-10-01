import React, { useEffect, useRef, useState } from "react";
import course_icon from "../../assets/svg/course_icon.svg";
import CourseBtn from "../../components/homePage/CourseBtn";
import CourseCard from "../../components/homePage/CourseCard";
import arrow_icon from "../../assets/svg/circle-arrow.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { get, post } from "../../api/axious";
import CourseSkeletonCard from "../../components/sheared/allSkeleton/CourseSkeletonCard";

const OurCourse = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);
  const [btn, setBtn] = useState("অনলাইন লাইভ ক্লাস");
  const [findCategoryData, setFindCategoryData] = useState([]);
  const [allCourse, setAllCourse] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [categoryCount, setCategoryCount] = useState({});

  useEffect(() => {
    getAllCourse();
    fetchCategory();
  }, []);
  useEffect(() => {
    if (allCourse.length > 0) {
      countCoursesByCategory();
    }
  }, [allCourse]);

  const getAllCourse = async () => {
    try {
      const response = await post(`/api/courses/all`);
      setAllCourse(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const fetchCategory = async () => {
    try {
      const response = await get("/api/course-category/all");
      setCategoryData(response?.data);
    } catch (error) {
      console.log("Error fetching categories:", error);
    }
  };

  const countCoursesByCategory = () => {
    const count = {};
    allCourse.forEach(course => {
      const categoryId = course.courseCategoryId;
      if (count[categoryId]) {
        count[categoryId]++;
      } else {
        count[categoryId] = 1;
      }
    });
    setCategoryCount(count);
  };


  useEffect(() => {
    const findSelectCategoryCourseData = allCourse?.filter(
      (item) => item?.courseCategory === btn
    );
    setFindCategoryData(findSelectCategoryCourseData);
  }, [btn, allCourse]);

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handleSlideChange = (swiper) => {
    if (swiper) {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
      console.log(swiper.isEnd);
      console.log(swiper);
    }
  };

  return (
    <section className=" pt-56 sm:pt-44 pb-24 bg-[#F5F5F5]">
      <div className="w-full max-w-[1280px] px-0 md:px-10 mx-auto">
        <div className="w-full bg-gradient-to-r from-[#00526C] via-[#00526C] to-[#005C46] rounded-[0px] sm:rounded-[30px]  flex flex-col justify-center gap-10 px-5 sm:px-10 overflow-hidden py-20">
          <div>
            <div className="flex justify-center gap-2 mb-2">
              <img alt="icon" src={course_icon} />
              <p className="font-Baloo text-white text-xl leading-[28px] font-[500]">
                কোর্স
              </p>
            </div>
            <p className="font-Baloo text-white text-9xl leading-[36px] font-[600] text-center">
              আমাদের কোর্স গুলো
            </p>
          </div>

          <div className="relative">
            <div className="px-[45px]">
              <Swiper
                slidesPerView={"auto"}
                spaceBetween={15}
                className="mySwipe w-full"
                onSlideChange={handleSlideChange}
                ref={swiperRef}
                navigation={{
                  prevEl: ".custom-prev",
                  nextEl: ".custom-next",
                }}
              >
                <div className="flex gap-4 overflow-hidden">
                  {categoryData?.map((item) => (
                    <SwiperSlide key={item?.id} className="max-w-fit">
                      <CourseBtn
                        name={item?.category}
                        totalCourseNumber={categoryCount[item?.id] || 0}
                        value={btn}
                        sateValue={setBtn}

                      />
                    </SwiperSlide>
                  ))}
                </div>
              </Swiper>
            </div>
            {categoryData?.length > 0 ? <button
              className={`custom-prev p-1 rounded-full flex justify-center items-center absolute top-[15px] left-0 z-10 ${isBeginning ? "bg-[#ACB0B9]" : "bg-primary_color"
                }`}
              onClick={handlePrev}
            >
              <img
                alt="icon"
                src={arrow_icon}
                className="rotate-180 w-[24px] md:w-[32px]"
              />
            </button> : ''}
            {categoryData?.length > 0 ? <button
              className={`custom-next p-1 rounded-full flex justify-center items-center absolute top-[15px] right-0 z-10 ${isEnd ? "bg-[#ACB0B9]" : "bg-primary_color"
                }`}
              onClick={handleNext}
            >
              <img
                alt="icon"
                src={arrow_icon}
                className="w-[24px] md:w-[32px]"
              />
            </button> : ''}
          </div>

          <Swiper
            slidesPerView={"auto"}
            spaceBetween={15}
            className="mySwipe w-full"
          >
            {findCategoryData?.length > 0 ? (
              findCategoryData?.map((allCourseData, i) => (
                <SwiperSlide key={i} className="max-w-[250px] ">
                  <CourseCard
                    id={allCourseData?.id}
                    img={`${BASE_URL}${allCourseData?.thumbLinePicPath.path}`}
                    title={allCourseData?.courseTitle}
                    mentor={allCourseData?.instructor[0].instructor?.fullName}
                    student={allCourseData?.totalEnrolledStudents}
                    price={allCourseData?.sellPrice}
                    discountPrice={allCourseData?.regularPrice}
                  />
                </SwiperSlide>
              ))
            ) : (
              <div className=" flex flex-row gap-[15px]">
                {
                  [1, 2, 3, 4, 5, 6].map((_, i) => (
                    <CourseSkeletonCard key={i} />
                  ))
                }
              </div>
            )}
          </Swiper>

          <div className="flex justify-center">
            <Link to="/course">
              <button
                type="button"
                className="font-Baloo flex items-center border border-white py-[5px] px-4 rounded-md text-white w-fit"
              >
                কোর্স সম্পর্কে জানুন
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCourse;
