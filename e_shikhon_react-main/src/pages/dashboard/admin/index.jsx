import React, { useContext, useEffect, useRef, useState } from "react";
import logo from "../../../assets/images/Logo.png";
import logo_main from "../../../assets/svg/main_logo.svg";
import left_arrow from "../../../assets/svg/right_arrow_black.svg";
import dashboard_outline from "../../../assets/svg/view-dashboard-outline.svg";
import layer_black from "../../../assets/svg/layer_black.svg";
import activity_black from "../../../assets/svg/activity_black.svg";
import percent_outline from "../../../assets/svg/percent-outline.svg";
import bdt_icon_black from "../../../assets/svg/bdt_icon_black.svg";
import certificate_icon from "../../../assets/svg/certificate_icon_black.svg";
import three_user_group from "../../../assets/svg/three_user-group_black.svg";
import file_create_black from "../../../assets/svg/file-create_black.svg";
import chat_icon from "../../../assets/svg/chat-alt.svg";
import bell_gray from "../../../assets/svg/bell_gray.svg";
import user_icon from "../../../assets/svg/user-profile_gray.svg";
import red_crosse_icon from "../../../assets/svg/red_crosse.svg";
import { Link, NavLink, Outlet } from "react-router-dom";
import SelectInput from "../../../components/inputField/SelectInput";
import down_arrow from "../../../assets/svg/down_arrow.svg";
import home_green_icon from "../../../assets/svg/home_green.svg";
import alarm_icon from "../../../assets/svg/alarm_yellow.svg";
import { AuthContext } from "../../../layout/MainLayout";
import { MdOutlineKeyboardArrowRight, MdOutlineLogout } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";

