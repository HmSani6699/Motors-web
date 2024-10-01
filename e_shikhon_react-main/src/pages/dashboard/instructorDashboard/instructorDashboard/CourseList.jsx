import React, { useContext, useEffect, useState } from "react";
import course_1 from "../../../../assets/images/course-img (2).png";
import course_2 from "../../../../assets/images/course-img (3).png";
import course_3 from "../../../../assets/images/course-img (1).png";
import course_4 from "../../../../assets/images/course-img (4).png";
import video_camera_icon from "../../../../assets/svg/video-camera_white.svg";
import file_certificate_icon from "../../../../assets/svg/file-document-edit-outline_white.svg";
import delete_icon from "../../../../assets/svg/delete-sweep-outline_white.svg";
import timer_11_white from "../../../../assets/svg/av-timer.svg";
import user_group from "../../../../assets/svg/user-group.svg";
import layer_white from "../../../../assets/svg/layer_white.svg";
import { Link } from "react-router-dom";
import plus_white from "../../../../assets/svg/plus_white.svg";
import { del, get } from "../../../../api/axious";
import SuggLoading from "../../../../components/Common/SuggLoading";
import EditVideoCourse from "../../admin/Dashboard/ManageVideoCourse/EditVideoCourse";
import leftArrowIcon from "../../../../assets/svg/arrow-sm-left.svg";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../layout/MainLayout";

