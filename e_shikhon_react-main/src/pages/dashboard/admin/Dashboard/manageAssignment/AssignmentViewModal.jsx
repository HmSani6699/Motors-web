import React from 'react';
import ReactQuill from 'react-quill';
import down_arrow from "../../../../../assets/svg/down_arrow.svg";

const AssignmentViewModal = ({
    assignmentViewData,
    setAssignmentViewModal,
    assignmentViewModal }) => {
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
    console.log(assignmentViewData, 'assignmentViewData')
    return (
        <>
            <div className="fade-in-down justify-center items-center flex overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto  my-6 mx-auto ">
                    <div className="border-0 p-5 rounded-[10px] shadow-lg relative flex flex-col bg-white outline-none w-[1168px] h-[570px] focus:outline-none overflow-auto">
                        <div className="flex justify-between   ">
                            <div className="flex items-center gap-2">
                                {/* <img src={batch_icon} alt="" /> */}
                                <h1 className="text-[#1D5276] text-[20px] font-[700] leading-[28px] ">
                                    View Assignment
                                </h1>
                            </div>
                            <button
                                className="flex items-center gap-1 text-[#D42428] text-[16px] font-[400] "
                                onClick={() => setAssignmentViewModal(!assignmentViewModal)}
                            >
                                Close
                            </button>
                        </div>


                        <div className={`w-full ${btnHide ? 'pointer-events-none' : ''}`}>
                            <div className="pt-10 flex flex-col gap-5 ">
                                <div className="flex flex-row w-full gap-14">
                                    <div className="w-full">
                                        <label className="text-[16px] font-[400] leading-[22px]">
                                            Title
                                        </label>
                                        <input
                                            type="text"
                                            value={assignmentViewData?.title}
                                            className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <label className="text-[16px] font-[400] leading-[22px]">
                                            Author
                                        </label>
                                        <input
                                            type="text"
                                            value={assignmentViewData?.author_data ? assignmentViewData?.author_data.fullName : 'N/A'}
                                            className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
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
                                        value={assignmentViewData?.description}
                                        className="h-[185px] bg-white overflow-hidden rounded-[5px] border border-[#E3E5E8]"
                                    />
                                </div>
                                <div className="flex flex-row w-full gap-14">
                                    <div className="w-full">
                                        <label className="text-[16px] font-[400] leading-[22px]">
                                            Assignment Sub-Title
                                        </label>
                                        <input
                                            type="text"
                                            value={assignmentViewData?.subTitle}
                                            className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <label className="text-[16px] font-[400] leading-[22px]">
                                            Assignment Maximum Marks
                                        </label>
                                        <input
                                            type="text"
                                            value={assignmentViewData?.maximumMarks}
                                            className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                                        />
                                    </div>

                                </div>
                                <div className="flex flex-row w-full gap-14">
                                    <div className="w-full">
                                        <label className="text-[16px] font-[400] leading-[22px]">
                                            Assignment Maximum Time limit ( Days )
                                        </label>
                                        <input
                                            type="text"
                                            value={assignmentViewData?.timelimit}
                                            className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <label className="text-[16px] font-[400] leading-[22px]">
                                            Start Date
                                        </label>
                                        <input
                                            type="text"
                                            value={assignmentViewData?.start_date}
                                            className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-row w-full gap-14">
                                    <div className="w-full">
                                        <label className="text-[16px] font-[400] leading-[22px]">
                                            Include in Course
                                        </label>
                                        <input
                                            type="text"
                                            value={assignmentViewData?.includInCourse}
                                            className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                                        />
                                    </div>
                                    <div className="w-full relative">
                                        <label
                                            className={`text-[16px] font-[400] leading-[22px]`}
                                        >
                                            Assignment Submissions
                                        </label>
                                        <select
                                            className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                                        >
                                            <option value={assignmentViewData?.assignmentSubmissions}>
                                                {assignmentViewData?.assignmentSubmissions}
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
                                    <div className="w-full relative">
                                        <label
                                            className={`text-[16px] font-[400] leading-[22px]`}
                                        >
                                            Attachment Type
                                        </label>
                                        <select
                                            className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                                        >
                                            <option value={assignmentViewData?.attachmentType}>
                                                {assignmentViewData?.attachmentType}
                                            </option>
                                        </select>
                                        <img
                                            src={down_arrow}
                                            alt="icon"
                                            className="absolute top-[50px] right-2 transform -translate-y-1/2"
                                        />
                                    </div>
                                    <div className="w-full relative">
                                        <label
                                            className={`text-[16px] font-[400] leading-[22px]`}
                                        >
                                            Duration Parameter
                                        </label>
                                        <select
                                            className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                                        >
                                            <option value={assignmentViewData?.durationParameter}>
                                                {assignmentViewData?.durationParameter}
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
                                    <div className="w-full flex flex-row items-center justify-between">
                                        <h2 className="text-[18px] font-[500] text_black_gray leading-[22px]">
                                            Include in Course Evaluation
                                        </h2>
                                        <label
                                            htmlFor='1uniqueId'
                                            className="inline-flex items-center space-x-4 cursor-pointer "
                                        >
                                            <span className="relative">
                                                <input
                                                    id="1uniqueId"
                                                    type="checkbox"
                                                    className="hidden peer"
                                                    checked={assignmentViewData?.autoEvaluation}
                                                />
                                                <div className={`w-14 h-8 rounded-full shadow-inner bg-white border ${assignmentViewData?.autoEvaluation === 'true' ? 'border-[#20AC90]' : ''}`}></div>
                                                <div className={`absolute inset-y-0 left-0 w-6 h-6 m-1 rounded-full shadow ${assignmentViewData?.autoEvaluation === 'true' ? 'peer-checked:right-0 peer-checked:left-auto bg-[#20AC90]' : 'bg-[#C7CAD1]'}`}></div>
                                            </span>
                                        </label>
                                    </div>
                                    <div className="w-full">
                                        <label className="text-[16px] font-[400] leading-[22px]">
                                            Attachment Size (in MB)
                                        </label>
                                        <input
                                            type="text"
                                            value={assignmentViewData?.attachmentSize}
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

export default AssignmentViewModal;