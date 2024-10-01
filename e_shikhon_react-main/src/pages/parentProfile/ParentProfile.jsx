import React from 'react';
import institutePageDetailsBanner from "../../assets/images/parent_profile_bg.png"
import institutePageDetailsBanner_for_mobile from "../../assets/images/instituteDetailsBanner_for_mobile.png"
import al_amin_rounded_logo from "../../assets/images/al_amin_rounded.png"
import plusIcon from "../../assets/svg/plus_white.svg"
import user_tow_green from "../../assets/svg/user_tow_green.svg"
import yellowStar from '../../assets/svg/star_yellow.svg';
import shearIcon from '../../assets/svg/share_white.svg';
import chatIcon from '../../assets/svg/chat-white.svg';
import activity_green from '../../assets/svg/activity_green.svg';
import layer_black from '../../assets/svg/layer_black.svg';
import female_mentor_black from '../../assets/svg/femail_mentor_black.svg';
import student_female_black from '../../assets/svg/student_femail_black.svg';
import user_two_black from '../../assets/svg/tow_user_black.svg';
import user_add_black from '../../assets/svg/user-add_black.svg';
import italic_i_con_black from '../../assets/svg/information-i-con_black.svg';
import certificate_outline_black from '../../assets/svg/certificate-outline_black.svg';
import search_deep from '../../assets/svg/search_deep-_black.svg';
import photograph_black from '../../assets/svg/photograph_black.svg';
import video_camera_black from '../../assets/svg/video-camera_black.svg';
import achievement_icon from "../../assets/svg/badge_star.svg";
import information_icon from "../../assets/svg/information-circle.svg"
import rahmanPostPhoto from "../../assets/images/abdurrahman_post_photo.png"
import black_three_dot from "../../assets/svg/dots-horizontal_black.svg";
import heart_black from "../../assets/svg/heart_black.svg";
import comment_black from "../../assets/svg/comment_black.svg";
import share_fbStyle_black from "../../assets/svg/share_fbStyle_black.svg";
import learning_laptop from "../../assets/images/elearning-laptop_post_section.png"
import rainbow_institute_post from "../../assets/images/rainbow_institute_post.png"
import user from "../../assets/svg/user_black.svg";
import phone_black from "../../assets/svg/phone_black.svg";
import location_black from "../../assets/svg/location_pin.svg";
import Wrapper from '../../components/sheared/Wrapper';
import { scrollToTop } from '../../api/helper';

