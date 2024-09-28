import React from "react";
import blogBanner from "../../../../public/images/blogBanner.png";

const BlogDetailsBanner = () => {
  return (
    <div>
      <h2 className="lg:text-[48px] md:text-[32px] text-[24px] mb-[16px] text-center md:text-left lg:text-left font-[700] leading-[28px] md:leading-[38px] lg:leading-[57px] md:mb-[32px] lg:mb-[32px]">
        The Evolution of Automotive Design: A Journey Through Time
      </h2>
      <p className="lg:text-[24px] font-[400] leadnig-[28px] text-[#141414] lg:mb-[48px] mb-[24px] text-center md:text-left lg:text-left">
        Automotive design is more than just aesthetics—it's a reflection of
        technological advancements, cultural shifts, and changing consumer
        preferences. From the early days of motor vehicles to the sleek,
        aerodynamic models we see today, the journey of automotive design is one
        of innovation, artistry, and engineering marvels. In this blog, we
        explore how car design has evolved over the decades, highlighting key
        milestones and iconic designs that have shaped the industry.
      </p>
      <div className="w-full md:h-[340px] lg:h-[486px] h-[193px] rounded-[8px]">
        <img className="rounded-[8px] h-full w-full" src={blogBanner} alt="" />
      </div>
    </div>
  );
};

export default BlogDetailsBanner;
