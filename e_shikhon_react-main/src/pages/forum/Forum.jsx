import React, { useContext, useEffect, useRef, useState } from "react";
import Wrapper from "../../components/sheared/Wrapper";
import home from "../../assets/svg/home_icon.svg";
import arrow from "../../assets/svg/right_gray_icon.svg";
import forum_right_image from "../../assets/images/forum_right_side_image.png";
import { GrSearch } from "react-icons/gr";
import stay_informed from "../../assets/images/stay_informade.png";
import Get_started from "../../assets/images/Get_started.png";
import Contact_support from "../../assets/images/Contact_support.png";
import Learn_From_Experts from "../../assets/images/Learn_From_Experts.png";
import Course_Issue from "../../assets/images/Course_Issue.png";
import Discuss_with_Instructor from "../../assets/images/Discuss_with_Instructor.png";
import { FaRegCircleUser, FaStar } from "react-icons/fa6";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { BsChatLeftText } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import down_arrow from "../../assets/svg/down_arrow.svg";
import AskQuestionModal from "./AskQuestionModal";
import { AuthContext } from "../../layout/MainLayout";
import { get, post } from "../../api/axious";
import toast from "react-hot-toast";
import { IoNavigateCircleOutline } from "react-icons/io5";
import StarSvg from "../../assets/icon/StarSvg";
import { LuLoader2 } from "react-icons/lu";
import CustomSelectInput from "../../components/inputField/CustomSelectInput";

