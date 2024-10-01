import React, { useState, useEffect } from "react";

const TimeCountdown = ({ targetDate, targetTime, link }) => {
  const [daysLeft, setDaysLeft] = useState(0);
  const [hoursLeft, setHoursLeft] = useState(0);
  const [minutesLeft, setMinutesLeft] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [loading, setLoading] = useState(true);

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
          {daysLeft !== 0 ||
          hoursLeft !== 0 ||
          minutesLeft !== 0 ||
          secondsLeft !== 0 ? (
            <div className="flex items-center justify-center gap-5">
              <TimeUnit value={daysLeft} label="দিন" />
              <TimeUnit value={hoursLeft} label="ঘন্টা" />
              <TimeUnit value={minutesLeft} label="মিনিট" />
              <TimeUnit value={secondsLeft} label="সেকেন্ড" />
            </div>
          ) : (
            <a target="_blank" href={link}>
              <button className="p-2.5 text-white primary_green rounded-[5px] text-[14px] font-[400] leading-[18px]">
                Join class
              </button>
            </a>
          )}
        </div>
      )}
    </>
  );
};

export default TimeCountdown;
