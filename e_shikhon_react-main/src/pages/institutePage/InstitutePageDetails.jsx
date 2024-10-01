import React from 'react';
import Wrapper from '../../components/sheared/Wrapper';
import institutePageDetailsBanner from "../../assets/images/instituteDetailsBanner.png"
import institutePageDetailsBanner_for_mobile from "../../assets/images/instituteDetailsBanner_for_mobile.png"
import institute_page_Daffodil_logo from "../../assets/images/institute_page_Daffodil_logo.png"
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
import full_rounded_question_black from '../../assets/svg/full_rounded_question_black.svg';
import search_deep from '../../assets/svg/search_deep-_black.svg';
import photograph_black from '../../assets/svg/photograph_black.svg';
import video_camera_black from '../../assets/svg/video-camera_black.svg';
import minus_green from "../../assets/svg/minus-green.svg";
import office from "../../assets/images/office.png"
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
import { scrollToTop } from '../../api/helper';

const InstitutePageDetails = () => {
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
                                <img src={institute_page_Daffodil_logo} alt="" />
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex items-center gap-2.5'>
                                    <h1 className='text-[#464A53] text-[20px] md:text-[36px] lg:text-[40px] font-[600] leading-[28px] md:leading-[48px]'>
                                        ড্যাফোডিল ইন্টারন্যাশনাল ইউনিভার্সিটি
                                    </h1>
                                    <div className='hidden lg:flex flex-row items-center gap-[2px]'>
                                        <img src={yellowStar} alt="" />
                                        <h1 className='font-[500]'>4.8</h1>
                                    </div>
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
                                        <div className='flex items-center gap-1'>
                                            <img src={user_tow_green} alt="" />
                                            <h1 className='text-[#20AC90] text-[18px] font-[500]'>275 members</h1>
                                        </div>
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
                                        <img alt="icon" src={layer_black} />
                                        Courses
                                    </button>
                                    <button
                                        type="button"
                                        className="text-[16px] font-[500] font-Baloo text-[#2E3138] bg-white flex items-center  justify-center py-[10px] px-3 gap-2 rounded-[3px]"
                                    >
                                        <img alt="icon" src={female_mentor_black} />
                                        Instructors
                                    </button>
                                    <button
                                        type="button"
                                        className="text-[16px] font-[500] font-Baloo text-[#2E3138] bg-white flex items-center  justify-center py-[10px] px-3 gap-2 rounded-[3px]"
                                    >
                                        <img alt="icon" src={student_female_black} />
                                        Students
                                    </button>
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
                                    <button
                                        type="button"
                                        className="text-[16px] font-[500] font-Baloo text-[#2E3138] bg-white flex items-center  justify-center py-[10px] px-3 gap-2 rounded-[3px]"
                                    >
                                        <img alt="icon" src={full_rounded_question_black} />
                                        Faq
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
                            <h3 className="text-[24px] font-[600] leading-[32px] text-[#1E567B]">
                                ড্যাফোডিল ইন্টারন্যাশনাল ইউনিভার্সিটি
                            </h3>
                            <hr className=" h-0 border-b border-solid border-[#E3E5E8] " />


                            <div className="px-2.5 py-4 flex flex-col gap-2.5 bg-white rounded-[16px]">
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center justify-center gap-2'>
                                        <img className='w-[20px]' src={office} alt="" />
                                        <h2 className='text-[#17191C] text-[24px] font-[600] leading-[30px]'>এজেন্ট সেন্টার কি?</h2>
                                    </div>
                                    <img src={minus_green} alt="" />
                                </div>
                                <p className='text-[#2E3138] text-[14px] font-[400] leading-[18px]'>
                                    যাদের বাসায় কম্পিউটার ও ইন্টারনেট কানেকশন নেই, তাঁরা ইশিখন এজেন্ট সেন্টারে এসে কোর্স সম্পন্ন করার সুযোগ পাবেন। সারা দেশে ইশিখনের রয়েছে ১৩০+ এজেন্ট সেন্টার। প্রতিটি এজেন্ট সেন্টারে রয়েছে উন্নত মানের ইন্টারনেট সংযুক্ত কম্পিউটার এবং ল্যাব ফ্যাসিলিটি। যারা ঢাকার বাহিরে আছেন তারা ফ্রি কাউন্সিলিং নিয়ে কোর্স সম্পর্কিত বিস্তারিত জেনে ভর্তি হতে পারবেন নিকটস্থ ইশিখন এজেন্ট সেন্টার থেকে। এজেন্ট সেন্টারে বসে ইশিখনের ৪০+ ফ্রিল্যান্সিং ও আইটি কোর্স অনলাইন লাইভে করার সুযোগ পাবেন। উল্লেখযোগ্য যে, কোর্সের মূল ট্রেইনার ঢাকা থেকে ইশিখনের ওয়েবসাইটের মাধ্যমে মূল ক্লাস পরিচালনা করবেন। ক্লাস চলাকালীন সময় এজেন্ট সেন্টার থেকে একজন সুপারভাইজার আপনাদের সুপারভাইজ করবে। শিক্ষার্থীরা এজেন্ট সেন্টারে মোট ৩ ঘণ্টা ক্লাস করার সুযোগ পাবেন যেখানে মূল ক্লাস হবে ১.৫ ঘণ্টা এবং প্র্যাকটিস সেশন থাকবে আরও ১.৫ ঘণ্টা।
                                </p>

                            </div>
                            {/*  */}
                            <div className='bg-[#FFF] px-2.5 py-4 rounded-[16px]'>

                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center justify-center gap-2'>
                                        <img className='w-[20px]' src={office} alt="" />
                                        <h2 className='text-[#17191C] text-[24px] font-[600] leading-[30px]'>এজেন্ট অফিস সম্পর্কে</h2>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-5 mt-3'>
                                    <div>
                                        <div className='flex gap-2.5'>
                                            <img src={user} alt="" />
                                            <h2 className='text-[#2E3138] text-[16px] font-[400] leading-[20px]'>নাম</h2>
                                        </div>
                                        <h1 className='text-[#2E3138] text-[20px] font-[600] leading-[30px]'>মোঃ মশিউর রহমান মাসুদ</h1>
                                    </div>
                                    <div>
                                        <div className='flex gap-2.5'>
                                            <img src={phone_black} alt="" />
                                            <h2 className='text-[#2E3138] text-[16px] font-[400] leading-[20px]'>মোবাইল</h2>
                                        </div>
                                        <h1 className='text-[#2E3138] text-[20px] font-[600] leading-[30px]'>0182333333333</h1>
                                    </div>
                                    <div>
                                        <div className='flex gap-2.5'>
                                            <img src={location_black} alt="" />
                                            <h2 className='text-[#000] text-[14px] font-[500] leading-[18px]'>ঠিকানা: রফিক প্যালেস, বি এম কলেজ মসজিদ গেটের বিপরীত গলি, ঢাকা।</h2>
                                        </div>
                                    </div>


                                    <hr className=" h-0 border-b border-solid border-[#E3E5E8]" />
                                    <div className="overflow-hidden bg-white rounded-[20px] ">
                                        <div className="p-1">
                                            <iframe
                                                className='w-full h-[365px] rounded-[20px]'
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.403684594337!2d90.34984647048685!3d22.713232282279513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375534204212d309%3A0xea060a02396e8889!2sRainbow%20Computer%20Training%20Institute!5e0!3m2!1sen!2sbd!4v1699362621241!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>
                </Wrapper>
            </div>
        </>
    );
};

export default InstitutePageDetails;