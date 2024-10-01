import React, { useEffect, useState } from "react";
import arrow from "../../assets/svg/pointi-right-arrow.svg";
import blog_img_1 from "../../assets/images/blog-img (1).png";
import blog_img_2 from "../../assets/images/blog-img (2).png";
import blog_img_3 from "../../assets/images/blog-img (3).png";
import blog_img_4 from "../../assets/images/blog-img (4).png";
import BlogCard from "../../components/homePage/BlogCard";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { get } from "../../api/axious";

const Blogs = () => {
  const [allBlogData, setAllBlogData] = useState([]);

  // ======> Get all blog <=======//
  useEffect(() => {
    handleGetAllBlog();
  }, []);

  const handleGetAllBlog = async () => {
    try {
      const response = await get("api/blog/all");
      console.log(response, "response");
      if (response?.data) {
        setAllBlogData(response?.data);
      }
    } catch (error) {
      console.log("Error creating app:", error);
    }
  };

  return (
    <>
      <div className="py-0 sm:py-10 bg-[#F5F5F5]">
        <div className="my-0 sm:my-10 w-full max-w-[1280px] px-0 md:px-10 mx-auto">
          <h4 className="font-Baloo text-[#1D5276] text-xl sm:text-9xl leading-[28px] font-[600] text-center hidden sm:block">
            ব্লগ সমূহ
          </h4>

          <div className="bg-gradient-to-b from-[#D0FFE9] to-[#ADEAFF] mt-0 sm:mt-10 px-5 sm:px-10 py-10 overflow-hidden mentor_box rounded-[0px] sm:rounded-[30px]">
            <h4 className="font-Baloo text-[#1D5276] text-9xl leading-[28px] font-[600] text-center block sm:hidden mb-10">
              ব্লগ সমূহ
            </h4>
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={15}
              className="mySwipe w-full"
            >
              <div className="flex gap-10 overflow-hidden">
                {allBlogData?.length > 0 &&
                  allBlogData?.map((item, i) => (
                    <SwiperSlide className="max-w-[300px]">
                      {" "}
                      <BlogCard key={i} data={item} />{" "}
                    </SwiperSlide>
                  ))}
              </div>
            </Swiper>
            <div className="flex justify-center  my-8 ">
              <Link to="/blog" >
                <button
                  type="button"
                  className="font-Baloo text-white bg-secandary_color flex items-center justify-center py-[10px] px-5  gap-2 rounded-md"
                >
                  সকল ব্লগ <img alt="icon" src={arrow} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
