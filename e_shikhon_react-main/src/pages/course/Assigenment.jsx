import React, { useContext, useEffect, useState } from "react";
import { IoMdCloudUpload } from "react-icons/io";
import { post, put } from "../../api/axious";
import Loading from "../../components/sheared/Loading";
import { AuthContext } from "../../layout/MainLayout";
import right_arrow_icon from "../../assets/svg/arrow-right-btn.svg";
import green_tick_icon from "../../assets/svg/circel_green_tick.svg";
import { LuDownload } from "react-icons/lu";
import axios from "axios";
import toast from "react-hot-toast";
import { FaArrowAltCircleLeft } from "react-icons/fa";
const Assignment = ({
  assignment,
  courseData,
  setAssignmentProgress,
  title = true,
  setCourseData,
  curriculumIndex,
  unitIndex,
  type,
}) => {
  const { user } = useContext(AuthContext);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const [submitType, setSubmitType] = useState("1");
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const handleImageUpload = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const attachmentSizeLimit = parseFloat(assignment?.attachmentSize);
      const fileSizeInMB = selectedFile.size / (1024 * 1024);
      if (fileSizeInMB > attachmentSizeLimit) {
        toast.error("File size exceeds the allowed limit");
        return;
      }
      setSelectedImage(selectedFile);
    }
  };

  const condition = assignment?.result?.[0]?.isComplete;
  useEffect(() => {
    if (condition) {
      setSubmitType("3"); //3
    } else {
      setSubmitType("1");
    }
  }, [condition, curriculumIndex]);
  useEffect(() => {
    setText("");
    setSelectedImage(null);
  }, [curriculumIndex]);

  const onSubmit = async () => {
    const assignment_payload = {
      user_id: user?.id,
      course_id: courseData?.id,
      assignment_id: assignment?.id,
      assignment_link: text,
      isComplete: true,
      status: "complete",
      assignment_file: selectedImage,
    };
    const payload = {
      assignment_progress: { assignId: assignment?.id },
    };
    setLoading(true);
    try {
      const res = await post(`/api/assignment_result/add`, assignment_payload, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      if (res?.success) {
        if (type === "video") {
          setCourseData((previous) => {
            const newCourseData = { ...previous };
            newCourseData.courseCurriculum[curriculumIndex].units[
              unitIndex
            ].assignment.result = [res.data];
            return newCourseData;
          });
        } else {
          setCourseData((previous) => {
            const newCourseData = { ...previous };
            newCourseData.courseCurriculum[curriculumIndex].assignment.result =
              [res.data];
            return newCourseData;
          });
        }
        setSubmitType("3");
      }
      if (type === "video") {
        const progressRes = await put(
          `/api/course/enroll/progress/update/${courseData?.progress?.[0]?.id}`,
          payload
        );
        const json_data = JSON.parse(progressRes?.data?.assignment_progress);
        setAssignmentProgress(json_data);
      }
    } catch (error) {
      setLoading(false);
      console.log("Failed to Post Assignment/", error?.response?.data);
    } finally {
      setLoading(false);
    }
  };
  const downloadFile = async (url, filename) => {
    try {
      const response = await axios.get(url, {
        responseType: "blob",
      });
      const blob = new Blob([response.data], {
        type: response.headers["content-type"],
      });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Failed to download file:", error);
    }
  };

  console.log("assignment", assignment);

  return (
    <div>
      {title && (
        <h1 className="text-[20px] mb-3">
          {assignment?.title || "Assignment"}
        </h1>
      )}
      <div className="h-[400px] ">
        {submitType === "1" ? (
          <div className="w-full h-full flex justify-center items-center ">
            <div>
              <h1 className="text-[#5D636F] text-[14px] lg:text-[16px] font-[400] lg:font-[400] leading-[18px] mx-auto text-center">
                Homework to test yourself on your grasp of design skills and
                reassure yourself <br /> that you've got this! Please send your
                homework as soon as possible.
              </h1>
              <button
                onClick={() => setSubmitType("2")}
                className=" min-w-[200px] py-2.5 mt-5 rounded-[4px] text-[16px] font-[500] leading-[24px] text-white primary_green text-center flex items-center justify-center gap-2 mx-auto"
              >
                এ্যাসাইনমেন্ট জমা দিন
                <img src={right_arrow_icon} alt="" />
              </button>
            </div>
          </div>
        ) : submitType === "2" ? (
          <>
            <div className="w-full  p-6 ">
              {assignment?.assignmentSubmissions === "Upload File" ? (
                <div>
                  <label htmlFor="img_upload">
                    <div className="p-5 w-full border-2 border-gray-300 border-dashed rounded-[8px] bg-gray-200/50 flex justify-center items-center cursor-pointer h-[200px]">
                      <input
                        type="file"
                        id="img_upload"
                        className="hidden"
                        onChange={handleImageUpload}
                      />
                      <div className="flex flex-col justify-center items-center h-full">
                        <div className="text-gray-500 text-[50px]">
                          <IoMdCloudUpload />
                        </div>
                        <h1 className="text-gray-500 font-bold">
                          Click / Drag and Drop Files to Upload
                        </h1>
                        {selectedImage && (
                          <p className="text-gray-500">{selectedImage.name}</p>
                        )}
                      </div>
                    </div>
                  </label>
                  <h1 className="mt-5 text-[16px] font-[400] text-[#4B5563] text-center leading-[16px]">
                    Maximum upload {assignment?.attachmentType || "file"} size:{" "}
                    {assignment?.attachmentSize || 1} MB.
                  </h1>
                </div>
              ) : (
                <div className="mt-5">
                  <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Write Your Assignments here..."
                    className="border-2  min-h-[200px] w-full rounded-lg p-4 outline-none"
                  />
                </div>
              )}
            </div>
            <button
              onClick={onSubmit}
              className=" min-w-[200px] py-2.5 rounded-[4px] text-[16px] font-[500] leading-[24px] text-white primary_green text-center flex items-center justify-center gap-2 mx-auto"
            >
              {loading ? <Loading /> : "জমা দিন"}
              <img src={right_arrow_icon} alt="" />
            </button>
          </>
        ) : submitType === "3" ? (
          <div className="w-full h-full mt-5  flex justify-center items-center ">
            <div className="">
              <div className="flex gap-2 items-center justify-center h-full">
                <img src={green_tick_icon} alt="" />
                <h1 className="text-[#5D636F] text-[20px] font-[500] leading-[18px] py-8">
                  আপনি সফলভাবে টাস্ক জমা দিয়েছেন
                </h1>
              </div>
              <div className="flex items-center justify-center gap-14 mt-5">
                {assignment?.result?.[0]?.assignment_mark ? (
                  <h1
                    onClick={() => setSubmitType("5")}
                    className="text-[#1D5276] text-[20px] font-[500] leading-[18px] cursor-pointer"
                  >
                    View Result
                  </h1>
                ) : (
                  <h1
                    onClick={() => setSubmitType("1")}
                    className="text-[#1D5276] text-[20px] font-[500] leading-[18px] cursor-pointer"
                  >
                    আবার চেষ্টা করুন
                  </h1>
                )}
                <button
                  onClick={() => setSubmitType("4")}
                  className="px-5 py-2.5 rounded-[4px] text-[16px] font-[500] leading-[24px] text-white primary_green text-center flex items-center justify-center gap-2"
                >
                  {loading ? <Loading /> : "View Submission"}
                </button>
              </div>
            </div>
          </div>
        ) : submitType === "4" ? (
          <div className="mt-10 w-full flex flex-col justify-center items-center px-4">
            {assignment?.assignmentSubmissions === "Upload File" ? (
              <button
                onClick={() =>
                  downloadFile(
                    `${BASE_URL}${assignment?.result?.[0]?.assignment_file?.path}`,
                    assignment?.result?.[0]?.assignment_file?.path
                      ?.split("/")
                      ?.pop() // Extract filename from path
                  )
                }
                className="border border-[#E3E5E8] rounded p-4 flex items-center justify-center gap-2 w-full"
              >
                <LuDownload className="text-[#1E567B]" />
                <h1 className="text-[#1E567B] text-[16px] font-[500] leading-[18px] ">
                  {assignment?.result?.[0]?.assignment_file?.originalname}
                </h1>
              </button>
            ) : (
              <div className="border border-[#E3E5E8] rounded p-4 flex items-center justify-center gap-2 w-full h-[200px] overflow-y-auto">
                <h1 className="text-[#1E567B] text-[16px] font-[500] leading-[18px] ">
                  {assignment?.result?.[0]?.assignment_link}
                </h1>
                {/* <img
                  src={`${BASE_URL}${assignment?.result?.[0]?.assignment_file?.path}`}
                  alt=""
                /> */}
              </div>
            )}
            <div className="flex gap-2 mt-3 bg-[#E3E5E8] p-2 rounded-[6px]">
              <div>
                <img className="w-[50px]" src={green_tick_icon} alt="" />
                <FaArrowAltCircleLeft
                  className="cursor-pointer text-[#18b187] text-[20px] mt-2"
                  onClick={() => setSubmitType("3")}
                />
              </div>
              <h1 className="text-[#5D636F] text-[14px] font-[400] leading-[18px] ">
                Take a moment to reflect on the work you put into building and
                reviewing your research plan! This is an important step in your
                portfolio project. A research plan will help you implement a
                usability study and gather insights for improving your designs.
              </h1>
            </div>
          </div>
        ) : submitType === "5" ? (
          <div className="w-full h-full mt-5  flex justify-center items-center ">
            <div className="">
              <div className="flex gap-2 items-center justify-center h-full">
                <FaArrowAltCircleLeft
                  className="cursor-pointer text-[#18b187] text-[20px] "
                  onClick={() => setSubmitType("3")}
                />

                <h1 className="text-[#5D636F] text-[20px] font-[500] leading-[18px] py-5">
                  Your Assignment Mark
                </h1>
              </div>
              <div className="flex items-center justify-center  mt-2">
                <div className="px-5 py-2.5 rounded-[4px] text-[26px] font-[500] leading-[24px] text-white primary_green text-center flex items-center justify-center gap-2">
                  {assignment?.maximumMarks} /{" "}
                  {assignment?.result?.[0]?.assignment_mark}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default Assignment;
