import React, { useCallback, useEffect, useState } from "react";
import plus_white from "../../../../assets/svg/plus_white.svg";
import file_edit from "../../../../assets/svg/file-document-edit-outline_green.svg";
import delete_red from "../../../../assets/svg/delete-sweep-outline_red.svg";
import leftArrowIcon from "../../../../assets/svg/arrow-sm-left.svg";
import InputField from "../../../../components/inputField/InputField";
import Loading from "../../../../components/sheared/Loading";
import { del, get, post, put } from "../../../../api/axious";
import moment from "moment";
import CourseSuggestion from "../../../../components/Common/CourseSuggestion";
import CurriculumInput from "../../../../components/Course/CurriculumInput";
import {
  transformCurriculumForBatch,
  transformData,
} from "../../../../api/helper";
import { RxCrossCircled } from "react-icons/rx";
import down_arrow from "../../../../assets/svg/down_arrow.svg";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import SuggLoading from "../../../../components/Common/SuggLoading";
import useAuth from "../../../../store/useAuth";
import three_dot_icon from "../../../../assets/svg/dots-vertical_black.svg";
import { LuView } from "react-icons/lu";
import BatchViewModal from "./manageBatch/BatchViewModal";
import { URL } from "../../../../constants/Url";
const API_NAME = import.meta.env.VITE_API_NAME;
const condition = API_NAME === "live";

