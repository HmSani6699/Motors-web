import React, { useContext, useEffect, useRef, useState } from "react";
import logo from "../../../assets/images/Logo.png";
import logo_main from "../../../assets/svg/main_logo.svg";
import left_arrow from "../../../assets/svg/right_arrow_black.svg";
import dashboard_outline from "../../../assets/svg/view-dashboard-outline.svg";
import layer_black from "../../../assets/svg/layer_black.svg";
import quiz_black from "../../../assets/svg/quiz_black.svg";
import video_camera from "../../../assets/svg/video-camera.svg";
import activity_black from "../../../assets/svg/activity_black.svg";
import percent_outline from "../../../assets/svg/percent-outline.svg";
import bdt_icon_black from "../../../assets/svg/bdt_icon_black.svg";
import certificate_icon from "../../../assets/svg/certificate_icon_black.svg";
import three_user_group from "../../../assets/svg/three_user-group_black.svg";
import file_create_black from "../../../assets/svg/file-create_black.svg";
import chat_icon from "../../../assets/svg/chat-alt.svg";
import bell_gray from "../../../assets/svg/bell_gray.svg";
import user_icon from "../../../assets/svg/user-profile_gray.svg";
import learning_path_photo from "../../../assets/images/e-learning_learning_path_icon.png";
import { Link, NavLink, Outlet } from "react-router-dom";
import { MdOutlineKeyboardArrowRight, MdOutlineLogout } from "react-icons/md";
import { AuthContext } from "../../../layout/MainLayout";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoMdLogOut } from "react-icons/io";
// import downArrowIcon from "../../assets/svg/down_arrow.svg";

