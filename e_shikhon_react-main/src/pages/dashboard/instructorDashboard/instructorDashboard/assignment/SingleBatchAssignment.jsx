import React, { useContext, useEffect, useState } from "react";
import leftArrowIcon from "../../../../../assets/svg/arrow-sm-left.svg";
import user_photo from "../../../../../assets/images/al_amin_rounded.png";
import user_photo2 from "../../../../../assets/images/faisal_azim.png";
import user_photo3 from "../../../../../assets/images/mentor (1).png";
import user_photo4 from "../../../../../assets/images/mentor (2).png";
import user_photo5 from "../../../../../assets/images/mentor (3).png";
import SingleBatchAssignmentDetails from "./SingleBatchAssignmentDetails";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../../../layout/MainLayout";
import { get, post } from "../../../../../api/axious";

const SingleBatchAssignment = ({}) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  console.log(id);
  const [assignmentId, setAssignmentId] =useState(null)
  
  const [courseCurriculumData, setCourseCurriculumData] = useState([]);
  const [batchNo, setBatchNo] = useState("");
  const getBatchAllAssignment = async (batchId) => {
    try {
      const res = await post(`api/batch/get/${batchId}`, {
        user_id: parseInt(user?.id),
      });
      if (res) {  
        setCourseCurriculumData(res?.data?.courseCurriculum);
        setBatchNo(res?.data?.batch_no);
      }
    } catch (error) {
      console.log("Failed to get search/", error?.response?.data?.message);
    }
  };
  useEffect(() => {

    getBatchAllAssignment(id);
  }, [id]);

  

  return (
    <>
    
        <div className="w-full max-w-[1057px] mx-auto mb-5">
          <div className="bg-white p-4 rounded-[8px]">
            <div className="border-b-2 border-[#C7CAD1] flex gap-2.5">
              <img
                onClick={() => navigate(-1)}
                className="w-[20px] cursor-pointer"
                src={leftArrowIcon}
                alt=""
              />
              <h2 className="text-[14px] md:text-[16px] lg:text-[20px] font-[600] text_black_gray leading-[28px] ">
                {batchNo}
              </h2>
            </div>

            {courseCurriculumData &&
              courseCurriculumData?.map((assignment, i) => (
                <div className="mt-4">
                  <div className="bg-white p-2 border rounded-[5px]">
                    <div
                      onClick={() =>
                        navigate(
                          `/instructor/batch-assignments/assignment/${assignment?.assignment?.id}`
                        )
                      }
                      className="flex cursor-pointer justify-between items-center"
                    >
                      <div className="flex gap-3">
                        <div className="px-2 py-2.5 flex flex-col items-center second_bg_color rounded-[5px]">
                          <h1
                            className="text-white text-center text-[20] font-[600]
                                       leading-[18px]"
                          >
                            Class <br />
                            {i + 1}
                          </h1>
                        </div>
                        <div className="flex flex-col justify-between py-0.5">
                          <h1
                            className="text-black text-left text-[22] font-[600]
                                       leading-[24px]"
                          >
                            {i + 1}ম দিন
                          </h1>
                          <h1
                            className="text-black text-left text-[16] font-[400]
                                       leading-[18px]"
                          >
                            {assignment?.assignment?.title}
                          </h1>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 ">
                        <div>
                          <h1
                            className="text_green text-left text-[16] font-[600]
                                       leading-[18px]"
                          >
                            Total Submit: {assignment?.assignmentRCount}
                          </h1>
                        </div>
                        <div className="flex relative">
                          <img className="w-[25px]" src={user_photo} alt="" />
                          <img
                            className="w-[25px]  left-5 rounded-full"
                            src={user_photo2}
                            alt=""
                          />
                          <img
                            className="w-[25px] rounded-full  left-10"
                            src={user_photo3}
                            alt=""
                          />
                          <img
                            className="w-[25px] rounded-full  left-14"
                            src={user_photo4}
                            alt=""
                          />
                          <img
                            className="w-[25px] rounded-full  left-[75px]"
                            src={user_photo5}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      
    </>
  );
};

export default SingleBatchAssignment;
