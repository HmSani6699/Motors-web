import React, { useContext, useEffect, useState } from "react";
import classPNG from "../../../../assets/images/up_comming_course (1).png";
import { AuthContext } from "../../../../layout/MainLayout";
import { get } from "../../../../api/axious";
import SuggLoading from "../../../../components/Common/SuggLoading";
import CountdownMulti from "../../../../components/countdown/CountdownMulti";
import Calender from "./Calender";

const InstructorLiveClass = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [myLive, setMyLive] = useState([]);
  console.log(user?.role);

  useEffect(() => {
    if (user?.id) {
      getLiveCourse();
    }
  }, [user?.id]);

  const getLiveCourse = async () => {
    setLoading(true);
    try {
      const response = await get(`api/courses/units_order/${user?.id}`);
      console.log(response, "=======><");
      setMyLive(response?.data);
    } catch (error) {
      console.error("Error creating app:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatTimeRange = (startTime, duration) => {
    const formatTime = (timeString) => {
      const [hours, minutes] = timeString.split(":").map(Number);
      let period = "am";

      if (hours >= 12) {
        period = "pm";
      }

      const twelveHourFormat =
        (((hours + 11) % 12) + 1).toString().padStart(2, "0") +
        ":" +
        minutes.toString().padStart(2, "0") +
        period;

      return twelveHourFormat;
    };

    const getNextTime = (timeString, duration) => {
      const [hours, minutes] = timeString.split(":").map(Number);
      const nextDate = new Date();
      nextDate.setHours(hours);
      nextDate.setMinutes(minutes);
      nextDate.setHours(nextDate.getHours() + duration);

      const nextTime =
        nextDate.getHours().toString().padStart(2, "0") +
        ":" +
        nextDate.getMinutes().toString().padStart(2, "0");

      return formatTime(nextTime);
    };

    const endTime = getNextTime(startTime, duration);
    const startTimeFormatted = formatTime(startTime);

    return `${startTimeFormatted} - ${endTime}`;
  };

  const compareTimes = (startDate, startTime, duration) => {
    let [startHours, startMinutes] = startTime.split(":").map(Number);
    const durationHours = parseInt(duration, 10);
    const startDateTime = new Date(startDate);
    startDateTime.setHours(startHours, startMinutes, 0, 0);
    const endDateTime = new Date(startDateTime);
    endDateTime.setHours(startDateTime.getHours() + durationHours);
    const currentDateTime = new Date();
    return endDateTime > currentDateTime;
  };

  const formattedStartDate = (dateString) => {
    const date = new Date(dateString);

    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const dayName = days[date.getDay()]; // Get the day name
    const day = date.getDate(); // Get the day of the month
    const month = months[date.getMonth()]; // Get the month name
    const year = date.getFullYear(); // Get the full year

    return `${dayName}, ${day} ${month} ${year}`;
  };

  // Convert the data to the desired structure
  const calenderData = myLive?.map((event) => {
    const [hours, minutes] = event.start_time.split(":").map(Number); // Extract hours and minutes from start_time
    const [year, month, day] = event.start_date.split("-").map(Number); // Extract year, month, day from start_date

    return {
      title: event.title,
      start: new Date(year, month - 1, day, hours, minutes), // JavaScript Date months are 0-indexed
    };
  });

  console.log(myLive);

  return (
    <>
      <div className="w-full max-w-[1015px] mx-auto px-[13px] mb-10">
        <div className="border-b-2 border-[#C7CAD1]">
          <div>
            <h2 className="text-[18px] md:text-[24px] lg:text-[36px] font-[600] text_black_gray leading-[18px] md:leading-[32px] lg:leading-[40px] pb-3">
              লাইভ ক্লাশ
            </h2>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-full my-[200px]">
            <SuggLoading />
          </div>
        ) : (
          <>
            {myLive?.map((live, i) => {
              return (
                <div key={i} className="flex flex-col md:flex-row gap-5 mt-7 ">
                  <div className="w-full mx-auto flex flex-col gap-4">
                    <div className="p-1.5 bg-white border border-[#C7CAD1] rounded-[8px] ">
                      <div className="flex items-center justify-between">
                        <div className="flex flex-row gap-2">
                          <div>
                            <img
                              className="w-[70px] h-[70px] rounded-[5px]"
                              src={classPNG}
                              alt=""
                            />
                          </div>
                          <div className="flex flex-col justify-between">
                            <div>
                              <h1 className="text-[22px] font-[600] text-[#17191C] leading-[28px]">
                                {live?.title}
                              </h1>
                            </div>
                            <div className="flex flex-col md:flex-row gap-24">
                              {/* <div className="">
                                <h1 className="text-[14px] font-[400] text-[#9FA2A9] leading-[10px]">
                                  Batch
                                </h1>
                                <h1 className="text-[14px] font-[600] text-[#2E3138] leading-[20px]">
                                  {live?.batch_info?.batch_no}
                                </h1>
                              </div> */}
                              <div className="">
                                <h1 className="text-[14px] font-[400] text-[#9FA2A9] leading-[10px]">
                                  Start
                                </h1>
                                <h1 className="text-[14px] font-[600] text-[#2E3138] leading-[20px]">
                                  {formattedStartDate(live?.start_date)}
                                </h1>
                              </div>
                              <div className="">
                                <h1 className="text-[14px] font-[400] text-[#9FA2A9] leading-[10px]">
                                  Time
                                </h1>
                                <h1 className="text-[14px] font-[600] text-[#2E3138] leading-[20px]">
                                  {formatTimeRange(
                                    live?.start_time,
                                    parseInt(live?.unit_duration)
                                  )}
                                </h1>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          {compareTimes(
                            live?.start_date,
                            live?.start_time,
                            parseInt(live?.unit_duration)
                          ) ? (
                            <CountdownMulti
                              targetDate={live?.start_date}
                              targetTime={live?.start_time}
                              link={live?.instructor_link}
                            />
                          ) : (
                            <button className=" p-2.5 text-primary_green bg-slate-500 rounded-[5px] text-[14px] font-[400] leading-[18px]">
                              Class End
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
      <div>
        <Calender calenderData={calenderData} />
      </div>
    </>
  );
};

export default InstructorLiveClass;