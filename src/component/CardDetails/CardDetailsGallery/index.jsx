import React, { useRef, useState } from "react";
import card_image1 from "../../../../public/card/image8.png";
import card_image2 from "../../../../public/card/image9.png";
import card_image3 from "../../../../public/card/image10.png";
import { Swiper, SwiperSlide } from "swiper/react";
import arrow_image from "../../../../public/svg/ArrowImage.svg";
import banner_img from "../../../../public/images/cardDetails.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Pagination } from "swiper/modules";

const CardDetailsGallery = () => {
  const swiperRef = useRef(null); // Reference to the Swiper instance
  const [activeIndex, setActiveIndex] = useState(0); // State to track the active slide index

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex); // Update active index on slide change
  };

  return (
    <div id="Gallery" className="mt-[32px] lg:mt-[64px] mb-[24px]">
      <h2 className="lg:text-[32px] text-[24px] font-[700] lg:leading-[38px] text-[#141414] font-avenir mb-[24px]">
        Gallery
      </h2>

      {/*=====> Card Slider in Pc device  <====== */}
      <div className="hidden lg:block">
        <Swiper
          ref={swiperRef} // Attach the reference to Swiper
          onSlideChange={handleSlideChange} // Handle slide change
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex gap-[32px] lg:h-[556px] w-full">
              {/* ======> Left side <====== */}
              <div className="h-full w-full lg:w-[65%] rounded-[15px]">
                <img
                  className="w-full h-full rounded-[15px]"
                  src={card_image1}
                  alt="image 1"
                />
              </div>
              {/* ======> Right side <====== */}
              <div className="w-full lg:w-[35%] h-full">
                <div className="h-[262px]">
                  <img
                    className="w-full h-full rounded-[15px]"
                    src={card_image2}
                    alt="image 2"
                  />
                </div>
                <div className="h-[262px]">
                  <img
                    className="w-full h-full rounded-[15px] mt-[32px]"
                    src={card_image3}
                    alt="image 3"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex gap-[32px] lg:h-[556px] w-full">
              {/* ======> Left side <====== */}
              <div className="h-full w-full lg:w-[65%] rounded-[15px]">
                <img
                  className="w-full h-full rounded-[15px]"
                  src={card_image1}
                  alt="image 1"
                />
              </div>
              {/* ======> Right side <====== */}
              <div className="w-full lg:w-[35%] h-full">
                <div className="h-[262px]">
                  <img
                    className="w-full h-full rounded-[15px]"
                    src={card_image2}
                    alt="image 2"
                  />
                </div>
                <div className="h-[262px]">
                  <img
                    className="w-full h-full rounded-[15px] mt-[32px]"
                    src={card_image3}
                    alt="image 3"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex gap-[32px] lg:h-[556px] w-full">
              {/* ======> Left side <====== */}
              <div className="h-full w-full lg:w-[65%] rounded-[15px]">
                <img
                  className="w-full h-full rounded-[15px]"
                  src={card_image1}
                  alt="image 1"
                />
              </div>
              {/* ======> Right side <====== */}
              <div className="w-full lg:w-[35%] h-full">
                <div className="h-[262px]">
                  <img
                    className="w-full h-full rounded-[15px]"
                    src={card_image2}
                    alt="image 2"
                  />
                </div>
                <div className="h-[262px]">
                  <img
                    className="w-full h-full rounded-[15px] mt-[32px]"
                    src={card_image3}
                    alt="image 3"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex gap-[32px] lg:h-[556px] w-full">
              {/* ======> Left side <====== */}
              <div className="h-full w-full lg:w-[65%] rounded-[15px]">
                <img
                  className="w-full h-full rounded-[15px]"
                  src={card_image1}
                  alt="image 1"
                />
              </div>
              {/* ======> Right side <====== */}
              <div className="w-full lg:w-[35%] h-full">
                <div className="h-[262px]">
                  <img
                    className="w-full h-full rounded-[15px]"
                    src={card_image2}
                    alt="image 2"
                  />
                </div>
                <div className="h-[262px]">
                  <img
                    className="w-full h-full rounded-[15px] mt-[32px]"
                    src={card_image3}
                    alt="image 3"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex gap-[32px] lg:h-[556px] w-full">
              {/* ======> Left side <====== */}
              <div className="h-full w-full lg:w-[65%] rounded-[15px]">
                <img
                  className="w-full h-full rounded-[15px]"
                  src={card_image1}
                  alt="image 1"
                />
              </div>
              {/* ======> Right side <====== */}
              <div className="w-full lg:w-[35%] h-full">
                <div className="h-[262px]">
                  <img
                    className="w-full h-full rounded-[15px]"
                    src={card_image2}
                    alt="image 2"
                  />
                </div>
                <div className="h-[262px]">
                  <img
                    className="w-full h-full rounded-[15px] mt-[32px]"
                    src={card_image3}
                    alt="image 3"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Add more SwiperSlide components as needed */}
        </Swiper>

        {/* Arrow Buttons for Navigation */}
        <div className="flex items-center justify-between lg:mt-[48px]">
          <button onClick={() => swiperRef.current.swiper.slidePrev()}>
            <img className="rotate-180" src={arrow_image} alt="Previous" />
          </button>

          {/* Custom Pagination Indicators */}
          <div className="flex gap-[16px] items-center lg:mt-[48px] ">
            {[...Array(5)].map(
              (
                _,
                index // Assuming 2 slides, adjust based on actual number of slides
              ) => (
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
          <button onClick={() => swiperRef.current.swiper.slideNext()}>
            <img src={arrow_image} alt="Next" />
          </button>
        </div>
      </div>

      {/* ======> Card Slider in Mobile and Tab Device <======= */}
      <div className="block lg:hidden">
        <Swiper
          pagination={{ clickable: true }} // Enable clickable pagination
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="rounded-[15px]">
            <div className="relative h-[286px]  md:h-[594px]  w-full">
              <img
                className=" h-full rounded-[15px]  w-full"
                src={banner_img}
                alt="Mobile Banner 1"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-[15px]">
            <div className="relative h-[286px]  md:h-[594px]  w-full">
              <img
                className=" h-full rounded-[15px]  w-full"
                src={banner_img}
                alt="Mobile Banner 1"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CardDetailsGallery;
