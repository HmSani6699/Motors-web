import React from 'react';
import img_3 from "../../assets/images/office.png";
import office_1 from "../../assets/images/agent-office (1).png";
import office_2 from "../../assets/images/agent-office (2).png";
import office_3 from "../../assets/images/agent-office (3).png";
import office_4 from "../../assets/images/agent-office (4).png";
import office_5 from "../../assets/images/agent-office (5).png";
import arrow_icon from "../../assets/svg/circle-arrow.svg";
import arrow from "../../assets/svg/right-arrow.svg";
import Wrapper from '../../components/sheared/Wrapper';
import OfficeCard from '../../components/homePage/OfficeCard';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from 'react-router-dom';

const AgentOffice = () => {
    return (
        <>
            <Wrapper className="my-20">
                <div className="flex justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <img alt="icon" src={img_3} width={24} height={24} />
                        <p className="font-Baloo text-[#1D5276] text-xl sm:text-9xl leading-[28px] font-[600]">
                            এজেন্ট অফিস
                        </p>
                    </div>
                    <div className="flex gap-3 md:gap-5">
                        <div className="bg-[#ACB0B9] p-1 rounded-full flex justify-center items-center">
                            <img
                                alt="icon"
                                src={arrow_icon}
                                className="rotate-180 w-[24px] md:w-[32px]"
                            />
                        </div>
                        <div className="bg-primary_color p-1 rounded-full flex justify-center items-center">
                            <img
                                alt="icon"
                                src={arrow_icon}
                                className="w-[24px] md:w-[32px]"
                            />
                        </div>
                    </div>
                </div>
                <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={15}
                    className="mySwipe w-full"
                >
                    <div className=" flex gap-4 overflow-hidden">
                        <SwiperSlide className="max-w-[250px]" >
                            <OfficeCard
                                img={office_1}
                                name="রেইনবো কম্পিউটার ইনস্টি.."
                                location="বরিশাল"
                                rating="4.5"
                                number="01823363333"
                                group="400 + students"
                            /> </SwiperSlide>

                        <SwiperSlide className="max-w-[250px]" >
                            <OfficeCard
                                img={office_2}
                                name="আইটি কম্পিউটার সিটি"
                                location="বাস স্ট্যান্ড,চাঁদপুর"
                                number="01823363333"
                                rating="4.5"
                                group="400 + students"
                            /></SwiperSlide>

                        <SwiperSlide className="max-w-[250px]" >
                            <OfficeCard
                                img={office_3}
                                name="ক্রিয়েটিভ কম্পিউটার"
                                location="বাকেরগঞ্জ, বরিশাল"
                                number="01823363333"
                                rating="4.5"
                                group="400 + students"
                            /></SwiperSlide>

                        <SwiperSlide className="max-w-[250px]" >
                            <OfficeCard
                                img={office_4}
                                name="কালার গ্রাফিক্স পয়েন্ট"
                                location="বাগেরহাট, খুলনা।"
                                number="01823363333"
                                rating="4.5"
                                group="400 + students"
                            /></SwiperSlide>

                        <SwiperSlide className="max-w-[250px]" >
                            <OfficeCard
                                img={office_5}
                                name="অপটিমাম আইটি"
                                location="ফকিরাপুলের কাছে,ব্রাহ্মনবাড়িয়া"
                                number="01823363333"
                                rating="4.5"
                                group="400 + students"
                            /></SwiperSlide>
                    </div>
                </Swiper>
                <div className="flex justify-center mt-10">
                    <Link to='/agentOffice' >
                    <button
                        type="button"
                        className="font-Baloo text-white bg-secandary_color flex items-center justify-center py-[10px] px-5  gap-2 rounded-md"
                    >
                        সকল এজেন্ট অফিস <img alt="icon" src={arrow} />
                    </button>
                    </Link>
                </div>
            </Wrapper>
        </>
    );
};

export default AgentOffice;