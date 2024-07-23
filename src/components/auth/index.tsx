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

const Auth = () => {
  const theme = useTheme();
  const activeFormId = useSelector(
    (state: RootState) => state.authForm.activeFormId
  );
  const dispatch = useDispatch();
  const tabs = [<SignIn key={""} />, <SignUp key={""} />];

  return (
    <Box
      sx={{
        mx: "auto",
        mt: "10px",
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
              dispatch(setActiveAuthForm(newTabValue));
            }}
          >
            <Tab label="Sign in" value={0} sx={{ width: "150px" }}></Tab>
            <Tab label="Sign up" value={1} sx={{ width: "150px" }}></Tab>
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
  );
};

export default Auth;
