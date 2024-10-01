// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import img from "../../assets/images/class_plyer.png";
// import { todayDay } from "../../api/helper";

// const LiveClassCountdown = ({
//   targetDate,
//   targetTime,
//   link,
//   url,
//   duration,
//   allData,
// }) => {
//   const navigate = useNavigate();
//   const [daysLeft, setDaysLeft] = useState(0);
//   const [hoursLeft, setHoursLeft] = useState(0);
//   const [minutesLeft, setMinutesLeft] = useState(0);
//   const [secondsLeft, setSecondsLeft] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [firstCountdownEnded, setFirstCountdownEnded] = useState(false);
//   const [condition, setCondition] = useState(true);

//   console.log(allData, "asdfasfasfasf=====>");

//   useEffect(() => {
//     setLoading(true);
//     setFirstCountdownEnded(false);
//     setCondition(true);
//   }, [targetDate, targetTime]);

//   const compareTimes = (targetDate) => {
//     const startDate = new Date(targetDate);
//     const formattedStartDate = startDate?.toISOString().split("T")[0];
//     return formattedStartDate <= todayDay();
//   };

//   useEffect(() => {
//     const calculateTimeLeft = () => {
//       const targetTimeString = targetTime.split(":");
//       const targetHours = parseInt(targetTimeString[0]);
//       const targetMinutes = parseInt(targetTimeString[1]);
//       const targetSeconds = parseInt(targetTimeString[2] || 0);

//       const now = new Date();
//       const targetDateTime = new Date(targetDate);
//       targetDateTime.setHours(targetHours, targetMinutes, targetSeconds, 0);

//       let difference;
//       if (!firstCountdownEnded) {
//         difference = targetDateTime - now;

//         if (difference < 0) {
//           // If the target time is already passed, start the second countdown
//           setFirstCountdownEnded(true);
//           const newTargetDateTime = new Date(
//             targetDateTime.getTime() + duration * 60 * 60 * 1000
//           );
//           calculateSecondCountdown(newTargetDateTime, now);
//           return;
//         }
//       } else {
//         const secondEndDateTime = new Date(
//           targetDateTime.getTime() + duration * 60 * 60 * 1000
//         );
//         difference = secondEndDateTime - now;
//         if (difference < 0) {
//           setCondition(false); // Both countdowns ended
//           difference = 0;
//         }
//       }

//       updateCountdown(difference);
//     };

//     const calculateSecondCountdown = (newTargetDateTime, now) => {
//       const difference = newTargetDateTime - now;
//       updateCountdown(difference);
//     };

//     const updateCountdown = (difference) => {
//       const daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));
//       difference -= daysLeft * 1000 * 60 * 60 * 24;

//       const hoursLeft = Math.floor(difference / (1000 * 60 * 60));
//       difference -= hoursLeft * 1000 * 60 * 60;

//       const minutesLeft = Math.floor(difference / (1000 * 60));
//       difference -= minutesLeft * 1000 * 60;

//       const secondsLeft = Math.floor(difference / 1000);

//       setDaysLeft(daysLeft);
//       setHoursLeft(hoursLeft);
//       setMinutesLeft(minutesLeft);
//       setSecondsLeft(secondsLeft);
//       setLoading(false);
//     };

//     const timer = setInterval(calculateTimeLeft, 1000);
//     return () => clearInterval(timer);
//   }, [targetDate, targetTime, firstCountdownEnded, duration]);

//   const formatNumber = (num) => {
//     return num < 10 ? `0${num}` : num;
//   };

//   const TimeUnit = ({ value, label }) => (
//     <div className="flex flex-col gap-1.5 items-center">
//       <div className="flex gap-1 md:gap-2">
//         <p className="rounded-[3px] bg-primary_100 w-7 py-[3px] px-[5px] box-border font-Baloo text-white flex flex-col items-center justify-center leading-[22px]">
//           {value}
//         </p>
//       </div>
//       <p className="text-primary_color leading-[22px] text-center font-Baloo font-[500]">
//         {label}
//       </p>
//     </div>
//   );

//   return (
//     <>
//       {loading ? (
//         <p>...loading</p>
//       ) : (
//         <div>
//           {condition ? (
//             !firstCountdownEnded ? (
//               <div className="w-[232px] h-[435px] mx-auto flex flex-col items-center justify-center ">
//                 <img className="mx-auto" src={img} alt="" />
//                 <div>
//                   <h1 className="mt-3 text-[20px] text-black font-[500] leading-[22px] text-center">
//                     Please Wait!
//                   </h1>
//                   <h1 className="mt-1.5 text-[14px] text-black font-[400] leading-[18px] text-center">
//                     You can join the live after...
//                   </h1>
//                 </div>

