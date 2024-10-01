import React, { useState } from 'react';
import down_arrow from "../../../../../assets/svg/down_arrow.svg";
import right_arrow from "../../../../../assets/svg/arrow-right-btn.svg";
import camera from "../../../../../assets/svg/camera_black.svg";
import { Link } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreateBundleCourse = () => {
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
                        <h2 className='text-[28px] font-[600] text_black_gray leading-[40px] p-2.5'>Create Bundle Course</h2>
                    </div>
                </div>
                {/*  */}
                <div className='py-5 px-2'>
                    <div className='flex flex-col gap-5 '>
                        <div className='flex flex-row w-full gap-14'>
                            <div className='w-full relative'>
                                <label htmlFor="HeadlineAct" className="text-[16px] font-[400] leading-[22px]">Bundles Courses Name *</label>

                                <input
                                    name="HeadlineAct"
                                    id="HeadlineAct"
                                    type='text'
                                    placeholder='Course Category'
                                    className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] rounded-[5px] input_filed_gray mt-1.5"
                                >

                                </input>

                            </div>
                            <div className='w-full relative'>
                                <label htmlFor="HeadlineAct" className="text-[16px] font-[400] leading-[22px]"> Bundle Access Period </label>

                                <input
                                    name="HeadlineAct"
                                    id="HeadlineAct"
                                    type='number'
                                    placeholder='0'
                                    className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] rounded-[5px] input_filed_gray mt-1.5"
                                >

                                </input>

                                <div className='flex justify-start mt-1'>
                                    <h1 className="text-[14px] font-[400] leading-[22px] text_black_gray"> Enrollment will expire after this number of days. Set 0 for no expiration</h1>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-row gap-[30px]'>
                            <div className='w-full '>
                                <label htmlFor="HeadlineAct" className="text-[16px] font-[400] leading-[22px]"> Regular Price * </label>

                                <input
                                    name="HeadlineAct"
                                    id="HeadlineAct"
                                    type='text'
                                    placeholder='Course Price'
                                    className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] rounded-[5px] input_filed_gray mt-1.5"
                                >

                                </input>
                            </div>
                            <div className='w-full '>
                                <label htmlFor="HeadlineAct" className="text-[16px] font-[400] leading-[22px]"> Discount Price * </label>

                                <input
                                    name="HeadlineAct"
                                    id="HeadlineAct"
                                    type='text'
                                    placeholder='Course Price'
                                    className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] rounded-[5px] input_filed_gray mt-1.5"
                                >

                                </input>
                            </div>
                            <div className='w-full '>
                                <label htmlFor="HeadlineAct" className="text-[16px] font-[400] leading-[22px]"> Course Bundle * </label>

                                <input
                                    name="HeadlineAct"
                                    id="HeadlineAct"
                                    type='text'
                                    placeholder='Course Price'
                                    className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] rounded-[5px] input_filed_gray mt-1.5"
                                >
                                    
                                </input>
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
                                    className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] rounded-[5px] input_filed_gray mt-1.5"
                                >

                                </input>
                                
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

                        <div>
                                <h1 className="text-[16px] mb-1 font-[400] leading-[22px]"> Course Thumbnail </h1>
                                <div className='flex flex-row items-center gap-5'>
                                    <div className='w-[308px] h-[233px] border border-[#E3E5E8] rounded-[5px] bg-white flex items-center justify-center'>
                                        <button className='flex flex-col items-center 
                                        '>
                                            <img className='w-[24px]' src={camera} alt="" />
                                            <h2 className='text-[16px] font-[400] text_black_gray leading-[22px]'>Image</h2>
                                        </button>

                                    </div>
                                    <h2 className='text-[16px] font-[400] text_black_gray leading-[22px]'>Recomended image format & size: 575px X 450px (1MB) <br /> Accepted image filetype: jpg, jpeg, png</h2>
                                </div>
                            </div>

                        <div className='flex justify-end w-full pt-5 border-t border-[#9096A2]'>
                        <Link to='/manageCourse'>
                            <button className='px-3 py-2 rounded-[8px]  text-[16px] font-[500] leading-[24px] text-white primary_green flex flex-row items-center gap-2'>
                                Submit
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

export default CreateBundleCourse;