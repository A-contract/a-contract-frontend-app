"use client";
import { createContext, useState } from "react";

interface LegalContextValue {
  expanded: string | false; // State for the expanded accordion panel
  setExpanded: (panel: string) => void; // Function to update expanded state
}

export const LegalContext = createContext<LegalContextValue | undefined>(
  undefined
);

const Context = (props: any) => {
  const [expanded, setExpanded] = useState<string | false>("panel1");

  const value = { expanded, setExpanded };
  return (
    <LegalContext.Provider value={value}>
      {props.children}
    </LegalContext.Provider>
  );
};

export default Context;
