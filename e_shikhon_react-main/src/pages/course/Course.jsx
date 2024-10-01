import React, { useContext, useEffect, useState } from "react";
import { Filter } from "../../assets/icon/Filter";
import { YellowStar } from "../../assets/icon/YellowStar";
import { CircleUser } from "../../assets/icon/CircleUser";
import { GroupUser } from "../../assets/icon/GroupUser";
import home from "../../assets/svg/home_icon.svg";
import arrow_right from "../../assets/svg/right_gray_icon.svg";
import CheckBox from "../../components/checkbox/CheckBox";
import arrow from "../../assets/svg/arrow-right-btn.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { get, post } from "../../api/axious";
import Wrapper from "../../components/sheared/Wrapper";
import { FiSearch } from "react-icons/fi";
import { FaMinus } from "react-icons/fa6";

import { AuthContext } from "../../layout/MainLayout";
import SuggLoading from "../../components/Common/SuggLoading";
import { URL } from "../../constants/Url";
import { course_filter_data, scrollToTop } from "../../api/helper";
import FilterSidebar from "../../components/sheared/FilterSidebar";
const API_NAME = import.meta.env.VITE_API_NAME;
const condition = API_NAME === "live";
import layer from "../../assets/svg/layer.svg";
import CourseSkeletonCard from "../../components/sheared/allSkeleton/CourseSkeletonCard";
import infiniteScrollFn from "../../utils/infiniteScrollFn";
const Course = () => {
  const [loading, setLoading] = useState(false);
  const [percentage, setPercentage] = useState(50);
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [allCourse, setAllCourse] = useState([]);
  const { pathname } = useLocation();

  // const { user } = useContext(AuthContext);
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

  return (
    <>
      {pathname === "/course" && (
        <>
          <div className=" mx-auto mt-10">
            <Wrapper>
              <div className=" flex items-center">
                <img src={home} alt="icon" className="mx-2 mb-1" />
                <p
                  onClick={() => navigate("/")}
                  className="text-primary_color font-[500] cursor-pointer"
                >
                  হোম
                </p>
                <img src={arrow_right} alt="icon" />
                <p className="text-[#9096A2]">কোর্সসমূহ</p>
              </div>
            </Wrapper>
          </div>
          <div className="max-w-[1200px] mx-auto mt-5 border border-[#C7CAD1] rounded flex items-center justify-between px-3 py-2 bg-[#FFF]">
            <div>
              <span className="text_blue text-[16px] font-[500]">
                সকল কোর্সসমূহ
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text_blue text-[16px] font-[400]">
                ক্রমানুসারে
              </span>
              <div>
                <select className="mt-1.5 w-full rounded border-gray-300 text-gray-700 sm:text-sm bg-[#F1F2F3] p-2">
                  <option value="">ডিফল্ট</option>
                  <option value="JM">ক্রমানু ক্রমানুসারে</option>
                  <option value="SRV">ডিফল্ট ক্রমানুসারে</option>
                  <option value="JH">ক্রমানুসারে ক্রমানুসারে</option>
                  <option value="JH">ক্রমানুসারে ক্রমানুসারে</option>
                </select>
              </div>
            </div>
          </div>
        </>
      )}

      {/* class section */}

      <div className="max-w-[1200px] mx-auto">
        {pathname === "/onlineBatch" && (
          <div className="flex flex-row gap-3 pt-14">
            <img src={layer} alt="" />
            <h1 className="font-[600] text-[28px] text-[#374151]  leading-[36px] ">
              অনলাইন ব্যাচ সমূহ
            </h1>
          </div>
        )}

        <div className="w-full mx-auto mt-6 flex gap-5">
          {/* left side */}
          <FilterSidebar
            allCourseUrl={"/api/courses/all"}
            setAllCourse={setAllCourse}
            loading={loading}
            setLoading={setLoading}
            filterName={pathname === "/course" ? "/course" : pathname}
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

          {/* right side */}

          <div className="w-full bg-[#FFFFFF] rounded-lg">
            <div className="w-[100%] lg:ps-7 lg:pe-7 lg:pt-0 p-2">
              {loading ? (
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 pt-5">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, i) => (
                    <CourseSkeletonCard key={i} btn={true} />
                  ))}
                </div>
              ) : !loading && allCourse?.length === 0 ? (
                <div className="h-[300px] w-full flex items-center justify-center">
                  <h2 className="text-[25px] font-semibold">No Data Found !</h2>
                </div>
              ) : (
                <div>
                  <div className="md:w-[100%] md:mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                    {allCourse?.map((data, i) => (
                      <div
                        key={data.id} // Using unique identifier
                        onClick={() => navigate(`/courseDetails/${data?.id}`)}
                        className="w-[100%] cursor-pointer overflow-hidden rounded-md bg-[#0A1D29] mt-5"
                      >
                        <figure>
                          <img
                            src={`${BASE_URL}${data?.thumbLinePicPath?.path}`}
                            alt="class image"
                            className="aspect-video w-full"
                          />
                        </figure>
                        <div className="p-3">
                          <header className="mt-1">
                            <h3 className="text-[18px] font-[600] text-[#FFF]">
                              {data?.courseTitle?.length > 24
                                ? data?.courseTitle?.slice(0, 24) + "..."
                                : data?.courseTitle}
                            </h3>
                          </header>
                          <div className="flex items-center justify-between mt-1">
                            <div className="flex items-center gap-1">
                              <CircleUser />
                              <span className="text-[#FFF] text-[14px] font-[400]">
                                {data?.creator_data?.fullName}
                                {data?.instructor[0]?.instructor?.fullName}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <YellowStar />
                              <span className="text-[#FFF] text-[14px] font-[400] mt-[4px]">
                                {data?.averageRating
                                  ? data?.averageRating.toString().slice(0, 3)
                                  : 0}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between mt-1">
                            <div className="flex items-center gap-2">
                              <span className="text-[#9096A2] text-[16px] font-[500]">
                                ৳ <strike>{data?.regularPrice}</strike>
                              </span>
                              <span className="text-[#53DFC3] text-[16px] font-[500]">
                                ৳ {data?.sellPrice}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <GroupUser />
                              <span className="text-[#FFF] text-[12px] font-[400]">
                                {data?.totalEnrolledStudents}+
                              </span>
                            </div>
                          </div>
                          {data?.enrolled ? (
                            <div className="pt-4 flex flex-row items-center gap-3 w-full">
                              <span className="block rounded-full bg-[#E3E5E8] w-full">
                                <span
                                  className="block h-4 rounded-full bg-[#20AC90] text-center text-[10px]/4 w-24"
                                  style={{ width: `${percentage}%` }}
                                ></span>
                              </span>
                              <h2 className="text-white">{`${percentage}%`}</h2>
                            </div>
                          ) : (
                            <Link to={`/courseDetails/${data?.id}`}>
                              <button
                                type="button"
                                className="w-full text-sm font-[500] leading-[21px] text-white bg-secandary_color flex items-center justify-center py-[10px] px-5 gap-2 rounded-md mt-2"
                              >
                                এনরোল করুন <img alt="icon" src={arrow} />
                              </button>
                            </Link>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  {loading && (
                    <span className="text-xl font-bold text-center ">
                      Loading data...
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
