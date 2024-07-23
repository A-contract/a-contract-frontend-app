"use client";
import React, {
  createContext,
  useState,
  PropsWithChildren,
  Dispatch,
  SetStateAction,
} from "react";

interface AuthFormData {
  email: {
    value: string;
    isValid: boolean;
  };
  password: {
    value: string;
    isValid: boolean;
  };
}

interface IAuthContextProps {
  formData: AuthFormData;
  setFormData: Dispatch<SetStateAction<AuthFormData>>;
  openSnackbar: boolean;
  setOpenSnackbar: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext<IAuthContextProps | undefined>(
  undefined
);

const AuthContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [formData, setFormData] = useState<AuthFormData>({
    email: { value: "", isValid: true },
    password: { value: "", isValid: true },
  });

  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);

  return (
    <AuthContext.Provider
      value={{ formData, setFormData, openSnackbar, setOpenSnackbar }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
