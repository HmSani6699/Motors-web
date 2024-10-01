import React from "react";
import down_arrow from "../../assets/svg/down_arrow.svg";

const HookSelect = ({
  title,
  name,
  error,
  register,
  required = false,
  placeholder,
  requiredMessage,
  label_name = "name",
  options = [],
  disabled = false,
  handleOnChange = () => {},
}) => {
  const handleChange = (e) => {
    handleOnChange && handleOnChange(e.target.value);
  };

  return (
    <div className="w-full relative">
      <label htmlFor={name} className={`text-[16px] font-[400] leading-[22px]`}>
        {title}
      </label>

      <div className="w-full ">
        <select
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
          disabled={disabled}
          className={`w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5 ${
            error ? "border-red-600" : "border-[#E3E5E8]"
          }`}
        >
          <option value="">{placeholder || "Please select"}</option>

          {options.length &&
            options.map((data, i) => (
              <option key={i} className="text-black" value={data.id}>
                {`${data?.[label_name]}`}
              </option>
            ))}
        </select>
        <img
          src={down_arrow}
          alt="icon"
          className="absolute top-[50px] right-2 transform -translate-y-1/2"
        />

        {error && <p className="text-red-400">{error?.message}</p>}
      </div>
    </div>
  );
};

export default HookSelect;
