import "./App.css";
import Counter from "./components/Counter";
import Title from "./components/Title";

function App() {
  return (
    <div className="App" style={{ background: "#080404" }}>
      <div className="container">
        <Title title={"Countdown to 2024 New Year's Day"} />
        <div className="countdown-container">
          <Counter text={"Days"} number={2} />
          <Counter text={"Hours"} number={2} />
          <Counter text={"Minutes"} number={2} />
          <Counter text={"Seconds"} number={2} />
        </div>
      </div>
    </div>
  );
}

export default App;
