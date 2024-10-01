import React from "react";
const BASE_URL = import.meta.env.VITE_BASE_URL;
import blog_banner from "../../../../assets/images/blog-img (2).png";
import star_green from "../../../../assets/svg/star_green.svg";
import badge_green from "../../../../assets/svg/badge_green.svg";
import star_yellow from "../../../../assets/svg/star_yellow.svg";
import close_icon from "../../../../assets/svg/close_icon.svg";
import mentor_image from "../../../../assets/images/mentor-icon.png";

const ViewBlogModal = ({ data, setModalOpen }) => {
  console.log(data);

  return (
    <div className="fixed inset-0 flex py-[50px] justify-center bg-[#8bbf96c9] ">
      <div className="bg-[#f5f5f5] w-[600px] p-[30px]  overflow-auto rounded-[10px]">
        <div className="flex justify-end mb-[30px]">
          <button onClick={() => setModalOpen(false)}>
            <img src={close_icon} alt="" />
          </button>
        </div>
        <div>
          <img
            src={`${BASE_URL}${data?.photo?.path}`}
            alt="card image"
            className="aspect-video w-full rounded-t-[24px]"
          />
        </div>
        <h3 className="text-[28px] font-[700] leading-[36px] text-[#2E3138] mt-[15px]">
          {data?.title}
        </h3>
        <div>
          <p className="text-[16px] font-[400] leading-[18px] text-[#5D636F] mt-[15px]">
            <div
              dangerouslySetInnerHTML={{
                __html: data?.description?.slice(0, 300),
              }}
            ></div>
          </p>
        </div>
        <div className="flex items-center gap-2 py-5">
          <img src={star_green} alt="" />
          <h2 className="text-[#2E3138] text-[24px] font-[600] leading-[32px]">
            Author
          </h2>
        </div>

        <div className="overflow-hidden bg-white rounded-[10px] border border-[#E3E5E8]">
          <div className="p-5">
            <div className="flex items-center gap-4">
              <div className="relative">
                {data?.author_info?.pro_pic?.path ? (
                  <img
                    src={`${BASE_URL}${data?.author_info?.pro_pic?.path}`}
                    alt=""
                    className="relative h-[100px] w-[100px] inline-flex items-center justify-center rounded-full border-2 border-white shadow-lg"
                  />
                ) : (
                  <img
                    src={mentor_image}
                    alt=""
                    className="relative h-[100px] w-[100px] inline-flex items-center justify-center rounded-full border-2 border-white shadow-lg"
                  />
                )}

                <img
                  src={badge_green}
                  alt=""
                  className="absolute top-4 left-20"
                />
              </div>
              <div>
                <h1 className="text-[#2E3138] text-[20px] font-[600] leading-[21px]">
                  {data?.author_info?.fullName}
                </h1>
                <h1 className="text-[#2E3138] text-[14px] font-[400] leading-[18px]">
                  Professional UI/UX Design
                </h1>
                <div className="flex items-center gap-2">
                  <img src={star_yellow} alt="" />
                  <h1 className="text-[#2E3138] text-[18px] font-[500] leading-[21px]">
                    {data?.averageRating || 0}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBlogModal;
