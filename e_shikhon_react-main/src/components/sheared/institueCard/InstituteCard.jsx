import React from 'react';
import yellowStar from '../../../assets/svg/star_yellow.svg';
import right_arrow from '../../../assets/svg/right_arrow_black.svg';

const InstituteCard = ({ img, institute_name,totalCourse }) => {
    return (
        <div className='relative'>
            <div className="w-[270px] h-[246px] overflow-hidden rounded-[5px] bg-white text-center border relative ">
                <figure className="p-6 pb-0">
                    <span className="relative inline-flex h-20 items-center justify-center rounded-full text-white">
                        <img
                            src={img}
                            alt="user name"
                            title="user name"
                            width="80"
                            height="80"
                            className="max-w-full "
                        />
                    </span>
                </figure>
                <div className="p-6">
                    <header className="">
                        <h3 className="text-[16px] font-[500] leading-[22px]">
                            {institute_name}</h3>
                    </header>
                </div>

            </div>
            <div className="w-[270px] py-1 px-3 bg-[#E3E5E8] absolute bottom-0 rounded-b-[5px] ">
                <div className='flex items-center justify-between'>
                    <div className='flex flex-row items-center gap-[2px]'>
                        <img src={yellowStar} alt="" />
                        <h1 className='font-[500]'>4.8</h1>
                    </div>
                    <div className='flex flex-row items-center'>
                        
                        <h1 className='font-[500] underline'>Course{totalCourse}</h1>
                        <img src={right_arrow} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstituteCard;