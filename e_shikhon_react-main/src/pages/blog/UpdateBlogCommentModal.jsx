import React, { useEffect } from "react";
import close_icon from "../../assets/svg/close_icon.svg";
import right_arrow_btn from "../../assets/svg/arrow-right-btn.svg";
import { put } from "../../api/axious";

const UpdateBlogCommentModal = ({
  handleUpdateComment,
  data,
  setModalOpen,
  description,
  setDescription,
}) => {
  useEffect(() => {
    if (data) {
      setDescription(data?.description);
    }
  }, [data]);

  return (
    <div className="fixed inset-0 flex py-[50px] items-center justify-center bg-[#8bbf96c9] ">
      <div className="bg-[#f5f5f5] w-[600px]  p-[30px]  overflow-auto rounded-[10px]">
        <div className="flex justify-end mb-[30px]">
          <button onClick={() => setModalOpen(false)}>
            <img src={close_icon} alt="" />
          </button>
        </div>
        <h2 className="text-[#000] text-[18px] font-[400] leading-[22px] mb-[10px] mt-[30px]">
          মন্তব্য লিখুন
        </h2>
        <div>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className=" w-full h-[245px] rounded-[10px] border border-[#D1D5DB] outline-none p-2"
          ></textarea>
        </div>
        <div className="flex justify-end mt-[30px]">
          <button
            onClick={handleUpdateComment}
            type="button"
            className="text-center font-Baloo text-white bg-secandary_color flex items-center justify-center py-[10px] px-5  gap-2 rounded-[8px]"
          >
            জমা দিন
            <img src={right_arrow_btn} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateBlogCommentModal;
