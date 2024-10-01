import React, { useEffect, useState } from "react";
import { get } from "../../../../../api/axious";
import SuggLoading from "../../../../../components/Common/SuggLoading";

const Payment_history = () => {
  const [loading, setLoading] = useState(false);
  const [allPayments, setAllPayments] = useState([]);

  useEffect(() => {
    feacthAllPaymentHistory();
  }, []);

  // Featch all payment history
  const feacthAllPaymentHistory = async () => {
    setLoading(true);
    try {
      const res = await get(`api/pay/history-by-user/all`);
      console.log(res);
      if (res?.success) {
        setAllPayments(res?.data);
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
        className="w-full text-left  rounded w-overflow-y-auto  pb-[50px]"
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
              className="h-9 border-s ps-2.5 px-0 text-[#2E3138] text-[16px] font-[500] whitespace-nowrap"
            >
              Transaction ID
            </th>
            <th
              scope="col"
              className="h-9 border-s ps-2.5 px-0 text-[#2E3138] text-[16px] font-[500] "
            >
              Course Name
            </th>
            <th
              scope="col"
              className="h-9 border-s ps-2.5 px-0 text-[#2E3138] text-[16px] font-[500]  whitespace-nowrap "
            >
              Batch No
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
              className="h-9 border-s ps-2.5 px-0 text-[#2E3138] text-[16px] font-[500] whitespace-nowrap"
            >
              Discount Code
            </th>
            <th
              scope="col"
              className="h-9 border-s ps-2.5 px-0 text-[#2E3138] text-[16px] font-[500] "
            >
              Status
            </th>
          </tr>

          {allPayments?.length > 0 &&
            allPayments?.map((item, i) => (
              <tr
                key={i}
                className={`border-b relative ${
                  i % 2 === 0 ? "bg-white" : "bg-[#F1F2F3] "
                }`}
              >
                <td className="h-12 ps-2.5 py-2 whitespace-nowrap">
                  <h1 className="text_black_gray text-[14px] font-[400] flex whitespace-nowrap">
                    {item?.user_info?.fullName}
                  </h1>
                </td>
                <td className="h-12 ps-2.5 py-2">
                  <h1 className="text_black_gray text-[14px] font-[400] flex whitespace-nowrap">
                    {item?.createdAt.slice(0, 10)}
                  </h1>
                </td>
                <td className="h-12 ps-2.5 py-2">
                  <div>
                    <h1 className="text-[#2E3138] text-[14px] font-[400] leading-[22px] whitespace-nowrap">
                      {item?.tran_id?.slice(0, 15)}...
                    </h1>
                  </div>
                </td>
                <td className="h-12 py-2">
                  <h1 className="text_black_gray text-[14px] font-[400] whitespace-nowrap">
                    {item?.course_info?.courseTitle?.slice(0, 20)}...
                  </h1>
                </td>
                <td className="h-12 py-2">
                  <h1 className="text_black_gray text-[14px] font-[400] text-center">
                    {item?.batch_id}
                  </h1>
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
                    <h1 className="text_black_gray text-[14px] font-[400]">
                      ibrahim@*
                    </h1>
                  </div>
                </td>
                <td className="h-12 ps-2.5 py-2 pr-[10px]">
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
      {/* <div>
        <h2 className=" text-center py-8 text-[14px] text_black_gray font-[400] leading-[18px] ">
          No data available in table
        </h2>
      </div> */}
    </div>
  );
};

export default Payment_history;
