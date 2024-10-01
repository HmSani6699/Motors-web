import React from 'react';
import location_icon from "../../assets/svg/location.svg";
import call_icon from "../../assets/svg/call.svg";
import star_icon from "../../assets/svg/star.svg";
import group_icon from "../../assets/svg/user-group.svg";
import { Link } from 'react-router-dom';

const OfficeCard = ({ img, name, location, number, rating, group }) => {
    return (
        <>
            <Link to='/agentOfficeDetails' >
                <article>
                    <div className="relative w-[250px] h-40 rounded-t-[10px] overflow-hidden">
                        <img alt="icon" src={img} layout="fill" objectFit="cover" />
                    </div>
                    <div className="font-Baloo bg-[#0A1D29] text-white rounded-b-[10px] px-3 py-3 flex flex-col gap-1">
                        <h4 className="leading-[28px] font-[600] text-lg">{name}</h4>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-1 items-center">
                                <img alt="icon" src={location_icon} />
                                <p className="leading-[18px] font-[400] text-sm">{location}</p>
                            </div>
                            <div className="flex gap-1 items-center">
                                <img alt="icon" src={star_icon} />
                                <p className="leading-[18px] font-[400] text-sm mt-1">{rating}</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-1 items-center">
                                <img alt="icon" src={call_icon} />
                                <p className="leading-[18px] font-[400] text-xs mt-1">{number}</p>
                            </div>
                            <div className="flex gap-1 items-center">
                                <img alt="icon" src={group_icon} />
                                <p className="leading-[18px] font-[400] text-xs mt-1">{group}</p>
                            </div>
                        </div>
                    </div>
                </article>
            </Link>
        </>
    );
};

export default OfficeCard;