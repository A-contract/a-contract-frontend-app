"use client";
import { AuthContext } from "@/context/AuthContext";
import { Snackbar, Alert } from "@mui/material";
import React, { useContext } from "react";

const SignInSnackbar = () => {
  const authContext = useContext(AuthContext);
  return (
    <Snackbar
      open={authContext?.openSnackbar}
      autoHideDuration={6000}
      onClose={() => {
        authContext?.setOpenSnackbar(false);
      }}
      sx={{
        left: "auto !important",
        right: "auto !important",
        bottom: "20% !important",
      }}
    >
      <Alert
        onClose={() => {
          authContext?.setOpenSnackbar(false);
        }}
        severity="error"
      >
        Wrong login or password
      </Alert>
    </Snackbar>
  );
};

export default SignInSnackbar;
