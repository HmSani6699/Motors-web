import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import banner_img from "../../../../public/images/cardDetails.png";

const CardDetailsBanner = () => {
  return (
    <div className="pt-[65px] lg:pt-0">
      <Swiper
        pagination={{ clickable: true }} // Enable clickable pagination
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative h-[303px] lg:h-[912px] md:h-[594px]  w-full">
            <img
              className=" h-[303px] lg:h-[912px] md:h-[594px]  w-full"
              src={banner_img}
              alt="Mobile Banner 1"
            />

            <div className=" w-full absolute lg:bottom-[80px] md:bottom-[60px] bottom-[50px] lg:left-[32px] lg:text-left text-center">
              <div>
                <h2 className="text-[24px] leading-[28px] lg:text-[64px] md:text-[40px] font-[700] font-avenir text-white lg:leading-[76px] md:leading-[48px] ">
                  Toyota Crown Signia
                </h2>
                <p className="text-[14px] lg:text-[32px] lg:leading-[38px] font-avenir md:text-[24px] text-[#FFFFFF] font-[500] md:leading-[28px] leading-[21px] mt-[10px]">
                  Elegance Meets Performance
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[303px] lg:h-[912px] md:h-[594px]  w-full">
            <img
              className=" h-[303px] lg:h-[912px] md:h-[594px]  w-full"
              src={banner_img}
              alt="Mobile Banner 1"
            />

            <div className=" w-full absolute lg:bottom-[80px] md:bottom-[60px] bottom-[50px] lg:left-[32px] lg:text-left text-center">
              <div>
                <h2 className="text-[24px] leading-[28px] lg:text-[64px] md:text-[40px] font-[700] font-avenir text-white lg:leading-[76px] md:leading-[48px] ">
                  Toyota Crown Signia
                </h2>
                <p className="text-[14px] lg:text-[32px] lg:leading-[38px] font-avenir md:text-[24px] text-[#FFFFFF] font-[500] md:leading-[28px] leading-[21px] mt-[10px]">
                  Elegance Meets Performance
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[303px] lg:h-[912px] md:h-[594px]  w-full">
            <img
              className=" h-[303px] lg:h-[912px] md:h-[594px]  w-full"
              src={banner_img}
              alt="Mobile Banner 1"
            />

            <div className=" w-full absolute lg:bottom-[80px] md:bottom-[60px] bottom-[50px] lg:left-[32px] lg:text-left text-center">
              <div>
                <h2 className="text-[24px] leading-[28px] lg:text-[64px] md:text-[40px] font-[700] font-avenir text-white lg:leading-[76px] md:leading-[48px] ">
                  Toyota Crown Signia
                </h2>
                <p className="text-[14px] lg:text-[32px] lg:leading-[38px] font-avenir md:text-[24px] text-[#FFFFFF] font-[500] md:leading-[28px] leading-[21px] mt-[10px]">
                  Elegance Meets Performance
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[303px] lg:h-[912px] md:h-[594px]  w-full">
            <img
              className=" h-[303px] lg:h-[912px] md:h-[594px]  w-full"
              src={banner_img}
              alt="Mobile Banner 1"
            />

            <div className=" w-full absolute lg:bottom-[80px] md:bottom-[60px] bottom-[50px] lg:left-[32px] lg:text-left text-center">
              <div>
                <h2 className="text-[24px] leading-[28px] lg:text-[64px] md:text-[40px] font-[700] font-avenir text-white lg:leading-[76px] md:leading-[48px] ">
                  Toyota Crown Signia
                </h2>
                <p className="text-[14px] lg:text-[32px] lg:leading-[38px] font-avenir md:text-[24px] text-[#FFFFFF] font-[500] md:leading-[28px] leading-[21px] mt-[10px]">
                  Elegance Meets Performance
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CardDetailsBanner;
