import React from 'react';
import down_arrow from "../../assets/svg/down_arrow.svg";


const SelectInputForInstructorName = ({ title, value, setValue, options = [] }) => {
    // console.log(setValue,'jiiii')
    return (
        <div className="w-full relative">
            <label className="text-[16px] font-[400] leading-[22px]">{title}</label>
           
                <select
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                >
                    <option value="">Please select</option>
                    {
                        options.map((data) => (
                            <option key={data.id} value={data.user.fullName} >
                                {data.user.fullName}
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

export default SelectInputForInstructorName;