const Forum = () => {
  const lastMessageRef = useRef(null);
  const modalRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [cBLoading, setCBLoading] = useState(true);
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [componentLoading, setComponentLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [courseId, setCourseId] = useState("");
  const [batchId, setBatchId] = useState("");
  const [showComment, setShowComment] = useState(false);
  const [index, setIndex] = useState(null);
  const [forumList, setForumList] = useState([]);
  const [contributors, setContributors] = useState([]);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [batchDropdown, setBatchDropdown] = useState([]);
  const [myCourse, setMyCourse] = useState([]);

  const [searchText, setSearchText] = useState("");

  const searchTest = async () => {
    setLoading(true);
    try {
      const res = await get(`api/public_forum/all?searchTerm=${searchText}`);
      setForumList(res?.data);
    } catch (error) {
      console.log("Failed to post/", error?.response?.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchText === "") {
      getAllForum();
    } else {
      searchTest();
    }
  }, [searchText]);

  const likeCondition = (data) => {
    if (data) {
      const like = data?.find((like) => like.user_id === user?.id);
      return !!like;
    } else {
      return false;
    }
  };

  useEffect(() => {
    getAllForum();
  }, [courseId, batchId]);

  useEffect(() => {
    getAllContributors();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [componentLoading]);

  const scrollToBottom = () => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollTop = lastMessageRef.current.scrollHeight;
    }
  };

  const notify = () => {
    getAllForum();
    toast.success("Create Successful.");
  };

  useEffect(() => {
    let handlerClose = (e) => {
      if (!modalRef?.current?.contains(e.target)) {
        setIsUserModalOpen(false);
      }
    };
    document.addEventListener("mousedown", handlerClose);
    return () => {
      document.removeEventListener("mousedown", handlerClose);
    };
  });

  useEffect(() => {
    if (user?.id) {
      getMyCourse();
    }
  }, [user?.id]);

  useEffect(() => {
    if (courseId) {
      setBatchDropdown([]);
      setBatchId("");
      getBatch(courseId);
    }
  }, [courseId]);

  const getMyCourse = async () => {
    setLoading(true);
    try {
      const response = await get(`api/auth/get_user/${user?.id}`);
      setMyCourse(response?.data?.progress);
    } catch (error) {
      console.error("Error creating app:", error);
    } finally {
      setLoading(false);
    }
  };

  const getBatch = async (id) => {
    try {
      const res = await get(`api/batch/by_course/${id}`);
      setBatchDropdown(res?.data);
    } catch (error) {
      console.log("Failed to post/", error?.response?.data);
    }
  };

  const getAllForum = async () => {
    setLoading(true);
    try {
      const res = await get(
        `/api/public_forum/all?category=${courseId}&subCategory=${batchId}`
      );
      setForumList(res?.data);
    } catch (error) {
      console.log("Failed to post/", error?.response?.data);
    } finally {
      setLoading(false);
    }
  };

  const getAllContributors = async () => {
    setCBLoading(true);
    try {
      const res = await get(`/api/public_forum/contributors`);
      console.log("Contributors", res?.data);
      setContributors(res?.data?.slice(0, 5));
    } catch (error) {
      console.log("Failed to post/", error?.response?.data);
    } finally {
      setCBLoading(false);
    }
  };

  function formatDate(isoString) {
    if (!isoString) {
      return "No date found";
    }
    const date = new Date(isoString);
    if (isNaN(date.getTime())) {
      return "No date found";
    }
    const day = date.getUTCDate();
    const month = date.toLocaleString("en-US", {
      month: "short",
      timeZone: "UTC",
    }); // Get short month name
    const year = date.getUTCFullYear();

    return `${day} ${month}, ${year}`;
  }

  const postComment = async (id) => {
    if (!message) {
      return;
    }
    if (!user?.id) {
      toast.error("Please Login First.");
    }
    const payload = {
      user_id: user?.id,
      forum_id: id,
      comment: message,
    };
    // console.log(payload);
    setComponentLoading(true);
    try {
      const res = await post(`/api/public_forum/give_comment`, payload);
      // console.log("comment res::", res?.data);
      setMessage("");
      setForumList((previous) => {
        const newData = [...previous];
        const newComment = res?.data?.comment;
        newComment.author_info = res?.data?.user;
        const forumIndex = newData.findIndex(
          (forum) => forum.id === newComment.forum_id
        );
        if (forumIndex !== -1) {
          newData[forumIndex] = {
            ...newData[forumIndex],
            comments: [...newData[forumIndex].comments, newComment],
          };
        }
        return newData;
      });
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      toast.error("Failed to post!!");
      console.log("Failed to post/", error?.response?.data);
    } finally {
      setComponentLoading(false);
    }
  };

  const postLike = async (id) => {
    if (!user?.id) {
      toast.error("Please Login First.");
    }
    const payload = {
      user_id: user?.id,
      forum_id: id,
    };
    // console.log(payload);
    setComponentLoading(true);
    try {
      const res = await post(`/api/public_forum/give_like`, payload);
      // console.log("Like response::", res?.data);
      setForumList((previous) => {
        const newData = [...previous];
        const newLike = res?.data;
        const forumIndex = newData.findIndex(
          (forum) => forum.id === newLike.forum_id
        );
        if (forumIndex !== -1) {
          newData[forumIndex] = {
            ...newData[forumIndex],
            likes: [...newData[forumIndex].likes, newLike],
          };
        }
        return newData;
      });
    } catch (error) {
      toast.error("Failed to Like!!");
      console.log("Failed to post/", error?.response?.data);
    } finally {
      setComponentLoading(false);
    }
  };

  return (
    <>
      <Wrapper>
        {/* brandi */}
        <div className="mb-5 flex items-center pt-7">
          <Link to="/" className="flex">
            <img src={home} alt="icon" className="me-2 mb-1" />
            <p className="text-primary_color font-[500]">হোম</p>
          </Link>
          <img src={arrow} alt="icon" />
          <p className="text-[#9096A2]">ফোরাম</p>
        </div>
      </Wrapper>
      <div className="forum_bg w-full bg-center ">
        <Wrapper>
          <div className="flex md:flex-row flex-col justify-between gap-6 md:px-14 px-0">
            <div className="flex flex-col justify-center gap-4">
              <h1 className="text-white text-[20px] md:text-[20px] lg:text-[28px] font-[600] leading-[28px] md:leading-[48px]">
                Create a topic in the forum...
              </h1>
              <h1 className="text-[#FFFFFF] text-[14px] font-[400] leading-[18px] ">
                If you need help with any included topic, you can create a topic
                in the forum and start
                <br /> communication with other users.
              </h1>
              <div className="flex items-center gap-6">
                <div className="relative">
                  <input
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    type="text"
                    placeholder="Type search for solutions......"
                    className="w-full md:w-[401px] pl-4 pr-10 py-2 rounded-lg bg-white border border-gray-300 outline-none"
                  />
                  <GrSearch
                    type="button"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 "
                  />
                </div>
                <h1 className="text-white text-[20px]">or</h1>
                <button
                  onClick={() => {
                    if (user?.id) {
                      setIsUserModalOpen(!isUserModalOpen);
                    } else {
                      navigate("/login", { state: { from: location } });
                    }
                  }}
                  className="bg-[#1A8C75] text-white text-[18px] font-[500] leading-[18px] py-3 px-6 rounded-md"
                >
                  Ask a Question
                </button>
              </div>
            </div>
            <div>
              <img src={forum_right_image} alt="" />
            </div>
          </div>
        </Wrapper>
      </div>
      <Wrapper>
        {/* 3 X 6 card section */}
        {!searchText && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-10">
            <div className="w-full bg-white rounded-[8px] flex gap-4 py-[20px] px-[24px]">
              <div className="flex items-center">
                <img className="w-[70px] " src={stay_informed} alt="" />
              </div>
              <div>
                <h1 className="text-[#17191C] text-[24px] font-[600] leading-[31px]">
                  Stay informed
                </h1>
                <p className="text-[#5D636F] text-[14px] font-[500] leading-[19px]">
                  Mornings of spring which I enjoy with my whole heart about the
                  gen
                </p>
              </div>
            </div>

            <div className="w-full bg-white rounded-[8px] flex gap-4 py-[20px] px-[24px]">
              <div className="flex items-center">
                <img className="w-[70px] " src={Get_started} alt="" />
              </div>
              <div>
                <h1 className="text-[#17191C] text-[24px] font-[600] leading-[31px]">
                  Get started
                </h1>
                <p className="text-[#5D636F] text-[14px] font-[500] leading-[19px]">
                  Mornings of spring which I enjoy with my whole heart about the
                  gen
                </p>
              </div>
            </div>
            <div className="w-full bg-white rounded-[8px] flex gap-4 py-[20px] px-[24px]">
              <div className="flex items-center">
                <img className="w-[70px] " src={Contact_support} alt="" />
              </div>
              <div>
                <h1 className="text-[#17191C] text-[24px] font-[600] leading-[31px]">
                  Contact support
                </h1>
                <p className="text-[#5D636F] text-[14px] font-[500] leading-[19px]">
                  Mornings of spring which I enjoy with my whole heart about the
                  gen
                </p>
              </div>
            </div>
            <div className="w-full bg-white rounded-[8px] flex gap-4 py-[20px] px-[24px]">
              <div className="flex items-center">
                <img className="w-[70px] " src={Learn_From_Experts} alt="" />
              </div>
              <div>
                <h1 className="text-[#17191C] text-[24px] font-[600] leading-[31px]">
                  Learn From Experts
                </h1>
                <p className="text-[#5D636F] text-[14px] font-[500] leading-[19px]">
                  Mornings of spring which I enjoy with my whole heart about the
                  gen
                </p>
              </div>
            </div>
            <div className="w-full bg-white rounded-[8px] flex gap-4 py-[20px] px-[24px]">
              <div className="flex items-center">
                <img className="w-[70px] " src={Course_Issue} alt="" />
              </div>
              <div>
                <h1 className="text-[#17191C] text-[24px] font-[600] leading-[31px]">
                  Course Issue
                </h1>
                <p className="text-[#5D636F] text-[14px] font-[500] leading-[19px]">
                  Mornings of spring which I enjoy with my whole heart about the
                  gen
                </p>
              </div>
            </div>
            <div className="w-full bg-white rounded-[8px] flex gap-4 py-[20px] px-[24px]">
              <div className="flex items-center">
                <img
                  className="w-[70px] "
                  src={Discuss_with_Instructor}
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-[#17191C] text-[24px] font-[600] leading-[31px]">
                  Discuss with Instructor
                </h1>
                <p className="text-[#5D636F] text-[14px] font-[500] leading-[19px]">
                  Mornings of spring which I enjoy with my whole heart about the
                  gen
                </p>
              </div>
            </div>
          </div>
        )}

        {/* main forum section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14 pb-20">
          <div className="col-span-2 bg-white p-4 rounded-[8px]">
            <div className="flex items-center justify-between">
              <h1 className="text-[#17191C] text-[24px] font-[600] leading-[31px]">
                Recent Discussions
              </h1>

              <div className="flex gap-3">
                <div className="relative">
                  <select
                    value={courseId}
                    onChange={(e) => setCourseId(e.target.value)}
                    className="w-[200px] border border-gray-300 rounded-[8px] py-2 px-4 outline-none "
                  >
                    <option value="">Select Course</option>
                    {myCourse.length &&
                      myCourse?.map((data, i) => (
                        <option key={i} value={data.course_id}>
                          {data?.courses?.courseTitle}
                        </option>
                      ))}
                  </select>
                  <img
                    src={down_arrow}
                    alt="icon"
                    className="absolute top-[20px] right-2 transform -translate-y-1/2"
                  />
                </div>
                {courseId && batchDropdown?.length > 0 && (
                  <div className="relative">
                    <select
                      value={batchId}
                      onChange={(e) => setBatchId(e.target.value)}
                      className="w-[200px] border border-gray-300 rounded-[8px] py-2 px-4 outline-none "
                    >
                      <option value="">Select Batch</option>
                      {batchDropdown.length &&
                        batchDropdown?.map((data, i) => (
                          <option key={i} value={data.id}>
                            {data?.batch_no}
                          </option>
                        ))}
                    </select>
                    <img
                      src={down_arrow}
                      alt="icon"
                      className="absolute top-[20px] right-2 transform -translate-y-1/2"
                    />
                  </div>
                )}
              </div>
            </div>

            {loading ? (
              Array(5)
                .fill(null)
                .map((_, index) => (
                  <div
                    key={index}
                    className=" animate-pulse w-full h-[150px] bg-gray-300  mt-3 rounded-lg"
                  ></div>
                ))
            ) : Array.isArray(forumList) && forumList.length > 0 ? (
              forumList.map((forum, idx) => {
                return (
                  <div
                    key={idx}
                    className="w-full mt-3.5 bg-white border border-[#E3E5E8] rounded-[8px] flex gap-4 p-4"
                  >
                    <div className="">
                      <img
                        className="w-[40px] rounded-full border border-[#C7CAD1] "
                        src={
                          forum?.author_info?.pro_pic?.path
                            ? `${BASE_URL}${forum?.author_info?.pro_pic?.path}`
                            : stay_informed
                        }
                        alt="profile_img"
                      />
                    </div>
                    <div className="w-full">
                      <h1 className="text-[#2872A4] text-[14px] font-[500] leading-[19px]">
                        Get Started
                      </h1>
                      <h1 className="text-[#17191C] text-[24px] font-[600] leading-[31px]">
                        {forum?.title}
                      </h1>
                      <p className="text-[#5D636F] text-[14px] font-[500] leading-[19px]">
                        {forum?.description && (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: forum?.description,
                            }}
                          ></div>
                        )}
                      </p>

                      <div className="flex flex-row items-center justify-between border-t border-[#C7CAD1] mt-3 pt-3">
                        <div className="flex flex-row gap-5 items-center justify-center">
                          <div className="flex flex-row gap-1 justify-center items-center">
                            <FaRegCircleUser className="text-[13px]" />
                            <p className="text-black text-[14px] font-[400] leading-[19px]">
                              {forum?.author_info?.fullName}
                            </p>
                          </div>
                          <div className="flex flex-row gap-1 items-center justify-center">
                            <MdOutlineCalendarMonth className="text-[15px]" />
                            <p className="text-black text-[14px] font-[400] leading-[19px]">
                              {formatDate(forum?.createdAt)}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-row gap-5 items-center justify-center">
                          <div className="flex flex-row gap-[7px] items-center center cursor-pointer">
                            <StarSvg
                              isFilled={likeCondition(forum?.likes)}
                              onClick={() => {
                                if (!likeCondition(forum?.likes)) {
                                  postLike(forum?.id);
                                }
                              }}
                            />
                            <p className="text-black text-[14px] font-[400] leading-[19px] cursor-pointer">
                              {forum?.likes?.length || 0}
                            </p>
                          </div>
                          <div className="flex flex-row gap-[7px] items-center center">
                            <FiEye className="text-[15px]" />
                            <p className="text-black text-[14px] font-[400] leading-[19px]">
                              {forum?.views || 0}
                            </p>
                          </div>
                          <div className="flex flex-row gap-[7px] items-center center">
                            <BsChatLeftText
                              onClick={() => {
                                setIndex(idx);
                                setShowComment(!showComment);
                              }}
                              className="text-[15px] cursor-pointer"
                            />
                            <p className="text-black text-[14px] font-[400] leading-[19px]">
                              {forum?.comments?.length || 0}
                            </p>
                          </div>
                        </div>
                      </div>

                      {showComment && index === idx && (
                        <>
                          <div className="mt-5 max-h-[300px] overflow-y-auto custom_scroll ">
                            {forum?.comments &&
                              forum?.comments.map((data, i) => (
                                <div
                                  key={i}
                                  ref={lastMessageRef}
                                  style={{ scrollBehavior: "smooth" }}
                                  className="flex gap-3 justify-end mb-4 border rounded-md p-3 mr-2"
                                >
                                  <p>{data?.comment}</p>
                                  <div className="w-[30px]">
                                    <img
                                      className="min-w-[30px] rounded-full border border-[#C7CAD1] "
                                      src={
                                        data?.author_info?.pro_pic?.path
                                          ? `${BASE_URL}${forum?.author_info?.pro_pic?.path}`
                                          : stay_informed
                                      }
                                      alt="pic"
                                    />
                                  </div>
                                </div>
                              ))}
                          </div>
                          <div className="relative">
                            <textarea
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                              className="w-full h-[150px] border px-5 py-3 rounded-md mt-5"
                              placeholder="Enter you Text"
                            />
                            {componentLoading ? (
                              <div className="absolute bottom-5 right-2  text-[#1a8c75] cursor-pointer">
                                <LuLoader2 className="animate-spin text-[30px]" />
                              </div>
                            ) : (
                              <IoNavigateCircleOutline
                                onClick={() => postComment(forum?.id)}
                                className="text-[35px] absolute bottom-5 right-2 rotate-45 text-[#1a8c75] cursor-pointer"
                              />
                            )}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="w-full h-full flex justify-center items-center">
                <h1>No Data Found!</h1>
              </div>
            )}
          </div>

          {/* right side section */}
          <div className="h-fit bg-white p-2 rounded-[8px] flex flex-col gap-2">
            <button
              onClick={() => {
                if (!user) {
                  navigate("/login", { state: { from: location } });
                  return;
                }
                setIsUserModalOpen(!isUserModalOpen);
              }}
              className="w-full bg-[#1A8C75] text-white py-2 px-4 rounded-[8px]"
            >
              Ask a Question
            </button>
            <div>
              <div className="flex items-center gap-2 bg-[#E3E5E8] p-2 rounded-t-[5px]">
                <FaRegStar className="text-[#6B7280] text-[25px]" />
                <p className="text-black text-[20px] font-[600] leading-[28px]">
                  Top Contributors
                </p>
              </div>
              {cBLoading
                ? Array(5)
                    .fill(null)
                    .map((_, index) => (
                      <div
                        key={index}
                        className=" animate-pulse w-full h-[20px] bg-gray-300  mt-3 rounded-md"
                      ></div>
                    ))
                : contributors &&
                  contributors.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between mt-3"
                    >
                      <div className="flex flex-row gap-[9px] items-center">
                        <img
                          className="w-[28px] rounded-full border border-[#C7CAD1] "
                          src={
                            item?.pro_pic?.path
                              ? `${BASE_URL}${item?.pro_pic?.path}`
                              : stay_informed
                          }
                          alt=""
                        />
                        <h1 className="text-[#17191C] text-[16px] font-[500] leading-[22px]">
                          {item?.fullName}
                        </h1>
                      </div>
                      <div className="flex justify-center flex-row gap-2 items-center">
                        <p className="text-black text-[14px] font-[400] leading-[19px]">
                          {item?.engagement_count || 0}
                        </p>
                        <FaRegStar className="text-[#6B7280]" />
                      </div>
                    </div>
                  ))}
            </div>
            <button className="w-full bg-[#D4F7F0] text-[#1A8C75] py-2 px-4 rounded-[8px]">
              View All
            </button>
          </div>
        </div>

        {isUserModalOpen ? (
          <>
            <AskQuestionModal
              notify={notify}
              modalRef={modalRef}
              isUserModalOpen={isUserModalOpen}
              setIsUserModalOpen={setIsUserModalOpen}
            />
          </>
        ) : null}
      </Wrapper>
    </>
  );
};

export default Forum;
