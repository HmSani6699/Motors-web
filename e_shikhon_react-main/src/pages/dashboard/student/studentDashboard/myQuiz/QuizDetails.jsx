import React from "react";
import { IoCalendarOutline } from "react-icons/io5";
import leftArrowIcon from "../../../../../assets/svg/arrow-sm-left.svg";
import { Link, useParams } from "react-router-dom";
import { get } from "../../../../../api/axious";
import { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import moment from "moment";

const QuizDetails = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [quizDetails, setQuizDetails] = useState([]);

  const quizDetailsFn = async () => {
    setLoading(true);
    try {
      const res = await get(`/api/random_quiz_result/${id}`);
      if (res?.success) {
        // navigate("/");
        setQuizDetails(res?.result);
      }
    } catch (error) {
      console.log("Failed to Post/", error?.response?.data);
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    quizDetailsFn();
  }, []);

  console.log(quizDetails);

  return (
    <div className="w-full max-w-[1015px] mx-auto px-[13px]">
      <div className="border-b-2 border-[#C7CAD1]">
        <div className="flex items-center gap-2 mb-2">
          <Link to="/student/my-quiz">
            <img className="w-[25px] " src={leftArrowIcon} alt="" />
          </Link>
          <h2 className="text-[36px] font-[600] text_black_gray leading-[40px] ">
            Quiz Details
          </h2>
        </div>
      </div>

      {/* single quiz table */}

      <div className="bg-white p-4 w-full rounded-[16px] mt-8">
        <div className="flex flex-col gap-2">
          {/* <h3 className="text-[16px] font-[400] leading-[19px] text-[#464A53] flex gap-2 ">
            Course: UI/UX Design Course
          </h3> */}
          <h3 className="text-[20px] font-[500] leading-[24px] text-[#2E3138]">
            Quiz {id}: {quizDetails?.quiz_info?.title}
          </h3>
          <h3 className="text-[16px] font-[400] leading-[19px] text-[#464A53]">
            {/* todo time not gets api  */}
            Quiz Time: {quizDetails?.quiz_info?.quiz_duration} {quizDetails?.quiz_info?.quiz_duration_parameter} 
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
                  <h1 className="text_black_gray text-[16px] font-[500] flex items-center gap-1">
                    <IoCalendarOutline />{" "}
                    {moment(quizDetails?.createdAt).format(
                      "D MMM YYYY, h:mm A"
                    )}
                  </h1>
                </td>
                <td className="h-12 py-2">
                  <h1 className="text_black_gray text-[16px] font-[500] text-center">
                    {quizDetails?.total_ques}
                  </h1>
                </td>
                <td className="h-12 py-2">
                  <h1 className="text_black_gray text-[16px] font-[500 text-center">
                    {quizDetails?.total_marks}
                  </h1>
                </td>
                <td className="h-12 py-2">
                  <h1 className="text_black_gray text-[16px] font-[500] text-center">
                    {quizDetails?.right_ans}
                  </h1>
                </td>
                <td className="h-12 py-2">
                  <h1 className="text_black_gray text-[16px] font-[500] text-center">
                    {quizDetails?.total_ques - quizDetails?.right_ans}
                  </h1>
                </td>
                <td className="h-12 py-2">
                  <h1 className="text_black_gray text-[16px] font-[500] text-center">
                    {quizDetails?.quiz_mark === null
                      ? "Problem"
                      : quizDetails?.quiz_mark}
                  </h1>
                </td>
                <td className="h-12 py-2 text-center">
                  {quizDetails?.status !== "Failed" ? (
                    <h1 className="text_green text-[16px] font-[500]">
                      <span className="bg-[#D4F7F0] px-3 py-1 rounded-[50px]">
                        {quizDetails?.status}
                      </span>
                    </h1>
                  ) : (
                    <h1 className="text-[#B3261E] text-[16px] font-[500]">
                      <span className="bg-[#FDE8E8] px-3 py-1 rounded-[50px]">
                        {quizDetails?.status}
                      </span>
                    </h1>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* quiz details table */}
      <div className="bg-white p-4 w-full rounded-[16px] mt-8">
        <h3 className="text-[20px] font-[500] leading-[24px] text-[#2E3138]">
          Quiz Overview
        </h3>
        <div className="overflow-hidden rounded-[5px] border border-[#F1F2F3] mt-3">
          <table className="w-full text-left border-collapse table-auto">
            <thead>
              <tr className="bg-[#F1F2F3]">
                <th
                  scope="col"
                  className="h-12 ps-2.5 text-[#2E3138] text-[16px] font-[500] text-center"
                >
                  No
                </th>
                <th
                  scope="col"
                  className="h-12 px-0 text-[#2E3138] text-[16px] font-[500] text-center"
                >
                  Type
                </th>
                <th
                  scope="col"
                  className="h-12 ps-3 px-0 text-[#2E3138] text-[16px] font-[500] "
                >
                  Question
                </th>
                <th
                  scope="col"
                  className="h-12 px-0 text-[#2E3138] text-[16px] font-[500] text-center"
                >
                  Given Ans
                </th>
                <th
                  scope="col"
                  className="h-12 px-0 text-[#2E3138] text-[16px] font-[500] text-center"
                >
                  Correct Ans
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
              {quizDetails?.answers?.map((item, i) => (
                <tr key={i}>
                  <td className="h-12 ps-2.5 py-2">
                    <h1 className="text_black_gray text-[16px] font-[500] text-center">
                      {i + 1}
                    </h1>
                  </td>
                  <td className="h-12 py-2">
                    <h1 className="text_black_gray text-[16px] font-[500] text-center">
                      {item?.question_type}
                    </h1>
                  </td>
                  <td className="h-12 ps-3 py-2">
                    <h1 className="text_black_gray text-[16px] font-[500] ">
                      {item?.question}
                    </h1>
                  </td>
                  <td className="h-12 py-2">
                    <h1 className="text_black_gray text-[16px] font-[500] text-center">
                      {item?.givenAns ? item?.givenAns : "skip"}
                    </h1>
                  </td>
                  <td className="h-12 py-2">
                    <h1 className="text_black_gray text-[16px] font-[500] text-center">
                      {item?.correctAns}
                    </h1>
                  </td>
                  <td className="h-12 py-2 text-center">
                    {item?.status === "incorrect" ? (
                      <h1 className="text-[#ED4248] text-[16px] font-[500]">
                        <span className="bg-[#FEF5E7] px-3 py-1 rounded-[50px]">
                          Incorrect
                        </span>
                      </h1>
                    ) : (
                      <h1 className="text_green text-[16px] font-[500]">
                        <span className="bg-[#D4F7F0] px-3 py-1 rounded-[50px]">
                          correct
                        </span>
                      </h1>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default QuizDetails;

[
  {
    id: 16,

    quiz_id: 8,

    user_id: 1,

    right_ans: 1,

    total_ques: 5,

    total_marks: 1,

    answers: [
      {
        status: "correct",

        givenAns: "7",

        question: "What is 2 + 5 ?",

        correctAns: "7",

        question_type: "MCQ",
      },

      {
        status: "incorrect",

        givenAns: "5",

        question: "What is 10 - 7 ?",

        question_type: "MCQ",
      },

      {
        status: "incorrect",

        givenAns: "20",

        question: "What is 5 * 5 ?",

        correctAns: "25",

        question_type: "MCQ",
      },

      {
        status: "incorrect",

        givenAns: "8",

        question: "What is 4 + 5 ?",

        correctAns: "9",

        question_type: "MCQ",
      },

      {
        status: "incorrect",

        givenAns: "14",

        question: "What is 11 + 4 ?",

        correctAns: "15",

        question_type: "MCQ",
      },
    ],

    quiz_mark: 0,

    quiz_ans: ["4", "-1", "4", "3", "3"],

    isComplete: true,

    retakes: 0,

    status: "Failed",

    note: null,

    createdAt: "2024-09-14T17:49:07.081Z",

    updatedAt: "2024-09-14T17:49:07.081Z",

    author_info: {
      id: 1,

      fullName: "Jobayer Hossen",

      email: "jobayer@gmail.com",
    },

    quiz_info: {
      id: 8,

      title: "Digital Marketing Quiz",

      marks: "1",

      passing_marks: "3",
    },
  },
];
