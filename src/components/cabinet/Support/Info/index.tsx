import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

const questions = [
  {
    question: "1. Для чого сервіс A-contract ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    question: "2. Які терміни обробки договорів ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    question: "3. Як проходить оплата ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    question: "4. Як завантажувати ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
];

const Info = () => {
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
        Як працює підтримка ?
      </Typography>
      <Typography sx={{ mb: 3 }}>
        Ознайомтесь будь-ласка з найчастішими питаннями, якщо не знайшли своє,
        то скористуйтесь зворотнім зв&apos;язком, оператор Вам відповість в
        найкоротший термін.
      </Typography>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Найчастіші питання
      </Typography>

      {questions.map((element, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{element.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{element.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default Info;
