import useCountdown from "./hooks/useCountdown";

import Counter from "./components/Counter";
import Title from "./components/Title";

import "./App.css";

function App() {
  const {days, hours, minutes, seconds} = useCountdown("04/01/2024 00:00:00");

  return (
    <div className="App" style={{ background: "#080404" }}>
      <div className="container">
        <Title title={"Countdown to 2024 New Year's Day"} />
        <div className="countdown-container">
          <Counter text={"Days"} number={days} />
          <Counter text={"Hours"} number={hours} />
          <Counter text={"Minutes"} number={minutes} />
          <Counter text={"Seconds"} number={seconds} />
        </div>
      </div>
    </div>
  );
}

export default App;
