import { useScopedI18n } from "@/locales/client";
import {
  Box,
  Paper,
  TextField,
  Button,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material";
import { useState } from "react";

const QuestionForm = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const scopedT = useScopedI18n("Landing.Support.QuestionForm");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="flex-start"
      maxWidth={530}
      mx="auto"
      mt={isMatch ? 2 : 0}
    >
      <Paper
        sx={{
          height: 470,
          width: isMatch ? 350 : 400,
          px: 3,
          py: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h4" mb={2}>
          {scopedT("title")}
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            bgcolor: "secondary.main",
            width: 320,
            mb: 2,
          }}
        />
        <TextField
          placeholder={scopedT("textarea")}
          multiline
          rows={8}
          variant="outlined"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          sx={{
            bgcolor: "secondary.main",
            width: 320,
            mb: 2,
          }}
        />
        <Button
          size="medium"
          variant="outlined"
          sx={{
            bgcolor: "info.light",
            color: "secondary.main",
            borderColor: "info.main",
            borderRadius: 4,
            width: 300,
            "&:hover": {
              bgcolor: "info.main",
              borderColor: "info.main",
            },
          }}
          // onClick={() => {
          //   setQuestionReq();
          // }}
        >
          {scopedT("button")}
        </Button>
      </Paper>
    </Box>
  );
};

export default QuestionForm;
