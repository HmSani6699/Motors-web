import React from "react";
import ReactQuill from "react-quill";
import down_arrow from "../../assets/svg/down_arrow.svg";
import moment from "moment";

const ViewEditModal = ({ unitViewData, unitViewModal, setUnitViewModal }) => {
  console.log(unitViewData, "unitViewData");
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
                  View Unit
                </h1>
              </div>
              <button
                className="flex items-center gap-1 text-[#D42428] text-[16px] font-[400] "
                onClick={() => setUnitViewModal(!unitViewModal)}
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
                      value={unitViewData?.title}
                      className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                    />
                  </div>
                  <div className="w-full">
                    <label className="text-[16px] font-[400] leading-[22px]">
                      Author
                    </label>
                    <input
                      type="text"
                      value={
                        unitViewData?.author_data
                          ? unitViewData?.author_data.fullName
                          : "N/A"
                      }
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
                    value={unitViewData?.description}
                    className="h-[185px] bg-white overflow-hidden rounded-[5px] border border-[#E3E5E8]"
                  />
                </div>

                <div className="flex flex-row w-full gap-14">
                  <div className="w-full relative">
                    <label className={`text-[16px] font-[400] leading-[22px]`}>
                      Unit for
                    </label>
                    <select className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5">
                      <option value={unitViewData?.type}>
                        {unitViewData?.type}
                      </option>
                    </select>
                    <img
                      src={down_arrow}
                      alt="icon"
                      className="absolute top-[50px] right-2 transform -translate-y-1/2"
                    />
                  </div>

                  <div className="w-full flex flex-row items-center justify-between">
                    <h2 className="text-[18px] font-[500] text_black_gray leading-[22px]">
                      Free Unit
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
                          checked={unitViewData?.free_unit}
                        />
                        <div
                          className={`w-14 h-8 rounded-full shadow-inner bg-white border ${
                            unitViewData?.free_unit === "true"
                              ? "border-[#20AC90]"
                              : ""
                          }`}
                        ></div>
                        <div
                          className={`absolute inset-y-0 left-0 w-6 h-6 m-1 rounded-full shadow ${
                            unitViewData?.free_unit === "true"
                              ? "peer-checked:right-0 peer-checked:left-auto bg-[#20AC90]"
                              : "bg-[#C7CAD1]"
                          }`}
                        ></div>
                      </span>
                    </label>
                  </div>
                </div>

                {/* <div className="flex flex-row w-full gap-14">
                                    <InputField value={forum} setValue={setForum} title="Forum" />
                                    <InputField
                                        value={connectAssignment}
                                        setValue={setConnectAssignment}
                                        title="Connect Assignment"
                                    />
                                </div> */}
                <div className="flex flex-row w-full gap-14">
                  <div className="w-full">
                    <label className="text-[16px] font-[400] leading-[22px]">
                      Duration
                    </label>
                    <input
                      type="text"
                      value={unitViewData?.unit_duration}
                      className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                    />
                  </div>
                  <div className="w-full relative">
                    <label className={`text-[16px] font-[400] leading-[22px]`}>
                      Duration parameter
                    </label>
                    <select className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5">
                      <option value={unitViewData?.unit_duration_parameter}>
                        {unitViewData?.unit_duration_parameter}
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
                  {unitViewData?.type === "ভিডিও কোর্স" ? (
                    <div className="w-full">
                      <label className="text-[16px] font-[400] leading-[22px]">
                        Video Link
                      </label>
                      <input
                        type="text"
                        value={unitViewData?.video_link}
                        className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                      />
                    </div>
                  ) : null}
                  {unitViewData?.type === "অনলাইন কোর্স" ? (
                    <>
                      <div className="w-full">
                        <label className="text-[16px] font-[400] leading-[22px]">
                          Zoom Link for Student
                        </label>
                        <input
                          type="text"
                          value={unitViewData?.link}
                          className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                        />
                      </div>
                      <div className="w-full">
                        <label className="text-[16px] font-[400] leading-[22px]">
                          Zoom Link for Instructor
                        </label>
                        <input
                          type="text"
                          value={unitViewData?.instructor_link}
                          className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                        />
                      </div>
                    </>
                  ) : null}
                </div>

                {unitViewData?.type === "অনলাইন কোর্স" ||
                unitViewData?.type === "অফলাইন কোর্স" ? (
                  <div className="flex flex-row w-full gap-14">
                    <div className="w-full">
                      <label
                        className={`text-[16px] font-[400] leading-[22px]`}
                      >
                        Start Date
                      </label>
                      <input
                        value={moment(unitViewData?.start_date).format("ll")}
                        className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                        type="text"
                      />
                    </div>
                    <div className="w-full">
                      <label
                        className={`text-[16px] font-[400] leading-[22px]`}
                      >
                        End Date
                      </label>
                      <input
                        value={moment(unitViewData?.endDate).format("ll")}
                        className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                        type="text"
                      />
                    </div>
                  </div>
                ) : null}

                {/* <div className="w-full relative pt-2.5">
                                    <div className="flex flex-row gap-[30px] justify-center w-full pt-5 border-t border-[#9096A2]">
                                        <button
                                            onClick={handleUpdateCategory}
                                            className="px-3 py-2 rounded-[8px]  text-[16px] font-[500] leading-[24px] text-white primary_green flex flex-row items-center gap-2"
                                        >
                                            {loading ? <Loading /> : "Update Unit"}
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

export default ViewEditModal;
