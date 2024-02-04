import { useContext } from "react";
import useCountdown from "../hooks/useCountdown";

import Counter from "../components/Counter";
import Title from "../components/Title";

import { CountdownContext } from "../context/CountdownContext";
import { Navigate } from "react-router-dom";

const Countdown = () => {
  const { countdownConfig } = useContext(CountdownContext);
  if (!countdownConfig) return <Navigate to="/" />;

  const { days, hours, minutes, seconds } = useCountdown(countdownConfig.date);

  return (
    <>
      <Title title={countdownConfig.title} color={countdownConfig.color} />
      <div className="countdown-container">
        <Counter text={"Days"} number={days} color={countdownConfig.color} />
        <Counter text={"Hours"} number={hours} color={countdownConfig.color} />
        <Counter
          text={"Minutes"}
          number={minutes}
          color={countdownConfig.color}
        />
        <Counter
          text={"Seconds"}
          number={seconds}
          color={countdownConfig.color}
        />
      </div>
    </>
  );
};

export default Countdown;
