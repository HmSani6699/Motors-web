import React, { useState } from 'react';
import down_arrow from "../../../../../assets/svg/down_arrow.svg";
import camera from "../../../../../assets/svg/camera_black.svg";
import { Link } from 'react-router-dom';
import right_arrow from "../../../../../assets/svg/arrow-right-btn.svg";

const NewCourse = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
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
                        <h2 className='text-[24px] font-[700] text_black_gray leading-[32px] mb-4'>Learners Accessibility & others</h2>
                    </div>
                    {/*  */}
                    <div className='flex flex-col gap-5 '>
                        <div className='flex flex-row w-full gap-14'>
                            <div className='w-full relative'>
                                <label htmlFor="HeadlineAct" className="text-[16px] font-[400] leading-[22px]"> Request course as </label>

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
                                <label htmlFor="HeadlineAct" className="text-[16px] font-[400] leading-[22px]"> Drip Content </label>

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
                            <div>
                                <label htmlFor="HeadlineAct" className="text-[16px] font-[400] leading-[22px]"> Request course as </label>
                                <div className='flex flex-row items-center gap-5'>
                                    <div className='w-[308px] h-[233px] border border-[#E3E5E8] rounded-[5px] bg-white flex items-center justify-center'>
                                        <button className='flex flex-col items-center '>
                                            <img className='w-[24px]' src={camera} alt="" />
                                            <h2 className='text-[16px] font-[400] text_black_gray leading-[22px]'>Image</h2>
                                        </button>

                                    </div>
                                    <h2 className='text-[16px] font-[400] text_black_gray leading-[22px]'>Recomended image format & size: 575px X 450px (1MB) <br /> Accepted image filetype: jpg, jpeg, png</h2>
                                </div>
                            </div>
                        </div>
                        <div>
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
                                <h2 className='text-[16px] font-[400] text_black_gray leading-[32px]'>Video Upload</h2>

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
                                <h2 className='text-[16px] font-[400] text_black_gray leading-[32px]'>Youtube Video</h2>

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
                                <h2 className='text-[16px] font-[400] text_black_gray leading-[32px]'>Vimeo Video</h2>

                            </div>
                        </div>
                        <div >
                            <div className='p-[1px] bg-white w-[475px] rounded-[5px] border border-[#E3E5E8] mb-4'>
                                <input type="file"
                                    className="w-full text-black text-sm bg-white file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:bg-gray-100  file:text-black rounded " />
                            </div>
                        </div>

                        <div className='flex flex-row gap-[30px] justify-end w-full pt-5  border-t border-[#9096A2]'>
                            <Link to='/manageCourse'>
                                <button className='px-3 py-1.5 border rounded-[8px] border-[#17191C] text-[16px] font-[500] leading-[24px]'>
                                    Cancel
                                </button>
                            </Link>
                            <Link to='/dashboard/newCourse2'>
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

export default NewCourse;