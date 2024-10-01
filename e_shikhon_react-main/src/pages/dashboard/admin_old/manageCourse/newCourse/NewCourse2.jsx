import React, { useState } from 'react';
import comment from "../../../../../assets/svg/comment-question_green.svg";
import plus_white from "../../../../../assets/svg/plus_white.svg";
import down_arrow from "../../../../../assets/svg/down_arrow.svg";
import plus_green from "../../../../../assets/svg/plus_Blue_Sapphire.svg";
import right_arrow from "../../../../../assets/svg/arrow-right-btn.svg";
import { Link } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const NewCourse2 = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

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
                        <h2 className='text-[24px] font-[700] text_black_gray leading-[32px] '>Course Curriculum</h2>
                    </div>
                    <div className='flex justify-end py-6'>
                        <button className='px-3 py-2 rounded-[4px]  text-[16px] font-[500] leading-[24px] text-white primary_green flex flex-row items-center'>
                            <img src={plus_white} alt="" />
                            Add Class
                        </button>
                    </div>

                    <div className='pb-5'>
                        <div className='w-full'>
                            <label htmlFor="HeadlineAct" className="text-[16px] font-[400] leading-[22px]"> Star Date </label>

                            <input
                                name="HeadlineAct"
                                id="HeadlineAct"
                                type='text'
                                placeholder='Introduction to course'
                                className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#9096A2]  input_filed_gray rounded-[5px] outline-none"
                            >
                            </input>
                        </div>
                        <div className='w-full relative mt-4'>
                            <select
                                name="HeadlineAct"
                                id="HeadlineAct"
                                className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#9096A2] input_filed_gray outline-none"
                            >
                                <option value="">Please select</option>
                                <option value="JM">John Mayer</option>
                                <option value="SRV">Stevie Ray Vaughn</option>
                                <option value="JH">Jimi Hendrix</option>
                                <option value="BBK">B.B King</option>
                                <option value="AK">Albert King</option>
                                <option value="BG">Buddy Guy</option>
                                <option value="EC">Eric Clapton</option>
                            </select>
                            <img
                                src={down_arrow}
                                alt="icon"
                                className="absolute top-[27px] right-2 transform -translate-y-1/2"
                            />
                        </div>
                        <div className='flex flex-col pt-2.5 gap-1.5'>
                            <div className='flex flex-row items-center gap-2'>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="roundedCheckbox"
                                        className="hidden"
                                        checked={isChecked}
                                        onChange={handleCheckboxChange}
                                    />
                                    <label
                                        htmlFor="roundedCheckbox"
                                        className={`w-5 h-5 rounded-full border-2 bg-white flex items-center justify-center cursor-pointer ${isChecked ? 'border-[#20AC90]' : 'border-gray-400'}`}
                                    >
                                        <div
                                            className={`w-3 h-3 rounded-full ${isChecked ? 'bg-[#20AC90]' : 'bg-white'}`}
                                            id="roundedCheck"
                                        ></div>
                                    </label>
                                </div>
                                <h2 className='text-[16px] font-[400] text_black_gray leading-[32px]'>Set Question 1</h2>

                            </div>
                            <div className='flex flex-row items-center gap-2'>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="roundedCheckbox"
                                        className="hidden"
                                        checked={isChecked}
                                        onChange={handleCheckboxChange}
                                    />
                                    <label
                                        htmlFor="roundedCheckbox"
                                        className={`w-5 h-5 rounded-full border-2 bg-white flex items-center justify-center cursor-pointer ${isChecked ? 'border-[#20AC90]' : 'border-gray-400'}`}
                                    >
                                        <div
                                            className={`w-3 h-3 rounded-full ${isChecked ? 'bg-[#20AC90]' : 'bg-white'}`}
                                            id="roundedCheck"
                                        ></div>
                                    </label>
                                </div>
                                <h2 className='text-[16px] font-[400] text_black_gray leading-[32px]'>Set Question 2</h2>

                            </div>
                            <div className='flex justify-start'>
                                <button className='flex flex-row gap-1 items-center second_text_color text-[16px] font-[400] leading-[20px]'>
                                    <img src={plus_green} alt="" />
                                    Add Question
                                </button>
                            </div>
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
                        <Link to='/manageCourse2'>
                            <button className='px-3 py-1.5 border rounded-[8px] border-[#17191C] text-[16px] font-[500] leading-[24px]'>
                                Cancel
                            </button>
                        </Link>
                        <Link to='/dashboard/newCourse3'>
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

export default NewCourse2;