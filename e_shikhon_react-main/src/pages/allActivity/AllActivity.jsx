import React from 'react';
import Wrapper from '../../components/sheared/Wrapper';

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
import compleat_java from "../../assets/images/up_comming_course (1).png"
import live_icon_small from "../../assets/svg/live_icon_small.svg"
import certificate_icon from "../../assets/svg/file-certificate-outline.svg"
import badge_icon from "../../assets/svg/circle_badge_green.svg"
import { scrollToTop } from '../../api/helper';

const AllActivity = () => {
    scrollToTop();
    return (
        <>
            <div className="py-8 bg-[#F5F5F5]">
                <Wrapper>
                    <div className='flex flex-col lg:flex-row gap-[39px] py-10'>
                        {/* left side card */}
                        <div>
                            <div className='w-full md:w-[326px] bg-[#F9FAFB] border border-gray-200 p-8 rounded-[8px] '>
                                <div className='flex flex-col gap-6'>
                                    <h1 className='text-[#111928] text-[16px] font-[700] leading-[24px] '>LEGAL</h1>
                                    <div className='flex flex-col gap-2.5'>
                                        <h1 className='text-[#20AC90] text-[16px] font-[500] leading-[24px] '>e-Shikhun Market Terms</h1>
                                        <h1 className='text-[#111928] text-[16px] font-[500] leading-[24px] '>Author Terms</h1>
                                        <h1 className='text-[#111928] text-[16px] font-[500] leading-[24px] '>Affiliate Program Terms</h1>
                                        <h1 className='text-[#111928] text-[16px] font-[500] leading-[24px] '>Privacy Policy</h1>
                                        <h1 className='text-[#111928] text-[16px] font-[500] leading-[24px] '>Terms and Conditions</h1>
                                        <h1 className='text-[#111928] text-[16px] font-[500] leading-[24px] '>API Services</h1>
                                        <h1 className='text-[#111928] text-[16px] font-[500] leading-[24px] '>Acceptable Use Policy</h1>
                                    </div>
                                    <div className="">
                                        <button
                                            type="button"
                                            className="text-[14px] font-[500] w-full font-Baloo text-[#FFF] bg-[#20AC90] py-[8px] rounded-[8px]"
                                        >
                                            Got a question? Contact us.
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* right side article */}

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
                        
                    </div>
                </Wrapper>
            </div>
                        

                    </div>
                </Wrapper>
            </div>
        </>
    );
};

export default AllActivity;