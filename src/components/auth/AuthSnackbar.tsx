"use client";
import { AuthContext } from "@/context/AuthContext";
import { Snackbar, Alert } from "@mui/material";
import React, { useContext } from "react";

const AuthSnackbar = () => {
  const authContext = useContext(AuthContext);
  return (
    <Snackbar
      open={authContext?.openSnackbar}
      autoHideDuration={6000}
      onClose={() => {
        authContext?.setOpenSnackbar(false);
      }}
    >
      <Alert
        onClose={() => {
          authContext?.setOpenSnackbar(false);
        }}
        severity="error"
      >
        Wrong entred data
      </Alert>
    </Snackbar>
  );
};

export default AuthSnackbar;
