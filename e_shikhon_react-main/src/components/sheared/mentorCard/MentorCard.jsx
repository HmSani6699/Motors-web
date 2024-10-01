import React from "react";
import certificate_icon from "../../../assets/svg/certificate_icon.svg";
import badge_green from "../../../assets/svg/badge_green.svg";
import star_yellow from "../../../assets/svg/star_yellow.svg";
import train_experience from "../../../assets/svg/train_exparience.svg";
import total_student from "../../../assets/svg/total_student.svg";
import work_experience from "../../../assets/svg/work_experience.svg";
import technology_icon from "../../../assets/images/technology.png";
import upWork_logo from "../../../assets/images/upWork_logo.png";
import right_arrow_btn from "../../../assets/svg/arrow-right-btn.svg";
import { Link } from "react-router-dom";

const MentorCard = ({ data }) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  console.log(data);

  const { id, fullName, pro_pic, averageRating, experience } = data;

  return (
    <div className="w-[387px] overflow-hidden border border-[#E3E5E8] rounded-[10px]">
      <div className="">
        <div className="p-4 flex items-center gap-4 bg-[#EBF4FA]">
          <div className="relative">
            {/* <img
              src="https://img.freepik.com/premium-vector/young-man-avatar-character_24877-9475.jpg?w=740"
              alt=""
              className="relative inline-flex items-center justify-center rounded-full w-[100px] bg-[#D9D9D9]"
            /> */}

            {pro_pic?.path ? (
              <img
                className="relative inline-flex items-center justify-center rounded-full w-[100px] bg-[#D9D9D9]"
                src={`${BASE_URL}${pro_pic?.path}`}
                alt=""
              />
            ) : (
              <img
                className="relative inline-flex items-center justify-center rounded-full w-[100px] bg-[#D9D9D9]"
                alt="icon"
                src="https://img.freepik.com/premium-vector/young-man-avatar-character_24877-9475.jpg?w=740"
                layout="fill"
                objectFit="scale-down"
              />
            )}

            <img
              src={badge_green}
              alt=""
              className="absolute top-2 left-20 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white text-sm bg-white "
            />
          </div>
          <div>
            <h1 className="text-[#2E3138] text-[20px] font-[600] leading-[21px]">
              {fullName}
            </h1>
            <h1 className="text-[#2E3138] text-[14px] font-[400] leading-[18px]">
              {/* Professional UI/UX Design */}
              {experience?.[0]?.jobTitle}
            </h1>
            <div className="flex items-center gap-2">
              {averageRating && (
                <div className="justify-center md:justify-start flex items-center gap-2">
                  <img src={star_yellow} alt="" />
                  <h1 className="text-[#2E3138] text-[18px] font-[500] leading-[21px]">
                    {averageRating}
                  </h1>
                </div>
              )}
            </div>
            <h1 className="text-[#2E3138] text-[14px] font-[400] leading-[18px]">
              Digital Marketing & eCom Site <br /> Development Trainer
            </h1>
          </div>
        </div>

        <div className="p-3">
          <div className="flex items-center justify-between pb-2 border-b-2">
            <div>
              <div className="flex items-center gap-1">
                <img src={train_experience} alt="" />
                <h1 className="text-[16px] font-[600] leading-[22px] text-[#2E3138]">
                  ট্রেইনিং এক্সপেরিয়েন্স
                </h1>
              </div>
              <h1 className="mt-1 text-[16px] font-[400] leading-[22px] text-[#1D5276]">
                ৮ বছর +
              </h1>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <img src={total_student} alt="" />
                <h1 className="text-[16px] font-[600] leading-[22px] text-[#2E3138]">
                  স্টুডেন্ট সংখ্যা
                </h1>
              </div>
              <h1 className="mt-1 text-[16px] font-[400] leading-[22px] text-[#1D5276]">
                ৩৫০০+
              </h1>
            </div>
          </div>
          <div className="py-2">
            <div className="flex items-center gap-1">
              <img src={work_experience} alt="" />
              <h1 className="mt-1 text-[16px] font-[600] leading-[22px] text-[#2E3138]">
                ওয়ার্ক এক্সপেরিয়েন্স
              </h1>
            </div>

            {/* {experience?.length > 0 &&
              experience?.map((item, i) => (
                <div className="flex items-center gap-1">
                  <img src={certificate_icon} alt="" />
                  <h1 className="mt-1 text-[14px] font-[400] leading-[20px] text-[#1D5276]">
                    {item?.jobTitle}
                  </h1>
                </div>
              ))} */}
            <div className="flex items-center gap-1">
              <img src={technology_icon} alt="" />
              <h1 className="mt-1 text-[14px] font-[400] leading-[20px] text-[#1D5276]">
                আপওয়ার্ক টপ রেটেদ ফ্রিল্যান্সার
              </h1>
            </div>
            <div className="flex items-center gap-1">
              <img src={upWork_logo} alt="" />
              <h1 className="mt-1 text-[14px] font-[400] leading-[20px] text-[#1D5276]">
                আপওয়ার্ক টপ রেটেদ ফ্রিল্যান্সার
              </h1>
            </div>
          </div>
          <div className="mb-2">
            <Link to={`/mentorBooking/${id}`}>
              <button
                type="button"
                className="w-full text-center font-Baloo text-white bg-secandary_color flex items-center justify-center py-[10px] px-5  gap-2 rounded-[8px]"
              >
                বুকিং শিক্ষক
                <img src={right_arrow_btn} alt="" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
