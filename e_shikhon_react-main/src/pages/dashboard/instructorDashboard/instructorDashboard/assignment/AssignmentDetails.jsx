import React, { useEffect, useState } from "react";
import leftArrowIcon from "../../../../../assets/svg/arrow-sm-left.svg";
import down_arrow from "../../../../../assets/svg/down_arrow.svg";
import { MdOutlineDone } from "react-icons/md";
import { post } from "../../../../../api/axious";
const AssignmentDetails = ({
  showAssignmentDetails,
  setShowAssignmentDetails,
  assignmentResultShowData,
  setIsMarkUpdate,
}) => {
  console.log(showAssignmentDetails);

  console.log(assignmentResultShowData);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    setFiles([...files, assignmentResultShowData?.assignment_file]);
  }, []);

  const downloadAllFiles = () => {
    files.forEach((file) => {
      const link = document.createElement("a");
      link.href = `/${file.path}`; // Update this path to your correct file URL
      link.download = file.originalname;
      link.click();
    });
  };

  const updateAssignmentMark = async (assignment_result_id, mark) => {
    try {
      const res = await post(
        `/api/assignment_result/update/${assignment_result_id}`,
        { assignment_mark: mark }
      );
      if (res?.success) {
        setIsMarkUpdate((pre) => !pre);
        setShowAssignmentDetails(!showAssignmentDetails);
      }
    } catch (error) {
      console.log("Failed to get search/", error?.response?.data?.message);
    }
  };
  const handleMarkSubmit = (e) => {
    e.preventDefault();
    const mark = parseInt(e.target?.mark?.value);
    updateAssignmentMark(assignmentResultShowData?.id, mark);
  };

  console.log(
    assignmentResultShowData?.assignment_file &&
      Object.keys(assignmentResultShowData.assignment_file).length === 0
  );

  return (
    <div className="w-full max-w-[1057px] mx-auto mb-5">
      <div className="bg-white p-4 rounded-[8px]">
        <div className="border-b-2 border-[#C7CAD1] flex gap-2.5">
          <img
            onClick={() => setShowAssignmentDetails(!showAssignmentDetails)}
            className="w-[20px] cursor-pointer"
            src={leftArrowIcon}
            alt=""
          />
          <h2 className=" text-[20px] font-[600] text_black_gray leading-[28px] ">
            Assignment Details
          </h2>
        </div>
        <div className="bg-[#D6E9F5] mt-3">
          <h2 className="text-[14px] font-[600] text_black_gray leading-[28px] text-center">
            Student Name: {assignmentResultShowData?.user_id?.fullName}
          </h2>
          <div className="flex gap-0.5 justify-center">
            <h2 className=" text-[20px] font-[600] text_black_gray leading-[28px] ">
              ID:
            </h2>
            <h2 className="text-[14px] font-[600] text_black_gray leading-[28px] ">
              {assignmentResultShowData?.user_id?.id}
            </h2>
          </div>
        </div>
        <div className="mt-3">
          <div className="flex justify-between items-center">
            <h2 className=" text-[20px] font-[600] text_black_gray leading-[28px] ">
              Title:{assignmentResultShowData?.assignment_id?.title}
            </h2>
            {/* mark div  */}
            <div className="flex justify-center items-center gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
              <p className="font-bold text-gray-700">Marks:</p>
              <form
                onSubmit={handleMarkSubmit}
                className="flex items-center gap-2 p-4 bg-gray-100 rounded-lg shadow-md"
              >
                <input
                  type="number"
                  placeholder="Number"
                  name="mark"
                  defaultValue={
                    assignmentResultShowData?.assignment_mark &&
                    assignmentResultShowData?.assignment_mark
                  }
                  className="border w-20 border-gray-300 rounded-lg px-3 py-1.5 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-[#1a8d75] text-white rounded-lg px-3 py-1.5 flex items-center justify-center hover:bg-[#1a8d75]/80 active:bg-[#1a8d75]/90 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                  aria-label="Submit Marks"
                >
                  <MdOutlineDone className="text-lg" />
                </button>
              </form>
            </div>
          </div>

          {assignmentResultShowData?.assignment_file &&
            Object.keys(assignmentResultShowData.assignment_file).length !==
              0 && (
              <>
                <div className="grid grid-cols-3 gap-4 mt-5">
                  {files?.map((file, index) => (
                    <div
                      key={index}
                      className="bg-[#E3E5E8] p-2 border border-[#ACB0B9] rounded relative"
                    >
                      <a
                        href={`/${file.path}`} // Update this path to your correct file URL
                        download={file.originalname}
                        className="block text-center"
                      >
                        <p>{file.originalname}</p>
                        <p className="text-xs text-gray-600">
                          {(2).toFixed(1)} MB
                        </p>{" "}
                        {/* Size placeholder */}
                      </a>
                      <img
                        src={down_arrow}
                        alt="icon"
                        className="absolute top-[22px] right-2 transform -translate-y-1/2"
                      />
                    </div>
                  ))}
                </div>

                <button
                  onClick={downloadAllFiles}
                  className="mt-3 text-[20px] font-[500] text_green"
                >
                  Download All
                </button>
              </>
            )}

          {assignmentResultShowData?.assignment_link && (
            <div className="mt-5">
              <textarea
                readOnly={true}
                value={assignmentResultShowData?.assignment_link}
                // onChange={(e) => setText(e.target.value)}
                placeholder="Write Your Assignments here..."
                className="border-2  min-h-[200px] w-full rounded-lg p-4 outline-none"
              />
            </div>
          )}

          <div className="flex gap-0.5 mt-5">
            <h2 className=" text-[20px] font-[600] text_black_gray leading-[28px] ">
              Note:
            </h2>
            <h2 className="text-[14px] font-[400] text_black_gray leading-[28px] ">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetails;
