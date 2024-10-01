import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import arrow from "../../assets/svg/right-arrow.svg";
import mail from "../../assets/svg/mail.svg";
import google from "../../assets/images/google.png";
import facebook from "../../assets/images/facebook.png";
import { Link, useNavigate } from "react-router-dom";
import linkedin from "../../assets/svg/lindein-color.svg";
import Wrapper from "../../components/sheared/Wrapper";
import { post } from "../../api/axious";
import Loading from "../../components/sheared/Loading";
import SocialLogin from "../login/SocialLogin";
const API_NAME = import.meta.env.VITE_API_NAME;
const condition = API_NAME === "live";

const SignUp = () => {
  const navigate = useNavigate();
  const [number, setNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTPForm, setShowOTPForm] = useState(false);
  const [num_email, setNum_email] = useState(true);

  const [countdown, setCountdown] = useState(120); // Initial countdown value in seconds
  const [isResending, setIsResending] = useState(false);

  const [otp, setOTP] = useState(["", "", "", ""]);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  useEffect(() => {
    let timer;
    if (countdown > 0 && !isResending) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (countdown === 0) {
      setIsResending(false);
    }
    return () => clearTimeout(timer);
  }, [countdown, isResending]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleResendOTP = () => {
    setCountdown(120);
    handleSubmit();
    setOTP(["", "", "", ""]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (number) {
      let formData;
      if (num_email) {
        formData = {
          phone: number,
        };
      } else {
        formData = {
          email: number,
        };
      }

      setLoading(true);
      try {
        let response
        if (condition) {
          response = await post("api/auth/send_otp", formData);
        }
        else {
          response = await post("api/auth/send_otp", formData);
        }
        if (response?.success) {
          setLoading(false);
          setShowOTPForm(true);
        }
      } catch (error) {
        setLoading(false);
        toast.error(error?.response?.data?.error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    } else {
      toast.error("Fill up all the Input Field");
    }
  };

  // ----------------------

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);
    if (value !== "" && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain").slice(0, 4);
    const newOTP = [...otp];
    for (let i = 0; i < pastedData.length; i++) {
      newOTP[i] = pastedData[i];
    }
    setOTP(newOTP);
  };

  const handleVerify = async () => {
    const integerOTP = otp.join("");
    if (integerOTP) {
      let formData;
      if (num_email) {
        formData = {
          otp: integerOTP,
          phone: number,
        };
      } else {
        formData = {
          email: number,
          otp: integerOTP,
        };
      }
      const data_send = num_email
        ? { phone_number: number }
        : { email: number };

      setLoading(true);
      try {
        // const res = await post("api/auth/verify_otp", formData);
        let response
        if (condition) {
          response = await post("api/auth/verify_otp", formData);
        }
        else {
          response = await post("api/auth/verify_otp", formData);
        }
        if (response?.success) {
          setLoading(false);
          toast.success("Your OTP and login successful !");
          navigate("/userInformation", { state: data_send });
        }
      } catch (error) {
        setLoading(false);
        toast.error(error?.response?.data?.error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    } else {
      toast.error("Fill up your otp Field");
    }
  };

  return (
    <>
      {!showOTPForm ? (
        <div className="login_bg">
          <Wrapper>
            <div className="max-w-[582px] w-full mx-auto py-[75px]">
              <div className=" bg-[#FFF] rounded-[20px] overflow-hidden px-5 md:px-20 border-t-4 border-[#20AC90]">
                <div className="w-full mx-auto py-8 md:py-10">
                  <p className="text-[#1D5276] text-[20px] md:text-[24px] font-[600] leading-[28px] md:leading-[32px] text-center">
                    ইশিখন- এর সাথে শেখা শুরু করি
                  </p>

                  <div className="pt-7 pb-4">
                    <p className="text-[#2E3138] text-[14px] md:text-[16px] font-[400] leading-[18px] md:leading-[22px] text-start">
                      {num_email
                        ? "মোবাইল নাম্বার দিয়ে এগিয়ে যান"
                        : "ইমেইল দিয়ে এগিয়ে যান"}
                    </p>

                    <div className="py-2">
                      <input
                        value={number}
                        pattern="[0-9]*"
                        onChange={(e) => setNumber(e.target.value)}
                        type={num_email ? "number" : "email"}
                        placeholder={
                          num_email ? "মোবাইল নাম্বার দিন" : "ইমেইল দিন"
                        }
                        className="py-2 text-black w-full rounded border border-[#E3E5E8] px-4 outline-none bg-[#F5F5F5] text-[14px] md:text-[16px] font-[400]"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <button
                      disabled={loading}
                      onClick={handleSubmit}
                      type="button"
                      className="w-full font-Baloo text-white bg-secandary_color flex items-center justify-center py-[10px] px-5  gap-2 rounded-md transition duration-300 ease-in-out  active:scale-95"
                    >
                      {loading ? (
                        <Loading />
                      ) : (
                        <span className="flex gap-2 items-center justify-center">
                          এগিয়ে যাই <img alt="icon" src={arrow} />
                        </span>
                      )}
                    </button>
                  </div>
                  <div className="py-7">
                    <p className="text-[#2E3138] text-[14px] md:text-[16px] font-[500] leading-[18px] md:leading-[22px] text-center">
                      {num_email
                        ? "বাংলাদেশের বাইরে থেকে ইমেইল দিয়ে নিবন্ধন করুন"
                        : "বাংলাদেশের ভিতরে থেকে নাম্বার দিয়ে নিবন্ধন করুন"}
                    </p>
                    <div className="flex justify-center mt-2.5">
                      <button
                        onClick={() => setNum_email(!num_email)}
                        type="button"
                        className="text-[14px] font-[500] w-full font-Baloo text-[#20AC90] bg-white flex items-center border border-[#20AC90] justify-center py-[10px] px-5 gap-2 rounded-md"
                      >
                        {num_email
                          ? "ইমেইল দিয়ে নিবন্ধন করুন"
                          : "নাম্বার দিয়ে নিবন্ধন করুন"}
                        <img alt="icon" src={mail} />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 justify-center ">
                    <span className="text-[#8C8F91] text-[14px] md:text-[16px] font-[400]">
                      Have an account?
                    </span>
                    <Link to="/login">
                      <span className="text-[16px] md:text-[18px] font-[500] text-[#00A9AE]">
                        Log in
                      </span>
                    </Link>
                  </div>

                  <div className="flex items-center my-5">
                    <hr className="h-0 border-b border-solid border-[#E3E5E8] grow" />
                    <p className="mx-4 text-[#9A9A9A]">or connect using</p>
                    <hr className="h-0 border-b border-solid border-[#E3E5E8] grow" />
                  </div>

                  {/* social login   */}
                  <SocialLogin />
                </div>
              </div>
            </div>
          </Wrapper>
        </div>
      ) : (
        <div className="login_bg">
          <Wrapper>
            <div className="max-w-[450px] w-full mx-auto py-[75px]">
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
                        {number} {num_email ? "ফোনে" : "ইমেইল"} পাঠানো ৪ সংখ্যার
                        কোড লিখুন
                      </p>

                      <div className="flex flex-wrap py-3 gap-7 items-center justify-center">
                        {otp.map((digit, index) => (
                          <input
                            key={index}
                            type="text"
                            maxLength="1"
                            className="focus:border-[#20AC90] w-[52px] h-12 py-2 rounded-[5px] border-2 border-[#C7CAD1] px-4 text-black outline-none bg-[#FFF] text-[14px] md:text-[20px] font-[600] text-center"
                            value={digit}
                            onChange={(e) => handleChange(index, e)}
                            onPaste={handlePaste}
                            ref={inputRefs[index]}
                          />
                        ))}
                      </div>

                      <div className="flex items-center justify-end">
                        {countdown > 0 ? (
                          <p className="w-[130px] text-[#2E3138] text-[14px] md:text-[16px] font-[400] leading-[18px] md:leading-[22px] text-left">
                            অপেক্ষা করুন {formatTime(countdown)}
                          </p>
                        ) : (
                          <button
                            className="bg-[#C7CAD1] p-1 rounded-[5px]"
                            onClick={handleResendOTP}
                            disabled={isResending}
                          >
                            {isResending ? "Resending..." : "আবার কোড পাঠান"}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center pt-2 items-center ">
                    <Link className="w-full">
                      <button
                        type="button"
                        disabled={loading}
                        onClick={handleVerify}
                        className="w-full font-Baloo text-white bg-[#20AC90] flex items-center justify-center py-[10px] px-5  gap-2 rounded-[8px] transition duration-300 ease-in-out  active:scale-95"
                      >
                        {loading ? <Loading /> : " সাবমিট করুন"}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Wrapper>
        </div>
      )}
    </>
  );
};

export default SignUp;
