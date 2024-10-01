import React, { useState } from 'react';
import down_arrow from "../../../../../assets/svg/down_arrow.svg";
import plus_green from "../../../../../assets/svg/plus_Blue_Sapphire.svg";
import comment from "../../../../../assets/svg/comment-question_green.svg";
import right_arrow from "../../../../../assets/svg/arrow-right-btn.svg";
import { Link } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddNewCourse = () => {

    const [value, setValue] = useState('');
    var toolbarOptions = [
        ['bold', 'underline', 'clean'],
        [{ 'font': [] }],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'align': [] }],
        [{ 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'video'],
        ['code-block', 'blockquote', 'image'],
    ];
    const module = {
        toolbar: toolbarOptions
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
                    <div>
                        <h2 className='text-[24px] font-[700] text_black_gray leading-[32px] mb-4'>Course Details</h2>
                    </div>

                    <div className='flex flex-col gap-5 '>
                        <div className='flex flex-row w-full gap-14'>
                            <div className='w-full relative'>
                                <label htmlFor="HeadlineAct" className="text-[16px] font-[400] leading-[22px]"> Course Category </label>

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
                                        Add
                                    </button>
                                </div>
                            </div>
                            <div className='w-full relative'>
                                <label htmlFor="HeadlineAct" className="text-[16px] font-[400] leading-[22px]"> Course Title </label>

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
                        <div className='flex flex-row gap-[30px]'>
                            <div className='w-full relative'>
                                <label htmlFor="HeadlineAct" className="text-[16px] font-[400] leading-[22px]"> Course Type </label>

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
                            <div className='w-full relative'>
                                <label htmlFor="HeadlineAct" className="text-[16px] font-[400] leading-[22px]"> Language </label>

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
                            <div className='w-full relative'>
                                <label htmlFor="HeadlineAct" className="text-[16px] font-[400] leading-[22px]"> Level </label>

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
                        <div className='flex flex-row gap-[30px]'>
                            <div className='w-full relative'>
                                <label htmlFor="HeadlineAct" className="text-[16px] font-[400] leading-[22px]"> Star Date </label>

                                <input
                                    name="HeadlineAct"
                                    id="HeadlineAct"
                                    type='date'
                                    className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                                >

                                </input>
                                {/* <img
                                    src={down_arrow}
                                    alt="icon"
                                    className="absolute top-[50px] right-2 transform -translate-y-1/2"
                                /> */}
                            </div>
                            <div className='w-full relative'>
                                <label htmlFor="HeadlineAct" className="text-[16px] font-[400] leading-[22px]"> Course Duration </label>

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
                            <div className='w-full relative'>
                                <label htmlFor="HeadlineAct" className="text-[16px] font-[400] leading-[22px]"> Students Capacity </label>

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
                        <div className='flex flex-row gap-[30px]'>
                            <div className='w-full relative'>
                                <label htmlFor="HeadlineAct" className="text-[16px] font-[400] leading-[22px]"> Class Time </label>

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
                            <div className='w-full relative'>
                                <label htmlFor="HeadlineAct" className="text-[16px] font-[400] leading-[22px]"> Class Duration </label>

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
                            <div className='w-full relative'>
                                <label htmlFor="HeadlineAct" className="text-[16px] font-[400] leading-[22px]"> Class Days </label>

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
                        <div className='flex flex-row gap-[30px]'>
                            <div className='w-full relative'>
                                <label htmlFor="HeadlineAct" className="text-[16px] font-[400] leading-[22px]"> Class Time </label>

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
                            <div className='w-full relative'>
                                <label htmlFor="HeadlineAct" className="text-[16px] font-[400] leading-[22px]"> Class Duration </label>

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
                            <div className='w-full relative'>
                                <label htmlFor="HeadlineAct" className="text-[16px] font-[400] leading-[22px]"> Class Days </label>

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
                        <div>
                            <div className='w-full relative'>
                                <label htmlFor="HeadlineAct" className="text-[16px] font-[400] leading-[22px] mb-3"> Course Description </label>

                                <ReactQuill modules={module} theme="snow" value={value} onChange={setValue} className='h-[185px] bg-white overflow-hidden rounded-[5px] border border-[#E3E5E8]' />

                            </div>
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                            <img src={comment} alt="" />
                            <h2 className='text-[20px] font-[600] text_black_gray leading-[32px]'>About Course</h2>
                        </div>
                        <div>
                            <div className='w-full relative'>
                                <label htmlFor="HeadlineAct" className="text-[16px] font-[400] leading-[22px]"> Class Duration </label>


                                <input
                                    className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5 text-black"
                                    type="text" />
                            </div>
                        </div>
                        <div>
                            <div className='w-full relative'>
                                <label htmlFor="HeadlineAct" className="text-[16px] font-[400] leading-[22px] mb-3"> Answer </label>

                                <ReactQuill modules={module} theme="snow" value={value} onChange={setValue} className='h-[185px] bg-white overflow-hidden rounded-[5px] border border-[#E3E5E8]' />

                                <div className='flex justify-start mt-3'>
                                    <button className='flex flex-row gap-1 items-center second_text_color text-[16px] font-[500] leading-[20px]'>
                                        <img src={plus_green} alt="" />
                                        Add Title
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className='w-full pb-5 flex flex-row gap-24 border-b border-[#9096A2]'>
                            <div className='flex flex-col gap-7'>
                                <div className='flex flex-col gap-2'>
                                    <div className='w-full flex flex-row items-center justify-between'>
                                        <h2 className='text-[18px] font-[500] text_black_gray leading-[22px]'>Paid</h2>
                                        <label for="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer ">
                                            <span className="relative">
                                                <input id="Toggle1" type="checkbox" className="hidden peer" />
                                                <div className="w-14 h-8 rounded-full shadow-inner bg-white border peer-checked:border-[#20AC90]"></div>
                                                <div className="absolute inset-y-0 left-0 w-6 h-6 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-[#C7CAD1] peer-checked:bg-[#20AC90]"></div>
                                            </span>
                                        </label>
                                    </div>
                                    <div className='flex flex-row gap-2.5'>
                                        <input
                                            className='w-[217px] p-1.5 bg-white rounded-[5px] border border-[#C7CAD1] outline-none'
                                            type="text"
                                            placeholder='Course Price'
                                        />
                                        <input
                                            className='w-[217px] p-1.5 bg-white rounded-[5px] border border-[#C7CAD1] outline-none'
                                            type="text"
                                            placeholder='Discount'
                                        />
                                    </div>
                                </div>
                                <div className='w-full flex flex-row items-center justify-between'>
                                    <h2 className='text-[18px] font-[500] text_black_gray leading-[22px]'>Assignment</h2>
                                    <label for="Toggle2" className="inline-flex items-center space-x-4 cursor-pointer ">
                                        <span className="relative">
                                            <input id="Toggle2" type="checkbox" className="hidden peer" />
                                            <div className="w-14 h-8 rounded-full shadow-inner bg-white border peer-checked:border-[#20AC90]"></div>
                                            <div className="absolute inset-y-0 left-0 w-6 h-6 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-[#C7CAD1] peer-checked:bg-[#20AC90]"></div>
                                        </span>
                                    </label>
                                </div>
                                <div className='w-full flex flex-row items-center justify-between'>
                                    <h2 className='text-[18px] font-[500] text_black_gray leading-[22px]'>Certificate</h2>
                                    <label for="Toggle3" className="inline-flex items-center space-x-4 cursor-pointer ">
                                        <span className="relative">
                                            <input id="Toggle3" type="checkbox" className="hidden peer" />
                                            <div className="w-14 h-8 rounded-full shadow-inner bg-white border peer-checked:border-[#20AC90]"></div>
                                            <div className="absolute inset-y-0 left-0 w-6 h-6 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-[#C7CAD1] peer-checked:bg-[#20AC90]"></div>
                                        </span>
                                    </label>
                                </div>
                                <div className='w-full flex flex-row items-center justify-between'>
                                    <h2 className='text-[18px] font-[500] text_black_gray leading-[22px]'>Badge</h2>
                                    <label for="Toggle4" className="inline-flex items-center space-x-4 cursor-pointer ">
                                        <span className="relative">
                                            <input id="Toggle4" type="checkbox" className="hidden peer" />
                                            <div className="w-14 h-8 rounded-full shadow-inner bg-white border peer-checked:border-[#20AC90]"></div>
                                            <div className="absolute inset-y-0 left-0 w-6 h-6 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-[#C7CAD1] peer-checked:bg-[#20AC90]"></div>
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <div className='w-full flex flex-col gap-7'>
                                <div className='w-full'>
                                    <div className='w-full flex flex-row items-center justify-between'>
                                        <h2 className='text-[18px] font-[500] text_black_gray leading-[22px]'>Assignment</h2>
                                        <label for="Toggle5" className="inline-flex items-center space-x-4 cursor-pointer ">
                                            <span className="relative">
                                                <input id="Toggle5" type="checkbox" className="hidden peer" />
                                                <div className="w-14 h-8 rounded-full shadow-inner bg-white border peer-checked:border-[#20AC90]"></div>
                                                <div className="absolute inset-y-0 left-0 w-6 h-6 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-[#C7CAD1] peer-checked:bg-[#20AC90]"></div>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <div className='w-full flex flex-row items-center justify-between'>
                                        <h2 className='text-[18px] font-[500] text_black_gray leading-[22px]'>Certificate</h2>
                                        <label for="Toggle6" className="inline-flex items-center space-x-4 cursor-pointer ">
                                            <span className="relative">
                                                <input id="Toggle6" type="checkbox" className="hidden peer" />
                                                <div className="w-14 h-8 rounded-full shadow-inner bg-white border peer-checked:border-[#20AC90]"></div>
                                                <div className="absolute inset-y-0 left-0 w-6 h-6 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-[#C7CAD1] peer-checked:bg-[#20AC90]"></div>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <div className='w-full flex flex-row items-center justify-between'>
                                        <h2 className='text-[18px] font-[500] text_black_gray leading-[22px]'>Support</h2>
                                        <label for="Toggle7" className="inline-flex items-center space-x-4 cursor-pointer ">
                                            <span className="relative">
                                                <input id="Toggle7" type="checkbox" className="hidden peer" />
                                                <div className="w-14 h-8 rounded-full shadow-inner bg-white border peer-checked:border-[#20AC90]"></div>
                                                <div className="absolute inset-y-0 left-0 w-6 h-6 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-[#C7CAD1] peer-checked:bg-[#20AC90]"></div>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <div className='w-full flex flex-row items-center justify-between'>
                                        <h2 className='text-[18px] font-[500] text_black_gray leading-[22px]'>Instructor Message</h2>
                                        <label for="Toggle8" className="inline-flex items-center space-x-4 cursor-pointer ">
                                            <span className="relative">
                                                <input id="Toggle8" type="checkbox" className="hidden peer" />
                                                <div className="w-14 h-8 rounded-full shadow-inner bg-white border peer-checked:border-[#20AC90]"></div>
                                                <div className="absolute inset-y-0 left-0 w-6 h-6 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-[#C7CAD1] peer-checked:bg-[#20AC90]"></div>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='flex flex-row gap-[30px] justify-end'>
                            <button className='px-3 py-1.5 border rounded-[8px] border-[#17191C] text-[16px] font-[500] leading-[24px]'>
                                Cancel
                            </button>
                            <Link to='/dashboard/newCourse1'>
                                <button className='px-3 py-2 rounded-[8px]  text-[16px] font-[500] leading-[24px] text-white primary_green flex flex-row items-center gap-2'>
                                    Save and Next
                                    <img className='w-[12px]' src={right_arrow} alt="" />
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default AddNewCourse;