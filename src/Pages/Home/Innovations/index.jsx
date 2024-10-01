import React, { useRef, useState } from "react";
import Card from "../../../component/Card";
import arrow from "../../../../public/svg/Arrow.svg";
import leftArrow from "../../../../public/svg/Arrow right (1).svg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Innovations = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0); // State to track the active slide index

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

  return (
    <div className="max-w-[1376px] lg:mx-auto mb-[32px] lg:mb-[135px]">
      <div className="lg:flex lg:mt-[120px] md:mt-[64px] mt-[32px] lg:mb-[50px] mb-[24px] lg:mx-0 mx-[24px]">
        <div className="lg:w-[40%]">
          <h2 className="text-[24px] md:text-[32px] lg:text-[48px] font-[700] text-[#141414] text-center lg:text-left leading-[28px] lg:leading-[57px] font-avenir mb-[16px] lg:mb-0">
            From the Garage: <br className="hidden lg:block" /> Insights &
            Innovations
          </h2>
        </div>
        <div className="lg:w-[60%]">
          <p className="text-[16px] lg:text-[24px] font-[400] text-[#141414] leading-[24px] lg:leading-[28px] text-center lg:text-left lg:pl-[50px] font-avenir">
            Stay connected with the latest trends, stories, and insights from
            the automotive world. Our blog dives deep into the art of
            engineering, the beauty of design, and the future of mobility.
            Whether you're a car enthusiast or just curious about what drives
            us, you'll find something to inspire your journey.
          </p>
        </div>
      </div>

      {/* =======> Swiper Slider <====== */}
      <div className="pl-[24px] pr-[24px] lg:pr-0">
        <Swiper
          ref={swiperRef}
          className="mySwiper"
          spaceBetween={20}
          slidesPerView={1}
          onSlideChange={handleSlideChange}
          breakpoints={{
            // Define breakpoints for different screen sizes
            640: {
              slidesPerView: 1, // For mobile devices
            },
            768: {
              slidesPerView: 2, // For md devices
            },
            1024: {
              slidesPerView: 3, // For lg devices
            },
          }}
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <SwiperSlide key={index} style={{ width: "345px" }}>
              <Card />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* =======> Progress Bar <====== */}

      <div className="items-center justify-center gap-[79px] lg:flex hidden">
        {/* ====> Progress div <==== */}
        <div className="relative">
          <div className="border-4 border-gray-300 w-[300px] rounded-full">
            <div
              className="border-4 border-[#2498E2] rounded-full"
              style={{
                width: `${
                  ((activeIndex + 1) /
                    swiperRef?.current?.swiper?.slides?.length) *
                  500
                }px`, // Dynamic width based on active slide
                transition: "width 0.3s ease",
                position: "absolute",
                top: 0,
                left: 0,
              }}
            />
          </div>
        </div>
        <div className="flex items-center gap-[32px]">
          <button onClick={goToPrevSlide} disabled={activeIndex === 0}>
            <img className="-rotate-[135deg]" src={arrow} alt="Previous" />
          </button>
          <button
            onClick={goToNextSlide}
            className="h-[35px] w-[35px] rounded-full bg-[#2498E2] flex items-center justify-center"
            disabled={
              activeIndex === swiperRef?.current?.swiper?.slides?.length - 1
            }
          >
            <img className="w-[25px] rotate-180" src={leftArrow} alt="Next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Innovations;
