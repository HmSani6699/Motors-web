import React from "react";

const ToggleButton = ({ title, value, setValue }) => {
  const uniqueId = `toggle_${Math.random().toString(36).substring(2, 15)}`;

  const handleToggle = () => {
    setValue(!value);
  };

  return (
    <div className="w-full flex flex-row items-center justify-between">
      <h2 className="text-[18px] font-[500] text_black_gray leading-[22px]">
        {title}
      </h2>
      <label
        htmlFor={uniqueId}
        className="inline-flex items-center space-x-4 cursor-pointer "
      >
        <span className="relative">
          <input
            id={uniqueId}
            type="checkbox"
            className="hidden peer"
            checked={value}
            onChange={handleToggle}
          />
          <div className="w-14 h-8 rounded-full shadow-inner bg-white border peer-checked:border-[#20AC90]"></div>
          <div className="absolute inset-y-0 left-0 w-6 h-6 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-[#C7CAD1] peer-checked:bg-[#20AC90]"></div>
        </span>
      </label>
    </div>
  );
};

export default ToggleButton;
