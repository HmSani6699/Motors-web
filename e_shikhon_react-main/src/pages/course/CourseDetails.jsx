import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import Wrapper from "../../components/sheared/Wrapper";
import home from "../../assets/svg/home_icon.svg";
import arrow from "../../assets/svg/right_gray_icon.svg";
import tick_blue from "../../assets/svg/tick_blue.svg";
import toast from "react-hot-toast";
import down_arrow_icon from "../../assets/svg/down_arrow.svg";
import mentor_icon from "../../assets/images/mentor-icon.png";
import payment_icon from "../../assets/images/payment_icon.png";
import file_with_badge_icon from "../../assets/svg/file_with_badge.svg";
import comment_icon from "../../assets/svg/comment-question_green.svg";
import video_play_icon from "../../assets/svg/video_play_green.svg";
import user_group_icon from "../../assets/svg/user-group_blue.svg";
import clock_tick_icon from "../../assets/svg/clock_tick_blue.svg";
import live_small_blue_icon from "../../assets/svg/live_small_blue.svg";
import badge_icon from "../../assets/svg/circle_badge_green.svg";
import units_icon from "../../assets/svg/units_blue.svg";
import certificate_icon from "../../assets/svg/certificate_icon_blue.svg";
import shit_icon from "../../assets/svg/shit_icon_blue.svg";
import UpComingBatch from "../home/UpComingBatch";
import { del, post, put } from "../../api/axious";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/sheared/Loading";
import SuggLoading from "../../components/Common/SuggLoading";
import LeadInstructor from "../../components/LeadInstructor";
import SupportInstructor from "../../components/SupportInstructor";
import { scrollToTop } from "../../api/helper";
import batch_icon from "../../assets/svg/batch_icon.svg";
import { loadData, saveData } from "../../hooks/localStorage";
import ReactPlayer from "react-player";
import ReviewUpdateModal from "../../components/Review/ReviewUpdateModal";
import Swal from "sweetalert2";
import { AuthContext } from "../../layout/MainLayout";
import EnrollBartchCart from "./CourseDetailsPage/Component/EnrollBartchCart";
import CurriculamView from "./CourseDetailsPage/Component/CurriculamView";
import SwiperBtn from "./CourseDetailsPage/SwiperBtn";
import AboutCourse from "./CourseDetailsPage/AboutCourse";
import Instructor from "./CourseDetailsPage/Instructor";
import Review from "./CourseDetailsPage/Review";
import CourseCard from "./CourseDetailsPage/CourseCard";

