import React, { useEffect, useState } from "react";
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
import { get } from "../../../api/axios";

const DiscoverMore = () => {
  const [allCardData, setAllCardData] = useState([]);

  // ========> Handle get Best Selling data <=======//
  useEffect(() => {
    handleGetCardData();
  }, []);

  const handleGetCardData = async () => {
    try {
      const res = await get(`/api/cards?populate=image`);
      console.log(res);
      setAllCardData(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="lg:mt-[120px] mt-[32px] mb-[32px]  lg:mb-[120px]">
      <div className="lg:mb-[48px] mb-[24px] flex items-center justify-between">
        <h2 className="lg:text-[48px] text-[24px] font-[700] lg:leading-[57px] text-[#141414] font-avenir ">
          Discover More
        </h2>
        <button className="bg-[#2498E2] lg:block md:block hidden text-white py-[16px] px-[24px] font-[500] rounded-[8px]">
          View more
        </button>

        <button className="lg:hidden md:hidden block text-[#2498E2] py-[16px] px-[24px] font-[500] rounded-[8px]">
          View more
        </button>
      </div>

      <Swiper
        className="mySwiper"
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          768: {
            // For medium screens (lg)
            slidesPerView: 2,
          },
          1024: {
            // For large screens
            slidesPerView: 3,
          },
        }}
      >
        {allCardData?.length > 0 &&
          allCardData?.map((item, i) => (
            <SwiperSlide style={{ width: "345px" }}>
              <ViewCard key={i} data={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default DiscoverMore;
