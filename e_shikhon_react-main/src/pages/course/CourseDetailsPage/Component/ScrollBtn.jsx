import React from "react";

const ScrollBtn = ({
  children,
  handleClick = () => {},
  selectedBtn,
  selected,
}) => {
  return (
    <button
      onClick={handleClick}
      className={`py-2 px-3 md:px-4 ${
        selectedBtn === selected
          ? "bg_blue"
          : "bg-white border border_gray_deep text_black"
      } rounded-[5px] text-white text-[16px] font-[500] leading-[22px] `}
    >
      {children}
    </button>
  );
};

export default ScrollBtn;
