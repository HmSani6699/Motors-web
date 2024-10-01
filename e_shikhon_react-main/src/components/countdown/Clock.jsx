import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="clock">
      <h1>Current Time:</h1>
      <h2>{time.toLocaleTimeString()}</h2>
    </div>
  );
}

export default Clock;
