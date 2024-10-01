const BASE_URL = import.meta.env.VITE_BASE_URL;
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import CheckBox from "../../components/checkbox/CheckBox";
import Wrapper from "../../components/sheared/Wrapper";
import home from "../../assets/svg/home_icon.svg";
import arrow from "../../assets/svg/right_gray_icon.svg";
import newspaper from "../../assets/svg/newspaper.svg";
import calender_black from "../../assets/svg/calendar_black.svg";
import right_arrow from "../../assets/svg/right-arrow.svg";
import user_circle_black from "../../assets/svg/user_circle_black.svg";
import searchIcon from "../../assets/svg/search.svg";
import { get, post } from "../../api/axious";
import { AuthContext } from "../../layout/MainLayout";
import toast, { Toaster } from "react-hot-toast";
import BlogCard from "../../components/sheared/blog/BlogCard";
import Suggestion from "../../components/Common/Suggestion";
import SuggLoading from "../../components/Common/SuggLoading";

const BlogList = () => {
  // scrollToTop();
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [blogData, setBlogData] = useState([]);
  const [allCategoryData, setAllCategoryData] = useState([]);
  const [allPopularBlogData, setAllPopularBlogData] = useState([]);
  const [allBlogData, setAllBlogData] = useState([]);
  const [blogTitle, setBlogTitle] = useState("");
  const [title, setTitle] = useState();
  const [blogTitleList, setBlogTitleList] = useState([]);
  const navigate = useNavigate();

  // ========> Get blog filter by Category <=========//
  useEffect(() => {
    if (!isNaN(id)) {
      handleSearchCategoryBlog(parseInt(id));
    }
  }, [id]);

  const handleSearchCategoryBlog = async (id) => {
    setLoading(true);
    try {
      const res = await get(`/api/blog/all?category=${id}`);
      console.log(res);
      if (res?.success) {
        setBlogData(res?.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  // ========> Get blog suggestion by title <=========//
  useEffect(() => {
    if (blogTitle) {
      handleSuggestionByBlogTitle(blogTitle);
    }
  }, [blogTitle]);

  const handleSuggestionByBlogTitle = async (blogTitle) => {
    // setLoading(true);
    try {
      const res = await get(`/api/blog/all?searchTerm=${blogTitle}`);
      console.log(res);
      if (res?.success) {
        setBlogTitleList(res?.data);
        // setLoading(false);
      }
    } catch (error) {
      console.log(error);
      //   setLoading(false);
    }
  };

  // ========> Get blog search by title <=========//
  useEffect(() => {
    if (title || isNaN(id)) {
      handleSearchByBlogTitle(title || id);
    }
  }, [title, id]);

  const handleSearchByBlogTitle = async (title) => {
    console.log(title);

    setBlogTitle(title);
    setBlogTitleList("");
    try {
      const res = await get(`/api/blog/all?searchTerm=${title}`);
      console.log(res);
      if (res?.success) {
        setBlogData(res?.data);
        // setBlogTitleList("");
        // setLoading(false);
      }
    } catch (error) {
      console.log(error);
      //   setLoading(false);
    }
  };

  // ========> Get all Category <=========//
  useEffect(() => {
    handleGetAllCategory();
  }, []);
  const handleGetAllCategory = async () => {
    setLoading(true);
    try {
      const res = await get("api/blog_category");
      console.log(res);
      if (res?.success) {
        setAllCategoryData(res?.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // ======> রিসেন্ট ব্লগ <=======//
  useEffect(() => {
    handleGetAllBlog();
  }, []);

  const handleGetAllBlog = async () => {
    setLoading(true);
    try {
      const response = await get("api/blog/all");
      console.log(response, "response");
      if (response?.data) {
        setAllBlogData(response?.data);
        setLoading(false);
      }
    } catch (error) {
      console.log("Error creating app:", error);
      setLoading(false);
    }
  };

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

  //======= Suggestion text color <=========//
  const getHighlightedText = (text, higlight) => {
    var parts = text.split(new RegExp(`(${higlight})`, "gi"));
    return parts.map((part, index) => (
      <React.Fragment key={index}>
        {part.toLowerCase() === higlight.toLowerCase() ? (
          <b
            style={{ backgroundColor: "#a9efe1", textDecoration: "underline" }}
          >
            {part}
          </b>
        ) : (
          part
        )}
      </React.Fragment>
    ));
  };

  return (
    <>
      <div className="py-10 ">
        <Wrapper className="">
          {/* brandi */}
          <div className="mb-5 flex items-center">
            <img src={home} alt="icon" className="me-2 mb-1" />
            <Link to="/">
              <p className="text-primary_color font-[500]">হোম</p>
            </Link>
            <img src={arrow} alt="icon" />
            <Link to="/blog">
              <p className="text-primary_color font-[500]">ব্লগ</p>
            </Link>
            <img src={arrow} alt="icon" />
            <p className="text-[#9096A2]">ব্লগ লিস্ট</p>
          </div>
        </Wrapper>
        <div>
          <Wrapper>
            <div className="flex flex-col lg:flex-row py-5 gap-6">
              {loading ? (
                <div className="flex items-center justify-center w-full">
                  <SuggLoading />
                </div>
              ) : (
                <>
                  <div className="w-[800px]">
                    {loading ? (
                      <div className="flex items-center justify-center">
                        <SuggLoading />
                      </div>
                    ) : !loading && blogData?.length > 0 ? (
                      <div className=" w-full grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
                        {blogData?.map((item, i) => (
                          <div className="h-[400px]">
                            <BlogCard key={i} data={item} />
                          </div>
                        ))}
                      </div>
                    ) : null}

                    {!loading && blogData?.length < 1 && (
                      <div className="mt-14 flex items-center justify-center">
                        <h2 className="text-[25px] font-semibold">
                          No data Found !
                        </h2>
                      </div>
                    )}
                  </div>

                  {/* right  */}
                  <div className="  w-[480px] ">
                    <div>
                      <div className="mb-10 relative hidden lg:block">
                        <input
                          type="text"
                          placeholder="সার্চ করুন"
                          value={blogTitle}
                          onChange={(e) => setBlogTitle(e.target.value)}
                          className="p-3 border w-full outline-none border-[#C7CAD1] rounded-[8px]
                                        "
                        />
                        <img
                          className="absolute top-4 right-3 w-[18px]"
                          src={searchIcon}
                          alt=""
                        />

                        {blogTitle && blogTitleList && (
                          <div className="bg-[#fff] p-[20px] rounded-xl flex flex-col gap-3 absolute w-full border">
                            {blogTitleList?.map((item, i) => (
                              <h2
                                onClick={() => setTitle(item?.title)}
                                className="hover:underline cursor-pointer"
                                key={i}
                              >
                                {getHighlightedText(item?.title, blogTitle)}
                              </h2>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    {/* ====> রিসেন্ট ব্লগ  <====== */}
                    <div className="flex flex-col gap-5 bg-[#FFF] rounded-[16px] p-1.5 pb-5">
                      <div className="flex items-center gap-2.5 border-b ">
                        <p className="text-[#17191C] text-[20px] font-[600] leading-[28px] sm:leading-[36px] ps-4">
                          রিসেন্ট ব্লগ
                        </p>
                      </div>
                      {allBlogData?.length > 0 &&
                        allBlogData?.slice(0, 3)?.map((item, i) => (
                          <div
                            onClick={() => navigate(`/blogDetails/${item?.id}`)}
                            key={i}
                            className="flex flex-col gap-4 overflow-hidden bg-[#F1F2F3] rounded-[12px] sm:flex-row items-center p-2.5 cursor-pointer"
                          >
                            <img
                              src={`${BASE_URL}${item?.photo?.path}`}
                              alt="card image"
                              className="md:w-[120px] md:h-[116px] w-full object-cover rounded-[12px] lg:rounded-r-[0px]"
                            />
                            <div className="flex md:flex-row ">
                              <div className="flex flex-col  gap-2.5">
                                <header className="">
                                  <h3 className="text-[#2E3138] text-[16px] font-[700] leading-[24px]">
                                    {item?.title}
                                  </h3>
                                </header>
                                <p className="text-[#464A53] text-[14px] font-[400] leading-[18px]">
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html: item?.description?.slice(0, 100),
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
                        ))}

                      {/* button */}
                      {/* <div className="mx-auto mb-5">
                    <button
                      type="button"
                      className="text-center font-Baloo text-white bg-secandary_color flex items-center justify-center py-[10px] px-5  gap-2 rounded-[50px]"
                    >
                      সবগুলো দেখুন
                    </button>
                  </div> */}
                    </div>
                    {/*=========> ব্লগ ক্যাটাগরি  <====== */}
                    <div className="bg-[#FFF] rounded-[16px] p-1.5 mt-10">
                      <div className="flex justify-between items-center gap-2.5 border-b ">
                        <p className="text-[#1E567B] text-[20px] font-[600] leading-[28px] sm:leading-[36px] ps-4">
                          ব্লগ ক্যাটাগরি
                        </p>
                        <img className="w-[18px]" src={searchIcon} alt="" />
                      </div>
                      <div>
                        <div className="mt-1 p-3 text-[#5D636F] text-[14px] font-[400] ">
                          {allCategoryData?.map((data, i) => (
                            <div className="flex items-center gap-3" key={i}>
                              <div className="bg-black h-[6px] w-[6px] rounded-full"></div>
                              <Link
                                className="underline"
                                to={`/blogList/${data?.id}`}
                              >
                                {data?.category}
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* =======> পপুলার পোস্ট  <======== */}
                    <div className="flex flex-col gap-5 bg-[#FFF] rounded-[16px] p-1.5 mt-[40px]">
                      <div className="flex items-center gap-2.5 border-b ">
                        <p className="text-[#17191C] text-[20px] font-[600] leading-[28px] sm:leading-[36px] ps-4">
                          পপুলার পোস্ট
                        </p>
                      </div>
                      {allPopularBlogData?.length > 0 &&
                        allPopularBlogData?.slice(0, 3)?.map((item, i) => (
                          <div
                            onClick={() => navigate(`/blogDetails/${item?.id}`)}
                            key={i}
                            className="flex flex-col gap-4 overflow-hidden bg-[#F1F2F3] rounded-[12px] sm:flex-row items-center p-2.5 cursor-pointer"
                          >
                            <img
                              src={`${BASE_URL}${item?.photo?.path}`}
                              alt="card image"
                              className="md:w-[120px] md:h-[116px] w-full object-cover rounded-[12px] lg:rounded-r-[0px]"
                            />
                            <div className="flex md:flex-row ">
                              <div className="flex flex-col  gap-2.5">
                                <header className="">
                                  <h3 className="text-[#2E3138] text-[16px] font-[700] leading-[24px]">
                                    {item?.title}
                                  </h3>
                                </header>
                                <p className="text-[#464A53] text-[14px] font-[400] leading-[18px]">
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html: item?.description?.slice(0, 100),
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
                        ))}

                      {/* button */}
                      <div className="mx-auto mb-5">
                        <button
                          type="button"
                          className="text-center font-Baloo text-white bg-secandary_color flex items-center justify-center py-[10px] px-5  gap-2 rounded-[50px]"
                        >
                          সবগুলো দেখুন
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </Wrapper>
        </div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </>
  );
};

export default BlogList;
