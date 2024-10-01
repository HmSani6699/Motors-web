import React from 'react';
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";

const CountdownCard = ({ img, num, title, office }) => {

    return (
        <div className="flex justify-normal sm:justify-center items-center gap-2 mx-auto">
            <div>
                <img src={img} alt="student" className="w-[40px] md:w-[48px]" />
            </div>
            <div className="flex flex-col  gap-0 sm:gap-2">
                <h4 className="leading-[28px] md:leading-[36px] font-[700] sm:font-[600] font-Baloo text-primary_color text-xl lg:text-9xl ">
                    <Odometer value={num} format="(.ddd),dd" /> {title}
                </h4>
                <p className="leading-[18px] md:leading-[22px] font-[400] font-Baloo text-primary_color text-sm md:text-base">
                    {office}
                </p>
            </div>
        </div>
    );
};

export default CountdownCard;