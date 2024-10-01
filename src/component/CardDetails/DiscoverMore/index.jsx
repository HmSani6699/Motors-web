import React, { useEffect, useState } from "react";
import ViewCard from "../../ViewCard";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { get } from "../../../api/axios";
import { Link } from "react-router-dom";

const DiscoverMore = () => {
  const [allCardData, setAllCardData] = useState([]);

  // ========> Handle get Best Selling data <=======//
  useEffect(() => {
    handleGetCardData();
  }, []);

  const handleGetCardData = async () => {
    try {
      const res = await get(`/api/cars?populate=image`);
      console.log(res);
      setAllCardData(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="lg:mt-[120px] mt-[32px] mb-[32px]  lg:mb-[120px]">
      <div className="lg:mb-[48px] mb-[24px] flex items-center justify-between w-full ">
        <h2 className="lg:text-[48px] text-[24px] font-[700] lg:leading-[57px] text-[#141414] font-avenir ">
          Discover More
        </h2>

        <div>
          <Link to={"/stock"}>
            <button className="bg-[#2498E2] lg:block md:block hidden text-white py-[16px] px-[24px] font-[500] rounded-[8px]">
              View more
            </button>
          </Link>

          <Link to={"/stock"}>
            <button className="lg:hidden md:hidden block text-[#2498E2] py-[16px] px-[24px] font-[500] rounded-[8px]">
              View more
            </button>
          </Link>
        </div>
      </div>

      <Swiper
        className="mySwiper"
        spaceBetween={20}
        slidesPerView={1}
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
