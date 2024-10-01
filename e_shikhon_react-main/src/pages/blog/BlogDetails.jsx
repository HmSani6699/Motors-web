const BASE_URL = import.meta.env.VITE_BASE_URL;
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import CheckBox from "../../components/checkbox/CheckBox";
import Wrapper from "../../components/sheared/Wrapper";
import home from "../../assets/svg/home_icon.svg";
import arrow from "../../assets/svg/right_gray_icon.svg";
import newspaper from "../../assets/svg/newspaper.svg";
import calender_black from "../../assets/svg/calendar_black.svg";
import right_arrow from "../../assets/svg/right-arrow.svg";
import user_circle_black from "../../assets/svg/user_circle_black.svg";
import searchIcon from "../../assets/svg/search.svg";
import blog_banner from "../../assets/images/blog-img (2).png";
import blog from "../../assets/images/blog-img (1).png";
import blog_image_tow from "../../assets/images/blog_image_2.png";
import mentor_image from "../../assets/images/mentor-icon.png";
import blog_middle_photo from "../../assets/images/samiul_hoque_blog_middle_photo.png";
import star_green from "../../assets/svg/star_green.svg";
import badge_green from "../../assets/svg/badge_green.svg";
import star_yellow from "../../assets/svg/star_yellow.svg";
import facebook_gray from "../../assets/images/facebook_gray.png";
import linkedin_gray from "../../assets/images/linkedin_gray.png";
import twitter_gray from "../../assets/images/twitter_gray.png";
import whatsapp_gray from "../../assets/svg/whatsapp_gray.svg";
import instagram_gray from "../../assets/images/instagram_gray.png";
import earth_gray from "../../assets/images/erath_gray.png";
import star_border from "../../assets/svg/star-border.svg";
import right_arrow_btn from "../../assets/svg/arrow-right-btn.svg";
import { scrollToTop } from "../../api/helper";
import { del, get, post, put } from "../../api/axious";
import { AuthContext } from "../../layout/MainLayout";
import toast, { Toaster } from "react-hot-toast";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import delete_red from "../../assets/svg/delete-sweep-outline_red.svg";
import file_edit from "../../assets/svg/file-document-edit-outline_green.svg";
import Swal from "sweetalert2";
import UpdateBlogCommentModal from "./UpdateBlogCommentModal";

