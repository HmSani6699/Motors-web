import React from 'react';

const Performance = () => {
    return (
        <div className='lg:mt-[64px]'>
            <h2 className="lg:text-[32px] font-[700] lg:leading-[38px] text-[#141414] font-avenir lg:mb-[24px]">
            Performance
            </h2>
            <div className='flex items-center justify-between'>
            <div className="border-b-2 border-[#000] pb-[10px]">
          <h2 className="lg:text-[20px] text-[#141414] font-[500] lg:leading-[30px] ">
          Acceleration
          </h2>
          <h3 className="lg:text-[24px] text-[#141414] font-[600] lg:leading-[28px] lg:mt-[16px]">
          0-60 mph in 5.4 seconds
          </h3>
        </div>
        <div className="border-b-2 border-[#000] pb-[10px]">
          <h2 className="lg:text-[20px] text-[#141414] font-[500] lg:leading-[30px] ">
          Top Speed
          </h2>
          <h3 className="lg:text-[24px] text-[#141414] font-[600] lg:leading-[28px] lg:mt-[16px]">
          155 mph
          </h3>
        </div>
        <div className="border-b-2 border-[#000] pb-[10px]">
          <h2 className="lg:text-[20px] text-[#141414] font-[500] lg:leading-[30px] ">
          Driving Modes
          </h2>
          <h3 className="lg:text-[24px] text-[#141414] font-[600] lg:leading-[28px] lg:mt-[16px]">
          Eco, Comfort, Sport, Sport+
          </h3>
        </div>
            </div>
        </div>
    );
};

export default Performance;