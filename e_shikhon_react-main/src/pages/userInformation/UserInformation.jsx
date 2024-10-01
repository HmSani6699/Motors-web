import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Wrapper from "../../components/sheared/Wrapper";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { post } from "../../api/axious";
import Loading from "../../components/sheared/Loading";
import { useForm } from "react-hook-form";
import FormInput from "../../components/inputField/FormInput";
const API_NAME = import.meta.env.VITE_API_NAME;
const condition = API_NAME === "live";

const UserInformation = () => {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { state } = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!state) {
      navigate("/signup", { replace: true });
    }
  }, [state, navigate]);

  const handleOnSubmit = async (formData) => {
    const { fullName, phone_number, email, password, again_password } =
      formData;
    if (password === again_password) {
      let payload;
      if (state?.email) {
        payload = {
          fullName,
          email: state?.email,
          phone_number,
          password,
        };
      } else {
        payload = {
          fullName,
          email,
          phone_number: state?.phone_number,
          password,
        };
      }

      setLoading(true);
      try {
        let res;
        if (condition) {
          res = await post("api/auth/register", payload);
        } else {
          res = await post("api/auth/register", payload);
        }
        if (res?.success) {
          reset();
          navigate("/login");
          toast.success(res.message);
        }
      } catch (error) {
        toast.error(
          error?.response?.data?.error
            ? error?.response?.data?.error
            : "Failed to Register"
        );
      } finally {
        setLoading(false);
      }
    } else {
      setError("password", {
        message: `Password did not Match! `,
      });
      setError("again_password", {
        message: `Password did not Match!`,
      });
      toast.error("Password did not Match!");
    }
  };

  return (
    <div className="login_bg">
      <Wrapper>
        <div className="max-w-[582px] w-full mx-auto py-[75px]">
          <div className=" bg-[#FFF] rounded-[20px] overflow-hidden px-5 md:px-20 border-t-4 border-[#20AC90]">
            <div className="w-full mx-auto py-8 md:py-10">
              <p className="text-[#1D5276] text-[20px] md:text-[24px] font-[600] leading-[28px] md:leading-[32px] text-center">
                ইশিখন- এর সাথে শেখা শুরু করি
              </p>

              <form className="pt-7 pb-4 flex flex-col gap-3">
                <FormInput
                  title="আপনার পুরো নাম"
                  placeholder="আপনার পুরো নাম"
                  register={register}
                  name={`fullName`}
                  required={true}
                  requiredMessage="FullName is Required"
                  error={errors?.fullName}
                />

                {state?.phone_number ? (
                  <FormInput
                    type="email"
                    title="আপনার ই-মেইল"
                    placeholder="আপনার ই-মেইল"
                    register={register}
                    name={`email`}
                    required={true}
                    requiredMessage="Email is Required"
                    error={errors?.email}
                  />
                ) : (
                  <FormInput
                    type="email"
                    title="আপনার মোবাইল নাম্বার"
                    placeholder="আপনার মোবাইল নাম্বার"
                    register={register}
                    name={`phone_number`}
                    required={true}
                    requiredMessage="Phone Number is Required"
                    error={errors?.phone_number}
                  />
                )}

                <FormInput
                  type="password"
                  title="পাসওয়ার্ড লিখুন"
                  placeholder="পাসওয়ার্ড লিখুন"
                  register={register}
                  name={`password`}
                  required={true}
                  requiredMessage="Password is Required"
                  error={errors?.password}
                />
                <FormInput
                  type="password"
                  title="পাসওয়ার্ড পুনরায় টাইপ করুন"
                  placeholder="পাসওয়ার্ড পুনরায় টাইপ করুন"
                  register={register}
                  name={`again_password`}
                  required={true}
                  requiredMessage="Password is Required"
                  error={errors?.again_password}
                />
              </form>
              <div className="flex justify-center items-center pt-3">
                <Link to="" className="w-full">
                  <button
                    disabled={loading}
                    onClick={handleSubmit(handleOnSubmit)}
                    type="button"
                    className="w-full font-Baloo text-white bg-secandary_color flex items-center justify-center py-[10px] px-5  gap-2 rounded-md transition duration-300 ease-in-out active:scale-95"
                  >
                    {loading ? <Loading /> : "জমা দিন"}
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

export default UserInformation;
