import React from "react";
import Navbar from "../Navbar";
import InputFiled from "../../component/InputField";

const Contact = () => {
  return (
    <div className="mt-[15px] ">
      <Navbar />

      <div className="lg:pt-[170px] pt-[90px] flex items-center justify-center">
        <div>
          <h2 className="lg:text-[48px] font-[700] leading-[57px] text-[#141414] mb-[16px]">
            Connect with our team
          </h2>
          <p className="lg:text-[24px] font-[400] leading-[28px] text-[#141414] text-center">
            We're ready to assist and chat with you
          </p>

          {/* ======> Form <====== */}
          <div className="mt-[48px] lg:w-[569px]">
            <div className="lg:flex gap-[17px]">
              <div className="lg:w-[276px] w-full">
                <InputFiled placeholder="Name" type="text" />
              </div>
              <div className="lg:w-[276px] w-full">
                <InputFiled placeholder="Email" type="ematil" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
