import React from "react";
import down_arrow from "../../../../../assets/svg/down_arrow.svg";
import ReactQuill from "react-quill";

const QuizViewModal = ({ quizViewData, quizViewModal, setQuizViewModal }) => {
  console.log(quizViewData, "quizViewData");
  var toolbarOptions = [
    ["bold", "underline", "clean"],
    [{ font: [] }],
    [{ color: [] }, { background: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ align: [] }],
    [{ indent: "-1" }, { indent: "+1" }],
    ["link", "video"],
    ["code-block", "blockquote", "image"],
  ];
  const module = {
    toolbar: toolbarOptions,
  };
  const btnHide = true;
  return (
    <>
      <div className="fade-in-down justify-center items-center flex overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto  my-6 mx-auto ">
          <div className="border-0 p-5 rounded-[10px] shadow-lg relative flex flex-col bg-white outline-none w-[1168px] h-[570px] focus:outline-none overflow-auto">
            <div className="flex justify-between   ">
              <div className="flex items-center gap-2">
                {/* <img src={batch_icon} alt="" /> */}
                <h1 className="text-[#1D5276] text-[20px] font-[700] leading-[28px] ">
                  View Quiz
                </h1>
              </div>
              <button
                className="flex items-center gap-1 text-[#D42428] text-[16px] font-[400] "
                onClick={() => setQuizViewModal(!quizViewModal)}
              >
                Close
              </button>
            </div>

            <div className={`w-full ${btnHide ? "pointer-events-none" : ""}`}>
              <div className="pt-10 flex flex-col gap-5 ">
                <div className="flex flex-row w-full gap-14">
                  <div className="w-full">
                    <label className={`text-[16px] font-[400] leading-[22px]`}>
                      Title
                    </label>
                    <input
                      value={quizViewData?.title}
                      className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                      type="text"
                    />
                  </div>

                  <div className="w-full">
                    <label className={`text-[16px] font-[400] leading-[22px]`}>
                      Author
                    </label>
                    <input
                      value={quizViewData?.author_data?.fullName}
                      className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                      type="text"
                    />
                  </div>
                </div>
                <div className="w-full relative">
                  <label
                    htmlFor="HeadlineAct"
                    className="text-[16px] font-[400] leading-[22px] mb-3"
                  >
                    Description
                  </label>

                  <ReactQuill
                    modules={module}
                    theme="snow"
                    value={quizViewData?.description}
                    className="h-[185px] bg-white overflow-hidden rounded-[5px] border border-[#E3E5E8]"
                  />
                </div>
                <div className="flex flex-row w-full gap-14">
                  <div className="w-full">
                    <label className={`text-[16px] font-[400] leading-[22px]`}>
                      Sub Title
                    </label>
                    <input
                      value={quizViewData?.quiz_subtitle}
                      className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                      type="text"
                    />
                  </div>

                  <div className="w-full">
                    <label className={`text-[16px] font-[400] leading-[22px]`}>
                      Connected Course
                    </label>
                    <input
                      value={quizViewData?.connected_course}
                      className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-row w-full gap-14">
                  <div className="w-full flex flex-row items-center justify-between">
                    <h2 className="text-[18px] font-[500] text_black_gray leading-[22px]">
                      Show result after submission
                    </h2>
                    <label
                      htmlFor="1uniqueId"
                      className="inline-flex items-center space-x-4 cursor-pointer "
                    >
                      <span className="relative">
                        <input
                          id="1uniqueId"
                          type="checkbox"
                          className="hidden peer"
                          checked={quizViewData?.show_result_after_submission}
                        />
                        <div
                          className={`w-14 h-8 rounded-full shadow-inner bg-white border ${
                            quizViewData?.show_result_after_submission ===
                            "true"
                              ? "border-[#20AC90]"
                              : ""
                          }`}
                        ></div>
                        <div
                          className={`absolute inset-y-0 left-0 w-6 h-6 m-1 rounded-full shadow ${
                            quizViewData?.show_result_after_submission ===
                            "true"
                              ? "peer-checked:right-0 peer-checked:left-auto bg-[#20AC90]"
                              : "bg-[#C7CAD1]"
                          }`}
                        ></div>
                      </span>
                    </label>
                  </div>
                  <div className="w-full flex flex-row items-center justify-between">
                    <h2 className="text-[18px] font-[500] text_black_gray leading-[22px]">
                      Auto evaluate results
                    </h2>
                    <label
                      htmlFor="2uniqueId"
                      className="inline-flex items-center space-x-4 cursor-pointer "
                    >
                      <span className="relative">
                        <input
                          id="2uniqueId"
                          type="checkbox"
                          className="hidden peer"
                          checked={quizViewData?.auto_evaluate_results}
                        />
                        <div
                          className={`w-14 h-8 rounded-full shadow-inner bg-white border ${
                            quizViewData?.auto_evaluate_results === "true"
                              ? "border-[#20AC90]"
                              : ""
                          }`}
                        ></div>
                        <div
                          className={`absolute inset-y-0 left-0 w-6 h-6 m-1 rounded-full shadow ${
                            quizViewData?.auto_evaluate_results === "true"
                              ? "peer-checked:right-0 peer-checked:left-auto bg-[#20AC90]"
                              : "bg-[#C7CAD1]"
                          }`}
                        ></div>
                      </span>
                    </label>
                  </div>
                </div>

                <div className="flex flex-row w-full gap-14">
                  <div className="w-full">
                    <label className={`text-[16px] font-[400] leading-[22px]`}>
                      Negative marks per Quiz
                    </label>
                    <input
                      value={
                        quizViewData?.negative_marks_per_quiz
                          ? quizViewData?.negative_marks_per_quiz
                          : 0
                      }
                      className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                      type="text"
                    />
                  </div>
                  <div className="w-full">
                    <label className={`text-[16px] font-[400] leading-[22px]`}>
                      Number of Quiz per page
                    </label>
                    <input
                      value={
                        quizViewData?.number_of_quiz_per_page
                          ? quizViewData?.number_of_quiz_per_page
                          : 0
                      }
                      className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-row w-full gap-14">
                  <div className="w-full relative">
                    <label className={`text-[16px] font-[400] leading-[22px]`}>
                      Type
                    </label>
                    <select className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5">
                      <option value={quizViewData?.type}>
                        {quizViewData?.type}
                      </option>
                    </select>
                    <img
                      src={down_arrow}
                      alt="icon"
                      className="absolute top-[50px] right-2 transform -translate-y-1/2"
                    />
                  </div>

                  <div className="w-full">
                    <label className={`text-[16px] font-[400] leading-[22px]`}>
                      Tag
                    </label>
                    <input
                      value={
                        quizViewData?.tags?.length > 0
                          ? quizViewData?.tags[0]?.tag
                          : ""
                      }
                      className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                      type="text"
                    />
                  </div>
                </div>

                <div className="flex flex-row w-full gap-14">
                  <div className="w-full">
                    <label className={`text-[16px] font-[400] leading-[22px]`}>
                      Number of extra Quiz retakes
                    </label>
                    <input
                      value={quizViewData?.number_of_extra_quiz_retakes}
                      className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                      type="text"
                    />
                  </div>
                  <div className="w-full">
                    <label className={`text-[16px] font-[400] leading-[22px]`}>
                      Number of Questions
                    </label>
                    <input
                      value={quizViewData?.number_of_questions}
                      className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-row w-full gap-14">
                  <div className="w-full">
                    <label className={`text-[16px] font-[400] leading-[22px]`}>
                      Marks
                    </label>
                    <input
                      value={quizViewData?.marks}
                      className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                      type="text"
                    />
                  </div>
                  <div className="w-full">
                    <label className={`text-[16px] font-[400] leading-[22px]`}>
                      Passing marks
                    </label>
                    <input
                      value={quizViewData?.passing_marks}
                      className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                      type="text"
                    />
                  </div>
                </div>

                <div className="flex flex-row w-full gap-14">
                  <div className="w-full">
                    <label className={`text-[16px] font-[400] leading-[22px]`}>
                      Quiz Duration
                    </label>
                    <input
                      value={quizViewData?.quiz_duration}
                      className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                      type="text"
                    />
                  </div>
                  <div className="w-full relative">
                    <label className={`text-[16px] font-[400] leading-[22px]`}>
                      Quiz Duration Parameter
                    </label>
                    <select className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5">
                      <option value={quizViewData?.quiz_duration_parameter}>
                        {quizViewData?.quiz_duration_parameter}
                      </option>
                    </select>
                    <img
                      src={down_arrow}
                      alt="icon"
                      className="absolute top-[50px] right-2 transform -translate-y-1/2"
                    />
                  </div>
                </div>
                <div className="flex flex-row w-full gap-14">
                  <div className="w-full">
                    <label className={`text-[16px] font-[400] leading-[22px]`}>
                      Attachment
                    </label>
                    <input
                      value={quizViewData?.attachment}
                      className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                      type="text"
                    />
                  </div>
                  <div className="w-full flex flex-row items-center justify-between">
                    <h2 className="text-[18px] font-[500] text_black_gray leading-[22px]">
                      Show result after submission
                    </h2>
                    <label
                      htmlFor="4uniqueId"
                      className="inline-flex items-center space-x-4 cursor-pointer "
                    >
                      <span className="relative">
                        <input
                          id="4uniqueId"
                          type="checkbox"
                          className="hidden peer"
                          checked={quizViewData?.randomize}
                        />
                        <div
                          className={`w-14 h-8 rounded-full shadow-inner bg-white border ${
                            quizViewData?.randomize === "true"
                              ? "border-[#20AC90]"
                              : ""
                          }`}
                        ></div>
                        <div
                          className={`absolute inset-y-0 left-0 w-6 h-6 m-1 rounded-full shadow ${
                            quizViewData?.randomize === "true"
                              ? "peer-checked:right-0 peer-checked:left-auto bg-[#20AC90]"
                              : "bg-[#C7CAD1]"
                          }`}
                        ></div>
                      </span>
                    </label>
                  </div>
                </div>
                <div className="flex flex-row w-1/2 gap-14">
                  <div className="w-full">
                    <label className={`text-[16px] font-[400] leading-[22px]`}>
                      Start Date
                    </label>
                    <input
                      value={quizViewData?.start_date}
                      className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                      type="text"
                    />
                  </div>
                </div>

                {/* end curriculum */}
                {/* <div className="w-full relative pt-2.5">
                                    <div className="flex flex-row gap-[30px] justify-center w-full pt-5 border-t border-[#9096A2]">
                                        <button
                            disabled={loading}
                            onClick={handleUpdateBatchData}
                            className="px-3 py-2 rounded-[8px]  text-[16px] font-[500] leading-[24px] text-white primary_green flex flex-row items-center gap-2"
                        >
                            {loading ? <Loading /> : "Update Batch"}
                        </button>
                                    </div>
                                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" fixed inset-0 z-40 bg-[#08324FDB]"></div>
    </>
  );
};

export default QuizViewModal;
