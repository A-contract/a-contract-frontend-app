import { useScopedI18n } from "@/locales/client";
import {
  Box,
  Paper,
  TextField,
  Button,
  useMediaQuery,
  useTheme,
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
      maxWidth={530}
      mx={0}
      ml={isMatch ? 0 : 0}
      alignItems="center"
    >
      <Paper
        component={Box}
        height={450}
        width={isMatch ? 350 : 400}
        px={3}
        py={3}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box>
          <Box component="h4"> {scopedT("title")}</Box>
        </Box>
        <Box mb={2}>
          <TextField
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            sx={{
              bgcolor: "secondary.main",
              width: 320,
            }}
          />
        </Box>
        <Box mb={2}>
          <TextField
            placeholder={scopedT("textarea")}
            multiline
            rows={8}
            variant="outlined"
            value={question}
            onChange={(e) => {
              setQuestion(e.target.value);
            }}
            sx={{
              bgcolor: "secondary.main",
              width: 320,
            }}
          />
        </Box>
        <Box>
          <Button
            variant="outlined"
            sx={{
              bgcolor: "info.light",
              color: "secondary.main",
              borderColor: "info.main",
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
        </Box>
      </Paper>
    </Box>
  );
};

export default QuestionForm;
