import React from 'react';
import Wrapper from '../../components/sheared/Wrapper';
import home from "../../assets/svg/home_icon.svg";
import arrow from "../../assets/svg/right_gray_icon.svg";
import about_us_video_cover from "../../assets/images/about_us_video_cover.png";
import video_play_icon from '../../assets/svg/video_play_green.svg'
import mile_folok from "../../assets/images/mile_folok.png";
import Eshikon_team from "../../assets/images/e_shikon_team.png";
import ibrahim_akbor from "../../assets/images/ibrahim_akbor.png";
import ebrahim_2_card from "../../assets/images/ebrahim_2_card.png";
import fore_kon_star_icon from '../../assets/svg/fore_kon_star.svg'
import fb_icon from "../../assets/svg/fb-color.svg"
import messenger_icon from "../../assets/svg/fb_messenger.svg"
import whatsapp_icon from "../../assets/svg/whatsapp.svg"
import linkedin_icon from "../../assets/svg/lindein-color.svg"
import down_arrow_icon from "../../assets/svg/down_arrow.svg";
import target_icon from "../../assets/svg/target_icon.svg";
import target_bottom from "../../assets/images/target_bottom.png";
import office_institute from "../../assets/images/office_institute_banner.png";
import institute_1 from "../../assets/images/institute_1.png";
import institute_2 from "../../assets/images/institute_2.png";
import institute_3 from "../../assets/images/institute_3.png";
import institute_4 from "../../assets/images/institute_4.png";
import institute_5 from "../../assets/images/institute_5.png";
import institute_6 from "../../assets/images/institute_6.png";
import institute_7 from "../../assets/images/institute_7.png";
import mentor from "../../assets/images/mentor (3).png";
import { scrollToTop } from '../../api/helper';
import WeAreMembers from '../home/WeAreMembers';

