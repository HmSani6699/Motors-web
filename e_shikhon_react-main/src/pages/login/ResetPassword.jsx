import React, { useState } from "react";
import arrow from "../../assets/svg/right-arrow.svg";
import toast from "react-hot-toast";
import { post } from "../../api/axious";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [showEmailField, setShowEmailField] = useState(true);
  const [showPasswordField, setShowPasswordField] = useState(false);
  const [showOtpField, setShowOtpField] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sendPayload, setSendPayload] = useState({});
  const navigate = useNavigate();

  // email submit
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneOrEmail = e.target.phoneOrEmail.value;
    // Check if the input is an email
    let payload;
    if (emailRegex.test(phoneOrEmail)) {
      payload = { email: phoneOrEmail };
    } else {
      payload = { phone: phoneOrEmail };
    }

    setLoading(true);
    try {
      // ! todo response some work
      const res = await post("/api/auth/reset_send_otp", payload);
      if (res?.success) {
        setLoading(false);
        setShowOtpField(true);
        setShowEmailField(false);
        setSendPayload(payload);
      }
      if (res?.externalApiResponse?.status === "Failed") {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast?.error(error?.message);
    }
  };

  // opt submit
  const handleOtpSubmit = async (e) => {
    e.preventDefault();

    const otp = e.target.otp.value;
    const payload = {
      ...sendPayload,
      otp,
    };
    console.log(payload);

    setLoading(true);
    try {
      const res = await post("/api/auth/reset_verify_otp", payload);
      if (res?.success) {
        setLoading(false);
        setShowOtpField(false);
        setShowPasswordField(true);
      }
      if (res?.error) {
        toast.error(res?.error);
        navigate("/login");
      }
    } catch (error) {
      toast?.error(error?.message);
    }
  };

  console.log(showPasswordField);

  // password submit
  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    const rePassword = e.target["re-password"].value;
    const payload = {...sendPayload, password };

    if (password !== rePassword) {
      return toast.error("Password dose not match");
    }
    setLoading(true);
    try {
      const res = await post("/api/auth/reset_pass", payload);
      if (res?.success) {
        setLoading(false);
        toast.success("Password Reset Successfully Done ");
        navigate("/login");
      }
      if (res?.error) {
        toast.error(res?.error);
        navigate("/login");
      }
    } catch (error) {
      toast?.error(error?.message);
    }
  };

  return (
    <div className="login_bg">
      <h1 className="text-[#1D5276] text-[20px] md:text-[24px] font-[600] leading-[28px] md:leading-[32px] text-center hidden md:flex justify-center mt-16">
        ইশিখন- এর সাথে শেখা শুরু করি
      </h1>
      <div className="max-w-[571px] w-full mx-auto pt-[30px] pb-[75px] px-4">
        <div className="bg-[#FFF] rounded-[20px] overflow-hidden px-3 md:px-10 border-t-4 border-[#20AC90]">
          <div className="w-full mx-auto py-10 p-3 md:p-20 ">
            <p className="text-[#1D5276] text-[20px] md:text-[24px] font-[600] leading-[28px] md:leading-[32px] text-center pb-7 flex md:hidden justify-center">
              ইশিখন- এর সাথে শেখা শুরু করি
            </p>

            {/* email submit  */}
            {showEmailField && (
              <form onSubmit={handleEmailSubmit}>
                <p className="text-[#2E3138] text-[14px] md:text-[16px] font-[400] leading-[18px] md:leading-[22px] text-start">
                  ইমেইল / ফোন
                </p>
                <div className="py-2">
                  <input
                    type="text"
                    required={true}
                    name="phoneOrEmail"
                    placeholder="017xxxxxxx / abc@gmail.com"
                    className="py-2 w-full rounded border border-[#E3E5E8] px-4 text-[#9096A2] outline-none bg-[#F5F5F5] text-[14px] md:text-[16px] font-[400]"
                  />
                </div>

                <div className="flex justify-center pt-7 items-center">
                  <button
                    type="submit"
                    className="w-full font-Baloo text-white bg-secandary_color flex items-center justify-center py-[10px] px-5  gap-2 rounded-md"
                  >
                    {loading ? "Loading..." : "এগিয়ে যাই"}{" "}
                    <img alt="icon" src={arrow} />
                  </button>
                </div>
              </form>
            )}

            {/* Otp submit  */}
            {showOtpField && (
              <form onSubmit={handleOtpSubmit}>
                <p className="text-[#2E3138] text-[14px] md:text-[16px] font-[400] leading-[18px] md:leading-[22px] text-start">
                  OTP
                </p>
                <div className="py-2">
                  <input
                    type="text"
                    required={true}
                    name="otp"
                    placeholder="OTP"
                    className="py-2 w-full rounded border border-[#E3E5E8] px-4 text-[#9096A2] outline-none bg-[#F5F5F5] text-[14px] md:text-[16px] font-[400]"
                  />
                </div>

                <div className="flex justify-center pt-7 items-center">
                  <button
                    type="submit"
                    className="w-full font-Baloo text-white bg-secandary_color flex items-center justify-center py-[10px] px-5  gap-2 rounded-md"
                  >
                    {loading ? "Loading..." : "এগিয়ে যাই"}{" "}
                    <img alt="icon" src={arrow} />
                  </button>
                </div>
              </form>
            )}

            {/* password submit */}
            {showPasswordField && (
              <form onSubmit={handlePasswordSubmit}>
                <p className="text-[#2E3138] text-[14px] md:text-[16px] font-[400] leading-[18px] md:leading-[22px] text-start">
                  পাসওয়ার্ড
                </p>
                <div className="py-2">
                  <input
                    type="password"
                    required={true}
                    name="password"
                    placeholder="পাসওয়ার্ড"
                    className="py-2 w-full rounded border border-[#E3E5E8] px-4 text-[#9096A2] outline-none bg-[#F5F5F5] text-[14px] md:text-[16px] font-[400]"
                  />
                </div>

                <p className="text-[#2E3138] text-[14px] md:text-[16px] font-[400] leading-[18px] md:leading-[22px] text-start mt-2">
                  পুনরায় পাসওয়ার্ড
                </p>
                <div className="py-2">
                  <input
                    type="password"
                    required={true}
                    name="re-password"
                    placeholder="পাসওয়ার্ড"
                    className="py-2 w-full rounded border border-[#E3E5E8] px-4 text-[#9096A2] outline-none bg-[#F5F5F5] text-[14px] md:text-[16px] font-[400]"
                  />
                </div>
                <div className="flex justify-center pt-7 items-center">
                  <button
                    type="submit"
                    className="w-full font-Baloo text-white bg-secandary_color flex items-center justify-center py-[10px] px-5  gap-2 rounded-md"
                  >
                    এগিয়ে যাই <img alt="icon" src={arrow} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
