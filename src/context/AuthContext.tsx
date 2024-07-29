"use client";
import React, {
  createContext,
  useState,
  PropsWithChildren,
  Dispatch,
  SetStateAction,
} from "react";

interface IFormField<T> {
  value: T;
  isValid: boolean;
}

interface IAuthFormData {
  email: IFormField<string>;
  password: IFormField<string>;
}

interface IRegFormData extends IAuthFormData {
  confirmPassword: IFormField<string>;
  name: IFormField<string>;
  surname: IFormField<string>;
  legal: IFormField<boolean>;
}

interface IAuthContextProps {
  authFormData: IAuthFormData;
  setAuthFormData: Dispatch<SetStateAction<IAuthFormData>>;
  regFormData: IRegFormData;
  setRegFormData: Dispatch<SetStateAction<IRegFormData>>;
  openSnackbar: boolean;
  setOpenSnackbar: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext<IAuthContextProps | undefined>(
  undefined
);

const defaultField = <T,>(value: T): IFormField<T> => ({
  value,
  isValid: true,
});

export const defaultAuthData: IAuthFormData = {
  email: defaultField(""),
  password: defaultField(""),
};

export const defaultRegData: IRegFormData = {
  ...defaultAuthData,
  confirmPassword: defaultField(""),
  name: defaultField(""),
  surname: defaultField(""),
  legal: defaultField(false),
};

const AuthContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [authFormData, setAuthFormData] =
    useState<IAuthFormData>(defaultAuthData);
  const [regFormData, setRegFormData] = useState<IRegFormData>(defaultRegData);
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
