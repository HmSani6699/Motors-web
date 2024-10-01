import React, { useState } from 'react';
import logo from '../../../assets/images/Logo.png'
import left_arrow from '../../../assets/svg/right_arrow_black.svg'
import dashboard_outline from '../../../assets/svg/view-dashboard-outline.svg'
import layer_black from '../../../assets/svg/layer_black.svg'
import video_camera from '../../../assets/svg/video-camera.svg'
import activity_black from '../../../assets/svg/activity_black.svg'
import percent_outline from '../../../assets/svg/percent-outline.svg'
import bdt_icon_black from '../../../assets/svg/bdt_icon_black.svg'
import certificate_icon from '../../../assets/svg/certificate_icon_black.svg'
import three_user_group from '../../../assets/svg/three_user-group_black.svg'
import file_create_black from '../../../assets/svg/file-create_black.svg'
import chat_icon from '../../../assets/svg/chat-alt.svg'
import bell_gray from '../../../assets/svg/bell_gray.svg'
import user_icon from '../../../assets/svg/user-profile_gray.svg'
import { Link, NavLink, Outlet } from 'react-router-dom';

const ParentDashboardSideBar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    return (
        <div className="mx-auto flex flex-row gap-4">
            <div
                className={`hidden lg:block w-[400px] bg-white transform transition-transform
            ${sidebarOpen ? " translate-x-0" : "-translate-x-[285px]"}
            `}
            >
                <div className=" py-4 relative border-b border-[#E3E5E8]">
                    <img className="mx-auto w-[75%]" src={logo} alt="" />
                    <button
                        onClick={toggleSidebar}
                        className="absolute -right-3 top-6 bg-white shadow-md rounded-[3px]"
                    >
                        <img className="" src={left_arrow} alt="" />
                    </button>
                </div>

                <div className='p-5 flex flex-col gap-2.5'>
                    <NavLink to='/dashboard/parentDashboard' className='flex flex-row gap-2 p-2.5 rounded-[3px]'>
                        <img src={dashboard_outline} alt="" />
                        <h1 className=' text-[16px] font-[500]'>ড্যাশবোর্ড</h1>
                    </NavLink>

                    <NavLink to='/activity' className='flex flex-row gap-2 p-2.5 rounded-[3px]'>
                        <img src={activity_black} alt="" />
                        <h1 className='text_black_gray text-[16px] font-[500]'>ম্যানেজ স্টুডেন্ট</h1>
                    </NavLink>

                    <NavLink to='/commission' className='flex flex-row gap-2 p-2.5 rounded-[3px]'>
                        <img src={percent_outline} alt="" />
                        <h1 className='text_black_gray text-[16px] font-[500]'>কমিশন</h1>
                    </NavLink>
                    <NavLink to='/payment' className='flex flex-row gap-2 p-2.5 rounded-[3px]'>
                        <img src={bdt_icon_black} alt="" />
                        <h1 className='text_black_gray text-[16px] font-[500]'>পেমেন্ট</h1>
                    </NavLink>

                    <NavLink to='/socialActivity' className='flex flex-row gap-2 p-2.5 rounded-[3px]'>
                        <img src={three_user_group} alt="" />
                        <h1 className='text_black_gray text-[16px] font-[500]'>গ্রুপ</h1>
                    </NavLink>
                    <NavLink to='/socialActivity' className='flex flex-row gap-2 p-2.5 rounded-[3px]'>
                        <img src={chat_icon} alt="" />
                        <h1 className='text_black_gray text-[16px] font-[500]'>চ্যাটিং</h1>
                    </NavLink>
                    <NavLink to='/createCourse' className='flex flex-row gap-2 p-2.5 rounded-[3px]'>
                        <img src={file_create_black} alt="" />
                        <h1 className='text_black_gray text-[16px] font-[500]'>কোর্স তৈরি করুন</h1>
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
                                    Welcome to Parent
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
                                                মোঃ আমিন
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

export default ParentDashboardSideBar;