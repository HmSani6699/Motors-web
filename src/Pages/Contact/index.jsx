import React from "react";
import Navbar from "../Navbar";
import InputFiled from "../../component/InputField";
import TextareaFiled from "../../component/TextareaFiled";
import logo from "../../../public/images/logo.svg";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="">
      <Navbar />

      <div className="lg:pt-[170px] pt-[80px]  w-full lg:flex md:px-[100px] items-center justify-center lg:px-0 px-[20px]">
        <div>
          <h2 className="lg:text-[48px] md:text-[32px] text-center text-[24px] font-[700] leading-[28px] md:leading-[38px] lg:leading-[57px] text-[#141414] mb-[16px]">
            Connect with our team
          </h2>
          <p className="lg:text-[24px] text-[16px] font-[400] leading-[24px] lg:leading-[28px] text-[#141414] text-center">
            We're ready to assist and chat with you
          </p>

          {/* ======> Form <====== */}
          <div className="lg:mt-[48px] mt-[24px] lg:w-[569px]">
            <div className="lg:flex gap-[17px]">
              <div className="lg:w-[276px] w-full">
                <InputFiled placeholder="Name" type="text" />
              </div>
              <div className="lg:w-[276px] w-full lg:mt-0 mt-[16px]">
                <InputFiled placeholder="Email" type="ematil" />
              </div>
            </div>
            <div className="lg:mt-[24px] mt-[16px] ">
              <TextareaFiled placeholder="Write your message" />
            </div>
            <div className="mt-[24px]">
              <button className="py-[16px] px-[35px] w-full rounded-[8px] bg-[#2498E2] font-[500] text-white">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* =========> Footer <======== */}
      <div className="bg-[url('../../../public/images/cntactFooter.png')] bg-cover w-full lg:py-[30px] py-[15px] mt-[32px] md:mt-[64px] lg:mt-[120px]">
        <div className="lg:max-w-[1305px] flex  justify-between flex-col lg:flex-row  lg:mx-auto  mx-[24px]  mt-[40px] border-b-[2px] border-[#ffffff6b] pb-[30px]">
          <div className="flex justify-center gap-2 lg:mb-0 mb-[36px]">
            <img src={logo} alt="" />
            <h2 className="text-[24px] font-[600] text-white whitespace-nowrap">
              Motors Bay
            </h2>
          </div>

          <div className="flex  md:px-[150px] px-0 lg:px-0 items-center lg:justify-end justify-between lg:gap-[40px] ">
            <Link
              to={"/"}
              className=" bg-[#ffffff21] text-white rounded-[20px] py-[8px] px-[12px] font-[500]"
            >
              Home
            </Link>
            <Link
              to={"/about"}
              className=" bg-[#ffffff21] text-white rounded-[20px] py-[8px] px-[12px] font-[500]"
            >
              About Us
            </Link>
            <Link
              to={"/stock"}
              className=" bg-[#ffffff21] text-white rounded-[20px] py-[8px] px-[12px] font-[500]"
            >
              Gallery
            </Link>
            <Link
              to={"/blog"}
              className=" bg-[#ffffff21] text-white rounded-[20px] py-[8px] px-[12px] font-[500]"
            >
              Blog
            </Link>
          </div>
        </div>

        <div className=" pb-[24px] md:pb-[40px] lg:pb-[56px] mt-[36px] md:mt-[24px] text-white max-w-[1305px] mx-auto flex lg:flex-row md:flex-row md:px-[20px] flex-col lg:gap-0 gap-[10px] items-center justify-between">
          <p className="text-[14px] font-[400] text-[#BDBDBD]">
            ©2024 Motorbay, All Rights Reserved.
          </p>
          <p className="text-[14px] font-[400] text-[#BDBDBD]">
            <span className="">Privacy Policy</span>
            <span className="pl-[20px]">Terms of Services </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
