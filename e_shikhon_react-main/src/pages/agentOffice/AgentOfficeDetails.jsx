import React from 'react';
import Wrapper from '../../components/sheared/Wrapper';
import home from "../../assets/svg/home_icon.svg";
import arrow from "../../assets/svg/right_gray_icon.svg";
import down_arrow from "../../assets/svg/down_arrow.svg";
import location_green from "../../assets/svg/location_pin.svg";
import plus_white from "../../assets/svg/plus_white.svg";
import minus_green from "../../assets/svg/minus-green.svg";
import office from "../../assets/images/office.png"
import user from "../../assets/svg/user_black.svg";
import file_black from "../../assets/svg/file-certificate-black.svg";
import location_black from "../../assets/svg/location_black.svg";
import phone_black from "../../assets/svg/phone_black.svg";
import mail_black from "../../assets/svg/mail_black.svg";
import fb_color from "../../assets/svg/fb-color.svg";
import user_green from "../../assets/svg/user_green.svg";
import like_hand_green from "../../assets/svg/like_hand_green.svg";
import note_green from "../../assets/svg/note_green.svg";
import plus_black from "../../assets/svg/plus_black.svg";
import rainbow_class_banner from "../../assets/class_banner/rainbow_banner.png"
import rainbow_class_1 from "../../assets/class_banner/rainbow_class_1.png"
import rainbow_class_2 from "../../assets/class_banner/rainbow_class_2.png"
import layer from "../../assets/svg/layer.svg"
import mentor_icon from "../../assets/images/mentor-icon.png"
import course_img_1 from "../../assets/images/course-img (1).png";
import course_img_2 from "../../assets/images/course-img (2).png";
import course_img_4 from "../../assets/images/course-img (4).png";
import course_img_2d_cartoon from "../../assets/images/2D_cartoon.png";
import course_img_android from "../../assets/images/androded.png";
import CourseCardTow from '../../components/sheared/courseCard/CourseCardTow';
import mentor_1 from "../../assets/images/mentor (1).png";
import mentor_2 from "../../assets/images/mentor (2).png";
import mentor_3 from "../../assets/images/mentor (3).png";
import mentor_4 from "../../assets/images/mentor (4).png";
import MentorCardTow from '../../components/sheared/courseCard/MentorCardTow';
import { scrollToTop } from '../../api/helper';

