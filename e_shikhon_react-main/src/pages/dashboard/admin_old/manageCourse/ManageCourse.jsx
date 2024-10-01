import React from 'react';
import { Link } from 'react-router-dom';
import plus_white from '../../../../assets/svg/plus_white.svg'
import down_arrow from '../../../../assets/svg/down_arrow.svg'
import course_img from '../../../../assets/images/course-img (2).png'
import course_img1 from '../../../../assets/images/course-img (1).png'
import course_img2 from '../../../../assets/images/course-img (3).png'
import course_img3 from '../../../../assets/images/course-img (4).png'
import ManageCourseCard from '../../../../components/dashboard/adminDashboard/manageCourse/ManageCourseCard';


const ManageCourse = () => {
    return (
        <>
            <div className='px-[13px] w-full lg:w-[1015px] mb-10 mx-auto'>
                <div className='bg-white rounded-[10px] flex flex-row justify-between items-center p-2.5'>
                    <div>
                        <h2 className='text-[28px] font-[600] text_black_gray leading-[40px]'>All Courses (6)</h2>
                    </div>
                    <div className='flex flex-row gap-3'>
                        <div>
                            <Link to='/dashboard/newCourse'>
                                <button className='p-2.5 text-white primary_green rounded-[5px] text-[14px] font-[400] leading-[18px] flex flex-row items-center gap-1'>
                                    <img className='w-[20px]' src={plus_white} alt="" />
                                    New Course
                                </button>
                            </Link>
                        </div>
                        <div>
                            <button className='p-2.5 text-black bg-[#F5F5F5] rounded-[5px] text-[14px] font-[400] leading-[18px] flex flex-row items-center gap-2'>
                                Top Instructor
                                <img src={down_arrow} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
                {/*  */}
                
                <div className='grid grid-cols-2 gap-10 py-8'>
                    <ManageCourseCard img={course_img} />
                    <ManageCourseCard img={course_img1} />
                    <ManageCourseCard img={course_img2} />
                    <ManageCourseCard img={course_img3} />
                    <ManageCourseCard img={course_img1} />
                    <ManageCourseCard img={course_img} />
                </div>
            </div>
        </>
    );
};

export default ManageCourse;