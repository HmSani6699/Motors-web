import React, { useEffect, useState } from "react";
import Wrapper from "../../components/sheared/Wrapper";
import home from "../../assets/svg/home_icon.svg";
import arrow from "../../assets/svg/right_gray_icon.svg";
import searchIcon from "../../assets/svg/search.svg";
import { Filter } from "../../assets/icon/Filter";
import CheckBox from "../../components/checkbox/CheckBox";
import { YellowStar } from "../../assets/icon/YellowStar";
import MentorCard from "../../components/sheared/mentorCard/MentorCard";
import mentor_1 from "../../assets/images/mentor (1).png";
import mentor_2 from "../../assets/images/mentor (2).png";
import mentor_3 from "../../assets/images/mentor (3).png";
import mentor_4 from "../../assets/images/mentor (4).png";
import mentor_5 from "../../assets/images/mentor (5).png";
import { scrollToTop } from "../../api/helper";
import { get } from "../../api/axious";
import SuggLoading from "../../components/Common/SuggLoading";

const MentorsList = () => {
  const [loading, setLoading] = useState(false);
  scrollToTop();
  const [instructorData, setInstructorData] = useState();
  useEffect(() => {
    fetchInstructorData();
  }, []);

  const fetchInstructorData = async () => {
    setLoading(true);
    try {
      const response = await get("/api/auth/all_users?role=Instructor");
      console.log(response, "response");
      if (response?.data) {
        setInstructorData(response?.data);
        setLoading(false);
      }
    } catch (error) {
      console.log("Error creating app:", error);
      setLoading(false);
    }
  };

  console.log(instructorData);
  return (
    <>
      <div className="py-10 bg-[#F5F5F5]">
        <Wrapper>
          <div className="mb-5 flex items-center">
            <img src={home} alt="icon" className="mx-2 mb-1" />
            <p className="text-primary_color font-[500]">হোম</p>
            <img src={arrow} alt="icon" />
            <p className="text-primary_color font-[500]">আমাদের সম্পর্কে</p>
            <img src={arrow} alt="icon" />
            <p className="text-[#9096A2]">শিক্ষক সমূহ</p>
          </div>

          <div className="flex items-center flex-wrap justify-between  gap-5 bg-[#FFF] rounded-[10px] px-3 p-2.5 relative">
            <p className="text-primary_color text-[20px] font-[600] ">
              মেন্টর’স সমূহ
            </p>
            <div className="md:hidden block cursor-pointer">
              <div className="flex items-center gap-1 bg-[#D6E9F5] p-2.5 rounded-md">
                <img width={16} alt="icon" src={searchIcon} className="mb-1" />
                <p className="font-Baloo text-[#1D5276] text-sm font-[400] leading-[18px]">
                  ফিল্টার
                </p>
              </div>
            </div>
            <div className="flex gap-10">
              <div className="block lg:hidden cursor-pointer">
                <div className="hidden md:flex items-center gap-1 bg-[#D6E9F5] p-2.5 rounded-md">
                  <img
                    width={16}
                    alt="icon"
                    src={searchIcon}
                    className="mb-1"
                  />
                  <p className="font-Baloo text-[#1D5276] text-sm font-[400] leading-[18px]">
                    ফিল্টার
                  </p>
                </div>
              </div>
              <div className=" relative w-[291px] lg:w-[313px] bg-[#F1F2F3] py-2 px-3 rounded-[5px] text-sm sm:text-base mx-auto md:mx-0">
                <div className="">
                  <input
                    className="bg-[#F1F2F3] outline-none appearance-none"
                    placeholder="মেন্টর’স খুজুন"
                  />
                  <img
                    src={searchIcon}
                    alt="icon"
                    className="absolute top-1/2 right-2 transform -translate-y-1/2"
                  />
                </div>
              </div>
            </div>
          </div>

          {/*  */}

          <div className="flex gap-0 lg:gap-10 mt-12 ">
            <div>
              <div className="hidden lg:block w-[360px] overflow-hidden rounded-lg bg-white">
                <div className="flex items-center justify-between bg-[#5BA5D7] p-3 text-white text-[14px] font-[400] rounded-se-lg rounded-ss-lg">
                  <span className="flex gap-1">
                    <Filter />
                    ফিল্টার
                  </span>
                  <span>রিসেট</span>
                </div>
                <div className="p-3">
                  {/* mentor */}
                  <section className="w-full divide-y rounded mt-4">
                    <details
                      className="group border border-[#F1F2F3] rounded-md "
                      open
                    >
                      <summary className="relative cursor-pointer list-none pr-8 py-1 ps-1 transition-colors duration-300 focus-visible:outline-none [&::-webkit-details-marker]:hidden bg-[#F1F2F3] text_blue rounded-se-md rounded-ss-md ">
                        <span className="flex items-center text-[16px] font-[500]">
                          ইন্সট্রাক্টর ক্যাটাগরি
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="ms-2"
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                          >
                            <path
                              d="M14.5 14L10.5 10M11.8333 6.66667C11.8333 9.244 9.744 11.3333 7.16667 11.3333C4.58934 11.3333 2.5 9.244 2.5 6.66667C2.5 4.08934 4.58934 2 7.16667 2C9.744 2 11.8333 4.08934 11.8333 6.66667Z"
                              stroke="#ACB0B9"
                              stroke-width="1.3"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                        <span className="absolute right-1 w-4 h-4 transition duration-300 top-1 shrink-0 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20"
                            viewBox="0 -960 960 960"
                            className="absolute opacity-100 group-open:opacity-0"
                            width="20"
                          >
                            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute bottom-1 opacity-0 group-open:opacity-100"
                            height="20"
                            viewBox="0 -960 960 960"
                            width="21"
                          >
                            <path d="M240-120v-80h480v80H240Z" />
                          </svg>
                        </span>
                      </summary>

                      <div className="mt-1 p-3 text-[#5D636F] text-[14px] font-[400] ">
                        {/* 1 */}
                        <div className="relative flex flex-wrap items-center">
                          <CheckBox />
                          আইটি ভিডিও কোর্স
                        </div>
                        {/* 2 */}
                        <div className="relative flex flex-wrap items-center mt-4">
                          <CheckBox />
                          ভর্তি পরীক্ষা ভিডিও কোর্স
                        </div>
                        {/* 3 */}
                        <div className="relative flex flex-wrap items-center mt-4">
                          <CheckBox />
                          এইচএসসি ভিডিও কোর্স
                        </div>
                        {/* 4 */}
                        <div className="relative flex flex-wrap items-center mt-4">
                          <CheckBox />
                          অফলাইন কোর্স
                        </div>
                        {/* 5 */}
                        <div className="relative flex flex-wrap items-center mt-4">
                          <CheckBox />
                          বিসিএস পরীক্ষা
                        </div>
                        {/* 6 */}
                        <div className="relative flex flex-wrap items-center mt-4">
                          <CheckBox />
                          এসএসসি
                        </div>
                        {/* 7 */}
                        <div className="relative flex flex-wrap items-center mt-4">
                          <CheckBox />
                          ব্যবসা
                        </div>
                        {/* 8 */}
                        <div className="relative flex flex-wrap items-center mt-4">
                          <CheckBox />
                          আইইএলটিএস
                        </div>
                        {/* 9 */}
                        <div className="relative flex flex-wrap items-center mt-4">
                          <CheckBox />
                          কম্পিউটার ও তথ্য প্রযুক্তি
                        </div>
                        {/* 10 */}
                        <div className="relative flex flex-wrap items-center mt-4">
                          <CheckBox />
                          অনলাইন লাইভ ক্লাস
                        </div>
                      </div>
                    </details>
                  </section>
                  {/* review */}
                  <section className="w-full divide-y rounded mt-4">
                    <details
                      className="group border border-[#F1F2F3] rounded-md "
                      open
                    >
                      <summary className="relative cursor-pointer list-none pr-8 py-1 ps-1 transition-colors duration-300 focus-visible:outline-none [&::-webkit-details-marker]:hidden bg-[#F1F2F3] text_blue rounded-se-lg rounded-ss-lg ">
                        <span className="text-[#2E3138] text-[16px] font-[500]">
                          কোর্স রিভিউ
                        </span>
                        <span className="absolute right-1 w-4 h-4 transition duration-300 top-1 shrink-0 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20"
                            viewBox="0 -960 960 960"
                            className="absolute opacity-100 group-open:opacity-0"
                            width="20"
                          >
                            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute bottom-1 opacity-0 group-open:opacity-100"
                            height="20"
                            viewBox="0 -960 960 960"
                            width="21"
                          >
                            <path d="M240-120v-80h480v80H240Z" />
                          </svg>
                        </span>
                      </summary>

                      <div className="mt-1 p-3 text-[#5D636F] text-[14px] font-[400]">
                        {/* 33 */}
                        <div className="relative flex flex-wrap items-center">
                          <CheckBox />
                          ৫.০
                          <YellowStar />
                        </div>
                        {/* 34 */}
                        <div className="relative flex flex-wrap items-center mt-4">
                          <CheckBox />
                          ৪.৫
                          <YellowStar />
                        </div>
                        {/* 35 */}
                        <div className="relative flex flex-wrap items-center mt-4">
                          <CheckBox />
                          ৩.৫
                          <YellowStar />
                        </div>
                        {/* 36 */}
                        <div className="relative flex flex-wrap items-center mt-4">
                          <CheckBox />
                          ৩.০
                          <YellowStar />
                        </div>
                        {/* 37 */}
                        <div className="relative flex flex-wrap items-center mt-4">
                          <CheckBox />
                          ২.০
                          <YellowStar />
                        </div>
                        {/* 38 */}
                        <div className="relative flex flex-wrap items-center mt-4">
                          <CheckBox />
                          ০.০
                          <YellowStar />
                        </div>
                      </div>
                    </details>
                  </section>
                  {/* free time */}
                  <section className="w-full divide-y rounded mt-4">
                    <details
                      className="group border border-[#F1F2F3] rounded-md "
                      open
                    >
                      <summary className="relative cursor-pointer list-none pr-8 py-1 ps-1 transition-colors duration-300 focus-visible:outline-none [&::-webkit-details-marker]:hidden bg-[#F1F2F3] text_blue rounded-se-md rounded-ss-md ">
                        <span className="flex items-center text-[16px] font-[500] text-[#2E3138]">
                          ফ্রি টাইম
                        </span>
                        <span className="absolute right-1 w-4 h-4 transition duration-300 top-1 shrink-0 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20"
                            viewBox="0 -960 960 960"
                            className="absolute opacity-100 group-open:opacity-0"
                            width="20"
                          >
                            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute bottom-1 opacity-0 group-open:opacity-100"
                            height="20"
                            viewBox="0 -960 960 960"
                            width="21"
                          >
                            <path d="M240-120v-80h480v80H240Z" />
                          </svg>
                        </span>
                      </summary>

                      <div className="mt-1 p-3 text-[#5D636F] text-[14px] font-[400]">
                        {/* 14 */}
                        <div className="relative flex flex-wrap items-center">
                          <CheckBox />
                          সকাল ১০-১২ টা
                        </div>
                        {/* 15 */}
                        <div className="relative flex flex-wrap items-center mt-4">
                          <CheckBox />
                          দুপুর ২-৪ টা
                        </div>
                        {/* 16 */}
                        <div className="relative flex flex-wrap items-center mt-4">
                          <CheckBox />
                          দুপুর ৪-৬ টা
                        </div>
                        {/* 17 */}
                        <div className="relative flex flex-wrap items-center mt-4">
                          <CheckBox />
                          রাত ৮-১০ টা
                        </div>
                        {/* 18 */}
                        <div className="relative flex flex-wrap items-center mt-4">
                          <CheckBox />
                          রাত ৮.৩০-১০.৩০ টা
                        </div>
                        {/* 19 */}
                        <div className="relative flex flex-wrap items-center mt-4">
                          <CheckBox />
                          রাত ৮.৩০-১০.৩০ টা
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </div>
            </div>
            {/* right side */}

            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
              {!loading &&
                instructorData?.length > 0 &&
                instructorData?.map((instructor, i) => (
                  <MentorCard key={i} data={instructor} />
                ))}
            </div>
            {loading && (
              <div className="flex justify-center w-full items-center h-full">
                <SuggLoading />
              </div>
            )}
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default MentorsList;
