import React, { useEffect, useState } from "react";
import { get, post } from "../../../../../api/axious";
import dots from "../../../../../assets/svg/dots-vertical_black.svg";
import toast from "react-hot-toast";
import SuggLoading from "../../../../../components/Common/SuggLoading";
import three_dot_icon from "../../../../../assets/svg/dots-vertical_black.svg";
import Swal from "sweetalert2";

const Withdrawal_history = () => {
  const [loading, setLoading] = useState(false);
  const [withdrawalID, setWithdrawalID] = useState();
  const [isWithdrawalStatus, setIsWithdrawalStatus] = useState("");
  const [allWithdrawals, setAllWithdrawals] = useState([]);

  useEffect(() => {
    fetchWithdrawalRequest();
  }, []);

  // Update Withdrawal Status
  useEffect(() => {
    console.log("update value");
    if (isWithdrawalStatus) {
      updateWithdrawalStatus(isWithdrawalStatus);
    }
  }, [isWithdrawalStatus]);

  // Featch all withdrawal request
  const fetchWithdrawalRequest = async () => {
    setLoading(true);
    try {
      const res = await get("api/pay/all_request_withdrawal");
      console.log(res);
      if (res?.success) {
        setAllWithdrawals(res?.data);
        // toast.success("Withdrawal Successfully!");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const updateWithdrawalStatus = async (updateValue) => {
    setLoading(true);

    Swal.fire({
      title: "Are you sure?",
      text: `You won't be able to ${updateValue} this!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, ${updateValue} it!`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await post(
            `api/pay/update_withdrawal_status/${withdrawalID}`,
            {
              status: updateValue,
            }
          );
          console.log(res);

          if (res?.success) {
            fetchWithdrawalRequest();
            setWithdrawalID("");
            setIsWithdrawalStatus("");
            //  toast.success("Status updated successfully!");
          }
          setLoading(false);
        } catch (error) {
          toast.error(error?.message);
          console.log("Error creating app:", error?.message);
        }
      } else {
        setWithdrawalID("");
      }
    });

    // try {
    //   const res = await post(
    //     `api/pay/update_withdrawal_status/${withdrawalID}`,
    //     {
    //       status: updateValue,
    //     }
    //   );
    //   console.log(res);

    //   if (res?.success) {
    //     fetchWithdrawalRequest();
    //     setWithdrawalID("");
    //     setIsWithdrawalStatus("");
    //     toast.success("Status updated successfully!");
    //   }
    //   setLoading(false);
    // } catch (error) {
    //   console.log(error);
    //   setLoading(false);
    // } finally {
    //   setLoading(false);
    // }
  };

  console.log(isWithdrawalStatus);

  const handleComplete = (data, id) => {
    console.log(data, id);
    setIsWithdrawalStatus(data);
    setWithdrawalID(id);
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
              className="h-10 ps-2.5 text-[#2E3138] text-[16px] w-[200px] font-[500]"
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
              className="h-9 px-0 text-[#2E3138] text-[16px] font-[500] "
            >
              Phone
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
              Method
            </th>

            <th
              scope="col"
              className="h-9 px-0 text-[#2E3138] text-[16px] font-[500] text-center "
            >
              Status
            </th>
            <th
              scope="col"
              className="h-9 px-0 text-[#2E3138] text-[16px] font-[500] text-center"
            >
              Action
            </th>
          </tr>

          {allWithdrawals.length > 0 &&
            allWithdrawals?.map((item, i) => (
              <tr
                key={i}
                className={`border-b relative ${
                  i % 2 === 0 ? "bg-white" : "bg-[#F1F2F3] "
                }`}
              >
                <td
                  scope="col"
                  className="h-9 ps-2.5 text-[#2E3138] text-[16px] font-[500] "
                >
                  {item?.user_info?.fullName}
                </td>
                <td
                  scope="col"
                  className="h-9 ps-2.5 text-[#2E3138] text-[16px] font-[500] "
                >
                  {item?.createdAt?.slice(0, 10)}
                </td>
                <td
                  scope="col"
                  className="h-9 px-0 text-[#2E3138] text-[16px] font-[500] "
                >
                  {item?.phone_no}
                </td>
                <td
                  scope="col"
                  className="h-9 px-0 text-[#2E3138] text-[16px] font-[500] "
                >
                  {item?.amount}
                </td>
                <td
                  scope="col"
                  className="h-9 px-0 text-[#2E3138] text-[16px] font-[500] "
                >
                  {item?.method}
                </td>

                <td
                  scope="col"
                  className="h-9 px-0 text-[#2E3138] text-[16px] font-[500] "
                >
                  {/* <p className="w-[50px]">{item?.status}</p> */}
                  <div className="">
                    <div className="text_black_gray text-[16px] font-[500] leading-[22px]">
                      {item?.status === "complete" ? (
                        <button className="text-green-500 w-[100px] py-[3px]  font-bold bg-green-100 px-2 rounded-md">
                          {item?.status?.charAt(0)?.toUpperCase() +
                            item?.status?.slice(1).toLowerCase() || "N/A"}
                        </button>
                      ) : (
                        <button
                          className={`font-bold px-2 rounded-md w-[100px]
                            py-[3px]
                                ${
                                  item?.status === "reject" &&
                                  "text-red-500 bg-red-100"
                                }
                                ${
                                  item?.status === "pending" &&
                                  "text-orange-400 bg-orange-100"
                                }

                               `}
                        >
                          {item?.status?.charAt(0)?.toUpperCase() +
                            item?.status?.slice(1).toLowerCase() || "N/A"}
                        </button>
                      )}
                    </div>
                  </div>
                </td>
                <td
                  scope="col"
                  className="h-9 px-0 text-[#2E3138] text-[16px] font-[500] flex justify-center "
                >
                  <div
                    className={`${item?.status !== "pending" && "ml-[68px]"}`}
                  >
                    <div className="flex gap-[10px]">
                      <div>
                        {item?.status === "pending" && (
                          <button
                            onClick={() => handleComplete("complete", item?.id)}
                            className=" text-white primary_green rounded-[5px] text-[14px] py-[4px] font-[400] leading-[18px]  px-[8px] mt-[6px] "
                          >
                            Complete
                          </button>
                        )}
                      </div>
                      <button
                        onClick={() =>
                          withdrawalID
                            ? setWithdrawalID(false)
                            : setWithdrawalID(item?.id)
                        }
                        className={`cursor-pointer ${
                          item?.status === "pending" && "ml-50px"
                        }`}
                      >
                        <img
                          // width={10}
                          // height={10}
                          src={three_dot_icon}
                          alt=""
                        />
                      </button>
                    </div>
                    {withdrawalID === item?.id && (
                      <div className={`absolute top-[30px] right-[0px] z-10`}>
                        <div className="bg-[#F1F2F3] flex flex-col gap-[10px]">
                          <button
                            className="cursor-pointer hover:bg-secandary_color hover:text-white px-[15px] py-[2px]"
                            onClick={() => setIsWithdrawalStatus("complete")}
                          >
                            Complete
                          </button>
                          <button
                            className="cursor-pointer hover:bg-secandary_color hover:text-white px-[15px] py-[2px]"
                            onClick={() => setIsWithdrawalStatus("reject")}
                          >
                            Reject
                          </button>
                          <button
                            className="cursor-pointer hover:bg-secandary_color hover:text-white px-[15px] py-[2px]"
                            onClick={() => setIsWithdrawalStatus("pending")}
                          >
                            Pending
                          </button>
                          <button
                            className="cursor-pointer hover:bg-secandary_color hover:text-white px-[15px] py-[2px]"
                            onClick={() => setWithdrawalID(false)}
                          >
                            Partial
                          </button>
                        </div>
                      </div>
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

export default Withdrawal_history;
