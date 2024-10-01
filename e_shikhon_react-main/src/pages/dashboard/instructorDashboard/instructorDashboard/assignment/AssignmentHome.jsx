import React, { useContext, useEffect, useState } from "react";
import search_icon from "../../../../../assets/svg/search_white_icon.svg";
import camera_icon from "../../../../../assets/svg/video-camera_white.svg";
import layer_icon from "../../../../../assets/svg/layer_white.svg";
import course1 from "../../../../../assets/images/course-img (1).png";
import course2 from "../../../../../assets/images/course-img (2).png";
import course3 from "../../../../../assets/images/course-img (3).png";
import course4 from "../../../../../assets/images/course-img (4).png";
import user_photo from "../../../../../assets/images/al_amin_rounded.png";
import user_photo2 from "../../../../../assets/images/faisal_azim.png";
import user_photo3 from "../../../../../assets/images/mentor (1).png";
import user_photo4 from "../../../../../assets/images/mentor (2).png";
import user_photo5 from "../../../../../assets/images/mentor (3).png";
import SingleBatchAssignment from "./SingleBatchAssignment";
import leftArrowIcon from "../../../../../assets/svg/arrow-sm-left.svg";
import CourseSuggestion from "../../../../../components/Common/CourseSuggestion";
import { get, post } from "../../../../../api/axious";
import { AuthContext } from "../../../../../layout/MainLayout";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AssignmentHome = () => {
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const { user } = useContext(AuthContext);
  const [showTable, setShowTable] = useState(false);
  const [showSingleBatchAssignment, setShowSingleBatchAssignment] =
    useState(false);
  const [courses, setCourses] = useState([]);
  const [totalBatch, setTotalBatch] = useState([]);
  const [selectedBatchId, setSelectedBatchId] = useState("");
  const [selectCourseTitle, setSelectCourseTitle] = useState("");
  const [batchData, setBatchData] = useState({});

  const [courseId, setCourseId] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [courseLoading, setCourseLoading] = useState(false);
  const [searchCourseData, setSearchCourseData] = useState([]);
  const [showCourseSuggestion, setShowCourseSuggestion] = useState(false);
  const [start_date, setStart_date] = useState("");
  const [end_date, setEnd_date] = useState("");

  const handleCourseSuggestion = async (event) => {
    const query_text = event.target.value;

    setCourses(query_text);
    if (query_text && query_text?.length >= 4) {
      setShowCourseSuggestion(true);
      setCourseLoading(true);
      try {
        const res = await post(`api/courses/complex_search/${query_text}`, {
          instructor_id: user?.id,
        });
        console.log(res, "now ============>");
        if (res) {
          setSearchCourseData(res?.data);
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

  const handleFetchBatchByCourse = async (courseId, startDate, endDate) => {
    setShowTable(!showTable);
    try {
      const res = await post(`api/batch/by_course1/${courseId}`, {
        start_date: startDate,
        end_date: endDate,
      });
      console.log(res, "now ============>");
      if (res) {
        setTotalBatch(res?.data);
      }
    } catch (error) {
      console.log("Failed to get search/", error?.response?.data?.message);
    }
  };

  const handleFetchBatchByCourse2 = async (courseId, startDate, endDate) => {
    try {
      const res = await post(`api/batch/by_course1/${courseId}`, {
        start_date: startDate,
        end_date: endDate,
      });
      console.log(res, "now ============>");
      if (res) {
        setTotalBatch(res?.data);
        toast.success("Batch Filter Successfully done");
      }
    } catch (error) {
      console.log("Failed to get search/", error?.response?.data?.message);
    }
  };

  // Handle the change event
  const handleChange = (e) => {
    setSelectedBatchId(parseInt(e.target?.value));
  };
  useEffect(() => {
    const findBatchData = totalBatch?.find(
      (item) => item?.id === selectedBatchId
    );
    if (findBatchData) {
      setBatchData(findBatchData);
    }
  }, [selectedBatchId, totalBatch]);
  const [getCourseId, setGetCourseId] = useState(null);

  const handleSearch = () => {
    if (start_date && end_date && getCourseId) {
      handleFetchBatchByCourse2(getCourseId, start_date, end_date);
    } else {
      toast.error("Please Search Course or Set Start Date and End Date");
    }
  };
  useEffect(() => {
    if (selectCourseTitle) {
      setCourses(selectCourseTitle);
    }
  }, [selectCourseTitle]);

  return (
    <>
      {!showSingleBatchAssignment && (
        <div className="w-full max-w-[1057px] mx-auto mb-5">
          <div className="bg-white p-4 rounded-[8px]">
            <div className="border-b-2 border-[#C7CAD1]">
              <h2 className="text-[18px] md:text-[24px] lg:text-[36px] font-[600] text_black_gray leading-[18px] md:leading-[32px] lg:leading-[40px] pb-3">
                এ্যাসাইনমেন্ট
              </h2>
            </div>
            <div>
              <div className="pt-2 flex flex-col gap-5 ">
                <div className="flex flex-row w-full gap-14">
                  <div className="w-full">
                    <label className="text-[16px] font-[400] leading-[22px]">
                      Select Course
                    </label>
                    <CourseSuggestion
                      obj_name="courseTitle"
                      loading={courseLoading}
                      data={searchCourseData}
                      setInput={courses}
                      setAuthorId={setCourseId}
                      showSuggestion={showCourseSuggestion}
                      setShowSuggestion={setShowCourseSuggestion}
                    >
                      <input
                        type="text"
                        value={courses}
                        onChange={(event) => handleCourseSuggestion(event)}
                        className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                        placeholder={`Enter Course Name`}
                      />
                    </CourseSuggestion>
                  </div>

                  {/* tansim work  */}
                  <div className="w-full">
                    <label className="text-[16px] font-[400] leading-[22px]">
                      Batch List
                    </label>
                    <select
                      value={selectedBatchId}
                      onChange={handleChange}
                      className="w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                    >
                      <option value="" disabled>
                        Select a Batch
                      </option>
                      {totalBatch?.map((option) => (
                        <option key={option?.id} value={option?.id}>
                          {option?.batch_no}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex flex-row w-full gap-14">
                  <div className="flex flex-row w-full gap-5">
                    <div className="w-full">
                      <label
                        className={`text-[16px] font-[400] leading-[22px]`}
                      >
                        Start Date
                      </label>
                      <input
                        onChange={(e) => setStart_date(e.target.value)}
                        // value=""
                        className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                        type="date"
                      />
                    </div>
                    <div className="w-full">
                      <label
                        className={`text-[16px] font-[400] leading-[22px]`}
                      >
                        End Date
                      </label>
                      <input
                        onChange={(e) => setEnd_date(e.target.value)}
                        className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                        type="date"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row w-full gap-5">
                    <div className="w-full">
                      <label
                        className={`text-[16px] font-[400] leading-[22px]`}
                      >
                        Search
                      </label>
                      <input
                        value=""
                        className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                        type="text"
                        placeholder="Searching ..."
                      />
                    </div>
                    <div className="">
                      <button
                        onClick={handleSearch}
                        className="ps-4 pe-8 py-2 mt-[29px] rounded-[5px] text-[16px] font-[500] leading-[24px] text-white primary_green flex items-center gap-2"
                      >
                        <img src={search_icon} alt="" />
                        {/* {loading ? <Loading /> : "Search"} */}
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* card section */}

          {!showTable ? (
            <div className="bg-white p-4 rounded-[16px] mt-5 ">
              <div className="grid grid-cols-2 gap-7">
                {searchCourseData.map((course) => (
                  <div
                    key={course.id}
                    onClick={() => {
                      handleFetchBatchByCourse(course?.id);
                      setGetCourseId(course?.id);
                      setSelectCourseTitle(course?.courseTitle);
                    }}
                    className="rounded cursor-pointer"
                  >
                    <img
                      className="rounded-t-[8px]"
                      src={`${BASE_URL}${course?.thumbLinePicPath.path}`}
                      alt=""
                    />
                    <div className="bg_black p-4 rounded-b-[8px]">
                      <div className="border-b border_black_gray">
                        <h1 className="text-[#FFF] text-[18px] font-[600]">
                          {course?.courseTitle}
                        </h1>
                      </div>
                      <div className="grid grid-cols-2 pt-2">
                        <div className="flex gap-1">
                          <img src={camera_icon} alt="" />
                          <h1 className="text-[#FFF] text-[14px] font-[400] leading-[22px]">
                            {course?.courseCategory}
                          </h1>
                        </div>
                        <div className="flex gap-1">
                          <img className="w-[15px]" src={layer_icon} alt="" />
                          <h1 className="text-[#FFF] text-[14px] font-[400] leading-[22px]">
                            Batch ({course?.batchCount})
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white p-4 rounded-[16px] mt-5 ">
              <div className="border-b border_gray flex items-center gap-2">
                <img
                  onClick={() => setShowTable(!showTable)}
                  className="w-[20px] cursor-pointer"
                  src={leftArrowIcon}
                  alt=""
                />
                <h1 className="text-black text-[18px] font-[600]">
                  {searchCourseData?.[0]?.courseTitle}
                </h1>
              </div>
              {batchData?.id && (
                <table className="w-full mt-3">
                  <thead className="bg-[#F1F2F3] ">
                    <tr>
                      <th className="h-10 ps-2.5 text-[#2E3138] text-[16px] font-[500] text-start">
                        SL
                      </th>
                      <th className="h-10 ps-2.5 text-[#2E3138] text-[16px] font-[500] text-start">
                        Batch Name
                      </th>
                      <th className="h-10 ps-2.5 text-[#2E3138] text-[16px] font-[500] text-start">
                        Instructors
                      </th>
                      <th className="h-10 ps-2.5 text-[#2E3138] text-[16px] font-[500] text-start">
                        Students
                      </th>
                      <th className="h-10 pe-2.5 text-right text-[#2E3138] text-[16px] font-[500] ">
                        Action
                      </th>
                    </tr>
                  </thead>

                  <tbody className="text-[12px]">
                    <tr className="even:bg-gray-200">
                      <td className="h-10 ps-2.5 py-2 text_black_gray text-[16px] font-[500] ">
                        {1}
                      </td>
                      <td className="h-10 ps-2.5 py-2 text_black_gray text-[16px] font-[500] ">
                        {batchData?.batch_no}
                      </td>
                      <td className="h-10 ps-2.5 py-2 text_black_gray text-[16px] font-[500] ">
                        <div className="flex relative">
                          <img className="w-[25px]" src={user_photo} alt="" />
                          <img
                            className="w-[25px] absolute left-5 rounded-full"
                            src={user_photo2}
                            alt=""
                          />
                          <img
                            className="w-[25px] rounded-full absolute left-10"
                            src={user_photo3}
                            alt=""
                          />
                          <img
                            className="w-[25px] rounded-full absolute left-14"
                            src={user_photo4}
                            alt=""
                          />
                          <img
                            className="w-[25px] rounded-full absolute left-[75px]"
                            src={user_photo5}
                            alt=""
                          />
                        </div>
                      </td>
                      <td className="h-10 ps-2.5 py-2 text_black_gray text-[16px] font-[500] ">
                        <div className="flex relative">
                          <img className="w-[25px]" src={user_photo} alt="" />
                          <img
                            className="w-[25px] absolute left-5 rounded-full"
                            src={user_photo2}
                            alt=""
                          />
                          <img
                            className="w-[25px] rounded-full absolute left-10"
                            src={user_photo3}
                            alt=""
                          />
                          <img
                            className="w-[25px] rounded-full absolute left-14"
                            src={user_photo4}
                            alt=""
                          />
                          <img
                            className="w-[25px] rounded-full absolute left-[75px]"
                            src={user_photo5}
                            alt=""
                          />
                        </div>
                      </td>
                      <td className="h-10 pe-2.5 py-2 text_green text-[16px] font-[500] text-right cursor-pointer">
                        <button
                          onClick={() =>
                            navigate(
                              `/instructor/batch-assignments/${batchData?.id}`
                            )
                          }
                        >
                          Details
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default AssignmentHome;
