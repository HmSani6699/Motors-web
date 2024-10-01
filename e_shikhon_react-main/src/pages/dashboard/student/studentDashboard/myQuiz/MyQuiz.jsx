import React, { useContext, useEffect, useState } from "react";
import classPNG from "../../../../../assets/images/course-img (3).png";
import { Link } from "react-router-dom";
import { IoCalendarOutline } from "react-icons/io5";
import toast from "react-hot-toast";
import { get } from "../../../../../api/axious";
import moment from "moment";
import { AuthContext } from "../../../../../layout/MainLayout";

const MyQuiz = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext)
  const [allQuizData, setAllQuizData] = useState([]);

  const myAllQuiz = async () => {
    setLoading(true);
    try {
      const res = await get(`/api/random_quiz_result/foruser/${user?.id}`);
      if (res?.success) {
        // navigate("/");
        setAllQuizData(res?.results);
      }
    } catch (error) {
      console.log("Failed to Post/", error?.response?.data);
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    myAllQuiz();
  }, []);

  // console.log(allQuizData);

  return (
    <>
      <div className="w-full max-w-[1015px] mx-auto px-[13px]">
        <div className="border-b-2 border-[#C7CAD1]">
          <div>
            <h2 className="text-[36px] font-[600] text_black_gray leading-[40px] pb-3">
              আমার কুইজ
            </h2>
          </div>
        </div>

        {/* table */}
        <div className="w-full overflow-x-auto py-[10px] flex justify-center">
          <table className="w-full text-left border-separate border-spacing-y-2">
            <thead>
              <tr className="bg-white ">
                <th className="h-10 ps-3 pe-6 text-[#2E3138] text-[16px] font-[500] rounded-s-[5px]">
                  Course
                </th>
                <th className="h-10 px-1 text-[#2E3138] text-[16px] font-[500] text-center">
                  Question
                </th>
                <th className="h-10 px-1 text-[#2E3138] text-[16px] font-[500] text-center">
                  Total Marks
                </th>
                <th className="h-10 px-1 text-[#2E3138] text-[16px] font-[500] text-center">
                  Correct Ans
                </th>
                <th className="h-10 px-1 text-[#2E3138] text-[16px] font-[500] text-center">
                  Incorrect Ans
                </th>
                <th className="h-10 px-1 text-[#2E3138] text-[16px] font-[500] text-center">
                  Earned Marks
                </th>
                <th className="h-10 px-1 text-[#2E3138] text-[16px] font-[500] text-center">
                  Status
                </th>
                <th className="h-10 px-1 text-[#2E3138] text-[16px] font-[500] rounded-e-[5px] text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {allQuizData?.length ? (
                allQuizData?.map((item, i) => (
                  <tr key={i} className="bg-white">
                    <td className="flex items-center gap-1.5 p-2 rounded-s-[5px] border-s border-t border-b border-[#C7CAD1]">
                      <img
                        src={classPNG}
                        alt="Course"
                        className="w-12 h-12 object-cover rounded-[5px]"
                      />
                      <div>
                        <h1 className="text_black text-[18px] font-[600] leading-[20px] line-clamp-1">
                          {item?.quiz_info?.title}
                        </h1>
                        <p className="text_gray text-sm flex items-center gap-1">
                          <IoCalendarOutline />{" "}
                          {moment(item?.createdAt).format("D MMM YYYY, h:mm A")}
                        </p>
                      </div>
                    </td>
                    <td className=" text-center px-1 py-2 border-t border-b border-[#C7CAD1]">
                      <h1 className="text_black_gray text-[16px] font-[500]">
                        {item?.total_ques}
                      </h1>
                    </td>
                    <td className="text-center px-1 py-2 border-t border-b border-[#C7CAD1]">
                      <h1 className="text_black_gray text-[16px] font-[500]">
                        {item?.total_marks}
                      </h1>
                    </td>
                    <td className="text-center px-1 py-2 border-t border-b border-[#C7CAD1]">
                      <h1 className="second_text_color text-[16px] font-[500]">
                        {item?.right_ans}
                      </h1>
                    </td>
                    <td className="text-center px-1 py-2 border-t border-b border-[#C7CAD1]">
                      <h1 className="second_text_color text-[16px] font-[500]">
                        {item?.total_ques - item?.right_ans}
                      </h1>
                    </td>
                    <td className="text-center px-1 py-2 border-t border-b border-[#C7CAD1]">
                      <h1 className="second_text_color text-[16px] font-[500]">
                        {item?.quiz_mark === null ? "Problem" : item?.quiz_mark}
                      </h1>
                    </td>
                    <td className="text-center px-1 py-2 border-t border-b border-[#C7CAD1]">
                      {item?.status === "Failed" ? (
                        <h1 className="text-[16px] font-[500] text-[#ED454A]">
                          {item?.status}
                        </h1>
                      ) : (
                        <h1 className="text-[16px] font-[500] text-[#20AC90]">
                          {item?.status}
                        </h1>
                      )}
                    </td>
                    <td className="text-center px-1 py-2 rounded-e-[5px] border-e border-t border-b border-[#C7CAD1]">
                      <Link to={`/student/quiz-Details/${item?.id}`}>
                        <button className="px-4 py-[4px] border border-[#2872A4] text-[#2872A4] rounded-[4px] hover:bg-[#2872A4] hover:text-white transition-all">
                          Details
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <span className="text-xl text-center my-10">
                  No Data Available 😥
                </span>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyQuiz;

