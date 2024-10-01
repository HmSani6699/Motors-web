import React from 'react';
import star_icon from "../../../assets/svg/star.svg";
import course_icon from "../../../assets/svg/course_icon.svg";
import students_icon from "../../../assets/svg/studens.svg";
import facebook from "../../../assets/svg/fb-color.svg";
import linkedin from "../../../assets/svg/lindein-color.svg";
import github from "../../../assets/svg/github.svg";
const MentorCardTow = ({ img }) => {
    return (
        <article className="bg-[#0A1D29] p-[6px] rounded-[10px] w-[281px] h-[353px]">
            <div className="relative w-full h-[199px] rounded-t-[10px] overflow-hidden bg-[#EBF4FA]">
                <img alt="icon" src={img} layout="fill" objectFit="scale-down" />
            </div>
            <div className="font-Baloo  text-white">
                <h4 className="leading-[28px] font-[600] text-lg text-center mt-2">
                    নাহিদ আফ্রিদি
                </h4>

                <div className="flex justify-center items-center gap-1">
                    <p className="leading-[18px] font-[400] text-sm">ওয়েব ডিজাইনার</p>
                    <div className="flex gap-1 items-center">
                        <img alt="icon" src={star_icon} className="mb-1" />
                        <p className="leading-[18px] font-[400] text-sm mt-1">৫.০</p>
                    </div>
                </div>

                <p className="leading-[14px] font-[300] text-xs text-center text-[#F2F2F2] mt-1">
                    ৭ বছর+ ধরে ইন্ডাস্ট্রিতে কাজ করছি এবং ২ <br /> হাজার+ ছাত্রছাত্রীদের
                    শেখানোর সুযোগ হয়েছে।
                </p>
                <div className="flex justify-between items-center mt-1 px-2">
                    <div className="flex gap-2 items-center">
                        <img
                            alt="icon"
                            src={course_icon}
                            width={16}
                            height={16}
                            className="mb-1"
                        />
                        <p className="leading-[18px] font-[400] text-sm mt-1">
                            ১৪ টা ব্যাচ
                        </p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img
                            alt="icon"
                            src={students_icon}
                            width={16}
                            height={16}
                            className="mb-1"
                        />
                        <p className="leading-[18px] font-[400] text-sm mt-1">
                            2k students
                        </p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-2 mt-1">
                    <img src={facebook} alt="icon" />
                    <img src={linkedin} alt="icon" />
                    <img src={github} alt="icon" />
                </div>
            </div>
        </article>
    );
};

export default MentorCardTow;