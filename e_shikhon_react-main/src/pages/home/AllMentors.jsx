import React, { useEffect, useState } from "react";
import Wrapper from "../../components/sheared/Wrapper";
import mentor_icon from "../../assets/images/mentor-icon.png";
import mentor_1 from "../../assets/images/mentor (1).png";
import mentor_2 from "../../assets/images/mentor (2).png";
import mentor_3 from "../../assets/images/mentor (3).png";
import mentor_4 from "../../assets/images/mentor (4).png";
import mentor_5 from "../../assets/images/mentor (5).png";
import arrow from "../../assets/svg/pointi-right-arrow.svg";
import MentorCard from "../../components/homePage/MentorCard";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { get } from "../../api/axious";

const AllMentors = () => {
  const [instructorData, setInstructorData] = useState();
  const [filterInstructor, setFilterInstructor] = useState("averageRating");
  useEffect(() => {
    fetchInstructorData();
  }, [filterInstructor]);

  const fetchInstructorData = async () => {
    try {
      const response = await get(`/api/auth/get_all_instructor_for_home_page?sortBy=${filterInstructor}`);
      console.log(response, "response");
      if (response?.data) {
        setInstructorData(response?.data);
      }
    } catch (error) {
      console.log("Error creating app:", error);
    }
  };

  return (
    <div className="py-10 bg-[#F3EFEB]">
      <Wrapper className="my-10">
        <div>
          <div className="flex items-center justify-center gap-2">
            <img
              width={30}
              height={30}
              alt="icon"
              src={mentor_icon}
              className="mb-2 rounded-[15px]"
            />
            <h4 className="font-Baloo text-[#1D5276]  text-xl sm:text-9xl leading-[28px] font-[600]">
              আমাদের মেন্টর সমূহ
            </h4>
          </div>
          <p className="font-Baloo mt-4 text-sm leading-[18px] font-[500] text-[#5D636F] text-center ">
            ইশিখন-কে নেতৃত্ব দিচ্ছে প্রতিভাবান এবং দক্ষ একটি ডাইন্যামিক টিম।
            সবার জন্য মানসম্মত শিক্ষা সহজলভ্য করার লক্ষ্যে ইশিখনের সাথে <br />{" "}
            আছেন বিভিন্ন দেশি ও বহুজাতিক প্রতিষ্ঠানে কাজের অভিজ্ঞতাসম্পন্ন
            অসংখ্য স্বপ্নবাজ তরুণ।
          </p>
          <div className="flex justify-start sm:justify-center gap-5 mt-12 border-b border-white w-full overflow-scroll md:overflow-hidden">
            <div onClick={() => setFilterInstructor('averageRating')} className={`flex items-center justify-center gap-2 border-b  min-w-fit cursor-pointer ${filterInstructor === 'averageRating' ? 'border-secandary_color text-secandary_color' : 'text-[#1D5276]'}`}>
              <img
                width={30}
                height={30}
                alt="icon"
                src={mentor_icon}
                className="mb-2 rounded-[15px]"
              />
              <p className="font-Baloo text-xl leading-[28px] font-[600]">
                টপরেটেড ইন্সট্রাক্টর
              </p>
            </div>
            <div onClick={() => setFilterInstructor('Popular')} className={`flex items-center justify-center gap-2 border-b  min-w-fit cursor-pointer ${filterInstructor === 'Popular' ? 'border-secandary_color text-secandary_color' : 'text-[#1D5276]'}`}>
              <img
                width={30}
                height={30}
                alt="icon"
                src={mentor_icon}
                className="mb-2 rounded-[15px]"
              />
              <p className="font-Baloo text-xl leading-[28px] font-[600]">
                পপুলার ইন্সট্রাক্টর
              </p>
            </div>
            <div onClick={() => setFilterInstructor('createdAt')} className={`flex items-center justify-center gap-2 border-b  min-w-fit cursor-pointer ${filterInstructor === 'createdAt' ? 'border-secandary_color text-secandary_color' : 'text-[#1D5276]'}`}>
              <img
                width={30}
                height={30}
                alt="icon"
                src={mentor_icon}
                className="mb-2 rounded-[15px]"
              />
              <p className="font-Baloo text-xl leading-[28px] font-[600]">
                নতুন ইন্সট্রাক্টর
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-b from-[#D0FFE9] to-[#ADEAFF] mt-10 p-10 overflow-hidden mentor_box rounded-[0px] sm:rounded-[30px] border-[5px] border-white drop-shadow-md shadow-2xl">
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={15}
              className="mySwipe w-full"
            >
              <div className="flex gap-5 overflow-hidden">
                {instructorData?.map((allMentorData, i) => (
                  <SwiperSlide key={i} className="max-w-[250px]">
                    <MentorCard img={mentor_1} allMentorData={allMentorData} />
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>

            <div className="flex items-center justify-center gap-4 my-8 ">
              <Link to="/mentorsList">
                <button
                  type="button"
                  className="font-Baloo text-white bg-secandary_color flex items-center justify-center py-[10px] px-5  gap-2 rounded-md"
                >
                  See all instructor <img alt="icon" src={arrow} />
                </button>
              </Link>
              <Link to="/form">
                <button
                  type="button"
                  className="bg-white font-Baloo flex items-center border border-[#1E567B] py-[8px] px-4 rounded-md text-[#1E567B] w-fit"
                >
                  Become a instructor
                </button>
              </Link>
            </div>
          </div>

          {/* <div className="mt-10  overflow-hidden block sm:hidden">
            <div className="flex gap-5 overflow-hidden">
              <MentorCard img={mentor_1} />
              <MentorCard img={mentor_2} />
              <MentorCard img={mentor_3} />
              <MentorCard img={mentor_4} />
              <MentorCard img={mentor_5} />
            </div>

            <div className="flex justify-center gap-4 my-8 ">
              <Link to='/mentorsList' >
                <button
                  type="button"
                  className="font-Baloo text-white bg-secandary_color flex items-center justify-center py-[10px] px-5  gap-2 rounded-md"
                >
                  See all instructor <img alt="icon" src={arrow} />
                </button>
              </Link>
              <button
                type="button"
                className="bg-white font-Baloo flex items-center border border-[#1E567B] py-[5px] px-4 rounded-md text-[#1E567B] w-fit"
              >
                Become a instructor
              </button>
            </div>
          </div> */}
        </div>
      </Wrapper>
    </div>
  );
};

export default AllMentors;
