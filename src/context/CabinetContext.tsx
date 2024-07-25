"use clinet";

import { createContext } from "vm";

interface TabsCabinetData {
  activeTab: string;
}

interface ICabinetContextProps {
  tabsData: TabsCabinetData;
}

const CabinetContext = createContext<ICabinetContextProps | undefined>(
  undefined
);

const CabinetContextProvider = (createContext<ICabinetContextProps> = () => {
  return <></>;
});
