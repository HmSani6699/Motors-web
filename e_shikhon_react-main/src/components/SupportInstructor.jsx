import React from "react";
import support_like_icon from "../assets/images/support_like_circle.png";
import star_yellow from "../assets/svg/star_yellow.svg";
import fb_icon from "../assets/svg/fb-color.svg";
import messenger_icon from "../assets/svg/fb_messenger.svg";
import whatsapp_icon from "../assets/svg/whatsapp.svg";
import linkedin_icon from "../assets/svg/lindein-color.svg";
import github_icon from "../assets/svg/gitHub_coloer.svg";
import { Link } from "react-router-dom";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const SupportInstructor = ({ inst }) => {
  return (
    <div className="bg-white pt-2.5 rounded-b-[10px]">
      <div className="p-2.5 bg-[#F1F2F3] rounded-[10px] flex flex-col gap-2.5">
        <div className="flex flex-row items-center gap-2.5">
          <div>
            <img src={support_like_icon} alt="" />
          </div>
          <h3 className="text_black text-[20px] lg:text-[24px] font-[600] leading-[28px] lg:leading-[32px] ">
            Support Instructor
          </h3>
        </div>

        <div className="p-2.5 border border-white flex flex-col gap-2.5 rounded-[10px]">
          <div className="flex flex-row items-center gap-2.5">
            <div className="w-[60px] bg-[#D6E9F5] rounded-[50px] overflow-hidden">
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
            <div>
              <div className="flex flex-row items-center gap-2.5">
                {/* <h1 className="text-[#2E3138] text-[20px] font-[600] leading-[21px]">
                  {inst?.instructor?.fullName}
                </h1> */}
                <Link to={`/mentorDetails/${inst?.instructor?.id}`}>
                  <h1 className="text_black text-[18px] font-[600] leading-[28px]">
                    {inst?.instructor?.fullName}
                  </h1>
                </Link>
                <div className="flex items-center gap-1">
                  <img src={star_yellow} alt="" />
                  <h1 className="text_black_gray text-[14px] mt-[6px] font-[400] leading-[18px]">
                    {inst?.instructor?.averageRating > 0
                      ? inst?.instructor?.averageRating
                      : 0}
                  </h1>
                </div>
              </div>
              <h1 className="text_black_gray text-[14px] font-[400] leading-[22px]">
                {inst?.teacherCategory}
              </h1>
              <div className="flex items-center gap-5">
                {inst?.instructor?.social_connect?.length > 0 &&
                  inst?.instructor?.social_connect.map((item, i) => {
                    const fbLink = item?.fbLink || "";
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
    </div>
  );
};

export default SupportInstructor;
