import React from "react";
import blogBanner from "../../../../public/images/blogBanner.png";

const BlogDetailsBanner = () => {
  return (
    <div>
      <h2 className="text-[48px] font-[700] leading-[57px] lg:mb-[32px]">
        The Evolution of Automotive Design: A Journey Through Time
      </h2>
      <p className="lg:text-[24px] font-[400] leadnig-[28px] text-[#141414] mb-[48px]">
        Automotive design is more than just aesthetics—it's a reflection of
        technological advancements, cultural shifts, and changing consumer
        preferences. From the early days of motor vehicles to the sleek,
        aerodynamic models we see today, the journey of automotive design is one
        of innovation, artistry, and engineering marvels. In this blog, we
        explore how car design has evolved over the decades, highlighting key
        milestones and iconic designs that have shaped the industry.
      </p>
      <div className="w-full h-[486px]">
        <img src={blogBanner} alt="" />
      </div>
    </div>
  );
};

export default BlogDetailsBanner;