//                 <div className="flex gap-3 mt-5">
//                   <div className="flex items-center justify-center gap-5">
//                     <TimeUnit value={daysLeft} label="দিন" />
//                     <TimeUnit value={hoursLeft} label="ঘন্টা" />
//                     <TimeUnit value={minutesLeft} label="মিনিট" />
//                     <TimeUnit value={secondsLeft} label="সেকেন্ড" />
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <div className="w-[235px] h-[435px] mx-auto flex flex-col items-center justify-center ">
//                 <img className="mx-auto" src={img} alt="" />
//                 <div>
//                   <h1 className="mt-3 text-[20px] text-black font-[500] leading-[22px] text-center">
//                     Session is live!
//                   </h1>
//                   <h1 className="mt-1.5 text-[14px] text-black font-[400] leading-[18px] text-center ">
//                     You can join the live now & <br />
//                     <span className="font-bold ">
//                       {hoursLeft !== null
//                         ? `${formatNumber(hoursLeft)} : `
//                         : null}
//                       {minutesLeft !== null
//                         ? `${formatNumber(minutesLeft)} : `
//                         : null}
//                       {secondsLeft !== null ? formatNumber(secondsLeft) : null}
//                     </span>{" "}
//                     time left to session end.
//                   </h1>
//                 </div>

//                 <div className="flex gap-3 mt-5">
//                   {/* <a target="_blank" href={link}> */}
//                   <button
//                     onClick={() => navigate("/zoom-meeting", { state: link })}
//                     className=" p-2.5 text-white primary_green rounded-[5px] text-[14px] font-[400] leading-[18px]"
//                   >
//                     Join the class
//                   </button>
//                   {/* </a> */}
//                   <Link to={`/courseDetails/${url}`}>
//                     <button className=" p-2.5 text-black bg-[#E3E5E8] rounded-[5px] text-[14px] font-[400] leading-[18px]">
//                       Course page
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             )
//           ) : (
//             <div className="w-[235px] h-[435px] mx-auto flex flex-col items-center justify-center ">
//               <img className="mx-auto" src={img} alt="" />
//               <div>
//                 <h1 className="mt-3 text-[20px] text-black font-[500] leading-[22px] text-center">
//                   Session is finished
//                 </h1>
//                 <h1 className="mt-1.5 text-[14px] text-black font-[400] leading-[18px] text-center">
//                   This session is finished. You can't join it.
//                 </h1>
//               </div>

//               <div className="flex gap-3 mt-5">
//                 <a target="_blank" href={allData?.video_link}>
//                   <button className=" p-2.5 text-white primary_green rounded-[5px] text-[14px] font-[400] leading-[18px]">
//                     Video Link
//                   </button>
//                 </a>
//               </div>
//             </div>
//           )}
//         </div>
//       )}
//     </>
//   );
// };

// export default LiveClassCountdown;

import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/images/class_plyer.png";
import { addedTime, todayDay } from "../../api/helper";
import useClock from "../../hooks/useClock";
import { AuthContext } from "../../layout/MainLayout";
import Loading from "../sheared/Loading";

