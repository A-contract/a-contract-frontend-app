import { useScopedI18n } from "@/locales/client";
import { setActiveAuthForm } from "@/store/authForm/authForm";
import { Box, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import { useDispatch } from "react-redux";

const SignInLinks = () => {
  const theme = useTheme();
  const scopedT = useScopedI18n("Auth.SignIn");
  const dispatch = useDispatch();
  return (
    <>
      <Box sx={{ pb: "10px" }}>
        <Link href="#">
          <Typography
            sx={{
              width: "300px",
              textAlign: "center",
              fontSize: "14px",
              cursor: "pointer",
              "&:hover": {
                color: theme.palette.info.main,
              },
            }}
          >
            {scopedT("form.link1")}
          </Typography>
        </Link>
      </Box>
      <Box sx={{ pb: "10px" }}>
        <Typography
          sx={{
            width: "300px",
            textAlign: "center",
            fontSize: "14px",
            cursor: "pointer",
            "&:hover": {
              color: theme.palette.info.main,
            },
          }}
          onClick={() => dispatch(setActiveAuthForm(1))}
        >
          {scopedT("form.link2")}
        </Typography>
      </Box>
    </>
  );
};

export default SignInLinks;
