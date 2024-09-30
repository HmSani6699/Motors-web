import React, { useEffect, useState } from "react";
import card_image1 from "../../../../public/card/image1.png";
import card_image2 from "../../../../public/card/image2.png";
import card_image3 from "../../../../public/card/image3.png";
import card_image4 from "../../../../public/card/image4.png";
import card_image5 from "../../../../public/card/image5.png";
import Card from "../../../component/Card";
import SubCard from "../../../component/SubCard";
import ViewCard from "../../../component/ViewCard";
const baseUrl = "http://localhost:1337";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { get } from "../../../api/axios";

const BestSelling = () => {
  const [bestSellingData, setBestSellingData] = useState([]);

  // ========> Handle get Best Selling data <=======//
  useEffect(() => {
    handleGetBestSellingData();
  }, []);

  const handleGetBestSellingData = async () => {
    try {
      const res = await get(`/api/cards?populate=image`);
      console.log(res);
      setBestSellingData(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(bestSellingData);

  return (
    <div className="max-w-[1376px] mx-auto md:mb-[64px] mb-[32px] lg:mb-[121px]">
      <div className="lg:flex mt-[50px] lg:mt-[90px] lg:mb-[50px] mx-[24px] lg:mx-0">
        <div className="lg:w-[40%]">
          <h2 className="lg:text-[48px] text-[24px]  text-center lg:text-left mb-[16px]  md:text-[32px] font-[700] text-[#141414] lg:leading-[57px] leading-[28px] ">
            Our Best-Selling <br className="hidden lg:block" /> Models
          </h2>
        </div>
        <div className="lg:w-[60%]">
          <p className="lg:text-[24px] text-[16px] font-[400] text-[#141414] lg:leading-[28px] leading-[24px] lg:pl-[50px] text-center lg:text-left">
            These are the vehicles that have captured the hearts of drivers
            everywhere. Explore our top-selling models and see what makes them
            stand out.
          </p>
        </div>
      </div>

      {/* =======> Short Gallery <===== */}
      <div className="lg:block hidden">
        <div className="flex  gap-[32px]">
          {/* =========> Left Site <======= */}
          <div className="w-[45%] ">
            <ViewCard
              value={"home"}
              data={bestSellingData?.length > 0 && bestSellingData[0]}
            />
          </div>
          {/* =========> Right Site <======= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px] w-[55%] ">
            {bestSellingData?.length > 0 &&
              bestSellingData?.slice(0, 4)?.map((item, i) => (
                <SwiperSlide>
                  <SubCard
                    key={i}
                    data={item}
                    image={card_image2}
                    title="Mercedes-Benz C-Class"
                  />
                </SwiperSlide>
              ))}
          </div>
        </div>
      </div>

      {/* ======> Mobile and Tab <======= */}
      <div className="lg:hidden pl-[24px]  lg:mt-[40px] mt-[24px]">
        <Swiper className="mySwiper" spaceBetween={20} slidesPerView={"auto"}>
          {bestSellingData?.length > 0 &&
            bestSellingData?.map((item, i) => (
              <SwiperSlide style={{ width: "345px" }}>
                <ViewCard key={i} data={item} image={card_image1} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BestSelling;
