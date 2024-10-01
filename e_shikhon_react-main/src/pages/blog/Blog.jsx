const BASE_URL = import.meta.env.VITE_BASE_URL;
import React, { useEffect, useState } from "react";
import Wrapper from "../../components/sheared/Wrapper";
import home from "../../assets/svg/home_icon.svg";
import arrow from "../../assets/svg/right_gray_icon.svg";
import newspaper from "../../assets/svg/newspaper.svg";
import calender_black from "../../assets/svg/calendar_black.svg";
import right_arrow from "../../assets/svg/right-arrow.svg";
import user_circle_black from "../../assets/svg/user_circle_black.svg";
import blog_banner from "../../assets/images/blog-img (2).png";
import blog_1 from "../../assets/class_banner/blog-1.png";
import blog_2 from "../../assets/class_banner/blog-2.png";
import blog_3 from "../../assets/class_banner/blog-3.png";
import blog from "../../assets/images/blog-img (1).png";
import BlogCard from "../../components/sheared/blog/BlogCard";
import CourseCardTow from "../../components/sheared/courseCard/CourseCardTow";
import course_img_1 from "../../assets/images/course-img (1).png";
import course_img_2 from "../../assets/images/course-img (2).png";
import course_img_4 from "../../assets/images/course-img (4).png";
import course_img_2d_cartoon from "../../assets/images/2D_cartoon.png";
import course_img_android from "../../assets/images/androded.png";
import layer from "../../assets/svg/layer.svg";
import newspaper_variant from "../../assets/svg/newspaper-variant-multiple-outline.svg";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../api/helper";
import { get, post } from "../../api/axious";
import SuggLoading from "../../components/Common/SuggLoading";

