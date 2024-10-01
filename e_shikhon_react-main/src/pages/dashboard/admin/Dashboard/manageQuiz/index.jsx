import React, { useEffect, useState } from "react";
import plus_white from "../../../../../assets/svg/plus_white.svg";
import QuizList from "./QuizList";
import { del, get } from "../../../../../api/axious";
import { URL } from "../../../../../constants/Url";
import QuizViewModal from "./QuizViewModal";
import Swal from "sweetalert2";
import QuizCreateUpdate from "./QuizCreateUpdate";

const ManageQuiz = () => {
  const [loading, setLoading] = useState(false);
  const [showQuizForm, setShowQuizForm] = useState(false);
  const [allQuiz, setAllQuiz] = useState();
  const [viewData, setViewData] = useState({});
  const [type, setType] = useState("create");

  useEffect(() => {
    fetchAllQuiz();
  }, []);

  const fetchAllQuiz = async () => {
    try {
      const response = await get(URL.QUIZ.GET);
      setAllQuiz(response?.data);
    } catch (error) {
      console.log("Error creating app:", error);
    }
  };

  // =========> Quiz Delete <==========//
  const handleDeleteQuiz = (id) => {
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
          const response = del(`${URL.QUIZ.DET}/${id}`);
          if (response) {
            fetchAllQuiz();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
              showConfirmButton: false,
              timer: 2000,
            });
            fetchAllQuiz();
          }
        } catch (error) {
          setLoading(false);
          toast.error("Failed to delete");
          console.log("Failed to delete/", error?.response);
        }
        fetchAllQuiz();
      }
    });
    setLoading(false);
  };

  // ========> Question Tag Update Modal <=========//
  const handleUpdateQuiz = (questionData) => {
    setType("update");
    setViewData(questionData);
    setShowQuizForm(true);
  };

  //=========>  Quiz view modal  <========//
  const [quizViewModal, setQuizViewModal] = useState(false);
  const [quizViewData, setQuizViewData] = useState({});
  const handleQuizView = (quizData) => {
    setQuizViewData(quizData);
    setQuizViewModal(!quizViewModal);
  };

  return (
    <div>
      {!showQuizForm ? (
        <div className="px-[13px] w-full lg:w-[1100px] mb-10 mx-auto">
          <div className="px-[13px] w-full lg:w-[1100px] mb-10 mx-auto">
            <div className="bg-white rounded-[10px] flex justify-between p-2.5">
              <div>
                <h2 className="text-[28px] font-[600] text_black_gray leading-[40px] ">
                  Manage Quiz
                </h2>
              </div>
              <div>
                <button
                  onClick={() => setShowQuizForm(true)}
                  className="p-2.5 text-white primary_green rounded-[5px] text-[14px] font-[400] leading-[18px] flex flex-row items-center gap-1"
                >
                  <img className="w-5" src={plus_white} alt="" />
                  Add New Quiz
                </button>
              </div>
            </div>

            <div>
              <QuizList
                allQuiz={allQuiz}
                handleUpdateQuiz={handleUpdateQuiz}
                handleDeleteQuiz={handleDeleteQuiz}
                handleQuizView={handleQuizView}
              />
            </div>
          </div>
        </div>
      ) : (
        <QuizCreateUpdate
          type={type}
          viewData={viewData}
          fetchAllQuiz={fetchAllQuiz}
          showQuizForm={showQuizForm}
          setShowQuizForm={setShowQuizForm}
        />
      )}

      {quizViewModal && (
        <QuizViewModal
          quizViewData={quizViewData}
          quizViewModal={quizViewModal}
          setQuizViewModal={setQuizViewModal}
        />
      )}
    </div>
  );
};

export default ManageQuiz;
