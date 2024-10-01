import React, { useEffect, useState } from "react";
import { get } from "../../../../api/axious";
import useAuth from "../../../../store/useAuth";
import SuggLoading from "../../../../components/Common/SuggLoading";
import { Link } from "react-router-dom";

const BookingInstructor = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const [allBooking, setAllBooking] = useState([]);

  useEffect(() => {
    if (user?.id) {
      handelBookingList(user?.id);
    }
  }, [user?.id]);

  const handelBookingList = async (id) => {
    console.log(id);
    setLoading(true);
    try {
      const res = await get(`api/slot/booked_by_student/${id}`);
      console.log(res);
      if (res.length) {
        setAllBooking(res);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  // console.log(user);

  return (
    <div className="w-full max-w-[1015px] mx-auto px-[25px] bg-[#ffff] py-[35px] mb-[50px] rounded-lg">
      <div className="border-b-2 border-[#C7CAD1]">
        <div>
          <h2 className="text-[18px] md:text-[24px] lg:text-[36px] font-[600] text_black_gray leading-[18px] md:leading-[32px] lg:leading-[40px] pb-3">
            বুকিং ইন্সট্রাক্টর
          </h2>
        </div>
      </div>

      {/* table */}
      <div className="w-full overflow-x-auto py-[20px] flex justify-center">
        <table
          className="w-[900px] bg-white rounded-[10px] text-left border-collapse w-overflow-x-auto  "
          cellSpacing="0"
        >
          <tbody>
            <tr className="bg-[#E3E5E8] ">
              <th
                scope="col"
                className="h-9 ps-2.5 text-[#2E3138] text-[16px] font-[500] rounded-ss-[10px]"
              >
                ID
              </th>

              <th
                scope="col"
                className="h-9 px-0 text-[#2E3138] text-[16px] font-[500] "
              >
                Topic Name
              </th>
              <th
                scope="col"
                className="h-9 px-0 text-[#2E3138] text-[16px] font-[500] "
              >
                Booking Date
              </th>
              <th
                scope="col"
                className="h-9 px-0 text-[#2E3138] text-[16px] font-[500] "
              >
                Time
              </th>
              <th
                scope="col"
                className="h-9 px-0 text-[#2E3138] text-[16px] font-[500] rounded-se-[10px]"
              >
                Action
              </th>
            </tr>

            {!loading &&
              allBooking?.length > 0 &&
              allBooking?.map((item, i) => (
                <tr className="border-b border-[#C7CAD1]">
                  <td className="h-12 ps-2.5 py-2">
                    <h1 className="text_black_gray text-[16px] font-[500]">
                      {i + 1}
                    </h1>
                  </td>
                  <td className="h-12 ps-2.5 py-2">
                    <h1 className="text_black_gray text-[16px] font-[500]">
                      {item?.topic?.topic_name}
                    </h1>
                  </td>
                  <td className="h-12 py-2">
                    <h1 className="text_black_gray text-[16px] font-[500]">
                      {item?.createdAt.slice(0, 10)}
                    </h1>
                  </td>
                  <td className="h-12 py-2">
                    <h1 className="second_text_color text-[16px] font-[500]">
                      {item?.slot?.start_time} - {item?.slot?.end_time}
                    </h1>
                  </td>

                  <td className="h-12 py-2">
                    <div className="flex flex-row gap-2.5">
                      <Link to={`${item?.slot?.link}`} target="_blank">
                        <button className="px-4 py-[8px] bg-[#20AC90] rounded-[5px] text-white">
                          জয়েন ক্লাস
                        </button>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {loading && (
        <div className="flex justify-center items-center h-full">
          <SuggLoading />
        </div>
      )}
      {loading && (
        <div className="flex justify-center items-center h-full">
          <SuggLoading />
        </div>
      )}
    </div>
  );
};

export default BookingInstructor;
