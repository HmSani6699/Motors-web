import React from "react";

const Modal = ({ modal, setModal, children, title }) => {
  return (
    <>
      <div className="fade-in-down justify-center items-center flex overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative  my-6 mx-auto  w-9/12 h-[570px]">
          <div className="flex justify-center items-center absolute top-5 right-8 ">
            <span
              onClick={() => setModal(!modal)}
              className="text-[25px] cursor-pointer z-50 hover:bg-[#20ac90]/80 px-1.5 py-[6px] rounded-md leading-3 bg-[#20ac90] shadow-xl text-white"
            >
              &times;
            </span>
          </div>
          <div className="border-0 p-5 rounded-[10px] shadow-lg relative flex flex-col bg-white outline-none w-full h-full focus:outline-none overflow-auto">
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                {title && (
                  <h1 className="text-[#1D5276] text-[20px] font-[700] leading-[28px] ">
                    {title}
                  </h1>
                )}
              </div>
            </div>
            <div>{children}</div>
          </div>
        </div>
      </div>
      <div className=" fixed inset-0 z-40 bg-[#08324FDB]"></div>
    </>
  );
};

export default Modal;
