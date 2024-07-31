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
  openDrawer: Boolean;
  setOpenDrawer: Dispatch<SetStateAction<Boolean>>;
}

export const CabinetContext = createContext<ICabinetContextProps | undefined>(
  undefined
);

const CabinetContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState<Boolean>(false);
  return (
    <CabinetContext.Provider value={{ openDrawer, setOpenDrawer }}>
      {children}
    </CabinetContext.Provider>
  );
};

export default CabinetContextProvider;