const LiveClassCountdown = ({
  targetDate,
  targetTime,
  link,
  url,
  duration,
  startClass,
  allData,
  loadingApproves,
}) => {
  // console.log(allData?.class_status);
  const [daysLeft, setDaysLeft] = useState(0);
  const [hoursLeft, setHoursLeft] = useState(0);
  const [minutesLeft, setMinutesLeft] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const roleName = user?.roles?.roleName;
  // console.log(roleName);

  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (allData?.class_status === "start") {
      setIsActive(true);
    } else if (
      allData?.class_status === "pending" ||
      allData?.class_status === "end"
    ) {
      setIsActive(false);
    }
  }, [allData?.class_status]);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const formatTime = (seconds) => {
    const getSeconds = `0${seconds % 60}`.slice(-2);
    const minutes = `${Math.floor(seconds / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(seconds / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  // const time = useClock();

  useEffect(() => {
    setLoading(true);
  }, [targetDate, targetTime]);

  const checkDuration = (targetTime, duration, date) => {
    let currentDate = new Date();
    let hours = currentDate.getHours().toString().padStart(2, "0");
    let minutes = currentDate.getMinutes().toString().padStart(2, "0");
    let currentTime = `${hours}:${minutes}`;

    const startDate = new Date(date);
    const formattedStartDate = startDate?.toISOString().split("T")[0];
    const endTime = addedTime(targetTime, duration);
    console.log(targetTime, endTime, currentTime, "all_time ===============>");

    if (formattedStartDate == todayDay()) {
      if (currentTime >= targetTime && endTime >= currentTime) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
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

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetTimeString = targetTime.split(":");
      const targetHours = parseInt(targetTimeString[0]);
      const targetMinutes = parseInt(targetTimeString[1]);
      const targetSeconds = parseInt(targetTimeString[2] || 0); // Handle the case where seconds are not provided

      const now = new Date();
      const targetDateTime = new Date(targetDate);
      targetDateTime.setHours(targetHours, targetMinutes, targetSeconds, 0);

      let difference = targetDateTime - now;

      if (difference < 0) {
        // If the target time is already passed, set timeLeft to zero
        setDaysLeft(0);
        setHoursLeft(0);
        setMinutesLeft(0);
        setSecondsLeft(0);
        setLoading(false);
        return;
      }

      const daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));
      difference -= daysLeft * 1000 * 60 * 60 * 24;

      const hoursLeft = Math.floor(difference / (1000 * 60 * 60));
      difference -= hoursLeft * 1000 * 60 * 60;

      const minutesLeft = Math.floor(difference / (1000 * 60));
      difference -= minutesLeft * 1000 * 60;

      const secondsLeft = Math.floor(difference / 1000);

      setDaysLeft(daysLeft);
      setHoursLeft(hoursLeft);
      setMinutesLeft(minutesLeft);
      setSecondsLeft(secondsLeft);
      setLoading(false);
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate, targetTime]);

  const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col gap-1.5 items-center">
      <div className="flex gap-1 md:gap-2">
        <p className="rounded-[3px] bg-primary_100 w-7 py-[3px] px-[5px] box-border font-Baloo text-white flex flex-col items-center justify-center leading-[22px]">
          {value}
        </p>
      </div>
      <p className="text-primary_color leading-[22px] text-center font-Baloo font-[500]">
        {label}
      </p>
    </div>
  );

  return (
    <>
      {loading ? (
        <p>...loading</p>
      ) : (
        <div>
          {
            daysLeft !== 0 ||
            hoursLeft !== 0 ||
            minutesLeft !== 0 ||
            secondsLeft !== 0 ? (
              <div className="w-[232px] h-[435px] mx-auto flex flex-col items-center justify-center ">
                <img className="mx-auto" src={img} alt="" />
                {/* {time.toLocaleTimeString()} */}
                <div>
                  <h1 className="mt-3 text-[20px] text-black font-[500] leading-[22px] text-center">
                    Please Wait!
                  </h1>
                  <h1 className="mt-1.5 text-[14px] text-black font-[400] leading-[18px] text-center">
                    You can join the live after...
                  </h1>
                </div>

                <div className="flex gap-3 mt-5">
                  <div className="flex items-center justify-center gap-5">
                    <TimeUnit value={daysLeft} label="দিন" />
                    <TimeUnit value={hoursLeft} label="ঘন্টা" />
                    <TimeUnit value={minutesLeft} label="মিনিট" />
                    <TimeUnit value={secondsLeft} label="সেকেন্ড" />
                  </div>
                </div>
              </div>
            ) : roleName === "Instructor" ? (
              <div className="w-[232px] h-[435px] mx-auto flex flex-col items-center justify-center ">
                <img className="mx-auto" src={img} alt="" />

                <div>
                  <h1 className="mt-3 text-[20px] text-black font-[500] leading-[22px] text-center">
                    {allData?.class_status === "pending"
                      ? "Its Time for a New Session"
                      : allData?.class_status === "start"
                      ? "Session is live!"
                      : "Session End"}
                  </h1>
                  <h1 className="mt-1.5 text-[14px] text-black font-[400] leading-[18px] text-center">
                    {allData?.class_status === "pending"
                      ? "Please Click start to Start the Session...."
                      : allData?.class_status === "start"
                      ? `Session is live.`
                      : "Session End Watch the Recorded Session"}
                  </h1>
                </div>

                <div className="flex gap-3 mt-5">
                  {/* {allData?.class_status === "end" ? (
                    <button className=" p-2.5 text-white primary_green rounded-[5px] text-[14px] font-[400] leading-[18px]">
                      Video Link
                    </button>
                  ) : ( */}
                  <button
                    onClick={() => {
                      startClass({
                        id: allData?.id,
                        msg:
                          allData?.class_status === "pending" ? "start" : "end",
                      });
                      if (allData?.class_status === "pending") {
                        setIsActive(true);
                      } else if (allData?.class_status === "start") {
                        setIsActive(false);
                      }
                    }}
                    className={`p-2.5 text-white  rounded-[5px] text-[14px] font-[400] leading-[18px] ${
                      allData?.class_status === "start"
                        ? " bg-red-600"
                        : " primary_green"
                    }`}
                  >
                    {loadingApproves ? (
                      <Loading />
                    ) : allData?.class_status === "pending" ? (
                      "Start Class"
                    ) : allData?.class_status === "start" ? (
                      "End Class"
                    ) : (
                      "Video Link"
                    )}
                  </button>

                  {allData?.class_status === "end" ? null : (
                    <Link to={`/courseDetails/${url}`}>
                      <button className=" p-2.5 text-black bg-[#E3E5E8] rounded-[5px] text-[14px] font-[400] leading-[18px]">
                        Course page
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            ) : (
              <div className="w-[232px] h-[435px] mx-auto flex flex-col items-center justify-center ">
                <img className="mx-auto" src={img} alt="" />

                <div>
                  <h1 className="mt-3 text-[20px] text-black font-[500] leading-[22px] text-center">
                    {allData?.class_status === "pending"
                      ? "Please Wait!"
                      : allData?.class_status === "start"
                      ? "Session is live!"
                      : "Session End"}
                  </h1>
                  <h1 className="mt-1.5 text-[14px] text-black font-[400] leading-[18px] text-center">
                    {allData?.class_status === "pending"
                      ? "Please wait for Instructor to Start the Session...."
                      : allData?.class_status === "start"
                      ? `Session is live.`
                      : "Session End Watch the Recorded Session"}
                  </h1>
                </div>

                <div className="flex gap-3 mt-5">
                  {allData?.class_status === "pending" ? (
                    <p className=" p-2.5 text-white primary_green rounded-[5px] text-[14px] font-[400] leading-[18px] opacity-60 cursor-not-allowed">
                      Join class
                    </p>
                  ) : allData?.class_status === "start" ? (
                    <button
                      onClick={() =>
                        navigate("/zoom-meeting", {
                          state:
                            roleName === "Instructor"
                              ? allData?.instructor_link
                              : link,
                        })
                      }
                      className=" p-2.5 text-white primary_green rounded-[5px] text-[14px] font-[400] leading-[18px]"
                    >
                      Join class
                    </button>
                  ) : (
                    <button className=" p-2.5 text-white primary_green rounded-[5px] text-[14px] font-[400] leading-[18px]">
                      Video Link
                    </button>
                  )}

                  {allData?.class_status === "end" ? null : (
                    <Link to={`/courseDetails/${url}`}>
                      <button className=" p-2.5 text-black bg-[#E3E5E8] rounded-[5px] text-[14px] font-[400] leading-[18px]">
                        Course page
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            )
            // <div className="w-[232px] h-[435px] mx-auto flex flex-col items-center justify-center ">
            //   <img className="mx-auto" src={img} alt="" />
            //   {/* {time.toLocaleTimeString()} */}
            //   <div>
            //     <h1 className="mt-3 text-[20px] text-black font-[500] leading-[22px] text-center">
            //       {checkDuration(targetTime, duration, targetDate)
            //         ? "Session is live!"
            //         : "Session is finished"}
            //     </h1>
            //     <h1 className="mt-1.5 text-[14px] text-black font-[400] leading-[18px] text-center">
            //       {checkDuration(targetTime, duration, targetDate)
            //         ? " You can join the live now..."
            //         : "This session is finished. You cant join it."}
            //     </h1>
            //   </div>

            //   <div className="flex gap-3 mt-5">
            //     {/* compareTimes(targetDate, targetTime, parseInt(duration)) */}
            //     {checkDuration(targetTime, duration, targetDate) ? (
            //       <>
            //         <a target="_blank" href={link}>
            //           <button className=" p-2.5 text-white primary_green rounded-[5px] text-[14px] font-[400] leading-[18px]">
            //             Join the class
            //           </button>
            //         </a>
            //         <Link to={`/courseDetails/${url}`}>
            //           <button className=" p-2.5 text-black bg-[#E3E5E8] rounded-[5px] text-[14px] font-[400] leading-[18px]">
            //             Course page
            //           </button>
            //         </Link>
            //       </>
            //     ) : (
            //       <button className=" p-2.5 text-white primary_green rounded-[5px] text-[14px] font-[400] leading-[18px]">
            //         Video Link
            //       </button>
            //     )}
            //   </div>
            // </div>
          }
        </div>
      )}
    </>
  );
};

export default LiveClassCountdown;
