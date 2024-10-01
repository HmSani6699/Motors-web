import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../layout/MainLayout";
import { get } from "../../../../api/axious";

const InstructorPayment = () => {
  const [loading, setLoading] = useState(false);
  const [paymentHistory, setPaymentHistory] = useState([]);
  const [paymentDetails, setPaymentDetails] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      handleGetPaymentHistory();
    }
  }, [user]);

  const handleGetPaymentHistory = async () => {
    setLoading(true);
    try {
      const res = await get(`api/pay/history-by-user/${user?.id}`);
      console.log(res);
      if (res?.success) {
        setPaymentHistory(res?.data);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  console.log(paymentHistory);

  return (
    <>
      <div className="w-full max-w-[1015px] mx-auto px-[13px]">
        <div className="border-b border-[#C7CAD1]">
          <div>
            <h2 className="text-[18px] md:text-[24px] lg:text-[36px] font-[600] text_black_gray leading-[18px] md:leading-[32px] lg:leading-[40px] pb-3">
              পেমেন্ট
            </h2>
          </div>
        </div>
        {/*  */}

        <div className="w-full overflow-x-auto py-5">
          <table
            className="table-auto overflow-x-scroll w-[790px] md:w-full  text-left border-collapse rounded w-overflow-x-auto overflow-scroll "
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
                  className="h-9 border-s ps-2.5 px-0 text-[#2E3138] text-[16px] font-[500] "
                >
                  Transaction ID
                </th>
                <th
                  scope="col"
                  className="h-9 border-s ps-2.5 px-0 text-[#2E3138] text-[16px] font-[500] "
                >
                  Course Title
                </th>
                <th
                  scope="col"
                  className="h-9 border-s ps-2.5 px-0 text-[#2E3138] text-[16px] font-[500] "
                >
                  Batch ID
                </th>
                <th
                  scope="col"
                  className="h-9 border-s ps-2.5 px-0 text-[#2E3138] text-[16px] font-[500] "
                >
                  Amount
                </th>
                <th
                  scope="col"
                  className="h-9 border-s ps-2.5 px-0 text-[#2E3138] text-[16px] font-[500] "
                >
                  Method
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

              {paymentHistory?.length > 0 &&
                paymentHistory?.map((item, i) => (
                  <tr className="border-b border-[#C7CAD1]">
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
                    <td className="h-12 py-2">
                      <h1 className="text_black_gray text-[14px] font-[400]">
                        {item?.course_info?.courseTitle}
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
                    <td className="h-12 ps-2.5 py-2">
                      <div className="flex flex-row gap-2.5">
                        <h1 className="text_black_gray text-[14px] font-[400]">
                          Nagad
                        </h1>
                      </div>
                    </td>
                    {/* <td className="h-12 ps-2.5 py-2">
                      <div className="flex flex-row gap-2.5">
                        <h1 className="text_black_gray text-[14px] font-[400]">
                          ibrahim@*
                        </h1>
                      </div>
                    </td> */}
                    <td className="h-12 ps-2.5 py-2">
                      <div className="flex flex-row gap-2.5">
                        {item?.is_success === 1 ? (
                          <h1 className="text-[14px] font-[500]">Success</h1>
                        ) : (
                          <h1 className="text-[#BA1217] text-[14px] font-[500]">
                            Cancelled
                          </h1>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default InstructorPayment;
