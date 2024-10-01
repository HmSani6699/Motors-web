import React, { useEffect, useState } from "react";
import Wrapper from "../../components/sheared/Wrapper";
import home from "../../assets/svg/home_icon.svg";
import arrow from "../../assets/svg/right_gray_icon.svg";
import layer from "../../assets/svg/layer.svg";
import UpComingBatchCard from "../../components/sheared/courseCard/UpComingBatchCard";
import { scrollToTop } from "../../api/helper";
import FilterSidebar from "../../components/sheared/FilterSidebar";
import { useNavigate } from "react-router-dom";
import infiniteScrollFn from "../../utils/infiniteScrollFn";

const UpComingBatchPage = () => {
  const [loading, setLoading] = useState(false);
  const [percentage, setPercentage] = useState(50);
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [allCourse, setAllCourse] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    scrollToTop();
  }, []);

  const [page, setPage] = useState(1);
  const [newPage, setNewPage] = useState(1);
  const [check, setCheck] = useState(false);
  const [totalCourses, setTotalCourses] = useState(0);
  //! re-usable infinite scroll
  infiniteScrollFn(
    check ? newPage : page,
    check ? setNewPage : setPage,
    totalCourses,
    12
  );

  
  const allBatchesData = allCourse?.batch_data?.reduce((acc, course) => {
    const {
      averageRating,
      sellPrice,
      regularPrice = null,
      thumbLinePicPath = null,
      batches,
      instructor,
      courseTitle,
    } = course;

    // Map through batches to include additional course info in each batch
    const updatedBatches = batches.map((batch) => ({
      ...batch,
      averageRating,
      sellPrice,
      regularPrice,
      thumbLinePicPath,
      courseTitle,
      instructor: instructor?.[0]?.instructor?.fullName,
    }));

    return acc.concat(updatedBatches);
  }, []);
  return (
    <>
      <div className="py-6 bg-[#F5F5F5]">
        <Wrapper>
          <div className=" flex items-center">
            <img src={home} alt="icon" className="mx-2 mb-1" />
            <p className="text-primary_color font-[500]">হোম</p>
            <img src={arrow} alt="icon" />
            <p className="text-[#9096A2]">আপকামিং ব্যাচ</p>
          </div>
        </Wrapper>
      </div>
      <div>
        <div className="contact_us_bg bg-[#F4FBFF] ">
          <Wrapper>
            <div>
              <div className="py-14 flex flex-col gap-3 text-center">
                <div className="w-[100px] py-[6px] bg-[#ADD2EB] rounded-[5px] mx-auto mb-5">
                  <h1 className="text-[#1D5276] text-[18px] font-[600]">
                   {allCourse?.current_total_batch_count || 40} টি কোর্স
                  </h1>
                </div>
                <h1 className="text-[#2E3138] text-[21px] md:text-[24px] lg:text-[40px] font-[600] lg:font-[700] leading-[28px] md:leading-[36px] text-center ">
                  আপকামিং ব্যাচ
                </h1>
                <p className="text-[#5D636F] text-[14px] lg:text-[16px] font-[400] lg:font-[500] leading-[18px] md:leading-[22px] w-[327px] md:w-[580px] lg:w-[752px] mx-auto">
                  সবার থেকে এগিয়ে থাকতে আপকামিং ব্যাচে জয়েন করুন এখনই।
                </p>
              </div>
            </div>
          </Wrapper>
        </div>
      </div>
      <div className="py-14">
        <Wrapper>
          <div className="bg-[#FFFFFF] p-10 rounded-[40px]">
            <div className="flex flex-row gap-3 pb-8">
              <img src={layer} alt="" />
              <h1 className="font-[600] text-[28px] text-[#374151]  leading-[36px] ">
                আপকামিং ব্যাচ সমূহ
              </h1>
            </div>
            <div className="flex justify-between ">
              <div className="w-[285px] hidden lg:flex">
                <div className="w-[285px] overflow-hidden rounded-lg bg-white">
                  {/* top content */}
                  {/* left side */}
                  <FilterSidebar
                    allCourseUrl={"/api/courses/upComingBatch"}
                    setAllCourse={setAllCourse}
                    loading={loading}
                    setLoading={setLoading}
                    filterName={"/upComingBatch"}

                    // using paginate info
                    allCourse={allCourse}
                    setTotalCourses={setTotalCourses}
                    page={page}
                    setPage={setPage}
                    newPage={newPage}
                    setNewPage={setNewPage}
                    setCheck={setCheck}
                    check={check}
                  />
                  {/* left side end */}
                </div>
              </div>

              <div className="w-full ml-5">
                <div className="md:w-[100%] md:mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-20">
                {allBatchesData?.length ? (
                    allBatchesData?.map((item) => (
                      <UpComingBatchCard item={item} />
                    ))
                  ) : (
                    <span className="text-center font-bold text-lg">
                      There is no data available 😥
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default UpComingBatchPage;
