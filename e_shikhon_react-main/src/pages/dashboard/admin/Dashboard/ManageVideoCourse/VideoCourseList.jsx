import React, { useEffect, useState } from "react";
import file_edit from "../../../../../assets/svg/file-document-edit-outline_green.svg";
import delete_red from "../../../../../assets/svg/delete-sweep-outline_red.svg";
import { del, get, post } from "../../../../../api/axious";
import Swal from "sweetalert2";
import SuggLoading from "../../../../../components/Common/SuggLoading";
import EditVideoCourse from "./EditVideoCourse";
import leftArrowIcon from "../../../../../assets/svg/arrow-sm-left.svg";
import Loading from "../../../../../components/sheared/Loading";
import { URL } from "../../../../../constants/Url";

const VideoCourseList = () => {
  const [videoCourseList, setVideoCourseList] = useState([]);
  const [isUpdate, setIsUpdate] = useState(true);
  const [singleData, setSingleData] = useState({});

  const [index, setIndex] = useState("");
  const [loadingApproved, setLoadingApproves] = useState(false);
  const [loading, setLoading] = useState(true);

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

  const handleDeleteBatch = async (id) => {
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
            fetchVideoCourseList();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        } catch (error) {
          toast.error(error?.message);
          console.log("Error creating app:", error?.message);
        }
      }
    });
  };

  const handleUpdateBatch = (data) => {
    setIsUpdate(!isUpdate);
    setSingleData(data);
    console.log(batchData);
  };

  const updateStatus = async (id, index) => {
    setIndex(index);
    const payload = {
      status: "approved",
    };

    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes Approve!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoadingApproves(true);
        try {
          const res = await post(`api/courses/status_update/${id}`, payload);
          console.log(res, "response");
          if (res.success) {
            fetchVideoCourseList();
            Swal.fire({
              title: "Approved!",
              text: "Course Approved Successful.",
              icon: "success",
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
  };

  return (
    <div className="px-[13px] w-full lg:w-[1100px] mb-10 mx-auto">
      <div className="bg-white rounded-[10px] flex justify-between p-2.5">
        <div className="flex gap-2">
          {!isUpdate && (
            <img
              className="w-[25px] "
              src={leftArrowIcon}
              onClick={() => setIsUpdate(!isUpdate)}
            />
          )}
          <h2 className="text-[28px] font-[600] text_black_gray leading-[40px] ">
            {isUpdate ? "Manage All Video Course" : "Edit Course"}
          </h2>
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
                    className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] text-center"
                  >
                    Course Created
                  </th>
                  <th
                    scope="col"
                    className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] "
                  >
                    Course Level
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
                    <tr key={i}>
                      <td className="h-10 ps-2.5 py-2">
                        <h1 className="text_black_gray text-[16px] font-[500]">
                          {course?.courseTitle}
                        </h1>
                      </td>
                      <td className="h-10 py-2">
                        <div>
                          <h1 className="text_black_gray text-[16px] font-[500] leading-[22px] text-center">
                            {course?.createdAt?.slice(0, 10)}
                          </h1>
                        </div>
                      </td>
                      <td className="h-10 py-2">
                        <div>
                          <h1 className="text_black_gray text-[16px] font-[500] leading-[22px]">
                            {course?.courseLevel}
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
                              <span className="text-yellow-500 font-bold bg-yellow-100 px-2 rounded-md">
                                {course?.status?.charAt(0)?.toUpperCase() +
                                  course?.status?.slice(1).toLowerCase() ||
                                  "N/A"}
                              </span>
                            )}
                          </h1>
                        </div>
                      </td>

                      <td className="h-10 py-2">
                        <div className="flex flex-row justify-center items-center gap-2.5">
                          <button onClick={() => handleUpdateBatch(course)}>
                            <img src={file_edit} alt="" />
                          </button>
                          <button onClick={() => handleDeleteBatch(course?.id)}>
                            <img src={delete_red} alt="" />
                          </button>
                          {course?.status === "pending" && (
                            <button
                              onClick={() => updateStatus(course?.id, i)}
                              className="px-4 py-1 bg-[#20AC90] rounded-[5px] text-white flex justify-center items-center gap-2 transition duration-300 ease-in-out  active:scale-95"
                            >
                              {loadingApproved && index === i ? (
                                <Loading />
                              ) : (
                                "Approve"
                              )}
                            </button>
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
          <EditVideoCourse singleData={singleData} setIsUpdate={setIsUpdate} />
        </div>
      )}
    </div>
  );
};

export default VideoCourseList;