const CourseList = () => {
  const { user } = useContext(AuthContext);

  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [courseList, setCourseList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isUpdate, setIsUpdate] = useState(true);
  const [singleData, setSingleData] = useState({});

  useEffect(() => {
    fetchCourseList();
  }, []);

  const fetchCourseList = async () => {
    setLoading(true);
    try {
      const response = await get("/api/courses/by_admin");
      console.log(response?.data, "response ======>");
      setCourseList(response?.data);
    } catch (error) {
      console.log("Error creating app:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateCourse = (data) => {
    setIsUpdate(!isUpdate);
    setSingleData(data);
  };

  const handleDeleteCourse = async (id) => {
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
          const response = await del(`api/courses/destroy/${id}`);
          if (response) {
            fetchCourseList();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
              showConfirmButton: false,
            });
          }
        } catch (error) {
          toast.error(error?.message);
          console.log("Error creating app:", error?.message);
        }
      }
    });
    fetchCourseList();
  };
  console.log(courseList, user?.id);
  return (
    <>
      <div className="w-full max-w-[1015px] mx-auto px-[13px]">
        <div className="border-b pb-5 border-[#C7CAD1] flex flex-row items-center justify-between">
          <div className="flex items-center justify-center gap-2.5">
            {!isUpdate && (
              <img
                className="w-[25px] cursor-pointer"
                src={leftArrowIcon}
                onClick={() => setIsUpdate(!isUpdate)}
              />
            )}
            <h2 className="text-[36px] font-[600] text_black_gray leading-[40px]">
              কোর্স লিস্ট{" "}
            </h2>
          </div>

          {isUpdate && (
            <div>
              <Link to="/instructor/add-course">
                <button className="p-2.5 text-white primary_green rounded-[5px] text-[14px] font-[400] leading-[18px] flex flex-row items-center gap-1">
                  <img className="w-[20px]" src={plus_white} alt="" />
                  New Course
                </button>
              </Link>
            </div>
          )}
        </div>

        {/* list */}

        {isUpdate ? (
          <div className="w-full overflow-x-auto px-2.5 rounded-[10px] ">
            {loading ? (
              <div className="flex justify-center items-center h-full my-[200px]">
                {" "}
                <SuggLoading />
              </div>
            ) : (
              <div className="py-5 flex flex-col gap-10">
                {courseList
                  ?.filter((course) => course?.courseCreator?.id === user?.id)
                  ?.map((courseData, index) => (
                    <div key={index} className="flex flex-row ">
                      <div className="w-[356px] h-[220px]">
                        <img
                          className="h-full w-full object-fit rounded-s-[10px]"
                          src={`${BASE_URL}${courseData?.thumbLinePicPath?.path}`}
                          alt=""
                        />
                      </div>
                      <div className="w-[625px] h-[220px] p-4 bg-[#0A1D29] rounded-e-[10px]">
                        <div className="px-2 py-1.5 flex flex-row justify-between border border-[#5D636F] rounded-[20px]">
                          <div className="flex flex-row gap-1.5">
                            <img src={video_camera_icon} alt="" />
                            <h1 className="text-[#C7CAD1] text-[14px] font-[400]">
                              Video Course
                            </h1>
                          </div>
                          <div className="flex flex-row gap-1.5">
                            <img src={timer_11_white} alt="" />
                            <h1 className="text-[#C7CAD1] text-[14px] font-[400]">
                              Duration
                            </h1>
                          </div>
                          <div className="flex flex-row gap-1.5">
                            <img src={user_group} alt="" />
                            <h1 className="text-[#C7CAD1] text-[14px] font-[400]">
                              Enroll
                            </h1>
                          </div>
                          <div className="flex flex-row gap-1.5">
                            <img className="w-4" src={layer_white} alt="" />
                            <h1 className="text-[#C7CAD1] text-[14px] font-[400]">
                              Batch
                            </h1>
                          </div>
                        </div>
                        <div className="py-1 mt-1">
                          <h2 className="text-[18px] font-[600] text-white leading-[28px]">
                            {courseData?.courseTitle}
                          </h2>
                        </div>
                        <div className="flex items-center justify-between overflow-hidden">
                          <div className="flex flex-col gap-2">
                            <div>
                              <div
                                className={` text-center py-2.5 text-[16px] font-[500] rounded-[8px] 
                                                                    ${courseData?.status ===
                                  "approved" &&
                                  "text-green-500 bg-green-100"
                                  }
                                                                    ${courseData?.status ===
                                  "rejected" &&
                                  "text-red-500 bg-red-100"
                                  }
                                                                    ${courseData?.status ===
                                  "hold" &&
                                  "text-blue-400 bg-blue-100"
                                  }
                                                                    ${courseData?.status ===
                                  "lock" &&
                                  "text-cyan-400 bg-cyan-100"
                                  }
                                                                    ${courseData?.status ===
                                  "pending" &&
                                  "text-orange-400 bg-orange-100"
                                  }
                                                                    `}
                              >
                                {courseData?.status?.charAt(0)?.toUpperCase() +
                                  courseData?.status?.slice(1).toLowerCase() ||
                                  "N/A"}
                              </div>
                            </div>
                            <div className="flex flex-row gap-2.5">
                              <h2 className="text-[16px] font-[500] text-[#9096A2] leading-[22px]">
                                ৳ <strike>{courseData?.regularPrice} </strike>
                              </h2>
                              <h2 className="text-[16px] font-[500] text-[#53DFC3] leading-[22px]">
                                ৳ {courseData?.sellPrice}
                              </h2>
                            </div>
                            <div className="flex items-center gap-[30px]">
                              {courseData?.status === "lock" ? (
                                ""
                              ) : (
                                <>
                                  {" "}
                                  <button
                                    onClick={() =>
                                      handleUpdateCourse(courseData)
                                    }
                                    className="flex flex-row gap-1.5"
                                  >
                                    <img src={file_certificate_icon} alt="" />
                                    <h2 className="text-[14px] font-[400] text-[#FFF] leading-[22px]">
                                      Edit
                                    </h2>
                                  </button>
                                  <button
                                    onClick={() =>
                                      handleDeleteCourse(courseData?.id)
                                    }
                                    className="flex flex-row gap-1.5"
                                  >
                                    <img src={delete_icon} alt="" />
                                    <h2 className="text-[14px] font-[400] text-[#FFF] leading-[22px]">
                                      Delete
                                    </h2>
                                  </button>{" "}
                                </>
                              )}
                            </div>
                          </div>
                          <div>
                            <div className="flex flex-col gap-2">
                              <button className="text-white px-9 py-1.5 text-[14px] font-[500] leading-[21px] rounded-[6px] primary_green ">
                                Resource
                              </button>
                              <button className="text-white px-9 py-1.5 text-[14px] font-[500] leading-[21px] rounded-[6px] bg-[#1E567B] ">
                                Quiz
                              </button>
                              <button className="text-white px-9 py-1.5 text-[14px] font-[500] leading-[21px] rounded-[6px] bg-[#C47F08] ">
                                Assignment
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        ) : (
          <div className="w-full overflow-x-auto py-5 px-2.5  mt-5">
            <EditVideoCourse
              singleData={singleData}
              setIsUpdate={setIsUpdate}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default CourseList;
