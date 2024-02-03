import { useState } from "react";

const useCountdown = (date) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const countdown = () => {
    const countdown = new Date(date).getTime();
    const now = new Date().getTime();
    const difference = countdown - now;

    const SECONDS = 1000;
    const MINUTES = 60 * SECONDS;
    const HOURS = 60 * MINUTES;
    const DAYS = 24 * HOURS;

    const days = Math.floor(difference / DAYS);
    const hours = Math.floor((difference % DAYS) / HOURS);
    const minutes = Math.floor((difference % HOURS) / MINUTES);
    const seconds = Math.floor((difference % MINUTES) / SECONDS);

    setTimeLeft({
      days,
      hours,
      minutes,
      seconds,
    });
  };

  setInterval(countdown, 1000);

  return timeLeft;
};

export default useCountdown;
