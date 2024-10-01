import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import card_image1 from "../../../public/card/image1.png";
import ViewCard from "../../component/ViewCard";
import prov from "../../../public/svg/Prev.svg";
import next from "../../../public/svg/Next.svg";
import more from "../../../public/svg/more.svg";
import Footer from "../Footer";
import Card from "../../component/Card";
import { get } from "../../api/axios";
import PageLoading from "../../component/LoadingSpinner/PageLoading";
import Pagination from "../../component/Pagination";

const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 9;

  // ========> Handle get Best Selling data <=======//
  useEffect(() => {
    handleGetAllBlogData(currentPage);
  }, [currentPage]);

  const handleGetAllBlogData = async (page) => {
    setLoading(true);
    try {
      const res = await get(
        `/api/blogs?populate=image&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
      );
      console.log(res);
      setBlogData(res?.data);
      setLoading(false);
      setTotalPages(Math.ceil(res?.meta?.pagination?.total / pageSize));

      // Scroll to top after fetching new data
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="">
      <Navbar />

      <div className="min-h-screen">
        {loading ? (
          <PageLoading />
        ) : (
          <div className="lg:pt-[150px] pt-[90px]  max-w-[1376px] mx-auto">
            <div className="lg:flex items-center">
              <h2 className="lg:text-[48px] font-[700] whitespace-nowrap mb-[16px] lg:mb-0 lg:leading-[57px] text-[#141414] text-center lg:text-left text-[24px] leading-[28px]">
                Checkout Our Blogs
              </h2>
              <p className="lg:text-[24px] font-[400] leading-[28px] lg:pl-[100px] text-center lg:text-left mb-[30px] lg:mb-0">
                Lorem ipsum dolor sit amet consectetur. Lacus vulputate
                tincidunt egestas venenatis viverra quis purus. Pulvinar id
                vestibulum velit aliquet.
              </p>
            </div>

            {/* ======> Gallery Div <====== */}
            <div className="lg:mt-[48px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[33px] lg:px-0 px-[20px]">
              {blogData?.length > 0 &&
                blogData?.map((item, i) => <Card data={item} />)}
            </div>

            {/* ======> Pagination <===== */}
            {/* <div className=" items-center gap-[30px] mt-[48px] lg:mb-[120px] md:mb-[64px] lg:flex md:flex hidden md:px-[24px]">
              <button>
                <img src={prov} alt="" />
              </button>
              <button className="bg-[#2498E2] text-white py-[6px] px-[12px] rounded-[6px]">
                1
              </button>
              <button>2</button>
              <button>3</button>
              <button>...</button>
              <button>10</button>
              <button>
                <img src={next} alt="" />
              </button>
            </div> */}
            <div className="lg:block hidden">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>

            {/* =======> Mobile pagination <====== */}
            <div className=" items-center justify-center lg:hidden md:hidden flex">
              <div className="flex flex-col items-center justify-center gap-[10px] mt-[40px] mb-[32px]">
                <h2>More</h2>
                <img src={more} alt="" />
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
