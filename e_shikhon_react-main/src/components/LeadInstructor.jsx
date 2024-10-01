import React from "react";
import gold_star_icon from "../assets/images/gold_star_badge.png";
import star_yellow from "../assets/svg/star_yellow.svg";
import fb_icon from "../assets/svg/fb-color.svg";
import messenger_icon from "../assets/svg/fb_messenger.svg";
import whatsapp_icon from "../assets/svg/whatsapp.svg";
import linkedin_icon from "../assets/svg/lindein-color.svg";
import github_icon from "../assets/svg/gitHub_coloer.svg";
import layer_icon from "../assets/svg/layer.svg";
import tow_user_icon from "../assets/svg/tow_users_gray_fill.svg";
import { Link } from "react-router-dom";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const LeadInstructor = ({ inst }) => {
  return (
    <div className="p-2.5 bg-[#F1F2F3] rounded-[10px]">
      <div className="flex flex-row items-center gap-2.5">
        <div>
          <img src={gold_star_icon} alt="" />
        </div>
        <h3 className="text_black text-[20px] lg:text-[24px] font-[600] leading-[28px] lg:leading-[32px] ">
          Lead Instructor
        </h3>
      </div>
      <div className="p-2.5 border border-solid border-white rounded-[10px]">
        <div>
          <div className="flex flex-col gap-2 rounded-[10px]">
            <div className="bg-[#D6E9F5] w-[75px] lg:w-16 mx-auto rounded-[50px] overflow-hidden">
              {inst?.instructor?.pro_pic ? (
                <img
                  src={`${BASE_URL}${inst?.instructor?.pro_pic?.path}`}
                  alt="image"
                  className="w-full h-full"
                />
              ) : (
                <img
                  alt="icon"
                  src="https://img.freepik.com/premium-vector/young-man-avatar-character_24877-9475.jpg?w=740"
                  layout="fill"
                  objectFit="scale-down"
                />
              )}
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <div className="flex flex-row items-center justify-center gap-2.5">
                {/* <Link  >
                  <h1 className="text_black text-[18px] font-[600] leading-[28px]">
                    {inst?.instructor?.fullName}
                  </h1>
                </Link> */}
                <Link to={`/mentorDetails/${inst?.instructor?.id}`} >
                  <h1 className="text_black text-[18px] font-[600] leading-[28px]">
                    {inst?.instructor?.fullName}
                  </h1>
                </Link>

                <div className="flex items-center gap-1">
                  <img src={star_yellow} alt="" />
                  <h1 className="text_black_gray text-[14px] mt-[6px] font-[400] leading-[18px]">
                    {inst?.instructor?.averageRating > 0
                      ? parseFloat(inst?.instructor?.averageRating || 0)
                      : 0}
                  </h1>
                </div>
              </div>
              <div className="flex flex-row items-center gap-2">
                {inst?.instructor?.experience?.length > 0 &&
                  inst?.instructor?.experience?.map((item, i) => (
                    <React.Fragment key={i}>
                      <h1 className="text_black_gray text-[14px] font-[500] leading-[18px]">
                        {item?.jobTitle}
                      </h1>
                      <hr className="w-[1px] h-[10px] border-solid border-s border-[#C7CAD1]" />
                    </React.Fragment>
                  ))}
              </div>
              <div>
                <h1 className="text_black_gray text-[12px] font-[400] leading-[14px] text-center">
                  1 বছর+ ধরে ইন্ডাস্ট্রিতে কাজ করছি এবং
                  {inst?.batch_student_count > 0 ? (
                    <>{inst?.batch_student_count}</>
                  ) : (
                    " 0 "
                  )}
                  + ছাত্রছাত্রীদের শেখানোর সুযোগ হয়েছে।
                </h1>
              </div>
            </div>
            <div className="flex  justify-between w-full sm:max-w-[300px] mx-auto">
              <div className="flex flex-row gap-2">
                <img className="w-4" src={layer_icon} alt="" />
                <h1 className="text_black_tow text-[14px] font-[400] leading-[18px]">
                  {inst?.batch_count > 0 ? (
                    <>
                      {inst?.batch_count}
                      টা ব্যাচ
                    </>
                  ) : (
                    "0  টা ব্যাচ"
                  )}
                </h1>
              </div>
              <div className="flex flex-row gap-1.5">
                <img className="w-4" src={tow_user_icon} alt="" />
                <h1 className="text_black_tow text-[14px] font-[400] leading-[18px]">
                  {inst?.batch_student_count > 0 ? (
                    <>
                      {inst?.batch_student_count}
                      Students
                    </>
                  ) : (
                    "0  students"
                  )}
                </h1>
              </div>
            </div>
            <hr className="w-full h-[1px] border-b border-solid border_gray" />
            <div className="flex items-center gap-5 justify-center">
              {inst?.instructor?.social_connect?.length > 0 &&
                inst?.instructor?.social_connect.map((item, i) => {
                  // Check if fbLink is defined
                  const fbLink = item?.fbLink || "";
                  console.log(fbLink.includes("facebook"));

                  return (
                    <>
                      {fbLink.includes("facebook") ? (
                        <img src={fb_icon} alt="Facebook" />
                      ) : fbLink.includes("messenger") ? (
                        <img src={messenger_icon} alt="Messenger" />
                      ) : fbLink.includes("whatsapp") ? (
                        <img src={whatsapp_icon} alt="WhatsApp" />
                      ) : fbLink.includes("linkedin") ? (
                        <img src={linkedin_icon} alt="LinkedIn" />
                      ) : fbLink.includes("github") ? (
                        <img src={github_icon} alt="GitHub" />
                      ) : null}
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadInstructor;
