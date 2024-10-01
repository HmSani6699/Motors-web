import React from 'react';
import Wrapper from './Wrapper';

import right_arrow from "../../assets/svg/right-arrow.svg";
import carer from "../../assets/svg/carer.svg";
import user_add from "../../assets/svg/addSir.svg";
import agent from "../../assets/svg/agent.svg";
import privacy from "../../assets/svg/privacyPolicy.svg";
import user from "../../assets/svg/user.svg";
import blue_tic from "../../assets/svg/blueTick.svg";
import course from "../../assets/svg/course_icon.svg";
import call from "../../assets/svg/blue-call.svg";
import message from "../../assets/svg/blue-message.svg";
import location from "../../assets/svg/blue_location.svg";

import facebook from "../../assets/svg/facebook.svg";
import linkedin from "../../assets/svg/linkedin.svg";
import insta from "../../assets/svg/Instragram.svg";
import youtube from "../../assets/svg/youtube.svg";
import gPlus from "../../assets/svg/Google Plus_color_icon.svg";

import pay_logo_1 from "../../assets/images/payment-getway-logo (1).png";
import pay_logo_2 from "../../assets/images/payment-getway-logo (2).png";
import pay_logo_3 from "../../assets/images/payment-getway-logo (3).png";
import pay_logo_4 from "../../assets/images/payment-getway-logo (4).png";
import pay_logo_5 from "../../assets/images/payment-getway-logo (5).png";
import pay_logo_6 from "../../assets/images/payment-getway-logo (6).png";
import pay_logo_7 from "../../assets/images/payment-getway-logo (7).png";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="bg-[#D6E9F5] font-Baloo">
        <Wrapper className="flex justify-between flex-wrap gap-10 py-14">
          <div className="w-fit md:w-5/12 lg:w-[290px]  order-first">
            <h3 className="text-[#2E3138] text-lg font-[600] leading-[28px] mb-5">
              আমাদের সম্পর্কে
            </h3>
            <p className="text-[#464A53] text-sm font-[400] leading-[18px] mb-5">
              ইশিখন.কম, আইটিতে সাফল্য সৃষ্টির লক্ষ্যে প্রতিষ্ঠিত একটি বিশ্বস্ত
              প্রতিষ্ঠান। প্রতিষ্ঠার পর থেকে, ইশিখন.কম সুদীর্ঘ ৮ বছর ধরে
              ডিজিটাল বাংলাদেশ বিনির্মাণে অবদান রেখে চলেছে এবং যুগান্তকারী
              পরিবর্তনের মাধ্যমে বহুমুখী সাফল্য অর্জন করেছে।
            </p>
            <h3 className="text-[#2E3138] text-lg font-[600] leading-[28px] mb-2.5">
              সার্টিফিকেট কোড
            </h3>
            <div className="flex items-center bg-white py-2 px-2 rounded-md w-fit">
              <input
                type="text"
                className="outline-none"
                placeholder="কোড দিন"
              />
              <div className="bg-[#A9EFE1] px-2 py-[6px] rounded-[2px]">
                <img
                  src={right_arrow}
                  alt="icon"
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
          {/* কোম্পানী */}
          <div className="flex-2">
            <h3 className="text-[#2E3138] text-lg font-[600] leading-[28px] mb-5">
              কোম্পানী
            </h3>
            <Link to='/career'>
              <div className="flex items-center gap-2 mb-2.5">
                <img src={carer} alt="icon" />
                <p className="text-[#464A53] text-lg font-[400] leading-[28px]">
                  ক্যারিয়ার
                </p>
              </div>
            </Link>
            <Link to='/form'>
              <div className="flex items-center gap-2 mb-2.5">
                <img src={user_add} alt="icon" className="mb-1" />
                <p className="text-[#464A53] text-lg font-[400] leading-[28px]">
                  শিক্ষক হিসেবে জয়েন
                </p>
              </div>
            </Link>
            <Link to='/form'>
              <div className="flex items-center gap-2 mb-2.5">
                <img src={agent} alt="icon" className="mb-1" />
                <p className="text-[#464A53] text-lg font-[400] leading-[28px]">
                  এজেন্ট হিসেবে জয়েন
                </p>
              </div>
            </Link>
            <Link to='/termAndCondition'>
              <div className="flex items-center gap-2 mb-2.5">
                <img src={privacy} alt="icon" className="mb-1" />
                <p className="text-[#464A53] text-lg font-[400] leading-[28px]">
                  প্রাইভেসি পলিসি
                </p>
              </div>
            </Link>
            <Link to='/termAndCondition'>
              <div className="flex items-center gap-2 mb-2.5">
                <img src={privacy} alt="icon" className="mb-1" />
                <p className="text-[#464A53] text-lg font-[400] leading-[28px]">
                  রিফান্ড পলিসি
                </p>
              </div>
            </Link>
            <Link to='/termAndCondition'>
              <div className="flex items-center gap-2 mb-2.5">
                <img src={user} alt="icon" className="mb-1" />
                <p className="text-[#464A53] text-lg font-[400] leading-[28px]">
                  ব্যবহারকারীর শর্তাবলি
                </p>
              </div>
            </Link>
          </div>
          {/* অন্যন্য */}
          <div className="flex-2">
            <h3 className="text-[#2E3138] text-lg font-[600] leading-[28px] mb-5">
              অন্যন্য
            </h3>

            <Link to='/blog'>
              <div className="flex items-center gap-2 mb-2.5">
                <img src={blue_tic} width={20} alt="icon" />
                <p className="text-[#464A53] text-lg font-[400] leading-[28px]">
                  ব্লগ
                </p>
              </div>
            </Link>

            <Link to='/seminar'>
              <div className="flex items-center gap-2 mb-2.5">
                <img src={blue_tic} width={20} alt="icon" />
                <p className="text-[#464A53] text-lg font-[400] leading-[28px]">
                  সেমিনার সমূহ
                </p>
              </div>
            </Link>

            <div className="flex items-center gap-2 mb-2.5">
              <img src={blue_tic} width={20} alt="icon" />
              <p className="text-[#464A53] text-lg font-[400] leading-[28px]">
                অফার সমূহ
              </p>
            </div>

            <div className="flex items-center gap-2 mb-2.5">
              <img src={blue_tic} width={20} alt="icon" />
              <p className="text-[#464A53] text-lg font-[400] leading-[28px]">
                কুইজ
              </p>
            </div>
            <Link to="/agentOffice" >
              <div className="flex items-center gap-2 mb-2.5">
                <img src={blue_tic} width={20} alt="icon" />
                <p className="text-[#464A53] text-lg font-[400] leading-[28px]">
                  এজেন্ট সমূহ
                </p>
              </div>
            </Link>
            <Link to="/mentorsList" >
            <div className="flex items-center gap-2 mb-2.5">
              <img src={blue_tic} width={20} alt="icon" />
              <p className="text-[#464A53] text-lg font-[400] leading-[28px]">
                শিক্ষক সমূহ
              </p>
            </div>
            </Link>
          </div>
          {/* কোর্সসমূহ */}
          {/* অন্যন্য */}
          <div className="flex-2">
            <h3 className="text-[#2E3138] text-lg font-[600] leading-[28px] mb-5">
              কোর্সসমূহ
            </h3>

            <div className="flex items-center gap-2 mb-2.5">
              <img src={course} width={20} alt="icon" />
              <p className="text-[#464A53] text-lg font-[400] leading-[28px]">
                গ্রাফিক্স ডিজাইন
              </p>
            </div>

            <div className="flex items-center gap-2 mb-2.5">
              <img src={course} width={20} alt="icon" />
              <p className="text-[#464A53] text-lg font-[400] leading-[28px]">
                ডিজিটাল মার্কেটিং
              </p>
            </div>

            <div className="flex items-center gap-2 mb-2.5">
              <img src={course} width={20} alt="icon" />
              <p className="text-[#464A53] text-lg font-[400] leading-[28px]">
                আইটি স্পেশালিস্ট
              </p>
            </div>

            <div className="flex items-center gap-2 mb-2.5">
              <img src={course} width={20} alt="icon" />
              <p className="text-[#464A53] text-lg font-[400] leading-[28px]">
                মোশন গ্রাফিক্স
              </p>
            </div>

            <div className="flex items-center gap-2 mb-2.5">
              <img src={course} width={20} alt="icon" />
              <p className="text-[#464A53] text-lg font-[400] leading-[28px]">
                ওয়েব ডিজাইন
              </p>
            </div>

            <div className="flex items-center gap-2 mb-2.5">
              <img src={course} width={20} alt="icon" />
              <p className="text-[#464A53] text-lg font-[400] leading-[28px]">
                অন্যান্য কোর্স সমূহ
              </p>
            </div>
          </div>
          {/* কোর্সসমূহ */}
          {/* অন্যন্য */}
          <div className="w-fit md:w-6/12 lg:w-[290px] order-none sm:-order-4 lg:order-none">
            <h3 className="text-[#2E3138] text-lg font-[600] leading-[28px] mb-5">
              আমাদের সাথে যোগাযোগের মাধ্যম
            </h3>

            <div className="flex items-center gap-2 mb-5">
              <img src={call} width={24} alt="icon" />
              <p className="text-[#2E3138] text-base font-[500] leading-[28px]">
                09639399399 / 01948858258
              </p>
            </div>
            <div className="flex items-center gap-2 mb-5">
              <img src={message} width={24} alt="icon" />
              <p className="text-[#2E3138] text-base font-[500] leading-[28px]">
                support@eshikhun.com
              </p>
            </div>

            <div className="flex items-start gap-2 mb-5">
              <img src={location} width={24} alt="icon" />
              <p className="text-[#2E3138] text-base font-[500] leading-[28px]">
                151/7, level-4, Goodluck Center, (Opposite SIBL Foundation
                Hospital), Panthapath Signal, Green Road, Dhanmondi, Dhaka-1205.
              </p>
            </div>
            <div className="flex gap-5 items-center">
              <h3 className="text-[#2E3138] text-lg font-[600] leading-[28px]">
                কানেক্ট
              </h3>
              <div className="flex items-center gap-3">
                <a target='blank' href="https://www.facebook.com/eshikhon/"><img src={facebook} alt="icon" /></a>
                <a target='blank' href="https://www.linkedin.com/company/eshikhon/"> <img src={linkedin} alt="icon" /> </a>
                <a target='blank' href="https://www.instagram.com/eshikhon/"><img src={insta} alt="icon" /></a>
                <a target='blank' href="https://www.youtube.com/@eShikhon">  <img src={youtube} alt="icon" /></a>
                <img src={gPlus} alt="icon" />
              </div>
            </div>
          </div>
          {/* কোর্সসমূহ */}
        </Wrapper>
      </footer>

      <div className="bg-[#EBF4FA]">
        <Wrapper>
          <div className=" flex flex-col sm:flex-row items-center justify-between py-6 gap-2">
            <div className="flex flex-col md:flex-row items-center gap-1 md:gap-4">
              <h2 className="text-[#2872A4] font-semibold font-Baloo">
                পেমেন্ট গেটওয়েঃ
              </h2>
              <div className="flex gap-2 md:gap-4">
                <img
                  src={pay_logo_1}
                  className="h-[15px] sm:h-[20] w-fit"
                  alt="logo"
                />
                <img
                  src={pay_logo_2}
                  className="h-[15px] sm:h-[20] w-fit"
                  alt="logo"
                />
                <img
                  src={pay_logo_3}
                  className="h-[15px] sm:h-[20] w-fit"
                  alt="logo"
                />
                <img
                  src={pay_logo_4}
                  className="h-[15px] sm:h-[20] w-fit"
                  alt="logo"
                />
                <img
                  src={pay_logo_5}
                  className="h-[15px] sm:h-[20] w-fit"
                  alt="logo"
                />
                <img
                  src={pay_logo_6}
                  className="h-[15px] sm:h-[20] w-fit"
                  alt="logo"
                />
                <img
                  src={pay_logo_7}
                  className="h-[15px] sm:h-[20] w-fit"
                  alt="logo"
                />
              </div>
            </div>
            <div>
              <p className="text-[12px] lg:text-[14px] font-[400] leading-[18px] lg:leading-[28px] text_black_gray ">
                স্বত্ব © ২০১৫ - ২০২৩ ইশিখন.কম কর্তৃক সর্বস্বত্ব সংরক্ষিত
              </p>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default Footer;