const AgentOfficeDetails = () => {
    scrollToTop();
    return (
        <>
            <div className="py-10 bg-[#F5F5F5]">
                <Wrapper>
                    {/* brandi */}
                    <div className="mb-5 flex items-center">
                        <img src={home} alt="icon" className="mx-2 mb-1" />
                        <p className="text-primary_color font-[500]">হোম</p>
                        <img src={arrow} alt="icon" />
                        <p className="text-primary_color font-[500]">এজেন্ট অফিস</p>
                        <img src={arrow} alt="icon" />
                        <p className="text-[#9096A2]">অফিস ডিটেইলস</p>
                    </div>

                    {/*  */}

                    <div className='py-5 grid grid-cols-1 lg:grid-cols-2 gap-10'>
                        {/* left side */}
                        <div>
                            <div className='flex flex-col gap-5'>
                                <div className="overflow-hidden border-b border-[#C7CAD1] pb-5">
                                    <div className="flex flex-col gap-4 ">
                                        <h4 className='text-[#1E567B] text-[36px] font-[600] leading-[48px] mt-1'>রেইনবো কম্পিউটার ট্রেনিং ইনস্টিটিউট</h4>
                                        <div className='flex items-start gap-4'>
                                            <img src={location_green} alt="location_green" />
                                            <h2 className='text-[#000] text-[20px] font-[400] leading-[24px]'>
                                                ঠিকানা: রফিক প্যালেস, বি এম কলেজ মসজিদ গেটের বিপরীত <br /> গলি, বরিশাল।
                                            </h2>
                                        </div>
                                        <div>
                                            <button
                                                type="button"
                                                className=" font-Baloo text-white bg-secandary_color flex items-center justify-center py-[10px] px-5  gap-2 rounded-[50px]"
                                            >
                                                <img alt="icon" src={plus_white} />
                                                Follow
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/*  */}
                                <div className="overflow-hidden bg-[#FFF] rounded-[10px] ">
                                    <div className="px-2.5 py-4 flex flex-col gap-2.5">
                                        <div className='flex items-center justify-between'>
                                            <div className='flex items-center justify-center gap-2'>
                                                <img className='w-[20px]' src={office} alt="" />
                                                <h2 className='text-[#17191C] text-[24px] font-[600] leading-[30px]'>এজেন্ট সেন্টার কি?</h2>
                                            </div>
                                            <img src={minus_green} alt="" />
                                        </div>
                                        <p className='text-[#2E3138] text-[16px] font-[400] leading-[24px]'>
                                            যাদের বাসায় কম্পিউটার ও ইন্টারনেট কানেকশন নেই, তাঁরা ইশিখন এজেন্ট সেন্টারে এসে কোর্স সম্পন্ন করার সুযোগ পাবেন। সারা দেশে ইশিখনের রয়েছে ১৩০+ এজেন্ট সেন্টার। প্রতিটি এজেন্ট সেন্টারে রয়েছে উন্নত মানের ইন্টারনেট সংযুক্ত কম্পিউটার এবং ল্যাব ফ্যাসিলিটি। যারা ঢাকার বাহিরে আছেন তারা ফ্রি কাউন্সিলিং নিয়ে কোর্স সম্পর্কিত বিস্তারিত জেনে ভর্তি হতে পারবেন নিকটস্থ ইশিখন এজেন্ট সেন্টার থেকে। এজেন্ট সেন্টারে বসে ইশিখনের ৪০+ ফ্রিল্যান্সিং ও আইটি কোর্স অনলাইন লাইভে করার সুযোগ পাবেন। উল্লেখযোগ্য যে, কোর্সের মূল ট্রেইনার ঢাকা থেকে ইশিখনের ওয়েবসাইটের মাধ্যমে মূল ক্লাস পরিচালনা করবেন। ক্লাস চলাকালীন সময় এজেন্ট সেন্টার থেকে একজন সুপারভাইজার আপনাদের সুপারভাইজ করবে। শিক্ষার্থীরা এজেন্ট সেন্টারে মোট ৩ ঘণ্টা ক্লাস করার সুযোগ পাবেন যেখানে মূল ক্লাস হবে ১.৫ ঘণ্টা এবং প্র্যাকটিস সেশন থাকবে আরও ১.৫ ঘণ্টা।
                                        </p>

                                    </div>
                                </div>
                                {/*  */}
                                <div className="overflow-hidden bg-[#FFF] rounded-[10px] ">
                                    <div className="px-2.5 py-4 flex flex-col gap-2.5 ">
                                        <div className='flex items-center justify-between'>
                                            <div className='flex items-center justify-center gap-2'>
                                                <img className='w-[20px]' src={office} alt="" />
                                                <h2 className='text-[#17191C] text-[24px] font-[600] leading-[30px]'>এজেন্ট অফিস সম্পর্কে</h2>
                                            </div>
                                            {/* <img src={minus_green} alt="" /> */}
                                        </div>
                                        {/*  */}
                                        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 border-b border-[#C7CAD1] pb-5'>
                                            <div className='flex flex-col gap-5'>
                                                <div>
                                                    <div className='flex gap-2.5'>
                                                        <img src={user} alt="" />
                                                        <h2 className='text-[#2E3138] text-[16px] font-[400] leading-[20px]'>নাম</h2>
                                                    </div>
                                                    <h1 className='text-[#2E3138] text-[20px] font-[600] leading-[30px]'>মোঃ মশিউর রহমান মাসুদ</h1>
                                                </div>
                                                <div>
                                                    <div className='flex gap-2.5'>
                                                        <img src={file_black} alt="" />
                                                        <h2 className='text-[#2E3138] text-[16px] font-[400] leading-[20px]'>পদবী</h2>
                                                    </div>
                                                    <h1 className='text-[#2E3138] text-[20px] font-[600] leading-[30px]'>পরিচালক</h1>
                                                </div>
                                                <div>
                                                    <div className='flex gap-2.5'>
                                                        <img src={location_black} alt="" />
                                                        <h2 className='text-[#2E3138] text-[16px] font-[400] leading-[20px]'>স্থান</h2>
                                                    </div>
                                                    <h1 className='text-[#2E3138] text-[20px] font-[600] leading-[30px]'>বরিশাল</h1>
                                                </div>
                                            </div>
                                            <div className='flex flex-col gap-5'>
                                                <div>
                                                    <div className='flex gap-2.5'>
                                                        <img src={phone_black} alt="" />
                                                        <h2 className='text-[#2E3138] text-[16px] font-[400] leading-[20px]'>মোবাইল</h2>
                                                    </div>
                                                    <h1 className='text-[#2E3138] text-[20px] font-[600] leading-[30px]'>0182333333333</h1>
                                                </div>
                                                <div>
                                                    <div className='flex gap-2.5'>
                                                        <img src={mail_black} alt="" />
                                                        <h2 className='text-[#2E3138] text-[16px] font-[400] leading-[20px]'>ই-মেইল</h2>
                                                    </div>
                                                    <h1 className='text-[#2E3138] text-[20px] font-[600] leading-[30px]'>নেই</h1>
                                                </div>
                                                <div>
                                                    <div className='flex gap-2.5'>
                                                        <img src={fb_color} alt="" />
                                                        <h2 className='text-[#2E3138] text-[16px] font-[400] leading-[20px]'>ফেসবুক পেজ</h2>
                                                    </div>
                                                    <h1 className='text-[#2E3138] text-[20px] font-[600] leading-[30px]'>নেই</h1>
                                                </div>
                                            </div>
                                        </div>

                                        {/* 3 coloer card */}
                                        <div className='flex flex-col md:flex-row gap-5'>
                                            <div className='p-5 bg-[#A9EFE1] rounded-[5px]'>
                                                <span className='flex flex-col items-center'>
                                                    <h2 className='text-[#1E567B] text-[32px] font-[600] leading-[40px]'>০৫</h2>
                                                    <h2 className='text-[#000000] text-[16px] font-[400] leading-[24px]'>কর্মচারী সংখ্যা</h2>
                                                </span>
                                            </div>
                                            <div className='p-5 bg-[#E7D6F5] rounded-[5px]'>
                                                <span className='flex flex-col items-center'>
                                                    <h2 className='text-[#1E567B] text-[32px] font-[600] leading-[40px]'>১৫</h2>
                                                    <h2 className='text-[#000000] text-[16px] font-[400] leading-[24px]'>সর্বমোট কম্পিউটার</h2>
                                                </span>
                                            </div>
                                            <div className='p-5 bg-[#E9F5D6] rounded-[5px]'>
                                                <span className='flex flex-col items-center'>
                                                    <h2 className='text-[#1E567B] text-[32px] font-[600] leading-[40px]'>২০০০</h2>
                                                    <h2 className='text-[#000000] text-[16px] font-[400] leading-[24px]'>প্রশিক্ষণ প্রাপ্ত শিক্ষার্থী</h2>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {/*  */}

                                <div className="overflow-hidden bg-[#FFF] rounded-[16px] ">
                                    <div className="p-3 flex items-center justify-between">
                                        <div className='flex items-center gap-2'>
                                            <img src={user_green} alt="" />
                                            <h1 className='text-[#17191C] text-[24px] font-[600] leading-[30px]'>কিভাবে এজেন্ট এর মাধ্যমে ক্লাস করবেন</h1>
                                        </div>
                                        <img src={plus_black} alt="" />
                                    </div>
                                </div>
                                <div className="overflow-hidden bg-[#FFF] rounded-[16px] ">
                                    <div className="p-3 flex items-center justify-between">
                                        <div className='flex items-center gap-2'>
                                            <img src={user_green} alt="" />
                                            <h1 className='text-[#17191C] text-[24px] font-[600] leading-[30px]'>কিভাবে ক্লাস হবে</h1>
                                        </div>
                                        <img src={plus_black} alt="" />
                                    </div>
                                </div>
                                <div className="overflow-hidden bg-[#FFF] rounded-[16px] ">
                                    <div className="p-3 flex items-center justify-between">
                                        <div className='flex items-center gap-2'>
                                            <img src={like_hand_green} alt="" />
                                            <h1 className='text-[#17191C] text-[24px] font-[600] leading-[30px]'>বিশেষ সুবিধা সমুহ</h1>
                                        </div>
                                        <img src={plus_black} alt="" />
                                    </div>
                                </div>
                                <div className="overflow-hidden bg-[#FFF] rounded-[16px] ">
                                    <div className="p-3 flex items-center justify-between">
                                        <div className='flex items-center gap-2'>
                                            <img src={note_green} alt="" />
                                            <h1 className='text-[#17191C] text-[24px] font-[600] leading-[30px]'>কিভাবে রেজিস্ট্রেশন করবেন/অংশ নিবেন</h1>
                                        </div>
                                        <img src={plus_black} alt="" />
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* right side */}

                        <div>
                            <div>
                                <div>
                                    <div className="overflow-hidden ">
                                        <div className="w-full h-[431px] overflow-hidden bg-no-repeat rounded-t-[16px] bg-cover"
                                            style={{ backgroundImage: `url(${rainbow_class_banner})` }}
                                        >
                                            {/* <img src={rainbow_class_banner} alt="" /> */}
                                            <div className='flex h-full items-center justify-center text-center'>
                                                <h1 className='text-[#FFF] text-[40px] font-[600] leading-[48px]'>রেইনবো কম্পিউটার <br /> ট্রেনিং ইনস্টিটিউট</h1>
                                            </div>
                                        </div>
                                    </div>
                                    {/* 3 class */}
                                    <div className='flex items-center justify-between md:justify-start gap-2.5 pt-2 flex-wrap'>
                                        <img src={rainbow_class_1} alt="" />
                                        <img src={rainbow_class_2} alt="" />
                                        <img src={rainbow_class_2} alt="" />
                                    </div>
                                </div>
                                {/* google map */}
                                <div className="overflow-hidden bg-white rounded-[20px] mt-10">
                                    <div className="p-1">
                                        <iframe
                                            className='w-full h-[368px] rounded-[20px]'
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.403684594337!2d90.34984647048685!3d22.713232282279513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375534204212d309%3A0xea060a02396e8889!2sRainbow%20Computer%20Training%20Institute!5e0!3m2!1sen!2sbd!4v1699362621241!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </Wrapper>
            </div>

            <div className="py-10 bg-[#FFF] hidden lg:block">
                <Wrapper>
                    <div>
                        <div>
                            <div className='relative'>
                                <div className="flex items-center gap-2.5 mb-2.5 border-b ">
                                    <img alt="icon" src={layer} />
                                    <p className="text-[#5D636F] text-xl sm:text-5xl font-[600] leading-[28px] sm:leading-[36px]">
                                        কোর্স সমূহ
                                    </p>
                                </div>
                                <div className="flex justify-between overflow-hidden mb-7 mt-7">
                                    <CourseCardTow
                                        img={course_img_2}
                                        title="সোস্যাল মিডিয়া মার্কেটিং লাইভ কোর্স"
                                        instructor="Arman Sheikh"
                                        rating="Arman Sheikh"
                                        price="10,000"
                                        discountPrice="4,999"
                                        enrolled="40"
                                    />
                                    <CourseCardTow
                                        img={course_img_2d_cartoon}
                                        title="সোস্যাল মিডিয়া মার্কেটিং লাইভ কোর্স"
                                        instructor="Arman Sheikh"
                                        rating="Arman Sheikh"
                                        price="10,000"
                                        discountPrice="4,999"
                                        enrolled="40"
                                    />
                                    <CourseCardTow
                                        img={course_img_android}
                                        title="সোস্যাল মিডিয়া মার্কেটিং লাইভ কোর্স"
                                        instructor="Arman Sheikh"
                                        rating="Arman Sheikh"
                                        price="10,000"
                                        discountPrice="4,999"
                                        enrolled="40"
                                    />
                                    <CourseCardTow
                                        img={course_img_1}
                                        title="সোস্যাল মিডিয়া মার্কেটিং লাইভ কোর্স"
                                        instructor="Arman Sheikh"
                                        rating="Arman Sheikh"
                                        price="10,000"
                                        discountPrice="4,999"
                                        enrolled="40"
                                    />
                                </div>
                                <div className="flex justify-between overflow-hidden mb-10 ">
                                    <CourseCardTow
                                        img={course_img_4}
                                        title="সোস্যাল মিডিয়া মার্কেটিং লাইভ কোর্স"
                                        instructor="Arman Sheikh"
                                        rating="Arman Sheikh"
                                        price="10,000"
                                        discountPrice="4,999"
                                        enrolled="40"
                                    />
                                    <CourseCardTow
                                        img={course_img_android}
                                        title="সোস্যাল মিডিয়া মার্কেটিং লাইভ কোর্স"
                                        instructor="Arman Sheikh"
                                        rating="Arman Sheikh"
                                        price="10,000"
                                        discountPrice="4,999"
                                        enrolled="40"
                                    />
                                    <CourseCardTow
                                        img={course_img_2}
                                        title="সোস্যাল মিডিয়া মার্কেটিং লাইভ কোর্স"
                                        instructor="Arman Sheikh"
                                        rating="Arman Sheikh"
                                        price="10,000"
                                        discountPrice="4,999"
                                        enrolled="40"
                                    />
                                    <CourseCardTow
                                        img={course_img_2d_cartoon}
                                        title="সোস্যাল মিডিয়া মার্কেটিং লাইভ কোর্স"
                                        instructor="Arman Sheikh"
                                        rating="Arman Sheikh"
                                        price="10,000"
                                        discountPrice="4,999"
                                        enrolled="40"
                                    />
                                </div>
                                <div className="flex justify-center items-center absolute left-[535px] -bottom-7">
                                    <button
                                        type="button"
                                        className="bg-[#FFF] font-Baloo flex items-center justify-center py-[10px] px-5  gap-2 rounded-[50px] text-[#464A53] shadow-md"
                                    >
                                        সকল কোর্স <img alt="icon" src={down_arrow} />
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </Wrapper>
            </div>


            <div className="py-10 hidden lg:block">
                <Wrapper>
                    <div>
                        <div>
                            <div className='relative'>
                                <div className="flex items-center gap-2.5 mb-6 border-b ">
                                    <img width={24} alt="icon" src={mentor_icon} />
                                    <p className="text-[#5D636F] text-xl sm:text-5xl font-[600] leading-[28px] sm:leading-[36px]">
                                        কোর্স ইন্সট্রাক্টর
                                    </p>
                                </div>
                                <div className="flex gap-5 overflow-hidden mb-10">
                                    <MentorCardTow img={mentor_1} />
                                    <MentorCardTow img={mentor_2} />
                                    <MentorCardTow img={mentor_3} />
                                    <MentorCardTow img={mentor_4} />
                                </div>
                                <div className="flex justify-center items-center ">
                                    <button
                                        type="button"
                                        className="bg-[#FFF] font-Baloo flex items-center justify-center py-[10px] px-5  gap-2 rounded-[50px] text-[#464A53] shadow-md"
                                    >
                                        সকল ইন্সট্রাক্টর <img alt="icon" src={down_arrow} />
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </Wrapper>
            </div>
        </>
    );
};

export default AgentOfficeDetails;