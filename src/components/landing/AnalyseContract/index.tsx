"use client";

import { Box, Container } from "@mui/material";

import Description from "./components/Description";
import Analyse from "./components/Analyse";

const AnalyseContract = () => {
  return (
    <>
      <Box component="div" id={"analyse-contract"} pt={16} pb={10}>
        <Container sx={{ display: "flex", flexWrap: "wrap" }}>
          <Description />
          <Analyse />
        </Container>
      </Box>
    </>
  );
};

export default AnalyseContract;
