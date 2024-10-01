import React from "react";

const Checkbox = ({ id, label, isChecked, onChange }) => {
  return (
    <div className="flex flex-row items-center gap-2">
      <div>
        <input
          type="checkbox"
          id={id}
          className="hidden"
          checked={isChecked}
          onChange={onChange}
        />
        <label
          htmlFor={id}
          className={`w-5 h-5 rounded-full border-2 bg-white flex items-center justify-center cursor-pointer ${
            isChecked ? "border-[#20AC90]" : "border-gray-400"
          }`}
        >
          <div
            className={`w-3 h-3 rounded-full ${
              isChecked ? "bg-[#20AC90]" : "bg-white"
            }`}
          ></div>
        </label>
      </div>
      <label
        htmlFor={id}
        className="text-[16px] font-[400] text_black_gray leading-[32px] cursor-pointer"
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
