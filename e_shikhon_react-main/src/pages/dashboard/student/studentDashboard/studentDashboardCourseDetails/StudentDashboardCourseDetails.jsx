import React from 'react';
import gray_certificate from '../../../../../assets/images/gray_certificate.png'
import lock_closed_white from "../../../../../assets/svg/lock-closed_white.svg"
import class_room from '../../../../../assets/images/class_room.png'
import mentor_icon from '../../../../../assets/images/mentor-icon.png'
import down_arrow from "../../../../../assets/svg/down_arrow.svg"
import live_icon_small from "../../../../../assets/svg/live_icon_small.svg"
import file_icon_small from "../../../../../assets/svg/file-document-edit-outline.svg"
import file_multiple_icon_small from "../../../../../assets/svg/file-document-multiple-outline.svg"
import small_green_tick from "../../../../../assets/svg/small_green_tick.svg"
import small_gary_stopwatch from "../../../../../assets/svg/small_gary_stopwatch.svg"
import mentor_2 from '../../../../../assets/images/mentor (2).png'
import mentor_3 from '../../../../../assets/images/abdurrahman_post_photo.png'
import star_yellow from "../../../../../assets/svg/star_yellow.svg"
import fb_icon from "../../../../../assets/svg/fb-color.svg"
import messenger_icon from "../../../../../assets/svg/fb_messenger.svg"
import whatsapp_icon from "../../../../../assets/svg/whatsapp.svg"
import linkedin_icon from "../../../../../assets/svg/lindein-color.svg"
import github_icon from "../../../../../assets/svg/gitHub_coloer.svg"

