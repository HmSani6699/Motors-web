import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import three_user_group from "../../../../assets/svg/three_user-group_black.svg";

const Commission = () => {
  const [referEarn, setReferEarn] = useState(false);

  const inputRef = useRef(null);
  const link = "https://www.eshikhon.site/login";
  const copyLink = () => {
    inputRef.current.select();
    document.execCommand("copy");
  };

  const handleReferEarn = () => {
    setReferEarn(true);
  };
  const handleCommission = () => {
    setReferEarn(false);
  };

  return (
    <div className="w-full max-w-[1015px] mx-auto px-[13px]">
      <div className="border-b border-[#C7CAD1] flex items-center justify-between">
        <div>
          <h2 className="text-[18px] md:text-[24px] lg:text-[36px] font-[600] text_black_gray leading-[18px] md:leading-[32px] lg:leading-[40px] pb-3">
            {referEarn ? " Refer & Earn" : "কমিশন"}
          </h2>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex gap-5">
            <button
              onClick={handleCommission}
              className={` py-2 px-5 rounded-[5px]  ${
                !referEarn
                  ? "primary_green text-white"
                  : "border border-[#C7CAD1] text-black"
              }`}
            >
              কমিশন
            </button>
            <button
              onClick={handleReferEarn}
              className={` py-2 px-5 rounded-[5px]  ${
                referEarn
                  ? "primary_green text-white"
                  : "border border-[#C7CAD1] text-black"
              }`}
            >
              Refer & Earn
            </button>
          </div>
          <div className="text-right py-5">
            <Link to="/student/commission-wallet">
              <button className="bg-[#2872A4] py-2 px-5 rounded-[5px] text-white">
                My Wallet
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/*  */}
      {!referEarn ? (
        <div className="w-full overflow-x-auto">
          <table
            className="table-auto overflow-x-scroll w-[755px] md:w-full  text-left border-collapse rounded w-overflow-x-auto overflow-scroll "
            cellSpacing="0"
          >
            <tbody>
              <tr className="bg-white">
                <th
                  scope="col"
                  className="h-9 ps-2.5 text-[#2E3138] text-[16px] font-[500] "
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="h-9 px-0 text-[#2E3138] text-[16px] font-[500] "
                >
                  Course Name
                </th>
                <th
                  scope="col"
                  className="h-9 px-0 text-[#2E3138] text-[16px] font-[500] "
                >
                  Actual Amount
                </th>
                <th
                  scope="col"
                  className="h-9 px-0 text-[#2E3138] text-[16px] font-[500] "
                >
                  Earned Amount
                </th>
                <th
                  scope="col"
                  className="h-9 px-0 text-[#2E3138] text-[16px] font-[500] "
                >
                  Commission
                </th>
              </tr>
              <tr className="border-b border-[#C7CAD1]">
                <td className="h-12 ps-2.5 py-2">
                  <h1 className="text_black_gray text-[14px] font-[400]">
                    15 June 2023
                  </h1>
                </td>
                <td className="h-12 py-2">
                  <div>
                    <h1 className="text-[#2E3138] text-[16px] font-[600] leading-[22px]">
                      সোস্যাল মিডিয়া মার্কেটিং লাইভ কোর্স
                    </h1>
                  </div>
                </td>
                <td className="h-12 py-2">
                  <h1 className="text_black_gray text-[14px] font-[400]">
                    2.700
                  </h1>
                </td>
                <td className="h-12 py-2">
                  <h1 className="text_black_gray text-[14px] font-[400]">
                    2.700
                  </h1>
                </td>
                <td className="h-12 py-2">
                  <div className="flex flex-row gap-2.5">
                    <h1 className="text_black_gray text-[14px] font-[400]">
                      20%
                    </h1>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-[#C7CAD1]">
                <td className="h-12 ps-2.5 py-2">
                  <h1 className="text_black_gray text-[14px] font-[400]">
                    15 June 2023
                  </h1>
                </td>
                <td className="h-12 py-2">
                  <div>
                    <h1 className="text-[#2E3138] text-[16px] font-[600] leading-[22px]">
                      সোস্যাল মিডিয়া মার্কেটিং লাইভ কোর্স
                    </h1>
                  </div>
                </td>
                <td className="h-12 py-2">
                  <h1 className="text_black_gray text-[14px] font-[400]">
                    2.700
                  </h1>
                </td>
                <td className="h-12 py-2">
                  <h1 className="text_black_gray text-[14px] font-[400]">
                    2.700
                  </h1>
                </td>
                <td className="h-12 py-2">
                  <div className="flex flex-row gap-2.5">
                    <h1 className="text_black_gray text-[14px] font-[400]">
                      20%
                    </h1>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div className="w-full mt-5 bg-white rounded-[10px] border border-[#478bb9] mb-8">
          <div>
            <div className="p-3 md:p-5 bg-white rounded-[10px]">
              <div>
                <div className="w-96 mx-auto items-center">
                  <img className="w-24 mx-auto" src={three_user_group} alt="" />
                  <h1 className="text-[20px] font-[500] leading-[32px] text-[#2E3138] text-center">
                    Shear your Referral link{" "}
                  </h1>
                  <div className="mt-3">
                    <div className="relative">
                      <input
                        ref={inputRef}
                        type="text"
                        value={link}
                        readOnly
                        className="w-full px-2 py-2 mb-4 border border-gray-300 rounded-md outline-none shadow-2xl"
                      />
                      <button
                        onClick={copyLink}
                        className="absolute top-2 right-1.5 px-3  bg-[#20ac90] text-white rounded-md"
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-[800px] flex flex-col gap-2 mx-auto px-4 mt-5">
                  <div>
                    <h1 className="text-[18px] font-[500] leading-[32px] text-[#2E3138] text-start">
                      Terms & Conditions
                    </h1>
                  </div>
                  <ul className="list-disc  text-[#2E3138]">
                    <li lassName=" text-[18px] md:text-[14px] font-[400] md:font-[400] leading-[22px] md:leading-[22px]">
                      সফল রেফারেলের পরে, রেফারকারী এবং রেফারি উভয়ই পুরস্কারের
                      জন্য যোগ্য হবেন।
                    </li>
                  </ul>
                  <ul className="list-disc  text-[#2E3138]">
                    <li lassName=" text-[18px] md:text-[14px] font-[400] md:font-[400] leading-[22px] md:leading-[22px]">
                      রেফারি যোগ্যতা সম্পন্ন করার পর রেফারারের অ্যাকাউন্টে
                      পুরস্কার জমা হবে।
                    </li>
                  </ul>
                  <ul className="list-disc  text-[#2E3138]">
                    <li lassName=" text-[18px] md:text-[14px] font-[400] md:font-[400] leading-[22px] md:leading-[22px]">
                      পুরস্কারের প্রকৃতি এবং মূল্য পরিবর্তিত হতে পারে এবং
                      রেফারেল প্রোগ্রামের বিশদ বিবরণে উল্লেখ করা হবে।
                    </li>
                  </ul>
                  <ul className="list-disc  text-[#2E3138]">
                    <li lassName=" text-[18px] md:text-[14px] font-[400] md:font-[400] leading-[22px] md:leading-[22px]">
                      রেফারাররা নিজেদেরকে রেফার করতে বা পুরস্কার অর্জনের জন্য
                      একাধিক অ্যাকাউন্ট তৈরি করতে পারবেন না।
                    </li>
                  </ul>
                  <ul className="list-disc  text-[#2E3138]">
                    <li lassName=" text-[18px] md:text-[14px] font-[400] md:font-[400] leading-[22px] md:leading-[22px]">
                      রেফারেলগুলি অবশ্যই ' ইশিখন.কম ' -এর পরিষেবার শর্তাবলী এবং
                      সম্প্রদায় নির্দেশিকা মেনে চলতে হবে৷
                    </li>
                  </ul>
                  <ul className="list-disc  text-[#2E3138]">
                    <li lassName=" text-[18px] md:text-[14px] font-[400] md:font-[400] leading-[22px] md:leading-[22px]">
                      কিভাবে অংশগ্রহণ দিবেন, তা দেখতে{" "}
                      <a
                        href="https://www.youtube.com/watch?v=ZUVTNTgf2lE"
                        target="blank"
                        className="text-[#20AC90] underline"
                      >
                        এই ভিডিওটিও দেখতে পারেন।
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Commission;
