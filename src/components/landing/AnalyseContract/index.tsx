"use client";

import { Box, Container } from "@mui/material";

import Description from "./components/Description";

const AnalyseContract = () => {
  return (
    <>
      <Box
        id={"analyse-contract"}
        className={"sections"}
        sx={{
          backgroundColor: "secondary.main",
          opacity: "20",
          px: 2,
          pt: 16,
          pb: 10,
        }}
      >
        <Container>
          <Description />
        </Container>
      </Box>
    </>
  );
};

export default AnalyseContract;
