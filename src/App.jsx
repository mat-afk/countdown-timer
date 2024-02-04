import { Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App" style={{ background: "#080404" }}>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
