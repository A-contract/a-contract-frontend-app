"use client";

import { Box, Container } from "@mui/material";

import Description from "./components/Description";

const AnalyseContract = () => {
  return (
    <>
      <Box
        id={"analyse-contract"}
        pt={16}
        pb={10}
        sx={{ backgroundColor: "primary.light", opacity: "20" }}
      >
        <Container>
          <Description />
        </Container>
      </Box>
    </>
  );
};

export default AnalyseContract;
