import React from 'react';
import Wrapper from '../../components/sheared/Wrapper';
import home from "../../assets/svg/home_icon.svg";
import arrow from "../../assets/svg/right_gray_icon.svg";
import file_white from "../../assets/svg/file_white.svg";
import CheckBox from '../../components/checkbox/CheckBox';
import { YellowStar } from '../../assets/icon/YellowStar';
import { Filter } from '../../assets/icon/Filter';
import searchIcon from "../../assets/svg/search.svg"
import InstituteCard from '../../components/sheared/institueCard/InstituteCard';
import du_logo from "../../assets/institute_logo/DU_logo.png"
import daffodil_logo from "../../assets/institute_logo/daffodil_logo.png"
import NSU_logo from "../../assets/institute_logo/NSU_logo.png"
import BU_logo from "../../assets/institute_logo/BU_logo.png"
import BRAUN_logo from "../../assets/institute_logo/brac_logo.png"
import JSI_logo from "../../assets/institute_logo/JSI_logo.png"
import NU_logo from "../../assets/institute_logo/NU_logo.png"
import JU_logo from "../../assets/institute_logo/JU_logo.png"
import yellowStar from '../../assets/svg/star_yellow.svg';
import right_arrow from '../../assets/svg/right_arrow_black.svg';
import { scrollToTop } from '../../api/helper';

