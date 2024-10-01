import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import arrow_icon from "../../../assets/svg/circle-arrow.svg";
import "swiper/css";
import ScrollBtn from "./Component/ScrollBtn";

const btnArray = [
  { title: "কোর্স সম্পর্কিত", path: "aboutCourse" },
  { title: "কারিকুলাম", path: "curriculum" },
  { title: "ইন্সট্রাক্টর", path: "instructor" },
  { title: "রিভিউ", path: "review" },
  { title: "পেমেন্ট", path: "payment" },
  { title: "হেল্প", path: "help" },
  { title: "কোর্স এক্টিভিটি", path: "activity", go: false },
  { title: "সব স্টুডেন্ট", path: "student", go: false },
];

const SwiperBtn = ({ scrollToSection }) => {
  const [selectedBtn, setSelectedBtn] = useState("aboutCourse");
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false); 
  
  const updateSlideStatus = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiperInstance = swiperRef.current.swiper;
      setIsBeginning(swiperInstance.isBeginning);
      setIsEnd(swiperInstance.isEnd);
    }
  };

  useEffect(() => {
    updateSlideStatus();
  }, []);

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <>
      <div id="sticky" className="relative z-20">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={15}
          className="mySwipe w-[88%] mx-auto"
          onSlideChange={updateSlideStatus}
          ref={swiperRef}
        >
          <div className="overflow-hidden w-[88%]">
            <div className="w-[88%] flex flex-wrap md:flex-nowrap md:flex-row items-center gap-3.5 flex-auto">
              {btnArray.map((data, i) => (
                <SwiperSlide key={i} className="max-w-fit">
                  <ScrollBtn
                    handleClick={() => {
                      setSelectedBtn(data.path);
                      scrollToSection(data.path);
                    }}
                    selectedBtn={selectedBtn}
                    selected={data.path}
                  >
                    {data.title}
                  </ScrollBtn>
                </SwiperSlide>
              ))}
            </div>
          </div>
        </Swiper>

        {/* Previous button */}
        <button
          className={`custom-prev p-1 rounded-full flex justify-center items-center absolute top-[0px] left-0 z-10 ${
            isBeginning ? "bg-[#ACB0B9]" : "bg-primary_color"
          }`}
          onClick={handlePrev}
        >
          <img
            alt="icon"
            src={arrow_icon}
            className="rotate-180 w-[24px] md:w-[32px]"
          />
        </button>

        {/* Next button */}
        <button
          className={`custom-next p-1 rounded-full flex justify-center items-center absolute top-[0px] right-0 z-10 ${
            isEnd ? "bg-[#ACB0B9]" : "bg-primary_color"
          }`}
          onClick={handleNext}
        >
          <img
            alt="icon"
            src={arrow_icon}
            className="w-[24px] md:w-[32px]"
          />
        </button>
      </div>
    </>
  );
};

export default SwiperBtn;
