import React, { useContext, useEffect } from "react";
import leftArrowIcon from "../../assets/svg/arrow-sm-left.svg";
import right_arrow_icon from "../../assets/svg/right-arrow.svg";
import { AuthContext } from "../../layout/MainLayout";
import InputField from "../inputField/InputField";
import CheckBox from "../checkbox/CheckBox";
import star_full_yellow from "../../assets/svg/star-full-yellow.svg";
import star_border from "../../assets/svg/star-border.svg";

const ReviewUpdateModal = ({
  setIsUpdateReview,
  data,
  setReviewDescription,
  setName,
  setNumber,
  ratingHover,
  rating,
  setRating,
  handleAddRating,
  handleMouseEnter,
  handleMouseLeave,
  handleUpdateCourseReview,
  setRatingHover,
  number,
  name,
}) => {
  useEffect(() => {
    if (data) {
      setRating(data?.rating);
      setReviewDescription(data?.description);
    }
  }, [data]);

  return (
    <div
      className={`fixed z-[100] flex items-center justify-center inset-0 bg-black/20 backdrop-blur-sm duration-100`}
    >
      <div className="bg-white p-[30px] rounded-lg">
        <div className="flex items-center mb-[30px] gap-2 ">
          <button
            onClick={() => {
              setIsUpdateReview(false);
              setRating(0);
              setRatingHover(0);
            }}
          >
            <img className="w-[25px] " src={leftArrowIcon} alt="" />
          </button>
          <h2 className=" text-[20px] font-semibold">Update Review</h2>
        </div>

        <div className="flex  justify-between ">
          <div>
            <p className="text-[16px] font-[400] leading-[22px] mt-[10px]">
              আপনার রেটিং
            </p>
            <div className="hidden md:flex gap-2 items-center cursor-pointer mt-[10px] mb-[20px]">
              {[...Array(5)]?.map((_, index) => {
                index += 1;
                const starClass =
                  index <= (ratingHover || rating) ? true : false;

                return (
                  <div
                    key={index}
                    onClick={() => handleAddRating(index)}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                    className="h-[30px] w-[30px]"
                  >
                    {starClass ? (
                      <img
                        className="w-full h-full cursor-pointer"
                        src={star_full_yellow}
                        alt=""
                      />
                    ) : (
                      <img
                        className="w-full h-full cursor-pointer"
                        src={star_border}
                        alt=""
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div>
          <p className="text-[16px] font-[400] leading-[22px]">রিভিউ লিখুন</p>
          <textarea
            // value={}
            defaultValue={data?.description}
            onChange={(e) => setReviewDescription(e.target.value)}
            rows={8}
            className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
          ></textarea>
        </div>
        {/* 
        <div className="flex gap-[20px] items-center w-full mt-[20px]">
          <InputField
            title="আপনার নাম"
            placeholder="আপনার নাম"
            setValue={setName}
            value={name}
          />
          <InputField
            title="মোবাইল নম্বর"
            placeholder="মোবাইল নম্বর"
            setValue={setNumber}
            value={number}
          />
        </div> */}

        <div className="relative flex flex-wrap items-center mt-5">
          <CheckBox />
          <p>
            Save my name, email, and website in this browser for the next time I
            comment.
          </p>
        </div>

        <div className="mt-[25px] flex justify-end">
          <button
            onClick={() => handleUpdateCourseReview(data?.user_id)}
            type="submit"
            className="flex py-2.5 px-5 bg_green rounded-[8px] text-white text-[14px] font-[500] leading-[21px]  gap-3 items-center"
          >
            জমা দিন
            <img src={right_arrow_icon} alt="" />
          </button>
        </div>
      </div>{" "}
    </div>
  );
};

export default ReviewUpdateModal;
