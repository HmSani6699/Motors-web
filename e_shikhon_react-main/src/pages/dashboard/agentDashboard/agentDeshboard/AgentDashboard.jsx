import React from 'react';
import course_icon from '../../../../assets/svg/dashboard_course_color_icon.svg'
import dashboard_star_rating_icon from '../../../../assets/svg/dashboard_star_rating.svg'
import dashboard_green_bdt_icon from '../../../../assets/svg/dashboard_green_bdt_icon.svg'
import user_add_icon from '../../../../assets/svg/dashboard_user_add_color_icon.svg'
import instructor_chart from '../../../../assets/images/instructor_chart.png'
import instructor_class_time from '../../../../assets/images/class_time.png'
import instructor_success_student from '../../../../assets/images/success-studen-img (1).png'
import layer from '../../../../assets/svg/layer.svg'
import file_icon from '../../../../assets/svg/file-certificate-outline.svg'
import badge_icon from '../../../../assets/svg/badge_star.svg'
import fiver_icon from '../../../../assets/images/fiverr.png'
import icddr_icon from '../../../../assets/images/icddr.png'
import mern_instructor_my_course from '../../../../assets/images/mern_instructor_my_course.png'
import laravel_instructor_my_class from '../../../../assets/images/laravel_instructor_my_class.png'
import star from '../../../../assets/svg/star.svg'
import dots_horizontal_black from '../../../../assets/svg/dots-vertical_black.svg'