const StudentDashboardSideBar = () => {
  const modalRef = useRef(null);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const baseUrl = import.meta.env.VITE_BASE_URL;

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
    <div className="mx-auto flex flex-row gap-4">
      {/* <div
                className={`hidden lg:block w-[400px] bg-white transform transition-transform
                  ${sidebarOpen ? " translate-x-0" : "-translate-x-[285px]"}
                  `}
            >
                <div className=" py-4 relative border-b border-[#E3E5E8]">
                    <Link to="/" ><img className="mx-auto w-[75%]" src={logo} alt="" /></Link>
                    <button
                        onClick={toggleSidebar}
                        className="absolute -right-3 top-6 bg-white shadow-md rounded-[3px]"
                    >
                        <img className="" src={left_arrow} alt="" />
                    </button>
                </div>

                <div className='p-5 flex flex-col gap-2.5'>
                    <NavLink to='' className='flex flex-row gap-2 p-2.5 rounded-[3px]'>
                        <img src={dashboard_outline} alt="" />
                        <h1 className=' text-[16px] font-[500]'>ড্যাশবোর্ড</h1>
                    </NavLink>
                    <NavLink to='my-course' className='flex flex-row gap-2 p-2.5 rounded-[3px]'>
                        <img src={layer_black} alt="" />
                        <h1 className='text_black_gray text-[16px] font-[500]'>আমার কোর্স</h1>
                    </NavLink>
                    <NavLink to='my-quiz' className='flex flex-row gap-2 p-2.5 rounded-[3px]'>
                        <img src={quiz_black} alt="" />
                        <h1 className='text_black_gray text-[16px] font-[500]'>আমার কুইজ</h1>
                    </NavLink>
                    <NavLink to='live-class' className='flex flex-row gap-2 p-2.5 rounded-[3px]'>
                        <img src={video_camera} alt="" />
                        <h1 className='text_black_gray text-[16px] font-[500]'>লাইভ ক্লাস</h1>
                    </NavLink>
                    <NavLink to='/activity' className='flex flex-row gap-2 p-2.5 rounded-[3px]'>
                        <img src={activity_black} alt="" />
                        <h1 className='text_black_gray text-[16px] font-[500]'>এক্টিভিটিস</h1>
                    </NavLink>
                    <NavLink to='/learningPath' className='flex flex-row gap-2 p-2.5 rounded-[3px]'>
                        <div>
                            <img src={learning_path_photo} alt="" />
                        </div>
                        <h1 className='text_black_gray text-[16px] font-[500]'>লার্নিং পাথ</h1>
                    </NavLink>
                    <NavLink to='commission' className='flex flex-row gap-2 p-2.5 rounded-[3px]'>
                        <img src={percent_outline} alt="" />
                        <h1 className='text_black_gray text-[16px] font-[500]'>কমিশন</h1>
                    </NavLink>
                    <NavLink to='payment' className='flex flex-row gap-2 p-2.5 rounded-[3px]'>
                        <img src={bdt_icon_black} alt="" />
                        <h1 className='text_black_gray text-[16px] font-[500]'>পেমেন্ট</h1>
                    </NavLink>
                    <NavLink to='certificate' className='flex flex-row gap-2 p-2.5 rounded-[3px]'>
                        <img src={certificate_icon} alt="" />
                        <h1 className='text_black_gray text-[16px] font-[500]'>সার্টিফিকেট</h1>
                    </NavLink>
                    <NavLink to='/socialActivity' className='flex flex-row gap-2 p-2.5 rounded-[3px]'>
                        <img src={three_user_group} alt="" />
                        <h1 className='text_black_gray text-[16px] font-[500]'>সোস্যাল এক্টিভিটিস</h1>
                    </NavLink>
                    <NavLink to='add-course' className='flex flex-row gap-2 p-2.5 rounded-[3px]'>
                        <img src={file_create_black} alt="" />
                        <h1 className='text_black_gray text-[16px] font-[500]'>কোর্স তৈরি করুন</h1>
                    </NavLink>

                </div>
            </div> */}

      {/* --------------------- */}
      <div
        className={` bg-white duration-300 ${sidebarOpen ? "w-72" : "w-16"}`}
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
              to="/student"
              className="flex flex-row gap-2 px-2 py-2 rounded-[3px] "
            >
              <img src={dashboard_outline} alt="" />
              {sidebarOpen && (
                <div>
                  <h1 className=" text-[16px] font-[500]">ড্যাশবোর্ড</h1>
                </div>
              )}
            </NavLink>

            <NavLink
              to="my-course"
              className="flex flex-row gap-2 p-3 rounded-[3px]"
            >
              <img src={layer_black} alt="" />
              {sidebarOpen && (
                <h1 className="text_black_gray text-[16px] font-[500]">
                  আমার কোর্স
                </h1>
              )}
            </NavLink>
            <NavLink
              to="my-quiz"
              className="flex flex-row gap-2 p-3 rounded-[3px]"
            >
              <img src={quiz_black} alt="" />
              {sidebarOpen && (
                <h1 className="text_black_gray text-[16px] font-[500]">
                  আমার কুইজ
                </h1>
              )}
            </NavLink>

            <NavLink
              to="live-class"
              className="flex flex-row gap-2 p-3 rounded-[3px]"
            >
              <img src={video_camera} alt="" />
              {sidebarOpen && (
                <h1 className="text_black_gray text-[16px] font-[500]">
                  লাইভ ক্লাস
                </h1>
              )}
            </NavLink>
            <NavLink
              to="booking-instructor"
              className="flex flex-row gap-2 p-3 rounded-[3px]"
            >
              <img src={video_camera} alt="" />
              {sidebarOpen && (
                <h1 className="text_black_gray text-[16px] font-[500]">
                  বুকিং ইন্সট্রাক্টর
                </h1>
              )}
            </NavLink>
            <NavLink
              to="my-batch"
              className="flex flex-row gap-2 p-3 rounded-[3px]"
            >
              <img src={video_camera} alt="" />
              {sidebarOpen && (
                <h1 className="text_black_gray text-[16px] font-[500]">
                  আমার ব্যাচ
                </h1>
              )}
            </NavLink>
            <Link
              // to="activity"
              className="flex flex-row gap-2 p-3 rounded-[3px]"
            >
              <img src={activity_black} alt="" />
              {sidebarOpen && (
                <h1 className="text_black_gray text-[16px] font-[500]">
                  এক্টিভিটিস
                </h1>
              )}
            </Link>
            <NavLink
              to="learningPath"
              className="flex flex-row gap-2 p-3 rounded-[3px]"
            >
              <img src={learning_path_photo} alt="" />
              {sidebarOpen && (
                <h1 className="text_black_gray text-[16px] font-[500]">
                  লার্নিং পাথ
                </h1>
              )}
            </NavLink>
            <NavLink
              to="commission"
              className="flex flex-row gap-2 p-3 rounded-[3px]"
            >
              <img src={percent_outline} alt="" />
              {sidebarOpen && (
                <h1 className="text_black_gray text-[16px] font-[500]">
                  কমিশন
                </h1>
              )}
            </NavLink>
            <NavLink
              to="payment"
              className="flex flex-row gap-2 p-3 rounded-[3px]"
            >
              <img src={bdt_icon_black} alt="" />
              {sidebarOpen && (
                <h1 className="text_black_gray text-[16px] font-[500]">
                  পেমেন্ট
                </h1>
              )}
            </NavLink>

            <NavLink
              to="certificate"
              className="flex flex-row gap-2 p-3 rounded-[3px]"
            >
              <img src={certificate_icon} alt="" />
              {sidebarOpen && (
                <h1 className="text_black_gray text-[16px] font-[500]">
                  এচিভমেন্ট
                </h1>
              )}
            </NavLink>
            <Link
              // to="social-activity"
              className="flex flex-row gap-2 p-3 rounded-[3px]"
            >
              <img src={three_user_group} alt="" />
              {sidebarOpen && (
                <h1 className="text_black_gray text-[16px] font-[500]">
                  সোস্যাল এক্টিভিটিস
                </h1>
              )}
            </Link>
            <NavLink
              to="add-course"
              className="flex  flex-row gap-2 p-3 rounded-[3px]"
            >
              <img src={file_create_black} alt="" />
              {sidebarOpen && (
                <h1 className="text_black_gray text-[16px] font-[500]">
                  কোর্স তৈরি করুন
                </h1>
              )}
            </NavLink>
            <NavLink
              to="userProfile"
              className="flex items-center flex-row gap-2 p-3 rounded-[3px]"
            >
              <img className="w-6 lg:w-7" src={user_icon} alt="" />
              {sidebarOpen && (
                <h1 className="text_black_gray text-[16px] font-[500]">
                  প্রোফাইল সেটিংস
                </h1>
              )}
            </NavLink>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="w-full overflow-hidden">
        <div className="w-full pb-7">
          <div className="p-[13px] lg:p-[14px] bg-white">
            <div className=" flex items-center justify-between">
              <div>
                <h1 className="second_text_color text-[16px] md:text-[24px] lg:text-[28px] font-[500] lg:font-[600] leading-[36px]">
                  Welcome to Student
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
                          className="w-6 h-6 lg:h-8 lg:w-8  rounded-full object-cover"
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

                        {isUserModalOpen && (<div
                          className="bg-white z-10 rounded-md shadow-2xl absolute top-9 -left-5 transition-opacity duration-300 opacity-100 min-w-[100px]"
                        >
                          <ul ref={modalRef}>
                            <li>
                              <Link
                                to={`${"/student/userProfile"}`}
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
                        </div>)}

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

export default StudentDashboardSideBar;

{
  /* section x

batch
unit
qiuz
assignment
questions
questions tag

admin 
role
admin user
permission

instructor -- */
}
