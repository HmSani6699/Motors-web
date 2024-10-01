import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import plus_white from "../../../../assets/svg/plus_white.svg";
import down_arrow from "../../../../assets/svg/down_arrow.svg";
import file_edit from "../../../../assets/svg/file-document-edit-outline_green.svg";
import { del, get, post } from "../../../../api/axious";
import Swal from "sweetalert2";
import SuggLoading from "../../../../components/Common/SuggLoading";
import EditVideoCourse from "../Dashboard/ManageVideoCourse/EditVideoCourse";
import leftArrowIcon from "../../../../assets/svg/arrow-sm-left.svg";
import three_dot_icon from "../../../../assets/svg/dots-vertical_black.svg";
import CourseViewModal from "./ManageVideoCourse/CourseViewModal";
import { LuView } from "react-icons/lu";
import { URL } from "../../../../constants/Url";

const ManageCourse = () => {
  const [videoCourseList, setVideoCourseList] = useState([]);
  const [isUpdate, setIsUpdate] = useState(true);
  const [singleData, setSingleData] = useState({});

  const [index, setIndex] = useState("");
  const [loadingApproved, setLoadingApproves] = useState(false);
  const [loading, setLoading] = useState(true);

  const [getCourseID, setGetCourseID] = useState();
  const [courseStatus, setCourseStatus] = useState("");

  useEffect(() => {
    fetchVideoCourseList();
  }, []);

  const fetchVideoCourseList = async () => {
    setLoading(true);
    try {
      const response = await get(URL.COURSE.GET);
      console.log(response?.data, "response ======>");
      setVideoCourseList(response?.data);
    } catch (error) {
      console.log("Error creating app:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteCourse = async () => {
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
          const response = await del(`${URL.COURSE.DET}/${getCourseID}`);
          if (response) {
            fetchVideoCourseList();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
              showConfirmButton: false,
              timer: 2000,
            });
          }
        } catch (error) {
          toast.error(error?.message);
          console.log("Error creating app:", error?.message);
        }
      }
    });
  };

  const handleUpdateCourse = (data) => {
    setIsUpdate(!isUpdate);
    setSingleData(data);
  };

  useEffect(() => {
    if (courseStatus) {
      updateStatus(getCourseID);
    }
  }, [courseStatus]);

  const updateStatus = async (id, index) => {
    setIndex(index);
    const payload = {
      status: courseStatus,
    };

    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sure!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoadingApproves(true);
        console.log(payload, "payload");
        try {
          const res = await post(`api/courses/status_update/${id}`, payload);
          console.log(res, "response");
          if (res.success) {
            setCourseStatus("");
            setGetCourseID(false);
            fetchVideoCourseList();
            Swal.fire({
              title: "Status Change!",
              text: "Course Status Changed Successful.",
              icon: "success",
              showConfirmButton: false,
              timer: 2000,
            });
          }
        } catch (error) {
          toast.error("faild to Delete");
          console.log("Failed to delete/", error?.response);
        } finally {
          setLoadingApproves(false);
          setIndex("");
        }
      }
    });
    fetchVideoCourseList();
  };
  // console.log(courseStatus, "courseStatus")
  // course view functionality
  const [courseViewModal, setCourseViewModal] = useState(false);
  const [courseViewData, setCourseViewData] = useState({});
  const handleCourseView = (courseData) => {
    setCourseViewData(courseData);
    setCourseViewModal(!courseViewModal);
  };

  console.log(isUpdate);

  return (
    <div className="px-[13px] w-full lg:w-[1015px] mb-10 mx-auto">
      <div className="bg-white rounded-[10px] flex flex-row justify-between items-center p-2.5">
        <div className="flex gap-4">
          {!isUpdate && (
            <img
              className="w-[25px] "
              src={leftArrowIcon}
              onClick={() => setIsUpdate(!isUpdate)}
            />
          )}
          <h2 className="text-[28px] font-[600] text_black_gray leading-[40px]">
            {isUpdate
              ? `All Courses (${videoCourseList?.length})`
              : "Edit Course"}
          </h2>
        </div>
        <div className="flex flex-row gap-3">
          <div>
            <Link to="/admin/add-course">
              <button className="p-2.5 text-white primary_green rounded-[5px] text-[14px] font-[400] leading-[18px] flex flex-row items-center gap-1">
                <img className="w-[20px]" src={plus_white} alt="" />
                New Course
              </button>
            </Link>
          </div>
          <div>
            <button className="p-2.5 text-black bg-[#F5F5F5] rounded-[5px] text-[14px] font-[400] leading-[18px] flex flex-row items-center gap-2">
              All Course
              <img src={down_arrow} alt="" />
            </button>
          </div>
        </div>
      </div>

      {isUpdate ? (
        <div className="w-full overflow-x-auto bg-white py-5 px-2.5 rounded-[10px] mt-10">
          {loading ? (
            <div className="flex justify-center items-center h-full py-20">
              <SuggLoading />
            </div>
          ) : (
            <table
              className="w-full  text-left border-collapse w-overflow-x-auto table-auto "
              cellSpacing="0"
            >
              <tbody>
                <tr className="bg-[#F1F2F3] ">
                  <th
                    scope="col"
                    className="h-10 ps-2.5 text-[#2E3138] text-[16px] w-[200px] font-[500]"
                  >
                    Course Name
                  </th>
                  <th
                    scope="col"
                    className="h-10 ps-3 text-[#2E3138] text-[16px] font-[500] "
                  >
                    Course Category
                  </th>
                  <th
                    scope="col"
                    className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] "
                  >
                    Course Type
                  </th>
                  <th
                    scope="col"
                    className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] "
                  >
                    Course Creator
                  </th>
                  <th
                    scope="col"
                    className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] "
                  >
                    Status
                  </th>

                  <th
                    scope="col"
                    className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] text-center"
                  >
                    Action
                  </th>
                </tr>

                {videoCourseList &&
                  videoCourseList?.map((course, i) => (
                    <tr
                      key={i}
                      className={`border-b ${
                        course?.id === getCourseID
                          ? "bg-green-200"
                          : "odd:bg-gray-200"
                      }`}
                    >
                      <td className="h-10 w-[300px] ps-2.5 py-2">
                        <h1
                          alt={course?.courseTitle}
                          onClick={() => handleCourseView(course)}
                          className="text_black_gray text-[16px] font-[500] line-clamp-1 cursor-pointer "
                        >
                          {course?.courseTitle}
                        </h1>
                      </td>
                      <td className="h-10 ps-3 py-2">
                        <div>
                          <h1 className="text_black_gray text-[16px] font-[500] leading-[22px]">
                            {course?.courseCategory}
                          </h1>
                        </div>
                      </td>
                      <td className="h-10 py-2">
                        <div>
                          <h1 className="text_black_gray text-[16px] font-[500] leading-[22px]">
                            {course?.courseType}
                          </h1>
                        </div>
                      </td>
                      <td className="h-10 py-2">
                        <div>
                          <h1 className="text_black_gray text-[16px] font-[500] leading-[22px]">
                            {course?.courseCreator?.fullName}
                          </h1>
                        </div>
                      </td>

                      <td className="h-10 py-2">
                        <div>
                          <h1 className="text_black_gray text-[16px] font-[500] leading-[22px]">
                            {course?.status === "approved" ? (
                              <span className="text-green-500 font-bold bg-green-100 px-2 rounded-md">
                                {course?.status?.charAt(0)?.toUpperCase() +
                                  course?.status?.slice(1).toLowerCase() ||
                                  "N/A"}
                              </span>
                            ) : (
                              <span
                                className={`font-bold px-2 rounded-md
                                ${
                                  course?.status === "rejected" &&
                                  "text-red-500 bg-red-100"
                                }
                                ${
                                  course?.status === "hold" &&
                                  "text-blue-400 bg-blue-100"
                                }
                                ${
                                  course?.status === "lock" &&
                                  "text-cyan-400 bg-cyan-100"
                                }
                                ${
                                  course?.status === "pending" &&
                                  "text-orange-400 bg-orange-100"
                                }

                               `}
                              >
                                {course?.status?.charAt(0)?.toUpperCase() +
                                  course?.status?.slice(1).toLowerCase() ||
                                  "N/A"}
                              </span>
                            )}
                          </h1>
                        </div>
                      </td>

                      <td className="h-10 py-2">
                        <div className="flex flex-row justify-center items-center gap-2.5 relative">
                          <button onClick={() => handleUpdateCourse(course)}>
                            <img src={file_edit} alt="" />
                          </button>
                          <button onClick={() => handleCourseView(course)}>
                            <LuView className="" />
                          </button>

                          <button
                            onClick={() =>
                              getCourseID
                                ? setGetCourseID(false)
                                : setGetCourseID(course?.id)
                            }
                            className=" rounded-[5px] text-white flex justify-center items-center gap-2 transition duration-300 ease-in-out  active:scale-95"
                          >
                            {/* {loadingApproved && index === i ? (
                                <Loading />
                              ) : (
                                "Approve"
                              )} */}
                            <img src={three_dot_icon} alt="" />
                          </button>

                          {getCourseID === course?.id && (
                            <div
                              className="absolute top-7 right-0 w-[100px] bg-slate-100 shadow-md rounded-md p-1.5 z-10
                                "
                            >
                              <div className="flex flex-col gap-2">
                                <button
                                  className="text-black text-[14px] font-[400] leading-[18px] hover:bg-[#20ac90] hover:text-white rounded p-0.5"
                                  onClick={() => setCourseStatus("approved")}
                                >
                                  Approve
                                </button>
                                <button
                                  className="text-black text-[14px] font-[400] leading-[18px] hover:bg-[#20ac90] hover:text-white rounded p-0.5"
                                  onClick={() => setCourseStatus("rejected")}
                                >
                                  Reject
                                </button>
                                <button
                                  className="text-black text-[14px] font-[400] leading-[18px] hover:bg-[#20ac90] hover:text-white rounded p-0.5"
                                  onClick={() => setCourseStatus("hold")}
                                >
                                  On Hold
                                </button>
                                <button
                                  className="text-black text-[14px] font-[400] leading-[18px] hover:bg-[#20ac90] hover:text-white rounded p-0.5"
                                  onClick={() => setCourseStatus("lock")}
                                >
                                  Lock
                                </button>
                                <button
                                  className="text-black text-[14px] font-[400] leading-[18px] hover:bg-[#20ac90] hover:text-white rounded p-0.5"
                                  onClick={handleDeleteCourse}
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}
        </div>
      ) : (
        <div className="w-full overflow-x-auto py-5 px-2.5  mt-5">
          <EditVideoCourse
            singleData={singleData}
            setIsUpdate={setIsUpdate}
            fetchVideoCourseList={fetchVideoCourseList}
          />
        </div>
      )}

      {/* <div className="grid grid-cols-2 gap-10 py-8">
        <ManageCourseCard img={course_img} />
        <ManageCourseCard img={course_img1} />
        <ManageCourseCard img={course_img2} />
        <ManageCourseCard img={course_img3} />
        <ManageCourseCard img={course_img1} />
        <ManageCourseCard img={course_img} />

      </div> */}

      {courseViewModal && (
        <CourseViewModal
          courseViewData={courseViewData}
          courseViewModal={courseViewModal}
          setCourseViewModal={setCourseViewModal}
        />
      )}
    </div>
  );
};

export default ManageCourse;
