import React from 'react';
import Wrapper from '../../components/sheared/Wrapper';
import home from "../../assets/svg/home_icon.svg";
import arrow from "../../assets/svg/right_gray_icon.svg";
import agent1 from "../../assets/images/agent-office (1).png";
import agent2 from "../../assets/images/agent-office (2).png";
import agent3 from "../../assets/images/agent-office (3).png";
import agent4 from "../../assets/images/agent-office (4).png";
import agent5 from "../../assets/images/agent-office (5).png";
import file_white from "../../assets/svg/file_white.svg";
import { Link } from 'react-router-dom';
import AgentOfficeCard from '../../components/sheared/agentOffice/AgentOfficeCard';
import { scrollToTop } from '../../api/helper';

const AgentOfficePage = () => {
    scrollToTop();
    return (
        <>
            <div className="py-6 bg-[#F5F5F5]">
                <Wrapper>
                    <div className=" flex items-center">
                        <img src={home} alt="icon" className="mx-2 mb-1" />
                        <p className="text-primary_color font-[500]">হোম</p>
                        <img src={arrow} alt="icon" />
                        <p className="text-[#9096A2]">এজেন্ট অফিস</p>
                    </div>
                </Wrapper>
            </div>
            <div>
                <div className='contact_us_bg bg-[#F4FBFF] '>
                    <Wrapper>
                        <div>
                            <div className='py-14 flex items-center flex-col gap-3 text-center'>
                                <div className='w-[175px] py-[6px] bg-[#ADD2EB] rounded-[5px] mx-auto mb-5'>
                                    <h1 className='text-[#1D5276] text-[18px] font-[600]'>
                                        ৪০+ টি এজেন্ট অফিস
                                    </h1>
                                </div>
                                <h1 className='text-[#2E3138] text-[20px] lg:text-[28px] font-[600] lg:font-[700] leading-[28px] md:leading-[36px] text-center '>আপনার ট্রেইনিং প্রতিষ্ঠান থাকলে আপনিও হতে পারেন ইশিখন এজেন্ট</h1>
                                <div>
                                    <Link to='/form' >
                                        <button
                                            className="px-5 py-3 rounded-[8px]  text-[16px] font-[500] leading-[24px] text-white primary_green flex flex-row items-center gap-2"
                                        >
                                            <img src={file_white} alt="" />
                                            নিবন্ধন করুন
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Wrapper>
                </div>
            </div>
            <div>
                <Wrapper>
                    <div className='mt-20 mb-20 p-10 bg-[#FFF] rounded-[32px]'>
                        <div className='flex flex-col md:flex-row justify-between items-center mb-16 gap-5'>
                            <div className="flex items-center gap-2.5 ">
                                <p className="text-[#1D5276] text-[16px] md:text-[20px] lg:text-[28px] font-[700] leading-[28px] sm:leading-[36px]">
                                    এজেন্ট অফিস সমূহ
                                </p>
                            </div>
                            <div className="flex items-center gap-4">

                                <button
                                    type="button"
                                    className="bg-[#C7CAD1] font-Baloo py-[10px] px-5  gap-2 rounded-[50px] text-[#5D636F] "
                                >
                                   ঢাকার বাহিরে 
                                </button>
                                <button
                                    type="button"
                                    className="bg-[#C7CAD1] font-Baloo py-[10px] px-5  gap-2 rounded-[50px] text-[#5D636F] "
                                >
                                   ঢাকার ভিতরে
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                            <AgentOfficeCard
                                img={agent1}
                                name="ক্রিয়েটিভ কম্পিউটার"
                            />
                            <AgentOfficeCard
                                img={agent2}
                                name="কালার গ্রাফিক্স পয়েন্ট"
                            />
                            <AgentOfficeCard
                                img={agent3}
                                name="ক্রিয়েটিভ গ্যালারী"
                            />
                            <AgentOfficeCard
                                img={agent4}
                                name="ক্রিয়েটিভ কম্পিউটার"
                            />
                            <AgentOfficeCard
                                img={agent1}
                                name="কালার গ্রাফিক্স পয়েন্ট"
                            />
                            <AgentOfficeCard
                                img={agent5}
                                name="ক্রিয়েটিভ গ্যালারী"
                            />
                            <AgentOfficeCard
                                img={agent2}
                                name="কালার গ্রাফিক্স পয়েন্ট"
                            />
                            <AgentOfficeCard
                                img={agent3}
                                name="ক্রিয়েটিভ গ্যালারী"
                            />
                            <AgentOfficeCard
                                img={agent4}
                                name="ক্রিয়েটিভ কম্পিউটার"
                            />

                        </div>
                    </div>
                </Wrapper>
            </div>
        </>
    );
};

export default AgentOfficePage;