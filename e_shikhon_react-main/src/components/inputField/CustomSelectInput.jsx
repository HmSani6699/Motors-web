import React from "react";
import down_arrow from "../../assets/svg/down_arrow.svg";

const CustomSelectInput = ({
  title,
  setValue,
  value,
  placeHolder,
  options = [],
  obj_name = "id",
  value_name = "data.id",
  displayPosition,
  isDisable = false,
  handleChang = () => {},
}) => {
  const getNestedValue = (obj, path) => {
    return path.split(".").reduce((acc, key) => (acc ? acc[key] : null), obj);
  };

  return (
    <div className="w-full relative">
      <label
        className={`text-[16px] font-[400] leading-[22px] ${
          displayPosition && displayPosition
        }`}
      >
        {title}
      </label>
      <select
        value={value}
        disabled={isDisable && isDisable}
        onChange={(e) => {
          handleChang(e.target.value), setValue(e.target.value);
        }}
        className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
      >
        <option value="">{placeHolder || "Please select"}</option>
        {options.length &&
          options?.map((data, i) => (
            <option key={i} value={getNestedValue(data, value_name)}>
              {getNestedValue(data, obj_name)}
            </option>
          ))}
      </select>
      <img
        src={down_arrow}
        alt="icon"
        className="absolute top-[50px] right-2 transform -translate-y-1/2"
      />
    </div>
  );
};

export default CustomSelectInput;
