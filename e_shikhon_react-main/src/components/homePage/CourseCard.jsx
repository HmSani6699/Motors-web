import React from "react";
import profile_icon from "../../assets/svg/user-circle.svg";
import star_icon from "../../assets/svg/star.svg";
import group_icon from "../../assets/svg/user-group.svg";
import { useNavigate } from "react-router-dom";

const CourseCard = ({
  id,
  img,
  title,
  mentor,
  student,
  price,
  discountPrice,
  review,
}) => {
  const navigate = useNavigate();

  return (
    <article
      className="w-[250px] cursor-pointer"
      onClick={() => navigate(`/courseDetails/${id}`)}
    >
      <div className="relative rounded-t-[10px] overflow-hidden">
        <img alt="course image" src={img} className="aspect-video h-[160px]" />
      </div>
      <div className="w-full h-[112px] bg-[#0A1D29] text-white rounded-b-[10px] flex flex-col p-3 gap-1">
        <h4 className="leading-[28px] font-[600] text-lg line-clamp-1">
          {title}
        </h4>
        <div className="flex justify-between items-center">
          <div className="flex gap-1 items-center">
            <img alt="icon" src={profile_icon} />
            <p className="leading-[18px] font-[400] text-sm">{mentor}</p>
          </div>
          <div className="flex gap-1 items-center">
            <img alt="icon" src={star_icon} />
            <p className="leading-[18px] font-[400] text-sm mt-1">
              {review?.toString()?.slice(0, 3)}
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <p className="leading-[22px] font-[500] text-base text-[#9096A2]">
              ৳ <span className="line-through ">{price}</span>
            </p>
            <p className="leading-[22px] font-[500] text-base text-[#53DFC3]">
              ৳ {discountPrice}
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <img alt="icon" src={group_icon} />
            <p className="leading-[18px] font-[400] text-xs mt-1">{student}+</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CourseCard;
