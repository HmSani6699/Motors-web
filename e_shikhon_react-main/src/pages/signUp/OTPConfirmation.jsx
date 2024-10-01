import React from "react";
import Wrapper from "../../components/sheared/Wrapper";
import arrow from "../../assets/svg/right-arrow.svg";
import { Link } from "react-router-dom";

const OTPConfirmation = () => {
  return (
    <div className="login_bg">
      <Wrapper>
        <div className="max-w-[510px] w-full mx-auto py-[75px]">
          <div className=" bg-[#FFF] rounded-[20px] overflow-hidden px-3 md:px-10 border-t-4 border-[#20AC90] py-10">
            <p className="text-[#1D5276] text-[20px] md:text-[24px] font-[600] leading-[28px] md:leading-[32px] text-center">
              ইশিখন- এর সাথে শেখা শুরু করি
            </p>
            <div className="w-full mx-auto mt-12 px-5">
              <div className="">
                <p className="text-[#000] text-[14px] md:text-[20px] font-[500] leading-[18px] md:leading-[22px] text-start">
                  মোবাইল নাম্বার কনফার্ম করুন
                </p>
                <div className="py-4">
                  <p className="text-[#2E3138] text-[14px] md:text-[16px] font-[400] leading-[18px] md:leading-[22px] text-start">
                    01820003211 ফোনে পাঠানো ৪ সংখ্যার কোড লিখুন
                  </p>
                  <div className="grid grid-cols-4 gap-5 py-3 md:px-4 px-0">
                    <input
                      type="text"
                      placeholder=""
                      className="w-16 py-2 rounded border border-[#C7CAD1] px-4 text-[#9096A2] outline-none bg-[#FFF] text-[14px] md:text-[16px] font-[400]"
                    />
                    <input
                      type="text"
                      placeholder=""
                      className="w-16 py-2 rounded border border-[#C7CAD1] px-4 text-[#9096A2] outline-none bg-[#FFF] text-[14px] md:text-[16px] font-[400]"
                    />
                    <input
                      type="text"
                      placeholder=""
                      className="w-16 py-2 rounded border border-[#C7CAD1] px-4 text-[#9096A2] outline-none bg-[#FFF] text-[14px] md:text-[16px] font-[400]"
                    />
                    <input
                      type="text"
                      placeholder=""
                      className="w-16 h-12 py-2 rounded-[5px] border border-[#C7CAD1] px-4 text-[#9096A2] outline-none bg-[#FFF] text-[14px] md:text-[16px] font-[400]"
                    />
                  </div>
                  <p className="text-[#2E3138] text-[14px] md:text-[16px] font-[400] leading-[18px] md:leading-[22px] text-right md:pe-7 pe-0">
                    আবার কোড পাঠান ০১ঃ ৫৪
                  </p>
                </div>
              </div>
              <div className="flex justify-center pt-2 items-center ">
                <Link to="/resetPassword" className="w-full">
                  <button
                    type="button"
                    className="w-full font-Baloo text-white bg-[#20AC90] flex items-center justify-center py-[10px] px-5  gap-2 rounded-[8px]"
                  >
                    কোড পাঠানো হবে <img alt="icon" src={arrow} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default OTPConfirmation;
