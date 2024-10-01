import React, { useContext, useEffect, useState } from "react";
import classPNG from "../../../../assets/images/up_comming_course (1).png";
import { AuthContext } from "../../../../layout/MainLayout";
import { get } from "../../../../api/axious";
import SuggLoading from "../../../../components/Common/SuggLoading";
import CountdownMulti from "../../../../components/countdown/CountdownMulti";
import { Link } from "react-router-dom";

const InstructorLiveClass = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [myLive, setMyLive] = useState([]);

  useEffect(() => {
    if (user?.id) {
      getLiveCourse();
    }
  }, [user?.id]);

  const getLiveCourse = async () => {
    setLoading(true);
    try {
      const response = await get(`api/courses/student_units_order/${user?.id}`);
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
  return (
    <>
      <div className="w-full max-w-[1015px] mx-auto px-[13px] mb-10">
        <div className="border-b-2 border-[#C7CAD1]">
          <div>
            <h2 className="text-[18px] md:text-[24px] lg:text-[36px] font-[600] text_black_gray leading-[18px] md:leading-[32px] lg:leading-[40px] pb-3">
              লাইভ ক্লাস
            </h2>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-full my-[200px]">
            <SuggLoading />
          </div>
        ) : (
          <>
            {myLive?.length > 0 ? (
              myLive?.map((live, i) => {
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
                                link={live?.link}
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
              }))
              : (<div className="flex flex-col justify-center items-center w-full my-[150px]">
                <h1 className="text-[20px]">Your haven't Live Class 😱 </h1>
              </div>)
            }
          </>
        )}
      </div>
    </>
  );
};

export default InstructorLiveClass;

// import React, { useContext, useEffect, useState } from "react";
// import classPNG from "../../../../assets/images/up_comming_course (1).png";
// import classPNG2 from "../../../../assets/images/up_comming_course (4).png";
// import quiz_icon from "../../../../assets/svg/quiz.svg";
// import timer_11_white from "../../../../assets/svg/timer_11_white.svg";
// import { AuthContext } from "../../../../layout/MainLayout";
// import { useNavigate } from "react-router-dom";
// import { post } from "../../../../api/axious";
// import SuggLoading from "../../../../components/Common/SuggLoading";
// import CountdownMulti from "../../../../components/countdown/CountdownMulti";

// const LiveClass = () => {
//   const BASE_URL = import.meta.env.VITE_BASE_URL;
//   const { user } = useContext(AuthContext);
//   const [loading, setLoading] = useState(true);
//   const [myLive, setMyLive] = useState([]);

//   //   console.log(myLive);

//   useEffect(() => {
//     if (user?.id) {
//       getMyCourse();
//     }
//   }, [user?.id]);

//   const getMyCourse = async () => {
//     setLoading(true);
//     try {
//       const response = await post(`api/courses/get_by_user/${user?.id}`);
//       // console.log(response, "=======><");
//       setLoading(false);
//       setMyLive(response?.data);
//     } catch (error) {
//       setLoading(false);
//       console.error("Error creating app:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   function convertDate(inputDate) {
//     let [month, day, year] = inputDate.split("/");
//     month = month.padStart(2, "0");
//     day = day.padStart(2, "0");
//     let formattedDate = `${year}-${month}-${day}`;
//     return formattedDate;
//   }

//   useEffect(() => {
//     if (myLive) {
//       myLive.map((data) => {
//         data?.batch_info?.courseCurriculum.map((unit) => {
//           unit?.units?.map((date) => {
//             const startDate = new Date(date?.start_date);
//             // Convert both dates to YYYY-MM-DD format
//             const today = new Date()
//               .toLocaleString("en-US", {
//                 timeZone: "Asia/Dhaka",
//               })
//               .split(",")[0];
//             const formattedStartDate = startDate.toISOString().split("T")[0];
//             const formattedToday = convertDate(today);
//             if (formattedStartDate === formattedToday) {
//               console.log(date, "jij");
//             }
//           });
//         });
//       });
//     }
//   }, [myLive]);

//   const formatTimeRange = (startTime, duration) => {
//     const formatTime = (timeString) => {
//       const [hours, minutes] = timeString.split(":").map(Number);
//       let period = "am";

//       if (hours >= 12) {
//         period = "pm";
//       }

//       const twelveHourFormat =
//         (((hours + 11) % 12) + 1).toString().padStart(2, "0") +
//         ":" +
//         minutes.toString().padStart(2, "0") +
//         period;

//       return twelveHourFormat;
//     };

//     const getNextTime = (timeString, duration) => {
//       const [hours, minutes] = timeString.split(":").map(Number);
//       const nextDate = new Date();
//       nextDate.setHours(hours);
//       nextDate.setMinutes(minutes);
//       nextDate.setHours(nextDate.getHours() + duration);

//       const nextTime =
//         nextDate.getHours().toString().padStart(2, "0") +
//         ":" +
//         nextDate.getMinutes().toString().padStart(2, "0");

//       return formatTime(nextTime);
//     };

//     const endTime = getNextTime(startTime, duration);
//     const startTimeFormatted = formatTime(startTime);

//     return `${startTimeFormatted} - ${endTime}`;
//   };

