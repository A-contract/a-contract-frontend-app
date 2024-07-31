"use client";
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";

export interface LegalTabData {
  name: string;
  url: string;
}

interface ILegalContextProps {
  openDrawer: Boolean;
  setOpenDrawer: Dispatch<SetStateAction<Boolean>>;
}

export const LegalContext = createContext<ILegalContextProps | undefined>(
  undefined
);

const LegalContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState<Boolean>(false);
  return (
    <LegalContext.Provider value={{ openDrawer, setOpenDrawer }}>
      {children}
    </LegalContext.Provider>
  );
};

export default LegalContextProvider;
