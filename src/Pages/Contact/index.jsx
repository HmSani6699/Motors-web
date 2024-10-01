import React from "react";
import Navbar from "../Navbar";
import InputFiled from "../../component/InputField";
import TextareaFiled from "../../component/TextareaFiled";
import logo from "../../../public/images/logo.svg";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Contact = () => {
  // Set the position to Dhaka, Bangladesh
  const position = [23.8103, 90.4125]; // Latitude and Longitude for Dhaka

  return (
    <div className="">
      <Navbar />

      <div className="max-w-[1376px] mx-auto lg:pt-[170px] pt-[80px]">
        <h2 className="lg:text-[48px] md:text-[32px] text-center text-[24px] font-[700] leading-[28px] md:leading-[38px] lg:leading-[57px] text-[#141414] mb-[16px]">
          Connect with our team
        </h2>
        <p className="lg:text-[24px] text-[16px] font-[400] leading-[24px] lg:leading-[28px] text-[#141414] text-center">
          We're ready to assist and chat with you
        </p>
        <div className="lg:mt-[48px] justify-between w-full lg:flex md:px-[100px] gap-[30px] lg:px-0 px-[20px]">
          <div className="lg:w-[50%] w-full lg:pl-[100px]">
            <p className="lg:text-[24px] font-[400] leading-[28px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing{" "}
              <br className="lg:block hidden" /> elit. officia omnis voluptas
              quo praesentium et a
            </p>
            <div className="mt-[40px] flex flex-col gap-[40px]">
              <div className="flex items-center gap-[17px] ">
                <div className="h-[40px] w-[40px] rounded-full bg-[#2498E2] flex items-center justify-center">
                  <FaPhoneAlt className="text-white" />
                </div>
                <p className="text-[#2B2A29] lg:text-[24px] font-[400] leading-[28px]">
                  +8801996359111
                </p>
              </div>
              <div className="flex items-center gap-[17px] ">
                <div className="h-[40px] w-[40px] rounded-full bg-[#2498E2] flex items-center justify-center">
                  <MdEmail className="text-white" />
                </div>
                <p className="text-[#2B2A29] lg:text-[24px] font-[400] leading-[28px]">
                  devsadiq@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-[17px] ">
                <div className="h-[40px] w-[40px] rounded-full bg-[#2498E2] flex items-center justify-center">
                  <FaLocationDot className="text-white" />
                </div>
                <p className="text-[#2B2A29] lg:text-[24px] font-[400] leading-[28px]">
                  Dhaka, Sonargan, Narayoungonj
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-[50%] w-full">
            {/* ======> Form <====== */}
            <div className="lg:w-[569px]">
              <div className="lg:flex gap-[17px]">
                <div className="lg:w-[276px] w-full">
                  <InputFiled placeholder="Name" type="text" />
                </div>
                <div className="lg:w-[276px] w-full lg:mt-0 mt-[16px]">
                  <InputFiled placeholder="Email" type="email" />
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

        {/* =========> Map <======== */}
        <div className="mt-[48px] w-full border overflow-hidden lg:h-[622px] mx-[20] lg:mx-0 rounded-[15px]">
          <img
            className="w-full"
            src={"http://localhost:1337/uploads/Capture_87f8662359.JPG"}
            alt=""
          />
        </div>
      </div>

      {/* =========> Footer <======== */}
      <div className="bg-[url('../../../public/images/cntactFooter.png')] bg-cover w-full lg:py-[30px] py-[15px] mt-[32px] md:mt-[64px] lg:mt-[120px]">
        <div className="lg:max-w-[1305px] flex justify-between flex-col lg:flex-row lg:mx-auto mx-[24px] mt-[40px] border-b-[2px] border-[#ffffff6b] pb-[30px]">
          <div className="flex justify-center gap-2 lg:mb-0 mb-[36px]">
            <img src={logo} alt="" />
            <h2 className="text-[24px] font-[600] text-white whitespace-nowrap">
              Motors Bay
            </h2>
          </div>

          <div className="flex md:px-[150px] px-0 lg:px-0 items-center lg:justify-end justify-between lg:gap-[40px] ">
            <Link
              to={"/"}
              className="bg-[#ffffff21] text-white rounded-[20px] py-[8px] px-[12px] font-[500]"
            >
              Home
            </Link>
            <Link
              to={"/about"}
              className="bg-[#ffffff21] text-white rounded-[20px] py-[8px] px-[12px] font-[500]"
            >
              About Us
            </Link>
            <Link
              to={"/stock"}
              className="bg-[#ffffff21] text-white rounded-[20px] py-[8px] px-[12px] font-[500]"
            >
              Gallery
            </Link>
            <Link
              to={"/blog"}
              className="bg-[#ffffff21] text-white rounded-[20px] py-[8px] px-[12px] font-[500]"
            >
              Blog
            </Link>
          </div>
        </div>

        <div className="pb-[24px] md:pb-[40px] lg:pb-[56px] mt-[36px] md:mt-[24px] text-white max-w-[1305px] mx-auto flex lg:flex-row md:flex-row md:px-[20px] flex-col lg:gap-0 gap-[10px] items-center justify-between">
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