const ManageBatch = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  const [allCourse, setAllCourse] = useState();
  const [index, setIndex] = useState("");
  const [loadingApproved, setLoadingApproves] = useState(false);

  const [showBatchForm, setShowBatchForm] = useState(false);

  const [courseId, setCourseId] = useState("");
  const [getOldCourseName, setGetOldCourseName] = useState("");
  const [scheduleTime, setScheduleTime] = useState("");
  const [seats, setSeats] = useState("");
  const [startDate, setStartDate] = useState("");
  const [dummyParticipants, setDummyParticipants] = useState("");
  const [endDate, setEndDate] = useState("");

  const [scheduleDay, setScheduleDay] = useState([]);

  const [course, setCourse] = useState(null);
  const [draggedTaskIndexAdd, setDraggedTaskIndexAdd] = useState(null);

  const [getBatchID, setGetBatchID] = useState();
  const [batchStatus, setBatchStatus] = useState("");

  const handleDragStartAdd = (index) => {
    setDraggedTaskIndexAdd(index);
  };

  const handleDragOverAdd = useCallback((event) => {
    event.preventDefault();
  }, []);

  const handleDropAdd = useCallback(
    (event, index) => {
      event.preventDefault();
      if (draggedTaskIndexAdd !== null && draggedTaskIndexAdd !== index) {
        const newItems = [...course];
        const [removed] = newItems.splice(draggedTaskIndexAdd, 1);
        const insertIndex = draggedTaskIndexAdd < index ? index : index + 1;
        newItems.splice(insertIndex, 0, removed);
        setCourse(newItems);
      }
      setDraggedTaskIndexAdd(null);
    },
    [draggedTaskIndexAdd, course]
  );

  useEffect(() => {
    if (batchStatus) {
      updateStatus(getBatchID);
    }
  }, [batchStatus]);

  const updateStatus = async (id) => {
    const payload = {
      status: batchStatus,
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
          const res = await put(`${URL.BATCH.PUT}/${id}`, payload);
          // console.log(res, "response");
          if (res.success) {
            setBatchStatus("");
            setGetBatchID(false);
            fetchBatchData();
            Swal.fire({
              title: "Approved!",
              text: "Course Approved Successful.",
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
    fetchBatchData();
  };
  // console.log(getBatchID, "getBatchID")
  //   console.log(transformData(exampleData), "exampleData ===>");
  const [course2, setCourse2] = useState("");

  const allInputReset = () => {
    setCourseId("");
    setGetOldCourseName("");
    setScheduleTime("");
    setStartDate("");
    setDummyParticipants("");
    setEndDate("");
    setSeats("");
    setCourse(null);
    setCourse2("");
    setScheduleDay([]);
  };

  // console.log(scheduleDay,scheduleTime, 'selectedDates')

  const payload = {
    course_id: courseId,
    scheduleDay: scheduleDay,
    scheduleTime: scheduleTime,
    start_date: startDate,
    seats: seats,
    end_date: endDate,
    dummy_participants: dummyParticipants,
    courseCurriculum: transformCurriculumForBatch(course),
    user_id: user?.id,
    user_role: user?.role,
  };

  const handleAddNewBatch = async () => {
    console.log(payload, "payload");
    setLoading(true);
    try {
      let res;
      if (condition) {
        res = await post("/api/batch/add", payload);
      } else {
        res = await post("/api/batch", payload);
      }
      if (res?.success) {
        fetchBatchData();
        setShowBatchForm(false);
        allInputReset();
      }
    } catch (error) {
      setLoading(false);
      console.log("Failed to post", error?.response?.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllCourse();
  }, []);

  const getAllCourse = async () => {
    try {
      const response = await post(`/api/courses/all`);
      // console.log(response, "++++++++.");
      if (response.data) {
        // const result = iTVideoAllCourse.filter(3);

        setAllCourse(response.data);
      } else {
        setAllCourse(response.data);
      }
    } catch (error) {
      console.error("Error creating app:", error);
    }
  };

  const [getBatchData, setGetBatchData] = useState([]);

  useEffect(() => {
    fetchBatchData();
  }, []);

  const fetchBatchData = async () => {
    setLoading(true);
    try {
      let response;
      if (condition) {
        response = await get("/api/batch/all");
      } else {
        response = await get("/api/batch");
      }
      if (response?.data) {
        setGetBatchData(response?.data);
      }
    } catch (error) {
      console.log("Error creating app:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClickShowBatchForm = () => {
    setShowBatchForm(true);
  };
  const handleClickHideBatchForm = () => {
    setShowBatchForm(false);
  };

  const [showSuggestion, setShowSuggestion] = useState(false);

  const [courseLoading, setCourseLoading] = useState(false);
  const [searchCourseData, setSearchCourseData] = useState([]);
  const [showCourseSuggestion, setShowCourseSuggestion] = useState(false);

  const handleCourseSuggestion = async (event) => {
    const query_text = event.target.value;

    setCourse2(query_text);
    if (query_text && query_text.length >= 4) {
      setShowCourseSuggestion(true);
      setCourseLoading(true);
      try {
        // const res = await get(`api/courses/search/${query_text}`);
        let res;
        if (condition) {
          res = await get(`api/courses/search/${query_text}`);
        } else {
          res = await get(`/api/course?searchTerm=${query_text}`);
        }
        if (res) {
          setSearchCourseData(res.data);
          setCourseLoading(false);
        }
      } catch (error) {
        setCourseLoading(false);
        console.log("Failed to get search/", error?.response?.data?.message);
      } finally {
        setCourseLoading(false);
      }
    } else {
      setShowSuggestion(false);
      setSearchCourseData([]);
    }
  };

  const handleClickSection = (setData) => {
    setData((pre) =>
      pre
        ? [...pre, { section: "", type: "section" }]
        : [{ section: "", type: "section" }]
    );
  };
  const handleClickUnit = (setData) => {
    setData((pre) =>
      pre
        ? [...pre, { unit: "", type: "unit", id: "" }]
        : [{ unit: "", type: "unit", id: "" }]
    );
  };
  const handleClickQuiz = (setData) => {
    setData((pre) =>
      pre
        ? [...pre, { quiz: "", type: "quiz", id: "" }]
        : [{ quiz: "", type: "quiz", id: "" }]
    );
  };
  const handleClickAssignment = (setData) => {
    setData((pre) =>
      pre
        ? [...pre, { assignment: "", type: "assignment", id: "" }]
        : [{ assignment: "", type: "assignment", id: "" }]
    );
  };

  const handleDelete = (index) => {
    setCourse((prevCourse) => {
      const updatedCourse = prevCourse.filter((_, i) => i !== index);
      return updatedCourse;
    });
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;

    setCourse((prevCourse) => {
      const updatedCourse = prevCourse.map((item, i) => {
        if (i === index) {
          return { ...item, [name]: value };
        }
        return item;
      });
      return updatedCourse;
    });
  };

  const daysOfWeek = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thur", "Fri"];

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;

    setScheduleDay((prevSelectedDates) => {
      if (prevSelectedDates.includes(selectedDate)) {
        return prevSelectedDates.filter((date) => date !== selectedDate);
      } else {
        return [...prevSelectedDates, selectedDate];
      }
    });
  };

  const removeSelectedDate = (dateToRemove) => {
    setScheduleDay((prevSelectedDates) =>
      prevSelectedDates.filter((date) => date !== dateToRemove)
    );
  };

  // batch update functionality
  const [getOldBatchId, setGetOldBatchId] = useState();
  const [updateBatchFromOpen, setUpdateBatchFromOpen] = useState(false);
  const [getOldCurriculum, setGetOldCurriculum] = useState([]);
  console.log(getOldCurriculum, "getOldCurriculum======>");

  const [draggedTaskIndex, setDraggedTaskIndex] = useState(null);

  const handleDragStart = (index) => {
    setDraggedTaskIndex(index);
  };

  const handleDragOver = useCallback((event) => {
    event.preventDefault();
  }, []);

  const handleDrop = useCallback(
    (event, index) => {
      event.preventDefault();
      if (draggedTaskIndex !== null && draggedTaskIndex !== index) {
        const newItems = [...getOldCurriculum];
        const [removed] = newItems.splice(draggedTaskIndex, 1);
        const insertIndex = draggedTaskIndex < index ? index : index + 1;
        newItems.splice(insertIndex, 0, removed);
        setGetOldCurriculum(newItems);
      }
      setDraggedTaskIndex(null);
    },
    [draggedTaskIndex, getOldCurriculum]
  );

  const handleUpdateDelete = (index) => {
    setGetOldCurriculum((prevCourse) => {
      const updatedCourse = prevCourse.filter((_, i) => i !== index);
      return updatedCourse;
    });
  };

  const handleUpdateInputChange = (index, event) => {
    const { name, value } = event.target;

    setGetOldCurriculum((prevCourse) => {
      const updatedCourse = prevCourse.map((item, i) => {
        if (i === index) {
          return { ...item, [name]: value };
        }
        return item;
      });
      return updatedCourse;
    });
  };

  const handleUpdateBatch = (batchData) => {
    console.log(batchData, "batchData =========>");
    setUpdateBatchFromOpen(!updateBatchFromOpen);
    setGetOldBatchId(batchData.id);
    setGetOldCourseName(batchData.course.courseTitle);
    setScheduleTime(batchData.scheduleTime);
    setStartDate(batchData.start_date?.slice(0, 10));
    setSeats(batchData.seats);
    setEndDate(batchData.end_date?.slice(0, 10));
    setDummyParticipants(batchData.dummy_participants);
    setGetOldCurriculum(transformData(batchData.courseCurriculum));
    setScheduleDay(batchData.scheduleDay);
  };
  // console.log(user, "user")

  const handleUpdateBatchData = async () => {
    const payload = {
      course_id: getOldBatchId,
      scheduleDay: scheduleDay,
      scheduleTime: scheduleTime,
      start_date: startDate,
      seats: seats,
      end_date: endDate,
      dummy_participants: dummyParticipants,
      courseCurriculum: transformCurriculumForBatch(getOldCurriculum),
      user_id: user?.id,
      user_role: user?.role,
    };
    console.log(payload, "payload");

    setLoading(true);

    try {
      const res = await put(`api/batch/update/${getOldBatchId}`, payload);

      if (res?.success) {
        toast.success(res.message);
        setUpdateBatchFromOpen(false);
        fetchBatchData();
      }
    } catch (error) {
      setLoading(false);
      toast.error("Failed to update batch");
      console.log("Failed to update batch", error?.response?.data);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteBatch = async () => {
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
          const response = await del(`api/batch/delete/${getBatchID}`);
          if (response) {
            fetchBatchData();
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
        fetchBatchData();
      }
    });
  };
  // console.log(user?.role, "user?.role")

  // batch view functionality
  const [batchViewModal, setBatchViewModal] = useState(false);
  const [batchViewData, setBatchViewData] = useState({});
  const handleBatchView = (batchData) => {
    setBatchViewData(batchData);
    setBatchViewModal(!batchViewModal);
  };

  return (
    <>
      {!showBatchForm || updateBatchFromOpen ? (
        <div className="px-[13px] w-full lg:w-[1100px] mb-10 mx-auto">
          <div className="bg-white rounded-[10px] flex justify-between p-2.5">
            <div>
              <h2 className="text-[28px] font-[600] text_black_gray leading-[40px] ">
                Manage Batch
              </h2>
            </div>
            {!updateBatchFromOpen && (
              <div>
                <button
                  onClick={handleClickShowBatchForm}
                  className="p-2.5 text-white primary_green rounded-[5px] text-[14px] font-[400] leading-[18px] flex flex-row items-center gap-1"
                >
                  <img className="w-5" src={plus_white} alt="" />
                  New Batch
                </button>
              </div>
            )}
          </div>

          {!updateBatchFromOpen && (
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
                        className="h-10 ps-2.5 text-[#2E3138] text-[16px] font-[500]"
                      >
                        Course Name
                      </th>
                      <th
                        scope="col"
                        className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] text-center"
                      >
                        Enrolled
                      </th>
                      <th
                        scope="col"
                        className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] "
                      >
                        Batch No
                      </th>
                      <th
                        scope="col"
                        className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] "
                      >
                        Schedule
                      </th>
                      <th
                        scope="col"
                        className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] "
                      >
                        Start Date
                      </th>
                      <th
                        scope="col"
                        className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] "
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="h-10 px-0 text-[#2E3138] text-[16px] font-[500]"
                      >
                        Action
                      </th>
                    </tr>

                    {getBatchData?.map((batchData, i) => (
                      <tr
                        key={i}
                        className={`border-b ${batchData?.id === getBatchID
                            ? "bg-green-200"
                            : "odd:bg-gray-200"
                          }`}
                      >
                        <td className="h-10 ps-2.5 py-2">
                          <h1 className="text_black_gray text-[16px] font-[500]">
                            {batchData?.course?.courseTitle}
                          </h1>
                        </td>
                        <td className="h-10 py-2">
                          <div>
                            <h1 className="text_black_gray text-[16px] font-[500] leading-[22px] text-center">
                              {batchData.participants}
                            </h1>
                          </div>
                        </td>
                        <td className="h-10 py-2">
                          <div>
                            <h1 className="text_black_gray text-[16px] font-[500] leading-[22px]">
                              {batchData.batch_no}
                            </h1>
                          </div>
                        </td>
                        <td className="h-10 py-2 flex">
                          {batchData?.scheduleDay.map((day, i) => (
                            <h1
                              key={i}
                              className="text_black_gray flex text-[16px] font-[500]"
                            >
                              {day}
                              {i !== batchData?.scheduleDay.length - 1
                                ? ","
                                : ""}
                            </h1>
                          ))}
                        </td>
                        <td className="h-10 py-2">
                          <h1 className="text_black_gray text-[16px] font-[500]">
                            {moment(batchData.start_date).format("ll")}
                          </h1>
                        </td>
                        <td className="h-10 py-2">
                          <div>
                            <h1 className="text_black_gray text-[16px] font-[500] leading-[22px]">
                              {batchData?.status === "approved" ? (
                                <span className="text-green-500 font-bold bg-green-100 px-2 rounded-md">
                                  {batchData?.status?.charAt(0)?.toUpperCase() +
                                    batchData?.status?.slice(1).toLowerCase() ||
                                    "N/A"}
                                </span>
                              ) : (
                                <span
                                  className={`font-bold px-2 rounded-md 
                                ${batchData?.status === "rejected" &&
                                    "text-red-500 bg-red-100"
                                    }
                                ${batchData?.status === "hold" &&
                                    "text-blue-400 bg-blue-100"
                                    }
                                ${batchData?.status === "lock" &&
                                    "text-cyan-400 bg-cyan-100"
                                    }
                                ${batchData?.status === "pending" &&
                                    "text-orange-400 bg-orange-100"
                                    }
                                `}
                                >
                                  {batchData?.status?.charAt(0)?.toUpperCase() +
                                    batchData?.status?.slice(1).toLowerCase() ||
                                    "N/A"}
                                </span>
                              )}
                            </h1>
                          </div>
                        </td>

                        <td className="h-10 py-2">
                          <div className="flex flex-row gap-2.5 relative">
                            {user?.role === 3 &&
                              batchData?.status === "lock" ? (
                              ""
                            ) : (
                              <>
                                <button
                                  onClick={() => handleUpdateBatch(batchData)}
                                >
                                  <img src={file_edit} alt="" />
                                </button>
                                <button
                                  onClick={() => handleBatchView(batchData)}
                                >
                                  <LuView />
                                </button>
                              </>
                            )}

                            {user?.role === 3 ? (
                              ""
                            ) : (
                              <button
                                onClick={() => {
                                  getBatchID
                                    ? setGetBatchID(false)
                                    : setGetBatchID(batchData?.id);
                                }}
                                className=" rounded-[5px] text-white flex justify-center items-center gap-2 transition duration-300 ease-in-out  active:scale-95"
                              >
                                <img src={three_dot_icon} alt="" />
                              </button>
                            )}

                            {getBatchID === batchData?.id && (
                              <div
                                className="absolute top-7 right-0 w-[100px] bg-slate-100 shadow-md rounded-md p-1.5 z-10
                                "
                              >
                                <div className="flex flex-col gap-2">
                                  <button
                                    className="text-black text-[14px] font-[400] leading-[18px] hover:bg-[#20ac90] hover:text-white rounded p-0.5"
                                    onClick={() => setBatchStatus("approved")}
                                  >
                                    Approve
                                  </button>
                                  <button
                                    className="text-black text-[14px] font-[400] leading-[18px] hover:bg-[#20ac90] hover:text-white rounded p-0.5"
                                    onClick={() => setBatchStatus("rejected")}
                                  >
                                    Reject
                                  </button>
                                  <button
                                    className="text-black text-[14px] font-[400] leading-[18px] hover:bg-[#20ac90] hover:text-white rounded p-0.5"
                                    onClick={() => setBatchStatus("hold")}
                                  >
                                    On Hold
                                  </button>
                                  <button
                                    className="text-black text-[14px] font-[400] leading-[18px] hover:bg-[#20ac90] hover:text-white rounded p-0.5"
                                    onClick={() => setBatchStatus("lock")}
                                  >
                                    Lock
                                  </button>
                                  <button
                                    className="text-black text-[14px] font-[400] leading-[18px] hover:bg-[#20ac90] hover:text-white rounded p-0.5"
                                    onClick={handleDeleteBatch}
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
          )}
        </div>
      ) : (
        <div className="px-[13px] w-full lg:w-[1100px] mb-10 mx-auto ">
          <div className="bg-white flex items-center gap-2 rounded-[10px] p-2.5">
            <div>
              <button onClick={handleClickHideBatchForm} className="">
                <img className="w-[25px] mt-2" src={leftArrowIcon} alt="" />
              </button>
            </div>
            <div>
              <h2 className="text-[28px] font-[600] text_black_gray leading-[40px] ">
                Add New Batch
              </h2>
            </div>
          </div>
          {/* all input  */}

          <div className="pt-10 flex flex-col gap-5 ">
            <div className="flex flex-row w-full gap-14">
              <div className="w-full">
                <label className="text-[16px] font-[400] leading-[22px]">
                  Select Course
                </label>
                <CourseSuggestion
                  obj_name="courseTitle"
                  loading={courseLoading}
                  data={searchCourseData}
                  setInput={setCourse2}
                  setAuthorId={setCourseId}
                  showSuggestion={showCourseSuggestion}
                  setShowSuggestion={setShowCourseSuggestion}
                >
                  <input
                    type="text"
                    value={course2}
                    onChange={(event) => handleCourseSuggestion(event)}
                    className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                    placeholder={`Enter Course Name`}
                  />
                </CourseSuggestion>
              </div>
            </div>
            <div className="flex flex-row w-full gap-14">
              <InputField
                value={seats}
                setValue={setSeats}
                title="Total Seats"
                type="number"
              />
              <InputField
                value={dummyParticipants}
                setValue={setDummyParticipants}
                title="Dummy Participants"
                type="number"
              />
            </div>
            <div className="flex flex-row w-full gap-14">
              <InputField
                value={startDate}
                setValue={setStartDate}
                title="Start Date"
                type="date"
              />
              <InputField
                value={endDate}
                setValue={setEndDate}
                title="End Date"
                type="date"
              />
            </div>
            <div className="flex flex-row w-full gap-14">
              <div className="w-full relative glow-container glow-card glows">
                <label className="text-[16px] font-[400] leading-[22px]">
                  Schedule Date
                </label>
                <div className="border border-[#E3E5E8]  rounded bg-slate-50 hover:border-[#7EE7D2]">
                  <select
                    value={scheduleDay}
                    onChange={handleDateChange}
                    className="w-full py-2 px-2 text-[16px] font-[400] outline-none "
                  >
                    <option value="">{"Please select"}</option>
                    {daysOfWeek.length &&
                      daysOfWeek.map((data, i) => (
                        <option key={i} value={data}>
                          {data}
                        </option>
                      ))}
                  </select>
                  <img
                    src={down_arrow}
                    alt="icon"
                    className="absolute top-[50px] right-3 transform -translate-y-3/4"
                  />
                  <div
                    className={`flex flex-row flex-wrap gap-2 px-1 ${scheduleDay.length >= 1 && "mt-1.5 mb-1.5"
                      }`}
                  >
                    {scheduleDay.map((date) => (
                      <div
                        key={date}
                        className="flex items-center gap-1.5 px-2 bg-[#9ddccf] rounded-3xl "
                      >
                        <span>{date}</span>
                        <RxCrossCircled
                          onClick={() => removeSelectedDate(date)}
                          className="text-red-500 cursor-pointer"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <InputField
                value={scheduleTime}
                setValue={setScheduleTime}
                title="Schedule Time"
                type="time"
              />
            </div>

            {/* curriculum */}

            <div className="">
              <p className="text-center">Course Curriculum</p>
              {course &&
                course.map((data, i) => (
                  <CurriculumInput
                    key={i}
                    i={i}
                    data={data}
                    handleInputChange={handleInputChange}
                    handleDelete={handleDelete}
                    handleDragStart={handleDragStartAdd}
                    handleDragOver={handleDragOverAdd}
                    handleDrop={handleDropAdd}
                  />
                ))}
            </div>
            <div className=" mx-auto ">
              <div className="flex gap-4 mt-1">
                <button
                  onClick={() => handleClickSection(setCourse)}
                  className="px-3 py-2 rounded-[4px]  text-[16px] font-[500] leading-[24px] text-white primary_green flex flex-row items-center"
                >
                  <img src={plus_white} alt="" />
                  Add Section
                </button>
                <button
                  onClick={() => handleClickUnit(setCourse)}
                  className="px-3 py-2 rounded-[4px]  text-[16px] font-[500] leading-[24px] text-white primary_green flex flex-row items-center"
                >
                  <img src={plus_white} alt="" />
                  Add Unit
                </button>
                <button
                  onClick={() => handleClickQuiz(setCourse)}
                  className="px-3 py-2 rounded-[4px]  text-[16px] font-[500] leading-[24px] text-white primary_green flex flex-row items-center"
                >
                  <img src={plus_white} alt="" />
                  Add Quiz
                </button>
                <button
                  onClick={() => handleClickAssignment(setCourse)}
                  className="px-3 py-2 rounded-[4px]  text-[16px] font-[500] leading-[24px] text-white primary_green flex flex-row items-center"
                >
                  <img src={plus_white} alt="" />
                  Add Assignment
                </button>
              </div>
            </div>

            {/* end curriculum */}
            <div className="w-full relative pt-2.5">
              <div className="flex flex-row gap-[30px] justify-center w-full pt-5 border-t border-[#9096A2]">
                <button
                  disabled={loading}
                  onClick={handleAddNewBatch}
                  className="px-3 py-2 rounded-[8px]  text-[16px] font-[500] leading-[24px] text-white primary_green flex flex-row items-center gap-2"
                >
                  {loading ? <Loading /> : "Save Batch"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {updateBatchFromOpen && (
        <div className="px-[13px] w-full lg:w-[1100px] mb-10 mx-auto ">
          <div className="bg-white flex items-center gap-2 rounded-[10px] p-2.5">
            <div>
              <button
                onClick={() => setUpdateBatchFromOpen(!updateBatchFromOpen)}
                className=""
              >
                <img className="w-[25px] mt-2" src={leftArrowIcon} alt="" />
              </button>
            </div>
            <div>
              <h2 className="text-[28px] font-[600] text_black_gray leading-[40px] ">
                Update Batch
              </h2>
            </div>
          </div>
          {/* all update input  */}

          <div className="pt-10 flex flex-col gap-5 ">
            <div className="w-full">
              <label className="text-[16px] font-[400] leading-[22px]">
                Select Course
              </label>
              <CourseSuggestion
                obj_name="courseTitle"
                loading={courseLoading}
                data={searchCourseData}
                setInput={setCourse2}
                setAuthorId={setCourseId}
                showSuggestion={showCourseSuggestion}
                setShowSuggestion={setShowCourseSuggestion}
              >
                <input
                  type="text"
                  value={getOldCourseName}
                  onChange={(event) => handleCourseSuggestion(event)}
                  className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                  placeholder={`Enter Course Name`}
                />
              </CourseSuggestion>
            </div>
            <div className="flex flex-row w-full gap-14">
              <InputField
                defValue={seats}
                setValue={setSeats}
                title="Total Seats"
                type="number"
              />
              <InputField
                defValue={dummyParticipants}
                setValue={setDummyParticipants}
                title="Dummy Participants"
                type="number"
              />
            </div>
            <div className="flex flex-row w-full gap-14">
              <InputField
                value={startDate}
                setValue={setStartDate}
                title="Start Date"
                type="date"
              />
              <InputField
                value={endDate}
                setValue={setEndDate}
                title="End Date"
                type="date"
              />
            </div>
            <div className="flex flex-row w-full gap-14">
              <div className="w-full relative glow-container glow-card glows">
                <label className="text-[16px] font-[400] leading-[22px]">
                  Schedule Date
                </label>
                <div className="border border-[#E3E5E8]  rounded bg-slate-50 hover:border-[#7EE7D2]">
                  <select
                    defValue={scheduleDay}
                    onChange={handleDateChange}
                    className="w-full py-2 px-2 text-[16px] font-[400] outline-none "
                  >
                    <option value="">{"Please select"}</option>
                    {daysOfWeek.length &&
                      daysOfWeek.map((data, i) => (
                        <option key={i} value={data}>
                          {data}
                        </option>
                      ))}
                  </select>
                  <img
                    src={down_arrow}
                    alt="icon"
                    className="absolute top-[50px] right-3 transform -translate-y-3/4"
                  />
                  <div
                    className={`flex flex-row flex-wrap gap-2 px-1 ${scheduleDay.length >= 1 && "mt-1.5 mb-1.5"
                      }`}
                  >
                    {scheduleDay.map((date) => (
                      <div
                        key={date}
                        className="flex items-center gap-1.5 px-2 bg-[#9ddccf] rounded-3xl "
                      >
                        <span>{date}</span>
                        <RxCrossCircled
                          onClick={() => removeSelectedDate(date)}
                          className="text-red-500 cursor-pointer"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <InputField
                defValue={scheduleTime}
                setValue={setScheduleTime}
                title="Schedule Time"
                type="time"
              />
            </div>

            {/* curriculum */}

            <div className="">
              <p className="text-center">Course Curriculum</p>
              {getOldCurriculum &&
                getOldCurriculum.map((data, i) => (
                  <CurriculumInput
                    key={i}
                    i={i}
                    data={data}
                    handleInputChange={handleUpdateInputChange}
                    handleDelete={handleUpdateDelete}
                    handleDragStart={handleDragStart}
                    handleDragOver={handleDragOver}
                    handleDrop={handleDrop}
                  />
                ))}
            </div>
            <div className=" mx-auto ">
              <div className="flex gap-4 mt-1">
                <button
                  onClick={() => handleClickSection(setGetOldCurriculum)}
                  className="px-3 py-2 rounded-[4px]  text-[16px] font-[500] leading-[24px] text-white primary_green flex flex-row items-center"
                >
                  <img src={plus_white} alt="" />
                  Add Section
                </button>
                <button
                  onClick={() => handleClickUnit(setGetOldCurriculum)}
                  className="px-3 py-2 rounded-[4px]  text-[16px] font-[500] leading-[24px] text-white primary_green flex flex-row items-center"
                >
                  <img src={plus_white} alt="" />
                  Add Unit
                </button>
                <button
                  onClick={() => handleClickQuiz(setGetOldCurriculum)}
                  className="px-3 py-2 rounded-[4px]  text-[16px] font-[500] leading-[24px] text-white primary_green flex flex-row items-center"
                >
                  <img src={plus_white} alt="" />
                  Add Quiz
                </button>
                <button
                  onClick={() => handleClickAssignment(setGetOldCurriculum)}
                  className="px-3 py-2 rounded-[4px]  text-[16px] font-[500] leading-[24px] text-white primary_green flex flex-row items-center"
                >
                  <img src={plus_white} alt="" />
                  Add Assignment
                </button>
              </div>
            </div>

            {/* end curriculum */}
            <div className="w-full relative pt-2.5">
              <div className="flex flex-row gap-[30px] justify-center w-full pt-5 border-t border-[#9096A2]">
                <button
                  disabled={loading}
                  onClick={handleUpdateBatchData}
                  className="px-3 py-2 rounded-[8px]  text-[16px] font-[500] leading-[24px] text-white primary_green flex flex-row items-center gap-2"
                >
                  {loading ? <Loading /> : "Update Batch"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {batchViewModal && (
        <BatchViewModal
          batchViewData={batchViewData}
          batchViewModal={batchViewModal}
          setBatchViewModal={setBatchViewModal}
        />
      )}
    </>
  );
};

export default ManageBatch;
