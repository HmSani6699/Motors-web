import React from 'react';
import course_icon from "../../assets/svg/course_icon.svg";
import { Link, useNavigate } from 'react-router-dom';

const SuccessCard = ({ batch, img, work, company_1, company_2, allStudent }) => {
  const navigate = useNavigate();
  return (

    <div onClick={() => navigate("/studentProfile", { state: allStudent })} className="w-[228px] h-[200px] comment_box flex flex-col items-center">
      <div className="w-[102px] h-[102px] p-1 rounded-full circle_shadow bg-white -mt-12">
        <img alt="img" className='rounded-full' src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?t=st=1709646925~exp=1709650525~hmac=15a2fd6ba0f9b3bb2697c01acc0a575d586a4d9d9fc3d3dd6a1b151bdbd528c2&w=740" />
      </div>
      <div className="font-Baloo  flex flex-col items-center w-full px-4">
        <h4 className="text-xl leading-[28px] font-[600] mt-1 text-center">{allStudent?.fullName}</h4>
        <h5 className="text-sm leading-[18px] font-[500] text-[#5D636F]">
          {work}
        </h5>
        <div className="flex items-center gap-2 mt-1">
          <img width={14} height={14} alt="icon" src={course_icon} />
          <p className="text-xs leading-[18px] font-[500] text-[#5D636F]">
            {batch}
          </p>
        </div>
        <div className="border-b border-gray-200 w-full my-2"></div>
        <div className="flex  items-center gap-2">
          <p className="text-sm leading-[18px] font-[500] text-[#5D636F]">
            কাজ করছেঃ
          </p>
          {company_1 && <img width={50} alt="icon" src={company_1} />}
          {company_2 && <img width={50} alt="icon" src={company_2} />}
        </div>
      </div>
    </div>

  );
};

export default SuccessCard;