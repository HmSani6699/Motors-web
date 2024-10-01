import React, { useContext, useEffect, useState } from 'react';
import course_icon from '../../../../assets/svg/dashboard_course_color_icon.svg'
import unit_icon from '../../../../assets/svg/dashboard_unit_color_icon.svg'
import quiz_icon from '../../../../assets/svg/dashboard_quiz_color_icon.svg'
import user_add_icon from '../../../../assets/svg/dashboard_user_add_color_icon.svg'
import user_add2_icon from '../../../../assets/svg/dashboard_user_add_color_icon2.svg'
import pin_note from '../../../../assets/svg/pin_note.svg'
import user_black from '../../../../assets/svg/user_black.svg'
import calendar_gray from '../../../../assets/svg/calendar-gray.svg'
import flow_chart from '../../../../assets/images/Chart Flow.png'
import { AuthContext } from '../../../../layout/MainLayout';
import { get } from '../../../../api/axious';

const StudentDashboard = () => {
    const { user } = useContext(AuthContext);

    const [loading, setLoading] = useState(false);
    const [userProgressCount, setUserProgressCount] = useState([]);

    const fetchStudentProgressData = async (id) => {
        setLoading(true);
        try {
            const res = await get(`api/auth/allCountsForUser/${id}`);
            console.log(res);
            setUserProgressCount(res?.data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (user?.id) {
            fetchStudentProgressData(user?.id);
        }
    }, [user?.id]);

    // console.log(userProgressCount)
    return (
        <>
            <div className='px-[13px] w-full lg:w-[1015px] mb-10 mx-auto'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-10'>
                    <div className='p-4 bg-[#FFE2E5] rounded-[16px]'>
                        <div className='flex flex-row lg:flex-col  gap-4'>
                            <div>
                                <img src={course_icon} alt="" />
                            </div>
                            <h1 className='text-[32px] font-[700] text-[#151D48]  leading-[30px] mt-1 md:mt-0'>{userProgressCount?.courseCount ? userProgressCount?.courseCount : 0}</h1>
                        </div>
                        <h1 className='mt-5 lg:mt-0 text-[18px] font-[500] text-[#425166] leading-[28px]'>কোর্স সংখ্যা</h1>
                    </div>
                    <div className=' p-5 bg-[#FFF4DE] rounded-[16px]'>
                        <div className='flex flex-row lg:flex-col gap-4'>
                            <div>
                                <img src={unit_icon} alt="" />
                            </div>
                            <h1 className='text-[32px] font-[700] text-[#151D48]  leading-[30px] mt-1 md:mt-0'>{userProgressCount?.unitCount ? userProgressCount?.unitCount : 0}</h1>
                        </div>
                        <h1 className='mt-5 lg:mt-0 text-[18px] font-[500] text-[#425166] leading-[28px]'>ইউনিট সংখ্যা</h1>
                    </div>
                    <div className=' p-5 bg-[#DCFCE7] rounded-[16px]'>
                        <div className='flex flex-row lg:flex-col gap-4'>
                            <div>
                                <img src={quiz_icon} alt="" />
                            </div>
                            <h1 className='text-[32px] font-[700] text-[#151D48]  leading-[30px] mt-1 md:mt-0'>0</h1>
                        </div>
                        <h1 className='mt-5 lg:mt-0 text-[18px] font-[500] text-[#425166] leading-[28px]'>কুইজ সংখ্যা</h1>
                    </div>
                    <div className=' p-5 bg-[#F3E8FF] rounded-[16px]'>
                        <div className='flex flex-row lg:flex-col gap-4'>
                            <div>
                                <img src={user_add_icon} alt="" />
                            </div>
                            <h1 className='text-[32px] font-[700] text-[#151D48]  leading-[30px] mt-1 md:mt-0'>
                                {userProgressCount?.assignmentCount ? userProgressCount?.assignmentCount : 0}</h1>
                        </div>
                        <h1 className='mt-5 lg:mt-0 text-[18px] font-[500] text-[#425166] leading-[28px]'>অ্যাসাইনমেন্ট সংখ্যা</h1>
                    </div>

                </div>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-10 mt-5'>
                    <div className='  p-5 bg-[#FFF4DE] rounded-[16px]'>
                        <div className='flex flex-row lg:flex-col gap-4'>
                            <div>
                                <img src={unit_icon} alt="" />
                            </div>
                            <h1 className='text-[32px] font-[700] text-[#151D48]  leading-[30px] mt-1 md:mt-0'>0</h1>
                        </div>
                        <h1 className='mt-5 lg:mt-0 text-[18px] font-[500] text-[#425166] leading-[28px]'>ব্যাজ সংখ্যা</h1>
                    </div>
                    <div className='  p-5 bg-[#DCFCE7] rounded-[16px]'>
                        <div className='flex flex-row lg:flex-col gap-4'>
                            <div>
                                <img src={quiz_icon} alt="" />
                            </div>
                            <h1 className='text-[32px] font-[700] text-[#151D48]  leading-[30px] mt-1 md:mt-0'>0</h1>
                        </div>
                        <h1 className='mt-5 lg:mt-0 text-[18px] font-[500] text-[#425166] leading-[28px]'>সার্টিফিকেট সংখ্যা</h1>
                    </div>
                    <div className='  p-5 bg-[#D8F0FF] rounded-[16px]'>
                        <div className='flex flex-row lg:flex-col gap-4'>
                            <div>
                                <img src={user_add2_icon} alt="" />
                            </div>
                            <h1 className='text-[32px] font-[700] text-[#151D48]  leading-[30px] mt-1 md:mt-0'>0</h1>
                        </div>
                        <h1 className=' mt-5 lg:mt-0 text-[18px] font-[500] text-[#425166] leading-[28px]'>প্রশ্ন সংখ্যা</h1>
                    </div>
                </div>
                {/*  */}

                <div className='grid grid-cols-1 lg:grid-cols-2 mt-10 gap-4'>
                    <div className='p-3 md:p-5 bg-white rounded-[10px]'>
                        <div>
                            <div className='flex gap-3 mb-2'>
                                <img src={pin_note} alt="" />
                                <h1 className='text-[24px] font-[600] leading-[32px] text-[#2E3138]' >Noticeboard</h1>
                            </div>
                            <hr className="h-0  border-b border-solid border-[#E3E5E8]" />
                        </div>

                        <div className='mt-5 '>
                            <div className='flex flex-col gap-4 mb-2'>
                                <div className='flex flex-row items-center justify-between'>
                                    <div>
                                        <h1 className='text-[20px] font-[500] leading-[28px] text-[#2E3138]'>New Class Published</h1>
                                        <div className='flex flex-row gap-2.5 items-center'>
                                            <div className='flex flex-row gap-1'>
                                                <img src={user_black} alt="" />
                                                <h1 className='text-[14px] font-[400] leading-[18px] text-[#2E3138]'>Created by Light Moon</h1>
                                            </div>
                                            <hr className="w-0 h-3 border-s-2 border-solid border-[#ACB0B9]" />
                                            <div className='flex flex-row gap-1'>
                                                <img src={calendar_gray} alt="" />
                                                <h1 className='text-[14px] font-[400] leading-[18px] text-[#2E3138]'>13 Jul 2021</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <button className='p-2.5 border border-[#9096A2] rounded-[5px]'>
                                            More info
                                        </button>
                                    </div>
                                </div>
                                <hr className="h-0 border-b border-solid border-[#E3E5E8] " />
                                <div className='flex flex-row items-center justify-between'>
                                    <div>
                                        <h1 className='text-[20px] font-[500] leading-[28px] text-[#2E3138]'>New Class Published</h1>
                                        <div className='flex flex-row gap-2.5 items-center'>
                                            <div className='flex flex-row gap-1'>
                                                <img src={user_black} alt="" />
                                                <h1 className='text-[14px] font-[400] leading-[18px] text-[#2E3138]'>Created by Light Moon</h1>
                                            </div>
                                            <hr className="w-0 h-3 border-s-2 border-solid border-[#ACB0B9]" />
                                            <div className='flex flex-row gap-1'>
                                                <img src={calendar_gray} alt="" />
                                                <h1 className='text-[14px] font-[400] leading-[18px] text-[#2E3138]'>13 Jul 2021</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <button className='p-2.5 border border-[#9096A2] rounded-[5px]'>
                                            More info
                                        </button>
                                    </div>
                                </div>
                                <hr className="h-0 border-b border-solid border-[#E3E5E8] " />
                                <div className='flex flex-row items-center justify-between'>
                                    <div>
                                        <h1 className='text-[20px] font-[500] leading-[28px] text-[#2E3138]'>New Class Published</h1>
                                        <div className='flex flex-row gap-2.5 items-center'>
                                            <div className='flex flex-row gap-1'>
                                                <img src={user_black} alt="" />
                                                <h1 className='text-[14px] font-[400] leading-[18px] text-[#2E3138]'>Created by Light Moon</h1>
                                            </div>
                                            <hr className="w-0 h-3 border-s-2 border-solid border-[#ACB0B9]" />
                                            <div className='flex flex-row gap-1'>
                                                <img src={calendar_gray} alt="" />
                                                <h1 className='text-[14px] font-[400] leading-[18px] text-[#2E3138]'>13 Jul 2021</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <button className='p-2.5 border border-[#9096A2] rounded-[5px]'>
                                            More info
                                        </button>
                                    </div>
                                </div>
                                <hr className="h-0 border-b border-solid border-[#E3E5E8] " />
                                <div className='flex flex-row items-center justify-between'>
                                    <div>
                                        <h1 className='text-[20px] font-[500] leading-[28px] text-[#2E3138]'>New Class Published</h1>
                                        <div className='flex flex-row gap-2.5 items-center'>
                                            <div className='flex flex-row gap-1'>
                                                <img src={user_black} alt="" />
                                                <h1 className='text-[14px] font-[400] leading-[18px] text-[#2E3138]'>Created by Light Moon</h1>
                                            </div>
                                            <hr className="w-0 h-3 border-s-2 border-solid border-[#ACB0B9]" />
                                            <div className='flex flex-row gap-1'>
                                                <img src={calendar_gray} alt="" />
                                                <h1 className='text-[14px] font-[400] leading-[18px] text-[#2E3138]'>13 Jul 2021</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <button className='p-2.5 border border-[#9096A2] rounded-[5px]'>
                                            More info
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* chart */}

                    <div className='p-3 md:p-5 bg-white rounded-[10px]'>
                        <div>
                            <div className='flex gap-3 mb-2'>
                                <img src={pin_note} alt="" />
                                <h1 className='text-[24px] font-[600] leading-[32px] text-[#2E3138]' >Statistics</h1>
                            </div>
                            <hr className="h-0  border-b border-solid border-[#E3E5E8]" />
                        </div>

                        <div className='mt-5 '>
                            <div className='flex flex-col gap-4 mb-2'>
                                <img src={flow_chart} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StudentDashboard;