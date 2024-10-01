import star_green from "../../assets/svg/star_green.svg";
import star_full_yellow from "../../assets/svg/star-full-yellow.svg";
import star_border from "../../assets/svg/star-border.svg";
import { useContext, useEffect, useState } from "react";
import InputField from "../../components/inputField/InputField";
import CheckBox from "../../components/checkbox/CheckBox";
import right_arrow_icon from "../../assets/svg/right-arrow.svg";
import down_arrow_icon from "../../assets/svg/down_arrow.svg";
import { AuthContext } from "../../layout/MainLayout";
import { del, post, put } from "../../api/axious";
import toast from "react-hot-toast";
import file_edit from "../../assets/svg/file-document-edit-outline_green.svg";
import ReviewUpdateModal from "../../components/Review/ReviewUpdateModal";
import delete_red from "../../assets/svg/delete-sweep-outline_red.svg";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const MentorReview = ({ mantorID, reviewes, handleGetMentorData }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [reviewDescription, setReviewDescription] = useState();
  const [totalRating, setTotalRating] = useState([]);
  const [isUpdateReview, setIsUpdateReview] = useState(false);
  const [singleReview, setSingleReview] = useState();
  const [rating, setRating] = useState(0);
  const [ratingHover, setRatingHover] = useState(0);
  // ========> Loaded Previous user data <=======//
  useEffect(() => {
    if (user) {
      setName(user?.fullName);
      setNumber(user?.phone_number);
    }
  }, [user]);

  // ======> handle add rating <=======//
  const handleAddRating = (index) => {
    setRating(index);
  };

  const handleMouseEnter = (currentIndex) => {
    setRatingHover(currentIndex);
  };
  const handleMouseLeave = () => {
    setRatingHover(rating);
  };

  // ======> handle add course review <=====//
  const handleAddReview_Rating = async () => {
    if (!user) {
      navigate("/login", { state: { from: location } });
      return;
    }
    if (user) {
      const payload = {
        rating: rating,
        description: reviewDescription,
        name: user?.fullName,
        mobileNo: user?.phone_number,
        user_id: user?.id,
      };

      console.log(payload);

      try {
        const res = await post(`/api/auth/review/${mantorID}`, payload);
        console.log(res);
        if (res?.success) {
          setName("");
          setNumber("");
          setReviewDescription("");
          setRating(0);
          setRatingHover(0);
          handleGetMentorData(mantorID);
          toast.success(res?.message);
        }
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
      }
    } else {
      toast.error("Please Login ");
    }
  };

  // =======> Update Review <======//
  const handleUpdateReview = async (userID) => {
    if (user) {
      const payload = {
        rating: rating,
        description: reviewDescription,
        name: user?.fullName,
        mobileNo: user?.phone_number,
        user_id: userID,
      };

      console.log(payload);

      try {
        const res = await put(`api/auth/review/update/${mantorID}`, payload);
        console.log(res);
        if (res.success) {
          setName("");
          setNumber("");
          setReviewDescription("");
          setRating(0);
          setRatingHover(0);
          handleGetMentorData(mantorID);
          setIsUpdateReview(false);
          toast.success(res?.message);
        }
      } catch (error) {
        console.log(error);
        // toast.error(error.response.data.message);
      }
    } else {
      toast.error("Please Login ");
    }
  };

  // =======> Delete Review <======//
  const handleDeleteReview = (userID) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await del(`api/auth/${mantorID}/review/${userID}/delete`);
          console.log(res);
          if (res?.success) {
            handleGetMentorData(mantorID);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        } catch (error) {
          console.error("Error deleting category:", error);
          Swal.fire({
            title: "Error!",
            text: "There was an issue deleting the category.",
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <div className="relative mt-5">
      <div className="flex items-center gap-2 py-5">
        <img src={star_green} alt="" />
        <h2 className="text_black text-[20px] lg:text-[24px] font-[600] leading-[28px] lg:leading-[32px] ">
          রিভিউ ({reviewes?.length || 0})
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
                value={reviewDescription}
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
                defValue={user?.fullName}
              />
              <InputField
                title="মোবাইল নম্বর"
                placeholder="মোবাইল নম্বর"
                setValue={setNumber}
                defValue={user?.phone_number}
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
        {reviewes?.length > 0 && (
          <div className="flex flex-col gap-5">
            <hr className="h-0 border-b border-solid border-[#C7CAD1] grow" />

            {reviewes?.slice(0, 6)?.map((item, i) => (
              <div key={i}>
                <div>
                  {/* <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text_black text-[20px] font-[500] leading-[21px]">
                        {item?.name}
                      </h2>
                      <h1 className="text_black text-[14px] font-[400] leading-[21px]">
                        {reviewes?.data?.courseTitle}
                      </h1>
                    </div>
                    <div className="hidden md:flex gap-2 items-center cursor-pointer mt-[10px] mb-[20px]">
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
                  </div> */}

                  <div className=" flex justify-between ">
                    <div>
                      <div>
                        <h2 className="text_black text-[20px] font-[500] leading-[21px]">
                          {item?.name}
                        </h2>
                        {/* <h1 className="text_black text-[14px] font-[400] leading-[21px]">
                          {courseData?.data?.courseTitle}
                        </h1> */}
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

                  <h1 className="text_black text-[16px] font-[400] leading-[22px] mt-2.5">
                    {item?.description}
                  </h1>
                </div>
                {i !== reviewes?.length - 1 && (
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

      {/* ====> review update modal <===== */}
      {isUpdateReview && (
        <ReviewUpdateModal
          setIsUpdateReview={setIsUpdateReview}
          data={singleReview}
          setReviewDescription={setReviewDescription}
          setName={setName}
          setNumber={setNumber}
          ratingHover={ratingHover}
          rating={rating}
          setRating={setRating}
          setRatingHover={setRatingHover}
          handleAddRating={handleAddRating}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          handleUpdateCourseReview={handleUpdateReview}
        />
      )}
    </div>
  );
};

export default MentorReview;
