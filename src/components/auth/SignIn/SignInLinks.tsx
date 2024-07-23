import { setActiveAuthForm } from "@/store/authForm/authForm";
import theme from "@/theme/theme";
import { Box, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import { useDispatch } from "react-redux";

const SignInLinks = () => {
  const theme = useTheme();
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
            Don&apos;t remember your password?
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
          Don&apos;t have an account? Sign up
        </Typography>
      </Box>
    </>
  );
};

export default SignInLinks;
