import React from 'react';
import Wrapper from '../../components/sheared/Wrapper';
import home from "../../assets/svg/home_icon.svg";
import arrow from "../../assets/svg/right_gray_icon.svg";
import facebook from "../../assets/svg/fb-color.svg"
import linkedin from "../../assets/svg/lindein-color.svg"
import instagram from "../../assets/svg/Instragram.svg"
import youtube from "../../assets/svg/youtube.svg"
import shear from "../../assets/svg/Google Plus.svg"
import { scrollToTop } from '../../api/helper';


const CareerDetails = () => {
    scrollToTop();
    return (
        <div className="py-6 bg-[#F5F5F5]">
            <Wrapper>
                <div className="mb-5 flex items-center">
                    <img src={home} alt="icon" className="mx-2 mb-1" />
                    <p className="text-primary_color font-[500]">হোম</p>
                    <img src={arrow} alt="icon" />
                    <p className="text-primary_color font-[500]">ক্যারিয়ার</p>
                    <img src={arrow} alt="icon" />
                    <p className="text-[#9096A2]">ক্যারিয়ার ডিটেইলস</p>
                </div>
                {/*  */}
                <div className='flex flex-col md:flex-row gap-[39px] py-10'>
                    {/* left side article */}

                    <div>
                        <div className='flex flex-col gap-8 bg-[#FFF] py-10 px-5 rounded-[20px]'>

                            <div>
                                <h1 className='text-[#0C0C0E] text-[20px] lg:text-[24px] font-[600] lg:font-[700] leading-[28px] md:leading-[36px] '>Product Engineer Level 2 (Frontend)</h1>
                                <div className='flex flex-col ps-5'>
                                    <h1 className='text-[#6B7280] text-[16px] font-[400] leading-[24px] '>
                                        Panthopath Signal, Dhaka, Dhaka, bd
                                    </h1>
                                    <h1 className='text-[#6B7280] text-[16px] font-[400] leading-[24px] '>
                                        Full-time
                                    </h1>
                                    <h1 className='text-[#6B7280] text-[16px] font-[400] leading-[24px] '>
                                        Department: Engineering
                                    </h1>
                                </div>
                            </div>


                            <div>
                                <h1 className='text-[#0C0C0E] text-[20px] lg:text-[24px] font-[600] lg:font-[700] leading-[28px] md:leading-[36px] '>Company Description</h1>
                                <p className='text-[#2E3138] text-[16px] font-[400] leading-[22px] '>
                                    Eshkhun.com is the pioneer of the Ed-Tech industry in Bangladesh. We are teaching more than 2 million students every day through our website, app, and social media to accelerate their learning. Our goal is to ensure access to quality education for everyone in Bangladesh through a wide range of free-tier and premium content for Academic, Skill Development, and Jobs segments. We are the only Sequoia Capital-backed EdTech company in Bangladesh, and we're looking to hire in our Engineering, Product, Content, and Marketing teams.
                                </p>

                            </div>
                            <div>
                                <h1 className='text-[#0C0C0E] text-[20px] lg:text-[24px] font-[600] lg:font-[700] leading-[28px] md:leading-[36px] '>Job Description</h1>
                                <p className='text-[#2E3138] text-[16px] font-[400] leading-[22px] '>
                                    We are looking for talented front-end engineers to help us create beautiful and user-friendly interfaces to be used by millions of users across mobile and desktop devices. We are hiring for multiple roles in mid-level and senior positions. If you think you are a good fit, feel free to apply and get a chance to be part of a rocketship about to launch.
                                </p>

                            </div>
                            {/*  */}
                            <div>
                                <h1 className='text-[#0C0C0E] text-[20px] lg:text-[24px] font-[600] lg:font-[700] leading-[28px] md:leading-[36px] '>Job Details</h1>
                                <div className='flex flex-col ps-5'>
                                    <h1 className='text-[#6B7280] text-[16px] font-[400] leading-[24px] '>
                                        Job Modality: Full-time
                                    </h1>
                                    <h1 className='text-[#6B7280] text-[16px] font-[400] leading-[24px] '>
                                        Salary: Negotiable
                                    </h1>
                                    <h1 className='text-[#6B7280] text-[16px] font-[400] leading-[24px] '>
                                        Experience: 3 - 5 Years
                                    </h1>
                                    <h1 className='text-[#6B7280] text-[16px] font-[400] leading-[24px] '>
                                        Location - Panthopath Signal, Dhaka
                                    </h1>
                                </div>
                            </div>
                            <div>
                                <h1 className='text-[#0C0C0E] text-[20px] lg:text-[24px] font-[600] lg:font-[700] leading-[28px] md:leading-[36px] '>Qualifications</h1>
                                <div className='flex flex-col ps-5'>
                                    <h1 className='text-[#6B7280] text-[16px] font-[400] leading-[24px] '>
                                        Bachelor’s degree in computer science or related field
                                    </h1>
                                    <h1 className='text-[#6B7280] text-[16px] font-[400] leading-[24px] '>
                                        At least 3 - 5 years of experience working in the Angular/React Framework
                                    </h1>
                                    <h1 className='text-[#6B7280] text-[16px] font-[400] leading-[24px] '>
                                        Solid experience and understanding of JavaScript(ES6, ES7)
                                    </h1>
                                    <h1 className='text-[#6B7280] text-[16px] font-[400] leading-[24px] '>
                                        Solid experience working with HTML, CSS Flexbox & Grid, SVG & CSS/JS Animation
                                    </h1>
                                    <h1 className='text-[#6B7280] text-[16px] font-[400] leading-[24px] '>
                                        Proficient understanding and advanced knowledge of Git
                                    </h1>
                                    <h1 className='text-[#6B7280] text-[16px] font-[400] leading-[24px] '>
                                        Strong understanding of the software development life cycle, programming techniques and design patterns
                                    </h1>
                                    <h1 className='text-[#6B7280] text-[16px] font-[400] leading-[24px] '>
                                        Razor-sharp focus on efficiency, user experience, and process improvement
                                    </h1>
                                    <h1 className='text-[#6B7280] text-[16px] font-[400] leading-[24px] '>
                                        Excellent project and time management skills
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* right side card */}
                    <div>
                        <div className='w-full md:w-[322px] lg:w-[376px] bg-[#FFF] p-8 rounded-[10px] text-center lg:text-left'>
                            <div className='flex flex-col gap-[30px]'>
                                <div >
                                    <button
                                        type="button"
                                        className="text-[14px] font-[500] w-full font-Baloo text-[#FFF] bg-[#20AC90] py-[14px] rounded-[8px]"
                                    >
                                        I'm Interested
                                    </button>
                                </div>
                                <div >
                                    <button
                                        type="button"
                                        className="text-[14px] font-[500] w-full font-Baloo text-[#1E567B] py-[14px] rounded-[8px] border border-[#1E567B]"
                                    >
                                        Refer a friend
                                    </button>
                                </div>
                                <div className='flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0'>
                                    <h1 className='text-[#2E3138] text-[18px] font-[500]'>SHARE THIS JOB</h1>
                                    <div className='flex items-center gap-2.5'>
                                        <img src={facebook} alt="icon" className='p-1 bg-[#EAEAEA] rounded-full' />
                                        <img src={linkedin} alt="icon" className='p-1 bg-[#EAEAEA] rounded-full' />
                                        <img src={instagram} alt="icon" className='p-1 bg-[#EAEAEA] rounded-full' />
                                        <img src={youtube} alt="icon" className='p-1 bg-[#EAEAEA] rounded-full' />
                                        <img src={shear} alt="icon" className='p-1 bg-[#EAEAEA] rounded-full' />

                                    </div>
                                </div>
                                <h1 className='text-[#2E3138] text-[18px] font-[500] '>OTHER JOBS AT eshikhun.com</h1>
                                <div>
                                    <h1 className='text-[#20AC90] text-[16px] font-[400] underline leading-[20px]'>Executive - Junior SQA Engineer</h1>
                                    <h1 className='text-[#2E3138] text-[16px] font-[400] leading-[20px]'>Dhaka, Bangladesh</h1>
                                </div>
                                <div>
                                    <h1 className='text-[#2E3138] text-[16px] font-[600] lg:font-[400]  leading-[20px]'>SQA Engineer (Senior Executive)</h1>
                                    <h1 className='text-[#2E3138] text-[16px] font-[400] leading-[20px]'>Dhaka, Bangladesh</h1>
                                </div>
                                <div>
                                    <h1 className='text-[#2E3138] text-[16px] font-[600] lg:font-[400]  leading-[20px]'>Vice President, Engineering</h1>
                                    <h1 className='text-[#2E3138] text-[16px] font-[400] leading-[20px]'>Dhaka, Bangladesh</h1>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </Wrapper>
        </div>
    );
};

export default CareerDetails;