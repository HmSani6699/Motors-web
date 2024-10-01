import React, { useEffect, useState } from 'react';
import Wrapper from '../../components/sheared/Wrapper';
import home from "../../assets/svg/home_icon.svg";
import arrow from "../../assets/svg/right_gray_icon.svg";
import searchIcon from "../../assets/svg/search.svg"
import CheckBox from '../../components/checkbox/CheckBox';
import { Filter } from '../../assets/icon/Filter';
import student1 from "../../assets/images/success-studen-img (1).png"
import layer from "../../assets/svg/layer.svg"
import three_dot from "../../assets/svg/dots-vertical_black.svg"
import { scrollToTop } from '../../api/helper';
import { get } from '../../api/axious';
import { useNavigate } from 'react-router-dom';

const AllStudents = () => {
    scrollToTop();
    const BASE_URL = import.meta.env.VITE_BASE_URL
    const [allStudentData, setAllStudentData] = useState();
    useEffect(() => {
        fetchAllStudent();
    }, []);

    const fetchAllStudent = async () => {
        try {
            const response = await get(`/api/auth/all_users?role=Student`);
            if (response?.data) {
                setAllStudentData(response?.data);
            }
        } catch (error) {
            console.log("Error creating app:", error);
        }
    };
    const navigate = useNavigate();
    console.log(allStudentData)
    return (
        <>

            <div className="py-6 bg-[#F5F5F5]">
                <Wrapper>
                    <div className='flex gap-8'>
                        {/* left side */}

                        <div className=' hidden lg:flex'>
                            <div className="w-[350px] overflow-hidden rounded-lg bg-white">
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

                                    {/* batch */}
                                    <section className="w-full divide-y rounded ">
                                        <details className="group border border-[#F1F2F3] rounded-md " open>
                                            <summary className="relative cursor-pointer list-none pr-8 py-1 ps-1 transition-colors duration-300 focus-visible:outline-none [&::-webkit-details-marker]:hidden bg-[#F1F2F3] rounded-se-md rounded-ss-md ">
                                                <span className='flex items-center text_blue text-[16px] font-[500]'>
                                                    ব্যাচ
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
                                                    ২০১
                                                </div>
                                                {/* 2 */}
                                                <div className="relative flex flex-wrap items-center mt-4">
                                                    <CheckBox />
                                                    DG2036
                                                </div>
                                                {/* 3 */}
                                                <div className="relative flex flex-wrap items-center mt-4">
                                                    <CheckBox />
                                                    GD2301
                                                </div>
                                                {/* 4 */}
                                                <div className="relative flex flex-wrap items-center mt-4">
                                                    <CheckBox />
                                                    MR10236
                                                </div>
                                                {/* 5 */}
                                                <div className="relative flex flex-wrap items-center mt-4">
                                                    <CheckBox />
                                                    MR13245345
                                                </div>
                                                {/* 6 */}
                                                <div className="relative flex flex-wrap items-center mt-4">
                                                    <CheckBox />
                                                    R10236DFG
                                                </div>
                                                {/* 7 */}
                                                <div className="relative flex flex-wrap items-center mt-4">
                                                    <CheckBox />
                                                    DF456456
                                                </div>


                                            </div>
                                        </details>

                                    </section>


                                    {/* district */}

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

                                </div>


                            </div>
                        </div>

                        {/* right side */}
                        <div className='w-full'>
                            <div className=" flex items-center flex-wrap justify-between  gap-5 bg-[#FFF] rounded-[10px] px-3 p-2.5 relative">
                                <p className="text-primary_color text-[20px] font-[600] ">
                                    সকল ছাত্রছাত্রী সমূহ (11500)
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

                                <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mb-4'>
                                    {allStudentData?.map((allStudent, i) => (<div key={i} onClick={() => navigate("/studentProfile", { state: allStudent })} className='border rounded w-full p-2 flex flex-row items-center justify-between cursor-pointer'>
                                        <div className='flex flex-row gap-2'>
                                            <div>
                                                {allStudent?.pro_pic ? <img className='w-[56px] rounded-full' src={`${BASE_URL}${allStudent?.pro_pic?.path}`} alt="" /> : <img className='w-[56px]' src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?t=st=1709646925~exp=1709650525~hmac=15a2fd6ba0f9b3bb2697c01acc0a575d586a4d9d9fc3d3dd6a1b151bdbd528c2&w=740" alt="" />}
                                            </div>
                                            <div >
                                                <p className=" text-[#0A1D29] text-[16px] font-[600] leading-[22px]">
                                                    {allStudent?.fullName}
                                                </p>
                                                <p className=" text-[#5D636F] text-[14px] font-[400] leading-[18px]">
                                                    গ্রাফিক্স ডিজাইন
                                                </p>
                                                <div className='flex flex-row gap-1'>
                                                    <img className='w-[14px]' src={layer} alt="" />
                                                    <p className=" text-[#5D636F] text-[14px] font-[400] leading-[18px]">
                                                        ২০১ তম ব্যাচ
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <img className='w-[16px]' src={three_dot} alt="" />
                                        </div>
                                    </div>))}
                                </div>

                            </div>

                        </div>
                    </div>
                </Wrapper>
            </div>

        </>
    );
};

export default AllStudents;