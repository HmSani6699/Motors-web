import React, { useEffect, useState } from "react";
import { get } from "../../../../../api/axious";
import SuggLoading from "../../../../../components/Common/SuggLoading";
// import SuggLoading from "../../../../../components/Common/SuggLoading";

const Recharge_history = () => {
  const [loading, setLoading] = useState(false);
  const [allRecharge, setAllRecharge] = useState([]);

  useEffect(() => {
    feacthAllPaymentHistory();
  }, []);

  // Featch all payment history
  const feacthAllPaymentHistory = async () => {
    setLoading(true);
    try {
      const res = await get(`api/pay/history-by-user/recharge`);
      console.log(res);
      if (res?.success) {
        setAllRecharge(res?.data);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

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
              Name
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
              Transaction ID
            </th>
            <th
              scope="col"
              className="h-9 border-s ps-2.5 px-0 text-[#2E3138] text-[16px] font-[500] "
            >
              Amount
            </th>
            {/* <th
              scope="col"
              className="h-9 border-s ps-2.5 px-0 text-[#2E3138] text-[16px] font-[500] "
            >
              Method
            </th> */}
            <th
              scope="col"
              className="h-9 border-s ps-2.5 px-0 text-[#2E3138] text-[16px] font-[500] "
            >
              Status
            </th>
          </tr>

          {allRecharge?.length > 0 &&
            allRecharge?.map((item, i) => (
              <tr
                key={i}
                className={`border-b relative ${
                  i % 2 === 0 ? "bg-white" : "bg-[#F1F2F3] "
                }`}
              >
                <td className="h-12 ps-2.5 py-2">
                  <h1 className="text_black_gray text-[14px] font-[400]">
                    {item?.user_info?.fullName}
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
                      {item?.tran_id}
                    </h1>
                  </div>
                </td>
                <td className="h-12 ps-2.5 py-2">
                  <h1 className="text_black_gray text-[14px] font-[400]">
                    {item?.amount}
                  </h1>
                </td>
                {/* <td className="h-12 ps-2.5 py-2">
                  <div className="flex flex-row gap-2.5">
                    <h1 className="text_black_gray text-[14px] font-[400]">
                      Nagad
                    </h1>
                  </div>
                </td> */}
                <td className="h-12 ps-2.5 py-2">
                  <div className="flex flex-row gap-2.5">
                    {item?.is_success === 1 ? (
                      <button className="text-[14px] font-[600] text-green-500 bg-green-100 w-[80px]">
                        Complete
                      </button>
                    ) : (
                      <button className=" text-red-500 bg-red-100 w-[80px] text-[14px] font-[600]">
                        Reject
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {loading && (
        <div className="flex justify-center items-center h-full">
          <SuggLoading />
        </div>
      )}

      {allRecharge?.length < 0 && (
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

export default Recharge_history;
