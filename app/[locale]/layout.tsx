import React, { PropsWithChildren, Suspense } from "react";
import { I18nProviderClient } from "@/locales/client";
import "./global.css";
import ThemeProvider from "@/theme/ThemeProvider";
import { CssBaseline } from "@mui/material";
import Loading from "../loading";
import AuthContextProvider from "@/context/AuthContext";
import CabinetContextProvider from "@/context/CabinetContext";
import UserContextProvider from "@/context/UserContext";

interface IParams {
  locale: string;
}

interface IRootLayoutProps extends PropsWithChildren {
  params: IParams;
}

const RootLayout = ({ children, params }: IRootLayoutProps) => {
  return (
    <I18nProviderClient locale={params.locale}>
      <ThemeProvider>
        <CssBaseline />
        <Suspense fallback={<Loading />}>
          <AuthContextProvider>
            <UserContextProvider>
              <CabinetContextProvider>{children}</CabinetContextProvider>
            </UserContextProvider>
          </AuthContextProvider>
        </Suspense>
      </ThemeProvider>
    </I18nProviderClient>
  );
};

export default RootLayout;
