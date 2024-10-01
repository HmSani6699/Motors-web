import React, { useState } from "react";
import women from "../../assets/banner_photo/person.png";
import hero from "../../assets/banner_photo/hero-img.png";
import big_circle from "../../assets/banner_photo/big_circle.png";
import bg_30k from "../../assets/banner_photo/30k.png";
import bg_1k from "../../assets/banner_photo/1k.png";
import left_side_shape from "../../assets/banner_photo/Vector.png";
import tick_icon from "../../assets/svg/tick-icon.svg";
import right_arrow from "../../assets/svg/arrow-right-btn.svg";
import student from "../../assets/banner_photo/student.png";
import teacher from "../../assets/banner_photo/teacher.png";
import office from "../../assets/banner_photo/office.png";
import globe from "../../assets/banner_photo/globe.png";
import ForeCard from "./ForeCard";
import DiscountTime from "../../components/homePage/DiscountTime";
import Wrapper from "../../components/sheared/Wrapper";
import bg_pattern_r from "../../assets/svg/hero_bottom_right.svg";
import bg_pattern_l from "../../assets/svg/hero_top_left.svg";
import Countdown from "./Countdown";
import OurCourse from "./OurCourse";
import TopCourse from "./TopCourse";
import UpComingBatch from "./UpComingBatch";
import SuccessfulStudent from "./SuccessfulStudent";
import AllMentors from "./AllMentors";
import WhyTrustUs from "./WhyTrustUs";
import OfficeCard from "../../components/homePage/OfficeCard";
import AgentOffice from "./AgentOffice";
import CallNow from "./CallNow";
import ContactFrom from "./ContactFrom";
import Blogs from "./Blogs";
import { Link } from "react-router-dom";

const Home = () => {
  const [showDiscountPopup, setShowDiscountPopup] = useState(true);
  const handleDiscountPopup = () => {
    setShowDiscountPopup(false);
  };
  return (
    <>
      {showDiscountPopup ? (
        <DiscountTime handleDiscountPopup={handleDiscountPopup} />
      ) : (
        ""
      )}

      <section className="relative">
        <div className="bg-hero_bg w-full relative">
          <Wrapper>
            <div className="relative  z-10 flex justify-center items-center  ">
              <div className="w-full  flex flex-col sm:flex-row justify-between items-center ">
                <div className="flex h-full  flex-col justify-center gap-4 font-Baloo w-full sm:w-1/2">
                  <div className="flex gap-2 leading-[22px] justify-center sm:justify-normal font-medium mt-10 sm:mt-0">
                    <img alt="icon" src={tick_icon} />
                    <p className="text-primary_color">
                      দেশের সেরা ট্রেনিং ইনস্টিটিউটে
                    </p>
                  </div>
                  <h1 className="text-13xl lg:text-33xl leading-[40px] lg:leading-[56px] font-semibold text-primary_color text-center sm:text-start">
                    ক্যারিয়ার শুরু হোক <br />
                    <span className="text-secandary_color">
                      দক্ষ আত্মবিশ্বাসে্র
                    </span>{" "}
                    সাথে
                  </h1>
                  <div className="flex justify-center sm:justify-start">
                    <p className=" leading-[18px] w-full max-w-[457.5px] h-fit  text-[#464A53] text-center sm:text-start mr-5">
                      অভিজ্ঞ সব মেন্টর আর আপডেটেড কারিকুলাম নিয়ে ইশিখন দিচ্ছে,
                      আপনার ক্যারিয়ার গড়ার অগ্রযাত্রায়। আমাদের ৩০টিরও বেশি
                      ট্রেন্ডি কোর্স থেকে আজই বেছে নিন আপনার পছন্দের কোর্স সমূহ
                      আর হয়ে উঠুন আত্মবিশ্বাসী ।
                    </p>
                  </div>
                  <div className="flex justify-center sm:justify-normal gap-3 mt-4">
                    <Link to="/course">
                      <button
                        type="button"
                        className="font-Baloo text-white bg-secandary_color flex items-center justify-center py-[5px] px-4 gap-1 rounded-md"
                      >
                        কোর্স সমূহ <img alt="icon" src={right_arrow} />
                      </button>
                    </Link>
                    <Link to="/seminar">
                      <button
                        type="button"
                        className="font-Baloo flex items-center border border-secandary_color py-[5px] px-4 rounded-md text-secandary_color"
                      >
                        জয়েন করুন সেমিনার
                      </button>
                    </Link>
                  </div>
                </div>

                <div className="w-full sm:w-1/2 h-full flex justify-center sm:justify-end  items-end mt-10 sm:mt-16">
                  <img src={hero} alt="banner of eShikhon" className="w-full" />
                </div>
              </div>
            </div>
          </Wrapper>

          <img
            className="absolute bottom-0 right-0 hidden md:block"
            alt="background"
            src={bg_pattern_r}
          />
          <img
            className="absolute top-0 left-0 "
            alt="background"
            src={bg_pattern_l}
          />
        </div>
        <Countdown />
      </section>
      <OurCourse />
      <TopCourse />
      <UpComingBatch />
      <SuccessfulStudent />
      <AllMentors />
      <WhyTrustUs />
      <AgentOffice />
      <CallNow />
      <ContactFrom />
      <Blogs />
    </>
  );
};

export default Home;
