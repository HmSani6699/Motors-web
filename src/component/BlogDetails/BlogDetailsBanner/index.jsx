import React from "react";
import blogBanner from "../../../../public/images/blogBanner.png";

const BlogDetailsBanner = ({ data }) => {
  const baseUrl = "http://localhost:1337";
  return (
    <div>
      <h2 className="lg:text-[48px] md:text-[32px] text-[24px] mb-[16px] text-center md:text-left lg:text-left font-[700] leading-[28px] md:leading-[38px] lg:leading-[57px] md:mb-[32px] lg:mb-[32px]">
        {data?.title}
      </h2>
      <p className="lg:text-[24px] font-[400] leadnig-[28px] text-[#141414] lg:mb-[48px] mb-[24px] text-center md:text-left lg:text-left">
        {data?.short_description}
      </p>
      <div className="w-full md:h-[340px] lg:h-[486px] h-[193px] rounded-[8px]">
        <img
          className="rounded-[8px] h-full w-full"
          src={`${baseUrl}${data?.image?.length > 0 && data?.image[0]?.url}`}
          alt=""
        />
      </div>
    </div>
  );
};

export default BlogDetailsBanner;
