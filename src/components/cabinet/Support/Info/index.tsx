import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import { useScopedI18n } from "@/locales/client";

const questions = [
  {
    question: "Support.Description.paragraph4",
    answer: "Support.Description.paragraph5",
  },
  {
    question: "Support.Description.paragraph6",
    answer: "Support.Description.paragraph7",
  },
  {
    question: "Support.Description.paragraph8",
    answer: "Support.Description.paragraph9",
  },
  {
    question: "Support.Description.paragraph10",
    answer: "Support.Description.paragraph11",
  },
];

const Info = () => {
  const scopedT = useScopedI18n("Cabinet");
  return (
    <Box
      sx={{
        border: 1,
        borderRadius: 2,
        borderColor: "info.dark",
        p: 2,
        maxWidth: {
          xs: "-webkit-fill-available",
          md: "-webkit-fill-available",
          lg: 700,
        },
        maxHeight: "70vh",
        overflow: "auto",
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        {scopedT("Support.Description.paragraph1")}
      </Typography>
      <Typography sx={{ mb: 3 }}>
        {scopedT("Support.Description.paragraph2")}
      </Typography>
      <Typography variant="h6" sx={{ mb: 2 }}>
        {scopedT("Support.Description.paragraph3")}
      </Typography>

      {questions.map((element, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{scopedT(element.question as any)}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{scopedT(element.answer as any)}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default Info;
