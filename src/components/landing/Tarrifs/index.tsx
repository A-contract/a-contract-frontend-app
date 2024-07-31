"use client";
import { Box, Container } from "@mui/material";
import Cards from "./Cards";
import Description from "./Description";

const Tarrifs = () => {
  return (
    <Box id={"tariffs"} className={"sections"} pt={10} pb={10} px={2}>
      <Container>
        <Cards />
        <Description />
      </Container>
    </Box>
  );
};

export default Tarrifs;