const AboutUs = () => {


    scrollToTop();

    return (
        <>
            <div className="py-10 ">
                <Wrapper>
                    {/* brandi */}
                    <div className="mb-5 flex items-center">
                        <img src={home} alt="icon" className="me-2 mb-1" />
                        <p className="text-primary_color font-[500]">হোম</p>
                        <img src={arrow} alt="icon" />
                        <p className="text-[#9096A2]">আমাদের সম্পর্কে</p>
                    </div>
                </Wrapper>
                <div className="about_us_bg w-full bg-center ">
                    <Wrapper>
                        <div className='py-10 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div className='flex flex-col justify-center gap-4'>
                                <h1 className='text-white text-[20px] md:text-[36px] lg:text-[40px] font-[600] lg:font-[700] leading-[28px] md:leading-[48px]'>শিখুন, নয়তো শেখান</h1>
                                <h1 className='text-[#FFFFFF] text-[14px] lg:text-[18px] font-[400] lg:font-[500] leading-[18px] lg:leading-[28px]'> ইশিখন.কম, ২০১৪ সালে প্রতিষ্ঠিত বাংলাদেশের সর্বাধুনিক শিক্ষা প্রযুক্তি প্রতিষ্ঠান। দেশজুড়ে সবার জন্য মানসম্মত পড়াশোনা নিশ্চিত করতে অভিজ্ঞ মেন্টর এবং অত্যাধুনিক প্রযুক্তির সাহায্যে আমরা গড়ে তুলেছি সহজে শেখার এবং সহজে জেতার এক নতুন দুনিয়া!</h1>
                            </div>
                            <div className='relative'>
                                <img src={about_us_video_cover} alt="" />
                                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                    <img src={video_play_icon} alt="" />
                                </div>
                            </div>
                        </div>
                    </Wrapper>
                </div>
                {/*  */}
                <Wrapper>
                    <div className='py-12'>
                        <div className='flex flex-col gap-6 md:gap-10 lg:gap-16'>
                            <div className='w-full lg:max-w-[1030px] mx-auto flex flex-col text-center gap-4'>
                                <h1 className='text-black text-[20px] md:text-[36px] lg:text-[40px] font-[600] lg:font-[700] leading-[28px] md:leading-[48px]'>আমাদের মাইলফলক</h1>
                                <h1 className='text_black text-[14px] lg:text-[18px] font-[400] lg:font-[500] leading-[18px] lg:leading-[28px]'>ইশিখন.কম ৯ বছর ধরে প্রায় ৫০ হাজারেরও বেশি শিক্ষার্থীকে অনলাইন এবং অফলাইন-এ  মানসম্মত আইটি প্রশিক্ষণ দেওয়ার পাশাপাশি তাদের কর্মসংস্থানের সুযোগ সৃষ্টি করেছে। এই অভূতপূর্ব সাফল্য অর্জনের জন্য এই প্রতিষ্ঠানের সম্মানিত প্রতিষ্ঠাতা এবং সি ই ও জনাব ইব্রাহিম আকবারকে বিভিন্ন সময়ে বিভিন্ন স্বনামধন্য প্রতিষ্ঠান সম্মাননা প্রদান করেছে।</h1>
                            </div>
                            <div className='w-full lg:max-w-[996px] mx-auto px-4 md:px-6 py-4 bg-white rounded-[16px] flex flex-col md:flex-row items-center gap-4 lg:gap-10'>
                                <div className=''>
                                    <img src={mile_folok} alt="" />
                                </div>
                                <div className='w-full lg:max-w-[650px] mb-0 lg:mb-14'>
                                    <h1 className='text_black_tow text-[14px] lg:text-[16px] font-[400] lg:font-[500] leading-[18px] lg:leading-[24px]'>"As someone who mainly designs in the browser, I've been a casual user of Figma, but as soon as I saw and started playing with FlowBite my mind was. Everything is so well structured and simple to use (I've learnt so much about Figma by just using the toolkit).</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </Wrapper>
                {/*  */}
                <div className='py-20 bg-white'>
                    <Wrapper>
                        <div className='w-full lg:max-w-[1030px] mx-auto flex flex-col gap-5 items-center'>
                            <div>
                                <h1 className='text-black text-[20px] md:text-[36px] lg:text-[40px] font-[600] lg:font-[700] leading-[28px] md:leading-[48px] text-center'>ইশিখন টিম</h1>
                            </div>
                            <div>
                                <h1 className=' text_black text-[14px] lg:text-[20px] font-[400] lg:font-[400] leading-[18px] lg:leading-[28px] text-center'><span className='font-[700]'>ইশিখন.কম</span> কে নেতৃত্ব দিচ্ছে প্রতিভাবান এবং দক্ষ একটি ডাইন্যামিক টিম। সবার জন্য মানসম্মত শিক্ষা সহজলভ্য করার লক্ষ্যে <span className='font-[700]'>ইশিখন.কম</span>র সাথে আছেন বিভিন্ন দেশি ও বহুজাতিক প্রতিষ্ঠানে কাজের অভিজ্ঞতাসম্পন্ন অসংখ্য স্বপ্নবাজ তরুণ।</h1>
                            </div>
                            <div>
                                <img src={Eshikon_team} alt="" />
                            </div>
                            <div className='p-4 w-full md:w-[754px] lg:w-[813px] bg-[#F5F5F5] rounded-[12px] border-2 border-[#53DFC3]'>
                                <div className='flex flex-col md:flex-row items-center gap-4 md:gap-10'>
                                    <div className='w-full '>
                                        <img src={ebrahim_2_card} alt="" />
                                        {/* <div className='w-[218px] h-[268px] bg-[#53DFC3] rounded-[10px] rotate-12'>
                                        </div>
                                        <div className='ebrahim_akbor_bg1 rounded-[10px] absolute top-0 '>
                                            <div className=''>
                                                <img className='' src={ibrahim_akbor} alt="" />
                                            </div>
                                        </div> */}
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <div>
                                            <h1 className=' text_black text-[14px] font-[400] leading-[18px] '>We provide Computer training to students for doing freelancing and IT jobs. Because of providing offline and online training, sometimes we face electricity and internet issues.</h1>
                                        </div>
                                        <div>
                                            <h1 className=' text-[#2872A4] text-[20px] font-[600] leading-[28px] '>ইব্রাহিম আকবর</h1>
                                            <h1 className=' text_black_tow text-[14px] font-[500] leading-[18px] '>চেয়রম্যান এবং সিইও, ইশিখন.কম</h1>
                                        </div>
                                        <div className='flex flex-col gap-2 '>
                                            <div className='flex flex-row gap-2 items-center'>
                                                <img src={fore_kon_star_icon} alt="" />
                                                <h1 className=' text_black_gray text-[14px] font-[500] leading-[14px] mt-1'>সফল  এন্টারপ্রেনিয়র</h1>
                                            </div>
                                            <div className='flex flex-row gap-2 items-center'>
                                                <img src={fore_kon_star_icon} alt="" />
                                                <h1 className=' text_black_gray text-[14px] font-[500] leading-[14px] mt-1'>সফল  এন্টারপ্রেনিয়র</h1>
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-5 '>
                                            <img src={fb_icon} alt="" />
                                            <img src={messenger_icon} alt="" />
                                            <img src={whatsapp_icon} alt="" />
                                            <img src={linkedin_icon} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  */}
                            <div className='w-full lg:max-w-[1096px] py-10  bg-[#F5F5F5] rounded-[10px] px-5 relative'>
                                <div className='mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 '>
                                    <div
                                        className="w-[186px] mx-auto bg-white rounded-[5px]">
                                        <div className=" h-16 overflow-hidden bg-[#F5F5F5]">
                                        </div>
                                        <div className="mx-auto w-24 h-24 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                                            <img className="object-cover object-center h-32" src={mentor} />
                                        </div>
                                        <div className="p-3 mt- text-center">
                                            <h1 className=' text-black text-[20px] font-[600] leading-[28px] '>ইব্রাহিম আকবর</h1>
                                            <h1 className=' text_black_tow text-[14px] font-[500] leading-[18px] '>ম্যানেজার</h1>
                                        </div>
                                    </div>
                                    <div
                                        className="w-[186px] mx-auto bg-white rounded-[5px]">
                                        <div className=" h-16 overflow-hidden bg-[#F5F5F5]">
                                        </div>
                                        <div className="mx-auto w-24 h-24 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                                            <img className="object-cover object-center h-32" src={mentor} />
                                        </div>
                                        <div className="p-3 mt- text-center">
                                            <h1 className=' text-black text-[20px] font-[600] leading-[28px] '>ইব্রাহিম আকবর</h1>
                                            <h1 className=' text_black_tow text-[14px] font-[500] leading-[18px] '>ম্যানেজার</h1>
                                        </div>
                                    </div>
                                    <div
                                        className="w-[186px] mx-auto bg-white rounded-[5px]">
                                        <div className=" h-16 overflow-hidden bg-[#F5F5F5]">
                                        </div>
                                        <div className="mx-auto w-24 h-24 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                                            <img className="object-cover object-center h-32" src={mentor} />
                                        </div>
                                        <div className="p-3 mt- text-center">
                                            <h1 className=' text-black text-[20px] font-[600] leading-[28px] '>ইব্রাহিম আকবর</h1>
                                            <h1 className=' text_black_tow text-[14px] font-[500] leading-[18px] '>ম্যানেজার</h1>
                                        </div>
                                    </div>
                                    <div
                                        className="w-[186px] mx-auto bg-white rounded-[5px]">
                                        <div className=" h-16 overflow-hidden bg-[#F5F5F5]">
                                        </div>
                                        <div className="mx-auto w-24 h-24 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                                            <img className="object-cover object-center h-32" src={mentor} />
                                        </div>
                                        <div className="p-3 mt- text-center">
                                            <h1 className=' text-black text-[20px] font-[600] leading-[28px] '>ইব্রাহিম আকবর</h1>
                                            <h1 className=' text_black_tow text-[14px] font-[500] leading-[18px] '>ম্যানেজার</h1>
                                        </div>
                                    </div>
                                    <div
                                        className="w-[186px] mx-auto bg-white rounded-[5px]">
                                        <div className=" h-16 overflow-hidden bg-[#F5F5F5]">
                                        </div>
                                        <div className="mx-auto w-24 h-24 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                                            <img className="object-cover object-center h-32" src={mentor} />
                                        </div>
                                        <div className="p-3 mt- text-center">
                                            <h1 className=' text-black text-[20px] font-[600] leading-[28px] '>ইব্রাহিম আকবর</h1>
                                            <h1 className=' text_black_tow text-[14px] font-[500] leading-[18px] '>ম্যানেজার</h1>
                                        </div>
                                    </div>
                                    <div
                                        className="w-[186px] mx-auto bg-white rounded-[5px]">
                                        <div className=" h-16 overflow-hidden bg-[#F5F5F5]">
                                        </div>
                                        <div className="mx-auto w-24 h-24 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                                            <img className="object-cover object-center h-32" src={mentor} />
                                        </div>
                                        <div className="p-3 mt- text-center">
                                            <h1 className=' text-black text-[20px] font-[600] leading-[28px] '>ইব্রাহিম আকবর</h1>
                                            <h1 className=' text_black_tow text-[14px] font-[500] leading-[18px] '>ম্যানেজার</h1>
                                        </div>
                                    </div>
                                    <div
                                        className="w-[186px] mx-auto bg-white rounded-[5px]">
                                        <div className=" h-16 overflow-hidden bg-[#F5F5F5]">
                                        </div>
                                        <div className="mx-auto w-24 h-24 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                                            <img className="object-cover object-center h-32" src={mentor} />
                                        </div>
                                        <div className="p-3 mt- text-center">
                                            <h1 className=' text-black text-[20px] font-[600] leading-[28px] '>ইব্রাহিম আকবর</h1>
                                            <h1 className=' text_black_tow text-[14px] font-[500] leading-[18px] '>ম্যানেজার</h1>
                                        </div>
                                    </div>
                                    <div
                                        className="w-[186px] mx-auto bg-white rounded-[5px]">
                                        <div className=" h-16 overflow-hidden bg-[#F5F5F5]">
                                        </div>
                                        <div className="mx-auto w-24 h-24 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                                            <img className="object-cover object-center h-32" src={mentor} />
                                        </div>
                                        <div className="p-3 mt- text-center">
                                            <h1 className=' text-black text-[20px] font-[600] leading-[28px] '>ইব্রাহিম আকবর</h1>
                                            <h1 className=' text_black_tow text-[14px] font-[500] leading-[18px] '>ম্যানেজার</h1>
                                        </div>
                                    </div>
                                    <div
                                        className="w-[186px] mx-auto bg-white rounded-[5px]">
                                        <div className=" h-16 overflow-hidden bg-[#F5F5F5]">
                                        </div>
                                        <div className="mx-auto w-24 h-24 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                                            <img className="object-cover object-center h-32" src={mentor} />
                                        </div>
                                        <div className="p-3 mt- text-center">
                                            <h1 className=' text-black text-[20px] font-[600] leading-[28px] '>ইব্রাহিম আকবর</h1>
                                            <h1 className=' text_black_tow text-[14px] font-[500] leading-[18px] '>ম্যানেজার</h1>
                                        </div>
                                    </div>
                                    <div
                                        className="w-[186px] mx-auto bg-white rounded-[5px]">
                                        <div className=" h-16 overflow-hidden bg-[#F5F5F5]">
                                        </div>
                                        <div className="mx-auto w-24 h-24 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                                            <img className="object-cover object-center h-32" src={mentor} />
                                        </div>
                                        <div className="p-3 mt- text-center">
                                            <h1 className=' text-black text-[20px] font-[600] leading-[28px] '>ইব্রাহিম আকবর</h1>
                                            <h1 className=' text_black_tow text-[14px] font-[500] leading-[18px] '>ম্যানেজার</h1>
                                        </div>
                                    </div>

                                    <div className='absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 -bottom-7 '>
                                        <button className=' py-1.5 px-3 bg-white rounded-[50px] flex flex-row items-center text_black_gray text-[14px] font-[500] leading-[21px] justify-center gap-3 drop-shadow-xl'>
                                            সব দেখুন
                                            <img src={down_arrow_icon} alt="" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Wrapper>
                </div>
                {/*  */}
                <div className='designation_bg w-full bg-center '>
                    <Wrapper>
                        <div className='py-10 md:py-24 '>
                            <div className='w-full lg:max-w-[818px] p-2 md:p-4 lg:p-10 bg-[#F1F2F3] rounded-[20px] mx-auto'>
                                <div className='flex flex-col md:flex-row gap-3 md:gap-5 relative'>
                                    <div className='w-full md:max-w-[178px] flex flex-row md:flex-col gap-2.5 overflow-auto'>
                                        <button className='w-full py-5 px-8 bg-white rounded-[5px] flex flex-row items-center text-[#20AC90] text-[20px] font-[500] leading-[18px] gap-2.5 border-s-2 border-[#20AC90] justify-center'>
                                            <img src={target_icon} alt="" />
                                            উদ্দেশ্য
                                        </button>
                                        <button className='w-full py-5 px-8 bg-white rounded-[5px] flex flex-row items-center text_black text-[20px] font-[500] leading-[18px] gap-2.5 justify-center'>
                                            <img src={target_icon} alt="" />
                                            লক্ষ্য
                                        </button>
                                        <button className='w-full py-5 px-8 bg-white rounded-[5px] flex flex-row items-center text_black text-[20px] font-[500] leading-[18px] gap-2.5 justify-center'>
                                            <img src={target_icon} alt="" />
                                            হিস্টোরি
                                        </button>
                                        <button className='w-full py-5 px-8 bg-white rounded-[5px] flex flex-row items-center text_black text-[20px] font-[500] leading-[18px] gap-2.5 justify-center'>
                                            <img src={target_icon} alt="" />
                                            ভ্যালু
                                        </button>
                                    </div>
                                    <div className='w-full p-3 md:p-10 bg-white rounded-[10px]'>
                                        <h1 className='text_black text-[20px] md:text-[28px] font-[600] leading-[28px] md:leading-[48px]'>উদ্দেশ্য</h1>
                                        <h1 className='text_black text-[14px] lg:text-[18px] font-[400] lg:font-[500] leading-[18px] lg:leading-[28px]'>যুবশক্তিকে কাজে লাগিয়ে অত্যাধুনিক ও মানসম্পন্ন প্রশিক্ষণ পদ্ধতি নিশ্চিত করে দেশের মানুষকে ক্ষমতায়ন করা।</h1>
                                    </div>
                                    <div className='hidden md:block absolute right-4 bottom-0'>
                                        <img src={target_bottom} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Wrapper>
                </div>
                {/*  */}
                <div className='bg-white py-20'>
                    <Wrapper>
                        <div className='flex flex-col items-center gap-6 '>
                            <div>
                                <h1 className='text-black text-[20px] md:text-[36px] lg:text-[40px] font-[600] lg:font-[700] leading-[28px] md:leading-[48px] text-center'>অফিস এবং প্রশিক্ষণের স্থান</h1>
                            </div>
                            <div>
                                <img src={office_institute} alt="" />
                            </div>
                            <div className='flex flex-row gap-6 overflow-auto'>
                                <img src={institute_1} alt="" />
                                <img src={institute_2} alt="" />
                                <img src={institute_3} alt="" />
                                <img src={institute_4} alt="" />
                                <img src={institute_5} alt="" />
                                <img src={institute_6} alt="" />
                                <img src={institute_7} alt="" />
                            </div>
                        </div>
                    </Wrapper>
                </div>
            </div>

            <WeAreMembers />
        </>
    );
};

export default AboutUs;