const htmlRemoveRegex = /(<([^>]+)>)/gi;

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [courseData, setCourseData] = useState();
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [reviewDescription, setReviewDescription] = useState();
  const [totalExperience, setTotalExperience] = useState(0);
  const [singleReview, setSingleReview] = useState();
  const [isUpdateReview, setIsUpdateReview] = useState(false);
  const [rating, setRating] = useState(0);
  const [ratingHover, setRatingHover] = useState(0);

  // console.log("courseData", courseData);

  useLayoutEffect(() => {
    getSingleCourseDetails();
    scrollToTop();
  }, [user, id]);

  const getSingleCourseDetails = async () => {
    setLoading(true);
    try {
      const response = await post(`/api/courses/get/${id}`, {
        user_id: parseInt(user?.id),
      });
      setCourseData(response);
    } catch (error) {
      console.error("Error creating app:", error);
    } finally {
      setLoading(false);
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleCourseEnroll = async (
    course_title,
    course_price,
    course_img,
    courseType,
    courseCategory
  ) => {
    if (!user) {
      navigate("/login", { state: { from: location } });
      return;
    }
    const payload = {
      user_id: user?.id,
      course_id: id,
      type: "payment",
    };

    const courseInfo = {
      userId: user?.id || null,
      course_id: id,
      course_title,
      course_price,
      course_img,
      course_type: courseType,
      course_category: courseCategory,
    };

    console.log(payload);
    setLoading(true);

    try {
      const res = await post("/api/course/enroll/add", payload);
      console.log(res);
      if (res?.success) {
        getSingleCourseDetails();
        toast.success("Enroll Successful.");
        handleAddToCart(courseInfo);
        navigate("/cart");
      }
    } catch (error) {
      toast.error(error?.response?.data?.error || "Failed to Enroll");
      console.log("Failed to Enroll/", error?.response?.data);
    } finally {
      setLoading(false);
    }
  };

  const handleCourseEnrollByBatch = async (
    batchId,
    batchNo,
    course_title,
    course_price,
    course_img,
    courseType,
    courseCategory
  ) => {
    if (!user) {
      navigate("/login", { state: { from: location } });
      return;
    }
    const payload = {
      user_id: user?.id,
      course_id: parseInt(id),
      batch_id: batchId,
      type: "payment",
    };
    // console.log(payload, "huhuhu");

    const courseInfo = {
      userId: user?.id || null,
      course_id: id,
      batch_id: batchId,
      batchNo,
      course_title,
      course_price,
      course_img,
      course_type: courseType,
      course_category: courseCategory,
    };

    setLoading(true);
    try {
      const res = await post("/api/course/enroll/add", payload);
      // console.log(res);
      if (res?.success) {
        getSingleCourseDetails();
        toast.success("Enroll Successful");
        handleAddToCart(courseInfo);
        navigate("/cart");
      }
    } catch (error) {
      toast.error(error?.response?.data?.error || "Failed to Enroll");
      console.log("Failed to Enroll/", error?.response?.data);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (courseData) => {
    try {
      const cart = loadData("cart");
      if (Array.isArray(cart.items)) {
        cart.items.push(courseData);
        saveData("cart", cart);
      } else {
        saveData("cart", { items: [courseData] });
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  // ======> handle add rating <=======//
  const handleAddRating = (index) => {
    setRating(index);
  };

  const handleMouseEnter = (currentIndex) => {
    setRatingHover(currentIndex);
  };
  const handleMouseLeave = () => {
    setRatingHover(rating);
  };

  // console.log("user", user);

  // ======> handle add course review <=====//
  const handleAddReview_Rating = async () => {
    if (user) {
      const payload = {
        rating: rating,
        description: reviewDescription,
        name: user?.fullName,
        mobileNo: user?.phone_number,
        user_id: user?.id,
      };

      console.log(payload);

      try {
        const res = await post(`api/courses/${id}/review`, payload);
        console.log(res);
        if (res?.success) {
          setName("");
          setNumber("");
          setReviewDescription("");
          setRating(0);
          setRatingHover(0);
          getSingleCourseDetails();
          toast.success(res?.message);
        }
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
      }
    } else {
      navigate("/login", { state: { from: location } });
    }
  };

  // ======> handle Update course review <=====//
  const handleUpdateCourseReview = async (userID) => {
    if (user) {
      const payload = {
        rating: rating,
        description: reviewDescription,
        name,
        mobileNo: number,
        user_id: userID,
      };

      console.log(payload);

      try {
        const res = await put(
          `api/courses/${parseInt(id)}/review_update`,
          payload
        );
        console.log(res);
        if (res.success) {
          setName("");
          setNumber("");
          setReviewDescription("");
          setRating(0);
          setRatingHover(0);
          getSingleCourseDetails();
          setIsUpdateReview(false);
          toast.success(res?.message);
        }
      } catch (error) {
        console.log(error);
        // toast.error(error.response.data.message);
      }
    } else {
      toast.error("Please Login ");
    }
  };

  // ======> handle Delete course review <=====//
  const handleDeleteReview = (userID) => {
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
          const res = await del(
            `api/courses/${parseInt(id)}/review/${userID}/delete`
          );
          console.log(res);
          if (res?.success) {
            getSingleCourseDetails(parseInt(user?.id));
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

  // ======> get total experience <=====//
  useEffect(() => {
    if (courseData?.data?.instructor[0]?.instructor?.experience?.length > 0) {
      getTotalExperience(
        courseData?.data?.instructor[0]?.instructor?.experience
      );
    }
  }, [courseData]);

  const getTotalExperience = (data) => {
    const totalExperience = data?.reduce(
      (acc, item) => acc + Number(item.totalExperience),
      0
    );

    setTotalExperience(totalExperience);
  };

  console.log("courseData;;;;;;;;;", courseData);
  // console.log(user, "dufghudsfgh");
  return (
    <>
      <div className="py-10 ">
        <Wrapper>
          {/* brandi */}
          <div className="mb-5 flex items-center">
            <img src={home} alt="icon" className="me-2 mb-1" />
            <p
              onClick={() => navigate("/")}
              className="text-primary_color font-[500] cursor-pointer"
            >
              হোম
            </p>
            <img src={arrow} alt="icon" />
            <p
              onClick={() => navigate("/course")}
              className="text-primary_color font-[500] cursor-pointer"
            >
              কোর্সসমূহ
            </p>
            <img src={arrow} alt="icon" />
            <p className="text-[#9096A2]">{courseData?.data?.courseCategory}</p>
          </div>
          {/*  */}

          {loading ? (
            <div className="flex justify-center items-center h-full my-[200px]">
              <SuggLoading />
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row justify-between py-5">
              {/* left side */}
              <div className="w-full lg:max-w-[765px] flex flex-col gap-7 pb-20">
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-[20px] md:text-[28px] lg:text-[32px] font-[600] md:font-[600] lg:font-[700] leading-[28px] md:leading-[36px] lg:leading-[40px] text_black">
                    {courseData?.data?.courseTitle}
                  </h3>
                  <h3 className="text-[12px] md:text-[14px] font-[400]  leading-[20px] text_black">
                    {courseData?.data?.courseDescription && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: courseData?.data?.courseDescription,
                        }}
                      ></div>
                    )}
                  </h3>
                </div>

                {/* mobile verssion */}

                <div className="block lg:hidden ">
                  <div className="relative">
                    <img
                      className="w-full brightness-50 rounded-t-[10px]"
                      src={`${BASE_URL}${courseData?.data?.thumbLinePicPath.path}`}
                      alt=""
                    />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <img src={video_play_icon} alt="" />
                    </div>
                  </div>
                  <div className="p-5 bg-white border border-s border-b border-e rounded-b-[10px] border_gray">
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-row gap-1">
                        <h1 className="text_black_tow text-[16px] md:text-[20px] font-[500] leading-[28px] md:leading-[32px] lg:leading-[28px] ">
                          ৳<strike>{courseData?.data?.regularPrice}</strike>
                        </h1>
                        <h1 className="text_green text-[18px] md:text-[24px] lg:text-[20px] font-[600] lg:font-[500] leading-[28px] md:leading-[32px] lg:leading-[28px] ">
                          ৳{courseData?.data?.sellPrice}
                        </h1>
                      </div>
                      <div className="w-full">
                        {courseData?.data?.enrolled?.[0]?.user_id ===
                          user?.id ? (
                          courseData?.data?.courseType === "ভিডিও কোর্স" ? (
                            <button
                              type="submit"
                              onClick={() =>
                                navigate(`/courseCurriculum/${id}`)
                              }
                              className="w-full py-2.5 px-5 bg_green rounded-[8px] text-white text-[14px] font-[500] leading-[21px] justify-center gap-3"
                            >
                              Start Class
                            </button>
                          ) : (
                            <button
                              type="submit"
                              onClick={() =>
                                navigate(`/liveCourseCurriculum/${id}`)
                              }
                              className="w-full py-2.5 px-5 bg_green rounded-[8px] text-white text-[14px] font-[500] leading-[21px] justify-center gap-3"
                            >
                              জয়েন লাইভ ক্লাস
                            </button>
                          )
                        ) : courseData?.data?.courseType === "ভিডিও কোর্স" ? (
                          <button
                            type="submit"
                            onClick={() =>
                              handleCourseEnroll(
                                courseData?.data?.courseTitle,
                                courseData?.data?.sellPrice,
                                courseData?.data?.thumbLinePicPath.path,
                                courseData?.data?.courseType,
                                courseData?.data?.courseCategory
                              )
                            }
                            className="w-full py-2.5 px-5 bg_green rounded-[8px] text-white text-[14px] font-[500] leading-[21px] justify-center gap-3"
                          >
                            {loading ? <Loading /> : "Take This Course 1"}
                          </button>
                        ) : (
                          <button
                            type="submit"
                            onClick={() => setShowModal(true)}
                            className="w-full py-2.5 px-5 bg_green rounded-[8px] text-white text-[14px] font-[500] leading-[21px] justify-center gap-3"
                          >
                            Take This Course 2
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 pt-2.5">
                      {courseData?.data?.courseDuration > 0 && (
                        <div className="flex flex-row gap-2">
                          <img src={clock_tick_icon} alt="" />
                          <h1 className="text_black text-[14px]  font-[400]  leading-[21px]  ">
                            আনলিমিটেড এক্সেস
                          </h1>
                        </div>
                      )}

                      {courseData?.data?.badge == "true" && (
                        <div className="flex flex-row gap-2">
                          <img src={badge_icon} alt="" />
                          <h1 className="text_black text-[14px]  font-[400]  leading-[21px] ">
                            কোর্স ব্যাজ
                          </h1>
                        </div>
                      )}

                      {courseData?.data?.support == "true" && (
                        <div className="flex flex-row gap-2">
                          <img src={live_small_blue_icon} alt="" />
                          <h1 className="text_black text-[14px]  font-[400]  leading-[21px]  ">
                            লাইভ সার্পোট
                          </h1>
                        </div>
                      )}
                      {courseData?.data?.completionCertificate == "true" && (
                        <div className="flex flex-row gap-2">
                          <img src={certificate_icon} alt="" />
                          <h1 className="text_black text-[14px]  font-[400]  leading-[21px] ">
                            কোর্স সার্টিফিকেট
                          </h1>
                        </div>
                      )}
                      <div className="flex flex-row gap-2">
                        <img src={shit_icon} alt="" />
                        <h1 className="text_black text-[14px]  font-[400]  leading-[21px]  ">
                          {courseData?.data?.maximumStudents} সিট সংখ্যা
                        </h1>
                      </div>
                    </div>
                    <hr className="w-full h-[0px] border-b border-solid border_gray mt-2.5 mb-2.5" />
                    <div className="">
                      <div className="flex flex-row justify-between sm:justify-evenly">
                        <h2 className="text-[#9096A2] text-[14px] font-[400] leading-[21px]">
                          কোর্সটি সম্পর্কে বিস্তারিত জানতে
                        </h2>
                        <h2 className="text_green text-[14px] font-[500] leading-[21px]">
                          কল করুন 01948858258
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2.5">
                  <h3 className="text-[20px] lg:text-[24px] font-[600] :leading-[28px] lg:leading-[32px] text_black">
                    কোর্সে কি কি শেখানো হবে ?
                  </h3>
                  <div className="bg-white rounded_teen border border_gray p-2 md:p-5">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      {courseData?.data?.whatWillBeTaught.map(
                        (whatWeLearn, i) => (
                          <div
                            key={i}
                            className="flex flex-row items-start gap-2.5 mb-3"
                          >
                            <img
                              className="max-w-7 mt-1"
                              src={tick_blue}
                              alt=""
                            />
                            <h3 className="text-[16px] md:text-[18px] font-[500] leading-[13px] lg:leading-[22px] text_black">
                              {whatWeLearn}
                            </h3>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* Batch Enroll */}
                <EnrollBartchCart
                  courseData={courseData}
                  user={user}
                  show={true}
                  id={id}
                  handleCourseEnrollByBatch={handleCourseEnrollByBatch}
                />

                <SwiperBtn scrollToSection={scrollToSection} />

                <div className="flex flex-col gap-5">
                  <AboutCourse courseData={courseData} />
                  <CurriculamView courseData={courseData} />

                  {/* instructor */}
                  <Instructor courseData={courseData} />
                  {/* revew  */}
                  <Review
                    number={number}
                    name={name}
                    courseData={courseData}
                    setIsUpdateReview={setIsUpdateReview}
                    setReviewDescription={setReviewDescription}
                    setName={setName}
                    setNumber={setNumber}
                    ratingHover={ratingHover}
                    rating={rating}
                    handleAddRating={handleAddRating}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                    handleAddReview_Rating={handleAddReview_Rating}
                  />
                  {/* how to pay */}
                  <div id="payment">
                    <div className="flex items-center gap-2 pt-5 pb-2.5">
                      <img src={payment_icon} alt="" />
                      <h2 className="text_black text-[20px] lg:text-[24px] font-[600] leading-[28px] lg:leading-[32px] ">
                        যেভাবে পেমেন্ট করবেন
                      </h2>
                    </div>
                    <div className="p-5 bg-white rounded-[10px] border_gray border">
                      <h2 className="text_black_gray text-[20px] font-[500] leading-[28px]">
                        কীভাবে পেমেন্ট করবেন তা বিস্তারিত জানতে{" "}
                        <span className="text_green">এই ভিডিওটি দেখুন</span>{" "}
                      </h2>
                    </div>
                  </div>
                  {/* certificate */}
                  <div>
                    <div className="flex items-center gap-2 pt-5 pb-2.5">
                      <img src={file_with_badge_icon} alt="" />
                      <h2 className="text_black text-[20px] lg:text-[24px] font-[600] leading-[28px] lg:leading-[32px] ">
                        কোর্স সার্টিফিকেট
                      </h2>
                    </div>
                    <div className="bg-white rounded_teen border border_gray p-2 md:p-5">
                      <div className="flex flex-col md:flex-row justify-between">
                        <div>
                          <h2 className="text_black_gray text-[20px] lg:text-[16px] font-[500] leading-[28px] lg:leading-[28px] ">
                            কোর্সটি সফলভাবে শেষ করলে আপনার জন্য আছে সার্টিফিকেট
                            যা আপনি-
                          </h2>
                          <ul className="list-disc list-inside text_black_gray text-[14px] lg:text-[16px] font-[400] md:font-[500] leading-[18px] lg:leading-[28px]">
                            <li>আপনার সিভিতে যোগ করতে পারবেন</li>
                            <li>লিংকডইন প্রোফাইলে সরাসরি শেয়ার করতে পারবেন</li>
                            <li>ফেসবুকে এক ক্লিকেই শেয়ার করতে পারবেন</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* common ask */}
                  <div id="help">
                    <div className="flex items-center gap-2 pt-5 pb-2.5">
                      <img src={comment_icon} alt="" />
                      <h2 className="text_black text-[20px] lg:text-[24px] font-[600] leading-[28px] lg:leading-[32px] ">
                        সচরাচর জিজ্ঞাসা
                      </h2>
                    </div>
                    {/* faq */}
                    <div className="py-5 px-2 md:px-5 bg-white rounded-[10px] border_gray border relative">
                      <div className="space-y-4">
                        {courseData?.data?.faqQuestions?.map((faqData, i) => (
                          <details
                            key={i}
                            className={`group [&_summary::-webkit-details-marker]:hidden  pb-2.5   ${courseData?.data?.faqQuestions.length == i + 1
                              ? ""
                              : "border-b-2  border-dashed"
                              }`}
                            close
                          >
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg">
                              <h3 className="text-[14px] md:text-[18px] lg:text-[20px] font-[500] md:font-[600] lg:font-[500] leading-[18px] md:leading-[28px] text_black">
                                {faqData?.title}
                              </h3>

                              <svg
                                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </summary>
                            <h3 className="py-4 text-[12px] md:text-[14px] font-[400] leading-[18px] text_black">
                              {faqData?.answer?.replace(htmlRemoveRegex, "")}
                            </h3>
                          </details>
                        ))}
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 -bottom-9 ">
                        <button className=" py-1.5 px-3 bg-white rounded-[50px] flex flex-row items-center text_black_gray text-[14px] font-[500] leading-[21px] justify-center gap-3 drop-shadow-xl">
                          সকল কন্টেন্ট
                          <img src={down_arrow_icon} alt="" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* right side */}
              <CourseCard
                id={id}
                courseData={courseData}
                loading={loading}
                handleCourseEnroll={handleCourseEnroll}
                setShowModal={setShowModal}
              />
            </div>
          )}
          {showModal ? (
            <>
              <div className="p justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto  my-6 mx-auto ">
                  <div className="flex justify-center items-center absolute top-5 right-5 ">
                    <span
                      onClick={() => setShowModal(false)}
                      className="text-[25px] cursor-pointer z-50 hover:bg-slate-300/50 px-1 py-[6px] rounded-md leading-3 text-black bg-slate-200 shadow-xl"
                    >
                      &times;
                    </span>
                  </div>

                  <div className="border-0 p-5 rounded-[10px] shadow-lg relative flex flex-col bg-white outline-none w-[1068px] h-[500px] focus:outline-none">
                    <div className="flex justify-between   ">
                      <div className="flex items-center gap-2">
                        <img src={batch_icon} alt="" />
                        <h1 className="text-[#1D5276] text-[20px] font-[700] leading-[28px] ">
                          ব্যাচ সমূহ
                        </h1>
                      </div>
                    </div>
                    <div className="mt-3">
                      {
                        courseData?.batch_info.length === 0 ? (
                          <div className="flex items-center justify-center h-[350px]">
                            <h1 className="text-[20px] font-[500] text-[#1D5276]">No Batch Available For Enroll !!</h1>
                          </div>
                        ) : (
                          <EnrollBartchCart
                            courseData={courseData}
                            user={user}
                            handleCourseEnrollByBatch={handleCourseEnrollByBatch}
                          />
                        )}
                    </div>
                  </div>
                </div>
              </div>
              <div className=" fixed inset-0 z-40 bg-[#08324FDB]"></div>
            </>
          ) : null}
        </Wrapper>
      </div>

      {isUpdateReview && (
        <ReviewUpdateModal
          number={number}
          name={name}
          setIsUpdateReview={setIsUpdateReview}
          data={singleReview}
          setReviewDescription={setReviewDescription}
          setName={setName}
          setNumber={setNumber}
          ratingHover={ratingHover}
          rating={rating}
          setRating={setRating}
          setRatingHover={setRatingHover}
          handleAddRating={handleAddRating}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          handleUpdateCourseReview={handleUpdateCourseReview}
        />
      )}

      <div className="hidden lg:flex">
        <UpComingBatch />
      </div>
    </>
  );
};

export default CourseDetails;
