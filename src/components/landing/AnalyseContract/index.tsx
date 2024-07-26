"use client";

import { Box, Container } from "@mui/material";

import Description from "./components/Description";

const AnalyseContract = () => {
  return (
    <>
      <Box
        id={"analyse-contract"}
        className={"sections"}
        pt={16}
        pb={10}
        sx={{ backgroundColor: "secondary.main", opacity: "20" }}
      >
        <Container>
          <Description />
        </Container>
      </Box>
    </>
  );
};

export default AnalyseContract;
