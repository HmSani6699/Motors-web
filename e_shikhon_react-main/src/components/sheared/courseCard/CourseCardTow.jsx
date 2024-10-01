import React from "react";
import { CircleUser } from "../../../assets/icon/CircleUser";
import { YellowStar } from "../../../assets/icon/YellowStar";
import { GroupUser } from "../../../assets/icon/GroupUser";
import { useNavigate } from "react-router-dom";

const CourseCardTow = ({
  id,
  img,
  title,
  instructor,
  rating,
  price,
  discountPrice,
  enrolled,
}) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/courseDetails/${id}`)}
      className=" lg:w-[280px] w-full overflow-hidden rounded_teen bg-[#0A1D29] cursor-pointer"
    >
      <figure>
        <img src={img} alt="class image" className="aspect-video w-full" />
      </figure>
      <div className="ps-3 pt-3 pb-3 pe-3 ">
        <header className="mt-1">
          <h3 className="text-[18px] font-[600] text-[#FFF] ">{title}</h3>
        </header>
        <div className="flex items-center justify-between mt-1">
          <div className="flex items-center gap-1">
            <CircleUser />
            <span className="text-[#FFF] text-[14px] font-[400]">
              {instructor}
            </span>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <YellowStar />
              <span className="text-[#FFF] text-[14px] font-[400]">
                {rating}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-1">
          <div className="flex items-center gap-2">
            <span className="text-[#9096A2] text-[16px] font-[500]">
              ৳ <strike>{price} </strike>
            </span>
            <span className="text-[#53DFC3] text-[16px] font-[500]">
              ৳ {discountPrice}
            </span>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <GroupUser />
              <span className="text-[#FFF] text-[12px] font-[400]">
                {enrolled}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCardTow;
