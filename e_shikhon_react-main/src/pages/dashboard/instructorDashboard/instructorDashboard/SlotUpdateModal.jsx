import React, { useEffect } from "react";
import leftArrowIcon from "../../../../assets/svg/arrow-sm-left.svg";
import { patch, put } from "../../../../api/axious";
import toast from "react-hot-toast";

const SlotUpdateModal = ({
  data,
  user,
  setslotUpdateModalOpen,
  fetchAllSlot,
  endTime,
  setEndTime,
  startTime,
  setStartTime,
  slotDate,
  setSlotDate,
}) => {
  useEffect(() => {
    if (data) {
      setSlotDate(data?.date.slice(0, 10));
      setStartTime(data?.start_time);
      setEndTime(data?.end_time);
    }
  }, [data]);

  const handleUpdateslot = async (id) => {
    const formData = {
      instructor_id: user?.id,
      date: slotDate,
      start_time: startTime,
      end_time: endTime,
    };

    try {
      const res = await patch(`api/slot/update-slot/${id}`, formData);
      console.log(res);
      if (res?.message) {
        setslotUpdateModalOpen(false);
        setSlotDate();
        setStartTime();
        setEndTime();
        fetchAllSlot(user?.id);
        toast.success(res?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`fixed z-[100] flex items-center justify-center inset-0 bg-black/20 backdrop-blur-sm duration-100`}
    >
      <div className="bg-white p-[30px] rounded-lg">
        <div className="flex items-center mb-[30px] gap-2 ">
          <button onClick={() => setslotUpdateModalOpen(false)}>
            <img className="w-[25px] " src={leftArrowIcon} alt="" />
          </button>
          <h2 className=" text-[20px] font-semibold"> Slot Update</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="flex flex-col gap-2.5 w-full">
            <h2 className="text-[14px] font-[400] text_black leading-[18px]">
              Slot Date
            </h2>
            <div className="">
              <input
                value={slotDate}
                defaultValue={slotDate}
                onChange={(e) => setSlotDate(e.target.value)}
                className="w-full px-5 py-2.5 bg-[#F1F2F3] rounded-[50px] outline-none"
                type="date"
                placeholder="Slot Date"
              />
              {/* {formErrors.date && (
                <p className="text-red-500 text-sm mt-1 ml-[15px]">
                  {formErrors.date}
                </p>
              )} */}
            </div>
          </div>
          {/* start time */}
          <div className="flex flex-col gap-2.5 w-full">
            <h2 className="text-[14px] font-[400] text_black leading-[18px]">
              Start Time
            </h2>
            <div className="">
              <input
                value={startTime}
                defaultValue={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="w-full px-5 py-2.5 bg-[#F1F2F3] rounded-[50px] outline-none"
                type="time"
                placeholder="Start Time"
              />
              {/* {formErrors.start_time && (
                <p className="text-red-500 text-sm mt-1 ml-[15px]">
                  {formErrors.start_time}
                </p>
              )} */}
            </div>
          </div>
          {/* end time */}
          <div className="flex flex-col gap-2.5 w-full">
            <h2 className="text-[14px] font-[400] text_black leading-[18px]">
              End Time
            </h2>
            <div className="">
              <input
                value={endTime}
                defaultValue={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="w-full px-5 py-2.5 bg-[#F1F2F3] rounded-[50px] outline-none"
                type="time"
                placeholder="End Time"
              />
              {/* {formErrors.end_time && (
                <p className="text-red-500 text-sm mt-1 ml-[15px]">
                  {formErrors.end_time}
                </p>
              )} */}
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-[20px] ">
          <button
            onClick={() => handleUpdateslot(data?.id)}
            className="primary_green py-2 px-5 rounded-[5px] text-white mt-[10px]"
          >
            {/* <img src={plus_white} alt="" /> */}
            update
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlotUpdateModal;
