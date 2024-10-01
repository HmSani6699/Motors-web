import { useEffect, useState } from "react";

export const useTimer = (initialTime, onComplete) => {
  const [timer, setTimer] = useState(initialTime);
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    let timerInterval;
    if (timerActive && timer > 0) {
      timerInterval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      onComplete();
      clearInterval(timerInterval);
    }
    return () => clearInterval(timerInterval);
  }, [timer, timerActive, onComplete]);

  const startTimer = (time) => {
    setTimerActive(true);
    setTimer(time);
  };

  const stopTimer = () => {
    setTimerActive(false);
  };

  const resetTimer = () => {
    setTimer(initialTime);
  };

  return { timer, startTimer, stopTimer, resetTimer };
};