const Admin = () => {
  const modalRef = useRef(null);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCourseOpen, setIsCourseOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isOpenProfileMenu, setIsOpenProfileMenu] = useState(false);
  const { user, logout } = useContext(AuthContext);

  const toggleDropdown = () => {
    setIsCourseOpen(!isCourseOpen);
  };

  const toggleAdminDropdown = () => {
    setIsAdminOpen(!isAdminOpen);
  };
  const [showModal, setShowModal] = React.useState(false);

  const [pendingRole, setPendingRole] = useState(false);

  const handleUserRole = () => {
    setPendingRole(true);
  };
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
  return (
    <div className="w-full flex lg:gap-4 gap-[2px]">
      {showModal ? (
        <>
          <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto  my-6 mx-auto ">
              <div className="border-0 rounded-[10px] shadow-lg relative flex flex-col bg-white outline-none w-[1068px] h-[500px] focus:outline-none">
                <div className="flex justify-end p-5  ">
                  <button
                    className="flex items-center gap-1 text-[#D42428] text-[16px] font-[400] "
                    onClick={() => setShowModal(false)}
                  >
                    Close <img src={red_crosse_icon} alt="" />
                  </button>
                </div>

                {!pendingRole ? (
                  <div className="relative p-6 flex flex-col items-center justify-center">
                    <div>
                      <h1 className="text-[#1D5276] text-[20px] font-[700] leading-[28px] ">
                        আপনি কোন সেক্টরের জন্য রেজিস্ট্রেশন করতে চাচ্ছেন ?
                      </h1>
                    </div>
                    <div className="w-[478px] py-14">
                      <div className="w-full relative">
                        <label className="text-[16px] font-[400] leading-[22px]">
                          আপনার ক্যাটাগরী সিলেক্ট করুন?
                        </label>
                        <select
                          // value={value}
                          // onChange={(e) => setValue(e.target.value)}
                          className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5 bg-[#F1F2F3]"
                        >
                          <option value="">সিলেক্ট করুন?</option>
                          <option value="স্টুডেন্ট">স্টুডেন্ট</option>
                          <option value="ইন্সট্রাক্টর">ইন্সট্রাক্টর</option>
                          <option value="এজেন্ট">এজেন্ট</option>
                        </select>
                        <img
                          src={down_arrow}
                          alt="icon"
                          className="absolute top-[50px] right-2 transform -translate-y-1/2"
                        />
                      </div>
                      <div className="flex justify-center py-14">
                        <button
                          onClick={handleUserRole}
                          type="button"
                          className=" font-Baloo text-white bg-[#20AC90] py-[10px] px-5  rounded-[8px]"
                        >
                          জমা দিন
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-end pb-8  ">
                      <button className="flex items-center gap-1 text-[#20AC90] text-[16px] font-[400]">
                        <img src={home_green_icon} alt="" /> হোম ফিরে যান
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className=" relative p-6 flex flex-col items-center justify-center">
                    <div>
                      <h1 className="text-[#1D5276] text-center text-[20px] font-[700] leading-[28px] py-8">
                        আপনি ইন্সট্রাক্টর জন্য রেজিস্ট্রেশন করেছেন, <br /> মেইল
                        অথবা ফোন নাম্বারে আপডেট জানিয়ে দেয়া হবে
                      </h1>
                    </div>
                    <div className="w-[300px] flex flex-col items-center justify-center p-2 border rounded-[5px] border-[#D78F03] mt-8">
                      <img className="" src={alarm_icon} alt="" />
                      <p className="text-[#D78F03] text-center text-[14px] font-[400] leading-[18px] ">
                        Your application is pending by ADMIN
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      <div
        className={` bg-white duration-300 ${sidebarOpen ? "w-[300px]" : "w-16"
          }`}
      >
        <div>
          <div className="py-4 relative border-b border-[#E3E5E8]">
            {sidebarOpen ? (
              <Link to="/">
                <img className="mx-auto w-[75%]" src={logo} alt="" />
              </Link>
            ) : (
              <Link to="/">
                <img className="mx-auto" src={logo_main} alt="" />
              </Link>
            )}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="absolute -right-3 top-4 bg-white shadow-md rounded-[3px]"
            >
              <img
                className={` ${sidebarOpen && "rotate-180"}`}
                src={left_arrow}
                alt=""
              />
            </button>
          </div>

          {/* all link */}
          <div
            className={` flex flex-col gap-2.5 ${sidebarOpen ? "p-5" : "p-2.5 pt-5"
              }`}
          >
            <NavLink
              to="/admin"
              className="flex flex-row gap-2 px-2 py-2 rounded-[3px] "
            >
              <img src={dashboard_outline} alt="" />
              {sidebarOpen && (
                <div>
                  <h1 className=" text-[16px] font-[500]">ড্যাশবোর্ড</h1>
                </div>
              )}
            </NavLink>

            <div className=" text-white flex flex-col w-full">
              <div
                onClick={toggleDropdown}
                className={`px-2 py-3 rounded-[3px] cursor-pointer hover:bg-[#dafff8] ${isCourseOpen ? "bg-[#dafff8] " : "bg-white"
                  }`}
              >
                <div className="flex justify-between items-center">
                  <div className="flex flex-row gap-2">
                    <img src={layer_black} alt="Manage Course" />
                    {sidebarOpen && (
                      <h1 className="text_black_gray text-[16px] font-[500]">
                        ম্যানেজ কোর্স
                      </h1>
                    )}
                  </div>
                  {sidebarOpen && (
                    <div>
                      <svg
                        className={` w-6 text-[#20ac90] transform transition-transform duration-300 ${isCourseOpen ? "rotate-180" : "rotate-0"
                          }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.293 7.293a1 1 0 0 1 1.414 0L10 9.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div
              className={` transition-[max-height] duration-700 ease-in-out ${isCourseOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
                }`}
            >
              <div className="flex flex-col gap-2 pl-4">
                <NavLink
                  to="/admin/manage-course"
                  className="flex flex-row gap-2 p-3 rounded-[3px]"
                >
                  <img src={layer_black} alt="All Courses" />
                  {sidebarOpen && (
                    <h1 className="text_black_gray text-[16px] font-[500]">
                      সব কোর্স
                    </h1>
                  )}
                </NavLink>
                <NavLink
                  to="/admin/manage-course-course-category"
                  className="flex flex-row gap-2 p-3 rounded-[3px]"
                >
                  <img src={layer_black} alt="Course Category" />
                  {sidebarOpen && (
                    <h1 className="text_black_gray text-[16px] font-[500]">
                      কোর্স ক্যাটাগরি
                    </h1>
                  )}
                </NavLink>
                <NavLink
                  to="manage-batch"
                  className="flex flex-row gap-2 p-3 rounded-[3px]"
                >
                  <img src={layer_black} alt="Batch" />
                  {sidebarOpen && (
                    <h1 className="text_black_gray text-[16px] font-[500]">
                      ব্যাচ
                    </h1>
                  )}
                </NavLink>
                {/* <NavLink
                  to="manage-video-course"
                  className="flex flex-row gap-2 p-3 rounded-[3px]"
                >
                  <img src={layer_black} alt="Batch" />
                  {sidebarOpen && (
                    <h1 className="text_black_gray text-[16px] font-[500]">
                      ভিডিও কোর্স List
                    </h1>
                  )}
                </NavLink> */}
                <NavLink
                  to="manage-unit"
                  className="flex flex-row gap-2 p-3 rounded-[3px]"
                >
                  <img src={layer_black} alt="Unit" />
                  {sidebarOpen && (
                    <h1 className="text_black_gray text-[16px] font-[500]">
                      ইউনিট
                    </h1>
                  )}
                </NavLink>
                <NavLink
                  to="manage-quiz"
                  className="flex flex-row gap-2 p-3 rounded-[3px]"
                >
                  <img src={layer_black} alt="Quiz" />
                  {sidebarOpen && (
                    <h1 className="text_black_gray text-[16px] font-[500]">
                      কুইজ
                    </h1>
                  )}
                </NavLink>
                <NavLink
                  to="manage-question"
                  className="flex flex-row gap-2 p-3 rounded-[3px]"
                >
                  <img src={layer_black} alt="Question" />
                  {sidebarOpen && (
                    <h1 className="text_black_gray text-[16px] font-[500]">
                      কোয়েশ্চেন
                    </h1>
                  )}
                </NavLink>
                <NavLink
                  to="question-tag"
                  className="flex flex-row gap-2 p-3 rounded-[3px]"
                >
                  <img src={layer_black} alt="Question Tag" />
                  {sidebarOpen && (
                    <h1 className="text_black_gray text-[16px] font-[500]">
                      কোয়েশ্চেন ট্যাগ
                    </h1>
                  )}
                </NavLink>
                <NavLink
                  to="manage-assignment"
                  className="flex flex-row gap-2 p-3 rounded-[3px]"
                >
                  <img src={layer_black} alt="Assignment" />
                  {sidebarOpen && (
                    <h1 className="text_black_gray text-[16px] font-[500]">
                      এসাইনমেন্ট
                    </h1>
                  )}
                </NavLink>
              </div>
            </div>

            <NavLink
              to="bundle-course"
              className=" flex flex-row bg-white gap-2 p-3 rounded-[3px]"
            >
              <img src={layer_black} alt="Bundle Course" />
              {sidebarOpen && (
                <h1 className="text_black_gray text-[16px] font-[500]">
                  বান্ডেল কোর্স
                </h1>
              )}
            </NavLink>
            {/* <NavLink
              to="manage-section"
              className="flex flex-row gap-2 p-3 rounded-[3px]"
            >
              <img src={layer_black} alt="" />
              {sidebarOpen && (
                <h1 className="text_black_gray text-[16px] font-[500]">
                  ম্যানেজ সেকশন
                </h1>
              )}
            </NavLink> */}
            <NavLink
              to="manage-certificate"
              className="flex flex-row bg-white gap-2 p-3 rounded-[3px]"
            >
              <img src={layer_black} alt="" />
              {sidebarOpen && (
                <h1 className="text_black_gray text-[16px] font-[500]">
                  ম্যানেজ সার্টিফিকেট
                </h1>
              )}
            </NavLink>
            <NavLink
              to="manage-forum"
              className="flex flex-row bg-white gap-2 p-3 rounded-[3px]"
            >
              <img src={layer_black} alt="" />
              {sidebarOpen && (
                <h1 className="text_black_gray text-[16px] font-[500]">
                  ম্যানেজ ফোরাম
                </h1>
              )}
            </NavLink>
            <Link
              // to="manage-institute"
              className="flex flex-row bg-white gap-2 p-3 rounded-[3px]"
            >
              <img src={activity_black} alt="" />
              {sidebarOpen && (
                <h1 className="text_black_gray text-[16px] font-[500]">
                  ম্যানেজ ইন্সটিউট
                </h1>
              )}
            </Link>
            <NavLink
              to="promocode"
              className="flex flex-row gap-2 p-3 rounded-[3px]"
            >
              <img src={activity_black} alt="" />
              {sidebarOpen && (
                <h1 className="text_black_gray text-[16px] font-[500]">
                  ম্যানেজ প্রমোকোড
                </h1>
              )}
            </NavLink>
            <NavLink
              to="manage-instructor"
              className="flex flex-row bg-white gap-2 p-3 rounded-[3px]"
            >
              <img src={activity_black} alt="" />
              {sidebarOpen && (
                <h1 className="text_black_gray text-[16px] font-[500]">
                  ম্যানেজ ইন্সট্রাক্টর
                </h1>
              )}
            </NavLink>
            <NavLink
              to="manage-student"
              className="flex flex-row bg-white gap-2 p-3 rounded-[3px]"
            >
              <img src={activity_black} alt="" />
              {sidebarOpen && (
                <h1 className="text_black_gray text-[16px] font-[500]">
                  ম্যানেজ স্টুডেন্ট
                </h1>
              )}
            </NavLink>
            <NavLink
              to="manage-seminar"
              className="flex flex-row bg-white gap-2 p-3 rounded-[3px]"
            >
              <img src={layer_black} alt="" />
              {sidebarOpen && (
                <h1 className="text_black_gray text-[16px] font-[500]">
                  ম্যানেজ সেমিনার
                </h1>
              )}
            </NavLink>
            <div className=" text-white flex flex-col w-full">
              <div
                onClick={toggleAdminDropdown}
                className={`px-2 py-3 rounded-[3px] cursor-pointer hover:bg-[#dafff8] ${isAdminOpen ? "bg-[#dafff8] " : "bg-white"
                  }`}
              >
                <div className="flex justify-between items-center">
                  <div className="flex flex-row gap-2">
                    <img src={file_create_black} alt="" />
                    {sidebarOpen && (
                      <h1 className="text_black_gray text-[16px] font-[500]">
                        অ্যাডমিন ইউজার
                      </h1>
                    )}
                  </div>
                  {sidebarOpen && (
                    <div>
                      <svg
                        className={` w-6 transform text-[#20ac90] transition-transform duration-300 ${isAdminOpen ? "rotate-180" : "rotate-0"
                          }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.293 7.293a1 1 0 0 1 1.414 0L10 9.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div
              className={`bg-white transition-[max-height] duration-700 ease-in-out ${isAdminOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
                }`}
            >
              <div className="flex flex-col gap-2 pl-4">
                <NavLink
                  to="manage-role"
                  className="flex flex-row gap-2 p-3 rounded-[3px]"
                >
                  <img src={activity_black} alt="" />
                  {sidebarOpen && (
                    <h1 className="text_black_gray text-[16px] font-[500]">
                      ম্যানেজ রোল
                    </h1>
                  )}
                </NavLink>
                <NavLink
                  to="manage-admin"
                  className="flex flex-row gap-2 p-3 rounded-[3px]"
                >
                  <img src={file_create_black} alt="" />
                  {sidebarOpen && (
                    <h1 className="text_black_gray text-[16px] font-[500]">
                      অ্যাডমিন ইউজার
                    </h1>
                  )}
                </NavLink>
                <NavLink
                  to="manage-role-permission"
                  className="flex flex-row gap-2 p-3 rounded-[3px]"
                >
                  <img src={layer_black} alt="Unit" />
                  {sidebarOpen && (
                    <h1 className="text_black_gray text-[16px] font-[500]">
                      ম্যানু পারমিশন
                    </h1>
                  )}
                </NavLink>
              </div>
            </div>
            <Link
              // to="manage-parent"
              className="flex bg-white flex-row gap-2 p-3 rounded-[3px]"
            >
              <img src={file_create_black} alt="" />
              {sidebarOpen && (
                <h1 className="text_black_gray text-[16px] font-[500]">
                  ম্যানেজ প্যারেন্ট
                </h1>
              )}
            </Link>
            <NavLink
              to="public-qna"
              className="flex bg-white flex-row gap-2 p-3 rounded-[3px]"
            >
              <img src={file_create_black} alt="" />
              {sidebarOpen && (
                <h1 className="text_black_gray text-[16px] font-[500]">
                  পাবলিক QNA
                </h1>
              )}
            </NavLink>
            <Link
              // to="commission"
              className="flex bg-white flex-row gap-2 p-2 rounded-[3px]"
            >
              <img src={percent_outline} alt="" />{" "}
              {sidebarOpen && (
                <h1 className="text_black_gray text-[16px] font-[500]">
                  কমিশন
                </h1>
              )}
            </Link>
            <NavLink
              to="all-payment"
              className="flex bg-white flex-row gap-2 p-2 rounded-[3px]"
            >
              <img src={bdt_icon_black} alt="" />{" "}
              {sidebarOpen && (
                <h1 className="text_black_gray text-[16px] font-[500]">
                  পেমেন্ট
                </h1>
              )}
            </NavLink>
            <Link
              // to="/certificate"
              className="flex flex-row bg-white gap-2 p-2 rounded-[3px]"
            >
              <img src={certificate_icon} alt="" />{" "}
              {sidebarOpen && (
                <h1 className="text_black_gray text-[16px] font-[500]">
                  সার্টিফিকেট
                </h1>
              )}
            </Link>
            <Link
              // to="group"
              className="flex flex-row bg-white gap-2 p-2 rounded-[3px]"
            >
              <img src={three_user_group} alt="" />{" "}
              {sidebarOpen && (
                <h1 className="text_black_gray text-[16px] font-[500]">
                  গ্রুপ
                </h1>
              )}
            </Link>
            <Link
              // to="/socialActivity"
              className="flex flex-row bg-white gap-2 p-2 rounded-[3px]"
            >
              <img src={chat_icon} alt="" />{" "}
              {sidebarOpen && (
                <h1 className="text_black_gray text-[16px] font-[500]">
                  চ্যাটিং
                </h1>
              )}
            </Link>
            <NavLink
              to="/admin/random-quiz"
              className="flex flex-row bg-white gap-2 p-2 rounded-[3px]"
            >
              <img src={chat_icon} alt="" />{" "}
              {sidebarOpen && (
                <h1 className="text_black_gray text-[16px] font-[500]">
                  কুইজ
                </h1>
              )}
            </NavLink>

            {/* ======> Manage blog <======= */}
            <div>
              <div className=" text-white flex flex-col w-full">
                <div
                  onClick={() => setIsBlogOpen(!isBlogOpen)}
                  className={`px-2 py-3 rounded-[3px] cursor-pointer hover:bg-[#dafff8] ${isBlogOpen ? "bg-[#dafff8] " : "bg-white"
                    }`}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex flex-row gap-2">
                      <img src={file_create_black} alt="" />

                      <h1 className="text_black_gray text-[16px] font-[500]">
                        ম্যানেজ ব্লগ
                      </h1>
                    </div>

                    <div>
                      <svg
                        className={` w-6 text-[#20ac90] transform transition-transform duration-300 ${isBlogOpen ? "rotate-180" : "rotate-0"
                          }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.293 7.293a1 1 0 0 1 1.414 0L10 9.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={` transition-[max-height] duration-700 ease-in-out ${isBlogOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
                  }`}
              >
                <div className="flex flex-col gap-2 pl-4 mt-[10px]">
                  <NavLink
                    to="manage-blog-category"
                    className="flex flex-row gap-2 p-3 rounded-[3px]"
                  >
                    <img src={file_create_black} alt="" />
                    {sidebarOpen && (
                      <h1 className="text_black_gray text-[16px] font-[500]">
                        ব্লগ ক্যাটাগরি
                      </h1>
                    )}
                  </NavLink>
                  <NavLink
                    to="manage-blog"
                    className="flex flex-row gap-2 p-3 rounded-[3px]"
                  >
                    <img src={file_create_black} alt="" />
                    {sidebarOpen && (
                      <h1 className="text_black_gray text-[16px] font-[500]">
                        ম্যানেজ ব্লগ
                      </h1>
                    )}
                  </NavLink>
                  <NavLink
                    to="instructor-blog"
                    className="flex flex-row gap-2 p-3 rounded-[3px]"
                  >
                    <img src={file_create_black} alt="" />
                    {sidebarOpen && (
                      <h1 className="text_black_gray text-[16px] font-[500]">
                        ম্যানেজ ইন্সট্রাক্টর ব্লগ
                      </h1>
                    )}
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <div className="pb-7">
          <div className="p-[13px] lg:p-[14px] bg-white">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="second_text_color text-[16px] md:text-[24px] lg:text-[28px] font-[500] lg:font-[600] leading-[36px]">
                  Welcome to Admin
                </h1>
              </div>

              <div
                className="hover:cursor-pointer"
                onClick={() => setIsUserModalOpen(!isUserModalOpen)}
              >
                <div className="lg:pe-16 flex flex-row items-center gap-4 md:gap-10 lg:gap-10">
                  <img className="w-6 lg:w-8" src={bell_gray} alt="" />
                  <div className="flex flex-row gap-3 items-center">
                    <Link to="">
                      {user?.pro_pic?.path ? (
                        <img
                          className="w-6 h-6 lg:h-8 lg:w-8 rounded-full object-cover"
                          src={baseUrl + user?.pro_pic?.path}
                          alt=""
                        />
                      ) : (
                        <img className="w-6 lg:w-8" src={user_icon} alt="" />
                      )}
                    </Link>

                    <div>
                      <h1 className="text-[#5D636F] text-[12px] lg:text-[16px] font-[500] leading-[20px]">
                        স্বাগতম
                      </h1>
                      <div className="relative">
                        <h1 className="text-[#2E3138] text-[14px] lg:text-[20px] font-[500] leading-[20px]">
                          {user?.fullName?.slice(0, 7)?.toUpperCase()}
                        </h1>

                        {/* dropdown div  */}

                        {isUserModalOpen && (
                          <div className="bg-white z-10 rounded-md shadow-2xl absolute top-9 -left-5 transition-opacity duration-300 opacity-100 min-w-[100px]">
                            <ul ref={modalRef}>
                              <li>
                                <Link
                                  to={`${"/admin/userProfile"}`}
                                  className={`flex items-center justify-between text-[16px] font-[600] border-b-2 py-2 w-full px-3 hover:bg-slate-200`}
                                >
                                  <FaRegCircleUser /> Profile
                                </Link>
                              </li>
                              <li>
                                <button
                                  onClick={logout}
                                  type="button"
                                  className={`flex items-center justify-between text-[16px] font-[600] border-b-2 py-2 w-full px-3 hover:bg-slate-200`}
                                >
                                  <MdOutlineLogout /> Logout
                                </button>
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Admin;
