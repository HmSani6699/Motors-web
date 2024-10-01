import React from 'react';
import CurriculumInput from '../../../../../components/Course/CurriculumInput';
import down_arrow from "../../../../../assets/svg/down_arrow.svg";
import moment from 'moment';
import { transformData } from '../../../../../api/helper';

const BatchViewModal = ({ batchViewData, batchViewModal, setBatchViewModal }) => {
    // console.log(batchViewData, 'batchViewData')
    const curriculum = transformData(batchViewData.courseCurriculum);
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
                                    View Batch
                                </h1>
                            </div>
                            <button
                                className="flex items-center gap-1 text-[#D42428] text-[16px] font-[400] "
                                onClick={() => setBatchViewModal(!batchViewModal)}
                            >
                                Close
                            </button>
                        </div>


                        <div className={`w-full ${btnHide ? 'pointer-events-none' : ''}`} >
                            <div className="pt-10 flex flex-col gap-5 ">
                                <div className="w-full">
                                    <label className="text-[16px] font-[400] leading-[22px]">
                                        Selected Course
                                    </label>

                                    <input
                                        type="text"
                                        value={batchViewData?.course.courseTitle}
                                        className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                                        placeholder={`Enter Course Name`}
                                    />

                                </div>
                                <div className="flex flex-row w-full gap-14">

                                    <div className="w-full">
                                        <label className={`text-[16px] font-[400] leading-[22px]`}>Total seats</label>
                                        <input
                                            value={batchViewData?.seats}
                                            className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                                            type='text'
                                        />
                                    </div>

                                    <div className="w-full">
                                        <label className={`text-[16px] font-[400] leading-[22px]`}>Dummy Participants</label>
                                        <input
                                            value={batchViewData?.
                                                dummy_participants}
                                            className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                                            type='text'
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-row w-full gap-14">
                                    <div className="w-full">
                                        <label className={`text-[16px] font-[400] leading-[22px]`}>Start Date</label>
                                        <input
                                            value={moment(batchViewData?.start_date).format("ll")}
                                            className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                                            type='text'
                                        />
                                    </div>
                                    <div className="w-full">
                                        <label className={`text-[16px] font-[400] leading-[22px]`}>End Date</label>
                                        <input
                                            value={moment(batchViewData?.end_date).format("ll")}
                                            className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                                            type='text'
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-row w-full gap-14">
                                    <div className="w-full relative glow-container glow-card glows">
                                        <label className="text-[16px] font-[400] leading-[22px]">
                                            Schedule Date
                                        </label>
                                        <div className="border border-[#E3E5E8]  rounded bg-slate-50 hover:border-[#7EE7D2]">
                                            <select
                                               
                                                className="w-full py-2 px-2 text-[16px] font-[400] outline-none "
                                            >
                                                <option value="">{"Please select"}</option>
                                                {batchViewData?.scheduleDay.length &&
                                                    batchViewData?.scheduleDay.map((data, i) => (
                                                        <option key={i} value={data}>
                                                            {data}
                                                        </option>
                                                    ))}
                                            </select>
                                            <img
                                                src={down_arrow}
                                                alt="icon"
                                                className="absolute top-[50px] right-3 transform -translate-y-3/4"
                                            />
                                            <div
                                                className={`flex flex-row flex-wrap gap-2 px-1 ${batchViewData?.scheduleDay.length >= 1 && "mt-1.5 mb-1.5"
                                                    }`}
                                            >
                                                {batchViewData?.scheduleDay.map((date) => (
                                                    <div
                                                        key={date}
                                                        className="flex items-center gap-1.5 px-2 bg-[#9ddccf] rounded-3xl "
                                                    >
                                                        <span>{date}</span>
                                                        {/* <RxCrossCircled
                                            onClick={() => removeSelectedDate(date)}
                                            className="text-red-500 cursor-pointer"
                                        /> */}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <label className={`text-[16px] font-[400] leading-[22px]`}>Schedule Time</label>
                                        <input
                                            value={batchViewData?.scheduleTime}
                                            className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                                            type='time'
                                        />
                                    </div>
                                </div>

                                {/* curriculum */}

                                <div className="">
                                    <p className="text-center">Course Curriculum </p>
                                    {curriculum &&
                                        curriculum.map((data, i) => (
                                            <CurriculumInput
                                                key={i}
                                                i={i}
                                                data={data}
                                                btnHide={btnHide}
                                            />
                                        ))}
                                    {
                                        curriculum.map((data, i) => {
                                            console.log(data, 'data')
                                        })
                                    }
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

export default BatchViewModal;