const AgentDashboard = () => {
    return (
        <>
            <div className='px-[13px] w-full lg:w-[1015px] mb-10 mx-auto'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-10'>
                    <div className='p-4 bg-[#FFE2E5] rounded-[16px]'>
                        <div className='flex flex-row lg:flex-col  gap-4'>
                            <div>
                                <img src={course_icon} alt="" />
                            </div>
                            <h1 className='text-[32px] font-[700] text-[#151D48]  leading-[30px] mt-1 md:mt-0'>5</h1>
                        </div>
                        <h1 className='mt-5 lg:mt-0 text-[18px] font-[500] text-[#425166] leading-[28px]'>প্রশিক্ষণ প্রাপ্ত শিক্ষার্থী</h1>
                    </div>
                    <div className=' p-5 bg-[#F3E8FF] rounded-[16px]'>
                        <div className='flex flex-row lg:flex-col gap-4'>
                            <div>
                                <img src={user_add_icon} alt="" />
                            </div>
                            <h1 className='text-[32px] font-[700] text-[#151D48]  leading-[30px] mt-1 md:mt-0'>২০০০+</h1>
                        </div>
                        <h1 className='mt-5 lg:mt-0 text-[18px] font-[500] text-[#425166] leading-[28px]'>কর্মচারী সংখ্যা</h1>
                    </div>
                    <div className=' p-5 bg-[#FFF4DE] rounded-[16px]'>
                        <div className='flex flex-row lg:flex-col gap-4'>
                            <div>
                                <img src={dashboard_star_rating_icon} alt="" />
                            </div>
                            <h1 className='text-[32px] font-[700] text-[#151D48]  leading-[30px] mt-1 md:mt-0'>300</h1>
                        </div>
                        <h1 className='mt-5 lg:mt-0 text-[18px] font-[500] text-[#425166] leading-[28px]'>এভারেজ রেটিং</h1>
                    </div>
                    <div className=' p-5 bg-[#DCFCE7] rounded-[16px]'>
                        <div className='flex flex-row lg:flex-col gap-4'>
                            <div>
                                <img src={dashboard_green_bdt_icon} alt="" />
                            </div>
                            <h1 className='text-[32px] font-[700] text-[#151D48]  leading-[30px] mt-1 md:mt-0'>2,000k</h1>
                        </div>
                        <h1 className='mt-5 lg:mt-0 text-[18px] font-[500] text-[#425166] leading-[28px]'>টোটাল রিভিনিউ</h1>
                    </div>


                </div>

                {/*  */}
                <div className='flex flex-col lg:flex-row gap-5 py-7'>
                    <div className='w-full lg:max-w-[354px] bg-white rounded-[10px] py-5 '>
                        <div className='border-b ps-5'>
                            <h1 className='text-[28px] font-[600] text_black leading-[28px] mb-2'>Course Stats</h1>
                        </div>
                        <div className='py-12 flex justify-center'>
                            <img src={instructor_chart} alt="" />
                        </div>
                        <div className='flex flex-row items-center justify-center gap-7'>
                            <div className='flex flex-col items-center'>
                                <div className='flex items-center gap-1'>
                                    <div className='w-2.5 h-2.5 bg-[#C47F08] rounded-full'>
                                    </div>
                                    <div>
                                        <h1 className='text-[16px] font-[500] text-black leading-[18px]'>কোর্স সেল</h1>
                                    </div>
                                </div>
                                <div>
                                    <h1 className='text-[14px] font-[400] text_black leading-[18px]'>৫০% ওভার</h1>
                                </div>
                            </div>
                            <div className='flex flex-col items-center'>
                                <div className='flex items-center gap-1'>
                                    <div className='w-2.5 h-2.5 bg-[#1A8C75] rounded-full'>
                                    </div>
                                    <div>
                                        <h1 className='text-[16px] font-[500] text-black leading-[18px]'>কোর্স দেখছে</h1>
                                    </div>
                                </div>
                                <div>
                                    <h1 className='text-[14px] font-[400] text_black leading-[18px]'>৩০% ওভার</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:max-w-[640px] bg-white rounded-[10px] p-4 '>
                        <div className='border-b ps-5'>
                            <h1 className='text-[21px] font-[600] text_black leading-[28px] mb-2'>ক্লাস টাইম</h1>
                        </div>
                        <div className='mt-4'>
                            <img src={instructor_class_time} alt="" />
                        </div>
                        {/* <div className='flex flex-row items-center justify-center gap-7'>
                            <div className='flex flex-col items-center'>
                                <div className='flex items-center gap-1'>
                                    <div className='w-2.5 h-2.5 bg-[#C47F08] rounded-full'>
                                    </div>
                                    <div>
                                        <h1 className='text-[16px] font-[500] text-black leading-[18px]'>কোর্স সেল</h1>
                                    </div>
                                </div>
                                <div>
                                    <h1 className='text-[14px] font-[400] text_black leading-[18px]'>৫০% ওভার</h1>
                                </div>
                            </div>
                            <div className='flex flex-col items-center'>
                                <div className='flex items-center gap-1'>
                                    <div className='w-2.5 h-2.5 bg-[#1A8C75] rounded-full'>
                                    </div>
                                    <div>
                                        <h1 className='text-[16px] font-[500] text-black leading-[18px]'>কোর্স দেখছে</h1>
                                    </div>
                                </div>
                                <div>
                                    <h1 className='text-[14px] font-[400] text_black leading-[18px]'>৩০% ওভার</h1>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                {/*  */}
                <div className='flex flex-col lg:flex-row gap-5 py-4'>

                    <div className='w-full lg:max-w-[662px] rounded-[10px]'>
                        <div className='border-b flex items-center justify-between pt-2.5'>
                            <h1 className='text-[21px] font-[600] text_black leading-[28px]'>My Courses</h1>
                            <div className='flex flex-row gap-5'>
                                <button className='text_primary_green px-1 py-1 text-[16px] font-[500] leading-[21px] rounded-[3px] border-b border-[#20AC90]'>
                                    All Course
                                </button>
                                <button className='text_black px-1 py-1 text-[16px] font-[500] leading-[21px] rounded-[3px] '>
                                    Current
                                </button>
                                <button className='text_black px-1 py-1 text-[16px] font-[500] leading-[21px] rounded-[3px] '>
                                    Upcoming
                                </button>
                                <button className='text_black px-1 py-1 text-[16px] font-[500] leading-[21px] rounded-[3px] '>
                                    Archive
                                </button>
                            </div>
                        </div>

                        <div className='pt-3 flex flex-col gap-2.5'>
                            <div className='p-2.5 bg-white rounded-[10px] flex flex-row items-center justify-between'>
                                <div className='flex flex-row items-center gap-2.5'>
                                    <div className='w-28 h-[90px]'>
                                        <img className='rounded-[10px]' src={mern_instructor_my_course} alt="" />
                                    </div>
                                    <div>
                                        <h1 className='text-[20px] font-[600] text_black leading-[28px]'>Web Design & Development</h1>
                                        <h1 className='text-[16px] font-[400] text_black_gray  leading-[22px]'>Dec 2023 - Feb 2024</h1>
                                    </div>
                                </div>
                                <div className='flex flex-row items-center gap-2.5'>
                                    <div className='flex flex-row items-center gap-1'>
                                        <img src={star} alt="" />
                                        <h1 className='mt-1 text-[18px] font-[600] text_black leading-[28px]'>5</h1>
                                    </div>
                                    <div>
                                        <button className='text-white px-5 py-2.5 primary_green text-[14px] font-[500] leading-[21px] rounded-[8px]'>
                                            View Course
                                        </button>
                                    </div>
                                    <div>
                                        <img src={dots_horizontal_black} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='p-2.5 bg-white rounded-[10px] flex flex-row items-center justify-between'>
                                <div className='flex flex-row items-center gap-2.5'>
                                    <div className='w-28 h-[90px]'>
                                        <img className='rounded-[10px]' src={laravel_instructor_my_class} alt="" />
                                    </div>
                                    <div>
                                        <h1 className='text-[20px] font-[600] text_black leading-[28px]'>Web Development(PHP, Laravel)</h1>
                                        <h1 className='text-[16px] font-[400] text_primary_green  leading-[22px]'>Completed</h1>
                                    </div>
                                </div>
                                <div className='flex flex-row items-center gap-2.5'>
                                    <div className='flex flex-row items-center gap-1'>
                                        <img src={star} alt="" />
                                        <h1 className='mt-1 text-[18px] font-[600] text_black leading-[28px]'>5</h1>
                                    </div>
                                    <div>
                                        <button className='text-white px-5 py-2.5 primary_green text-[14px] font-[500] leading-[21px] rounded-[8px]'>
                                            View Course
                                        </button>
                                    </div>
                                    <div>
                                        <img src={dots_horizontal_black} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='p-2.5 bg-white rounded-[10px] flex flex-row items-center justify-between'>
                                <div className='flex flex-row items-center gap-2.5'>
                                    <div className='w-28 h-[90px]'>
                                        <img className='rounded-[10px]' src={mern_instructor_my_course} alt="" />
                                    </div>
                                    <div>
                                        <h1 className='text-[20px] font-[600] text_black leading-[28px]'>Web Design & Development</h1>
                                        <h1 className='text-[16px] font-[400] text_black_gray  leading-[22px]'>Dec 2023 - Feb 2024</h1>
                                    </div>
                                </div>
                                <div className='flex flex-row items-center gap-2.5'>
                                    <div className='flex flex-row items-center gap-1'>
                                        <img src={star} alt="" />
                                        <h1 className='mt-1 text-[18px] font-[600] text_black leading-[28px]'>5</h1>
                                    </div>
                                    <div>
                                        <button className='text-white px-5 py-2.5 primary_green text-[14px] font-[500] leading-[21px] rounded-[8px]'>
                                            View Course
                                        </button>
                                    </div>
                                    <div>
                                        <img src={dots_horizontal_black} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='w-full lg:max-w-[322px] bg-white rounded-[10px] pt-5 '>
                        <div className='border-b ps-5'>
                            <h1 className='text-[28px] font-[600] text_black leading-[28px] mb-2'>টপ ছাত্রছাত্রী</h1>
                        </div>

                        <div className='p-3 flex flex-col gap-2.5'>
                            <div className='px-2.5 py-2 bg-[#F1F2F3] rounded-[10px]'>
                                <div className='flex items-center gap-1.5'>
                                    <div>
                                        <img className='w-8' src={instructor_success_student} alt="" />
                                    </div>
                                    <div>
                                        <h1 className='text-[16px] font-[500] text_black leading-[22px]'>মোঃ আল আমিন</h1>
                                        <h1 className='text-[14px] font-[400] text-[#5D636F] leading-[18px]'>ইউ আই/ইউ এক্স ডিজাইন</h1>
                                    </div>
                                </div>

                                <div className='flex items-center justify-between py-2 border-b'>
                                    <div className='flex items-center gap-1.5'>
                                        <img className='w-4' src={layer} alt="" />
                                        <h1 className='text-[14px] font-[400] text-[#5D636F] leading-[18px]'>২০১ তম ছাত্র</h1>
                                    </div>
                                    <div className='flex items-center gap-1.5'>
                                        <img src={file_icon} alt="" />
                                        <img src={badge_icon} alt="" />
                                    </div>
                                </div>
                                <div className='flex items-center justify-center gap-2.5 pt-2'>
                                    <h1 className='text-[14px] font-[400] text-[#5D636F] leading-[18px]'>কাজ করছেঃ</h1>
                                    <div>
                                        <img className='w-10' src={fiver_icon} alt="" />
                                    </div>
                                    <div>
                                        <img className='w-12' src={icddr_icon} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='px-2.5 py-2 bg-[#F1F2F3] rounded-[10px]'>
                                <div className='flex items-center gap-1.5'>
                                    <div>
                                        <img className='w-8' src={instructor_success_student} alt="" />
                                    </div>
                                    <div>
                                        <h1 className='text-[16px] font-[500] text_black leading-[22px]'>মোঃ আল আমিন</h1>
                                        <h1 className='text-[14px] font-[400] text-[#5D636F] leading-[18px]'>ইউ আই/ইউ এক্স ডিজাইন</h1>
                                    </div>
                                </div>

                                <div className='flex items-center justify-between py-2 border-b'>
                                    <div className='flex items-center gap-1.5'>
                                        <img className='w-4' src={layer} alt="" />
                                        <h1 className='text-[14px] font-[400] text-[#5D636F] leading-[18px]'>২০১ তম ছাত্র</h1>
                                    </div>
                                    <div className='flex items-center gap-1.5'>
                                        <img src={file_icon} alt="" />
                                        <img src={badge_icon} alt="" />
                                    </div>
                                </div>
                                <div className='flex items-center justify-center gap-2.5 pt-2'>
                                    <h1 className='text-[14px] font-[400] text-[#5D636F] leading-[18px]'>কাজ করছেঃ</h1>
                                    <div>
                                        <img className='w-10' src={fiver_icon} alt="" />
                                    </div>
                                    <div>
                                        <img className='w-12' src={icddr_icon} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='px-2.5 py-2 bg-[#F1F2F3] rounded-[10px]'>
                                <div className='flex items-center gap-1.5'>
                                    <div>
                                        <img className='w-8' src={instructor_success_student} alt="" />
                                    </div>
                                    <div>
                                        <h1 className='text-[16px] font-[500] text_black leading-[22px]'>মোঃ আল আমিন</h1>
                                        <h1 className='text-[14px] font-[400] text-[#5D636F] leading-[18px]'>ইউ আই/ইউ এক্স ডিজাইন</h1>
                                    </div>
                                </div>

                                <div className='flex items-center justify-between py-2 border-b'>
                                    <div className='flex items-center gap-1.5'>
                                        <img className='w-4' src={layer} alt="" />
                                        <h1 className='text-[14px] font-[400] text-[#5D636F] leading-[18px]'>২০১ তম ছাত্র</h1>
                                    </div>
                                    <div className='flex items-center gap-1.5'>
                                        <img src={file_icon} alt="" />
                                        <img src={badge_icon} alt="" />
                                    </div>
                                </div>
                                <div className='flex items-center justify-center gap-2.5 pt-2'>
                                    <h1 className='text-[14px] font-[400] text-[#5D636F] leading-[18px]'>কাজ করছেঃ</h1>
                                    <div>
                                        <img className='w-10' src={fiver_icon} alt="" />
                                    </div>
                                    <div>
                                        <img className='w-12' src={icddr_icon} alt="" />
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

export default AgentDashboard;