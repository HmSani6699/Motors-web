import React from "react";

const InputFiled = ({ placeholder, tepe = "text" }) => {
  return (
    <>
      <input
        className="py-[16px] px-[24px] border border-[#EFEFEF] rounded-[8px] w-full outline-none bg-[#FFF] shadow-sm"
        type={tepe}
        placeholder={placeholder}
      />
    </>
  );
};

export default InputFiled;
