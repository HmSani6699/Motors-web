import React from "react";
import "./Footer.css";
import footer from "../../../public/card/image7.png";
import logo from "../../../public/images/logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="main-div relative overflow-hidden">
      <div className="max-w-[1376px] mx-auto relative pt-[70px] ">
        <div className="absolute top-[60px] pl-[60px]">
          <h2 className="text-[48px] font-[700] text-white font-avenir">
            Reach Out to Us
          </h2>
        </div>
        <div className=" relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="447"
            viewBox="0 0 1305 447"
            fill="none"
          >
            <g opacity="0.1" filter="url(#filter0_b_81_8415)">
              <path
                d="M409.5 16V66.5C409.5 75.3366 402.337 82.5 393.5 82.5H16C7.16344 82.5 0 89.6634 0 98.5V430.5C0 439.337 7.1634 446.5 16 446.5H1288.5C1297.34 446.5 1304.5 439.337 1304.5 430.5V16C1304.5 7.16344 1297.34 0 1288.5 0H425.5C416.663 0 409.5 7.16344 409.5 16Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_b_81_8415"
                x="-20"
                y="-20"
                width="1344.5"
                height="486.5"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_81_8415"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_81_8415"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <div className="text-white flex items-center justify-between absolute top-[70px] pl-[60px] w-full">
            <div className="w-1/2">
              <p className="text-[20px] font-[500] leading-[30px] mb-[40px] font-avenir">
                Lorem ipsum dolor sit amet consectetur. Felis eget elementum
                malesuada sit morbi nibh elit lectus morbi. Semper mi sit risus
                lorem cursus erat. Ut iaculis mi dignissim ut vel ultrices
                ornare. Risus sed eu eu nunc molestie aenean fusce dignissim.
                Malesuada odio nibh faucibus at leo.
              </p>
              <button className="py-[16px] px-[50px] rounded-[8px] bg-white text-[#141414] font-[500]">
                Contact us
              </button>
            </div>

            <div className="w-1/2 pl-[60px] -mr-[15px]">
              <img src={footer} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1305px] mx-auto flex items-center justify-between mt-[40px] border-b-2 border-[#ffffff21] pb-[30px]">
        <div className="flex gap-2">
          <img src={logo} alt="" />
          <h2 className="text-[24px] font-[600] text-white">Motors Bay</h2>
        </div>

        <div className="flex items-center gap-[40px] ">
          <Link className=" bg-[#ffffff21] text-white rounded-[20px] py-[8px] px-[12px] font-[500]">
            Home
          </Link>
          <Link className=" bg-[#ffffff21] text-white rounded-[20px] py-[8px] px-[12px] font-[500]">
            About Us
          </Link>
          <Link className=" bg-[#ffffff21] text-white rounded-[20px] py-[8px] px-[12px] font-[500]">
            Gallery
          </Link>
          <Link className=" bg-[#ffffff21] text-white rounded-[20px] py-[8px] px-[12px] font-[500]">
            Blog
          </Link>
        </div>
      </div>

      <div className="pb-[56px] mt-[36px] text-white max-w-[1305px] mx-auto flex items-center justify-between">
        <p className="text-[14px] font-[400] text-[#BDBDBD]">
          ©2024 Motorbay, All Rights Reserved.
        </p>
        <p className="text-[14px] font-[400] text-[#BDBDBD]">
          <span className="">Privacy Policy</span>
          <span className="pl-[20px]">Terms of Services </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
