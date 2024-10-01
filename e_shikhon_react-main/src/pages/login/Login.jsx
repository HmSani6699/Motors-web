import React, { useCallback, useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import arrow from "../../assets/svg/right-arrow.svg";
import google from "../../assets/images/google.png";
import facebook from "../../assets/images/facebook.png";
import linkedin from "../../assets/svg/lindein-color.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Wrapper from "../../components/sheared/Wrapper";
import { get, post } from "../../api/axious";
import Loading from "../../components/sheared/Loading";
import { AuthContext } from "../../layout/MainLayout";
import {
  LoginSocialFacebook,
  LoginSocialGoogle,
  LoginSocialLinkedin,
} from "reactjs-social-login";
import { CgLayoutGrid } from "react-icons/cg";
import axios from "axios";
import FacebookLogin from "react-facebook-login";

const REDIRECT_URI = "https://www.eshikhon.site";
import { URL } from "../../constants/Url";
import FormInput from "../../components/inputField/FormInput";
import { useForm } from "react-hook-form";
import { scrollToTop } from "../../api/helper";
import LinkedInLogin from "./LinkedInLogin";
import SocialLogin from "./SocialLogin";

const Login = () => {
  scrollToTop();
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const { getUserData, user } = useContext(AuthContext);

  const from = location?.state?.from?.pathname || "/";

  const notify = (message) => {
    toast.success(message);
    reset();
    navigate("/");
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter" && !loading) {
        handleSubmit(handleOnSubmit)();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [loading]);

  const handleOnSubmit = async (formData) => {
    const { email, password } = formData;
    let payload;
    if (isNaN(email)) {
      payload = {
        email: email,
        password: password,
      };
    } else {
      payload = {
        phone_number: email,
        password: password,
      };
    }
    setLoading(true);
    try {
      const res = await post(URL.LOGIN.POST, payload);
      if (res?.success) {
        setLoading(false);
        window.localStorage.setItem("token", res?.token);
        window.localStorage.setItem("user", JSON.stringify(res?.user));
        getUserData(res.token);
        notify(res.message);
        navigate(from, { replace: true });
      }
    } catch (error) {
      setLoading(false);
      toast.error(
        error?.response?.data?.error
          ? error?.response?.data?.error
          : "Failed to Login"
      );
      console.log("Failed to Login/", error?.response?.data);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="login_bg">
        <Wrapper>
          <div className="max-w-[582px] w-full mx-auto py-[75px]">
            <div className=" bg-[#FFF] rounded-[20px] overflow-hidden px-5 md:px-20 border-t-4 border-[#20AC90]">
              <div className="w-full mx-auto py-8 md:py-10">
                <p className="text-[#1D5276] text-[20px] md:text-[24px] font-[600] leading-[28px] md:leading-[32px] text-center">
                  ইশিখন- এর সাথে শেখা শুরু করি
                </p>

                <form className="pt-7 pb-4">
                  <FormInput
                    type="email"
                    title="মোবাইল নাম্বার/ ইমেইল"
                    placeholder="মোবাইল নাম্বার/ ইমেইল"
                    register={register}
                    name={`email`}
                    required={true}
                    requiredMessage="Email is Required"
                    error={errors?.email}
                  />
                  <FormInput
                    type="password"
                    title="পাসওয়ার্ড"
                    placeholder="পাসওয়ার্ড"
                    register={register}
                    name={`password`}
                    required={true}
                    requiredMessage="Password is Required"
                    error={errors?.password}
                  />
                  <Link to="/resetPassword">
                    <p className="text-[#20AC90] text-[14px] md:text-[16px] font-[400] leading-[18px] md:leading-[22px] text-end">
                      পাসওয়ার্ড ভুলে গেছেন
                    </p>
                  </Link>
                </form>

                <div className="flex justify-center items-center">
                  <button
                    disabled={loading}
                    onClick={handleSubmit(handleOnSubmit)}
                    type="button"
                    className="w-full font-Baloo text-white bg-secandary_color  py-[10px] px-5 rounded-md transition duration-300 ease-in-out  active:scale-95"
                  >
                    {loading ? (
                      <Loading />
                    ) : (
                      <span className="flex items-center justify-center  gap-2">
                        এগিয়ে যাই <img alt="icon" src={arrow} />
                      </span>
                    )}
                  </button>
                </div>
                {/* <div className="py-7">
                  <p className="text-[#2E3138] text-[14px] md:text-[16px] font-[500] leading-[18px] md:leading-[22px] text-center">
                    বাংলাদেশের বাইরে থেকে ইমেইল দিয়ে লগইন করুন
                  </p>
                  <div className="flex justify-center mt-2.5">
                    <button
                      type="button"
                      className="text-[14px] font-[500] w-full font-Baloo text-[#20AC90] bg-white flex items-center border border-[#20AC90] justify-center py-[10px] px-5 gap-2 rounded-md"
                    >
                      ইমেইল দিয়ে লগইন করুন <img alt="icon" src={mail} />
                    </button>
                  </div>
                </div> */}
                <div className="flex items-center gap-2 justify-center mt-5">
                  <span className="text-[#8C8F91] text-[14px] md:text-[16px] font-[400]">
                    Don’t have an account?
                  </span>
                  <Link to="/signup">
                    <span className="text-[16px] md:text-[18px] font-[500] text-[#00A9AE]">
                      Sign Up
                    </span>
                  </Link>
                </div>

                <div className="flex items-center my-5">
                  <hr className="h-0 border-b border-solid border-[#E3E5E8] grow" />
                  <p className="mx-4 text-[#9A9A9A]">or connect using</p>
                  <hr className="h-0 border-b border-solid border-[#E3E5E8] grow" />
                </div>

{/* social login  */}
                <SocialLogin />
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default Login;
