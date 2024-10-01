import React from 'react';
import form_bg from "../../assets/images/form_bg.png"
import Wrapper from '../../components/sheared/Wrapper';
import InputField from '../../components/inputField/InputField';
import SelectInput from '../../components/inputField/SelectInput';
import { scrollToTop } from '../../api/helper';
import right_arrow from "../../assets/svg/arrow-right-btn.svg";
const Form = () => {
    scrollToTop();
    return (
        <>
            <div className='max-w-[1540px] mx-auto bg-[#1A5275]'>
                <img className='mx-auto' src={form_bg} alt="" />
            </div>
            <Wrapper>
                <div className='py-16 px-32 flex flex-col gap-8'>
                    <div className='flex flex-row gap-20'>
                        <div className=''>
                            <h1 className='text-[16px] md:text-[24px] font-[600] leading-[32px] text-[#2E3138]'>Basic</h1>
                            <h1 className='w-[380px] text-[16px] md:text-[14px] font-[400] leading-[18px] text-[#2E3138]'>Having an up to date email address attached to your account your account is a great step toward improve account security</h1>
                        </div>
                        <div className='w-full flex flex-col gap-6'>
                            <InputField
                                title='Email Address'
                                setValue=''
                                value=''
                                placeholder='Email'
                            />
                            <InputField
                                title='Full Name'
                                setValue=''
                                value=''
                                placeholder='Full Name'
                            />
                            <InputField
                                title='Mobile Number'
                                setValue=''
                                value=''
                                placeholder='Mobile Number'
                            />
                            <InputField
                                title='Website/Facebook *'
                                setValue=''
                                value=''
                                placeholder='URL link'
                            />

                        </div>
                    </div>

                    <hr className="h-0 border-b border-solid border-[#C7CAD1] grow" />

                    <div className='flex flex-row gap-20'>
                        <div className=''>
                            <h1 className='text-[16px] md:text-[24px] font-[600] leading-[32px] text-[#2E3138]'>Company Information</h1>
                            <h1 className='w-[380px] text-[16px] md:text-[14px] font-[400] leading-[18px] text-[#2E3138]'>Having an up to date email address attached to your account your account is a great step toward improve account security</h1>
                        </div>
                        <div className='w-full flex flex-col gap-6'>
                            <InputField
                                title='Company Name'
                                setValue=''
                                value=''
                                placeholder='Company Name'
                            />
                            <InputField
                                title='Company Address'
                                setValue=''
                                value=''
                                placeholder='Company Address'
                            />
                            <InputField
                                title='Company Email'
                                setValue=''
                                value=''
                                placeholder='Company Email'
                            />

                            <div className='flex flex-row gap-5'>
                                <SelectInput
                                    title='Company District'
                                    setValue=''
                                    value=''
                                    placeholder='URL link'
                                /> <SelectInput
                                    title='Company Upazila'
                                    setValue=''
                                    value=''
                                    placeholder='URL link'
                                />
                            </div>
                            <div className='flex flex-row gap-5'>
                                <SelectInput
                                    title='Company Age'
                                    setValue=''
                                    value=''
                                    placeholder='URL link'
                                /> <SelectInput
                                    title='Company Employ'
                                    setValue=''
                                    value=''
                                    placeholder='URL link'
                                />
                            </div>
                            <div className='flex flex-row gap-5'>
                                <SelectInput
                                    title="Trade License's"
                                    setValue=''
                                    value=''
                                    placeholder='URL link'
                                /> <SelectInput
                                    title='Bassis members no'
                                    setValue=''
                                    value=''
                                    placeholder='URL link'
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-[14px] font-[500] leading-[18px] text-[#464A53]'>প্রতিষ্ঠানের মুল কাজ*</h1>
                                <div className='flex flex-col gap-2'>
                                    <div className='flex flex-row gap-2 items-center'>
                                        <input type="checkbox" id="some_id" />
                                        <h1 className='text-[14px] font-[400] leading-[18px] text-[#464A53]'>কম্পিউটার ও আইটি প্রশিক্ষণ</h1>
                                    </div>
                                    <div className='flex flex-row gap-2 items-center'>
                                        <input type="checkbox" id="some_id" />
                                        <h1 className='text-[14px] font-[400] leading-[18px] text-[#464A53]'>কম্পিউটার সার্ভিসিং</h1>
                                    </div>
                                    <div className='flex flex-row gap-2 items-center'>
                                        <input type="checkbox" id="some_id" />
                                        <h1 className='text-[14px] font-[400] leading-[18px] text-[#464A53]'>আইটি সেবা ও কম্পিউটার প্রশিক্ষণ</h1>
                                    </div>
                                    <div className='flex flex-row gap-2 items-center'>
                                        <input type="checkbox" id="some_id" />
                                        <h1 className='text-[14px] font-[400] leading-[18px] text-[#464A53]'>গ্রাফিক্স ডিজাইন</h1>
                                    </div>
                                    <div className='flex flex-row gap-2 items-center'>
                                        <input type="checkbox" id="some_id" />
                                        <h1 className='text-[14px] font-[400] leading-[18px] text-[#464A53]'>Others</h1>
                                        <input type="text" id="some_id" className='outline-none p-1 w-full border-b rounded' />
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-[14px] font-[500] leading-[18px] text-[#464A53]'>প্রতিষ্ঠানের এবং ল্যাবের কিছু ছবি(জিপ ফাইল করে জমা দিন)</h1>
                                <div className="p-[1px] bg-white w-[475px] rounded-[5px] border border-[#E3E5E8] mb-4">
                                    <input
                                        type="file"
                                        className="w-full text-black text-sm bg-white file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:bg-gray-100  file:text-black rounded "
                                    />
                                </div>
                            </div>
                        </div>










                    </div>
                    <div className="flex flex-row gap-[30px] justify-end w-full border-t border-[#9096A2] py-4">

                        <button className="px-3 py-1.5 bg-white rounded-[8px] text-[16px] font-[500] leading-[24px]">
                            Clear Form
                        </button>

                        <button

                            className="px-3 py-2 rounded-[8px]  text-[16px] font-[500] leading-[24px] text-white primary_green flex flex-row items-center gap-2"
                        >
                            Submit
                            <img className="w-[12px]" src={right_arrow} alt="" />
                        </button>
                    </div>
                </div>
            </Wrapper>
        </>
    );
};

export default Form;