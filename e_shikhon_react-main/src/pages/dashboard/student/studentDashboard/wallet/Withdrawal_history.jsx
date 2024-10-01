import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../../layout/MainLayout";
import { get } from "../../../../../api/axious";
import SuggLoading from "../../../../../components/Common/SuggLoading";

const Withdrawal_history = ({ loading, allWithdrawalsData }) => {
  return (
    <div className="w-full overflow-x-auto bg-white py-5 px-2.5 rounded-[10px] mt-10">
      <table
        className="w-full text-left border-collapse rounded w-overflow-x-auto "
        cellSpacing="0"
      >
        <tbody>
          <tr className="bg-[#F1F2F3] ">
            <th
              scope="col"
              className="h-9 ps-2.5 text-[#2E3138] text-[16px] font-[500] "
            >
              ID
            </th>
            <th
              scope="col"
              className="h-9 ps-2.5 text-[#2E3138] text-[16px] font-[500] "
            >
              Date
            </th>
            <th
              scope="col"
              className="h-9 border-s ps-2.5 px-0 text-[#2E3138] text-[16px] font-[500] "
            >
              Phone
            </th>
            <th
              scope="col"
              className="h-9 border-s ps-2.5 px-0 text-[#2E3138] text-[16px] font-[500] text-center "
            >
              Amount
            </th>
            <th
              scope="col"
              className="h-9 border-s ps-2.5 px-0 text-[#2E3138] text-[16px] font-[500] text-center "
            >
              Method
            </th>
            <th
              scope="col"
              className="h-9 border-s ps-2.5 px-0 text-[#2E3138] text-[16px] font-[500] text-center"
            >
              Status
            </th>
          </tr>

          {allWithdrawalsData?.length > 0 ? (
            allWithdrawalsData?.map((item, i) => (
              <tr
                key={i}
                className={`border-b relative ${i % 2 === 0 ? "bg-white" : "bg-[#F1F2F3] "
                  }`}
              >
                <td className="h-12 ps-2.5 py-2">
                  <h1 className="text_black_gray text-[14px] font-[400]">
                    {i + 1}
                  </h1>
                </td>
                <td className="h-12 ps-2.5 py-2">
                  <h1 className="text_black_gray text-[14px] font-[400]">
                    {item?.createdAt.slice(0, 10)}
                  </h1>
                </td>
                <td className="h-12 ps-2.5 py-2">
                  <div>
                    <h1 className="text-[#2E3138] text-[14px] font-[400] leading-[22px]">
                      {item?.phone_no}
                    </h1>
                  </div>
                </td>
                <td className="h-12 ps-2.5 py-2">
                  <h1 className="text_black_gray text-[14px] font-[400] text-center">
                    {item?.amount}
                  </h1>
                </td>
                <td className="h-12 ps-2.5 py-2">
                  <h1 className="text_black_gray text-[14px] font-[400] text-center">
                    {item.method}
                  </h1>
                </td>
                <td className="h-12 ps-2.5 py-2">
                  <div className="text_black_gray text-[16px] font-[500] leading-[22px] flex justify-center">
                    {item?.status === "complete" ? (
                      <button className="text-green-500 w-[100px] py-[4px] font-bold bg-green-100 px-2 rounded-md">
                        {item?.status?.charAt(0)?.toUpperCase() +
                          item?.status?.slice(1).toLowerCase() || "N/A"}
                      </button>
                    ) : (
                      <button
                        className={`font-bold px-2 py-[4px] rounded-md w-[100px]
                                ${item?.status === "reject" &&
                          "text-red-500 bg-red-100"
                          }
                                ${item?.status === "pending" &&
                          "text-orange-400 bg-orange-100"
                          }

                               `}
                      >
                        {item?.status?.charAt(0)?.toUpperCase() +
                          item?.status?.slice(1).toLowerCase() || "N/A"}
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">
                <h2 className=" text-center py-8 text-[14px] text_black_gray font-[400] leading-[18px] ">
                  No data available in your withdrawal history !
                </h2>
              </td>
            </tr>
          )
          }
        </tbody>
      </table>
      {loading && (
        <div className="flex justify-center items-center h-full w-full">
          <SuggLoading />
        </div>
      )}

      {allWithdrawalsData?.length < 0 && (
        <div>
          <h2 className=" text-center py-8 text-[14px] text_black_gray font-[400] leading-[18px] ">
            No data available in table
          </h2>
        </div>
      )}
      {/* <div>
        <h2 className=" text-center py-8 text-[14px] text_black_gray font-[400] leading-[18px] ">
          No data available in table
        </h2>
      </div> */}
    </div>
  );
};

export default Withdrawal_history;
