"use client";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Description from "./Description";
import QuestionForm from "./QuestionForm";

const SupportSection = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      id={"support"}
      display="flex"
      flexDirection={isMatch ? "column" : "row"}
      justifyContent="center"
      alignItems={isMatch ? "center" : "flex-start"}
      pt={10}
      pb={15}
      px={2}
      mx="auto"
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        pr={isMatch ? 0 : 14}
      >
        <Description />
      </Box>
      <Box
        ml={isMatch ? 0 : 5}
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
      >
        <QuestionForm />
      </Box>
    </Box>
  );
};

export default SupportSection;
