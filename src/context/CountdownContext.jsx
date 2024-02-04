import React, { useState } from "react";

export const CountdownContext = React.createContext();

export const CountdownProvider = ({ children }) => {
  const [countdownConfig, setCountdownConfig] = useState({});

  return (
    <CountdownContext.Provider value={{ countdownConfig, setCountdownConfig }}>
      {children}
    </CountdownContext.Provider>
  );
};
