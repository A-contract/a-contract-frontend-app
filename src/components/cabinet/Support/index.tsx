"use client";
import { Paper, Box, Typography, Container } from "@mui/material";
import Info from "./Info";
import Chat from "./Chat";

const Support = () => {
  return (
    <Container
      sx={{
        padding: { xs: 0, md: 0 },
        maxWidth: { xs: "100%", md: "unset" },
        maxHeight: "100%",
        width: "100% !important",
      }}
    >
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          overflow: "auto",
        }}
      >
        <Typography sx={{ fontSize: 18, textTransform: "uppercase", pb: 2 }}>
          Support
        </Typography>

        <Box
          sx={{
            display: "flex",
            px: 2,
            flexDirection: { xs: "column", md: "column", lg: "row" },
          }}
        >
          <Info />
          <Chat />
        </Box>
      </Paper>
    </Container>
  );
};

export default Support;
