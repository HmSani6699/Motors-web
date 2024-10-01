import React, { useEffect, useState } from 'react';
import Wrapper from '../../components/sheared/Wrapper';
import home from "../../assets/svg/home_icon.svg";
import arrow from "../../assets/svg/right_gray_icon.svg";
import layer from "../../assets/svg/layer.svg"
import CheckBox from '../../components/checkbox/CheckBox';
import { YellowStar } from '../../assets/icon/YellowStar';
import { Filter } from '../../assets/icon/Filter';
import course_img_2 from "../../assets/images/up_comming_course (2).png";
import course_img_3 from "../../assets/images/up_comming_course (3).png";
import course_img_1 from "../../assets/images/up_comming_course (1).png";
import course_img_5 from "../../assets/images/course-img (4).png";
import course_icon from "../../assets/svg/top-course.svg";
import arrow_icon from "../../assets/svg/circle-arrow.svg";
import CourseCard from '../../components/homePage/CourseCard';
import UpComingBatchCard from '../../components/sheared/courseCard/UpComingBatchCard';
import { scrollToTop } from '../../api/helper';
import { get } from '../../api/axious';
import SuggLoading from '../../components/Common/SuggLoading';
const API_NAME = import.meta.env.VITE_API_NAME;
const condition = API_NAME === "live";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const OnlineBatch = () => {
    scrollToTop();

    const [getBatchData, setGetBatchData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        fetchBatchData();
    }, []);

    const fetchBatchData = async () => {
        setLoading(true);
        try {
            let response
            if (condition) {
                response = await get("/api/batch/all");
            }
            else {
                response = await get('/api/batch');
            }
            if (response?.data) {
                const filterData = response?.data.filter((item) => item?.course?.courseCategory === "অনলাইন লাইভ ক্লাস");
                setGetBatchData(filterData);
                setLoading(false);
            }
        } catch (error) {
            console.log("Error creating app:", error);
        } finally {
            setLoading(false);
        }
    };
    console.log(getBatchData)
    return (
        <>
            <div className="py-6 bg-[#F5F5F5]">
                <Wrapper>
                    <div className=" flex items-center">
                        <img src={home} alt="icon" className="mx-2 mb-1" />
                        <p className="text-primary_color font-[500]">হোম</p>
                        <img src={arrow} alt="icon" />
                        <p className="text-[#9096A2]">অনলাইন ব্যাচ</p>
                    </div>
                </Wrapper>
            </div>
            <div>
                {/* <div className='contact_us_bg bg-[#F4FBFF] '>
                    <Wrapper>
                        <div>
                            <div className='py-14 flex flex-col gap-3 text-center'>
                                <div className='w-[100px] py-[6px] bg-[#ADD2EB] rounded-[5px] mx-auto mb-5'>
                                    <h1 className='text-[#1D5276] text-[18px] font-[600]'>
                                        ৪০ টি কোর্স
                                    </h1>
                                </div>
                                <h1 className='text-[#2E3138] text-[21px] md:text-[24px] lg:text-[40px] font-[600] lg:font-[700] leading-[28px] md:leading-[36px] text-center '>আপকামিং ব্যাচ</h1>
                                <p className='text-[#5D636F] text-[14px] lg:text-[16px] font-[400] lg:font-[500] leading-[18px] md:leading-[22px] w-[327px] md:w-[580px] lg:w-[752px] mx-auto'>
                                    সবার থেকে এগিয়ে থাকতে আপকামিং ব্যাচে জয়েন করুন এখনই।
                                </p>
                            </div>
                        </div>
                    </Wrapper>
                </div> */}
            </div>
            <div className='py-5'>
                <Wrapper>
                    <div className='bg-[#FFFFFF] p-4 rounded-[40px]'>
                        <div className='flex flex-row gap-1 pb-8'>
                            <img src={layer} alt="" />
                            <h1 className="font-[600] text-[28px] text-[#374151]  leading-[36px] ">অনলাইন ব্যাচ সমূহ</h1>
                        </div>
                        <div className='flex justify-between gap-5'>

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
                                                        {/* <svg xmlns="http://www.w3.org/2000/svg"
                                                        className='ms-2'
                                                        width="17" height="16" viewBox="0 0 17 16" fill="none">
                                                        <path d="M14.5 14L10.5 10M11.8333 6.66667C11.8333 9.244 9.744 11.3333 7.16667 11.3333C4.58934 11.3333 2.5 9.244 2.5 6.66667C2.5 4.08934 4.58934 2 7.16667 2C9.744 2 11.8333 4.08934 11.8333 6.66667Z" stroke="#ACB0B9" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg> */}
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

                            <div className='w-full'>
                                {loading ? <div className=" flex justify-center items-center my-[200px]">
                                    <SuggLoading />
                                </div> :
                                    <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                                        {getBatchData?.map((batchData, i) => (<UpComingBatchCard
                                            key={i}
                                            img={`${BASE_URL}${batchData?.course?.thumbLinePicPath?.path}`}
                                            availableSeat={batchData?.seats - batchData?.participants}
                                            title={batchData?.course?.courseTitle}
                                            mentor={batchData?.instructor[0]?.instructor?.fullName}
                                            starRating={batchData?.course?.averageRating
                                                ? batchData?.course?.averageRating
                                                    ?.toString()?.slice(0, 3) : 0}
                                            student="১৫০"
                                            price={batchData?.course?.regularPrice}
                                            discountPrice={batchData?.course?.sellPrice}
                                            batchNumber={batchData?.batch_no}
                                            courseId={batchData?.course_id}
                                        />))}
                                    </div>}
                            </div>

                        </div>
                    </div>
                </Wrapper>
            </div>
        </>
    );
};

export default OnlineBatch;