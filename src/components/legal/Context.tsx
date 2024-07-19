"use client";
import { createContext, useState } from "react";

export interface LegalContextValue {
  tab: number;
  setTab: (tab: number) => void;
}

export const LegalContext = createContext<LegalContextValue>({
  tab: 0,
  setTab: () => {},
});

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
