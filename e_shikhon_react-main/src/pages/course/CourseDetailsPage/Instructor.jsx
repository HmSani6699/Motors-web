import React from "react";
import layer_icon from "../../../assets/svg/layer.svg";
import mentor_icon from "../../../assets/images/mentor-icon.png";
import mentor_2 from "../../../assets/images/mentor (2).png";
import mentor_3 from "../../../assets/images/mentor (3).png";
import star_yellow from "../../../assets/svg/star_yellow.svg";
import gold_star_icon from "../../../assets/images/gold_star_badge.png";
import tow_user_icon from "../../../assets/svg/tow_users_gray_fill.svg";
import fb_icon from "../../../assets/svg/fb-color.svg";
import messenger_icon from "../../../assets/svg/fb_messenger.svg";
import whatsapp_icon from "../../../assets/svg/whatsapp.svg";
import linkedin_icon from "../../../assets/svg/lindein-color.svg";
import github_icon from "../../../assets/svg/gitHub_coloer.svg";
import support_like_icon from "../../../assets/images/support_like_circle.png";
import support_mentor_photo from "../../../assets/images/abdurrahman_post_photo.png";
import { Link, useNavigate } from "react-router-dom";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const Instructor = ({ courseData }) => {
  const navigate = useNavigate();
  return (
    <div id="instructor" className="relative ">
      <div className="hidden lg:block">
        <div className=" flex flex-row gap-2 border-b border-[#E3E5E8]">
          <div className="mt-1 ">
            <img className="w-6" src={mentor_icon} alt="" />
          </div>
          <h1 className="text_black text-[20px] lg:text-[24px] font-[600] leading-[28px] lg:leading-[32px] mb-2">
            কোর্স ইন্সট্রাক্টর
          </h1>
        </div>
        <div className="p-5 bg-white flex flex-col gap-2.5 rounded-[10px]">
          {courseData?.data?.instructor.map((instructorData, i) => {
            return (
              <div
                key={i}
                className="flex flex-row items-center gap-6 bg-[#F5F5F5] rounded-[10px]"
              >
                <div className="bg-[#D6E9F5] w-24 rounded-s-[10px] rounded-e-[5px]">
                  {instructorData?.instructor?.pro_pic?.path ? (
                    <img
                      src={`${BASE_URL}${instructorData?.instructor?.pro_pic?.path}`}
                      alt="image"
                      className="w-full h-full rounded-s-[10px] rounded-e-[5px]"
                    />
                  ) : (
                    <img
                      src="https://img.freepik.com/premium-vector/young-man-avatar-character_24877-9475.jpg?w=740"
                      layout="fill"
                      objectFit="scale-down"
                      className="w-full h-full rounded-s-[10px] rounded-e-[5px]"
                    />
                  )}
                </div>
                <div>
                  {/* <h1 className="text_black text-[20px] font-[600] leading-[21px]">
                    {instructorData?.instructor?.fullName}
                  </h1> */}
                  <Link to={`/mentorDetails/${instructorData?.instructor?.id}`}>
                    <h1 className="text_black text-[18px] font-[600] leading-[28px]">
                      {instructorData?.instructor?.fullName}
                    </h1>
                  </Link>
                  <h1 className="text_black_gray text-[16px] font-[500] leading-[22px]">
                    {instructorData?.teacherCategory}
                  </h1>
                  <div
                    className="flex items-center gap-1 cursor-pointer"
                    onClick={() =>
                      navigate(
                        `/mentorDetails/${instructorData?.instructor?.id}`
                      )
                    }
                  >
                    <img src={star_yellow} alt="" />
                    <h1 className="text_black_gray text-[14px] font-[400] leading-[18px]">
                      {instructorData?.instructor?.averageRating > 0
                        ? instructorData?.instructor?.averageRating
                        : 0}{" "}
                      ({instructorData?.instructor?.review?.length || 0})
                    </h1>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* mobile and tab view  only */}
      <div id="instructor" className="block lg:hidden">
        <div className=" flex flex-row gap-2 p-2.5 rounded-t-[10px]">
          <div className="">
            <img className="w-6" src={mentor_icon} alt="" />
          </div>
          <h1 className="text_black text-[20px] lg:text-[24px] font-[600] leading-[28px] lg:leading-[32px] ">
            কোর্স ইন্সট্রাক্টর
          </h1>
        </div>

        <div className=" rounded-b-[10px]">
          <div className="p-2.5 bg-white rounded-[10px]">
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
                  <div className="bg-[#D6E9F5] w-[75px] lg:w-16 mx-auto rounded-[50px]">
                    <img className=" rounded-[50px] " src={mentor_3} alt="" />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1">
                    <div className="flex flex-row items-center justify-center gap-2.5">
                      <h1 className="text_black text-[18px] font-[600] leading-[28px]">
                        {/* {
                    courseData?.data?.instructor[0].instructor
                      ?.fullName
                  } */}
                      </h1>
                      <div className="flex items-center gap-1">
                        <img src={star_yellow} alt="" />
                        {/* <h1 className="text_black_gray text-[14px] font-[400] leading-[18px]">
                    5.0
                  </h1> */}
                      </div>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <h1 className="text_black_gray text-[14px] font-[500] leading-[18px]">
                        Country Lead
                      </h1>
                      <hr className="w-[1px] h-[10px] border-solid border-s border-[#C7CAD1]" />
                      <h1 className="text_black_gray text-[14px] font-[500] leading-[18px]">
                        Product Manager
                      </h1>
                    </div>
                    <div>
                      <h1 className="text_black_gray text-[12px] font-[400] leading-[14px] text-center">
                        ৭ বছর+ ধরে ইন্ডাস্ট্রিতে কাজ করছি এবং ২ হাজার+
                        ছাত্রছাত্রীদের শেখানোর সুযোগ হয়েছে।
                      </h1>
                    </div>
                  </div>
                  <div className="flex  justify-between w-full sm:max-w-[300px] mx-auto">
                    <div className="flex flex-row gap-2">
                      <img className="w-4" src={layer_icon} alt="" />
                      <h1 className="text_black_tow text-[14px] font-[400] leading-[18px]">
                        ১৪ টা ব্যাচ
                      </h1>
                    </div>
                    <div className="flex flex-row gap-1.5">
                      <img className="w-4" src={tow_user_icon} alt="" />
                      <h1 className="text_black_tow text-[14px] font-[400] leading-[18px]">
                        2k students
                      </h1>
                    </div>
                  </div>
                  <hr className="w-full h-[1px] border-b border-solid border_gray" />
                  <div className="flex items-center gap-5 justify-center">
                    <img src={fb_icon} alt="" />
                    <img src={messenger_icon} alt="" />
                    <img src={whatsapp_icon} alt="" />
                    <img src={linkedin_icon} alt="" />
                    <img src={github_icon} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" pt-2.5 rounded-b-[10px]">
            <div className="p-2.5 bg-white rounded-[10px] flex flex-col gap-2.5">
              <div className="flex flex-row items-center gap-2.5">
                <div>
                  <img src={support_like_icon} alt="" />
                </div>
                <h3 className="text_black text-[20px] lg:text-[24px] font-[600] leading-[28px] lg:leading-[32px] ">
                  Support Instructor
                </h3>
              </div>
              <div className="flex flex-col sm:flex-row gap-2.5">
                <div className="w-full p-2.5 border border-[#F1F2F3] flex flex-col gap-2.5 rounded-[10px]">
                  <div className="flex flex-row items-center gap-2.5">
                    <div className="w-[60px] bg-[#D6E9F5] rounded-[50px]">
                      <img
                        className="rounded-[50px]"
                        src={support_mentor_photo}
                        alt=""
                      />
                    </div>
                    <div>
                      <div className="flex flex-row items-center gap-2.5">
                        <h1 className="text-[#2E3138] text-[20px] font-[600] leading-[21px]">
                          {
                            courseData?.data?.instructor[1]?.instructor
                              ?.fullName
                          }
                        </h1>
                        <div className="flex items-center gap-1">
                          <img src={star_yellow} alt="" />
                          <h1 className="text_black_gray text-[14px] font-[400] leading-[18px]">
                            5.0 (250)
                          </h1>
                        </div>
                      </div>
                      <h1 className="text_black_gray text-[14px] font-[400] leading-[22px]">
                        Facalty UI/UX Designer,
                      </h1>
                      <div className="flex items-center gap-5">
                        <img src={fb_icon} alt="" />
                        <img src={messenger_icon} alt="" />
                        <img src={whatsapp_icon} alt="" />
                        <img src={linkedin_icon} alt="" />
                        <img src={github_icon} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full p-2.5 border border-[#F1F2F3] flex flex-col gap-2.5 rounded-[10px]">
                  <div className="flex flex-row items-center gap-2.5">
                    <div className="w-[60px] bg-[#D6E9F5] rounded-[50px]">
                      <img className="rounded-[50px]" src={mentor_2} alt="" />
                    </div>
                    <div>
                      <div className="flex flex-row items-center gap-2.5">
                        <h1 className="text-[#2E3138] text-[20px] font-[600] leading-[21px]">
                          Md. Al Amin
                        </h1>
                        <div className="flex items-center gap-1">
                          <img src={star_yellow} alt="" />
                          <h1 className="text_black_gray text-[14px] font-[400] leading-[18px]">
                            5.0 (250)
                          </h1>
                        </div>
                      </div>
                      <h1 className="text_black_gray text-[14px] font-[400] leading-[22px]">
                        Facalty UI/UX Designer,
                      </h1>
                      <div className="flex items-center gap-5">
                        <img src={fb_icon} alt="" />
                        <img src={messenger_icon} alt="" />
                        <img src={whatsapp_icon} alt="" />
                        <img src={linkedin_icon} alt="" />
                        <img src={github_icon} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
