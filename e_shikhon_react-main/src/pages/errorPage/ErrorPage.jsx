import React from 'react';
import error_img from "../../assets/images/image 76.png"
import backIcon from "../../assets/svg/arrow-sm-left.svg"
import homeIcon from "../../assets/svg/home_icon.svg"
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div className='w-full pt-8'>
            <div className='flex justify-center'>
                <img className='w-96 rounded-[8px]' src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1901.jpg?t=st=1717269455~exp=1717273055~hmac=afc419e010ef4613ceb257f3a71a2fd988f86ff011900d8f2199544517ee9241&w=740" alt="" />
            </div>
            <div>
                <h1 className='text-center text-[24px] font-[700] text-primary_color mt-5'>
                    Oops! Something went wrong
                </h1>
                <p className='text-center text-[16px] font-[400] text-primary_color mt-3'>
                    The page you are looking for might have been removed or is temporarily unavailable
                </p>
            </div>
            <div className='flex justify-center my-6 gap-5'>
                <button 
                onClick={() => navigate(-1)}
                className=" p-2.5 text-white primary_green rounded-[5px] text-[14px] font-[400] leading-[18px] flex items-center gap-2">
                    <img className='text-white inline-block w-[15px]' src={backIcon} alt="" />
                    Back
                </button>
                <button
                onClick={() => navigate('/')}
                className=" p-2.5 text-white primary_green rounded-[5px] text-[14px] font-[400] leading-[18px] flex items-center gap-2">
                    <img className='text-white inline-block w-[15px]' src={homeIcon} alt="" />
                    Home
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;