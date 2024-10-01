import React from "react";

const FormInput = ({
  title,
  name,
  error,
  register,
  placeholder,
  type = "text",
  required = false,
  requiredMessage = "Required",
  disabled = false,
  handleOnChange = () => {},
}) => {
  const handleChange = (e) => {
    handleOnChange && handleOnChange(e.target.value);
  };

  return (
    <div>
      <label
        htmlFor={name}
        className={`text-[#2E3138] text-[14px] md:text-[16px] font-[400] leading-[18px] md:leading-[22px] text-start`}
      >
        {title}
      </label>

      <div className="w-full py-2">
        <input
          type={type}
          autoComplete="off"
          disabled={disabled}
          placeholder={placeholder}
          onWheel={(e) => type === "number" && e.target.blur()}
          className={` py-2 w-full rounded border  px-4 text-[#9096A2] outline-none bg-[#F5F5F5] text-[14px] md:text-[16px] font-[400] ${
            error ? "border-red-600" : "border-[#E3E5E8]"
          }`}
          {...(required
            ? register(name, {
                required: `${requiredMessage}`,
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

export default FormInput;
