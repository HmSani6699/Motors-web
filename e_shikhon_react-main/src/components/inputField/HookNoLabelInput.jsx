import React from "react";

const HookNoLabelInput = ({
  type = "text",
  name,
  readOnly,
  errors,
  required,
  register,
  placeholder,
  requiredMessage,
  handleOnChange = () => {},
}) => {
  const handleChange = (e) => {
    let value = e.target.value;
    handleOnChange && handleOnChange(value);
  };

  return (
    <input
      disabled={readOnly}
      type={type}
      placeholder={placeholder ? placeholder : `Enter ...`}
      className={`w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5 ${
        errors ? "border-red-600" : "border-[#E3E5E8]"
      }`}
      {...(required
        ? register(name, {
            required: `${requiredMessage ? requiredMessage : `Required`}`,
            onChange: handleChange,
          })
        : register(name, {
            onChange: handleChange,
          }))}
    />
  );
};

export default HookNoLabelInput;
