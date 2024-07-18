"use client";
import { createContext, useState } from "react";

export interface LegalContextValue {
  tab: number; // State for the expanded accordion panel
  setTab: (tab: number) => void; // Function to update expanded state
}

export const LegalContext = createContext<LegalContextValue | undefined>(
  undefined
);

const Context = (props: any) => {
  const [tab, setTab] = useState<number>(0);

  const value = { tab, setTab };
  return (
    <LegalContext.Provider value={value}>
      {props.children}
    </LegalContext.Provider>
  );
};

export default Context;
