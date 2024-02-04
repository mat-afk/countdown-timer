import { Outlet } from "react-router-dom";
import { useContext } from "react";

import { CountdownContext } from "./context/CountdownContext";

import "./App.css";

function App() {
  const { countdownConfig } = useContext(CountdownContext);
  if (!countdownConfig) return <Outlet />;

  return (
    <div
      className="App"
      style={
        countdownConfig.image
          ? { background: `url(${countdownConfig.image})` }
          : { background: "#080404" }
      }
    >
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