const Blog = () => {
    scrollToTop();
  const [loading, setLoading] = useState(false);
  const [blogLoading, setBlogLoading] = useState(false);
  const [allCategoryData, setAllCategoryData] = useState([]);
  const [categoryName, setCategoryName] = useState("All Blog");
  const [allBlogData, setAllBlogData] = useState([]);
  const [allCourseData, setAllCourseData] = useState([]);
  const [allPopularBlogData, setAllPopularBlogData] = useState([]);
  const [category, setCategory] = useState();

  // =======> Get popular blog <========//
  useEffect(() => {
    handleGetPopularBlog();
  }, []);

  const handleGetPopularBlog = async () => {
    setLoading(true);
    try {
      const response = await get(`/api/blog/popular_blogs`);
      if (response?.success) {
        setLoading(false);
        setAllPopularBlogData(response.data);
      }
    } catch (error) {
      setLoading(false);
      console.error("Error creating app:", error);
    } finally {
      setLoading(false);
    }
  };

  // ========> Get all Category <=========//
  useEffect(() => {
    handleGetAllCategory();
  }, []);

  const handleGetAllCategory = async () => {
    try {
      const res = await get("api/blog_category");
      console.log(res);
      if (res?.success) {
        setAllCategoryData(res?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // ======> Get all blog <=======//
  useEffect(() => {
    handleGetAllBlog(categoryName);
  }, [categoryName]);

  const handleGetAllBlog = async (categoryName) => {
    let url;
    if (!categoryName || categoryName === "All Blog") {
      url = "api/blog/all";
    } else {
      url = `/api/blog/all?category=${categoryName}`;
    }

    setBlogLoading(true);
    try {
      const response = await get(url);
      console.log(response, "response");
      if (response?.data) {
        setAllBlogData(response?.data);
        setBlogLoading(false);
      }
    } catch (error) {
      console.log("Error creating app:", error);
      setBlogLoading(false);
    }
  };

  // =======> Get all course <========//
  useEffect(() => {
    getAllCourse();
  }, []);

  const getAllCourse = async () => {
    setLoading(true);
    try {
      const response = await post(`/api/courses/all`);
      if (response?.success) {
        setLoading(false);
        setAllCourseData(response.data);
      }
    } catch (error) {
      setLoading(false);
      console.error("Error creating app:", error);
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {handleGetBlog(); }, [])

  // const handleGetBlog =async () => {
  //   try {
  //     const res = await get()
  //     console.log(res);

  //   } catch (error) {
  //     console.log(error);

  //   }
  // }

  return (
    <div className="py-10 bg-[#F5F5F5]">
      <Wrapper>
        {/* brandi */}
        <div className="mb-5 flex items-center">
          <img src={home} alt="icon" className="mx-2 mb-1" />
          <Link to="/">
            <p className="text-primary_color font-[500]">হোম</p>
          </Link>
          <img src={arrow} alt="icon" />
          <p className="text-[#9096A2]">ব্লগ</p>
        </div>
      </Wrapper>
      {/* =======> Popular blog <======= */}
      <div className="py-10 bg-[#F4FBFF]">
        <Wrapper>
          <div className="mx-0 md:mx-28 lg:mx-0 ">
            <div className="flex items-center gap-2.5 mb-2.5 ">
              <img alt="icon" src={newspaper} />
              <p className="text-[#5D636F] text-xl sm:text-5xl font-[600] leading-[28px] sm:leading-[36px]">
                পপুলার ব্লগ সমূহ
              </p>
            </div>
            {/*  */}
            <div className="grid grid-cols-1 lg:grid-cols-2 py-10 gap-10">
              {/* left side */}
              <Link to={`/blogDetails/${allPopularBlogData[0]?.id}`}>
                <div className="overflow-hidden rounded-[24px] bg-white ">
                  {/*  <!--  Image --> */}
                  <figure>
                    <img
                      src={`${BASE_URL}${allPopularBlogData[0]?.photo?.path}`}
                      alt="card image"
                      className="aspect-video w-full rounded-t-[24px]"
                    />
                  </figure>
                  {/*  <!-- Body--> */}
                  <div className="pt-5 pb-6 ps-5 pr-5">
                    <header className="">
                      <h3 className="text-[28px] font-[700] leading-[36px] text-[#2E3138]">
                        {allPopularBlogData[0]?.title}
                      </h3>
                      <p className="text-[16px] font-[400] leading-[18px] text-[#5D636F]">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: allPopularBlogData[0]?.description?.slice(
                              0,
                              250
                            ),
                          }}
                        ></div>
                      </p>
                    </header>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2">
                        <img src={user_circle_black} alt="icon" />
                        <h5> {allPopularBlogData[0]?.author_info?.fullName}</h5>
                      </div>
                      <div className="flex items-center gap-2">
                        <img src={calender_black} alt="icon" />
                        <h5>{allPopularBlogData[0]?.date}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              {/* right  */}
              <div className="flex flex-col gap-10 px-5 lg:px-0">
                {allPopularBlogData?.length > 0 &&
                  allPopularBlogData?.slice(0, 3)?.map((item, i) => (
                    <Link to={`/blogDetails/${item?.id}`}>
                      <div className="flex flex-col md:flex-row overflow-hidden bg-white rounded-[12px] items-center gap-2.5 lg:gap-0">
                        {/*  <!-- Image --> */}
                        <div className="w-[300px] h-[130px] ">
                          <img
                            src={`${BASE_URL}${item?.photo?.path}`}
                            alt="card image"
                            className="w-full h-full"
                          />
                        </div>

                        <div className="flex md:flex-row mx-3 lg:mx-8 pb-4 lg:pb-0 w-full">
                          <div className="flex flex-col gap-2.5">
                            <header className="">
                              <h3 className="text-[#2E3138] text-[16px] font-[700] leading-[24px]">
                                {item?.title}
                              </h3>
                            </header>
                            <p className="text-[#464A53] text-[14px] font-[400] leading-[18px]">
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: item?.description?.slice(0, 140),
                                }}
                              ></div>
                            </p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <img src={user_circle_black} alt="icon" />
                                <h5 className="text-[#2E3138] text-[14px] font-[400] leading-[18px]">
                                  {item?.author_info?.fullName}
                                </h5>
                              </div>
                              <div className="flex items-center gap-2">
                                <img src={calender_black} alt="icon" />
                                <h5 className="text-[#2E3138] text-[14px] font-[400] leading-[18px]">
                                  {item?.date}
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
      {/* =======> Category <====== */}
      <div className="py-10 ">
        <Wrapper>
          <div>
            <div className="mb-10">
              <div className="flex items-center gap-2.5 mb-6 ">
                <img alt="icon" src={newspaper_variant} />
                <p className="text-[#5D636F] text-xl sm:text-5xl font-[600] leading-[28px] sm:leading-[36px]">
                  Categories
                </p>
              </div>
              <div className="flex flex-wrap gap-5">
                <button
                  onClick={() => setCategoryName("All Blog")}
                  type="button"
                  className={`text-center font-Baloo ${
                    categoryName === "All Blog"
                      ? "text-[#20AC90] bg-[#D4F7F0]"
                      : "text-[#2E3138] bg-[#FFF]"
                  }  flex items-center justify-center py-[10px] px-5  gap-2 rounded-[50px]`}
                >
                  All Blog
                </button>

                {allCategoryData?.length > 0 &&
                  allCategoryData?.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => setCategoryName(item?.id)}
                      type="button"
                      className={`text-center font-Baloo ${
                        categoryName === item?.id
                          ? "text-[#20AC90] bg-[#D4F7F0]"
                          : "text-[#2E3138] bg-[#FFF]"
                      }  flex items-center justify-center py-[10px] px-5  gap-2 rounded-[50px]`}
                    >
                      {item?.category}
                    </button>
                  ))}
              </div>
            </div>
            <div>
              <div className="">
                <div className="flex items-center gap-2.5 mb-6 ">
                  <img alt="icon" src={newspaper} />
                  <p className="text-[#5D636F] text-xl sm:text-5xl font-[600] leading-[28px] sm:leading-[36px]">
                    ব্লগ সমূহ
                  </p>
                </div>
                {blogLoading ? (
                  <div className="w-full flex items-center justify-center">
                    {" "}
                    <SuggLoading />{" "}
                  </div>
                ) : (
                  <>
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 overflow-hidden mb-10 gap-5 mx-auto w-full">
                      {allBlogData?.length > 0 &&
                        allBlogData?.map((item, i) => (
                          <BlogCard key={i} data={item} />
                        ))}
                    </div>
                    <div className="flex justify-center items-center ">
                      <button
                        type="button"
                        className="bg-[#20AC90] font-Baloo flex items-center justify-center py-[10px] px-5  gap-2 rounded-[8px] text-[#FFF]"
                      >
                        সব ব্লগ <img alt="icon" src={right_arrow} />
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
      {/* =======> course <======= */}
      <div className="py-20 bg-[#FFF] ">
        <Wrapper>
          <div>
            <div>
              <div className="">
                <div className="flex  items-center gap-2.5 mb-2.5 ">
                  <img alt="icon" src={layer} />
                  <p className="text-[#5D636F] text-xl sm:text-5xl font-[600] leading-[28px] sm:leading-[36px]">
                    কোর্স সমূহ
                  </p>
                </div>
                {/* <div className="flex flex-col lg:flex-row flex-wrap gap-4 justify-between overflow-hidden mb-7"> */}
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 overflow-hidden mb-10 gap-5 mx-auto w-full">
                  {allCourseData?.length > 0 &&
                    allCourseData
                      ?.slice(0, 8)
                      ?.map((item, i) => (
                        <CourseCardTow
                          id={item?.id}
                          img={`${BASE_URL}${item?.thumbLinePicPath?.path}`}
                          title={`${item?.courseTitle?.slice(0, 25)}...`}
                          instructor={item?.instructor[0]?.instructor?.fullName}
                          rating={`${(item?.averageRating + "").slice(0, 3)}`}
                          price={item?.regularPrice}
                          discountPrice={item?.sellPrice}
                          enrolled={item?.totalEnrolledStudents}
                        />
                      ))}
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default Blog;
