// import React, { useEffect, useState } from "react";
// import CourseCard from "../../components/homePage/CourseCard";
// import course_icon from "../../assets/svg/top-course.svg";
// import arrow_icon from "../../assets/svg/circle-arrow.svg";
// import arrow from "../../assets/svg/right-arrow.svg";
// import Wrapper from "../../components/sheared/Wrapper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";
// import { Link } from "react-router-dom";
// import { post } from "../../api/axious";

// const TopCourse = () => {
//   const BASE_URL = import.meta.env.VITE_BASE_URL;
//   const [allCourse, setAllCourse] = useState();

//   // ======> Get all course <=====//
//   useEffect(() => {
//     getAllCourse();
//   }, []);

//   const getAllCourse = async () => {
//     // setLoading(true);
//     console.log("calling data ======>");
//     try {
//       const response = await post(`/api/courses/all`);
//       // setLoading(false);
//       if (response?.success) {
//         setAllCourse(response.data);
//       }
//     } catch (error) {
//       // setLoading(false);
//       console.error("Error creating app:", error);
//     } finally {
//       // setLoading(false);
//     }
//   };

//   console.log(allCourse);

//   return (
//     <Wrapper className="my-20">
//       <div className="flex justify-between mb-4">
//         <div className="flex items-center gap-2">
//           <img alt="icon" src={course_icon} />
//           <h4 className="font-Baloo text-[#1D5276] text-xl sm:text-9xl leading-[28px] font-[600]">
//             জনপ্রিয় কোর্স গুলো
//           </h4>
//         </div>
//         <div className="flex gap-3 md:gap-5">
//           <button className="bg-[#ACB0B9] p-1 rounded-full flex justify-center items-center">
//             <img
//               alt="icon"
//               src={arrow_icon}
//               className="rotate-180 w-[24px] md:w-[32px]"
//             />
//           </button>
//           <button className="bg-primary_color p-1 rounded-full flex justify-center items-center">
//             <img alt="icon" src={arrow_icon} className="w-[24px] md:w-[32px]" />
//           </button>
//         </div>
//       </div>
//       <div className=" flex gap-4 overflow-hidden mb-10">
//         <Swiper
//           slidesPerView={"auto"}
//           spaceBetween={15}
//           className="mySwipe w-full"
//         >
//           {allCourse?.length > 0 &&
//             allCourse?.map((item) => (
//               <SwiperSlide className="max-w-[250px]">
//                 <CourseCard
//                   img={`${BASE_URL}${item?.thumbLinePicPath.path}`}
//                   title={
//                     item?.courseTitle.length > 24
//                       ? item?.courseTitle.slice(0, 24) + "..."
//                       : item?.courseTitle
//                   }
//                   mentor={item?.instructor[0]?.instructor?.fullName}
//                   review={item?.averageRating || 0}
//                   student="১৫০"
//                   price={item?.regularPrice}
//                   discountPrice={item?.sellPrice}
//                 />
//               </SwiperSlide>
//             ))}
//         </Swiper>
//       </div>

//       <div className="flex justify-center">
//         <Link to="/course">
//           <button
//             type="button"
//             className="font-Baloo text-white bg-secandary_color flex items-center justify-center py-[10px] px-5  gap-2 rounded-md"
//           >
//             সকল কোর্স <img alt="icon" src={arrow} />
//           </button>
//         </Link>
//       </div>
//     </Wrapper>
//   );
// };

// export default TopCourse;
import React, { useEffect, useState, useRef } from "react";
import CourseCard from "../../components/homePage/CourseCard";
import course_icon from "../../assets/svg/top-course.svg";
import arrow_icon from "../../assets/svg/circle-arrow.svg";
import arrow from "../../assets/svg/right-arrow.svg";
import Wrapper from "../../components/sheared/Wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link, useNavigate } from "react-router-dom";
import { post } from "../../api/axious";
import CourseSkeletonCard from "../../components/sheared/allSkeleton/CourseSkeletonCard";

const TopCourse = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [allCourse, setAllCourse] = useState([]);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    getAllCourse();
  }, []);

  const getAllCourse = async () => {
    try {
      const response = await post(`/api/courses/all`);
      if (response?.success) {
        setAllCourse(response.data);
      }
    } catch (error) {
      console.error("Error creating app:", error);
    }
  };

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
    }
  };

  return (
    <Wrapper className="my-20">
      <div className="flex justify-between mb-4">
        <div className="flex items-center gap-2">
          <img alt="icon" src={course_icon} />
          <h4 className="font-Baloo text-[#1D5276] text-xl sm:text-9xl leading-[28px] font-[600]">
            জনপ্রিয় কোর্স গুলো
          </h4>
        </div>
        <div className="flex gap-3 md:gap-5">
          <button
            className={`p-1 rounded-full flex justify-center items-center ${isBeginning ? "bg-[#ACB0B9]" : "bg-primary_color"
              }`}
            onClick={handlePrev}
          >
            <img
              alt="icon"
              src={arrow_icon}
              className="rotate-180 w-[24px] md:w-[32px]"
            />
          </button>
          <button
            className={`p-1 rounded-full flex justify-center items-center ${isEnd ? "bg-[#ACB0B9]" : "bg-primary_color"
              }`}
            onClick={handleNext}
          >
            <img alt="icon" src={arrow_icon} className="w-[24px] md:w-[32px]" />
          </button>
        </div>
      </div>
      {/* <div className="flex gap-4 overflow-hidden mb-10 bg-red-400"> */}
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={15}
          className="mySwipe w-full"
          onSlideChange={handleSlideChange}
          ref={swiperRef}
        >
          {allCourse?.length > 0 ? (
            allCourse?.map((item, index) => (
              <SwiperSlide key={index} className="max-w-[250px]">
                <CourseCard
                  id={item?.id}
                  img={`${BASE_URL}${item?.thumbLinePicPath.path}`}
                  title={
                    item?.courseTitle.length > 24
                      ? item?.courseTitle.slice(0, 24) + "..."
                      : item?.courseTitle
                  }
                  mentor={item?.instructor[0]?.instructor?.fullName}
                  review={item?.averageRating || 0}
                  student={item?.totalEnrolledStudents}
                  price={item?.regularPrice}
                  discountPrice={item?.sellPrice}
                />
              </SwiperSlide>
            ))
          ) : (
            <div className="my-4 flex flex-row gap-[15px]">
              {
                [1, 2, 3, 4, 5, 6].map((_, i) => (
                  <CourseSkeletonCard key={i} />
                ))
              }
            </div>
          )}
        </Swiper>
      {/* </div> */}

      <div className="flex justify-center mt-10">
        <Link to="/course">
          <button
            type="button"
            className="font-Baloo text-white bg-secandary_color flex items-center justify-center py-[10px] px-5 gap-2 rounded-md"
          >
            সকল কোর্স <img alt="icon" src={arrow} />
          </button>
        </Link>
      </div>
    </Wrapper>
  );
};

export default TopCourse;
