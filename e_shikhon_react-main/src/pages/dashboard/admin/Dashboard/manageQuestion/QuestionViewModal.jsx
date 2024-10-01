import React from "react";
import down_arrow from "../../../../../assets/svg/down_arrow.svg";
const QuestionViewModal = ({
  questionViewData,
  questionViewModal,
  setQuestionViewModal,
}) => {
  console.log(questionViewData, "questionViewData");
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
                  View Question
                </h1>
              </div>
              <button
                className="flex items-center gap-1 text-[#D42428] text-[16px] font-[400] "
                onClick={() => setQuestionViewModal(!questionViewModal)}
              >
                Close
              </button>
            </div>

            <div className={`w-full ${btnHide ? "pointer-events-none" : ""}`}>
              <div className="pt-10 flex flex-col gap-5 ">
                <div className="flex flex-row w-full gap-14">
                  <div className="w-full">
                    <label className="text-[16px] font-[400] leading-[22px]">
                      Title
                    </label>
                    <input
                      type="text"
                      value={questionViewData?.title}
                      className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                    />
                  </div>
                  <div className="w-full">
                    <label className="text-[16px] font-[400] leading-[22px]">
                      Author
                    </label>
                    <input
                      type="text"
                      value={questionViewData?.author_data.fullName}
                      className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                    />
                  </div>
                </div>

                <div className="flex flex-row w-full gap-14">
                  <div className="w-full relative">
                    <label className={`text-[16px] font-[400] leading-[22px]`}>
                      Question Type
                    </label>
                    <select className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5">
                      <option value={questionViewData?.question_type}>
                        {questionViewData?.question_type}
                      </option>
                    </select>
                    <img
                      src={down_arrow}
                      alt="icon"
                      className="absolute top-[50px] right-2 transform -translate-y-1/2"
                    />
                  </div>
                  <div className="w-full">
                    <label className="text-[16px] font-[400] leading-[22px]">
                      Question
                    </label>
                    <input
                      type="text"
                      value={questionViewData?.question}
                      className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                    />
                  </div>
                </div>

                <div className="flex flex-row w-full gap-14">
                  <div className="w-full">
                    <label className="text-[16px] font-[400] leading-[22px]">
                      Question Options
                    </label>
                    {questionViewData?.options.map((data, i) => (
                      <div key={i} className="w-full flex items-center gap-2">
                        <div>
                          <p> {i + 1}:</p>
                        </div>
                        <input
                          type="text"
                          name="unit"
                          value={data}
                          className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                          placeholder={`Enter Option`}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="w-full relative">
                    <label className={`text-[16px] font-[400] leading-[22px]`}>
                      Correct Answer
                    </label>
                    <input
                      type="number"
                      value={questionViewData?.correct_ans}
                      className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                    />
                  </div>
                </div>

                <div className="flex flex-row w-full gap-14">
                  <div className="w-full">
                    <label className="text-[16px] font-[400] leading-[22px]">
                      Answer Hint
                    </label>
                    <input
                      type="text"
                      value={
                        questionViewData?.hint
                          ? questionViewData?.hint
                          : "No Hint"
                      }
                      className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                    />
                  </div>
                  <div className="w-full">
                    <label className="text-[16px] font-[400] leading-[22px]">
                      Code
                    </label>
                    <input
                      type="text"
                      value={questionViewData?.code}
                      className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                    />
                  </div>
                </div>
                <div className="flex flex-row w-full gap-14">
                  <div className="w-full">
                    <label className="text-[16px] font-[400] leading-[22px]">
                      Tag
                    </label>
                    <input
                      type="text"
                      value={
                        questionViewData?.tag
                          ? questionViewData?.tag[0].tag
                          : "No tag"
                      }
                      className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                    />
                  </div>
                  <div className="w-full">
                    <label className="text-[16px] font-[400] leading-[22px]">
                      Attachment
                    </label>
                    <input
                      type="text"
                      value={
                        questionViewData?.attachment
                          ? questionViewData?.attachment
                          : "No attachment"
                      }
                      className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" fixed inset-0 z-40 bg-[#08324FDB]"></div>
    </>
  );
};

export default QuestionViewModal;
