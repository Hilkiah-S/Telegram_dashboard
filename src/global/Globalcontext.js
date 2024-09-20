import React, { createContext, useState } from "react";

// Create the context
export const GlobalContext = createContext();

// Create the provider component
export const GlobalProvider = ({ children }) => {
  const [globalVariable, setGlobalVariable] = useState("Service1A");
  const [selectedSection, setSelectedSection] = useState("Service1A");

  return (
    <GlobalContext.Provider value={{ globalVariable, setGlobalVariable,selectedSection, setSelectedSection }}>
      {children}
    </GlobalContext.Provider>
  );
};
