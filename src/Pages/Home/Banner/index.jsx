import React, { useEffect, useRef, useState } from "react";
import banner_img from "../../../../public/images/cardDetails.png";
import arrow_image from "../../../../public/svg/Arrow right (1).svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { get } from "../../../api/axios";
const baseUrl = "http://localhost:1337/";

const Banner = () => {
  const swiperRef = useRef(null); // Reference to the Swiper instance
  const [activeIndex, setActiveIndex] = useState(0); // State to track the active slide index
  const [bannerData, setBannerData] = useState([]);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex); // Update active index on slide change
  };

  const goToPrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  // ========> Handle get banner slider data <=======//
  useEffect(() => {
    handleGetBannerData();
  }, []);

  const handleGetBannerData = async () => {
    try {
      const res = await get(`/api/banner-sliders?populate=image`);
      console.log(res);
      setBannerData(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pt-[80px] lg:pt-0 relative overflow-hidden">
      <Swiper
        ref={swiperRef}
        pagination={{ clickable: true }} // Enable clickable pagination
        className="mySwiper"
        onSlideChange={handleSlideChange} // Add slide change event
      >
        {bannerData?.length > 0 &&
          bannerData?.map((item, i) => {
            return (
              <>
                <SwiperSlide key={i}>
                  <div className="relative h-[470px] lg:h-[950px]  md:h-[500px] w-full">
                    <img
                      className="h-full w-full object-cover"
                      src={`${baseUrl}${item?.image?.url.slice(
                        1,
                        item?.image?.url?.length
                      )}`}
                      alt="Mobile Banner 1"
                    />
                    <div className="absolute top-0 h-full w-full">
                      <div className="flex items-center max-w-[1376px] mx-auto lg:pl-[50px] px-[50px] md:px-[70px] lg:px-0 h-full">
                        <div>
                          <h2 className="text-white text-[40px] lg:text-[64px] w-full lg:w-[500px] font-[700] text-center lg:text-left leading-[48px] lg:leading-[74px]">
                            {item?.title}
                          </h2>
                          <p className="text-white mt-[16px] text-[16px] lg:text-[24px] font-[500] text-center lg:text-left leading-[24px] lg:leading-[28px]">
                            {item?.description}
                          </p>
                          <div className="mt-[32px] flex items-center justify-center lg:block">
                            <button className="py-[16px] px-[35px] rounded-[8px] bg-[#2498E2] font-[500] text-white">
                              Explore more
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            );
          })}
      </Swiper>
      {/* Arrow Buttons for Navigation */}
      <div className="absolute bottom-[30px] lg:bottom-[50px] px-[100px] w-full z-20">
        <div className="flex items-center justify-center lg:justify-between ">
          <button className="lg:block hidden" onClick={goToPrevSlide}>
            <img src={arrow_image} alt="Previous" />
          </button>

          {/* Custom Pagination Indicators */}
          <div className="flex gap-[16px] items-center">
            {[...Array(bannerData?.length > 0 && bannerData?.length)].map(
              (_, index) => (
                <div
                  key={index}
                  className={`border-[4px] rounded-full ${
                    index === activeIndex
                      ? "border-[#2498E2] lg:w-[106px]"
                      : "border-[#DCDCDC] lg:w-[47px]"
                  }`}
                />
              )
            )}
          </div>

          <button onClick={goToNextSlide}>
            <img
              className="rotate-180 lg:block hidden"
              src={arrow_image}
              alt="Next"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
