import React from 'react';
import { Link } from 'react-router-dom';
import finish_start from "../../../../../assets/images/finish_start.png";
import right_arrow from "../../../../../assets/svg/arrow-right-btn.svg";

const NewCourse5 = () => {
    return (
        <>
            <div className='w-full max-w-[1015px] mx-auto px-[13px] pb-5'>
                <div className='bg-white rounded-[10px]'>
                    <div>
                        <h2 className='text-[28px] font-[600] text_black_gray leading-[40px] p-2.5'>Add New Course</h2>
                    </div>
                </div>
                {/*  */}

                <div className='w-full h-[355px] bg-white rounded-[5px] border border-[#9096A2] mt-5 flex align-middle items-center justify-center mb-8'>
                    <div className='relative'>
                        <img src={finish_start} alt="" />
                        <h2 className='text-[28px] font-[600] text_black_gray leading-[40px] absolute top-[70px] left-6'>FINISH</h2>
                    </div>
                </div>

                <div className='flex flex-row gap-[30px] justify-end w-full pt-5 border-t border-[#9096A2]'>
                    <Link to='/manageCourse5'>
                        <button className='px-3 py-1.5 border rounded-[8px] border-[#17191C] text-[16px] font-[500] leading-[24px]'>
                            Cancel
                        </button>
                    </Link>
                    <Link to='/manageCourse'>
                        <button className='px-3 py-2 rounded-[8px]  text-[16px] font-[500] leading-[24px] text-white primary_green flex flex-row items-center gap-2'>
                            Submit
                            <img className='w-[12px]' src={right_arrow} alt="" />
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default NewCourse5;