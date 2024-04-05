"use client";
import { Box, Container, Snackbar, Alert, useTheme } from "@mui/material";
import { useState } from "react";
import Description from "./Description";
import QuestionForm from "./QuestionForm";

const Support = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [textSnackbar, setTextSnackbar] = useState("");
  const [isError, setError] = useState(false);

  return (
    <Box id={"support"} pt={10} pb={10}>
      <Container sx={{ display: "flex", flexWrap: "wrap" }}>
        <Description />
        <QuestionForm />
      </Container>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        sx={{
          left: "auto !important",
          right: "auto !important",
          bottom: "20% !important",
        }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity={isError ? "error" : "success"}
        >
          {textSnackbar}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Support;
