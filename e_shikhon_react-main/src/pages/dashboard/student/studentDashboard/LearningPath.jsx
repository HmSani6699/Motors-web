import React from 'react';
import learningPathImage from "../../../../assets/images/learningPath.png"

const LearningPath = () => {
    return (
        <div className="w-full max-w-[1033px] mx-auto px-[13px] mb-10">
            <div className="border-b-2 border-[#C7CAD1]">
                <div>
                    <h2 className="text-[18px] md:text-[24px] lg:text-[36px] font-[600] text_black_gray leading-[18px] md:leading-[32px] lg:leading-[40px] pb-3">
                        লার্নিং পাথ
                    </h2>
                </div>
            </div>

            <div className='w-full flex flex-col items-center justify-center py-5'>
                <img className='rounded' src={learningPathImage} alt="learningPathImage" />
                <button className="flex items-center justify-center mt-7 px-4 py-2.5 bg-[#20AC90] rounded-[5px] text-white">
                    লার্নিং পাথ তৈরি করুন
                </button>

            </div>
        </div>
    );
};

export default LearningPath;