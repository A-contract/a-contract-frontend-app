"use client";
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";

interface Tab {
  id: number;
  name: string;
  href: string;
  target: string;
  color: string;
}

export const tabsDesktop: Tab[] = [
  {
    id: 0,
    name: "section1.name",
    href: "#analyse-contract",
    target: "",
    color: "secondary.light",
  },
  {
    id: 1,
    name: "section2.name",
    href: "#tariffs",
    target: "",
    color: "secondary.light",
  },
  {
    id: 2,
    name: "section3.name",
    href: "#support",
    target: "",
    color: "secondary.light",
  },
  {
    id: 3,
    name: "section4.name",
    href: "/blog",
    target: "/blog",
    color: "secondary.light",
  },
];

interface IHomeContextProps {
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
}

export const HomeContext = createContext<IHomeContextProps | undefined>(
  undefined
);

export const HomeContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  return (
    <HomeContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </HomeContext.Provider>
  );
};
