"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { Paper, Tabs, useTheme } from "@mui/material";
import SignIn from "@/components/auth/SignIn";
import SignUp from "@/components/auth/SignUp";
import Link from "next/link";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { setActiveAuthForm } from "@/store/authForm/authForm";
import { useContext } from "react";
import {
  AuthContext,
  defaultAuthData,
  defaultRegData,
} from "@/context/AuthContext";
import Header from "./Header";
import { useScopedI18n } from "@/locales/client";

const Auth = () => {
  const authContext = useContext(AuthContext);
  const theme = useTheme();
  const scopedT = useScopedI18n("Auth");
  const activeFormId = useSelector(
    (state: RootState) => state.authForm.activeFormId
  );

  const dispatch = useDispatch();
  const tabs = [<SignIn key={""} />, <SignUp key={""} />];

  return (
    <Box
      sx={{
        opacity: "20",
        px: 2,
        pt: 10,
        minHeight: "100vh",
        backgroundColor: "secondary.main",
      }}
    >
      <Header />
      <Box
        sx={{
          mx: "auto",
          width: "350px",
          maxWidth: "350px",
          borderRadius: "5px",
        }}
      >
        <Paper
          elevation={5}
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            component={Link}
            href="/"
            sx={{
              bgcolor: theme.palette.primary.main,
              width: "-webkit-fill-available",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              borderRadius: "5px 5px 0 0",
              mb: "5px",
            }}
          >
            <Box>
              <Box
                component="img"
                src={"/static/images/logo.png"}
                alt="logo"
                sx={{
                  width: "160px",
                  borderRadius: "5px",
                  p: "10px",
                  mx: "auto",
                }}
              />
            </Box>
          </Box>
          <Box>
            <Tabs
              value={activeFormId}
              onChange={(e, newTabValue: any) => {
                authContext?.setAuthFormData(defaultAuthData);
                authContext?.setRegFormData(defaultRegData);
                authContext?.setOpenSnackbar(false);
                dispatch(setActiveAuthForm(newTabValue));
              }}
            >
              <Tab
                label={scopedT("SignIn.title")}
                value={0}
                sx={{ width: "150px" }}
              ></Tab>
              <Tab
                label={scopedT("SignUp.title")}
                value={1}
                sx={{ width: "150px" }}
              ></Tab>
            </Tabs>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              padding: "20px",
            }}
          >
            {tabs[activeFormId]}
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Auth;
