import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { del, get } from "../../../../../api/axious";
import plus_white from "../../../../../assets/svg/plus_white.svg";
import QuestionList from "./QuestionList";
import Swal from "sweetalert2";
import QuestionViewModal from "./QuestionViewModal";
import { URL } from "../../../../../constants/Url";
import QuestionCreateUpdate from "./QuestionCreateUpdate";

const ManageQuestion = () => {
  const [loading, setLoading] = useState(false);
  const [showQuestionForm, setShowQuestionForm] = useState(false);
  const [allQuestion, setAllQuestion] = useState();
  const [viewData, setViewData] = useState({});
  const [type, setType] = useState("create");

  // ======= Get All Question <=======//
  useEffect(() => {
    fetchAllQuestion();
  }, []);

  const fetchAllQuestion = async () => {
    try {
      const response = await get(URL.QUESTION.GET);
      setAllQuestion(response?.data);
    } catch (error) {
      console.log("Error creating app:", error);
    }
  };

  const handleClickQuestionForm = () => {
    setShowQuestionForm(true);
  };

  // quiz update functionality
  const [questionUpdateFrom, setQuestionUpdateFrom] = useState(false);

  // ========> Question Tag Update Modal <=========//
  const handleUpdateQuestion = (questionData) => {
    setType("update");
    setViewData(questionData);
    setShowQuestionForm(true);
  };

  // handle delete question
  const handleDeleteQuestion = async (id) => {
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
          const response = del(`${URL.QUESTION.DET}/${id}`);
          if (response) {
            fetchAllQuestion();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
              showConfirmButton: false,
              timer: 2000,
            });
            fetchAllQuestion();
          }
        } catch (error) {
          setLoading(false);
          toast.error("Failed to delete");
          console.log("Failed to delete/", error?.response);
        }
        fetchAllQuestion();
      }
    });
    setLoading(false);
  };

  // question view functionality
  const [questionViewModal, setQuestionViewModal] = useState(false);
  const [questionViewData, setQuestionViewData] = useState({});
  const handleQuestionView = (questionData) => {
    setQuestionViewData(questionData);
    setQuestionViewModal(!questionViewModal);
  };

  return (
    <>
      {!showQuestionForm ? (
        <div className="px-[13px] w-full lg:w-[1100px] mb-10 mx-auto">
          <div className="px-[13px] w-full lg:w-[1100px] mb-10 mx-auto">
            <div className="bg-white rounded-[10px] flex justify-between p-2.5">
              <div>
                <h2 className="text-[28px] font-[600] text_black_gray leading-[40px] ">
                  Manage Question
                </h2>
              </div>
              <div>
                <button
                  onClick={handleClickQuestionForm}
                  className="p-2.5 text-white primary_green rounded-[5px] text-[14px] font-[400] leading-[18px] flex flex-row items-center gap-1"
                >
                  <img className="w-5" src={plus_white} alt="" />
                  Add New Question
                </button>
              </div>
            </div>

            {!questionUpdateFrom && (
              <div>
                <QuestionList
                  allQuestion={allQuestion}
                  handleUpdateQuestion={handleUpdateQuestion}
                  handleDeleteQuestion={handleDeleteQuestion}
                  handleQuestionView={handleQuestionView}
                />
              </div>
            )}
          </div>
        </div>
      ) : (
        <QuestionCreateUpdate
          type={type}
          viewData={viewData}
          fetchAllQuestion={fetchAllQuestion}
          showQuestionForm={showQuestionForm}
          setShowQuestionForm={setShowQuestionForm}
        />
      )}

      {questionViewModal && (
        <QuestionViewModal
          questionViewModal={questionViewModal}
          setQuestionViewModal={setQuestionViewModal}
          questionViewData={questionViewData}
        />
      )}
    </>
  );
};

export default ManageQuestion;