const StudentDashboardCourseDetails = () => {
    return (
        <>
            <div className='w-full max-w-[1015px] mx-auto px-[13px]'>

                <div>
                    <div className='border-b-2 border-[#C7CAD1]'>
                        <h1 className='text-[36px] font-[600] text-[#464A53] leading-[40px] mb-2'>
                            সোস্যাল মিডিয়া মার্কেটিং লাইভ কোর্স
                        </h1>
                    </div>

                    <div className='p-2 bg-white mt-4 rounded-[10px] flex flex-row justify-between'>
                        <div>
                            <h1 className='text-[24px] font-[600] text-[#464A53] leading-[32px] mb-2'>
                                কোর্স প্রোগ্রেস
                            </h1>
                            <h1 className='text-[16px] font-[500] text-[#464A53] leading-[28px] mb-2'>
                                আপনি কোর্সটি 40% কমপ্লিট করেছেন
                            </h1>
                            {/*  */}
                            <div className='pt-5'>
                                <span
                                    role="progressbar"
                                    aria-labelledby="ProgressLabel"
                                    aria-valuenow="50"
                                    className="block rounded-full bg-[#E3E5E8] md:w-[551px] lg:w-[750px]"
                                >
                                    <span className="w-[110px] md:w-[210px] lg:w-[286px] block h-4 rounded-full bg-[#20AC90] text-center text-[10px]/4 " >
                                        <span className="font-bold text-white"> 40% </span>
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className='relative'>
                            <img src={gray_certificate} alt="" />
                            <img className='absolute left-[77px] bottom-12' src={lock_closed_white} alt="" />
                        </div>
                    </div>
                </div>

                {/*  */}

                <div className='w-full lg:max-w-[763px] pt-6'>
                    <div>
                        <div className='flex  flex-row gap-2'>
                            <div className='mt-2'>
                                <img src={class_room} alt="" />
                            </div>
                            <h1 className='text-[24px] font-[600] text-[#2E3138]  mb-2'>ক্লাস কারিকুলাম</h1>
                        </div>
                    </div>

                    {/*  */}
                    <div className='flex flex-col gap-2.5 pb-5'>
                        <section className="w-full rounded-[5px] border border-[#C7CAD1] bg-white">
                            <details className="group ">
                                <summary className="p-2.5 relative flex cursor-pointer list-none gap-4 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden justify-between items-center">
                                    <div className='flex flex-row gap-2.5 md:gap-[30px]'>
                                        <div className='hidden py-2.5 px-3 md:flex flex-col items-center second_bg_color rounded-[5px]'>
                                            <h1 className='text-white text-[20] font-[600]
                         leading-[22px]'>Class</h1>
                                            <h1 className='text-white text-[20] font-[600] leading-[20px]'>1</h1>
                                        </div>
                                        <div>
                                            <div className='flex flex-row gap-2.5'>
                                                <div className='md:hidden mb-3 py-1.5 px-2.5 flex flex-col items-center second_bg_color rounded-[5px]'>
                                                    <h1 className='text-white text-[20] font-[600]
                         leading-[22px]'>Class 1</h1>

                                                </div>
                                                <h1 className='text-[24px] font-[600] text-[#2E3138]'>Introduction</h1>
                                            </div>
                                            <div className='flex flex-row items-center gap-2.5 md:gap-5'>
                                                <div className='flex flex-row items-center gap-1'>
                                                    <img className='mb-1' src={live_icon_small} alt="" />
                                                    <h1 className='text-[14px] font-[400] text_black_gray leading-[10px]'>২ টি লাইভ ক্লাস</h1>
                                                </div>
                                                <div className='flex flex-row items-center gap-1'>
                                                    <img className='mb-1' src={file_icon_small} alt="" />
                                                    <h1 className='text-[14px] font-[400] text_black_gray leading-[10px]'>১ টি এসাইনমেন্ট</h1>
                                                </div>
                                                <div className='flex flex-row items-center gap-1'>
                                                    <img className='mb-1' src={file_multiple_icon_small} alt="" />
                                                    <h1 className='text-[14px] font-[400] text_black_gray leading-[10px]'>২ টি টেস্ট</h1>
                                                </div>

                                            </div>

                                        </div>
                                    </div>


                                    <div>
                                        <img src={down_arrow} alt="" />
                                    </div>

                                </summary>
                                {/*  */}
                                <div className=' flex flex-col'>
                                    <div className='px-2.5 py-3 border-t-2 flex flex-row justify-between items-center'>
                                        <div>
                                            <div className='flex flex-row items-center gap-5'>
                                                <h1 className='text-[16px] text-black font-[600] leading-[22px]'>১ম দিন</h1>
                                                <button className='p-2.5 bg-[#C7CAD1] rounded-[50px] text-[14px] text-black font-[400] leading-[10px]'>
                                                    কুইজ টেষ্ট
                                                </button>
                                            </div>
                                            <div className='flex flex-row items-center gap-2 mt-2'>
                                                <img src={small_green_tick} alt="" />
                                                <h1 className='text-[16px] text-black font-[600] leading-[22px]'>Introduction to U/UX Design</h1>
                                            </div>
                                        </div>
                                        <div className='flex flex-row items-center gap-2'>
                                            <img src={small_gary_stopwatch} alt="" />
                                            <h1 className='text-[14px] font-[400] text_black_gray leading-[10px]'>00:00:00</h1>
                                        </div>
                                    </div>
                                    <div className='px-2.5 py-3 border-t-2 flex flex-row justify-between items-center'>
                                        <div>
                                            <div className='flex flex-row items-center gap-5'>
                                                <h1 className='text-[16px] text-black font-[600] leading-[22px]'>২য় দিন</h1>
                                                <button className='p-2.5 bg-[#C7CAD1] rounded-[50px] text-[14px] text-black font-[400] leading-[10px]'>
                                                    কুইজ টেষ্ট
                                                </button>
                                            </div>
                                            <div className='flex flex-row items-center gap-2 mt-2'>
                                                <img src={small_green_tick} alt="" />
                                                <h1 className='text-[16px] text-black font-[600] leading-[22px]'>Introduction to U/UX Design</h1>
                                            </div>
                                        </div>
                                        <div className='flex flex-row items-center gap-2'>
                                            <img src={small_gary_stopwatch} alt="" />
                                            <h1 className='text-[14px] font-[400] text_black_gray leading-[10px]'>00:00:00</h1>
                                        </div>
                                    </div>
                                    <div className='px-2.5 py-3 border-t-2 flex flex-row justify-between items-center'>
                                        <div>
                                            <div className='flex flex-row items-center gap-5'>
                                                <h1 className='text-[16px] text-black font-[600] leading-[22px]'>৩য় দিন</h1>
                                                <button className='p-2.5 bg-[#C7CAD1] rounded-[50px] text-[14px] text-black font-[400] leading-[10px]'>
                                                    ফাইনাল টেস্ট
                                                </button>
                                            </div>
                                            <div className='flex flex-row items-center gap-2 mt-2'>
                                                <img src={small_green_tick} alt="" />
                                                <h1 className='text-[16px] text-black font-[600] leading-[22px]'>Introduction to U/UX Design</h1>
                                            </div>
                                        </div>
                                        <div className='flex flex-row items-center gap-2'>
                                            <img src={small_gary_stopwatch} alt="" />
                                            <h1 className='text-[14px] font-[400] text_black_gray leading-[10px]'>00:00:00</h1>
                                        </div>
                                    </div>

                                </div>
                            </details>
                        </section>

                        <section className="w-full rounded-[5px] border border-[#C7CAD1] bg-white">
                            <details className="group ">
                                <summary className="p-2.5 relative flex cursor-pointer list-none gap-4 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden justify-between items-center">
                                    <div className='flex flex-row gap-2.5 md:gap-[30px]'>
                                        <div className='hidden py-2.5 px-3 md:flex flex-col items-center second_bg_color rounded-[5px]'>
                                            <h1 className='text-white text-[20] font-[600]
                         leading-[22px]'>Class</h1>
                                            <h1 className='text-white text-[20] font-[600] leading-[20px]'>2</h1>
                                        </div>
                                        <div>
                                            <div className='flex flex-row gap-2.5'>
                                                <div className='md:hidden mb-3 py-1.5 px-2.5 flex flex-col items-center second_bg_color rounded-[5px]'>
                                                    <h1 className='text-white text-[20] font-[600]
                         leading-[22px]'>Class 2</h1>

                                                </div>
                                                <h1 className='text-[24px] font-[600] text-[#2E3138]'>Fundamental of UX</h1>
                                            </div>
                                            <div className='flex flex-row items-center gap-2.5 md:gap-5'>
                                                <div className='flex flex-row items-center gap-1'>
                                                    <img className='mb-1' src={live_icon_small} alt="" />
                                                    <h1 className='text-[14px] font-[400] text_black_gray leading-[10px]'>২ টি লাইভ ক্লাস</h1>
                                                </div>
                                                <div className='flex flex-row items-center gap-1'>
                                                    <img className='mb-1' src={file_icon_small} alt="" />
                                                    <h1 className='text-[14px] font-[400] text_black_gray leading-[10px]'>১ টি এসাইনমেন্ট</h1>
                                                </div>
                                                <div className='flex flex-row items-center gap-1'>
                                                    <img className='mb-1' src={file_multiple_icon_small} alt="" />
                                                    <h1 className='text-[14px] font-[400] text_black_gray leading-[10px]'>২ টি টেস্ট</h1>
                                                </div>

                                            </div>

                                        </div>
                                    </div>


                                    <div>
                                        <img src={down_arrow} alt="" />
                                    </div>

                                </summary>
                                {/*  */}
                                <div className=' flex flex-col'>
                                    <div className='px-2.5 py-3 border-t-2 flex flex-row justify-between items-center'>
                                        <div>
                                            <div className='flex flex-row items-center gap-5'>
                                                <h1 className='text-[16px] text-black font-[600] leading-[22px]'>১ম দিন</h1>
                                                <button className='p-2.5 bg-[#C7CAD1] rounded-[50px] text-[14px] text-black font-[400] leading-[10px]'>
                                                    কুইজ টেষ্ট
                                                </button>
                                            </div>
                                            <div className='flex flex-row items-center gap-2 mt-2'>
                                                <img src={small_green_tick} alt="" />
                                                <h1 className='text-[16px] text-black font-[600] leading-[22px]'>Introduction to U/UX Design</h1>
                                            </div>
                                        </div>
                                        <div className='flex flex-row items-center gap-2'>
                                            <img src={small_gary_stopwatch} alt="" />
                                            <h1 className='text-[14px] font-[400] text_black_gray leading-[10px]'>00:00:00</h1>
                                        </div>
                                    </div>
                                    <div className='px-2.5 py-3 border-t-2 flex flex-row justify-between items-center'>
                                        <div>
                                            <div className='flex flex-row items-center gap-5'>
                                                <h1 className='text-[16px] text-black font-[600] leading-[22px]'>২য় দিন</h1>
                                                <button className='p-2.5 bg-[#C7CAD1] rounded-[50px] text-[14px] text-black font-[400] leading-[10px]'>
                                                    কুইজ টেষ্ট
                                                </button>
                                            </div>
                                            <div className='flex flex-row items-center gap-2 mt-2'>
                                                <img src={small_green_tick} alt="" />
                                                <h1 className='text-[16px] text-black font-[600] leading-[22px]'>Introduction to U/UX Design</h1>
                                            </div>
                                        </div>
                                        <div className='flex flex-row items-center gap-2'>
                                            <img src={small_gary_stopwatch} alt="" />
                                            <h1 className='text-[14px] font-[400] text_black_gray leading-[10px]'>00:00:00</h1>
                                        </div>
                                    </div>
                                    <div className='px-2.5 py-3 border-t-2 flex flex-row justify-between items-center'>
                                        <div>
                                            <div className='flex flex-row items-center gap-5'>
                                                <h1 className='text-[16px] text-black font-[600] leading-[22px]'>৩য় দিন</h1>
                                                <button className='p-2.5 bg-[#C7CAD1] rounded-[50px] text-[14px] text-black font-[400] leading-[10px]'>
                                                    ফাইনাল টেস্ট
                                                </button>
                                            </div>
                                            <div className='flex flex-row items-center gap-2 mt-2'>
                                                <img src={small_green_tick} alt="" />
                                                <h1 className='text-[16px] text-black font-[600] leading-[22px]'>Introduction to U/UX Design</h1>
                                            </div>
                                        </div>
                                        <div className='flex flex-row items-center gap-2'>
                                            <img src={small_gary_stopwatch} alt="" />
                                            <h1 className='text-[14px] font-[400] text_black_gray leading-[10px]'>00:00:00</h1>
                                        </div>
                                    </div>

                                </div>
                            </details>
                        </section>

                        <section className="w-full rounded-[5px] border border-[#C7CAD1] bg-white">
                            <details className="group ">
                                <summary className="p-2.5 relative flex cursor-pointer list-none gap-4 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden justify-between items-center">
                                    <div className='flex flex-row gap-2.5 md:gap-[30px]'>
                                        <div className='hidden py-2.5 px-3 md:flex flex-col items-center second_bg_color rounded-[5px]'>
                                            <h1 className='text-white text-[20] font-[600]
                         leading-[22px]'>Class</h1>
                                            <h1 className='text-white text-[20] font-[600] leading-[20px]'>3</h1>
                                        </div>
                                        <div>
                                            <div className='flex flex-row gap-2.5'>
                                                <div className='md:hidden mb-3 py-1.5 px-2.5 flex flex-col items-center second_bg_color rounded-[5px]'>
                                                    <h1 className='text-white text-[20] font-[600]
                         leading-[22px]'>Class 3</h1>

                                                </div>
                                                <h1 className='text-[24px] font-[600] text-[#2E3138]'>Introduction</h1>
                                            </div>
                                            <div className='flex flex-row items-center gap-2.5 md:gap-5'>
                                                <div className='flex flex-row items-center gap-1'>
                                                    <img className='mb-1' src={live_icon_small} alt="" />
                                                    <h1 className='text-[14px] font-[400] text_black_gray leading-[10px]'>২ টি লাইভ ক্লাস</h1>
                                                </div>
                                                <div className='flex flex-row items-center gap-1'>
                                                    <img className='mb-1' src={file_icon_small} alt="" />
                                                    <h1 className='text-[14px] font-[400] text_black_gray leading-[10px]'>১ টি এসাইনমেন্ট</h1>
                                                </div>
                                                <div className='flex flex-row items-center gap-1'>
                                                    <img className='mb-1' src={file_multiple_icon_small} alt="" />
                                                    <h1 className='text-[14px] font-[400] text_black_gray leading-[10px]'>২ টি টেস্ট</h1>
                                                </div>

                                            </div>

                                        </div>
                                    </div>


                                    <div>
                                        <img src={down_arrow} alt="" />
                                    </div>

                                </summary>
                                {/*  */}
                                <div className=' flex flex-col'>
                                    <div className='px-2.5 py-3 border-t-2 flex flex-row justify-between items-center'>
                                        <div>
                                            <div className='flex flex-row items-center gap-5'>
                                                <h1 className='text-[16px] text-black font-[600] leading-[22px]'>১ম দিন</h1>
                                                <button className='p-2.5 bg-[#C7CAD1] rounded-[50px] text-[14px] text-black font-[400] leading-[10px]'>
                                                    কুইজ টেষ্ট
                                                </button>
                                            </div>
                                            <div className='flex flex-row items-center gap-2 mt-2'>
                                                <img src={small_green_tick} alt="" />
                                                <h1 className='text-[16px] text-black font-[600] leading-[22px]'>Introduction to U/UX Design</h1>
                                            </div>
                                        </div>
                                        <div className='flex flex-row items-center gap-2'>
                                            <img src={small_gary_stopwatch} alt="" />
                                            <h1 className='text-[14px] font-[400] text_black_gray leading-[10px]'>00:00:00</h1>
                                        </div>
                                    </div>
                                    <div className='px-2.5 py-3 border-t-2 flex flex-row justify-between items-center'>
                                        <div>
                                            <div className='flex flex-row items-center gap-5'>
                                                <h1 className='text-[16px] text-black font-[600] leading-[22px]'>২য় দিন</h1>
                                                <button className='p-2.5 bg-[#C7CAD1] rounded-[50px] text-[14px] text-black font-[400] leading-[10px]'>
                                                    কুইজ টেষ্ট
                                                </button>
                                            </div>
                                            <div className='flex flex-row items-center gap-2 mt-2'>
                                                <img src={small_green_tick} alt="" />
                                                <h1 className='text-[16px] text-black font-[600] leading-[22px]'>Introduction to U/UX Design</h1>
                                            </div>
                                        </div>
                                        <div className='flex flex-row items-center gap-2'>
                                            <img src={small_gary_stopwatch} alt="" />
                                            <h1 className='text-[14px] font-[400] text_black_gray leading-[10px]'>00:00:00</h1>
                                        </div>
                                    </div>
                                    <div className='px-2.5 py-3 border-t-2 flex flex-row justify-between items-center'>
                                        <div>
                                            <div className='flex flex-row items-center gap-5'>
                                                <h1 className='text-[16px] text-black font-[600] leading-[22px]'>৩য় দিন</h1>
                                                <button className='p-2.5 bg-[#C7CAD1] rounded-[50px] text-[14px] text-black font-[400] leading-[10px]'>
                                                    ফাইনাল টেস্ট
                                                </button>
                                            </div>
                                            <div className='flex flex-row items-center gap-2 mt-2'>
                                                <img src={small_green_tick} alt="" />
                                                <h1 className='text-[16px] text-black font-[600] leading-[22px]'>Introduction to U/UX Design</h1>
                                            </div>
                                        </div>
                                        <div className='flex flex-row items-center gap-2'>
                                            <img src={small_gary_stopwatch} alt="" />
                                            <h1 className='text-[14px] font-[400] text_black_gray leading-[10px]'>00:00:00</h1>
                                        </div>
                                    </div>

                                </div>
                            </details>
                        </section>

                        <section className="w-full rounded-[5px] border border-[#C7CAD1] bg-white">
                            <details className="group ">
                                <summary className="p-2.5 relative flex cursor-pointer list-none gap-4 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden justify-between items-center">
                                    <div className='flex flex-row gap-2.5 md:gap-[30px]'>
                                        <div className='hidden py-2.5 px-3 md:flex flex-col items-center second_bg_color rounded-[5px]'>
                                            <h1 className='text-white text-[20] font-[600]
                         leading-[22px]'>Class</h1>
                                            <h1 className='text-white text-[20] font-[600] leading-[20px]'>4</h1>
                                        </div>
                                        <div>
                                            <div className='flex flex-row gap-2.5'>
                                                <div className='md:hidden mb-3 py-1.5 px-2.5 flex flex-col items-center second_bg_color rounded-[5px]'>
                                                    <h1 className='text-white text-[20] font-[600]
                         leading-[22px]'>Class 4</h1>

                                                </div>
                                                <h1 className='text-[24px] font-[600] text-[#2E3138]'>Fundamental of UX</h1>
                                            </div>
                                            <div className='flex flex-row items-center gap-2.5 md:gap-5'>
                                                <div className='flex flex-row items-center gap-1'>
                                                    <img className='mb-1' src={live_icon_small} alt="" />
                                                    <h1 className='text-[14px] font-[400] text_black_gray leading-[10px]'>২ টি লাইভ ক্লাস</h1>
                                                </div>
                                                <div className='flex flex-row items-center gap-1'>
                                                    <img className='mb-1' src={file_icon_small} alt="" />
                                                    <h1 className='text-[14px] font-[400] text_black_gray leading-[10px]'>১ টি এসাইনমেন্ট</h1>
                                                </div>
                                                <div className='flex flex-row items-center gap-1'>
                                                    <img className='mb-1' src={file_multiple_icon_small} alt="" />
                                                    <h1 className='text-[14px] font-[400] text_black_gray leading-[10px]'>২ টি টেস্ট</h1>
                                                </div>

                                            </div>

                                        </div>
                                    </div>


                                    <div>
                                        <img src={down_arrow} alt="" />
                                    </div>

                                </summary>
                                {/*  */}
                                <div className=' flex flex-col'>
                                    <div className='px-2.5 py-3 border-t-2 flex flex-row justify-between items-center'>
                                        <div>
                                            <div className='flex flex-row items-center gap-5'>
                                                <h1 className='text-[16px] text-black font-[600] leading-[22px]'>১ম দিন</h1>
                                                <button className='p-2.5 bg-[#C7CAD1] rounded-[50px] text-[14px] text-black font-[400] leading-[10px]'>
                                                    কুইজ টেষ্ট
                                                </button>
                                            </div>
                                            <div className='flex flex-row items-center gap-2 mt-2'>
                                                <img src={small_green_tick} alt="" />
                                                <h1 className='text-[16px] text-black font-[600] leading-[22px]'>Introduction to U/UX Design</h1>
                                            </div>
                                        </div>
                                        <div className='flex flex-row items-center gap-2'>
                                            <img src={small_gary_stopwatch} alt="" />
                                            <h1 className='text-[14px] font-[400] text_black_gray leading-[10px]'>00:00:00</h1>
                                        </div>
                                    </div>
                                    <div className='px-2.5 py-3 border-t-2 flex flex-row justify-between items-center'>
                                        <div>
                                            <div className='flex flex-row items-center gap-5'>
                                                <h1 className='text-[16px] text-black font-[600] leading-[22px]'>২য় দিন</h1>
                                                <button className='p-2.5 bg-[#C7CAD1] rounded-[50px] text-[14px] text-black font-[400] leading-[10px]'>
                                                    কুইজ টেষ্ট
                                                </button>
                                            </div>
                                            <div className='flex flex-row items-center gap-2 mt-2'>
                                                <img src={small_green_tick} alt="" />
                                                <h1 className='text-[16px] text-black font-[600] leading-[22px]'>Introduction to U/UX Design</h1>
                                            </div>
                                        </div>
                                        <div className='flex flex-row items-center gap-2'>
                                            <img src={small_gary_stopwatch} alt="" />
                                            <h1 className='text-[14px] font-[400] text_black_gray leading-[10px]'>00:00:00</h1>
                                        </div>
                                    </div>
                                    <div className='px-2.5 py-3 border-t-2 flex flex-row justify-between items-center'>
                                        <div>
                                            <div className='flex flex-row items-center gap-5'>
                                                <h1 className='text-[16px] text-black font-[600] leading-[22px]'>৩য় দিন</h1>
                                                <button className='p-2.5 bg-[#C7CAD1] rounded-[50px] text-[14px] text-black font-[400] leading-[10px]'>
                                                    ফাইনাল টেস্ট
                                                </button>
                                            </div>
                                            <div className='flex flex-row items-center gap-2 mt-2'>
                                                <img src={small_green_tick} alt="" />
                                                <h1 className='text-[16px] text-black font-[600] leading-[22px]'>Introduction to U/UX Design</h1>
                                            </div>
                                        </div>
                                        <div className='flex flex-row items-center gap-2'>
                                            <img src={small_gary_stopwatch} alt="" />
                                            <h1 className='text-[14px] font-[400] text_black_gray leading-[10px]'>00:00:00</h1>
                                        </div>
                                    </div>

                                </div>
                            </details>
                        </section>

                        <section className="w-full rounded-[5px] border border-[#C7CAD1] bg-white">
                            <details className="group ">
                                <summary className="p-2.5 relative flex cursor-pointer list-none gap-4 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden justify-between items-center">
                                    <div className='flex flex-row gap-2.5 md:gap-[30px]'>
                                        <div className='hidden py-2.5 px-3 md:flex flex-col items-center second_bg_color rounded-[5px]'>
                                            <h1 className='text-white text-[20] font-[600]
                         leading-[22px]'>Class</h1>
                                            <h1 className='text-white text-[20] font-[600] leading-[20px]'>5</h1>
                                        </div>
                                        <div>
                                            <div className='flex flex-row gap-2.5'>
                                                <div className='md:hidden mb-3 py-1.5 px-2.5 flex flex-col items-center second_bg_color rounded-[5px]'>
                                                    <h1 className='text-white text-[20] font-[600]
                         leading-[22px]'>Class 5</h1>

                                                </div>
                                                <h1 className='text-[24px] font-[600] text-[#2E3138]'>Fundamental of UX</h1>
                                            </div>
                                            <div className='flex flex-row items-center gap-2.5 md:gap-5'>
                                                <div className='flex flex-row items-center gap-1'>
                                                    <img className='mb-1' src={live_icon_small} alt="" />
                                                    <h1 className='text-[14px] font-[400] text_black_gray leading-[10px]'>২ টি লাইভ ক্লাস</h1>
                                                </div>
                                                <div className='flex flex-row items-center gap-1'>
                                                    <img className='mb-1' src={file_icon_small} alt="" />
                                                    <h1 className='text-[14px] font-[400] text_black_gray leading-[10px]'>১ টি এসাইনমেন্ট</h1>
                                                </div>
                                                <div className='flex flex-row items-center gap-1'>
                                                    <img className='mb-1' src={file_multiple_icon_small} alt="" />
                                                    <h1 className='text-[14px] font-[400] text_black_gray leading-[10px]'>২ টি টেস্ট</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <img src={down_arrow} alt="" />
                                    </div>
                                </summary>
                                {/*  */}
                                <div className=' flex flex-col'>
                                    <div className='px-2.5 py-3 border-t-2 flex flex-row justify-between items-center'>
                                        <div>
                                            <div className='flex flex-row items-center gap-5'>
                                                <h1 className='text-[16px] text-black font-[600] leading-[22px]'>১ম দিন</h1>
                                                <button className='p-2.5 bg-[#C7CAD1] rounded-[50px] text-[14px] text-black font-[400] leading-[10px]'>
                                                    কুইজ টেষ্ট
                                                </button>
                                            </div>
                                            <div className='flex flex-row items-center gap-2 mt-2'>
                                                <img src={small_green_tick} alt="" />
                                                <h1 className='text-[16px] text-black font-[600] leading-[22px]'>Introduction to U/UX Design</h1>
                                            </div>
                                        </div>
                                        <div className='flex flex-row items-center gap-2'>
                                            <img src={small_gary_stopwatch} alt="" />
                                            <h1 className='text-[14px] font-[400] text_black_gray leading-[10px]'>00:00:00</h1>
                                        </div>
                                    </div>
                                    <div className='px-2.5 py-3 border-t-2 flex flex-row justify-between items-center'>
                                        <div>
                                            <div className='flex flex-row items-center gap-5'>
                                                <h1 className='text-[16px] text-black font-[600] leading-[22px]'>২য় দিন</h1>
                                                <button className='p-2.5 bg-[#C7CAD1] rounded-[50px] text-[14px] text-black font-[400] leading-[10px]'>
                                                    কুইজ টেষ্ট
                                                </button>
                                            </div>
                                            <div className='flex flex-row items-center gap-2 mt-2'>
                                                <img src={small_green_tick} alt="" />
                                                <h1 className='text-[16px] text-black font-[600] leading-[22px]'>Introduction to U/UX Design</h1>
                                            </div>
                                        </div>
                                        <div className='flex flex-row items-center gap-2'>
                                            <img src={small_gary_stopwatch} alt="" />
                                            <h1 className='text-[14px] font-[400] text_black_gray leading-[10px]'>00:00:00</h1>
                                        </div>
                                    </div>
                                    <div className='px-2.5 py-3 border-t-2 flex flex-row justify-between items-center'>
                                        <div>
                                            <div className='flex flex-row items-center gap-5'>
                                                <h1 className='text-[16px] text-black font-[600] leading-[22px]'>৩য় দিন</h1>
                                                <button className='p-2.5 bg-[#C7CAD1] rounded-[50px] text-[14px] text-black font-[400] leading-[10px]'>
                                                    ফাইনাল টেস্ট
                                                </button>
                                            </div>
                                            <div className='flex flex-row items-center gap-2 mt-2'>
                                                <img src={small_green_tick} alt="" />
                                                <h1 className='text-[16px] text-black font-[600] leading-[22px]'>Introduction to U/UX Design</h1>
                                            </div>
                                        </div>
                                        <div className='flex flex-row items-center gap-2'>
                                            <img src={small_gary_stopwatch} alt="" />
                                            <h1 className='text-[14px] font-[400] text_black_gray leading-[10px]'>00:00:00</h1>
                                        </div>
                                    </div>
                                </div>
                            </details>
                        </section>
                    </div>
                    {/*  */}
                    <div>
                        <div className='ps-5 flex flex-row gap-2 border-b border-[#E3E5E8]'>
                            <div className='mt-1 '>
                                <img className='w-6' src={mentor_icon} alt="" />
                            </div>
                            <h1 className='text-[20px] font-[600] text-[#2E3138]  mb-2'>কোর্স ইন্সট্রাক্টর</h1>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-2.5 py-2.5'>
                            <div className='p-2.5 bg-white flex flex-col gap-2.5 rounded-[10px]'>
                                <div className='flex flex-row items-center gap-2.5'>
                                    <div className=''>
                                        <img className='rounded-s-[10px] rounded-e-[5px]' src={mentor_3} alt="" />
                                    </div>
                                    <div>
                                        <div className='flex flex-row items-center gap-2.5'>
                                            <h1 className='text-[#2E3138] text-[20px] font-[600] leading-[21px]'>Md. Al Amin</h1>
                                            <div className='flex items-center gap-1'>
                                                <img src={star_yellow} alt="" />
                                                <h1 className='text_black_gray text-[14px] font-[400] leading-[18px]'>5.0 (250)</h1>
                                            </div>
                                        </div>
                                        <h1 className='text_black_gray text-[14px] font-[400] leading-[22px]'>Facalty UI/UX Designer,</h1>
                                        <div className='flex items-center gap-5'>
                                            <img src={fb_icon} alt="" />
                                            <img src={messenger_icon} alt="" />
                                            <img src={whatsapp_icon} alt="" />
                                            <img src={linkedin_icon} alt="" />
                                            <img src={github_icon} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='p-2.5 bg-white flex flex-col gap-2.5 rounded-[10px]'>
                                <div className='flex flex-row items-center gap-2.5'>
                                    <div className='w-[60px]'>
                                        <img className='rounded-[50px]' src={mentor_2} alt="" />
                                    </div>
                                    <div>
                                        <div className='flex flex-row items-center gap-2.5'>
                                            <h1 className='text-[#2E3138] text-[20px] font-[600] leading-[21px]'>Md. Al Amin</h1>
                                            <div className='flex items-center gap-1'>
                                                <img src={star_yellow} alt="" />
                                                <h1 className='text_black_gray text-[14px] font-[400] leading-[18px]'>5.0 (250)</h1>
                                            </div>
                                        </div>
                                        <h1 className='text_black_gray text-[14px] font-[400] leading-[22px]'>Facalty UI/UX Designer,</h1>
                                        <div className='flex items-center gap-5'>
                                            <img src={fb_icon} alt="" />
                                            <img src={messenger_icon} alt="" />
                                            <img src={whatsapp_icon} alt="" />
                                            <img src={linkedin_icon} alt="" />
                                            <img src={github_icon} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StudentDashboardCourseDetails;