const InstitutePage = () => {
    scrollToTop();
    return (
        <>
            <div className="py-6 bg-[#F5F5F5]">
                <Wrapper>
                    <div className=" flex items-center">
                        <img src={home} alt="icon" className="mx-2 mb-1" />
                        <p className="text-primary_color font-[500]">হোম</p>
                        <img src={arrow} alt="icon" />
                        <p className="text-[#9096A2]">Institute page</p>
                    </div>
                </Wrapper>
            </div>
            <div>
                <div className='contact_us_bg bg-[#F4FBFF] '>
                    <Wrapper>
                        <div>
                            <div className='py-8 flex flex-col gap-3 text-center w-[278px] md:w-[565px] mx-auto'>
                                <div>
                                    <div className='w-[138px] py-[6px] bg-[#ADD2EB] rounded-[5px] mx-auto '>
                                        <h1 className='text-[#1D5276] text-[18px] font-[600]'>
                                            ৪০+ টি ইন্সটিউট
                                        </h1>
                                    </div>
                                </div>
                                <h1 className='text-[#2E3138] text-[21px] md:text-[24px] lg:text-[28px] font-[600] lg:font-[700] leading-[28px] md:leading-[36px] text-center '>আপনার ইন্সটিউট প্রতিষ্ঠান থাকলে আপনিও হতে পারেন ইশিখন এর পার্টনার</h1>
                                <div className='mx-auto'>
                                    <button
                                        type="button"
                                        className="bg-[#20AC90] font-Baloo py-[10px] px-5  gap-2 rounded-[8px] text-[#F1F1F1] flex items-center justify-center "
                                    >
                                        <img src={file_white} alt="" />
                                        নিবন্ধন করুন
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Wrapper>
                </div>
            </div>
            <div className="py-6 bg-[#F5F5F5]">
                <Wrapper>
                    <div className='flex gap-8'>
                        {/* left side */}

                        <div className='w-[285px] hidden lg:flex'>
                            <div className="w-[285px] overflow-hidden rounded-lg bg-white">
                                {/* top content */}
                                <div className='flex items-center justify-between bg-[#5BA5D7] p-3 text-white text-[14px] font-[400] rounded-se-lg rounded-ss-lg'>
                                    <span className='flex gap-1'>
                                        <Filter />
                                        ফিল্টার
                                    </span>
                                    <span>
                                        রিসেট
                                    </span>
                                </div>

                                {/* all check box */}

                                <div className='p-3'>
                                    {/* course category */}
                                    <section className="w-full divide-y rounded ">
                                        <details className="group border border-[#F1F2F3] rounded-md " open>
                                            <summary className="relative cursor-pointer list-none pr-8 py-1 ps-1 transition-colors duration-300 focus-visible:outline-none [&::-webkit-details-marker]:hidden bg-[#F1F2F3] rounded-se-md rounded-ss-md ">
                                                <span className='flex items-center text_blue text-[16px] font-[500]'>
                                                    বিভাগ
                                                </span>
                                                <span className="absolute right-1 w-4 h-4 transition duration-300 top-1 shrink-0 ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960"
                                                        className='absolute opacity-100 group-open:opacity-0'
                                                        width="20"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>

                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        className="absolute bottom-1 opacity-0 group-open:opacity-100"
                                                        height="20" viewBox="0 -960 960 960" width="21"><path d="M240-120v-80h480v80H240Z" /></svg>
                                                </span>

                                            </summary>

                                            <div className="mt-1 p-3 text-[#5D636F] text-[14px] font-[400] ">
                                                {/* 1 */}
                                                <div className="relative flex flex-wrap items-center">
                                                    <CheckBox />
                                                    ঢাকা
                                                </div>
                                                {/* 2 */}
                                                <div className="relative flex flex-wrap items-center mt-4">
                                                    <CheckBox />
                                                    রাজশাহী
                                                </div>
                                                {/* 3 */}
                                                <div className="relative flex flex-wrap items-center mt-4">
                                                    <CheckBox />
                                                    খুলনা
                                                </div>
                                                {/* 4 */}
                                                <div className="relative flex flex-wrap items-center mt-4">
                                                    <CheckBox />
                                                    বরিশাল
                                                </div>
                                                {/* 5 */}
                                                <div className="relative flex flex-wrap items-center mt-4">
                                                    <CheckBox />
                                                    চিটাগাং
                                                </div>
                                                {/* 6 */}
                                                <div className="relative flex flex-wrap items-center mt-4">
                                                    <CheckBox />
                                                    ময়মনসিংহ
                                                </div>
                                                {/* 7 */}
                                                <div className="relative flex flex-wrap items-center mt-4">
                                                    <CheckBox />
                                                    সিলেট
                                                </div>


                                            </div>
                                        </details>

                                    </section>


                                    {/* instructor */}

                                    <section className="w-full divide-y rounded mt-4">
                                        <details className="group border border-[#F1F2F3] rounded-md " open>
                                            <summary className="relative cursor-pointer list-none pr-8 py-1 ps-2 transition-colors duration-300 focus-visible:outline-none [&::-webkit-details-marker]:hidden bg-[#F1F2F3] text_blue rounded-se-md rounded-ss-md">
                                                <span className='flex items-center text-[16px] font-[500]'>
                                                    জেলা
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        className='ms-2'
                                                        width="17" height="16" viewBox="0 0 17 16" fill="none">
                                                        <path d="M14.5 14L10.5 10M11.8333 6.66667C11.8333 9.244 9.744 11.3333 7.16667 11.3333C4.58934 11.3333 2.5 9.244 2.5 6.66667C2.5 4.08934 4.58934 2 7.16667 2C9.744 2 11.8333 4.08934 11.8333 6.66667Z" stroke="#ACB0B9" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </span>
                                                <span className="absolute right-2 w-4 h-4 transition duration-300 top-1 shrink-0 ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960"
                                                        className='absolute opacity-100 group-open:opacity-0'
                                                        width="20"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>

                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        className="absolute bottom-1 opacity-0 group-open:opacity-100"
                                                        height="20" viewBox="0 -960 960 960" width="21"><path d="M240-120v-80h480v80H240Z" /></svg>
                                                </span>

                                            </summary>

                                            <div className="mt-1 p-3 text-[#5D636F] text-[14px] font-[400]">
                                                {/* 14 */}
                                                <div className="relative flex flex-wrap items-center">
                                                    <CheckBox />
                                                    ঢাকা
                                                </div>
                                                {/* 15 */}
                                                <div className="relative flex flex-wrap items-center mt-4">
                                                    <CheckBox />
                                                    নারায়ণগঞ্জ
                                                </div>
                                                {/* 16 */}
                                                <div className="relative flex flex-wrap items-center mt-4">
                                                    <CheckBox />
                                                    গাজিপুর
                                                </div>
                                                {/* 17 */}
                                                <div className="relative flex flex-wrap items-center mt-4">
                                                    <CheckBox />
                                                    মানিকগঞ্জ
                                                </div>
                                                {/* 18 */}
                                                <div className="relative flex flex-wrap items-center mt-4">
                                                    <CheckBox />
                                                    ফরিদপুর
                                                </div>
                                                {/* 19 */}
                                                <div className="relative flex flex-wrap items-center mt-4">
                                                    <CheckBox />
                                                    টাংগাইল
                                                </div>
                                                <div className="relative flex flex-wrap items-center mt-4">
                                                    <CheckBox />
                                                    খুলনা
                                                </div>
                                                <div className="relative flex flex-wrap items-center mt-4">
                                                    <CheckBox />
                                                    যশোর
                                                </div>
                                                <div className="relative flex flex-wrap items-center mt-4">
                                                    <CheckBox />
                                                    নড়াইল
                                                </div>
                                                <div className="relative flex flex-wrap items-center mt-4">
                                                    <CheckBox />
                                                    মাগুরা
                                                </div>
                                                <div className="relative flex flex-wrap items-center mt-4">
                                                    <CheckBox />
                                                    কুষ্টিয়া
                                                </div>
                                            </div>
                                        </details>

                                    </section>

                                    {/* course category */}
                                    <section className="w-full divide-y rounded mt-4">
                                        <details className="group border border-[#F1F2F3] rounded-md " open>
                                            <summary className="relative cursor-pointer list-none pr-8 py-1 ps-1 transition-colors duration-300 focus-visible:outline-none [&::-webkit-details-marker]:hidden bg-[#F1F2F3] rounded-se-md rounded-ss-md ">
                                                <span className='flex items-center text_blue text-[16px] font-[500]'>
                                                    কোর্স ক্যাটাগরি
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        className='ms-2'
                                                        width="17" height="16" viewBox="0 0 17 16" fill="none">
                                                        <path d="M14.5 14L10.5 10M11.8333 6.66667C11.8333 9.244 9.744 11.3333 7.16667 11.3333C4.58934 11.3333 2.5 9.244 2.5 6.66667C2.5 4.08934 4.58934 2 7.16667 2C9.744 2 11.8333 4.08934 11.8333 6.66667Z" stroke="#ACB0B9" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </span>
                                                <span className="absolute right-1 w-4 h-4 transition duration-300 top-1 shrink-0 ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960"
                                                        className='absolute opacity-100 group-open:opacity-0'
                                                        width="20"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>

                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        className="absolute bottom-1 opacity-0 group-open:opacity-100"
                                                        height="20" viewBox="0 -960 960 960" width="21"><path d="M240-120v-80h480v80H240Z" /></svg>
                                                </span>

                                            </summary>

                                            <div className="mt-1 p-3 text-[#5D636F] text-[14px] font-[400] ">
                                                {/* 1 */}
                                                <div className="relative flex flex-wrap items-center">
                                                    <CheckBox />
                                                    আইটি ভিডিও কোর্স
                                                </div>
                                                {/* 2 */}
                                                <div className="relative flex flex-wrap items-center mt-4">
                                                    <CheckBox />
                                                    ভর্তি পরীক্ষা ভিডিও কোর্স
                                                </div>
                                                {/* 3 */}
                                                <div className="relative flex flex-wrap items-center mt-4">
                                                    <CheckBox />
                                                    এইচএসসি ভিডিও কোর্স
                                                </div>
                                                {/* 4 */}
                                                <div className="relative flex flex-wrap items-center mt-4">
                                                    <CheckBox />
                                                    অফলাইন কোর্স
                                                </div>
                                                {/* 5 */}
                                                <div className="relative flex flex-wrap items-center mt-4">
                                                    <CheckBox />
                                                    বিসিএস পরীক্ষা
                                                </div>
                                                {/* 6 */}
                                                <div className="relative flex flex-wrap items-center mt-4">
                                                    <CheckBox />
                                                    এসএসসি
                                                </div>
                                                {/* 7 */}
                                                <div className="relative flex flex-wrap items-center mt-4">
                                                    <CheckBox />
                                                    ব্যবসা
                                                </div>
                                                {/* 8 */}
                                                <div className="relative flex flex-wrap items-center mt-4">
                                                    <CheckBox />
                                                    আইইএলটিএস
                                                </div>
                                                {/* 9 */}
                                                <div className="relative flex flex-wrap items-center mt-4">
                                                    <CheckBox />
                                                    কম্পিউটার ও তথ্য প্রযুক্তি
                                                </div>
                                                {/* 10 */}
                                                <div className="relative flex flex-wrap items-center mt-4">
                                                    <CheckBox />
                                                    অনলাইন লাইভ ক্লাস
                                                </div>

                                            </div>
                                        </details>

                                    </section>



                                    {/* course review */}

                                    <section className="w-full divide-y rounded mt-4">
                                        <details className="group border border-[#F1F2F3] rounded-md " open>
                                            <summary className="relative cursor-pointer list-none pr-8 py-1 ps-1 transition-colors duration-300 focus-visible:outline-none [&::-webkit-details-marker]:hidden bg-[#F1F2F3] text_blue rounded-se-lg rounded-ss-lg ">
                                                <span className='text-[#2E3138] text-[16px] font-[500]'>
                                                    কোর্স রিভিউ
                                                </span>
                                                <span className="absolute right-1 w-4 h-4 transition duration-300 top-1 shrink-0 ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960"
                                                        className='absolute opacity-100 group-open:opacity-0'
                                                        width="20"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>

                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        className="absolute bottom-1 opacity-0 group-open:opacity-100"
                                                        height="20" viewBox="0 -960 960 960" width="21"><path d="M240-120v-80h480v80H240Z" /></svg>
                                                </span>

                                            </summary>

                                            <div className="mt-1 p-3 text-[#5D636F] text-[14px] font-[400]">
                                                {/* 33 */}
                                                <div className="relative flex flex-wrap items-center">
                                                    <CheckBox />
                                                    ৫.০
                                                    <YellowStar />
                                                </div>
                                                {/* 34 */}
                                                <div className="relative flex flex-wrap items-center mt-4">
                                                    <CheckBox />
                                                    ৪.৫
                                                    <YellowStar />
                                                </div>
                                                {/* 35 */}
                                                <div className="relative flex flex-wrap items-center mt-4">
                                                    <CheckBox />
                                                    ৩.৫
                                                    <YellowStar />
                                                </div>
                                                {/* 36 */}
                                                <div className="relative flex flex-wrap items-center mt-4">
                                                    <CheckBox />
                                                    ৩.০
                                                    <YellowStar />
                                                </div>
                                                {/* 37 */}
                                                <div className="relative flex flex-wrap items-center mt-4">
                                                    <CheckBox />
                                                    ২.০
                                                    <YellowStar />
                                                </div>
                                                {/* 38 */}
                                                <div className="relative flex flex-wrap items-center mt-4">
                                                    <CheckBox />
                                                    ০.০
                                                    <YellowStar />
                                                </div>

                                            </div>
                                        </details>

                                    </section>

                                </div>


                            </div>
                        </div>

                        {/* right side */}
                        <div className='w-full'>
                            <div className=" flex items-center flex-wrap justify-between  gap-5 bg-[#FFF] rounded-[10px] px-3 p-2.5 relative">
                                <p className="text-primary_color text-[20px] font-[600] ">
                                    ইন্সটিউট সমূহ
                                </p>
                                <div className="md:hidden block cursor-pointer">
                                    <div className="flex items-center gap-1 bg-[#D6E9F5] p-2.5 rounded-md">
                                        <img width={16} alt="icon" src={searchIcon} className="mb-1" />
                                        <p className="font-Baloo text-[#1D5276] text-sm font-[400] leading-[18px]">
                                            ফিল্টার
                                        </p>
                                    </div>
                                </div>
                                <div className='flex gap-10'>
                                    <div className="block lg:hidden cursor-pointer">
                                        <div className="hidden md:flex items-center gap-1 bg-[#D6E9F5] p-2.5 rounded-md">
                                            <img width={16} alt="icon" src={searchIcon} className="mb-1" />
                                            <p className="font-Baloo text-[#1D5276] text-sm font-[400] leading-[18px]">
                                                ফিল্টার
                                            </p>
                                        </div>
                                    </div>
                                    <div className=" relative w-[291px] lg:w-[313px] bg-[#F1F2F3] py-2 px-3 rounded-[5px] text-sm sm:text-base mx-auto md:mx-0">
                                        <div className="">
                                            <input className="bg-[#F1F2F3] outline-none appearance-none"
                                                placeholder='খুজুন'
                                            />
                                            <img
                                                src={searchIcon}
                                                alt="icon"
                                                className="absolute top-1/2 right-2 transform -translate-y-1/2"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*  */}
                            <div className='bg-[#FFFFFF] p-5 mt-5 rounded-[10px]'>
                                <div className=' flex flex-col md:flex-row justify-between items-center gap-3 mb-4'>
                                    {/* <InstituteCard
                                        img={du_logo}
                                        institute_name="ঢাকা ইউনিভার্সিটি"
                                    /> */}
                                    <div className='relative'>
                                        <div className="w-[270px] h-[246px] overflow-hidden rounded-[5px] bg-white text-center border relative ">
                                            <figure className="p-6 pb-0">
                                                <span className="relative inline-flex h-20 items-center justify-center rounded-full text-white">
                                                    <img
                                                        src={du_logo}
                                                        alt="user name"
                                                        title="user name"
                                                        width="80"
                                                        height="80"
                                                        className="max-w-full "
                                                    />
                                                </span>
                                            </figure>
                                            <div className="p-6">
                                                <header className="">
                                                    <h3 className="text-[16px] font-[500] leading-[22px]">
                                                        ঢাকা ইউনিভার্সিটি</h3>
                                                </header>
                                            </div>

                                        </div>
                                        <div className="w-[270px] py-1 px-3 bg-[#20AC90] absolute bottom-0 rounded-b-[5px] ">
                                            <div className='flex items-center justify-between text-[#FFF]'>
                                                <div className='flex flex-row items-center gap-[2px]'>
                                                    <img src={yellowStar} alt="" />
                                                    <h1 className='font-[500]'>4.8</h1>
                                                </div>
                                                <div className='flex flex-row items-center'>

                                                    <h1 className='font-[500] underline'>Course</h1>
                                                    <img src={right_arrow} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <InstituteCard
                                        img={daffodil_logo}
                                        institute_name="ড্যাফোডিল ইন্টারন্যাশনাল ইউনিভার্সিটি"
                                        totalCourse=''
                                    />
                                    <InstituteCard
                                        img={NSU_logo}
                                        institute_name="নর্থ সাউথ ইউনিভার্সিটি"
                                        totalCourse="(5)"
                                    />
                                </div>
                                <div className=' flex flex-col md:flex-row justify-between items-center gap-3 mb-4'>
                                    <InstituteCard
                                        img={BU_logo}
                                        institute_name="ঢাকা ইউনিভার্সিটি"
                                        totalCourse="(21)"
                                    />
                                    <InstituteCard
                                        img={BRAUN_logo}
                                        institute_name="ড্যাফোডিল ইন্টারন্যাশনাল ইউনিভার্সিটি"
                                        totalCourse="(12)"
                                    />
                                    <InstituteCard
                                        img={JSI_logo}
                                        institute_name="নর্থ সাউথ ইউনিভার্সিটি"
                                        totalCourse="(2)"
                                    />
                                </div>
                                <div className=' flex flex-col md:flex-row justify-between items-center gap-3 mb-4'>
                                    <InstituteCard
                                        img={NU_logo}
                                        institute_name="ঢাকা ইউনিভার্সিটি"
                                        totalCourse="(33)"
                                    />
                                    <InstituteCard
                                        img={du_logo}
                                        institute_name="ড্যাফোডিল ইন্টারন্যাশনাল ইউনিভার্সিটি"
                                        totalCourse="(99)"
                                    />
                                    <InstituteCard
                                        img={JU_logo}
                                        institute_name="নর্থ সাউথ ইউনিভার্সিটি"
                                        totalCourse="(77)"
                                    />
                                </div>
                                <div className=' flex flex-col md:flex-row justify-between items-center gap-3 mb-4'>
                                    <InstituteCard
                                        img={du_logo}
                                        institute_name="ঢাকা ইউনিভার্সিটি"
                                        totalCourse=""
                                    />
                                    <InstituteCard
                                        img={daffodil_logo}
                                        institute_name="ড্যাফোডিল ইন্টারন্যাশনাল ইউনিভার্সিটি"
                                        totalCourse="(60)"
                                    />
                                    <InstituteCard
                                        img={NSU_logo}
                                        institute_name="নর্থ সাউথ ইউনিভার্সিটি"
                                        totalCourse="(21)"
                                    />
                                </div>
                                <div className=' flex flex-col md:flex-row justify-between items-center gap-3 '>
                                    <InstituteCard
                                        img={du_logo}
                                        institute_name="ঢাকা ইউনিভার্সিটি"
                                        totalCourse="(66)"
                                    />
                                    <InstituteCard
                                        img={daffodil_logo}
                                        institute_name="ড্যাফোডিল ইন্টারন্যাশনাল ইউনিভার্সিটি"
                                        totalCourse="(11)"
                                    />
                                    <InstituteCard
                                        img={NSU_logo}
                                        institute_name="নর্থ সাউথ ইউনিভার্সিটি"
                                        totalCourse="(44)"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </Wrapper>
            </div>
        </>
    );
};

export default InstitutePage;