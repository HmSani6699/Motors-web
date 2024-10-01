import { useState, useEffect } from "react";

const CountDown = ({ startTime, joinUrl }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(startTime));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(startTime));
    }, 1000);

    return () => clearInterval(timer);
  }, [startTime]);

  useEffect(() => {
    if (timeLeft.total <= 0) {
      // Timer has reached or passed the start time
      clearInterval(timer);
    }
  }, [timeLeft]);

  const joinClass = () => {
    window.location.href = joinUrl;
  };

  return (
    <div>
      {timeLeft.total > 0 ? (
        <div>
          <p>Class starts in:</p>
          <p>
            {timeLeft.hours} hours {timeLeft.minutes} minutes {timeLeft.seconds}{" "}
            seconds
          </p>
        </div>
      ) : (
        <button
          onClick={joinClass}
          className="p-2.5 text-white primary_green rounded-[5px] text-[14px] font-[400] leading-[18px]"
        >
          Join class
        </button>
      )}
    </div>
  );
};

// Function to calculate time left until start time
const calculateTimeLeft = (startTime) => {
  const difference = new Date(startTime) - new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      total: difference,
    };
  } else {
    timeLeft = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      total: difference,
    };
  }

  return timeLeft;
};

// Usage
<div>
  <Timer startTime={data?.start_time} joinUrl={date?.zoom_info?.join_url} />
</div>;

export default CountDown;
