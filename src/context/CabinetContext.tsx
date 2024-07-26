"use client";
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";

export interface CabinetTabData {
  name: string;
  url: string;
}

interface ICabinetContextProps {
  activeTab: CabinetTabData;
  setActiveTab: Dispatch<SetStateAction<CabinetTabData>>;
}

export const CabinetContext = createContext<ICabinetContextProps | undefined>(
  undefined
);

export const defaultTabData: CabinetTabData = {
  name: "Contracts",
  url: "/contracts",
};

const CabinetContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<CabinetTabData>(defaultTabData);
  return (
    <CabinetContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </CabinetContext.Provider>
  );
};

export default CabinetContextProvider;
