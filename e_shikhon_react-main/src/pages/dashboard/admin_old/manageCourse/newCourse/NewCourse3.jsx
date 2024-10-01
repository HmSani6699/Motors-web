import React, { useState } from 'react';
import comment from "../../../../../assets/svg/comment-question_green.svg";
import plus_green from "../../../../../assets/svg/plus_Blue_Sapphire.svg";
import right_arrow from "../../../../../assets/svg/arrow-right-btn.svg";
import { Link } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const NewCourse3 = () => {
    const [value, setValue] = useState('');
    var toolbarOptions = [
        ['bold', 'underline', 'clean'],
        [{ 'font': [] }],
        [{ 'color': [] }, { 'background': [] }], 
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'align': [] }],
        [{ 'indent': '-1'}, { 'indent': '+1' }], 
        ['link', 'video'],
        ['code-block', 'blockquote', 'image'],
      ];
    const module ={
        toolbar:toolbarOptions
    }
    return (
        <>
        <div className='w-full max-w-[1015px] mx-auto px-[13px] pb-5'>
                <div className='bg-white rounded-[10px]'>
                    <div>
                        <h2 className='text-[28px] font-[600] text_black_gray leading-[40px] p-2.5'>Add New Course</h2>
                    </div>
                </div>
                {/*  */}
                <div className='py-5 px-2'>
                    <div className='flex flex-row gap-2 '>
                        <img src={comment} alt="" />
                        <h2 className='text-[24px] font-[700] text_black_gray leading-[32px] '>Faq Questions</h2>
                    </div>
                    <div className='py-4'>
                        <div className='w-full'>
                            <label htmlFor="HeadlineAct" className="text-[16px] font-[400] leading-[22px]"> Questions </label>

                            <input
                                name="HeadlineAct"
                                id="HeadlineAct"
                                type='text'
                                placeholder='কোর্সটি কীভাবে কিনবো?'
                                className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#9096A2]  input_filed_gray rounded-[5px] outline-none"
                            >
                            </input>
                        </div>
                        <div>
                            <div className='w-full relative pt-2.5'>
                                <label htmlFor="HeadlineAct" className="text-[16px] font-[400] leading-[22px] mb-3"> Answer </label>

                                <ReactQuill modules={module} theme="snow" value={value} onChange={setValue} className='h-[185px] bg-white overflow-hidden rounded-[5px] border border-[#E3E5E8]' />

                                 <div className='flex justify-start pt-2.5'>
                                    <button className='flex flex-row gap-1 items-center second_text_color text-[16px] font-[400] leading-[20px]'>
                                        <img src={plus_green} alt="" />
                                        Add Question
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row gap-[30px] justify-end w-full pt-5 border-t border-[#9096A2]'>
                           <Link to='/manageCourse3'>
                           <button className='px-3 py-1.5 border rounded-[8px] border-[#17191C] text-[16px] font-[500] leading-[24px]'>
                                Cancel
                            </button>
                           </Link>
                            <Link to='/dashboard/newCourse4'>
                                <button className='px-3 py-2 rounded-[8px]  text-[16px] font-[500] leading-[24px] text-white primary_green flex flex-row items-center gap-2'>
                                    Save and Next
                                    <img className='w-[12px]' src={right_arrow} alt="" />
                                </button>
                            </Link>
                        </div>
                </div>
            </div>
        </>
    );
};

export default NewCourse3;