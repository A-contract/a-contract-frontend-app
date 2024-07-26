"use client";
import React, {
  createContext,
  useState,
  PropsWithChildren,
  Dispatch,
  SetStateAction,
} from "react";

interface FormField<T> {
  value: T;
  isValid: boolean;
}

interface AuthFormData {
  email: FormField<string>;
  password: FormField<string>;
}

interface RegFormData extends AuthFormData {
  confirmPassword: FormField<string>;
  name: FormField<string>;
  surname: FormField<string>;
  legal: FormField<boolean>;
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

const defaultField = <T,>(value: T): FormField<T> => ({ value, isValid: true });

export const defaultAuthData: AuthFormData = {
  email: defaultField(""),
  password: defaultField(""),
};

export const defaultRegData: RegFormData = {
  ...defaultAuthData,
  confirmPassword: defaultField(""),
  name: defaultField(""),
  surname: defaultField(""),
  legal: defaultField(false),
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
