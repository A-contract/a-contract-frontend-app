import { AuthContext } from "@/context/AuthContext";
import { Box, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useContext } from "react";
import { isValidEmail, isValidPassword } from "./validation";

const SignInButton = () => {
  const theme = useTheme();
  const authContext = useContext(AuthContext);

  const handleSubmit = () => {
    if (!authContext) return;

    const emailIsValid = isValidEmail(authContext.formData.email.value);
    const passwordIsValid = isValidPassword(
      authContext.formData.password.value
    );

    authContext.setFormData({
      email: { ...authContext?.formData.email, isValid: emailIsValid },
      password: { ...authContext?.formData.password, isValid: passwordIsValid },
    });

    if (emailIsValid && passwordIsValid) {
    } else {
      authContext.setOpenSnackbar(true);
    }
  };

  return (
    <Box sx={{ pb: "25px" }}>
      <Button
        variant="outlined"
        onClick={handleSubmit}
        sx={{
          bgcolor: theme.palette.info.light,
          color: "primary.light",
          borderColor: theme.palette.info.main,
          width: "300px",
          "&:hover": {
            bgcolor: theme.palette.info.main,
            borderColor: theme.palette.info.main,
          },
        }}
      >
        Sign in
      </Button>
    </Box>
  );
};

export default SignInButton;