const BlogDetails = () => {
  // scrollToTop();
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [allCategoryData, setAllCategoryData] = useState([]);
  const [allPopularBlogData, setAllPopularBlogData] = useState([]);
  const [allBlogData, setAllBlogData] = useState([]);
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [description, setDescription] = useState();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const shearUrl = `${BASE_URL}${pathname.slice(1, pathname?.length)}`;
  const [blogTitle, setBlogTitle] = useState("");
  const [blogTitleList, setBlogTitleList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [comment, setComment] = useState();

  // ======> Get single blog <=======//
  useEffect(() => {
    if (id) {
      handleGetSingleBlog(id);
    }
  }, [id]);

  const handleGetSingleBlog = async (id) => {
    try {
      const response = await get(`/api/blog/${id}`);
      console.log(response, "response");
      if (response?.data) {
        setData(response?.data);
      }
    } catch (error) {
      console.log("Error creating app:", error);
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

  // ======> রিসেন্ট ব্লগ <=======//
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

  // ========> Add Review <=======//
  const handleAddReview = async () => {
    const payload = {
      rating: 0,
      description: description,
      name: name,
      mobileNo: number,
      user_id: user?.id,
    };

    try {
      const res = await post(`/api/blog/addReview/${id}`, payload);
      console.log(res);
      if (res?.success) {
        toast.success(res?.message);
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error(error.response.data.error);
      }
    }
  };

  useEffect(() => {
    if (user) {
      setName(user?.fullName);
      setNumber(user?.phone_number);
    }
  }, [user]);

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
  const handleSearchByBlogTitle = async (title) => {
    setBlogTitle(title);
    navigate(`/blogList/${title}`);
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

  // ========> Update Blog Comment <========//
  const handleUpdateComment = async () => {
    const payload = {
      rating: 0,
      description: description,
      mobileNo: comment?.mobileNo,
    };

    try {
      const res = await put(`api/blog/updateReview/${id}`, payload);
      console.log(res);
      if (res?.success) {
        setDescription("");
        setModalOpen(false);
        toast.success(res?.message);
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error(error.response.data.error);
      }
    }
  };

  // =======> Delete blog comment <=======//
  const handleDeleteBlog = async (number) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await del(`api/blog/deleteReview/${id}/${number}`);
          console.log(res);
          if (res?.success) {
            window.location.reload();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        } catch (error) {
          console.error("Error deleting category:", error);
          Swal.fire({
            title: "Error!",
            text: "There was an issue deleting the category.",
            icon: "error",
          });
        }
      }
    });
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
            <p className="text-[#9096A2]">ব্লগ বিস্তারিত</p>
          </div>

          {/*  */}

          <div className="flex flex-col gap-2.5">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center">
                  <div className="flex items-center gap-2">
                    <img src={user_circle_black} alt="icon" />
                    <h5>{data?.author_info?.fullName}</h5>
                  </div>
                  <div className="flex items-center gap-2 ps-12">
                    <img src={calender_black} alt="icon" />
                    <h5>{data?.date}</h5>
                  </div>
                </div>
                <h3 className="text-[28px] font-[700] leading-[36px] text-[#2E3138]">
                  {data?.title}
                </h3>
              </div>
              <img className="flex lg:hidden" src={searchIcon} alt="" />
            </div>
          </div>
        </Wrapper>
        <div>
          <Wrapper>
            <div className="flex flex-col lg:flex-row py-5 gap-6">
              {/* left side */}
              <div className="w-[700px]">
                <div className=" overflow-hidden rounded-[24px] bg-white ">
                  {/*  <!--  Image --> */}
                  <figure>
                    <img
                      src={`${BASE_URL}${data?.photo?.path}`}
                      alt="card image"
                      className="aspect-video w-full rounded-t-[24px]"
                    />
                  </figure>
                  {/*  <!-- Body--> */}
                  <div className="pt-5 pb-6 ps-5 pr-5">
                    <div className="flex flex-col gap-4">
                      <p className="text-[16px] font-[400] leading-[18px] text-[#5D636F]">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: data?.description?.slice(0, 300),
                          }}
                        ></div>
                      </p>
                    </div>
                  </div>
                  {/*  */}
                </div>

                <div className="flex items-center gap-2 py-5">
                  <img src={star_green} alt="" />
                  <h2 className="text-[#2E3138] text-[24px] font-[600] leading-[32px]">
                    Author
                  </h2>
                </div>

                <div className="overflow-hidden bg-white rounded-[10px] border border-[#E3E5E8]">
                  <div className="p-5">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        {data?.author_info?.pro_pic?.path ? (
                          <img
                            src={`${BASE_URL}${data?.author_info?.pro_pic?.path}`}
                            alt=""
                            className="relative h-[100px] w-[100px] inline-flex items-center justify-center rounded-full border-2 border-white shadow-lg"
                          />
                        ) : (
                          <img
                            src={mentor_image}
                            alt=""
                            className="relative h-[100px] w-[100px] inline-flex items-center justify-center rounded-full border-2 border-white shadow-lg"
                          />
                        )}

                        <img
                          src={badge_green}
                          alt=""
                          className="absolute top-4 left-20"
                        />
                      </div>
                      <div>
                        <h1 className="text-[#2E3138] text-[20px] font-[600] leading-[21px]">
                          {data?.author_info?.fullName}
                        </h1>
                        <h1 className="text-[#2E3138] text-[14px] font-[400] leading-[18px]">
                          Professional UI/UX Design
                        </h1>
                        <div className="flex items-center gap-2">
                          <img src={star_yellow} alt="" />
                          <h1 className="text-[#2E3138] text-[18px] font-[500] leading-[21px]">
                            {data?.averageRating || 0}
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden bg-white rounded-[8px] mt-10 mb-5">
                  <div className="p-5 flex items-center gap-5">
                    <h2 className="text-[#1D5377] text-[20px] font-[600] leading-[28px]">
                      পোস্ট শেয়ার করুন
                    </h2>
                    <div className="flex items-center gap-5">
                      <FacebookShareButton
                        url={shearUrl}
                        quote={data?.title || null}
                      >
                        <img src={facebook_gray} alt="" />
                      </FacebookShareButton>
                      <LinkedinShareButton
                        url={shearUrl}
                        quote={data?.title || null}
                      >
                        <img src={linkedin_gray} alt="" />
                      </LinkedinShareButton>
                      <TwitterShareButton
                        url={shearUrl}
                        quote={data?.title || null}
                      >
                        <img src={twitter_gray} alt="" />
                      </TwitterShareButton>
                      <WhatsappShareButton
                        url={shearUrl}
                        quote={data?.title || null}
                      >
                        <img src={whatsapp_gray} alt="" />
                      </WhatsappShareButton>
                      {/* <img src={instagram_gray} alt="" />
                      <img src={earth_gray} alt="" /> */}
                    </div>
                  </div>
                </div>
                {/* <div className="flex items-center gap-2 py-5">
                  <img src={star_green} alt="" />
                  <h2 className="text-[#2E3138] text-[24px] font-[600] leading-[32px]">
                    রিভিউ (২222)
                  </h2>
                </div> */}

                {/* review  */}
                <div>
                  <div className="pt-5 pb-6 ps-5 pr-5 bg-white rounded-[8px] lg:max-w-[1000px]">
                    <div className="flex flex-col gap-5">
                      {/* <h2 className="text-[#2E3138] text-[24px] font-[600] leading-[32px]">
                        রিভিউ দেন
                      </h2> */}

                      <div className="pt-5 pb-6 ps-5 pr-5">
                        <div className="flex flex-col gap-5">
                          {/* <div>
                            <h2 className="text-[#000] text-[16px] font-[400] leading-[22px]">
                              আপনার রেটিং
                            </h2>
                            <div className="flex items-center cursor-pointer mt-2.5">
                              <img src={star_border} alt="" />
                              <img src={star_border} alt="" />
                              <img src={star_border} alt="" />
                              <img src={star_border} alt="" />
                              <img src={star_border} alt="" />
                            </div>
                          </div> */}
                          <h2 className="text-[#000] text-[16px] font-[400] leading-[22px]">
                            মন্তব্য লিখুন
                          </h2>
                          <div>
                            <textarea
                              onChange={(e) => setDescription(e.target.value)}
                              className=" w-full h-[245px] rounded-[10px] border border-[#D1D5DB] outline-none p-2"
                            ></textarea>
                          </div>
                          <div className="flex w-full gap-5">
                            <div className="w-full">
                              <h2 className="text-[#000] text-[16px] font-[400] leading-[22px]">
                                আপনার নাম
                              </h2>
                              <input
                                onChange={(e) => setName(e.target.value)}
                                defaultValue={name}
                                type="text"
                                className="border border-[#D1D5DB] w-full p-3 rounded-[8px] outline-none"
                                placeholder="আপনার নাম"
                              />
                            </div>
                            <div className="w-full">
                              <h2 className="text-[#000] text-[16px] font-[400] leading-[22px]">
                                মোবাইল নম্বর
                              </h2>
                              <input
                                defaultValue={number}
                                onChange={(e) => setNumber(e.target.value)}
                                type="text"
                                className="border border-[#D1D5DB] w-full p-3 rounded-[8px] outline-none"
                                placeholder="মোবাইল নম্বর"
                              />
                            </div>
                          </div>

                          <div className="relative flex items-center">
                            <CheckBox />
                            <h1 className="text-[#000] text-[14px] font-[400]">
                              Save my name, email, and website in this browser
                              for the next time I comment.
                            </h1>
                          </div>
                          <div className="">
                            <button
                              onClick={handleAddReview}
                              type="button"
                              className="text-center font-Baloo text-white bg-secandary_color flex items-center justify-center py-[10px] px-5  gap-2 rounded-[8px]"
                            >
                              জমা দিন
                              <img src={right_arrow_btn} alt="" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {data?.review?.length > 0 &&
                        data?.review?.map((item, i) => (
                          <div>
                            <div>
                              <div className="flex items-center justify-between">
                                <div>
                                  <h2 className="text-[#2E3138] text-[20px] font-[500] leading-[21px]">
                                    {item?.name}
                                  </h2>
                                  {/* <h1 className="text-[#2E3138] text-[14px] font-[400] leading-[21px]">
                                    Professional UI/UX Design
                                  </h1> */}
                                </div>
                                {user?.roles?.roleName === "Admin" && (
                                  <div className="">
                                    <button
                                      onClick={() => {
                                        setComment(item);
                                        setModalOpen(true);
                                      }}
                                      className="mr-[10px]"
                                    >
                                      <img src={file_edit} alt="" />
                                    </button>

                                    <button
                                      onClick={() =>
                                        handleDeleteBlog(item?.mobileNo)
                                      }
                                    >
                                      <img src={delete_red} alt="" />
                                    </button>
                                  </div>
                                )}
                                {/* <div className="flex items-center cursor-pointer">
                            <img src={star_border} alt="" />
                            <img src={star_border} alt="" />
                            <img src={star_border} alt="" />
                            <img src={star_border} alt="" />
                            <img src={star_border} alt="" />
                          </div> */}
                              </div>
                              <h1 className="text-[#2E3138] wh text-[16px] font-[400] leading-[22px] mt-2.5">
                                {item?.description}
                              </h1>
                            </div>
                            {/* <hr className="h-0 border-b border-solid border-[#C7CAD1] grow mt-5" /> */}
                            {i !== data.review.length - 1 && (
                              <hr className="h-0 border-b border-solid border-[#C7CAD1] grow mt-5" />
                            )}
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* right  */}
              <div className="px-1 md:px-16 lg:px-5 w-[580px] ">
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
                            onClick={() => handleSearchByBlogTitle(item?.title)}
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

                {/* =======> tag <========*/}
                {/* <div className="bg-[#FFF] rounded-[16px] p-1.5 mt-10">
                  <div className="flex justify-between items-center gap-2.5 border-b ">
                    <p className="text-[#1E567B] text-[20px] font-[600] leading-[28px] sm:leading-[36px] ps-4">
                      ট্যাগ
                    </p>
                  </div>
                  <div>
                    <div className="mt-5 flex flex-wrap gap-4 px-3 mb-5">
                      <button
                        type="button"
                        className="text-center font-Baloo text-[#5D636F] bg-[#E3E5E8] flex items-center justify-center py-[10px] px-5  gap-2 rounded-[50px]"
                      >
                        online_course
                      </button>
                      <button
                        type="button"
                        className="text-center font-Baloo text-[#5D636F] bg-[#E3E5E8] flex items-center justify-center py-[10px] px-5  gap-2 rounded-[30px]"
                      >
                        Graphics Design
                      </button>
                      <button
                        type="button"
                        className="text-center font-Baloo text-[#5D636F] bg-[#E3E5E8] flex items-center justify-center py-[10px] px-5  gap-2 rounded-[30px]"
                      >
                        ফ্রিল্যান্সিং
                      </button>
                      <button
                        type="button"
                        className="text-center font-Baloo text-[#5D636F] bg-[#E3E5E8] flex items-center justify-center py-[10px] px-5  gap-2 rounded-[30px]"
                      >
                        লাইভ ক্লাস
                      </button>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </Wrapper>
        </div>

        {/* ======> Update Blog Comment Modal <======= */}
        {modalOpen && (
          <UpdateBlogCommentModal
            blogID={id}
            data={comment}
            setModalOpen={setModalOpen}
            description={description}
            setDescription={setDescription}
            handleUpdateComment={handleUpdateComment}
          />
        )}

        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </>
  );
};

export default BlogDetails;