//   const compareTimes = (startTime, duration) => {
//     const convertTo12HourFormat = (time24) => {
//       let [hours, minutes] = time24.split(":");
//       hours = parseInt(hours);
//       const period = hours >= 12 ? "PM" : "AM";
//       hours = hours % 12 || 12;
//       return `${hours}:${minutes} ${period}`;
//     };
//     let [startHours, startMinutes] = startTime.split(":").map(Number);
//     const durationHours = parseInt(duration, 10);
//     const endDate = new Date();
//     endDate.setHours(startHours + durationHours, startMinutes, 0, 0);
//     const currentDate = new Date();
//     if (endDate > currentDate) {
//       return true;
//     } else {
//       return false;
//     }
//   };

//   // console.log(myLive, "myLive class =========>");
//   return (
//     <>
//       <div className="w-full max-w-[1015px] mx-auto px-[13px] mb-10">
//         <div className="border-b-2 border-[#C7CAD1]">
//           <div>
//             <h2 className="text-[18px] md:text-[24px] lg:text-[36px] font-[600] text_black_gray leading-[18px] md:leading-[32px] lg:leading-[40px] pb-3">
//               লাইভ ক্লাস
//             </h2>
//           </div>
//         </div>

//         {loading ? (
//           <div className="flex justify-center items-center h-full my-[200px]">
//             <SuggLoading />
//           </div>
//         ) : (
//           <>
//             {myLive?.map((live, i) =>
//               live?.batch_info?.courseCurriculum?.map((unit, j) =>
//                 unit?.units?.map((date, l) => {
//                   const startDate = new Date(date?.start_date);
//                   const today = new Date()
//                     .toLocaleString("en-US", {
//                       timeZone: "Asia/Dhaka",
//                     })
//                     .split(",")[0];
//                   const formattedStartDate = startDate
//                     ?.toISOString()
//                     .split("T")[0];
//                   const formattedToday = convertDate(today);
//                   if (formattedStartDate === formattedToday) {
//                     console.log(
//                       formattedStartDate,
//                       "-",
//                       formattedToday,
//                       "date===>"
//                     );
//                   }
//                   if (formattedStartDate === formattedToday) {
//                     const startDate = new Date(date?.start_date);
//                     const options = {
//                       weekday: "long",
//                       day: "numeric",
//                       month: "long",
//                       year: "numeric",
//                     };
//                     const formattedStartDate = startDate.toLocaleDateString(
//                       "en-US",
//                       options
//                     );
//                     return (
//                       <div
//                         key={`${i}-${j}-${l}`}
//                         className="flex flex-col md:flex-row gap-5 mt-7 "
//                       >
//                         <div className="w-full mx-auto flex flex-col gap-4">
//                           <div className="p-1.5 bg-white border border-[#C7CAD1] rounded-[8px] ">
//                             <div className="flex items-center justify-between">
//                               <div className="flex flex-row gap-2">
//                                 <div>
//                                   <img
//                                     className="w-[70px] h-[70px] rounded-[5px]"
//                                     src={classPNG}
//                                     alt=""
//                                   />
//                                 </div>
//                                 <div className="flex flex-col justify-between">
//                                   <div>
//                                     <h1 className="text-[22px] font-[600] text-[#17191C] leading-[28px]">
//                                       {date?.title}
//                                     </h1>
//                                   </div>
//                                   <div className="flex flex-col md:flex-row gap-24">
//                                     <div className="">
//                                       <h1 className="text-[14px] font-[400] text-[#9FA2A9] leading-[10px]">
//                                         Batch
//                                       </h1>
//                                       <h1 className="text-[14px] font-[600] text-[#2E3138] leading-[20px]">
//                                         {live?.batch_info?.batch_no}
//                                       </h1>
//                                     </div>
//                                     <div className="">
//                                       <h1 className="text-[14px] font-[400] text-[#9FA2A9] leading-[10px]">
//                                         Start
//                                       </h1>
//                                       <h1 className="text-[14px] font-[600] text-[#2E3138] leading-[20px]">
//                                         {formattedStartDate}
//                                       </h1>
//                                     </div>
//                                     <div className="">
//                                       <h1 className="text-[14px] font-[400] text-[#9FA2A9] leading-[10px]">
//                                         Time
//                                       </h1>
//                                       <h1 className="text-[14px] font-[600] text-[#2E3138] leading-[20px]">
//                                         {/* 9:00pm - 10:30pm */}
//                                         {formatTimeRange(
//                                           date?.start_time,
//                                           parseInt(date?.unit_duration)
//                                         )}
//                                       </h1>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                               <div>
//                                 {compareTimes(
//                                   date?.start_time,
//                                   parseInt(date?.unit_duration)
//                                 ) ? (
//                                   <CountdownMulti
//                                     targetTime={date?.start_time}
//                                     link={date?.zoom_info?.join_url}
//                                   />
//                                 ) : (
//                                   <button className=" p-2.5 text-primary_green bg-slate-500 rounded-[5px] text-[14px] font-[400] leading-[18px]">
//                                     Class End
//                                   </button>
//                                 )}
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     );
//                   }
//                   return null;
//                 })
//               )
//             )}
//           </>
//         )}
//       </div>
//     </>
//   );
// };

// export default LiveClass;
