"use client";
import { createContext, PropsWithChildren, useState } from "react";

interface IUserData {
  role: string;
  name: string;
}

interface IUserContext {
  user: IUserData;
  setUser: React.Dispatch<React.SetStateAction<IUserData>>;
}

const defaultUserData = {
  role: "customer",
  name: "Tomas Fridrigovich",
};

const defaultUserContext = {
  user: defaultUserData,
  setUser: () => {},
};

export const UserContext = createContext<IUserContext>(defaultUserContext);

const UserContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<IUserData>(defaultUserData);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
