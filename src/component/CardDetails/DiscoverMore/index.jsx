import React from "react";
import ViewCard from "../../ViewCard";
import view_img1 from "../../../../public/card/image3.png";
import view_img2 from "../../../../public/card/image4.png";
import view_img3 from "../../../../public/card/image5.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const DiscoverMore = () => {
  return (
    <div className="lg:mt-[120px] mt-[32px] mb-[32px]  lg:mb-[120px]">
      <div className="lg:mb-[48px] mb-[24px] flex items-center justify-between">
        <h2 className="lg:text-[48px] text-[24px] font-[700] lg:leading-[57px] text-[#141414] font-avenir ">
          Discover More
        </h2>
        <button className="bg-[#2498E2] lg:block hidden text-white py-[16px] px-[24px] font-[500] rounded-[8px]">
          View more
        </button>

        <button className="lg:hidden block text-[#2498E2] py-[16px] px-[24px] font-[500] rounded-[8px]">
          View more
        </button>
      </div>

      <Swiper className="mySwiper" spaceBetween={20} slidesPerView={"auto"}>
        <SwiperSlide style={{ width: "345px" }}>
          <ViewCard
            title={"Toyota Crown Signia"}
            description={
              "These are the vehicles that have captured the hearts of drivers everywhere. Explore our top-selling models"
            }
            image={view_img2}
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: "345px" }}>
          <ViewCard
            title={"Toyota Crown Signia"}
            description={
              "These are the vehicles that have captured the hearts of drivers everywhere. Explore our top-selling models"
            }
            image={view_img3}
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: "345px" }}>
          <ViewCard
            title={"Toyota Crown Signia"}
            description={
              "These are the vehicles that have captured the hearts of drivers everywhere. Explore our top-selling models"
            }
            image={view_img2}
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: "345px" }}>
          <ViewCard
            title={"Toyota Crown Signia"}
            description={
              "These are the vehicles that have captured the hearts of drivers everywhere. Explore our top-selling models"
            }
            image={view_img3}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default DiscoverMore;
