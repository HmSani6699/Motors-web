import React from 'react';
import ViewCard from '../../ViewCard';
import view_img1 from '../../../../public/card/image3.png'
import view_img2 from '../../../../public/card/image4.png'
import view_img3 from '../../../../public/card/image5.png'

const DiscoverMore = () => {
    return (
        <div className='lg:mt-[120px] lg:mb-[120px]'>
         <div className='lg:mb-[48px] flex items-center justify-between'>
         <h2 className="lg:text-[48px] font-[700] lg:leading-[57px] text-[#141414] font-avenir ">
             Discover More
            </h2>
                <button className='bg-[#2498E2] text-white py-[16px] px-[24px] font-[500] rounded-[8px]'>View more</button>
         </div>

            <div className='flex gap-[33px]'>
            <ViewCard
            title={"Toyota Crown Signia"}
            description={
              "These are the vehicles that have captured the hearts of drivers everywhere. Explore our top-selling models"
            }
            image={view_img1}
          />
            <ViewCard
            title={"Toyota Crown Signia"}
            description={
              "These are the vehicles that have captured the hearts of drivers everywhere. Explore our top-selling models"
            }
            image={view_img2}
          />
            <ViewCard
            title={"Toyota Crown Signia"}
            description={
              "These are the vehicles that have captured the hearts of drivers everywhere. Explore our top-selling models"
            }
            image={view_img3}
          />
            </div>
        </div>
    );
};

export default DiscoverMore;