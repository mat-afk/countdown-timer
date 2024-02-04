import useCountdown from "../hooks/useCountdown";

import Counter from "../components/Counter";
import Title from "../components/Title";

const Countdown = () => {
  const { days, hours, minutes, seconds } = useCountdown("04/01/2024 00:00:00");

  return (
    <>
      <Title title={"Countdown to 2024 New Year's Day"} />
      <div className="countdown-container">
        <Counter text={"Days"} number={days} />
        <Counter text={"Hours"} number={hours} />
        <Counter text={"Minutes"} number={minutes} />
        <Counter text={"Seconds"} number={seconds} />
      </div>
    </>
  );
};

export default Countdown;
