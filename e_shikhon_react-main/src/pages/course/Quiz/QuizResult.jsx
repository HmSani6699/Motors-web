import React from "react";
import arrowRight from "../../../assets/svg/arrow-right-btn.svg";
import iq_icon from "../../../assets/svg/iq_icon_quiz.svg";
import attempts_icon from "../../../assets/svg/attempts_quiz.svg";
import mainGrade_icon from "../../../assets/svg/mainGrade_quiz.svg";
import quiz_status_icon from "../../../assets/svg/quizstatus_quiz.svg";

const QuizResult = ({ quiz, quizResult, setQuizPage, updateQuizResult }) => {
  return (
    <div>
      <div className="bg-white p-4 rounded-[8px]">
        <div className="grid grid-cols-4">
          <div className="flex flex-col gap-2 items-center justify-center">
            <img src={iq_icon} alt="" />
            <div>
              <h2 className="text-[28px] font-[700] leading-[33px] text-center">
                {quiz?.number_of_questions || 0}
              </h2>
              <h3 className="text-[14px] font-[400] leading-[10px] text-center">
                Questions
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center">
            <img src={attempts_icon} alt="" />
            <div>
              <h2 className="text-[28px] font-[700] leading-[33px] text-center">
                {quizResult?.retakes ? quizResult?.retakes : 0}
              </h2>
              <h3 className="text-[14px] font-[400] leading-[10px] text-center">
                Attempts
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center">
            <img src={mainGrade_icon} alt="" />
            <div>
              <h2 className="text-[28px] font-[700] leading-[33px] text-center">
                {parseFloat(quizResult?.quiz_mark || 0)} /{" "}
                {quiz?.marks
                  ? parseFloat(quiz?.marks || 0) *
                    parseFloat(quiz?.number_of_questions || 0)
                  : 0}
              </h2>
              <h3 className="text-[14px] font-[400] leading-[10px] text-center">
                Obtained Grade
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center">
            <img src={quiz_status_icon} alt="" />
            <div>
              {parseFloat(quiz?.result?.[0]?.quiz_mark || 0) >=
              parseFloat(quiz?.passing_marks || 0) ? (
                <h2 className="text-[28px] font-[700] leading-[33px] text-center text_green">
                  Passed
                </h2>
              ) : (
                <h2 className="text-[28px] font-[700] leading-[33px] text-center text-red-500">
                  Failed
                </h2>
              )}
              <h3 className="text-[14px] font-[400] leading-[10px] text-center">
                Main Grade
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-[10px] p-7 my-7 w-full ">
        <div className="border-b pb-3">
          <h3 className="text-[16px] font-[600] leading-[10px] text-[#1D5276] text-center">
            অভিনন্দন!
            <span className="font-[400] text-[#17191C]"> আপনি সফলভাবে </span>
            <span className="text-[16px] font-[600] leading-[10px] text-[#17191C]">
              {quiz?.title}
            </span>
            <span className="font-[400] text-[#17191C]">
              {" "}
              কুইজ সম্পন্ন করেছেন!{" "}
            </span>
          </h3>
        </div>
        <div className="px-5 my-7">
          <ul className="list-disc  text-[#2E3138]">
            <li lassName=" text-[18px] md:text-[14px] font-[400] md:font-[400] leading-[22px] md:leading-[22px]">
              আপনার কুইজ ফলাফল দেখতে উপরে ডান পাশে ‘CHECK RESULTS’ এ ক্লিক করুন।
              এরপর একদম নিচের দিকে ফলাফল দেখতে পাবেন।
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center gap-10">
          {parseFloat(quiz?.number_of_extra_quiz_retakes || 0) -
            parseFloat(quizResult?.retakes || 0) ===
          0 ? null : (
            <h1
              onClick={updateQuizResult}
              className="text-[#1D5276] text-[20px] font-[500] leading-[18px] cursor-pointer"
            >
              আবার চেষ্টা করুন
            </h1>
          )}
          <button
            onClick={() => setQuizPage("checkResult")}
            type="button"
            className="bg-[#20AC90] font-Baloo py-[10px] px-5  gap-2 rounded-[5px] text-[#F1F1F1] flex items-center"
          >
            চেক কুইজ রিজাল্ট
            <img src={arrowRight} alt="icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizResult;
