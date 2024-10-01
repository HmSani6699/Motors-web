import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import three_user_group from "../../../../assets/svg/three_user-group_black.svg";

const Commission = () => {
  return (
    <div className="w-full max-w-[1015px] mx-auto px-[13px]">
      <div className="border-b border-[#C7CAD1] flex items-center justify-between">
        <div>
          <h2 className="text-[18px] md:text-[24px] lg:text-[36px] font-[600] text_black_gray leading-[18px] md:leading-[32px] lg:leading-[40px] pb-3">
            কমিশন
          </h2>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex gap-5">
            <button
              className={` py-2 px-5 rounded-[5px]   primary_green text-white`}
            >
              কমিশন
            </button>
            {/* <button
              className={` py-2 px-5 rounded-[5px] primary_green text-white`}
            >
              Refer & Earn
            </button> */}
          </div>
          <div className="text-right py-5">
            <Link to="/instructor/commission-wallet">
              <button className="bg-[#2872A4] py-2 px-5 rounded-[5px] text-white">
                My Wallet
              </button>
            </Link>
          </div>
        </div>
      </div>

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
    </div>
  );
};

export default Commission;
