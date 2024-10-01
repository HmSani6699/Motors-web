import React from 'react';
import locationIcon from "../../../assets/svg/location.svg"
import phone_icon from "../../../assets/svg/phone_white.svg"
import { YellowStar } from '../../../assets/icon/YellowStar';
import { GroupUser } from '../../../assets/icon/GroupUser';
import { Link } from 'react-router-dom';

const AgentOfficeCard = ({ img, name }) => {
    return (
        <>
            <Link to='/agentOfficeDetails' >
                <div className=" lg:w-[358px] w-full overflow-hidden rounded-[10px] bg-[#0A1D29]">
                    <figure>
                        <img
                            src={img}
                            alt="class image"
                            className="aspect-video w-full"
                        />
                    </figure>
                    <div className="p-6 flex flex-col gap-3">
                        <header>
                            <h3 className="text-[18px] font-[600] text-[#FFF] ">
                                {name}
                            </h3>
                        </header>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-1'>
                                <img src={locationIcon} alt="icon" />
                                <span className='text-[#FFF] text-[14px] font-[400]'>অনলাইন</span>
                            </div>
                            <div className='flex items-center gap-1'>
                                <YellowStar />
                                <span className='text-[#FFF] text-[14px] font-[400]'>5.0</span>
                            </div>
                        </div>

                        <div className='flex items-center justify-between '>
                            <div className='flex items-center gap-1'>
                                <img src={phone_icon} alt="" />
                                <span className='text-[#FFF] text-[14px] font-[400]'>01823363333</span>
                            </div>
                            <div>
                                <div className='flex items-center gap-1'>
                                    <GroupUser />
                                    <span className='text-[#FFF] text-[14px] font-[400]' >400 + students</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default AgentOfficeCard;