const ParentProfile = () => {
    scrollToTop();
    return (
        <>
            <div className='max-w-[1440px] mx-auto'>
                <img className='' src={institutePageDetailsBanner} alt="" />

                {/* <img className='block md:hidden' src={institutePageDetailsBanner_for_mobile} alt="" /> */}
            </div>
            {/*  */}
            <div className='bg-[#FFF] py-5'>
                <Wrapper>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-5'>
                            <div>
                                <img src={al_amin_rounded_logo} alt="" />
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex items-center gap-2.5'>
                                    <h1 className='text-[#464A53] text-[20px] md:text-[36px] lg:text-[40px] font-[600] leading-[28px] md:leading-[48px]'>
                                        Md. Al Amin
                                    </h1>
                                </div>

                                <div className='flex items-center justify-between  flex-wrap gap-3'>
                                    <div className='flex items-center gap-5 mt-2'>
                                        <button
                                            type="button"
                                            className="bg-[#20AC90] font-Baloo py-[10px] px-4  gap-2 rounded-[50px] text-[#F1F1F1] flex  "
                                        >
                                            <img src={plusIcon} alt="" />
                                            Follow
                                        </button>
                                    </div>
                                    <div className='lg:hidden flex items-center gap-7'>
                                        <button
                                            type="button"
                                            className="text-[14px] font-[500] w-full font-Baloo text-[#FFF] bg-[#20AC90] flex items-center justify-center py-[10px] px-4 gap-2 rounded-[5px]"
                                        >
                                            <img alt="icon" src={shearIcon} />
                                            ইনভাইট
                                        </button>
                                        <button
                                            type="button"
                                            className="text-[14px] font-[500] w-full font-Baloo text-[#FFF] bg-[#2872A4] flex items-center  justify-center py-[10px] px-4 gap-2 rounded-[5px]"
                                        >
                                            <img alt="icon" src={chatIcon} />
                                            চ্যাটিং
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='hidden lg:flex items-center gap-7'>
                            <button
                                type="button"
                                className="text-[14px] font-[500] w-full font-Baloo text-[#FFF] bg-[#20AC90] flex items-center justify-center py-[10px] px-4 gap-2 rounded-[5px]"
                            >
                                <img alt="icon" src={shearIcon} />
                                ইনভাইট
                            </button>
                            <button
                                type="button"
                                className="text-[14px] font-[500] w-full font-Baloo text-[#FFF] bg-[#2872A4] flex items-center  justify-center py-[10px] px-4 gap-2 rounded-[5px]"
                            >
                                <img alt="icon" src={chatIcon} />
                                চ্যাটিং
                            </button>
                        </div>
                    </div>
                    <hr className="mt-5 h-0 border-b border-solid border-[#E3E5E8]" />

                    {/*  */}
                    <div className='mt-5'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-0 lg:gap-2.5'>
                                <button
                                    type="button"
                                    className="text-[16px] font-[500] font-Baloo text-[#20AC90] bg-white flex items-center border-b-2 border-[#20AC90] justify-center py-[10px] px-3 gap-2 rounded-[3px]"
                                >
                                    <img alt="icon" src={activity_green} />
                                    All activity
                                </button>
                                <button
                                    type="button"
                                    className="text-[16px] font-[500] font-Baloo text-[#20AC90] bg-white flex items-center border-b-2 border-[#20AC90] justify-center py-[10px] px-3 gap-2 rounded-[3px]"
                                >
                                    <img alt="icon" src={activity_green} />
                                    Activity
                                </button>
                                <button
                                    type="button"
                                    className="md:hidden text-[16px] font-[500] font-Baloo text-[#2E3138] bg-white flex items-center  justify-center ms-3 py-[10px] px-3 gap-2 rounded-[3px]"
                                >
                                    <img alt="icon" src={layer_black} />
                                    More
                                </button>
                                <div className='hidden md:flex items-center gap-2.5'>

                                    <button
                                        type="button"
                                        className="text-[16px] font-[500] font-Baloo text-[#2E3138] bg-white flex items-center  justify-center py-[10px] px-3 gap-2 rounded-[3px]"
                                    >
                                        <img alt="icon" src={user_two_black} />
                                        Followers
                                    </button>
                                    <button
                                        type="button"
                                        className="text-[16px] font-[500] font-Baloo text-[#2E3138] bg-white flex items-center  justify-center py-[10px] px-3 gap-2 rounded-[3px]"
                                    >
                                        <img alt="icon" src={user_add_black} />
                                        Following
                                    </button>
                                    <button
                                        type="button"
                                        className="text-[16px] font-[500] font-Baloo text-[#2E3138] bg-white flex items-center  justify-center py-[10px] px-3 gap-2 rounded-[3px]"
                                    >
                                        <img alt="icon" src={italic_i_con_black} />
                                        About
                                    </button>
                                </div>
                            </div>
                            <div>
                                <button
                                    type="button"
                                    className="text-[16px] font-[500] font-Baloo  bg-white flex items-center  justify-center py-[10px] px-3 gap-2 rounded-[3px]"
                                >
                                    <img alt="icon" src={search_deep} />
                                </button>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </div>

            {/*  */}
            <div className="py-6 bg-[#F5F5F5]">
                <Wrapper>
                    <div className='flex gap-5'>
                        {/* left side */}
                        <div className='w-[793px] mx-auto lg:mx-0'>

                            <div className="overflow-hidden bg-white rounded-[10px]">
                                <div className="p-5">
                                    <div>
                                        <label htmlFor="OrderNotes" className="sr-only">Order notes</label>

                                        <div className="overflow-hidden">
                                            <textarea
                                                id="OrderNotes"
                                                className="w-full resize-none border-x-0 border-b border-gray-200 px-0 align-top text-[14px] font-[400] outline-none"
                                                rows="5"
                                                placeholder="Write here something"
                                            ></textarea>

                                            <div className="flex items-center justify-between gap-2 pt-3">
                                                <div className='flex items-center gap-2.5'>
                                                    <button className='flex items-center px-2 py-[2px] rounded-[50px] border border-[#F1F2F3] gap-1'>
                                                        <img src={photograph_black} alt="" srcset="" />
                                                        <h1>Photos</h1>
                                                    </button>
                                                    <button className='flex items-center px-2 py-[2px] rounded-[50px] border border-[#F1F2F3] gap-1'>
                                                        <img src={video_camera_black} alt="" srcset="" />
                                                        <h1>Videos</h1>
                                                    </button>
                                                </div>

                                                <button
                                                    type="button"
                                                    className="rounded bg-[#20AC90] px-4 py-1.5 text-sm font-medium text-white "
                                                >
                                                    Post
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* 1 */}
                            <div className="overflow-hidden bg-white rounded-[10px] mt-5">
                                <div className="p-5">
                                    <div>
                                        <div className="overflow-hidden flex flex-col gap-5">
                                            <div className='flex items-center justify-between'>
                                                <div className='flex items-center gap-3'>
                                                    <div>
                                                        <img src={rahmanPostPhoto} alt="" />
                                                    </div>
                                                    <div>
                                                        <h1 className='text-[16px] md:text-[18px] font-[600] leading-[28px] text-[#17191C]'>Abdur Rahman</h1>
                                                        <h1 className='text-[16px] md:text-[14px] font-[500] leading-[18px] text-[#2E3138]'>Graphics Designer</h1>
                                                        <h1 className='text-[16px] md:text-[14px] font-[400] leading-[18px] text-[#2E3138]'>November 7, at 6.12 PM</h1>
                                                    </div>

                                                </div>
                                                <button>
                                                    <img src={black_three_dot} alt="" />
                                                </button>

                                            </div>
                                            <div>
                                                <p className='text-[#2E3138] text-[14px] font-[400] leading-[18px]'>
                                                    যাদের বাসায় কম্পিউটার ও ইন্টারনেট কানেকশন নেই, তাঁরা ইশিখন এজেন্ট সেন্টারে এসে কোর্স সম্পন্ন করার সুযোগ পাবেন। সারা দেশে ইশিখনের রয়েছে ১৩০+ এজেন্ট সেন্টার। প্রতিটি এজেন্ট সেন্টারে রয়েছে উন্নত মানের ইন্টারনেট
                                                </p>
                                            </div>
                                            <hr className=" h-0 border-b border-solid border-[#E3E5E8] " />
                                            <div className='flex items-center justify-between'>
                                                <button className='flex items-center gap-2'>
                                                    <img src={heart_black} alt="" />
                                                    <h1>Favorited</h1>
                                                </button>
                                                <button className='flex items-center gap-2'>
                                                    <img src={comment_black} alt="" />
                                                    <h1>Comment</h1>
                                                </button>
                                                <button className='flex items-center gap-2'>
                                                    <img src={share_fbStyle_black} alt="" />
                                                    <h1>Share</h1>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 2 */}
                            <div className="overflow-hidden bg-white rounded-[10px] mt-5">
                                <div className="p-5">
                                    <div>
                                        <div className="overflow-hidden flex flex-col gap-5">
                                            <div className='flex items-center justify-between'>
                                                <div className='flex items-center gap-3'>
                                                    <div>
                                                        <img src={rahmanPostPhoto} alt="" />
                                                    </div>
                                                    <div>
                                                        <h1 className='text-[16px] md:text-[18px] font-[600] leading-[28px] text-[#17191C]'>Hamid</h1>
                                                        <h1 className='text-[16px] md:text-[14px] font-[500] leading-[18px] text-[#2E3138]'>Web Designer & Developer</h1>
                                                        <h1 className='text-[16px] md:text-[14px] font-[400] leading-[18px] text-[#2E3138]'>November 7, at 6.12 PM</h1>
                                                    </div>

                                                </div>
                                                <button>
                                                    <img src={black_three_dot} alt="" />
                                                </button>

                                            </div>
                                            <img src={learning_laptop} alt="" />
                                            <div>
                                                <p className='text-[#2E3138] text-[14px] font-[400] leading-[18px]'>
                                                    যাদের বাসায় কম্পিউটার ও ইন্টারনেট কানেকশন নেই, তাঁরা ইশিখন এজেন্ট সেন্টারে এসে কোর্স সম্পন্ন করার সুযোগ পাবেন। সারা দেশে ইশিখনের রয়েছে ১৩০+ এজেন্ট সেন্টার। প্রতিটি এজেন্ট সেন্টারে রয়েছে উন্নত মানের ইন্টারনেট
                                                </p>
                                            </div>
                                            <hr className=" h-0 border-b border-solid border-[#E3E5E8] " />
                                            <div className='flex items-center justify-between'>
                                                <button className='flex items-center gap-2'>
                                                    <img src={heart_black} alt="" />
                                                    <h1>Favorited</h1>
                                                </button>
                                                <button className='flex items-center gap-2'>
                                                    <img src={comment_black} alt="" />
                                                    <h1>Comment</h1>
                                                </button>
                                                <button className='flex items-center gap-2'>
                                                    <img src={share_fbStyle_black} alt="" />
                                                    <h1>Share</h1>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 3 */}

                            <div className="overflow-hidden bg-white rounded-[10px] mt-5">
                                <div className="p-5">
                                    <div>
                                        <div className="overflow-hidden flex flex-col gap-5">
                                            <div className='flex items-center justify-between'>
                                                <div className='flex items-center gap-3'>
                                                    <div>
                                                        <img src={rahmanPostPhoto} alt="" />
                                                    </div>
                                                    <div>
                                                        <h1 className='text-[16px] md:text-[18px] font-[600] leading-[28px] text-[#17191C]'>Rainbow Institute</h1>
                                                        <h1 className='text-[16px] md:text-[14px] font-[500] leading-[18px] text-[#2E3138]'>Web Designer & Developer</h1>
                                                        <h1 className='text-[16px] md:text-[14px] font-[400] leading-[18px] text-[#2E3138]'>November 7, at 6.12 PM</h1>
                                                    </div>

                                                </div>
                                                <button>
                                                    <img src={black_three_dot} alt="" />
                                                </button>

                                            </div>
                                            <img src={rainbow_institute_post} alt="" />
                                            <div>
                                                <p className='text-[#2E3138] text-[14px] font-[400] leading-[18px]'>
                                                    যাদের বাসায় কম্পিউটার ও ইন্টারনেট কানেকশন নেই, তাঁরা ইশিখন এজেন্ট সেন্টারে এসে কোর্স সম্পন্ন করার সুযোগ পাবেন। সারা দেশে ইশিখনের রয়েছে ১৩০+ এজেন্ট সেন্টার। প্রতিটি এজেন্ট সেন্টারে রয়েছে উন্নত মানের ইন্টারনেট
                                                </p>
                                            </div>
                                            <hr className=" h-0 border-b border-solid border-[#E3E5E8] " />
                                            <div className='flex items-center justify-between'>
                                                <button className='flex items-center gap-2'>
                                                    <img src={heart_black} alt="" />
                                                    <h1>Favorited</h1>
                                                </button>
                                                <button className='flex items-center gap-2'>
                                                    <img src={comment_black} alt="" />
                                                    <h1>Comment</h1>
                                                </button>
                                                <button className='flex items-center gap-2'>
                                                    <img src={share_fbStyle_black} alt="" />
                                                    <h1>Share</h1>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* right side */}
                        <div className='w-[387px] hidden lg:flex flex-col gap-5'>
                            <div className="px-2.5 py-4 flex flex-col gap-2.5 bg-white rounded-[16px]">
                                <div className='flex items-center justify-start gap-2'>
                                    <img className='w-[20px]' src={information_icon} alt="" />
                                    <h2 className='text_black text-[24px] font-[600] leading-[30px]'>About Me</h2>
                                </div>

                                <p className='text-[#2E3138] text-[14px] font-[400] leading-[18px]'>
                                    Marion, 32, have been working in fashion design for past 7 years, but now I am looking forward for a transition into graphic design. I just feel that I’ve learned what I could with fashion, and now it is time to work on bigger campaigns. I am most interested in packaging design, since I know the role it plays in each successful product launch. I’d like to have this impact and see the results of my work on the shelves of the retail stores one day. In an international corporation that works with so many brands like your place it is realistic to achieve my goals (though no doubt it will take time) and it is the main reason why I am applying for this job.
                                </p>

                            </div>
                          
                        </div>
                    </div>
                </Wrapper>
            </div>
        </>
    );
};

export default ParentProfile;