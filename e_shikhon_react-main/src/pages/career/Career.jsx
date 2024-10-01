import React from 'react';
import Countdown from '../home/Countdown';
import Wrapper from '../../components/sheared/Wrapper';
import home from "../../assets/svg/home_icon.svg";
import arrow from "../../assets/svg/right_gray_icon.svg";
import career_hero from "../../assets/images/career_hero.png";
import down_arrow from "../../assets/svg/down_arrow.svg";
import search from "../../assets/svg/search.svg";
import right_arrow from "../../assets/svg/black_right_arrow.svg";
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../api/helper';

const Career = () => {
    scrollToTop();
    return (
        <>
            <div className="py-6 bg-[#F5F5F5]">
                <Wrapper>
                    <div className="mb-5 flex items-center">
                        <img src={home} alt="icon" className="mx-2 mb-1" />
                        <p className="text-primary_color font-[500]">হোম</p>
                        <img src={arrow} alt="icon" />
                        <p className="text-[#9096A2]">ক্যারিয়ার</p>
                    </div>
                </Wrapper>

                <div className='bg-[#F4FBFF]'>
                    <Wrapper>
                        <div className="relative z-10 flex justify-center items-center  py-10">
                            <div className="w-full flex flex-col sm:flex-row items-center px-0 lg:px-20 lg:gap-20">
                                <div className="flex h-full  flex-col justify-center gap-4 font-Baloo w-full sm:w-1/2">
                                    <h1 className="text-[20px] md:text-[32px] lg:text-[40px] leading-[28px] md:leading-[40px] lg:leading-[56px] font-[600] lg:font-[700] text-[#2E3138] text-start">Join us to transform education together.
                                    </h1>
                                    <p className=" leading-[18px] w-full max-w-[400.5px] h-fit text-[#464A53] mr-5">
                                        Come and be a part of an inspiring team that is  revolutionizing education in Bangladesh.
                                    </p>
                                    <div className="flex  sm:justify-normal gap-3 mt-4">
                                        <button
                                            type="button"
                                            className="font-Baloo text-white bg-secandary_color flex items-center justify-center py-[5px] px-4 gap-1 rounded-md"
                                        >
                                            See all job openning
                                        </button>

                                    </div>
                                </div>

                                <div className="w-full sm:w-1/2 h-full flex justify-center sm:justify-end  items-end mt-10 sm:mt-16">
                                    <img
                                        src={career_hero}
                                        alt="banner of eShikhon"
                                        className="w-full"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='relative mt-0 md:mt-4'>
                            <Countdown />
                        </div>
                    </Wrapper>
                </div>
                <div className='pt-44 md:pt-32'>
                    <Wrapper>
                        <div>
                            <h1 className='text-[#17191C] text-[20px] md:text-[24px] lg:text-[32px] font-[600] lg:font-[700] leading-[28px] md:leading-[40px] '>Open Positions</h1>
                        </div>

                        <div className='py-10 w-full flex lg:flex flex-col lg:flex-row gap-8 justify-between md:hidden'>

                            <div className=" relative w-full md:w-[366px] lg:w-[377px] bg-[#FFF] py-2 px-3 rounded-[5px] text-sm sm:text-base mx-auto md:mx-0 border border-[#E3E5E8]">
                                <div className="">
                                    <h2 className='text-[#9096A2]'>Choose Category</h2>
                                    <img
                                        src={down_arrow}
                                        alt="icon"
                                        className="absolute top-1/2 right-2 transform -translate-y-1/2"
                                    />
                                </div>
                            </div>
                            <div className=" relative w-full md:w-[366px] lg:w-[377px] bg-[#FFF] py-2 px-3 rounded-[5px] text-sm sm:text-base mx-auto md:mx-0 border border-[#E3E5E8]">
                                <div className="">
                                    <h2 className='text-[#9096A2]'>Choose Category</h2>
                                    <img
                                        src={down_arrow}
                                        alt="icon"
                                        className="absolute top-1/2 right-2 transform -translate-y-1/2"
                                    />
                                </div>
                            </div>
                            <div className=" relative w-full md:w-[366px] lg:w-[377px] bg-[#FFF] py-2 px-3 rounded-[5px] text-sm sm:text-base mx-auto md:mx-0 border border-[#E3E5E8]">
                                <div className="">
                                    <h2 className='text-[#9096A2]'>Choose Category</h2>
                                    <img
                                        src={down_arrow}
                                        alt="icon"
                                        className="absolute top-1/2 right-2 transform -translate-y-1/2"
                                    />
                                </div>
                            </div>


                        </div>
                        {/*  */}
                        <div className=' hidden lg:hidden md:flex flex-col w-full gap-4 justify-between'>

                            <div className='flex flex-row gap-8 justify-between'>
                                <div className=" relative w-full md:w-[366px] lg:w-[377px] bg-[#FFF] py-2 px-3 rounded-[5px] text-sm sm:text-base mx-auto md:mx-0 border border-[#E3E5E8]">
                                    <div className="">
                                        <h2 className='text-[#9096A2]'>Choose Category</h2>
                                        <img
                                            src={down_arrow}
                                            alt="icon"
                                            className="absolute top-1/2 right-2 transform -translate-y-1/2"
                                        />
                                    </div>
                                </div>
                                <div className=" relative w-full md:w-[366px] lg:w-[377px] bg-[#FFF] py-2 px-3 rounded-[5px] text-sm sm:text-base mx-auto md:mx-0 border border-[#E3E5E8]">
                                    <div className="">
                                        <h2 className='text-[#9096A2]'>Choose Category</h2>
                                        <img
                                            src={down_arrow}
                                            alt="icon"
                                            className="absolute top-1/2 right-2 transform -translate-y-1/2"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className=" relative w-full lg:w-[377px] bg-[#FFF] py-2 px-3 rounded-[5px] text-sm sm:text-base mx-auto md:mx-0 border border-[#E3E5E8]">
                                <div className="">
                                    <h2 className='text-[#9096A2]'>Choose Category</h2>
                                    <img
                                        src={down_arrow}
                                        alt="icon"
                                        className="absolute top-1/2 right-2 transform -translate-y-1/2"
                                    />
                                </div>
                            </div>


                        </div>
                    </Wrapper>
                </div>


            </div>

            <div className="py-20 bg-[#FFF]">
                <Wrapper>
                    <div className='flex flex-col gap-10'>
                        <div className='flex flex-col md:flex-row justify-between gap-5'>
                            <div className=" relative w-full lg:w-[524px] bg-[#F5F5F5] py-2 px-3 rounded-[5px] text-sm sm:text-base mx-auto md:mx-0 border border-[#E3E5E8]">
                                <div className="">
                                    <h2 className='text-[#9096A2]'>Search job Title</h2>
                                    <img
                                        src={search}
                                        alt="icon"
                                        className="absolute top-1/2 right-2 transform -translate-y-1/2"
                                    />
                                </div>
                            </div>
                            <div className='mx-auto md:mx-0 flex items-center gap-3'>
                                <h1>Sort by</h1>
                                <div className=" relative w-[272px] bg-[#F5F5F5] py-2 px-3 rounded-[8px] text-sm sm:text-base mx-auto md:mx-0 border border-[#E3E5E8]">
                                    <div className="">
                                        <h2 className='text-[#9096A2]'>Choose Category</h2>
                                        <img
                                            src={down_arrow}
                                            alt="icon"
                                            className="absolute top-1/2 right-2 transform -translate-y-1/2"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h1 className=' text-[#1E567B] text-[20px] md:text-[24px] lg:text-[32px] font-[600] lg:font-[700] leading-[28px] md:leading-[40px] '>Instructor</h1>
                        <Link to='/careerDetails'>
                            <div className='flex flex-col gap-5'>
                                <div className="overflow-hidden bg-[#F6FFFD] rounded-[10px] border border-[#E3E5E8]">
                                    <div className="p-2 md:p-5 lg:p-7 flex flex-col md:flex-row justify-between gap-4">
                                        <div className='w-full  max-w-[759px] flex flex-col gap-4'>
                                            <h1 className=' text-[#000] text-[20px] md:text-[20px] lg:text-[28px] font-[600] leading-[25px] md:leading-[28px] '>
                                                Subject Program Executive & Mentor, Bangladesh & Global Studies (BGS)
                                            </h1>
                                            <p className=' text-[#000] text-[20px] md:text-[20px] lg:text-[16px] font-[400] leading-[18px] md:leading-[22px] '>
                                                The Role:As the Subject Program Executive (SPE)+Mentor for the Bangladesh & Global Studies team within the Knowledge Department. As an SPE, you will be responsible to review and deliver high-quali...
                                            </p>
                                        </div>
                                        <div className='text-right flex items-center justify-between gap-6'>
                                            <h1 className=' text-[#000] text-[20px] md:text-[20px] lg:text-[24px] font-[600] leading-[25px] md:leading-[28px] '>
                                                Dhaka, Head Office <br /> Full Time
                                            </h1>
                                            <img src={right_arrow} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="overflow-hidden bg-[#FFF] rounded-[10px] border border-[#E3E5E8]">
                                    <div className="p-2 md:p-5 lg:p-7 flex flex-col md:flex-row justify-between gap-4">
                                        <div className='w-full max-w-[759px] flex flex-col gap-4'>
                                            <h1 className=' text-[#000] text-[20px] md:text-[20px] lg:text-[28px] font-[600] leading-[25px] md:leading-[28px] '>
                                                Subject Program Executive (SPE) Mathematics
                                            </h1>
                                            <p className=' text-[#000] text-[20px] md:text-[20px] lg:text-[16px] font-[400] leading-[18px] md:leading-[22px] '>
                                                The Role:As the Subject Program Executive (SPE)+Mentor for the Bangladesh & Global Studies team within the Knowledge Department. As an SPE, you will be responsible to review and deliver high-quali...
                                            </p>
                                        </div>
                                        <div className='text-right flex items-center justify-between gap-6'>
                                            <h1 className=' text-[#000] text-[20px] md:text-[20px] lg:text-[24px] font-[600] leading-[25px] md:leading-[28px] '>
                                                Dhaka, Head Office <br /> Full Time
                                            </h1>
                                            <img src={right_arrow} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="overflow-hidden bg-[#FFF] rounded-[10px] border border-[#E3E5E8]">
                                    <div className="p-2 md:p-5 lg:p-7 flex flex-col md:flex-row justify-between gap-4">
                                        <div className='w-full  max-w-[759px] flex flex-col gap-4'>
                                            <h1 className=' text-[#000] text-[20px] md:text-[20px] lg:text-[28px] font-[600] leading-[25px] md:leading-[28px] '>
                                                Subject Program Executive (SPE) Mathematics
                                            </h1>
                                            <p className=' text-[#000] text-[20px] md:text-[20px] lg:text-[16px] font-[400] leading-[18px] md:leading-[22px] '>
                                                The Role:As the Subject Program Executive (SPE)+Mentor for the Bangladesh & Global Studies team within the Knowledge Department. As an SPE, you will be responsible to review and deliver high-quali...
                                            </p>
                                        </div>
                                        <div className='text-right flex items-center justify-between gap-6'>
                                            <h1 className=' text-[#000] text-[20px] md:text-[20px] lg:text-[24px] font-[600] leading-[25px] md:leading-[28px] '>
                                                Dhaka, Head Office <br /> Full Time
                                            </h1>
                                            <img src={right_arrow} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <h1 className=' text-[#1E567B] text-[20px] md:text-[24px] lg:text-[32px] font-[600] lg:font-[700] leading-[28px] md:leading-[40px] '>Designer</h1>
                        <div className="overflow-hidden bg-[#FFF] rounded-[10px] border border-[#E3E5E8]">
                            <div className="p-2 md:p-5 lg:p-7 flex flex-col md:flex-row justify-between gap-4">
                                <div className='w-full  max-w-[759px] flex flex-col gap-4'>
                                    <h1 className=' text-[#000] text-[20px] md:text-[20px] lg:text-[28px] font-[600] leading-[25px] md:leading-[28px] '>
                                        UI/UX Designer
                                    </h1>
                                    <p className=' text-[#000] text-[20px] md:text-[20px] lg:text-[16px] font-[400] leading-[18px] md:leading-[22px] '>
                                        The Role:As the Subject Program Executive (SPE)+Mentor for the Bangladesh & Global Studies team within the Knowledge Department. As an SPE, you will be responsible to review and deliver high-quali...
                                    </p>
                                </div>
                                <div className='text-right flex items-center justify-between gap-6'>
                                    <h1 className=' text-[#000] text-[20px] md:text-[20px] lg:text-[24px] font-[600] leading-[25px] md:leading-[28px] '>
                                        Dhaka, Head Office <br /> Full Time
                                    </h1>
                                    <img src={right_arrow} alt="" />
                                </div>
                            </div>
                        </div>

                        <h1 className=' text-[#1E567B] text-[20px] md:text-[24px] lg:text-[32px] font-[600] lg:font-[700] leading-[28px] md:leading-[40px] '>Engineer</h1>
                        <div className="overflow-hidden bg-[#FFF] rounded-[10px] border border-[#E3E5E8]">
                            <div className="p-2 md:p-5 lg:p-7 flex flex-col md:flex-row justify-between gap-4">
                                <div className='w-full  max-w-[759px] flex flex-col gap-4'>
                                    <h1 className=' text-[#000] text-[20px] md:text-[20px] lg:text-[28px] font-[600] leading-[25px] md:leading-[28px] '>
                                        Software Engineer
                                    </h1>
                                    <p className=' text-[#000] text-[20px] md:text-[20px] lg:text-[16px] font-[400] leading-[18px] md:leading-[22px] '>
                                        The Role:As the Subject Program Executive (SPE)+Mentor for the Bangladesh & Global Studies team within the Knowledge Department. As an SPE, you will be responsible to review and deliver high-quali...
                                    </p>
                                </div>
                                <div className='text-right flex items-center justify-between gap-6'>
                                    <h1 className=' text-[#000] text-[20px] md:text-[20px] lg:text-[24px] font-[600] leading-[25px] md:leading-[28px] '>
                                        Dhaka, Head Office <br /> Full Time
                                    </h1>
                                    <img src={right_arrow} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="overflow-hidden bg-[#FFF] rounded-[10px] border border-[#E3E5E8]">
                            <div className="p-2 md:p-5 lg:p-7 flex flex-col md:flex-row justify-between gap-4">
                                <div className='w-full  max-w-[759px] flex flex-col gap-4'>
                                    <h1 className=' text-[#000] text-[20px] md:text-[20px] lg:text-[28px] font-[600] leading-[25px] md:leading-[28px] '>
                                        Frontend Developer
                                    </h1>
                                    <p className=' text-[#000] text-[20px] md:text-[20px] lg:text-[16px] font-[400] leading-[18px] md:leading-[22px] '>
                                        The Role:As the Subject Program Executive (SPE)+Mentor for the Bangladesh & Global Studies team within the Knowledge Department. As an SPE, you will be responsible to review and deliver high-quali...
                                    </p>
                                </div>
                                <div className='text-right flex items-center justify-between gap-6'>
                                    <h1 className=' text-[#000] text-[20px] md:text-[20px] lg:text-[24px] font-[600] leading-[25px] md:leading-[28px] '>
                                        Dhaka, Head Office <br /> Full Time
                                    </h1>
                                    <img src={right_arrow} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </div>

        </>

    );
};

export default Career;