import React, { useEffect, useState } from "react";
import plus_white from "../../../../../assets/svg/plus_white.svg";
import QuestionTagList from "./QuestionTagList";
import { URL } from "../../../../../constants/Url";
import { del, get } from "../../../../../api/axious";
import leftArrowIcon from "../../../../../assets/svg/arrow-sm-left.svg";
import QuestionTagCreateUpdate from "./QuestionTagCreateUpdate";
import Swal from "sweetalert2";

const ManageQuestionTag = () => {
  const [loading, setLoading] = useState(false);
  const [showQuestionTagForm, setShowQuestionTagForm] = useState(false);
  const [questionUpdateFrom, setQuestionUpdateFrom] = useState(false);
  const [type, setType] = useState("create");
  const [allQuestionTag, setAllQuestionTag] = useState([]);
  const [viewData, setViewData] = useState({});

  const handleClickQuestionTagForm = () => {
    setShowQuestionTagForm(true);
    setType("create");
  };

  //========> Get all Question Tag <=======//
  useEffect(() => {
    fetchAllQuestionTag();
  }, []);

  const fetchAllQuestionTag = async () => {
    setLoading(true);
    try {
      const response = await get(URL.QUESTION_TAG.GET);
      console.log(response);
      if (response?.success) {
        setAllQuestionTag(response?.data);
      }
    } catch (error) {
      console.log("Error creating app:", error);
    } finally {
      setLoading(false);
    }
  };

  // ========> Question Tag Update Modal <=========//
  const handleUpdateQuestionTag = (questionTag) => {
    setType("update");
    setViewData(questionTag);
    setShowQuestionTagForm(true);
  };

  // ==========> Delete Question Tag <=========//
  const handleDeleteQuestionTag = async (id) => {
    setLoading(true);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          const response = del(`${URL.QUESTION_TAG.DET}/${id}`);
          if (response) {
            fetchAllQuestionTag();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
              showConfirmButton: false,
              timer: 2000,
            });
            fetchAllQuestionTag();
          }
        } catch (error) {
          setLoading(false);
          toast.error("Failed to delete");
          console.log("Failed to delete/", error?.response);
        }
        fetchAllQuestionTag();
      }
    });
    setLoading(false);
  };

  return (
    <>
      {!showQuestionTagForm ? (
        <div className="px-[13px] w-full lg:w-[1100px] mb-10 mx-auto">
          <div className="px-[13px] w-full lg:w-[1100px] mb-10 mx-auto">
            <div className="bg-white rounded-[10px] flex justify-between p-2.5">
              <div>
                <h2 className="text-[28px] font-[600] text_black_gray leading-[40px] ">
                  Manage Question Tag
                </h2>
              </div>
              {!questionUpdateFrom && (
                <div>
                  <button
                    onClick={handleClickQuestionTagForm}
                    className="p-2.5 text-white primary_green rounded-[5px] text-[14px] font-[400] leading-[18px] flex flex-row items-center gap-1"
                  >
                    <img className="w-5" src={plus_white} alt="" />
                    Add New Question Tag
                  </button>
                </div>
              )}
            </div>

            {!questionUpdateFrom && (
              <QuestionTagList
                allQuestionTag={allQuestionTag}
                handleUpdateQuestionTag={handleUpdateQuestionTag}
                handleDeleteQuestionTag={handleDeleteQuestionTag}
              />
            )}
          </div>
        </div>
      ) : (
        <div className="px-[13px] w-full lg:w-[1100px] mb-10 mx-auto">
          <div className="w-full overflow-x-auto bg-white py-5 px-2.5 rounded-[10px] mt-10">
            <div className="border-b px-2.5 flex flex-wrap flex-row justify-between pb-2.5 mb-5">
              <div className=" flex items-center justify-center gap-2 ">
                <button onClick={() => setShowQuestionTagForm(false)}>
                  <img className="w-[25px]" src={leftArrowIcon} alt="" />
                </button>
                <h2 className="text-[28px] font-[600] text_black_gray leading-[40px] ">
                  {type === "create"
                    ? "Add New Question Tag"
                    : "Update Question Tag"}
                </h2>
              </div>
            </div>
            <QuestionTagCreateUpdate
              type={type}
              viewData={viewData}
              fetchAllQuestionTag={fetchAllQuestionTag}
              showQuestionTagForm={showQuestionTagForm}
              setShowQuestionTagForm={setShowQuestionTagForm}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ManageQuestionTag;
