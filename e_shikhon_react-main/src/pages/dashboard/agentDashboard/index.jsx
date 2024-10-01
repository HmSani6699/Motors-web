import React, { useContext, useState } from "react";
import logo from "../../../assets/images/Logo.png";
import left_arrow from "../../../assets/svg/right_arrow_black.svg";
import dashboard_outline from "../../../assets/svg/view-dashboard-outline.svg";
import layer_black from "../../../assets/svg/layer_black.svg";
import video_camera from "../../../assets/svg/video-camera.svg";
import activity_black from "../../../assets/svg/activity_black.svg";
import percent_outline from "../../../assets/svg/percent-outline.svg";
import bdt_icon_black from "../../../assets/svg/bdt_icon_black.svg";
import certificate_icon from "../../../assets/svg/certificate_icon_black.svg";
import three_user_group from "../../../assets/svg/three_user-group_black.svg";
import file_create_black from "../../../assets/svg/file-create_black.svg";
import chat_icon from "../../../assets/svg/chat-alt.svg";
import bell_gray from "../../../assets/svg/bell_gray.svg";
import assignment_icon from "../../../assets/svg/assignment_icon.svg";
import user_icon from "../../../assets/svg/user-profile_gray.svg";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../../layout/MainLayout";

const AgentDashboardSideBar = () => {
    const { user } = useContext(AuthContext)
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const [isCourseOpen, setIsCourseOpen] = useState(false);
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    const toggleDropdown = () => {
        setIsCourseOpen(!isCourseOpen);
    };
    return (
        <div className="mx-auto flex flex-row gap-4">
            <div
                className={`hidden lg:block w-[400px] bg-white transform transition-transform
                ${sidebarOpen ? " translate-x-0" : "-translate-x-[285px]"}
                `}
            >
                <div className=" py-4 relative border-b border-[#E3E5E8]">
                    <Link to="/">
                        <img className="mx-auto w-[75%]" src={logo} alt="" />
                    </Link>
                    <button
                        onClick={toggleSidebar}
                        className="absolute -right-3 top-6 bg-white shadow-md rounded-[3px]"
                    >
                        <img className="" src={left_arrow} alt="" />
                    </button>
                </div>

                <div className="p-5 flex flex-col gap-2.5">
                    <NavLink to="" className="flex flex-row gap-2 p-2.5 rounded-[3px]">
                        <img src={dashboard_outline} alt="" />
                        <h1 className=" text-[16px] font-[500]">ড্যাশবোর্ড</h1>
                    </NavLink>
                    {/* <NavLink
            to="course-list"
            className="flex flex-row gap-2 p-2.5 rounded-[3px]"
          >
            <img src={layer_black} alt="" />
            <h1 className="text_black_gray text-[16px] font-[500]">
              কোর্স লিস্ট
            </h1>
          </NavLink> */}
                    <div className=" text-white flex flex-col w-full">
                        <NavLink
                            onClick={toggleDropdown}
                            className="px-2 py-3 rounded-[3px]"
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
                                            className={` w-6 transform transition-transform duration-300 ${isCourseOpen ? "rotate-180" : "rotate-0"
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
                        </NavLink>
                    </div>

                    <div
                        className={` transition-[max-height] duration-700 ease-in-out ${isCourseOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
                            }`}
                    >
                        <div className="flex flex-col gap-2 pl-4">
                            <NavLink
                                to="/instructor/manage-course"
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
                                to="/instructor/manage-course-course-category"
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
                        to="booking-list"
                        className="flex flex-row gap-2 p-2.5 rounded-[3px]"
                    >
                        <img src={video_camera} alt="" />
                        {/* <h1 className='text_black_gray text-[16px] font-[500]'>বুকিং লিস্ট</h1> */}
                        <h1 className="text_black_gray text-[16px] font-[500]">
                            ম্যানেজ স্লট এন্ড বুকিং
                        </h1>
                    </NavLink>
                    <NavLink
                        to="live-class"
                        className="flex flex-row gap-2 p-2.5 rounded-[3px]"
                    >
                        <img src={activity_black} alt="" />
                        <h1 className="text_black_gray text-[16px] font-[500]">
                            লাইভ ক্লাস
                        </h1>
                    </NavLink>
                    <NavLink
                        to="/createCourse"
                        className="flex flex-row gap-2 p-2.5 rounded-[3px]"
                    >
                        <img src={file_create_black} alt="" />
                        <h1 className="text_black_gray text-[16px] font-[500]">
                            কোর্স তৈরি করুন
                        </h1>
                    </NavLink>
                    <NavLink
                        to="assignment"
                        className="flex flex-row gap-2 p-2.5 rounded-[3px]"
                    >
                        <img src={assignment_icon} alt="" />
                        <h1 className="text_black_gray text-[16px] font-[500]">
                            এ্যাসাইনমেন্ট
                        </h1>
                    </NavLink>
                    <NavLink
                        to="commission"
                        className="flex flex-row gap-2 p-2.5 rounded-[3px]"
                    >
                        <img src={percent_outline} alt="" />
                        <h1 className="text_black_gray text-[16px] font-[500]">কমিশন</h1>
                    </NavLink>
                    <NavLink
                        to="payment"
                        className="flex flex-row gap-2 p-2.5 rounded-[3px]"
                    >
                        <img src={bdt_icon_black} alt="" />
                        <h1 className="text_black_gray text-[16px] font-[500]">পেমেন্ট</h1>
                    </NavLink>
                    <NavLink
                        to="/certificate"
                        className="flex flex-row gap-2 p-2.5 rounded-[3px]"
                    >
                        <img src={certificate_icon} alt="" />
                        <h1 className="text_black_gray text-[16px] font-[500]">
                            সার্টিফিকেট
                        </h1>
                    </NavLink>
                    <NavLink
                        to="/socialActivity"
                        className="flex flex-row gap-2 p-2.5 rounded-[3px]"
                    >
                        <img src={three_user_group} alt="" />
                        <h1 className="text_black_gray text-[16px] font-[500]">গ্রুপ</h1>
                    </NavLink>
                    <NavLink
                        to="/socialActivity"
                        className="flex flex-row gap-2 p-2.5 rounded-[3px]"
                    >
                        <img src={chat_icon} alt="" />
                        <h1 className="text_black_gray text-[16px] font-[500]">চ্যাটিং</h1>
                    </NavLink>
                </div>
            </div>

            {/*  */}
            <div className="w-full overflow-hidden">
                <div className="w-full  pb-7">
                    <div className="p-[13px] lg:p-[19px] bg-white">
                        <div className=" flex items-center justify-between">
                            <div>
                                <h1 className="second_text_color text-[16px] md:text-[24px] lg:text-[28px] font-[500] lg:font-[600] leading-[36px]">
                                    Welcome to Agent
                                </h1>
                            </div>
                            <Link to="/dashboard/profileSetting">
                                <div className="lg:pe-16 flex flex-row items-center gap-4 md:gap-10 lg:gap-10">
                                    <img className="w-6 lg:w-8" src={bell_gray} alt="" />
                                    <div className="flex flex-row gap-3 items-center">
                                        <Link to="/profileSetting">
                                            <img className="w-6 lg:w-8" src={user_icon} alt="" />
                                        </Link>

                                        <div>
                                            <h1 className="text-[#5D636F] text-[12px] lg:text-[16px] font-[500] leading-[20px]">
                                                স্বাগতম
                                            </h1>
                                            <h1 className="text-[#2E3138] text-[14px] lg:text-[20px] font-[500] leading-[20px]">
                                                <h1 className="text-[#2E3138] text-[14px] lg:text-[20px] font-[500] leading-[20px]">
                                                    {user?.fullName?.slice(0, 7)?.toUpperCase()}
                                                </h1>
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AgentDashboardSideBar;