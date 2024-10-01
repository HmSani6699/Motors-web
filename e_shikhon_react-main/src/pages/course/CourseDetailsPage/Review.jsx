import React, { useContext } from "react";
import InputField from "../../../components/inputField/InputField";
import CheckBox from "../../../components/checkbox/CheckBox";
import right_arrow_icon from "../../../assets/svg/right-arrow.svg";
import down_arrow_icon from "../../../assets/svg/down_arrow.svg";
import star_green from "../../../assets/svg/star_green.svg";
import star_border from "../../../assets/svg/star-border.svg";
import star_full_yellow from "../../../assets/svg/star-full-yellow.svg";
import file_edit from "../../../assets/svg/file-document-edit-outline_green.svg";
import delete_red from "../../../assets/svg/delete-sweep-outline_red.svg";
import { AuthContext } from "../../../layout/MainLayout";

const Review = ({
  courseData,
  setIsUpdateReview,
  setReviewDescription,
  setName,
  setNumber,
  ratingHover,
  rating,
  handleAddRating,
  handleMouseEnter,
  handleMouseLeave,
  number,
  name,
  handleAddReview_Rating,
}) => {
  const { user } = useContext(AuthContext);
  return (
    <div id="review" className="relative">
      <div className="flex items-center gap-2 py-5">
        <img src={star_green} alt="" />
        <h2 className="text_black text-[20px] lg:text-[24px] font-[600] leading-[28px] lg:leading-[32px] ">
          রিভিউ ({courseData?.data?.review?.length})
        </h2>
      </div>
      <div className="p-2 md:p-5 border_gray border bg-white rounded-[8px]">
        {/* create review */}
        <div className="mb-[20px]">
          <h2 className="text_black text-[20px] lg:text-[24px] font-[600] leading-[28px] lg:leading-[32px] ">
            রিভিউ দেন
          </h2>
          <div className="ml-[20px]">
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

            <div>
              <p className="text-[16px] font-[400] leading-[22px]">
                রিভিউ লিখুন
              </p>
              <textarea
                onChange={(e) => setReviewDescription(e.target.value)}
                rows={8}
                className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
              ></textarea>
            </div>

            {/* <div className="flex gap-[20px] items-center w-full mt-[20px]">
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
                Save my name, email, and website in this browser for the next
                time I comment.
              </p>
            </div>

            <div className="mt-[25px]">
              <button
                onClick={() => handleAddReview_Rating()}
                type="submit"
                className="flex py-2.5 px-5 bg_green rounded-[8px] text-white text-[14px] font-[500] leading-[21px]  gap-3 items-center"
              >
                জমা দিন
                <img src={right_arrow_icon} alt="" />
              </button>
            </div>
          </div>
        </div>

        {/* all review */}
        {courseData?.data?.review?.length > 0 && (
          <div className="flex flex-col gap-5">
            <hr className="h-0 border-b border-solid border-[#C7CAD1] grow" />

            {courseData?.data?.review?.slice(0, 6)?.map((item, i) => (
              <div key={i}>
                <div>
                  <div className=" flex justify-between ">
                    <div>
                      <div>
                        <h2 className="text_black text-[20px] font-[500] leading-[21px]">
                          {item?.name}
                        </h2>
                        <h1 className="text_black text-[14px] font-[400] leading-[21px]">
                          {courseData?.data?.courseTitle}
                        </h1>
                      </div>
                      <div className="hidden md:flex gap-2 items-center cursor-pointer mt-[6px] mb-[10px]">
                        {[1, 2, 3, 4, 5].map((star) => {
                          const isRated = Array.from(
                            { length: item?.rating },
                            (_, index) => index + 1
                          ).some((item) => item === star);

                          console.log(isRated);
                          return (
                            <img
                              key={star}
                              className="w-[20px] cursor-pointer"
                              src={isRated ? star_full_yellow : star_border}
                              alt=""
                            />
                          );
                        })}
                      </div>
                    </div>
                    <div>
                      {user?.roles?.roleName !== "Admin" &&
                        item?.user_id === user?.id && (
                          <div className="">
                            <button
                              onClick={() => {
                                setSingleReview(item);
                                setIsUpdateReview(true);
                              }}
                            >
                              <img src={file_edit} alt="" />
                            </button>
                          </div>
                        )}
                    </div>
                    {user?.roles?.roleName === "Admin" && (
                      <div className="">
                        <button
                          onClick={() => {
                            setSingleReview(item);
                            setIsUpdateReview(true);
                          }}
                          className="mr-[10px]"
                        >
                          <img src={file_edit} alt="" />
                        </button>

                        <button
                          onClick={() => handleDeleteReview(item?.user_id)}
                        >
                          <img src={delete_red} alt="" />
                        </button>
                      </div>
                    )}
                  </div>
                  <h1 className="text_black text-[16px] font-[400] leading-[22px] mt-[8px]">
                    {item?.description}
                  </h1>
                </div>
                {i !== courseData?.data?.review?.length - 1 && (
                  <hr className="h-0 border-b border-solid border-[#C7CAD1] grow mt-5" />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 -bottom-[30px] ">
        <button className=" py-1.5 px-3 bg-white rounded-[50px] flex flex-row items-center text_black_gray text-[14px] font-[500] leading-[21px] justify-center gap-3 drop-shadow-xl">
          আরো দেখুন
          <img src={down_arrow_icon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Review;
