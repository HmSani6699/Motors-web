import React from "react";
import green_tick_icon from "../../../assets/svg/circel_green_tick.svg";
import { RxCross2 } from "react-icons/rx";
import { gettimeFormat } from "../../../api/helper";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const CheckResult = ({ courseData, quiz, quizResult, setQuizPage }) => {
  return (
    <div>
      <div className="bg-white p-5 w-full rounded-[16px] ">
        <div className="h-[500px] overflow-y-auto custom_scroll pr-3">
          <div className="flex flex-col gap-2">
            <h3 className="text-[16px] font-[400] leading-[19px] text-[#464A53] flex gap-2 ">
              <FaArrowAltCircleLeft
                className="cursor-pointer"
                onClick={() => setQuizPage("result")}
              />{" "}
              Course: {courseData?.courseTitle}
            </h3>
            <h3 className="text-[20px] font-[500] leading-[24px] text-[#2E3138]">
              Quiz 1: {quiz?.title}
            </h3>
            <h3 className="text-[16px] font-[400] leading-[19px] text-[#464A53]">
              Quiz Time: {quiz?.quiz_duration} Minutes
            </h3>
          </div>
          <div className="overflow-hidden rounded-[5px] border border-[#F1F2F3] mt-5">
            <table className="w-full text-left border-collapse table-auto">
              <thead>
                <tr className="bg-[#F1F2F3]">
                  <th
                    scope="col"
                    className="h-12 ps-2.5 text-[#2E3138] text-[16px] font-[500]"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="h-12 px-0 text-[#2E3138] text-[16px] font-[500] text-center"
                  >
                    Qsn
                  </th>
                  <th
                    scope="col"
                    className="h-12 px-0 text-[#2E3138] text-[16px] font-[500] text-center"
                  >
                    Total Mark
                  </th>
                  <th
                    scope="col"
                    className="h-12 px-0 text-[#2E3138] text-[16px] font-[500] text-center"
                  >
                    Correct
                  </th>
                  <th
                    scope="col"
                    className="h-12 px-0 text-[#2E3138] text-[16px] font-[500] text-center"
                  >
                    Encorrect
                  </th>
                  <th
                    scope="col"
                    className="h-12 px-0 text-[#2E3138] text-[16px] font-[500] text-center"
                  >
                    Earned Mark
                  </th>
                  <th
                    scope="col"
                    className="h-12 px-0 text-[#2E3138] text-[16px] font-[500] text-center"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="h-12 ps-2.5 py-2">
                    <h1 className="text_black_gray text-[16px] font-[500]">
                      {quiz?.result[0]
                        ? gettimeFormat(quiz?.result[0].createdAt)
                        : "N/A"}
                    </h1>
                  </td>
                  <td className="h-12 py-2">
                    <h1 className="text_black_gray text-[16px] font-[500] text-center">
                      {quiz?.number_of_questions}
                    </h1>
                  </td>
                  <td className="h-12 py-2">
                    <h1 className="text_black_gray text-[16px] font-[500 text-center">
                      {parseFloat(quiz?.number_of_questions || 0) *
                        parseFloat(quiz?.marks || 0)}
                    </h1>
                  </td>
                  <td className="h-12 py-2">
                    <h1 className="text_black_gray text-[16px] font-[500] text-center">
                      {parseFloat(quizResult.quiz_mark || 0) /
                        parseFloat(quiz?.marks) || 0}
                    </h1>
                  </td>
                  <td className="h-12 py-2">
                    <h1 className="text_black_gray text-[16px] font-[500] text-center">
                      {parseFloat(quiz?.number_of_questions || 0) -
                        parseFloat(quizResult.quiz_mark || 0) /
                          parseFloat(quiz?.marks || 0)}
                    </h1>
                  </td>
                  <td className="h-12 py-2">
                    <h1 className="text_black_gray text-[16px] font-[500] text-center">
                      {parseFloat(quizResult.quiz_mark || 0)}
                    </h1>
                  </td>
                  <td className="h-12 py-2 text-center">
                    {parseFloat(quiz?.passing_marks || 0) <=
                    parseFloat(quizResult.quiz_mark || 0) ? (
                      <h1 className="text_green text-[16px] font-[500]">
                        <span className="bg-[#D4F7F0] px-3 py-1 rounded-[50px]">
                          Passed
                        </span>
                      </h1>
                    ) : (
                      <h1 className="text-[#B3261E] text-[16px] font-[500]">
                        <span className="bg-[#FDE8E8] px-3 py-1 rounded-[50px]">
                          Failed
                        </span>
                      </h1>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <div>
              {quiz?.questions?.map((data, index) => (
                <React.Fragment key={index}>
                  <div className="mt-10">
                    <h1 className="text-[#2E3138] text-[18px] md:text-[16px] font-[500] md:font-[500] leading-[22px] md:leading-[22px] text-start border-b border-[#ACB0B9] pb-4">
                      <span className="text-black">Qsn {index + 1} : </span>
                      {data?.question}
                    </h1>
                  </div>
                  <div className="flex flex-col gap-2 pb-3 pt-5">
                    {data.options ? (
                      data.options.map((option, i) => (
                        <div key={i}>
                          <label
                            key={i}
                            htmlFor={`option_${i + 1}`}
                            className="flex gap-1 bg-[#F5F5F5] p-2 rounded-[5px] items-center pointer-events-none"
                          >
                            <input
                              className="w-4 h-4 cursor-pointer border-slate-500 border-2 rounded-full"
                              type="radio"
                              value={i + 1} // Change to index value
                              id={`option_${i + 1}`}
                              name={`quiz_option_${index}`}
                              checked={
                                (quiz?.result?.[0]?.answers?.[index] || 0) ==
                                (i + 1).toString()
                              }
                              onChange={(e) => console.log(e.target.checked)}
                            />

                            <span className="text-[#2E3138] text-[18px] md:text-[16px] font-[400] md:font-[400] leading-[22px] md:leading-[22px] text-start">
                              {option}
                            </span>
                          </label>
                        </div>
                      ))
                    ) : (
                      <h1>No Option Found!</h1>
                    )}
                  </div>

                  <h3
                    className={`text-[16px] font-[500] leading-[22px] ${
                      parseFloat(data?.correct_ans || 0) ===
                      parseFloat(quiz?.result?.[0]?.answers?.[index] || 0)
                        ? "text-[#18816C]"
                        : "text-[#B3261E]"
                    } `}
                  >
                    Correct Ans : {data?.correct_ans || "N/A"} / User Ans :{" "}
                    {quiz?.result?.[0]?.answers?.[index] || "Not Selected"}
                  </h3>
                  {renderResultCorrectOrWrong(
                    parseFloat(data?.correct_ans || 0) ===
                      parseFloat(quiz?.result?.[0]?.answers?.[index] || 0)
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckResult;

const renderResultCorrectOrWrong = (isCorrect) => {
  if (isCorrect) {
    return (
      <div className="bg-[#E9FBF8] py-2 px-3 flex rounded-[5px] gap-2 mt-2 ">
        <img className="w-[16px]" src={green_tick_icon} alt="Green Tick Icon" />
        <h3 className="text-[16px] font-[500] leading-[22px] text-[#18816C]">
          Correct
        </h3>
      </div>
    );
  } else {
    return (
      <div className="bg-[#FDE8E8] py-2 px-3 flex items-center rounded-[5px] gap-2 mt-2">
        <div className="p-0.5 rounded-full bg-[#ED4248] inline-blo">
          <RxCross2 className="text-white" />
        </div>
        <h3 className="text-[16px] font-[500] leading-[22px] text-[#B3261E]">
          Wrong
        </h3>
      </div>
    );
  }
};
