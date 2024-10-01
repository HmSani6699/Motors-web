import React from "react";

const HookInput = ({
  title,
  name,
  error,
  register,
  placeholder,
  type = "text",
  required = false,
  requiredMessage,
  disabled = false,
  handleOnChange = () => {},
}) => {
  const handleChange = (e) => {
    handleOnChange && handleOnChange(e.target.value);
  };

  return (
    <div className="w-full">
      <label htmlFor={name} className={`text-[16px] font-[400] leading-[22px]`}>
        {title}
      </label>

      <div className="w-full ">
        <input
          type={type}
          autoComplete="off"
          disabled={disabled}
          placeholder={placeholder ? placeholder : `Enter ${title}`}
          onWheel={(e) => type === "number" && e.target.blur()}
          className={`w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5 ${
            error ? "border-red-600" : "border-[#E3E5E8]"
          }`}
          {...(required
            ? register(name, {
                required: `${
                  requiredMessage ? requiredMessage : `${title} is Required`
                }`,
                onChange: handleChange,
              })
            : register(name, {
                onChange: handleChange,
              }))}
        />
        {error && <p className="text-red-400">{error?.message}</p>}
      </div>
    </div>
  );
};

export default HookInput;
