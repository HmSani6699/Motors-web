import React from 'react';
import Wrapper from '../../components/sheared/Wrapper';
import CountdownCard from '../home/CountdownCard';
import home from "../../assets/svg/home_icon.svg";
import arrow from "../../assets/svg/right_gray_icon.svg";
import users_two_white from "../../assets/svg/user_two_black.svg";
import certificate_skill from "../../assets/svg/certificate_skill.svg";
import learn_resume from "../../assets/svg/learn_resume.svg";
import learn_briefcase from "../../assets/svg/learn_briefcase.svg";

import learn_hero from "../../assets/images/learn_page_banner.png"
import img_1 from "../../assets/images/student.png";
import img_2 from "../../assets/images/teacher.png";
import img_3 from "../../assets/images/office.png";
import img_4 from "../../assets/images/globe.png";
import learnPage_step_1 from "../../assets/images/learnPage_step_1.png";
import learnPage_step_responsive from "../../assets/images/learnPage_step_1_responsive.png";
import certificate from "../../assets/images/certificate.png";
import { scrollToTop } from '../../api/helper';

const LearnPage = () => {
    scrollToTop();
    return (
        <>
            <div className="pt-6 bg-[#F5F5F5]">
                <Wrapper>
                    <div className=" flex items-center">
                        <img src={home} alt="icon" className="mx-2 mb-1" />
                        <p className="text-primary_color font-[500]">হোম</p>
                        <img src={arrow} alt="icon" />
                        <p className="text-[#9096A2]">লার্ন</p>
                    </div>
                    {/* banner */}
                    <div>
                        <div className="relative z-10 flex justify-center items-center bg-[#FFF] rounded-t-[30px] mt-14 pt-5 md:pt-5 lg:pt-10 ps-4 md:ps-5 lg:ps-10 pr-4 md:pr-5 lg:pr-10">
                            <div className="w-full flex flex-col sm:flex-row px-0 lg:gap-20">
                                <div className="flex h-full  flex-col justify-center gap-4 font-Baloo w-full sm:w-1/2">
                                    <h1 className="text-[20px] md:text-[32px] lg:text-[28px] leading-[28px] md:leading-[40px] lg:leading-[56px] font-[600] lg:font-[700] text-[#2E3138] text-start">Learning On <span className='text-[#20AC90]'>eShikhon</span> Is Easy
                                    </h1>
                                    <p className=" leading-[22px] w-full md:w-[314px] lg:w-[550px] h-fit text-[#464A53] mr-5 font-[400]">
                                        We believe that empowering yourself shouldn’t just be rewarding, but also really simple (and free). That’s why your journey from clicking on a course you want to take to completing it and getting a certificate takes only 6 steps. Check them out below!
                                    </p>
                                    <div className="flex  sm:justify-normal gap-3 mt-5 lg:mt-8 ">
                                        <button
                                            type="button"
                                            className="font-Baloo text-white bg-secandary_color flex items-center justify-center py-[12px] px-[20px] gap-1 rounded-md"
                                        >
                                            Sign Up
                                        </button>

                                    </div>
                                </div>

                                <div className="w-full sm:w-1/2 h-full  sm:justify-end  items-end mt-10 sm:mt-16 relative inline-block">
                                    <img
                                        src={learn_hero}
                                        alt="banner of eShikhon"
                                        className="w-full "
                                    />
                                    <p className="absolute flex items-center justify-center w-32 p-2 text-gray-600 bg-[#FFF] rounded-[10px]  drop-shadow-lg top-0 md:top-6 lg:top-14 left-3 md:left-10">
                                        <div className='flex flex-col items-center'>
                                            <span className='flex items-center gap-1'>
                                                <img src={users_two_white} alt="" />
                                                <span className="truncate font-[400]">Students</span>
                                            </span>
                                            <p className="text-[20px] md:text-[32px] lg:text-[24px] leading-[20px] font-[600] lg:font-[700] text-[#20AC90]">33,567k</p>
                                        </div>

                                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute w-6 h-6 transform rotate-45 -translate-y-1/2 fill-current -right-3 top-1/2  text-[#FFF]" stroke="currentColor" viewBox="0 0 24 24" >
                                            <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"></path>
                                        </svg>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </div>
            <div className='bg-[#F4FBFF] drop-shadow-lg'>
                <Wrapper>
                    <div className="px-5 py-5 sm:py-10 coundown_box rounded-[0px] sm:rounded-[10px] grid grid-cols-1 sm:grid-cols-4 gap-3 ">
                        <CountdownCard img={img_1} title="৫০ হাজার+" office="শিক্ষার্থী" />
                        <CountdownCard img={img_2} title="১০০ জন+" office="অভিজ্ঞ মেন্টর" />
                        <CountdownCard img={img_3} title="২০০ টি+" office="এজেন্ট অফিস" />
                        <CountdownCard img={img_4} title="৫০ টি+" office=" লার্নিং কোর্স" />
                    </div>
                </Wrapper>
            </div>
            {/*  */}
            <div className="pt-6 bg-[#F5F5F5]">
                <Wrapper>
                    <div className='py-16 flex justify-between '>
                        <div className='hidden md:flex flex-col justify-between'>
                            <h1 className="text-[20px] md:text-[32px] lg:text-[28px] leading-[28px] md:leading-[40px] lg:leading-[36px] font-[600] lg:font-[700] text-[#1E567B]">6 Easy Steps to Follow</h1>
                            <div className='flex flex-col gap-2'>
                                <div className='py-1.5 px-4 bg-[#FFF] rounded-[8px]'>
                                    <h1 className='text-[#20AC90] text-[16px] md:text-[18px] lg:text-[20px] font-[500] lg:font-[700] leading-[22px] md:leading-[28px] '>1. Register Your Account</h1>
                                </div>
                                <div className='py-1.5 px-4 bg-[#FFF] rounded-[8px]'>
                                    <h1 className='text-[#2E3138] text-[16px] md:text-[18px] lg:text-[20px] font-[500] lg:font-[700] leading-[22px] md:leading-[28px] '>2. Find The Right Course</h1>
                                </div>
                                <div className='py-1.5 px-4 bg-[#FFF] rounded-[8px]'>
                                    <h1 className='text-[#2E3138] text-[16px] md:text-[18px] lg:text-[20px] font-[500] lg:font-[700] leading-[22px] md:leading-[28px] '>3. Learn At Your Own Pace</h1>
                                </div>
                                <div className='py-1.5 px-4 bg-[#FFF] rounded-[8px]'>
                                    <h1 className='text-[#2E3138] text-[16px] md:text-[18px] lg:text-[20px] font-[500] lg:font-[700] leading-[22px] md:leading-[28px] '>4. Become A Graduate</h1>
                                </div>
                                <div className='py-1.5 px-4 bg-[#FFF] rounded-[8px]'>
                                    <h1 className='text-[#2E3138] text-[16px] md:text-[18px] lg:text-[20px] font-[500] lg:font-[700] leading-[22px] md:leading-[28px] '>5. Get Your Certificate</h1>
                                </div>
                                <div className='py-1.5 px-4 bg-[#FFF] rounded-[8px]'>
                                    <h1 className='text-[#2E3138] text-[16px] md:text-[18px] lg:text-[20px] font-[500] lg:font-[700] leading-[22px] md:leading-[28px] '>6. Boost Your Career</h1>
                                </div>
                            </div>

                        </div>
                        {/* right side */}
                        <div className='w-full md:w-[510px] lg:w-[860px] bg-[#FFF] rounded-[20px] relative'>
                           
                            <div className='p-3 lg:p-9 flex flex-col gap-6'>
                                <div className='bg-[#F1F2F3] py-1 px-2 rounded-[5px]'>
                                    <h1 className='text-[#1D5276] text-[16px] md:text-[20px] lg:text-[24px] font-[500] md:font-[600] leading-[22px] lg:leading-[36px] '>1. Register Your Account</h1>
                                </div>
                                <img
                                className=' w-[300px] mx-auto block md:hidden'
                                src={learnPage_step_responsive} alt="" />
                                <div className='w-full md:w-[479px] lg:w-[546px]'>
                                    <p className='text-[#464A53] text-[16px] font-[400] leading-[24px] '>
                                        Register on eShikhon either by using your email address, or through a social media account. It’s free and gives you access to the website and all its features.
                                    </p>
                                    <br />
                                    <p className='text-[#464A53] text-[16px] font-[400] leading-[24px] '>
                                        Then upload a picture to your eShikhon profile and make it public. Don’t forget to add your skills and experience. After all, it won’t hurt to impress someone who’ll be looking at it!
                                    </p>
                                </div>
                                <div className='md:pb-16 pb-0 lg:pb-0 '>
                                    <button
                                        type="button"
                                        className="w-full md:w-[157px] font-Baloo text-white bg-secandary_color py-[8px] px-[20px] gap-1 rounded-md "
                                    >
                                        Register
                                    </button>
                                </div>
                            </div>
                            <img
                                className='absolute right-0 bottom-0 w-[240px] md:w-[144px] lg:w-[244px] hidden md:block'
                                src={learnPage_step_1} alt="" />
                        </div>
                    </div>
                </Wrapper>
            </div>

            {/* certificate */}
            <div className="py-5 bg-[#F4FBFF] rounded-[30px]">
                <Wrapper>
                    <div className='py-20'>
                        <h1 className="text-[20px] md:text-[32px] lg:text-[28px] leading-[28px] md:leading-[40px] lg:leading-[36px] font-[600] lg:font-[700] text-[#2E3138] text-center">Completing an <span className='text-[#20AC90] '>eShikhon</span> Course Has Its Advantages </h1>
                        <div className='gap-8 mt-20 flex flex-col lg:flex-row justify-between'>
                            <div className='flex flex-col gap-[30px] w-full lg:w-[559px]'>
                                <div className='flex items-center gap-4'>
                                    <div className='p-2.5 bg-[#20AC90] rounded-full border-[6px] border-[#FFF] drop-shadow'>
                                        <img src={certificate_skill} alt="" />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <h1 className=' text-[#2E3138] text-[16px] md:text-[20px] font-[500] leading-[22px] md:leading-[28px] '>Your Skills Will Be Recognized</h1>
                                        <p className=' text-[#464A53] text-[14px] md:text-[16px] font-[400] leading-[18px] md:leading-[22px] '>
                                            Our courses are accredited. Complete any Certificate or Diploma course and learn certified skills.
                                        </p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <div className='p-2.5 bg-[#20AC90] rounded-full border-[6px] border-[#FFF] drop-shadow'>
                                        <img src={learn_resume} alt="" />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <h1 className=' text-[#2E3138] text-[16px] md:text-[20px] font-[500] leading-[22px] md:leading-[28px] '>Your Resumé Will Look More Impressive</h1>
                                        <p className=' text-[#464A53] text-[14px] md:text-[16px] font-[400] leading-[18px] md:leading-[22px] '>
                                            Add your newly acquired skills to your resumé and stand out from the crowd.
                                        </p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <div className='p-2.5 bg-[#20AC90] rounded-full border-[6px] border-[#FFF] drop-shadow'>
                                        <img src={learn_briefcase} alt="" />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <h1 className=' text-[#2E3138] text-[16px] md:text-[20px] font-[500] leading-[22px] md:leading-[28px] '>Your Career Will Move Forward</h1>
                                        <p className=' text-[#464A53] text-[14px] md:text-[16px] font-[400] leading-[18px] md:leading-[22px] '>
                                            Share your certification with potential employers. Your new skills and capabilities might lead to new opportunities.
                                        </p>
                                    </div>
                                </div>
                                <div className=''>
                                    <button
                                        type="button"
                                        className="font-Baloo text-white bg-secandary_color flex items-center justify-center py-[8px] px-[25px] gap-1 rounded-md "
                                    >
                                        Start Learning
                                    </button>
                                </div>

                            </div>
                            <div className='mx-auto lg:mx-0'>
                                <img src={certificate} alt="" />
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </div>

        </>
    );
};

export default LearnPage;