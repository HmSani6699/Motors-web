import React from 'react';
import Wrapper from '../../components/sheared/Wrapper';
import call_icon from "../../assets/svg/call-calling.svg";
import call_img from "../../assets/svg/call-icon-img.svg";
import youtube from "../../assets/images/youtube.png";
import facebook from "../../assets/images/facebook.png";
import message_icon from "../../assets/svg/sendMessage.svg";

const CallNow = () => {
    return (
        <>
            <Wrapper className="mt-10 mb-20">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="bg-darkslategray-300 bg-gradient-to-t from-[#00526C]/50 via-[#00526C]/50 to-[#005C46]/50 flex justify-center sm:justify-between rounded-[30px] relative w-full md:w-8/12">
                        <div className="p-6 sm:p-8 ">
                            <div className="flex flex-col gap-2 mb-8">
                                <h2 className="font-Baloo text-white  text-xl sm:text-5xl md:text-13xl  leading-[28px] sm:leading-[32px] md:leading-[40px] font-[700] text-center sm:text-start">
                                    যেকোনো প্রয়োজনে কল করুন এখনই
                                </h2>
                                <p className="font-Baloo text-sm sm:text-base leading-[18px] sm:leading-[22px] font-[400] text-white text-center sm:text-start">
                                    ইশিখন.কমের কোর্স, তোমার পড়াশোনা, প্রোমো কোড অথবা যেকোনো
                                    <br className="hidden sm:block" />
                                    জিজ্ঞাসায় কল করুন
                                </p>
                                <div className="flex justify-center sm:justify-normal  gap-4">
                                    <div className="w-[5px] h-[25px] bg-[#D9D9D9] rounded-[8px]"></div>
                                    <h4 className="font-Baloo text-white text-lg sm:text-xl leading-[28px] font-[600]">
                                        সকাল ৯ টা - রাত ১০ টা
                                    </h4>
                                </div>
                            </div>
                            <a href="tel:09639399399">
                                <div className="flex gap-1 justify-center items-center bg-white px-4 py-2 rounded-[8px]">
                                    <img
                                        alt="icon"
                                        src={call_icon}
                                        className="w-[24px] md:w-[32px]"
                                    />
                                    <p className="font-Baloo text-secandary_color text-xl sm:text-5xl md:text-13xl  leading-[28px] sm:leading-[32px] md:leading-[44px] font-[700] sm:font-[500]">
                                        +8809639399399
                                    </p>
                                </div>
                            </a>
                        </div>
                        <img
                            alt="icon"
                            src={call_img}
                            className="absolute bottom-0 right-10 hidden sm:block"
                        />
                    </div>

                    <div className="w-full md:w-4/12 flex flex-col sm:flex-row md:flex-col gap-4 md:gap-2">
                        <div className="flex justify-between items-center bg-[#1D5276] p-5 text-white rounded-[20px] w-full">
                            <div className="flex flex-col gap-4">
                                <h4 className="font-Baloo text-white text-xl sm:text-5xl leading-[28px] sm:leading-[32px] font-[600]">
                                    ফ্রি ভিডিও লাইব্রেরি
                                </h4>
                                <a target='blank' href="https://www.youtube.com/@eShikhon">

                                    <button
                                        type="button"
                                        className="font-Baloo text-white bg-secandary_color flex items-center justify-center py-[12px] px-5 gap-2 rounded-md w-fit"
                                    >
                                        <img alt="icon" src={message_icon} /> ভিডিও দেখো
                                    </button></a>
                            </div>
                            <div>
                                <img
                                    alt="icon"
                                    src={youtube}
                                    className="w-[48px] sm:w-[56px] md:w-[71px]"
                                />
                            </div>
                        </div>
                        <div className="flex justify-between items-center bg-[#134651] p-5 text-white rounded-[20px] w-full">
                            <div className="flex flex-col gap-4">
                                <h4 className="font-Baloo text-white text-xl sm:text-5xl leading-[28px] sm:leading-[32px] font-[600]">
                                    ইশিখন.কম - ফেসবুক গ্রুপ
                                </h4>
                                <a target='blank' href="https://www.facebook.com/groups/eshikhon"><button
                                    type="button"
                                    className="font-Baloo text-white bg-secandary_color flex items-center justify-center py-[12px] px-5  gap-2 rounded-md w-fit"
                                >
                                    <img alt="icon" src={message_icon} /> জয়েন গ্রুপ
                                </button></a>

                            </div>
                            <div>
                                <img
                                    alt="icon"
                                    src={facebook}
                                    className="w-[48px] sm:w-[56px] md:w-[71px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    );
};

export default CallNow;