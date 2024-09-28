import React from 'react';

const Features = () => {
    return (
        <div className='flex items-center justify-between lg:mt-[64px]'>
            {/* ======> Left slit <==== */}
              <div className='lg:w-[656px]'>
              <h2 className="lg:text-[32px] font-[700] lg:leading-[38px] text-[#141414] font-avenir lg:mb-[24px]">
              Features
            </h2>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-[48px] gap-y-[24px]'>
          <div className='flex gap-2 '>
                <div className='h-[8px]  w-[8px] rounded-3xl mt-2 bg-black' ></div>
                <h2 className='lg:text-[24px] font-[500] lg:leading-[28px] text-[#141414]'>Premium Leather Seats</h2>
            </div>
            <div className='flex gap-2 '>
                <div className='h-[8px]  w-[8px] rounded-3xl mt-2 bg-black' ></div>
                <h2 className='lg:text-[24px] font-[500] lg:leading-[28px] text-[#141414]'>14-Speaker JBL Sound System</h2>
            </div>
            <div className='flex gap-2 '>
                <div className='h-[8px]  w-[8px] rounded-3xl mt-2 bg-black' ></div>
                <h2 className='lg:text-[24px] font-[500] lg:leading-[28px] text-[#141414]'>12.3" Touchscreen Infotainment System</h2>
            </div>
            <div className='flex gap-2 '>
                <div className='h-[8px]  w-[8px] rounded-3xl mt-2 bg-black' ></div>
                <h2 className='lg:text-[24px] font-[500] lg:leading-[28px] text-[#141414]'>Wireless Charging and Multiple USB Ports</h2>
            </div>
          </div>
              </div>
            {/* ======> Right slit <==== */}
              <div className='lg:w-[320px]'>
              <h2 className="lg:text-[32px] font-[700] lg:leading-[38px] text-[#141414] font-avenir lg:mb-[24px]">
              Key Features
            </h2>

        <div className='flex flex-col gap-y-[24px]'>
        <div className='flex gap-2 '>
                <div className='h-[8px]  w-[8px] rounded-3xl mt-2 bg-black' ></div>
                <h2 className='lg:text-[24px] font-[500] lg:leading-[28px] text-[#141414]'>Hybrid Engine</h2>
            </div>
            <div className='flex gap-2 '>
                <div className='h-[8px]  w-[8px] rounded-3xl mt-2 bg-black' ></div>
                <h2 className='lg:text-[24px] font-[500] lg:leading-[28px] text-[#141414]'>Advanced Safety Features</h2>
            </div>
            <div className='flex gap-2 '>
                <div className='h-[8px]  w-[8px] rounded-3xl mt-2 bg-black' ></div>
                <h2 className='lg:text-[24px] font-[500] lg:leading-[28px] text-[#141414]'>Eco, Comfort, Sport, Sport+</h2>
            </div>
        </div>
              </div>
            
        </div>
    );
};

export default Features;