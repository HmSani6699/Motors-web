import React from 'react';
import img from "../../assets/images/contat-img.png";
import right_arrow_icon from "../../assets/svg/right-arrow.svg";
import SelectInput from '../../components/inputField/SelectInput';

const ContactFrom = () => {
    return (
        <>
            <div className="mt-10 flex">
                <div className="w-5/12 hidden md:flex items-center ">
                    <img alt="img" src={img} layout="fill" objectFit="cover" />
                </div>

                <div className="flex justify-center items-center w-full md:w-7/12">
                    <div className="py-20 px-5">
                        <h2 className="font-Baloo text-[#1D5276] text-xl sm:text-5xl leading-[28px] sm:leading-[32px] font-[700] mb-3 text-center md:text-start ">
                            আপনার যেকোনো প্রয়োজনে আমরা আছি আপনার পাশেই
                        </h2>
                        <p className="font-Baloo text-[#374151] text-sm sm:text-base leading-[18px] sm:leading-[24px] font-[400] mb-3 text-center md:text-start">
                            যে কোন উদ্বেগ বা অনুসন্ধান সম্পর্কে আমাদের সাথে যোগাযোগ করুন.
                        </p>
                        <form>
                            <div className="flex gap-4 mt-10 mb-4">
                                <div className="w-1/2">
                                    <label
                                        htmlFor="name"
                                        className="text-[#111827] font-Baloo text-base leading-[22px] font-[500] mb-3"
                                    >
                                        আপনার নাম
                                    </label>
                                    <br />
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="আপনার নাম"
                                        required
                                        className="w-full px-[12px] py-[10px] outline-none rounded-md border border-1 border-[#D1D5DB] shadow-sm placeholder:font-Baloo"
                                    />
                                </div>
                                <div className="w-1/2">
                                    <label
                                        htmlFor="number"
                                        className="text-[#111827] font-Baloo text-base leading-[22px] font-[500] mb-3"
                                    >
                                        মোবাইল নম্বর
                                    </label>
                                    <br />
                                    <input
                                        name="number"
                                        type="text"
                                        placeholder="মোবাইল নম্বর"
                                        id="number"
                                        required
                                        className="w-full px-[12px] py-[10px] outline-none rounded-md border border-1 border-[#D1D5DB] shadow-sm placeholder:font-Baloo"
                                    />
                                </div>
                            </div>
                            <SelectInput
                                value=''
                                setValue=''
                                title="কোর্স সমূহ"
                                placeHolder="পছন্দের কোর্স সিলেক্ট করুন"
                                options={[
                                    { id: 1, value: "অনলাইন" },
                                    { id: 2, value: "অফলাইন" },
                                    { id: 3, value: "ভিডিও কোর্স" },

                                ]}
                            />
                            {/* <label
                                className="text-[#111827] font-Baloo text-base leading-[22px] font-[500] mb-3"
                                htmlFor="course"
                            >
                                কোর্স সমূহ
                            </label> */}
                            <br />
                            {/* <input
                                name="course"
                                type="text"
                                placeholder="পছন্দের কোর্স সিলেক্ট করুন"
                                id="course"
                                required
                                className="w-full px-[12px] py-[10px] outline-none rounded-md border border-1 border-[#D1D5DB] mb-4 shadow-sm placeholder:font-Baloo"
                            /> */}
                            <label
                                className="text-[#111827] font-Baloo text-base leading-[22px] font-[500] mb-3"
                                htmlFor="description"
                            >
                                নোট
                            </label>
                            <br />
                            <textarea
                                name="description"
                                type="text"
                                placeholder="দয়া করে আমাদের জানান আপনি কি বা কোন বিষয়ে জানতে চান"
                                id="description"
                                required
                                className="w-full px-[12px] py-[10px] outline-none rounded-md border border-1 border-[#D1D5DB] h-[120px] shadow-sm placeholder:font-Baloo"
                            />
                            <div className="flex justify-center md:justify-normal">
                                <button
                                    type="submit"
                                    className="font-Baloo text-white bg-secandary_color flex items-center justify-center py-[10px] px-5  gap-2 rounded-md mt-5"
                                >
                                    জমা দিন <img src={right_arrow_icon} alt="icon" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactFrom;