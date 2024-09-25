import React from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import leftArrow from "../../../../public/svg/Arrow right (1).svg";
import rightArrow from "../../../../public/svg/Arrow right.svg";
import mobileBanner from "../../../../public/images/mobileBanner.png";
import "./Bnner.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <div>
      {/* Desktop View */}
      <div className="bg-[url('../../../../public/images/banner.png')] h-screen bg-cover w-full items-center lg:flex hidden">
        <div className="max-w-[1200px] mx-auto w-full mt-[140px]">
          <h2 className="lg:text-[64px] font-[700] text-white leading-[76px]">
            Meet the GR <br /> Corolla Power <br /> Beyond Limits
          </h2>
          <p className="text-[24px] text-white font-[500] leading-[28px] mt-[16px]">
            Unleash the thrill of driving with unmatched <br /> performance and
            dynamic design.
          </p>
          <button className="py-[16px] px-[24px] bg-[#2498E2] text-white mt-[32px] rounded-[8px]">
            Explore more
          </button>

          {/* Arrow controls (optional) */}
          <div className="flex items-center justify-between w-full mt-[87px] mb-[50px]">
            <div>
              <img src={leftArrow} alt="Left Arrow" />
            </div>
            <div>
              <img
                src={rightArrow}
                className="rotate-[180deg]"
                alt="Right Arrow"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="pt-[62px] lg:hidden">
        <Swiper
          pagination={{ clickable: true }} // Enable clickable pagination
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="relative h-[380px] md:h-[400px] w-full">
              <img
                className="h-full w-full"
                src={mobileBanner}
                alt="Mobile Banner 1"
              />

              <div className=" w-full absolute inset-0 z-10 text-center flex items-center justify-center  ">
                <div>
                  <h2 className="text-[40px] font-[700] text-white leading-[48px]">
                    Meet the GR Corolla Power Beyond Limits
                  </h2>
                  <p className="text-[16px] text-white font-[500] leading-[24px] mt-[16px]">
                    Unleash the thrill of driving with unmatched performance and
                    dynamic design.
                  </p>
                  <button className="py-[16px] px-[24px] bg-[#2498E2] text-white mt-[32px] rounded-[8px]">
                    Explore more
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-[380px]">
              <img
                className="h-full"
                src={mobileBanner}
                alt="Mobile Banner 1"
              />

              <div className=" w-full absolute top-[32px] z-10 text-center flex items-center justify-center  ">
                <div>
                  <h2 className="text-[40px] font-[700] text-white leading-[48px]">
                    Meet the GR Corolla Power Beyond Limits
                  </h2>
                  <p className="text-[16px] text-white font-[500] leading-[24px] mt-[16px]">
                    Unleash the thrill of driving with unmatched performance and
                    dynamic design.
                  </p>
                  <button className="py-[16px] px-[24px] bg-[#2498E2] text-white mt-[32px] rounded-[8px]">
                    Explore more
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-[380px]">
              <img
                className="h-full"
                src={mobileBanner}
                alt="Mobile Banner 1"
              />

              <div className=" w-full absolute top-[32px] z-10 text-center flex items-center justify-center  ">
                <div>
                  <h2 className="text-[40px] font-[700] text-white leading-[48px]">
                    Meet the GR Corolla Power Beyond Limits
                  </h2>
                  <p className="text-[16px] text-white font-[500] leading-[24px] mt-[16px]">
                    Unleash the thrill of driving with unmatched performance and
                    dynamic design.
                  </p>
                  <button className="py-[16px] px-[24px] bg-[#2498E2] text-white mt-[32px] rounded-[8px]">
                    Explore more
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-[380px]">
              <img
                className="h-full"
                src={mobileBanner}
                alt="Mobile Banner 1"
              />

              <div className=" w-full absolute top-[32px] z-10 text-center flex items-center justify-center  ">
                <div>
                  <h2 className="text-[40px] font-[700] text-white leading-[48px]">
                    Meet the GR Corolla Power Beyond Limits
                  </h2>
                  <p className="text-[16px] text-white font-[500] leading-[24px] mt-[16px]">
                    Unleash the thrill of driving with unmatched performance and
                    dynamic design.
                  </p>
                  <button className="py-[16px] px-[24px] bg-[#2498E2] text-white mt-[32px] rounded-[8px]">
                    Explore more
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
