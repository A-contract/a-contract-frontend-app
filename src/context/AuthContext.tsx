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

interface RegFormData {
  email: {
    value: string;
    isValid: boolean;
  };
  password: {
    value: string;
    isValid: boolean;
  };
  confirmPassword: {
    value: string;
    isValid: boolean;
  };
  name: {
    value: string;
    isValid: boolean;
  };
  surname: {
    value: string;
    isValid: boolean;
  };
  legal: {
    value: boolean;
    isValid: boolean;
  };
}

interface IAuthContextProps {
  authFormData: AuthFormData;
  setAuthFormData: Dispatch<SetStateAction<AuthFormData>>;
  regFormData: RegFormData;
  setRegFormData: Dispatch<SetStateAction<RegFormData>>;
  openSnackbar: boolean;
  setOpenSnackbar: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext<IAuthContextProps | undefined>(
  undefined
);

export const defaultAuthData = {
  email: { value: "", isValid: true },
  password: { value: "", isValid: true },
};

export const defaultRegData = {
  email: { value: "", isValid: true },
  password: { value: "", isValid: true },
  confirmPassword: { value: "", isValid: true },
  name: { value: "", isValid: true },
  surname: { value: "", isValid: true },
  legal: { value: false, isValid: true },
};

const AuthContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [authFormData, setAuthFormData] =
    useState<AuthFormData>(defaultAuthData);

  const [regFormData, setRegFormData] = useState<RegFormData>(defaultRegData);

  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);

  return (
    <AuthContext.Provider
      value={{
        authFormData,
        setAuthFormData,
        regFormData,
        setRegFormData,
        openSnackbar,
        setOpenSnackbar,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
