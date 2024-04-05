"use client";
import { Box, Container } from "@mui/material";
import Cards from "./Cards";
import Description from "./Description";

const Tarrifs = () => {
  return (
    <Box id={"tariffs"} pt={10} pb={10}>
      <Container>
        <Cards />
        <Description />
      </Container>
    </Box>
  );
};

export default Tarrifs;
