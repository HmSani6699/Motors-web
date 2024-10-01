import React, { useEffect, useState } from "react";
import star_icon from "../../assets/svg/star.svg";
import course_icon from "../../assets/svg/course_icon.svg";
import students_icon from "../../assets/svg/studens.svg";
import facebook from "../../assets/svg/fb-color.svg";
import linkedin from "../../assets/svg/lindein-color.svg";
import github from "../../assets/svg/github.svg";
import { useNavigate } from "react-router-dom";
import fb_icon from "../../assets/svg/fb-color.svg";
import messenger_icon from "../../assets/svg/fb_messenger.svg";
import whatsapp_icon from "../../assets/svg/whatsapp.svg";
import linkedin_icon from "../../assets/svg/lindein-color.svg";
import github_icon from "../../assets/svg/gitHub_coloer.svg";

const MentorCard = ({ allMentorData }) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();
  const [totalExperience, setTotalExperience] = useState(0);
  // navigate("/userInformation", { state: data_send });   {`${BASE_URL}${item?.thumbLinePicPath.path}`}

  console.log(allMentorData);

  // ======> get total experience <=====//

  useEffect(() => {
    if (allMentorData) {
      getTotalExperience(allMentorData.experience);
    }
  }, [allMentorData]);

  const getTotalExperience = (data) => {
    const totalExperience = data?.reduce(
      (acc, item) => acc + Number(item.totalExperience),
      0
    );

    setTotalExperience(totalExperience);
  };

  console.log(totalExperience);

  return (
    <article
      onClick={() => navigate(`/mentorDetails/${allMentorData?.id}`)}
      className="bg-[#0A1D29] p-[6px] rounded-[10px] min-w-[246px] h-[353px] cursor-pointer"
    >
      <div className="relative w-full h-[199px] rounded-t-[10px] overflow-hidden bg-[#EBF4FA]">
        {allMentorData?.pro_pic ? (
          <img src={`${BASE_URL}${allMentorData?.pro_pic.path}`} alt="image" />
        ) : (
          <img
            alt="icon"
            src="https://img.freepik.com/premium-vector/young-man-avatar-character_24877-9475.jpg?w=740"
            layout="fill"
            objectFit="scale-down"
          />
        )}
      </div>
      <div className="font-Baloo  text-white">
        <h4 className="leading-[28px] font-[600] text-lg text-center mt-2">
          {allMentorData?.fullName}
        </h4>

        <div className="flex justify-center items-center gap-1">
          <p className="leading-[18px] font-[400] text-sm">ওয়েব ডিজাইনার</p>
          <div className="flex gap-1 items-center">
            <img alt="icon" src={star_icon} className="mb-1" />
            <p className="leading-[18px] font-[400] text-sm mt-1">
              {allMentorData?.averageRating.toString().slice(0, 3)}
            </p>
          </div>
        </div>

        <p className="leading-[14px] font-[300] text-xs text-center text-[#F2F2F2] mt-1">
          {totalExperience || 0} বছর+ ধরে ইন্ডাস্ট্রিতে কাজ করছি এবং <br />
          {allMentorData?.about?.students > 0 ? (
            <>{allMentorData?.about?.students}</>
          ) : (
            " 0 "
          )}
          + ছাত্রছাত্রীদের শেখানোর সুযোগ হয়েছে।
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
            <p className="leading-[18px] font-[400] text-sm mt-1 text-white">
              {allMentorData?.about?.courses} টা ব্যাচ
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
              {allMentorData?.about?.students}+ Students
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 mt-1">
          {allMentorData.social_connect?.length > 0 &&
            allMentorData.social_connect.map((item, i) => {
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
    </article>
  );
};

export default MentorCard;
