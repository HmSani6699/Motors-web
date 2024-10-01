import React, { useState } from 'react';
import avatar from "../../assets/images/Avatar.png";
import comment from "../../assets/svg/comment.svg";
import comment_down from "../../assets/svg/down_comment.svg";
import quest from "../../assets/svg/qutetion.svg";
import border_star from "../../assets/svg/star-border.svg";
import star from "../../assets/svg/big-start.svg";
import play from "../../assets/svg/play.svg";
import arrow from "../../assets/svg/color-arrow.svg";
import Wrapper from '../../components/sheared/Wrapper';

const WhyTrustUs = () => {

  const [reviewUserChange, setReviewUserChange] = useState('1');

  return (
    <div>
      <div className="bg-darkslategray-300 bg-gradient-to-t from-[#00526C]/50 via-[#00526C]/50 to-[#005C46]/50 w-full overflow-hidden py-24 px-0">
        <Wrapper>
          <div className="flex flex-col items-center justify-start z-10">
            <h1 className="font-Baloo text-white text-base sm:text-xl md:text-9xl leading-[22px] sm:leading-[28px] md:leading-[36px] font-[500] sm:font-[600] md:font-[700]">
              কেন <span className="text-turquoise">ইশিখন.কম-</span>তে আস্থা
              রাখবেন ?
            </h1>
            <h1 className="font-Baloo text-white text-base sm:text-xl md:text-9xl leading-[22px] sm:leading-[28px] md:leading-[36px] font-[500] sm:font-[600] text-center">
              সেরা মেন্টর ও সর্বাধুনিক প্রযুক্তির সাথে সারাদেশের ৫০ লক্ষ+
              শিক্ষার্থীর <br className="hidden md:block" /> মানসম্মত পড়ালেখা ও
              পরীক্ষা প্রস্তুতির নির্ভরযোগ্য প্রতিষ্ঠান{" "}
              <span className="text-turquoise">ইশিখন.কম</span>!
            </h1>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-24 mt-10 overflow-hidden">
            <div className="w-full md:w-1/2 flex flex-col gap-4">

              <div className="relative">
                <div onClick={() => setReviewUserChange('1')} className={`${reviewUserChange === '1' ? 'bg-[#D4E9E7] rounded-[8px] h-fit p-4 flex flex-col gap-2 min-w-[250px] cursor-pointer text-primary_color' : 'rounded-[8px] h-fit p-4 flex flex-col gap-2 min-w-[250px] cursor-pointer text-white'}`}>
                  <div className="flex gap-2 ">
                    <img alt="avatar" src={avatar} />
                    <h4 className="font-inter text-lg leading-[22px] font-[600]">
                      Md Jobayer Hossen
                    </h4>
                  </div>
                  <p className=" font-inter text-sm leading-[18px] font-[400] text-start">
                    Student at Web Design Course
                  </p>
                </div>
                {reviewUserChange === '1' && <>
                  <img
                    alt="icon"
                    src={comment}
                    className="absolute bottom-4 -right-[30px] hidden md:block"
                  />
                  <img
                    alt="icon"
                    src={comment_down}
                    className="absolute -bottom-5 right-1 block md:hidden"
                  />
                </>}
              </div>

              <div className="relative">
                <div onClick={() => setReviewUserChange('2')} className={`${reviewUserChange === '2' ? 'bg-[#D4E9E7] rounded-[8px] h-fit p-4 flex flex-col gap-2 min-w-[250px] cursor-pointer text-primary_color' : 'rounded-[8px] h-fit p-4 flex flex-col gap-2 min-w-[250px] cursor-pointer text-white'}`}>
                  <div className="flex gap-2">
                    <img alt="avatar" src={avatar} />
                    <h4 className="font-inter  text-lg leading-[22px] font-[600]">
                      MD Khalek Haowladar
                    </h4>
                  </div>
                  <p className=" font-inter text-sm leading-[18px] font-[400] text-start">
                    Parents of a student
                  </p>
                </div>
                {reviewUserChange === '2' && <>
                  <img
                    alt="icon"
                    src={comment}
                    className="absolute bottom-4 -right-[30px] hidden md:block"
                  />
                  <img
                    alt="icon"
                    src={comment_down}
                    className="absolute -bottom-5 right-1 block md:hidden"
                  />
                </>}
              </div>

              <div className="relative">
                <div onClick={() => setReviewUserChange('3')} className={`${reviewUserChange === '3' ? 'bg-[#D4E9E7] rounded-[8px] h-fit p-4 flex flex-col gap-2 min-w-[250px] cursor-pointer text-primary_color' : 'rounded-[8px] h-fit p-4 flex flex-col gap-2 min-w-[250px] cursor-pointer text-white'}`}>
                  <div className="flex gap-2">
                    <img alt="avatar" src={avatar} />
                    <h4 className="font-inter  text-lg leading-[22px] font-[600]">
                      MD Nojrul Islam
                    </h4>
                  </div>
                  <p className=" font-inter text-sm leading-[18px] font-[400] text-start">
                    Student at Digital Marketing Course
                  </p>
                </div>
                {reviewUserChange === '3' && <>
                  <img
                    alt="icon"
                    src={comment}
                    className="absolute bottom-4 rotate-180 scale-x-[-1] -right-[30px] hidden md:block"
                  />
                  <img
                    alt="icon"
                    src={comment_down}
                    className="absolute -bottom-5 right-1 block md:hidden"
                  />
                </>}
              </div>


              {/* to do  */}

              {/* <div className="hidden md:block">
                <button
                  type="button"
                  className="text-secandary_color p-4 flex items-center gap-2 font-[400] text-sm"
                >
                  View other 20+ testimonials{" "}
                  <img alt="icon" src={arrow} className="mt-1" />{" "}
                </button>
              </div> */}

            </div>


            {reviewUserChange === '1' && <div className="bg-[#D4E9E7] rounded-[8px] w-full px-[20px] py-[30px] flex flex-col gap-5 h-fit">
              <div className="flex justify-center md:justify-start">
                <img alt="icon" src={quest} />
              </div>
              <h2 className="font-Baloo text-primary_color text-xl sm:text-5xl leading-[28px] sm:leading-[32px] font-[600] text-center md:text-start">
                Complete Python Live Course
              </h2>
              <div>
                <h4 className="font-Baloo text-[#464A53] text-base leading-[22px] font-[700]  text-center md:text-start">
                  I AM GRATEFUL FOR THIS COURSE.
                </h4>
                <p className="font-Baloo text-[#464A53] text-base leading-[22px] font-[400] text-center md:text-start">
                  Our class was conducted by Jobayer sir. He taught us very
                  well. His ability to understand is really amazing. This course is very helpful for me.
                </p>
              </div>
              <div className="flex  justify-between">
                <div className="flex gap-1">
                  <img alt="icon" src={star} />
                  <img alt="icon" src={star} />
                  <img alt="icon" src={star} />
                  <img alt="icon" src={star} />
                  <img alt="icon" src={border_star} />
                </div>
                <img alt="icon" src={play} />
              </div>
            </div>}
            {reviewUserChange === '2' && <div className="bg-[#D4E9E7] rounded-[8px] w-full px-[20px] py-[30px] flex flex-col gap-5 h-fit">
              <div className="flex justify-center md:justify-start">
                <img alt="icon" src={quest} />
              </div>
              <h2 className="font-Baloo text-primary_color text-xl sm:text-5xl leading-[28px] sm:leading-[32px] font-[600] text-center md:text-start">
                Complete Web Development Live Course
              </h2>
              <div>
                <h4 className="font-Baloo text-[#464A53] text-base leading-[22px] font-[700]  text-center md:text-start">
                  I AM HAPPY WITH THIS COURSE.
                </h4>
                <p className="font-Baloo text-[#464A53] text-base leading-[22px] font-[400] text-center md:text-start">
                  Our class was conducted by Jobayer sir. He taught us very
                  well. His ability to understand is really amazing. This course is very helpful for me. I am very happy with this course.
                </p>
              </div>
              <div className="flex  justify-between">
                <div className="flex gap-1">
                  <img alt="icon" src={star} />
                  <img alt="icon" src={star} />
                  <img alt="icon" src={star} />
                  <img alt="icon" src={star} />
                  <img alt="icon" src={border_star} />
                </div>
                <img alt="icon" src={play} />
              </div>
            </div>}
            {reviewUserChange === '3' && <div className="bg-[#D4E9E7] rounded-[8px] w-full px-[20px] py-[30px] flex flex-col gap-5 h-fit">
              <div className="flex justify-center md:justify-start">
                <img alt="icon" src={quest} />
              </div>
              <h2 className="font-Baloo text-primary_color text-xl sm:text-5xl leading-[28px] sm:leading-[32px] font-[600] text-center md:text-start">
                Complete Digital Marketing Live Course
              </h2>
              <div>
                <h4 className="font-Baloo text-[#464A53] text-base leading-[22px] font-[700]  text-center md:text-start">
                  I AM VERY GLADE TO THIS COURSE.
                </h4>
                <p className="font-Baloo text-[#464A53] text-base leading-[22px] font-[400] text-center md:text-start">
                  Our class was conducted by Jobayer sir. He taught us very
                  well. His ability to understand is really amazing. This course is
                  very helpful for me. I am very happy with this course. This is mind-blowing.
                </p>
              </div>
              <div className="flex  justify-between">
                <div className="flex gap-1">
                  <img alt="icon" src={star} />
                  <img alt="icon" src={star} />
                  <img alt="icon" src={star} />
                  <img alt="icon" src={star} />
                  <img alt="icon" src={border_star} />
                </div>
                <img alt="icon" src={play} />
              </div>
            </div>}

          </div>
          <div className="block md:hidden">
            <div className="flex justify-center mt-10">
              <button
                type="button"
                className="text-secandary_color p-4 flex items-center gap-2 font-[400] text-sm"
              >
                View other 20+ testimonials{" "}
                <img alt="icon" src={arrow} className="mt-1" />{" "}
              </button>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default WhyTrustUs;