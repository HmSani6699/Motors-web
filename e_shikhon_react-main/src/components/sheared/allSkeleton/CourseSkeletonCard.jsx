import React from 'react';

const CourseSkeletonCard = ({ btn }) => {
    return (
        <div>
            <article className="w-[250px] animate-pulse">
                <div className="relative rounded-t-[10px] overflow-hidden">
                    <div className="bg-gray-300 aspect-video h-[140px]"></div>
                </div>
                <div className={`w-full  bg-[#0A1D29] text-white rounded-b-[10px] flex flex-col p-3 gap-1 ${btn ? 'h-[150px]' : 'h-[110px]'} `}>
                    <div className="bg-gray-300 h-[28px] w-[98%] rounded"></div>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-1 items-center">
                            <div className="bg-gray-300 h-[20px] w-[20px] rounded-full"></div>
                            <div className="bg-gray-300 h-[18px] w-[90px] rounded"></div>
                        </div>
                        <div className="flex gap-1 items-center">
                            <div className="bg-gray-300 h-[20px] w-[20px] rounded-full"></div>
                            <div className="bg-gray-300 h-[18px] w-[30px] rounded"></div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <div className="bg-gray-300 h-[22px] w-[50px] rounded"></div>
                            <div className="bg-gray-300 h-[22px] w-[50px] rounded"></div>
                        </div>
                        <div className="flex gap-1 items-center">
                            <div className="bg-gray-300 h-[18px] w-[30px] rounded"></div>
                        </div>
                    </div>
                    {btn && <div className="flex justify-between items-center mt-2">
                        <div className="bg-gray-300 h-[35px] w-[100%] rounded"></div>
                    </div>}
                </div>
            </article>
        </div>
    );
};

export default CourseSkeletonCard;