import React from "react";
import arrowRight from "../../../assets/svg/arrow-right-btn.svg";
import iq_icon from "../../../assets/svg/iq_icon_quiz.svg";
import attempts_icon from "../../../assets/svg/attempts_quiz.svg";
import mark_grade_icon from "../../../assets/svg/mark_grade_quiz.svg";
import time_icon from "../../../assets/svg/time_quiz.svg";
import Loading from "../../../components/sheared/Loading";

const PlayQuiz = ({
  quiz,
  currentQuestion,
  quizResult,
  selectedOptions,
  handleOptionChange,
  loading,
  handleNextQuestion,
  onSubmit,
  timer,
  progress,
}) => {
  return (
    <>
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
            <img src={mark_grade_icon} alt="" />
            <div>
              <h2 className="text-[28px] font-[700] leading-[33px] text-center">
                {quiz?.passing_marks ? quiz?.passing_marks : 0} /{" "}
                {quiz?.marks
                  ? parseFloat(quiz?.marks || 0) *
                    parseFloat(quiz?.number_of_questions || 0)
                  : 0}
              </h2>
              <h3 className="text-[14px] font-[400] leading-[10px] text-center">
                Min Grade
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center">
            <img src={attempts_icon} alt="" />
            <div>
              <h2 className="text-[28px] font-[700] leading-[33px] text-center">
                {quizResult?.retakes
                  ? parseFloat(quizResult?.retakes || 0) + 1
                  : 1}
              </h2>
              <h3 className="text-[14px] font-[400] leading-[10px] text-center">
                Attempts
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center">
            <img src={time_icon} alt="" />
            <div>
              <h2 className="text-[28px] font-[700] leading-[33px] text-center">
                {/* {quiz?.quiz_duration ? quiz?.quiz_duration : "N/A"} */}
                {Math.floor(timer / 60)
                  .toString()
                  .padStart(2, "0")}
                :{(timer % 60).toString().padStart(2, "0")}
              </h2>
              <h3 className="text-[14px] font-[400] leading-[10px] text-center">
                Remained time
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-[10px] p-4 my-7 w-full">
        <>
          <div className="bg-gray-200 rounded-full h-2.5 w-full mt-3">
            <div
              className="bg-[#20AC90] h-2.5 rounded-full"
              style={{
                width: `${(progress / quiz?.questions?.length) * 100}%`,
                transition: "width 0.5s ease-in-out",
              }}
            ></div>
          </div>

          {renderQuestion(
            quiz?.questions?.[currentQuestion],
            currentQuestion,
            handleOptionChange,
            selectedOptions
          )}
          {renderNavigation(
            currentQuestion,
            loading,
            handleNextQuestion,
            quiz,
            onSubmit
          )}
        </>
      </div>
    </>
  );
};

export default PlayQuiz;

const renderQuestion = (
  question,
  index,
  handleOptionChange,
  selectedOptions
) => (
  <div key={index}>
    <div className=" mt-5">
      <h1 className="text-[#2E3138] text-[18px] md:text-[16px] font-[500] md:font-[500] leading-[22px] md:leading-[22px] text-start border-b border-[#ACB0B9] pb-4">
        <span className="text-black">Qsn {index + 1}: </span>
        {question?.question}
      </h1>
    </div>
    <div className="flex flex-col gap-2 pb-8 pt-5">
      {question?.options ? (
        question?.options.map((option, i) => (
          <label
            key={i}
            htmlFor={`option_${i + 1}`}
            className="flex gap-1 bg-[#F5F5F5] p-2 rounded-[5px] items-center cursor-pointer"
          >
            <input
              className="w-4 h-4 cursor-pointer border-slate-500 border-2 rounded-full"
              type="radio"
              value={i + 1} // Change to index value
              id={`option_${i + 1}`}
              name={`quiz_option_${index}`}
              checked={selectedOptions[index] === (i + 1).toString()} // Compare with index
              onChange={handleOptionChange}
            />
            <span className="text-[#2E3138] text-[18px] md:text-[16px] font-[400] md:font-[400] leading-[22px] md:leading-[22px] text-start">
              {option}
            </span>
          </label>
        ))
      ) : (
        <h1>No Option Found!</h1>
      )}
    </div>
  </div>
);

const renderNavigation = (
  currentQuestion,
  loading,
  handleNextQuestion,
  quiz,
  onSubmit
) => (
  <div className="flex flex-row justify-between p-2 items-center rounded-[10px] border border-[#F5F5F5]">
    <h1 className="text-[#2E3138] text-[18px] md:text-[16px] font-[400] md:font-[400] leading-[22px] md:leading-[22px] text-start">
      <span className="font-semibold">{currentQuestion + 1}</span> of{" "}
      <span className="font-semibold">{quiz?.questions?.length}</span> Questions
    </h1>
    {currentQuestion < quiz?.questions?.length - 1 ? (
      <button
        type="button"
        className="bg-[#20AC90] font-Baloo py-[10px] px-5  gap-2 rounded-[5px] text-[#F1F1F1] flex items-center shrink-0"
        onClick={handleNextQuestion}
      >
        Next Question
        <img src={arrowRight} alt="icon" />
      </button>
    ) : (
      <button
        onClick={onSubmit}
        type="button"
        className="bg-[#20AC90] font-Baloo py-[10px] px-5  gap-2 rounded-[5px] text-[#F1F1F1] flex items-center shrink-0"
      >
        {loading ? (
          <Loading />
        ) : (
          <p className="flex justify-center items-center gap-2">
            Submit
            <img src={arrowRight} alt="icon" />
          </p>
        )}
      </button>
    )}
  </div>
);

// <div className="flex justify-between items-center mt-3">
// <button
//   onClick={clickPrevious}
//   className="px-3 min-w-[100px] py-2 rounded-[4px]  text-[16px] font-[500] leading-[24px] text-white primary_green text-center"
// >
//   Previous
// </button>

// <button
//   type="button"
//   onClick={clickNext}
//   className="px-3 min-w-[100px] py-2 rounded-[4px]  text-[16px] font-[500] leading-[24px] text-white primary_green text-center"
// >
//   Next
// </button>
// </div>
