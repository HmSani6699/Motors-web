import React from 'react';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AddFAQ = ({ value, setValue, handleRemoveAboutCourse, index, btnHide }) => {

    const handleTitleChange = (e) => {
        setValue((prev) => {
            const updatedAboutCourse = [...prev];
            updatedAboutCourse[index].title = e.target.value;
            return updatedAboutCourse;
        });
    };

    const handleAnswerChange = (value) => {
        setValue((prev) => {
            const updatedAboutCourse = [...prev];
            updatedAboutCourse[index].answer = value;
            return updatedAboutCourse;
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
    // console.log(updatedAboutCourse, "updated")
    return (
        <div className="mt-3">
            <div className="w-full">
                <label className="text-[16px] font-[400] leading-[22px]">Title</label>
                <input
                    value={value.title}
                    onChange={handleTitleChange}
                    className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                    type="text"
                    placeholder={`Enter Title`}
                />
            </div>

            <div className="w-full relative mt-3">
                <label
                    htmlFor="HeadlineAct"
                    className="text-[16px] font-[400] leading-[22px] mb-3"
                >
                    Answer
                </label>

                <ReactQuill
                    modules={module}
                    theme="snow"
                    value={value.answer}
                    onChange={handleAnswerChange}
                    className="h-[185px] bg-white overflow-hidden rounded-[5px] border border-[#E3E5E8]"
                />
            </div>
            {index !== 0 && (
                <div className="flex justify-end mt-2">
                    {btnHide ? '' : <button
                        type="button"
                        onClick={() => handleRemoveAboutCourse(index)}
                        className="flex flex-row gap-1 items-center  text-[16px] font-[500] leading-[20px]  text-red-600"
                    >
                        - Remove
                    </button>}
                </div>
            )}
        </div>
    );
};

export default AddFAQ;