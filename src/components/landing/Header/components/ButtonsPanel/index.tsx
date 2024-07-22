import { useScopedI18n } from "@/locales/client";
import { setActiveAuthForm } from "@/store/authForm/authForm";
import { Box, Button, useTheme } from "@mui/material";
import Link from "next/link";
import { useDispatch } from "react-redux";

const ButtonsPanel = () => {
  const scopedT = useScopedI18n("Landing.Header.Buttons");
  const dispatch = useDispatch();

  return (
    <>
      <Box
        component={Link}
        href="/auth"
        onClick={() => dispatch(setActiveAuthForm(0))}
        ml={1}
      >
        <Button variant="outlined" color="secondary">
          {scopedT("button2")}
        </Button>
      </Box>
      <Box
        component={Link}
        href="/auth"
        onClick={() => dispatch(setActiveAuthForm(1))}
        ml={1.5}
      >
        <Button
          variant="contained"
          sx={{
            bgcolor: "secondary.main",
            color: "info.light",
            borderColor: "info.light",
            border: "1px solid",
            "&:hover": {
              bgcolor: "info.main",
              color: "secondary.main",
              borderColor: "info.main",
              border: "1px solid",
            },
          }}
        >
          {scopedT("button3")}
        </Button>
      </Box>
    </>
  );
};

export default ButtonsPanel;
