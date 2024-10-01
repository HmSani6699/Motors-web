import React, { useState } from 'react';
import mentor_icon from "../../../../../assets/images/mentor-icon.png";
import down_arrow from "../../../../../assets/svg/down_arrow.svg";
import plus_green from "../../../../../assets/svg/plus_Blue_Sapphire.svg";
import right_arrow from "../../../../../assets/svg/arrow-right-btn.svg";
import { Link } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const NewCourse4 = () => {
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
                    <div className='flex items-center flex-row gap-2 '>
                        <div className='bg-slate-300 rounded-[5px]'>
                            <img className='w-[24px]' src={mentor_icon} alt="" />
                        </div>
                        <h2 className='text-[24px] font-[700] text_black_gray leading-[32px] '>Instructor</h2>
                    </div>
                    <div className='flex flex-col gap-2.5 py-3'>
                        <div className='flex flex-row w-full gap-4'>
                            <div className='w-full relative'>
                                <label htmlFor="HeadlineAct" className="text-[16px] font-[400] leading-[22px]"> Teacher Name </label>

                                <select
                                    name="HeadlineAct"
                                    id="HeadlineAct"
                                    className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
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
                                    className="absolute top-[50px] right-2 transform -translate-y-1/2"
                                />
                                <div className='flex justify-end mt-1'>
                                    <button className='flex flex-row gap-1 items-center second_text_color text-[16px] font-[400] leading-[20px]'>
                                        <img src={plus_green} alt="" />
                                        Add Teacher
                                    </button>
                                </div>
                            </div>
                            <div className='w-full relative'>
                                <label htmlFor="HeadlineAct" className="text-[16px] font-[400] leading-[22px]"> Teacher Category </label>

                                <select
                                    name="HeadlineAct"
                                    id="HeadlineAct"
                                    className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
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
                                    className="absolute top-[50px] right-2 transform -translate-y-1/2"
                                />
                            </div>

                        </div>
                        <div className='w-full relative pt-2.5'>
                            <label htmlFor="HeadlineAct" className="text-[16px] font-[400] leading-[22px] mb-3"> Answer </label>

                            <div className=''>
                            <ReactQuill modules={module} theme="snow" value={value} onChange={setValue} className='h-[185px] bg-white overflow-hidden rounded-[5px] border border-[#E3E5E8]' />
                            </div>
                        </div>
                    </div>
                    <div className='w-[456px] pt-3 pb-4'>
                        <div className='flex items-center flex-row gap-2 mb-2.5'>
                            <div className='bg-slate-300 rounded-[5px]'>
                                <img className='w-[24px]' src={mentor_icon} alt="" />
                            </div>
                            <h2 className='text-[24px] font-[700] text_black_gray leading-[32px] '>Link</h2>
                        </div>
                        <div className='bg-white p-1.5 rounded-[5px] flex flex-col gap-2'>
                            <div className='w-full flex flex-row items-center justify-between'>
                                <h2 className='text-[18px] font-[500] text_black_gray leading-[22px]'>GitHub</h2>
                                <label for="Toggle8" className="inline-flex items-center space-x-4 cursor-pointer ">
                                    <span className="relative">
                                        <input id="Toggle8" type="checkbox" className="hidden peer" />
                                        <div className="w-14 h-8 rounded-full shadow-inner bg-white border peer-checked:border-[#20AC90]"></div>
                                        <div className="absolute inset-y-0 left-0 w-6 h-6 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-[#C7CAD1] peer-checked:bg-[#20AC90]"></div>
                                    </span>
                                </label>
                            </div>
                            <input
                                name="HeadlineAct"
                                id="HeadlineAct"
                                type='text'
                                placeholder='Enter your GitHub link'
                                className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#9096A2]  input_filed_gray rounded-[5px] outline-none"
                            >
                            </input>
                        </div>
                        <div className='bg-white p-1.5 mt-4 rounded-[5px]'>
                            <div className='w-full flex flex-row items-center justify-between'>
                                <h2 className='text-[18px] font-[500] text_black_gray leading-[22px]'>Behance</h2>
                                <label for="Toggle9" className="inline-flex items-center space-x-4 cursor-pointer ">
                                    <span className="relative">
                                        <input id="Toggle9" type="checkbox" className="hidden peer" />
                                        <div className="w-14 h-8 rounded-full shadow-inner bg-white border peer-checked:border-[#20AC90]"></div>
                                        <div className="absolute inset-y-0 left-0 w-6 h-6 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-[#C7CAD1] peer-checked:bg-[#20AC90]"></div>
                                    </span>
                                </label>
                            </div>

                        </div>
                        <div className='flex justify-end mt-3'>
                            <button className='flex flex-row gap-1 items-center second_text_color text-[16px] font-[400] leading-[20px]'>
                                <img src={plus_green} alt="" />
                                Add link
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-row gap-[30px] justify-end w-full pt-5 border-t border-[#9096A2]'>
                        <Link to='/manageCourse4'>
                            <button className='px-3 py-1.5 border rounded-[8px] border-[#17191C] text-[16px] font-[500] leading-[24px]'>
                                Cancel
                            </button>
                        </Link>
                        <Link to='/dashboard/newCourse5'>
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

export default NewCourse4;