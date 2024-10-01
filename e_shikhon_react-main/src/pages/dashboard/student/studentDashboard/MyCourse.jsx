import React, { useContext, useEffect, useState } from "react";
import user_circle from "../../../../assets/svg/user-circle.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../layout/MainLayout";
import { get } from "../../../../api/axious";
import SuggLoading from "../../../../components/Common/SuggLoading";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { deleteCartItem } from "../../../../hooks/localStorage";

const MyCourse = () => {
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [myCourse, setMyCourse] = useState([]);

  // useEffect(() => {
  //   if (user?.id && myCourse) {
  //     myCourse.forEach((course) => {
  //       const paymentInfo = course?.courses?.payment_info[0];
  //       if (paymentInfo) {
  //         deleteCartItem("cart", course?.batch_id, course?.course_id);
  //       }
  //     });
  //   }
  // }, [user?.id, myCourse]);

  // console.log("myCourse:", myCourse);

  useEffect(() => {
    if (user?.id) {
      getMyCourse();
    }
  }, [user?.id]);

  const getMyCourse = async () => {
    setLoading(true);
    try {
      const response = await get(`api/auth/get_user/${user?.id}`);
      setMyCourse(response?.data?.progress);
    } catch (error) {
      console.error("Error creating app:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-full max-w-[1150px] mx-auto px-[13px] ">
        <div className="flex justify-between px-6 bg-white p-2.5 rounded-[10px]">
          <div>
            <h2 className="text-[16px] md:text-[24px] lg:text-[36px] font-[600] text-[#464A53] leading-[40px]">
              আমার কোর্স
            </h2>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <button className="px-4 py-2.5 bg-[#20AC90] rounded-[5px] text-white">
              রানিং
            </button>
            <button className="px-4 py-2 border border-[#464A53] rounded-[5px]">
              কম্পিলিট
            </button>
          </div>
        </div>

        {/*  */}
        {loading ? (
          <div className="flex justify-center items-center h-full my-[200px]">
            <SuggLoading />
          </div>
        ) : (
          <div className="flex flex-wrap flex-col md:flex-row gap-5 my-7">
            {myCourse?.length > 0 ? (
              myCourse?.map((data, i) => (
                <React.Fragment key={i}>
                  {data?.courses?.courseType === "ভিডিও কোর্স" ? (
                    <div
                      key={i}
                      onClick={() => {
                        navigate(`/courseCurriculum/${data?.course_id}`);
                      }}
                      className="w-full max-w-[358px]  lg:mx-0 mx-auto rounded-[16px] cursor-pointer"
                    >
                      {/* <LazyLoadImage
                        style={{ width: "100%", objectFit: "cover" }}
                        className="rounded-t-[16px] w-full h-[220px] object-fill"
                        src={`${BASE_URL}${data?.courses.thumbLinePicPath.path}`}
                        effect="blur"
                      /> */}
                      <img
                        className="rounded-t-[16px] w-full h-[220px] object-cover"
                        src={`${BASE_URL}${data?.courses.thumbLinePicPath.path}`}
                        alt=""
                        loading="lazy"
                      />
                      <div className="p-6 bg-[#0A1D29] rounded-b-[16px]">
                        <h1 className="text-[#FFF] text-[18px] font-[600]">
                          {data?.courses?.courseTitle.length > 34
                            ? data?.courses?.courseTitle.slice(0, 34) + "..."
                            : data?.courses?.courseTitle}
                        </h1>
                        <div className="flex items-center gap-1">
                          <img src={user_circle} alt="" />
                          <h1 className="text-[#FFF] text-[14px] font-[400]">
                            {data?.courses?.courseType} .{" "}
                            {data?.batch_info?.batch_no}
                          </h1>
                        </div>
                        <div className="pt-4 flex flex-row items-center gap-3 w-full">
                          <span className="block rounded-full bg-[#E3E5E8] w-full">
                            <span
                              className="block h-4 rounded-full bg-[#20AC90] text-center text-[10px]/4 w-24"
                              style={{
                                width: `${parseInt(
                                  data?.courses?.percentage
                                )}%`,
                              }}
                            ></span>
                          </span>
                          <h2 className="text-white">{`${parseInt(
                            data?.courses?.percentage
                          )}%`}</h2>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div
                      key={i}
                      onClick={() => {
                        navigate(`/liveCourseCurriculum/${data?.batch_id}`);
                      }}
                      className="w-full max-w-[350px] lg:mx-0 mx-auto rounded-[16px] cursor-pointer "
                    >
                      {/* <LazyLoadImage
                        style={{ width: "100%", objectFit: "fill" }}
                        className="rounded-t-[16px] w-full h-[220px] object-fill"
                        src={`${BASE_URL}${data?.courses.thumbLinePicPath.path}`}
                        effect="blur"
                      /> */}

                      <img
                        className="rounded-t-[16px] w-full h-[220px] object-cover"
                        src={`${BASE_URL}${data?.courses.thumbLinePicPath.path}`}
                        loading="lazy"
                      />
                      <div className="p-6 bg-[#0A1D29] rounded-b-[16px]">
                        <h1 className="text-[#FFF] text-[18px] font-[600]">
                          {data?.courses?.courseTitle.length > 34
                            ? data?.courses?.courseTitle.slice(0, 34) + "..."
                            : data?.courses?.courseTitle}
                        </h1>
                        <div className="flex items-center gap-1">
                          <img src={user_circle} alt="" />
                          <h1 className="text-[#FFF] text-[14px] font-[400]">
                            {data?.courses?.courseType} .{" "}
                            {data?.batch_info?.batch_no}
                          </h1>
                        </div>
                        <div className="pt-4 flex flex-row items-center gap-3 w-full">
                          <span className="block rounded-full bg-[#E3E5E8] w-full">
                            <span
                              className="block h-4 rounded-full bg-[#20AC90] text-center text-[10px]/4 w-24"
                              style={{
                                width: `${parseInt(
                                  data?.courses?.percentage
                                )}%`,
                              }}
                            ></span>
                          </span>
                          <h2 className="text-white">{`${parseInt(
                            data?.courses?.percentage
                          )}%`}</h2>
                        </div>
                      </div>
                    </div>
                  )}
                </React.Fragment>
              ))
            ) : (
              <div className="flex flex-col justify-center items-center w-full my-[150px]">
                <h1 className="text-[20px]">
                  You have not purchased any Course / Batch 😱{" "}
                </h1>
                <h1 className="text-[20px]">
                  {" "}
                  Please Enroll A Course / Batch first!
                </h1>

                <Link
                  to="/course"
                  className=" mt-7 px-4 py-2.5 bg-[#20AC90] rounded-[5px] text-white"
                >
                  কোর্স দেখুন
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default MyCourse;
