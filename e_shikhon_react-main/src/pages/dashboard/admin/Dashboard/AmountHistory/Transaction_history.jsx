import React from "react";

const Transaction_history = () => {
  return (
    <div className="w-full overflow-x-auto">
      <table
        className="w-full text-left border-collapse rounded w-overflow-x-auto "
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
              Transaction ID
            </th>
            <th
              scope="col"
              className="h-9 px-0 text-[#2E3138] text-[16px] font-[500] "
            >
              Payment Method
            </th>
            <th
              scope="col"
              className="h-9 px-0 text-[#2E3138] text-[16px] font-[500] "
            >
              Amount
            </th>
            <th
              scope="col"
              className="h-9 px-0 text-[#2E3138] text-[16px] font-[500] "
            >
              Status
            </th>
          </tr>
        </tbody>
      </table>
      {/* <div>
        <h2 className=" text-center py-8 text-[14px] text_black_gray font-[400] leading-[18px] ">
          No data available in table
        </h2>
      </div> */}
    </div>
  );
};

export default Transaction_history;
