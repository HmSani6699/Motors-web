import React from 'react';
import bundle_course from '../../../../assets/images/bandel_course_top_bg.png'
import plus_white from '../../../../assets/svg/plus_Blue_Sapphire.svg'
import course_layer from '../../../../assets/images/bundle_course_course_layer.png'
import video_camera_icon from '../../../../assets/svg/video-camera_white.svg'
import file_certificate_icon from '../../../../assets/svg/file-document-edit-outline_white.svg'
import delete_icon from '../../../../assets/svg/delete-sweep-outline_white.svg'
import timer_11_white from '../../../../assets/svg/av-timer.svg'
import user_group from '../../../../assets/svg/user-group.svg'
import layer_white from '../../../../assets/svg/layer_white.svg'
import user_circle from '../../../../assets/svg/user-circle.svg'
import layer_green from '../../../../assets/svg/layer_green.svg'
import course_img from '../../../../assets/images/course-img (2).png'
import { Link } from 'react-router-dom';

const BundleCourse = () => {
    return (
        <>
            <div className='w-full max-w-[1015px] mx-auto px-[13px] pb-5'>
                <div
                    style={{ backgroundImage: `url(${bundle_course})` }}
                    className='w-full px-11 py-7 rounded-[20px] flex flex-row justify-between bg-no-repeat bg-cover bg-center
                '>
                    <div className='flex flex-col gap-10'>
                        <h1 className='text-white text-[16px] md:text-[24px] lg:text-[28px] font-[500] lg:font-[600] leading-[36px]' >Add Your Bundles Courses</h1>
                        <div>
                            <Link to='/admin/create-bundle-course'>
                                <button className='p-2.5 second_text_color bg-white rounded-[5px] text-[16px] font-[500] leading-[24px] flex flex-row items-center gap-1'>
                                    <img className='w-[22px]' src={plus_white} alt="" />
                                    Create Bundle Course
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <img src={course_layer} alt="" />
                    </div>
                </div>
                {/*  */}
                <div className='grid grid-cols-2 gap-10 py-8'>
                    <div className='w-full lg:max-w-[469px] overflow-hidden bg-[#0A1D29] rounded-[10px]'>
                        <img src={course_img} className="w-full" />
                        <div className="p-4">
                            <div className='px-2 py-1.5 flex flex-row justify-between border border-[#5D636F] rounded-[20px]'>
                                <div className='flex flex-row gap-1.5'>
                                    <img src={video_camera_icon} alt="" />
                                    <h1 className='text-[#C7CAD1] text-[14px] font-[400]'>Video Course</h1>
                                </div>
                                <div className='flex flex-row gap-1.5'>
                                    <img src={timer_11_white} alt="" />
                                    <h1 className='text-[#C7CAD1] text-[14px] font-[400]'>Duration</h1>
                                </div>
                                <div className='flex flex-row gap-1.5'>
                                    <img src={user_group} alt="" />
                                    <h1 className='text-[#C7CAD1] text-[14px] font-[400]'>Enroll</h1>
                                </div>
                            </div>
                            <div className='py-1 mt-1'>
                                <h2 className='text-[18px] font-[600] text-white leading-[28px]'>Digital Marketing & Social Media Marketing and Freelancing</h2>
                            </div>
                            <div className='flex items-center justify-between overflow-hidden'>
                                <div className='flex flex-col gap-2'>
                                    <div className='flex flex-col gap-2'>
                                        <div className='flex flex-row gap-1.5 items-center'>
                                            <img src={user_circle} alt="" />
                                            <h2 className='text-[14px] font-[400] text-white leading-[18px]'>হামিদ ইমান</h2>
                                        </div>
                                        <div className='flex flex-row gap-1 items-center'>
                                            <img src={layer_green} alt="" />
                                            <h2 className='text-[14px] font-[400] text-white leading-[18px]'>3 Courses</h2>
                                        </div>
                                    </div>
                                    <div className='flex flex-row gap-2.5'>
                                        <h2 className='text-[16px] font-[500] text-[#9096A2] leading-[22px]'>৳ <strike> ১৮,০০০ </strike></h2>
                                        <h2 className='text-[16px] font-[500] text-[#53DFC3] leading-[22px]'>৳ ৫,৯৯৯</h2>
                                    </div>
                                    <div className='flex items-center gap-[30px]'>
                                        <div className='flex flex-row gap-1.5'>
                                            <img src={file_certificate_icon} alt="" />
                                            <h2 className='text-[14px] font-[400] text-[#FFF] leading-[22px]'>Edit</h2>
                                        </div>
                                        <div className='flex flex-row gap-1.5'>
                                            <img src={delete_icon} alt="" />
                                            <h2 className='text-[14px] font-[400] text-[#FFF] leading-[22px]'>Delete</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:max-w-[469px] overflow-hidden bg-[#0A1D29] rounded-[10px]'>
                        <img src={course_img} className="w-full" />
                        <div className="p-4">
                            <div className='px-2 py-1.5 flex flex-row justify-between border border-[#5D636F] rounded-[20px]'>
                                <div className='flex flex-row gap-1.5'>
                                    <img src={video_camera_icon} alt="" />
                                    <h1 className='text-[#C7CAD1] text-[14px] font-[400]'>Video Course</h1>
                                </div>
                                <div className='flex flex-row gap-1.5'>
                                    <img src={timer_11_white} alt="" />
                                    <h1 className='text-[#C7CAD1] text-[14px] font-[400]'>Duration</h1>
                                </div>
                                <div className='flex flex-row gap-1.5'>
                                    <img src={user_group} alt="" />
                                    <h1 className='text-[#C7CAD1] text-[14px] font-[400]'>Enroll</h1>
                                </div>
                            </div>
                            <div className='py-1 mt-1'>
                                <h2 className='text-[18px] font-[600] text-white leading-[28px]'>Digital Marketing & Social Media Marketing and Freelancing</h2>
                            </div>
                            <div className='flex items-center justify-between overflow-hidden'>
                                <div className='flex flex-col gap-2'>
                                    <div className='flex flex-col gap-2'>
                                        <div className='flex flex-row gap-1.5 items-center'>
                                            <img src={user_circle} alt="" />
                                            <h2 className='text-[14px] font-[400] text-white leading-[18px]'>হামিদ ইমান</h2>
                                        </div>
                                        <div className='flex flex-row gap-1 items-center'>
                                            <img src={layer_green} alt="" />
                                            <h2 className='text-[14px] font-[400] text-white leading-[18px]'>3 Courses</h2>
                                        </div>
                                    </div>
                                    <div className='flex flex-row gap-2.5'>
                                        <h2 className='text-[16px] font-[500] text-[#9096A2] leading-[22px]'>৳ <strike> ১৮,০০০ </strike></h2>
                                        <h2 className='text-[16px] font-[500] text-[#53DFC3] leading-[22px]'>৳ ৫,৯৯৯</h2>
                                    </div>
                                    <div className='flex items-center gap-[30px]'>
                                        <div className='flex flex-row gap-1.5'>
                                            <img src={file_certificate_icon} alt="" />
                                            <h2 className='text-[14px] font-[400] text-[#FFF] leading-[22px]'>Edit</h2>
                                        </div>
                                        <div className='flex flex-row gap-1.5'>
                                            <img src={delete_icon} alt="" />
                                            <h2 className='text-[14px] font-[400] text-[#FFF] leading-[22px]'>Delete</h2>
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

export default BundleCourse;