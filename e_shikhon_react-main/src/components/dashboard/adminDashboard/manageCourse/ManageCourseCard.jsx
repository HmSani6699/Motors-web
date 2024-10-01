import React from 'react';
import video_camera_icon from '../../../../assets/svg/video-camera_white.svg'
import file_certificate_icon from '../../../../assets/svg/file-document-edit-outline_white.svg'
import delete_icon from '../../../../assets/svg/delete-sweep-outline_white.svg'
import timer_11_white from '../../../../assets/svg/av-timer.svg'
import user_group from '../../../../assets/svg/user-group.svg'
import layer_white from '../../../../assets/svg/layer_white.svg'
import user_circle from '../../../../assets/svg/user-circle.svg'
import star_yellow from '../../../../assets/svg/star_yellow.svg'

const ManageCourseCard = ({img}) => {
    return (
        <>
            <div className='w-full lg:max-w-[469px] overflow-hidden bg-[#0A1D29] rounded-[10px]'>
                <img src={img} className="w-full" />
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
                        <div className='flex flex-row gap-1.5'>
                            <img className='w-4' src={layer_white} alt="" />
                            <h1 className='text-[#C7CAD1] text-[14px] font-[400]'>Batch</h1>
                        </div>
                    </div>
                    <div className='py-1 mt-1'>
                        <h2 className='text-[18px] font-[600] text-white leading-[28px]'>মোশন গ্রাফিক্স Design ভিডিও কোর্স</h2>
                    </div>
                    <div className='flex items-center justify-between overflow-hidden'>
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-row gap-1.5 items-center'>
                                    <img src={user_circle} alt="" />
                                    <h2 className='text-[14px] font-[400] text-white leading-[18px]'>হামিদ ইমান</h2>
                                </div>
                                <div className='flex flex-row gap-1 items-center'>
                                    <img src={star_yellow} alt="" />
                                    <h2 className='text-[14px] font-[400] text-white leading-[18px]'>৪.৫ (2)</h2>
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
                        <div>
                            <div className='flex flex-col gap-2'>
                                <button className='text-white px-9 py-1.5 text-[14px] font-[500] leading-[21px] rounded-[6px] primary_green '>
                                    Resource
                                </button>
                                <button className='text-white px-9 py-1.5 text-[14px] font-[500] leading-[21px] rounded-[6px] bg-[#1E567B] '>
                                    Quiz
                                </button>
                                <button className='text-white px-9 py-1.5 text-[14px] font-[500] leading-[21px] rounded-[6px] bg-[#C47F08] '>
                                    Assignment
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ManageCourseCard;