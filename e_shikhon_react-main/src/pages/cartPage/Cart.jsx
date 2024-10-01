import React, { useState } from "react";
import Wrapper from "../../components/sheared/Wrapper";
import home from "../../assets/svg/home_icon.svg";
import arrow from "../../assets/svg/right_gray_icon.svg";
import plus_green from "../../assets/svg/plus_green.svg";
import ticket_green from "../../assets/svg/ticket-green.svg";
import close_icon from "../../assets/svg/close_icon.svg";
import user_icon from "../../assets/svg/user_1.svg";
import { del, post } from "../../api/axious";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { deleteCartItem } from "../../hooks/localStorage";
import { RxCrossCircled } from "react-icons/rx";
import { formatBDTaka } from "../../api/helper";

const Cart = ({
  allCourseInfo,
  state,
  setIsOpen,
  descountAmount,
  seDescountAmount,
  coursePrice,
}) => {
  const [loading, setLoading] = useState(false);
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const [promocode, setPromocode] = useState();
  const [getPromo, setGetPromo] = useState();

  const handleAddPromo = async () => {
    const payload = {};
    let descountTk = 0;
    if (allCourseInfo?.length > 0) {
      const processedCourses = allCourseInfo.map((item) => ({
        course_id: item?.course_id,
        course_type: item?.course_type,
      }));

      payload.multi = processedCourses;
    }

    console.log(payload);

    try {
      const res = await post(`api/pay/promo_check/${promocode}`, payload);
      console.log(res?.success);

      if (res?.success) {
        setGetPromo(res?.data);

        allCourseInfo?.map((item) => {
          if (
            item?.course_category === res?.data?.course_category ||
            item?.course_type === res?.data?.course_type ||
            parseInt(item?.course_id) == res?.data?.course
          ) {
            res?.data?.discount_type === "Amount"
              ? (descountTk +=
                  item?.course_price - parseInt(res?.data?.discount))
              : res?.data?.discount_type === "Percentage"
              ? (descountTk +=
                  item?.course_price -
                  item?.course_price * (parseInt(res?.data?.discount) / 100))
              : 0;
          }
          seDescountAmount(descountTk);
        });

        setLoading(false);
        setPromocode("");
        toast.success("Discount payment successfully!");
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
      setLoading(false);
    }
  };

  // console.log(coursePrice, descountAmount);

  const ItemRemoveFromCartAndEnroll = async (item) => {
    let findBatchId = "";
    if (item?.batch_id) {
      findBatchId = `batch_id=${item?.batch_id}`;
    }
    try {
      const res = await del(
        `/api/course/enroll/delete/${item?.userId}/${item?.course_id}?${findBatchId}`
      );
      if (res?.success) {
        toast.success("Course removed from cart successfully!");
        deleteCartItem("cart", item?.batch_id, item?.course_id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="py-10 bg-[#F5F5F5]">
      <Wrapper>
        {/* brandi */}
        <div className="mb-5 flex items-center">
          <img src={home} alt="icon" className="mx-2 mb-1" />
          <p
            onClick={() => navigate("/")}
            className="text-primary_color font-[500] cursor-pointer"
          >
            হোম
          </p>
          <img src={arrow} alt="icon" />
          <p
            onClick={() => navigate("/course")}
            className="text-primary_color font-[500] cursor-pointer"
          >
            কোর্সসমূহ
          </p>
          <img src={arrow} alt="icon" />
          {/* <p className="text-primary_color font-[500]">ইউআই / ইউএক্স ডিজাইন</p>
          <img src={arrow} alt="icon" /> */}
          <p className="text-[#9096A2]">আমার কার্ট</p>
        </div>
        {/* middle layout */}
        <div className="max-w-[600px] w-full mx-auto mt-10">
          <div className="flex justify-between items-center relative ">
            <div className="flex flex-col items-center gap-4 z-10">
              <div className="inline-flex items-center justify-center gap-2 rounded-full bg-[#20AC90] px-5 py-2.5 ">
                <span className="text-[20px] font-[500] leading-[28px] text-[#FFF]">
                  1
                </span>
              </div>

              <button onClick={() => setIsOpen("payment")}>
                <h2 className="text-[26px] font-[500] leading-[24px] text-[#18816C]">
                  ওভারভিউ
                </h2>
              </button>
            </div>

            <span className="border-dashed border-t-2 border-[#ACB0B9] h-2 inline-block w-4/5 absolute left-16 top-6"></span>
            <div className="flex flex-col items-center gap-4 z-10">
              <div className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E3E5E8] px-5 py-2.5 ">
                <span className="text-[20px] font-[500] leading-[28px] text-[#17191C]">
                  2
                </span>
              </div>
              <h2 className="text-[26px] font-[500] leading-[24px] text-[#9096A2]">
                পেমেন্ট
              </h2>
            </div>
          </div>
        </div>
        {/* card section */}

        <div className="mt-10 flex lg:flex-row md:flex-col justify-between mb-20 gap-12">
          <div className="w-full">
            {/* <div className="flex items-center justify-between border border-[#C7CAD1] rounded-[5px] px-3 ">
              <div className="flex items-center gap-2">
                <div>
                  <input
                    type="checkbox"
                    id="roundedCheckbox"
                    className="hidden"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <label
                    htmlFor="roundedCheckbox"
                    className="w-5 h-5 rounded-full border-2 border-gray-400 bg-white flex items-center justify-center cursor-pointer"
                  >
                    <div
                      className={`w-3 h-3 rounded-full ${
                        isChecked ? "bg-[#20AC90]" : "bg-white"
                      }`}
                      id="roundedCheck"
                    ></div>
                  </label>
                </div>
                <span className="text-[#2E3138] text-[16px] md:text-[24px] font-[500]">
                  SELECT Course (1)
                </span>
              </div>

              <div className="">
                <button className="flex items-center gap-1">
                  <img alt="icon" src={delete_icon} className="" />
                  <p className="font-Baloo text-[#1D5276] text-sm font-[400] leading-[18px]">
                    Delete
                  </p>
                </button>
              </div>
            </div> */}

            <div>
              {allCourseInfo &&
                allCourseInfo?.map((item, i) => (
                  <div className="" key={i}>
                    <div className="overflow-hidden bg-white rounded-[10px] border border-[#C7CAD1] relative mb-[20px]">
                      <button
                        type="button"
                        onClick={() => ItemRemoveFromCartAndEnroll(item)}
                        className="absolute right-4 top-3 text-xl text-red-600 cursor-pointer"
                      >
                        <RxCrossCircled />
                      </button>

                      <div className="p-[10px] flex gap-4 items-center">
                        <div className="h-[110px] w-[200px] rounded-[10px]">
                          <img
                            className="brightness-75 w-full h-full rounded-[10px] object-cover"
                            src={`${BASE_URL}${item?.course_img}`}
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col gap-4">
                          <h1 className=" text-[16px] md:text-[24px] font-[500] leading-[32px] text-[#2E3138]">
                            {item?.course_title.slice(0, 23)}..
                          </h1>
                          <h2>
                            <span className="px-3 rounded-[20px] text-[14px] md:text-[20px] font-[400] leading-[28px] text-[#2E3138] bg-[#ACB0B9]  ">
                              {item?.batchNo
                                ? item?.batchNo.slice(0, 24)
                                : "Video Course"}
                              ...
                            </span>
                          </h2>
                          <h2 className=" text-[16px] md:text-[20px] font-[500] leading-[22px] text-[#20AC90]">
                            ৳ {formatBDTaka(item?.course_price)}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

              {/* <div className="mt-5">
                <div className="overflow-hidden bg-white rounded-[10px] border border-[#C7CAD1] relative">
                  <div className="absolute right-4 top-3 hidden md:block">
                    <input
                      type="checkbox"
                      id="roundedCheckbox"
                      className="hidden"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    <label
                      htmlFor="roundedCheckbox"
                      className="w-5 h-5 rounded-full border-2 border-gray-400 bg-white flex items-center justify-center cursor-pointer"
                    >
                      <div
                        className={`w-3 h-3 rounded-full ${
                          isChecked ? "bg-[#20AC90]" : "bg-white"
                        }`}
                        id="roundedCheck"
                      ></div>
                    </label>
                  </div>
                  <div className="p-2 md:p-[30px] flex gap-8 items-center">
                    <div>
                      <img
                        className="brightness-75 object-cover"
                        src={java}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col gap-4">
                      <h1 className=" text-[16px] md:text-[24px] font-[500] leading-[32px] text-[#2E3138]">
                        Web Development
                      </h1>
                      <h2>
                        <span className="px-3 rounded-[20px] text-[14px] md:text-[20px] font-[400] leading-[28px] text-[#2E3138] bg-[#ACB0B9]">
                          ব্যাচ নং PUX2360
                        </span>
                      </h2>
                      <h2 className=" text-[16px] md:text-[20px] font-[500] leading-[22px] text-[#20AC90]">
                        ৳4,990.00
                      </h2>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="mt-5 relative ">
                <button className=" flex gap-2 absolute right-0">
                  <img src={plus_green} alt="" />
                  <p className=" text-[#18816C] text-[14px] md:text-[20px] font-[500]">
                    <Link to="/course"> আরো কোর্স যোগ করুন</Link>
                  </p>
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="overflow-hidden bg-[#FFF] rounded-[10px] border border-[#C7CAD1] w-[495px]">
              <div className="p-[30px] flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <h1 className="text-[24px] font-[500] leading-[32px] text-[#2E3138]">
                    কোর্স মূল্য
                  </h1>
                  <h1 className="text-[20px] font-[500] leading-[32px] text-[#20AC90]">
                    ৳ {formatBDTaka(coursePrice)}
                  </h1>
                </div>
                {/* Promo code  */}
                <div>
                  <div className="flex items-center gap-2">
                    <img src={ticket_green} alt="" />
                    <span className="text-[16px] font-[400] leading-[22px] text-[#20AC90]">
                      প্রোমো কোড যোগ করুন
                    </span>
                  </div>
                  <div className="bg-[#F1F2F3] rounded-full flex pl-[15px] mt-[10px]">
                    <input
                      value={promocode}
                      onChange={(e) => setPromocode(e.target.value)}
                      className=" w-full py-2  text-[16px] font-[400] rounded-full leading-[22px] border border-[#E3E5E8] outline-none bg-[#F1F2F3] "
                      type="text"
                      placeholder="Enter promocode"
                    />
                    <button
                      onClick={handleAddPromo}
                      className={`text-[#20AC90]  rounded-r-full px-[10px] ${
                        promocode && "bg-[#20ac90a8] text-white"
                      }`}
                    >
                      Confirm
                    </button>
                  </div>
                </div>
                {/* Refarence add */}
                <div>
                  <div className="flex items-center gap-2">
                    <img src={user_icon} alt="" />
                    <span className="text-[16px] font-[400] leading-[22px] text-[#20AC90]">
                      রেফারেন্স থাকলে যোগ করুন
                    </span>
                  </div>
                  <div className="bg-[#F1F2F3] rounded-full flex px-[15px] mt-[10px]">
                    <input
                      // value=''
                      // onChange={(e) => setValue(e.target.value)}
                      className=" w-full py-2  text-[16px] font-[400] rounded-full leading-[22px] border border-[#E3E5E8] outline-none bg-[#F1F2F3] "
                      type="text"
                      placeholder="Enter Reference Number or mail"
                    />
                    <button className="text-[#20AC90]">Confirm</button>
                  </div>
                </div>

                {/* <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <img src={ticket_black} alt="" />
                    <span className="text-[16px] font-[400] leading-[22px] text-[#464A53]">
                      ৫% ভ্যাট
                    </span>
                  </span>
                  <h1 className="text-[20px] font-[500] leading-[32px] text-[#464A53]">
                    ৳ 00
                  </h1>
                </div> */}
                <span className="border-dashed border-t-2 border-[#ACB0B9] h-2 inline-block w-full"></span>
                <div className="flex items-center justify-between">
                  <h1 className="text-[24px] font-[500] leading-[32px] text-[#2E3138]">
                    সর্বমোট মূল্য
                  </h1>
                  <h1 className="text-[20px] font-[500] leading-[32px] text-[#20AC90]">
                    ৳
                    {descountAmount?.length > 0
                      ? formatBDTaka(descountAmount)
                      : formatBDTaka(coursePrice)}
                    {/* {coursePrice} */}
                  </h1>
                </div>
                {/* <Link
                  to="/payment"
                  type="button"
                  className="w-full font-Baloo text-white bg-secandary_color flex items-center justify-center py-[10px] px-5  gap-2 rounded-md"
                >
                  শুরু করুন
                </Link> */}
                <button
                  onClick={() => setIsOpen("payment")}
                  type="button"
                  className="w-full font-Baloo text-white bg-secandary_color flex items-center justify-center py-[10px] px-5  gap-2 rounded-md"
                >
                  শুরু করুন
                </button>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Cart;
