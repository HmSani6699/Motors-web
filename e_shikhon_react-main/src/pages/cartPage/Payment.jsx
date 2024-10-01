import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Wrapper from "../../components/sheared/Wrapper";
import home from "../../assets/svg/home_icon.svg";
import arrow from "../../assets/svg/right_gray_icon.svg";
import tick_mark_gray from "../../assets/svg/tick-mark-gray.svg";
import copy from "../../assets/svg/content-copy.svg";
import shield from "../../assets/svg/shield-ok.svg";

import aamarPayLogo from "../../assets/images/aamarpay_logo.png";
import phone_missed_call from "../../assets/svg/phone-missed-call.svg";
import link_icon from "../../assets/svg/link.svg";
import { FaWallet } from "react-icons/fa";
import { AuthContext } from "../../layout/MainLayout";
import { get, post } from "../../api/axious";
import toast from "react-hot-toast";
import Loading from "../../components/sheared/Loading";
import { formatBDTaka } from "../../api/helper";

const Payment = ({
  data,
  setIsOpen,
  descountAmount,
  coursePrice,
  allCourseInfo,
}) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [walletAmount, setWalletAmount] = useState();
  const [tramsAndCondition, setTramsAndCondition] = useState(false);
  const [selectPaymentSystem, setSelectPaymentSystem] = useState("Wallet");
  const isButtonDisable = !selectPaymentSystem || !tramsAndCondition;

  // handlePayment
  const handlePayment = async () => {
    const processedCourses =
      allCourseInfo?.map((item) => ({
        course_id: Number(item?.course_id),
        batch_id: Number(item?.batch_id),
        amount: parseFloat(item?.course_price),
        course_type: item?.course_type,
      })) || [];

    const payload = {
      user_id: user?.id,
      type: "payment",
      multi: processedCourses,
    };

    // console.log("processedCourses :", payload);

    setLoading(true);
    if (selectPaymentSystem === "Wallet") {
      console.log("log: Wallet");

      try {
        const response = await post(`api/pay/buy_with_wallet`, payload);
        // console.log(response?.url, "++++++++.");
        if (response?.success) {
          navigate("/student/my-course");
          window.localStorage.removeItem("cart");
          toast.success("Payment Successfully!");
        }
      } catch (error) {
        toast.error(error?.response?.massage);
        console.log("Payment Failed/", error?.response?.data);
      } finally {
        setLoading(false);
      }
    } else if (selectPaymentSystem === "aamarPay") {
      console.log("log: aamarPay");
      try {
        const response = await post(`/api/pay/aamar_pay`, payload);
        // console.log(response?.url, "++++++++.");
        if (response?.url) {
          window.localStorage.removeItem("cart");
          window.location.href = response.url;
        }
      } catch (error) {
        toast.error(error?.response?.data?.error);
        console.log("Payment Failed/", error?.response?.data);
      } finally {
        setLoading(false);
      }
    }
  };

  // get user wallet
  useEffect(() => {
    if (user?.id) {
      fetchUserWallet(user?.id);
    }
  }, [user?.id]);

  const fetchUserWallet = async (id) => {
    setLoading(true);
    try {
      const res = await get(`api/pay/wallet-by-user/${id}`);
      console.log(res?.data);
      if (res?.success) {
        setWalletAmount(res?.data?.balance);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // console.log(allCourseInfo);

  return (
    <div className="py-10 bg-[#F5F5F5]">
      <Wrapper>
        {/* brandi */}
        <div className="mb-5 flex items-center">
          <img src={home} alt="icon" className="mx-2 mb-1" />
          <p className="text-primary_color font-[500]">হোম</p>
          <img src={arrow} alt="icon" />
          <p className="text-primary_color font-[500]">কোর্সসমূহ</p>
          <img src={arrow} alt="icon" />
          <p className="text-primary_color font-[500]">ইউআই / ইউএক্স ডিজাইন</p>
          <img src={arrow} alt="icon" />
          <p className="text-[#9096A2]">আমার কার্ট</p>
        </div>
        {/* middle layout */}
        <div className="max-w-[600px] w-full mx-auto mt-10">
          <div className="flex justify-between items-center relative ">
            <div className="flex flex-col items-center gap-4 z-10">
              <img src={tick_mark_gray} alt="" />
              {/* <Link to="/cart">
                <h2 className="text-[26px] font-[500] leading-[24px] text-[#9096A2]">
                  ওভারভিউ
                </h2>
              </Link> */}
              <button onClick={() => setIsOpen("cart")}>
                <h2 className="text-[26px] font-[500] leading-[24px] text-[#9096A2]">
                  ওভারভিউ
                </h2>
              </button>
            </div>
            {/* <div className="border-dashed border-2 border-[#ACB0B9] bg-teal-400 p-8 inline-block"></div> */}
            <span className="border-dashed border-t-2 border-[#ACB0B9] h-2 inline-block w-4/5 absolute left-16 top-6"></span>
            <div className="flex flex-col items-center gap-4 z-10">
              <div className="inline-flex items-center justify-center gap-2 rounded-full bg-[#20AC90] px-5 py-2.5 ">
                <span className="text-[20px] font-[500] leading-[28px] text-[#FFF]">
                  2
                </span>
              </div>
              <h2 className="text-[26px] font-[500] leading-[24px] text-[#20AC90]">
                পেমেন্ট
              </h2>
            </div>
          </div>
        </div>
        {/* payment card section */}
        <div className="py-4 md:py-16 grid lg:grid-cols-2 md:grid-cols-1 gap-5 md:gap-16">
          <div className="flex md:hidden items-center bg-[#FFF] rounded-[10px] p-2.5 gap-2 justify-between ">
            <div className="flex items-center gap-3">
              <h1 className="text-[24px] font-[600] leading-[32px] text-[#2E3138]">
                অর্ডার আইডি TMS17846483
              </h1>
            </div>
            <button>
              <img src={copy} alt="" />
            </button>
          </div>
          {/* left side */}
          <div className="hidden md:block">
            <div className="overflow-hidden bg-[#FFF] rounded-[10px] border border-[#C7CAD1] ">
              <div className="p-[20px] flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <h1 className="text-[24px] font-[600] leading-[32px] text-[#2E3138]">
                    অর্ডার আইডি TMS17846483
                  </h1>
                  <button>
                    <img src={copy} alt="" />
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <h1 className="text-[20px] font-[500] leading-[28px] text-[#464A53]">
                    {data?.course_title}
                  </h1>
                  <h1 className="text-[20px] font-[500] leading-[28px] text-[#20AC90]">
                    ৳{descountAmount?.length > 0 ? descountAmount : coursePrice}
                    {/* {coursePrice} */}
                  </h1>
                </div>
                {/* <div className="flex items-center justify-between">
                  <h1 className="text-[20px] font-[400] leading-[28px] text-[#464A53]">
                    সাব টোটাল
                  </h1>
                  <h1 className="text-[20px] font-[500] leading-[28px] text-[#20AC90]">
                    ৳ {data?.course_price}
                  </h1>
                </div> */}

                <span className="border-dashed border-t-2 border-[#ACB0B9] h-2 inline-block w-full"></span>
                {/* <div className="flex items-center justify-between">
                  <h1 className="text-[20px] font-[400] leading-[28px] text-[#464A53]">
                    বিকাশ চার্জ 1.5%
                  </h1>
                  <h1 className="text-[20px] font-[500] leading-[28px] text-[#20AC90]">
                    ৳ 00
                  </h1>
                </div> */}
                <div className="flex items-center justify-between">
                  <h1 className="text-[24px] font-[600] leading-[32px] text-[#2E3138]">
                    সর্বমোট মূল্য
                  </h1>
                  <h1 className="text-[20px] font-[500] leading-[32px] text-[#20AC90]">
                    ৳{descountAmount?.length > 0 ? descountAmount : coursePrice}
                    {/* {coursePrice} */}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          {/* right side */}
          <div>
            <div className="overflow-hidden bg-[#FFF] rounded-[10px] border border-[#C7CAD1]">
              <div className="p-[20px] flex flex-col gap-7">
                <div className="flex items-center gap-3 justify-between">
                  <h1 className="text-[18px] font-[500] leading-[32px] text-[#2E3138]">
                    পেমেন্ট মেথড সিলেক্ট করুন
                  </h1>
                  <span className="px-2 py-1 rounded-[20px] flex items-center bg-[#F1F2F3]">
                    <img src={shield} alt="shield" />
                    <h1>সম্পূর্ণ নিরাপদ পেমেন্ট</h1>
                  </span>
                </div>
                <div className="flex items-center justify-between border border-[#E3E5E8] p-2 rounded-[10px]">
                  <div className="flex items-center gap-2.5">
                    <div>
                      <input
                        type="checkbox"
                        id="wallet"
                        className="hidden"
                        value="Wallet"
                        checked={selectPaymentSystem === "Wallet"}
                        onClick={() => setSelectPaymentSystem("Wallet")}
                      />
                      <label
                        htmlFor="wallet"
                        className={`w-5 h-5 rounded-full border-2 bg-white flex items-center justify-center cursor-pointer ${
                          selectPaymentSystem === "Wallet"
                            ? "border-[#20AC90]"
                            : "border-gray-400"
                        }`}
                      >
                        <div
                          className={`w-3 h-3 rounded-full ${
                            selectPaymentSystem === "Wallet"
                              ? "bg-[#20AC90]"
                              : "bg-white"
                          }`}
                          id="roundedCheck"
                        ></div>
                      </label>
                    </div>
                    <h1 className="text-[20px] font-[400] leading-[28px] text-[#464A53]">
                      Top Up Balance
                    </h1>
                  </div>

                  <span className="">
                    <h1 className="text-[20px] font-[400] leading-[28px] text-[#464A53]">
                      ৳ {walletAmount ? formatBDTaka(walletAmount) : "00"}
                    </h1>
                  </span>
                </div>

                <div className="flex items-center justify-between border border-[#E3E5E8] p-2 rounded-[10px]">
                  <div className="flex items-center gap-2.5">
                    <div>
                      <input
                        type="checkbox"
                        id="aamarPay"
                        className="hidden"
                        value="aamarPay"
                        checked={selectPaymentSystem === "aamarPay"}
                        onClick={() => setSelectPaymentSystem("aamarPay")}
                      />

                      <label
                        htmlFor="aamarPay"
                        className={`w-5 h-5 rounded-full border-2 bg-white flex items-center justify-center cursor-pointer ${
                          selectPaymentSystem === "aamarPay"
                            ? "border-[#20AC90]"
                            : "border-gray-400"
                        }`}
                      >
                        <div
                          className={`w-3 h-3 rounded-full ${
                            selectPaymentSystem === "aamarPay"
                              ? "bg-[#20AC90]"
                              : "bg-white"
                          }`}
                          id="roundedCheck"
                        ></div>
                      </label>
                    </div>
                    <h1 className="text-[20px] font-[400] leading-[28px] text-[#464A53]">
                      aamarPay
                    </h1>
                  </div>
                  <img
                    src={aamarPayLogo}
                    height={150}
                    width={150}
                    alt="aamar pay"
                  />
                </div>

                <span className="border-dashed border-t-2 border-[#ACB0B9] h-2 inline-block w-full"></span>

                {/*  */}

                <div className="flex flex-col md:flex-row justify-between gap-4 items-center">
                  <div className="">
                    <div className=" flex items-center border border-[#E3E5E8] rounded-[10px] p-2.5 gap-2">
                      <img src={phone_missed_call} alt="phone_missed_call" />
                      <span>
                        <h1 className="text-[14px] font-[400] leading-[18px] text-[#9096A2]">
                          এজেন্টের সহয়তা নিতে
                        </h1>
                        <h1 className="text-[14px] font-[400] leading-[18px] text-[#464A53]">
                          কল করুন{" "}
                          <span className="text-[#20AC90]">09639399399</span>
                        </h1>
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center border border-[#E3E5E8] rounded-[10px] p-2.5 gap-2">
                      <img src={link_icon} alt="link_icon" />
                      <span>
                        <h1 className="text-[14px] font-[400] leading-[18px] text-[#9096A2]">
                          অন্য নম্বর/ফোন থেকে পেমেন্ট করতে
                        </h1>
                        <h1 className="text-[14px] font-[400] leading-[18px] text-[#464A53]">
                          পেমেন্ট লিংক শেয়ার করুন
                        </h1>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    className="text-green-500"
                    type="checkbox"
                    onChange={() => {
                      setTramsAndCondition(!tramsAndCondition);
                    }}
                    checked={tramsAndCondition}
                  />
                  <h1 className=" leading-[18px] text-[#5D636F]">
                    আমি এই প্ল্যাটফর্ম{" "}
                    <Link className="underline">ব্যবহারের শর্তাবলি</Link> ও{" "}
                    <span className="underline">গোপনীয়তা নীতির</span> ব্যাপারে
                    সম্মতি দিচ্ছি
                  </h1>
                </div>

                <button
                  onClick={handlePayment}
                  disabled={isButtonDisable}
                  type="button"
                  className={`w-full font-Baloo text-white   py-[10px] px-5  gap-2 rounded-md text-[18px] font-[500] ${
                    isButtonDisable ? "bg-gray-400" : "bg-secandary_color"
                  }`}
                >
                  {loading ? (
                    <div className="flex justify-center border-red-500">
                      <Loading />
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center justify-between  gap-2">
                        পেমেন্ট করুন
                        <span className="text-[24px] font-[700]">
                          {/* ৳ {descountAmount ? descountAmount : coursePrice} */}
                          ৳{" "}
                          {descountAmount?.length > 0
                            ? formatBDTaka(descountAmount)
                            : formatBDTaka(coursePrice)}
                        </span>
                      </div>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Payment;
