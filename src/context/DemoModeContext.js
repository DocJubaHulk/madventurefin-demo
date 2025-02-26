import React, { createContext, useState } from "react";

const DemoModeContext = createContext();

const DemoModeProvider = ({ children }) => {
  const [isDemoMode, setIsDemoMode] = useState(false);

  return (
    <DemoModeContext.Provider value={{ isDemoMode, setIsDemoMode }}>
      {children}
    </DemoModeContext.Provider>
  );
};

export { DemoModeContext, DemoModeProvider };
