import React, { useEffect, useState } from "react";
import leftArrowIcon from "../../../../../assets/svg/arrow-sm-left.svg";
import circle_arrowIcon from "../../../../../assets/svg/circle-arrow-dwon.svg";
import pencil_editIcon from "../../../../../assets/svg/pencil-edit.svg";
import AssignmentDetails from "./AssignmentDetails";
import { useNavigate, useParams } from "react-router-dom";
import { get } from "../../../../../api/axious";

const SingleBatchAssignmentDetails = ({}) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showAssignmentDetails, setShowAssignmentDetails] = useState(false);
  const [assignmentSubmitList, setAssignmentSubmitList] = useState([]);
  const [assignmentResultShowData, setAssignmentResultShowData] = useState({});
  const [isMarkUpdate, setIsMarkUpdate] = useState(false);

  const getAssignmentAllData = async (assignment_id) => {
    try {
      // todo batch is should be dynamic
      const res = await get(
        `/api/assignment_result/get_ass_results/${assignment_id}`
      );
      if (res?.success) {
        setAssignmentSubmitList(res?.data);
      }
    } catch (error) {
      console.log("Failed to get search/", error?.response?.data?.message);
    }
  };
  useEffect(() => {
    getAssignmentAllData(id);
  }, [id, isMarkUpdate]);
  function formatDate(dateString) {
    const options = {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const date = new Date(dateString);
    return date
      .toLocaleString("en-US", options)
      ?.replace(",", "")
      ?.split("at")
      ?.join(",");
  }

  console.log(assignmentSubmitList);

  return (
    <>
      {!showAssignmentDetails ? (
        <div className="w-full max-w-[1057px] mx-auto mb-5">
          <div className="bg-white p-4 rounded-[8px]">
            <div className="border-b-2 border-[#C7CAD1] flex gap-2.5">
              <img
                onClick={() => navigate(-1)}
                className="w-[20px] cursor-pointer"
                src={leftArrowIcon}
                alt=""
              />
              <div className="flex gap-0.5">
                <h2 className=" text-[20px] font-[600] text_black_gray leading-[28px] ">
                  ১ম দিন
                </h2>
                <h2 className="text-[14px] font-[600] text_black_gray leading-[28px] ">
                  (About Design Psychology)
                </h2>
              </div>
            </div>
            <div className="bg-[#D6E9F5] mt-3">
              <h2 className="text-[14px] font-[600] text_black_gray leading-[28px] text-center">
                DIMA-Batch-N242-4
              </h2>
              <div className="flex gap-0.5 justify-center">
                <h2 className=" text-[20px] font-[600] text_black_gray leading-[28px] ">
                  Class 3 - ১ম দিন
                </h2>
                <h2 className="text-[14px] font-[600] text_black_gray leading-[28px] ">
                  (About Design Psychology)
                </h2>
              </div>
            </div>
            <div>
              <table className="w-full mt-3">
                <thead className="bg-[#F1F2F3] ">
                  <tr>
                    <th className="h-10 ps-2.5 text-[#2E3138] text-[16px] font-[500] text-start">
                      Submitted Date
                    </th>
                    <th className="h-10 ps-2.5 text-[#2E3138] text-[16px] font-[500] text-start">
                      Student ID
                    </th>
                    <th className="h-10 ps-2.5 text-[#2E3138] text-[16px] font-[500] text-start">
                      Student Name
                    </th>
                    <th className="h-10 ps-2.5 text-[#2E3138] text-[16px] font-[500] text-start">
                      Assignment
                    </th>
                    <th className="h-10 ps-2.5  text-[#2E3138] text-[16px] font-[500] ">
                      Marks
                    </th>
                    <th className="h-10 ps-2.5  text-[#2E3138] text-[16px] font-[500] ">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="text-[12px]">
                  {assignmentSubmitList &&
                    assignmentSubmitList?.map((data, i) => (
                      <tr key={i} className="even:bg-[#F1F2F3]">
                        <td className="h-10 ps-2.5 py-2 text_black_gray text-[16px] font-[500] ">
                          {formatDate(data?.createdAt)}
                        </td>
                        <td className="h-10 ps-2.5 py-2 text_black_gray text-[16px] font-[500] ">
                          {data?.user_id?.id && data?.user_id?.id}
                        </td>
                        <td className="h-10 ps-2.5 py-2 text_black_gray text-[16px] font-[500] ">
                          {data?.user_id?.fullName && data?.user_id?.fullName}
                        </td>
                        <td className="h-10 ps-2.5 py-2 text-[16px] font-[500]">
                          <button
                            onClick={() => {
                              setAssignmentResultShowData(data);
                              setShowAssignmentDetails(!showAssignmentDetails);
                            }}
                            className="flex gap-1 justify-center items-center text_green"
                          >
                            <img src={circle_arrowIcon} alt="" />
                            View Details
                          </button>
                        </td>
                        <td className="h-10 ps-2.5 py-2 text-center text_black_gray text-[16px] font-[500]">
                          <span className="bg-[#E3E5E8] px-3 py-1 leading-[8px] rounded-[3px]">
                            {data?.assignment_mark !== null
                              ? data?.assignment_mark
                              : "---"}
                          </span>
                        </td>
                        <td className="h-10 ps-2.5 py-2 flex justify-center text-[16px] font-[500]">
                          <button
                            onClick={() => {
                              setAssignmentResultShowData(data);
                              setShowAssignmentDetails(!showAssignmentDetails);
                            }}
                            className="flex gap-1 justify-center items-center text_green"
                          >
                            <img src={pencil_editIcon} alt="" />
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <AssignmentDetails
          setShowAssignmentDetails={setShowAssignmentDetails}
          showAssignmentDetails={showAssignmentDetails}
          assignmentResultShowData={assignmentResultShowData}
          setIsMarkUpdate={setIsMarkUpdate}
        />
      )}
    </>
  );
};

export default SingleBatchAssignmentDetails;
