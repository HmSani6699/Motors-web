// import React from "react";

// const InputField = ({ title, type = "text", defValue, setValue, value, placeholder, displayPosition }) => {
//   return (
//     <div className="w-full">
//       <label className={`text-[16px] font-[400] leading-[22px] ${displayPosition && displayPosition}`}>{title}</label>
//       <input
//         value={value}
//         defaultValue={defValue ? defValue : ""}
//         onChange={(e) => setValue(e.target.value)}
//         className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
//         type={type}
//         placeholder={placeholder ? placeholder : `Enter ${title}`}
//       />
//     </div>
//   );
// };

// export default InputField;

const InputField = ({
  title,
  type = "text",
  value,
  defValue,
  setValue,
  placeholder,
  displayPosition,
}) => {
  return (
    <div className="w-full">
      <label
        className={`text-[16px] font-[400] leading-[22px] ${
          displayPosition && displayPosition
        }`}
      >
        {title}
      </label>
      <input
        defaultValue={defValue ? defValue : ""}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
        type={type}
        placeholder={placeholder ? placeholder : `Enter ${title}`}
      />
    </div>
  );
};

export default InputField;
