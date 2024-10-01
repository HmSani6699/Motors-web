import React from "react";
import { CircleUser } from "../../assets/icon/CircleUser";
// import { CircleUser } from "../../../assets/icon/CircleUser";
import calender from "../../assets/svg/calender.svg";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ data }) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const { id, title, description, photo, author_info, date } = data;

  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/blogDetails/${id}`)}
      className="w-full h-[325px]  overflow-hidden rounded-[16px] bg-[#0A1D29] cursor-pointer"
    >
      <figure>
        <img
          src={`${BASE_URL}${photo?.path}`}
          alt="class image"
          className="aspect-video w-full h-[200px]"
        />
      </figure>
      <div className="ps-3 pt-3 pb-3 pe-3 ">
        <header className="mt-1">
          <h3 className="text-[18px] font-[600] text-[#FFF] line-clamp-1">{title}</h3>
        </header>
        <div className="flex items-center justify-between mt-1">
          {/* <div className='flex items-center gap-1'>
                        <CircleUser />
                        <span className='text-[#FFF] text-[14px] font-[400]'>{instructor}</span>
                    </div>
                    <div>
                        <div className='flex items-center gap-1'>
                            <YellowStar />
                            <span className='text-[#FFF] text-[14px] font-[400]' >{rating}</span>
                        </div>
                    </div> */}
          <p className="text-[#FFF] text-[14px] font-[400] flex">
            <div
              dangerouslySetInnerHTML={{
                __html: description?.slice(0, 85) + "...",
              }}
            ></div>
          </p>
        </div>

        <div className="flex items-center justify-between mt-1">
          {/* <div className='flex items-center gap-2'>
                        <span className='text-[#9096A2] text-[16px] font-[500]'>৳ <strike>{price} </strike></span>
                        <span className='text-[#53DFC3] text-[16px] font-[500]'>৳ {discountPrice}</span>
                    </div>
                    <div>
                        <div className='flex items-center gap-1'>
                            <GroupUser />
                            <span className='text-[#FFF] text-[12px] font-[400]' >{enrolled}</span>
                        </div>
                    </div> */}

          <div className="w-full flex items-center justify-between gap-5 ">
            <div className="flex items-center gap-1">
              <CircleUser />
              <span className="text-[#FFF] text-[14px] font-[400]">
                {author_info?.fullName}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <img src={calender} alt="icon" />
              <span className="text-[#FFF] text-[14px] font-[400]">
                {/* ২৪ তারিখ ২০২৩ */}
                {date}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
