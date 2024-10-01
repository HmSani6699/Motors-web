import React from 'react';

const TimerTow = ({ firstNum, SecNum, text }) => {
    return (
        <div className="flex flex-col gap-2 md:gap-3">
            <div className="flex gap-1">
                <p className="rounded-[3px] bg-primary_100 w-7 py-[3px] px-[5px] box-border font-Baloo text-white flex flex-col items-center justify-center leading-[22px]">
                    {firstNum}
                </p>
                <p className="rounded-[3px] bg-primary_100 w-7 py-[3px] px-[5px] box-border font-Baloo text-white flex flex-col items-center justify-center leading-[22px]">
                    {SecNum}
                </p>
            </div>
            <p className="text-primary_color leading-[22px] text-center font-Baloo font-[500]">
                {text}
            </p>
        </div>
    );
};

export default TimerTow;