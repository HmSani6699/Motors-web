import React, { useState } from "react";
import comment from "../../assets/svg/comment-question_green.svg";
import plus_green from "../../assets/svg/plus_Blue_Sapphire.svg";
import right_arrow from "../../assets/svg/arrow-right-btn.svg";
import { Link } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import InputField from "../inputField/InputField";
import AddFAQ from "./AddFAQ";

const FAQ = ({ setPage, next, pre , faqQuestionsAndAnswer,setFAQQuestionsAndAnswer, btnHide}) => {

  const handleAddFAQQuestionsAndAnswer = () => {
    setFAQQuestionsAndAnswer([
      ...faqQuestionsAndAnswer,
      {
        title: "",
        answer: "",
      },
    ]);
  };

  const handleRemoveFAQQuestionsAndAnswer = (index) => {
    setFAQQuestionsAndAnswer((prev) => {
      const newState = [...prev];
      newState.splice(index, 1);
      return newState;
    });
  };

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
  return (
    <>
      <div>
        {/*  */}
        <div className="py-5 px-2">
          <div className="flex flex-row gap-2 ">
            <img src={comment} alt="" />
            <h2 className="text-[24px] font-[700] text_black_gray leading-[32px] ">
              Faq Questions
            </h2>
          </div>
          
              <div className={`w-full relative pt-2.5 py-4 ${btnHide ? 'pointer-events-none' : ''}`}>
                {faqQuestionsAndAnswer.map((value, i) => (
                  <AddFAQ
                    key={i}
                    index={i}
                    value={value}
                    setValue={setFAQQuestionsAndAnswer}
                    handleRemoveAboutCourse={handleRemoveFAQQuestionsAndAnswer}
                    btnHide={btnHide}
                  />
                ))}

                <div className="flex justify-start pt-2.5">
                 {btnHide ? '' : <button
                  onClick={handleAddFAQQuestionsAndAnswer}
                  className="flex flex-row gap-1 items-center second_text_color text-[16px] font-[400] leading-[20px]">
                    <img src={plus_green} alt="" />
                    Add Question
                  </button>}
                </div>
              </div>
          <div className="flex flex-row gap-[30px] justify-end w-full pt-5 border-t border-[#9096A2]">
            <Link to="/manageCourse3">
            { btnHide ? '' : <button className="px-3 py-1.5 border rounded-[8px] border-[#17191C] text-[16px] font-[500] leading-[24px]">
              Cancel
            </button>}
            </Link>

        { btnHide ?  <button
              onClick={() => {
                setPage("Submit Process");
                next();
              }}
              className="px-3 py-2 rounded-[8px]  text-[16px] font-[500] leading-[24px] text-white primary_green flex flex-row items-center gap-2"
            >
             Next
              <img className="w-[12px]" src={right_arrow} alt="" />
            </button> :
            <button
              onClick={() => {
                setPage("Submit Process");
                next();
              }}
              className="px-3 py-2 rounded-[8px]  text-[16px] font-[500] leading-[24px] text-white primary_green flex flex-row items-center gap-2"
            >
              Save and Next
              <img className="w-[12px]" src={right_arrow} alt="" />
            </button>}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
