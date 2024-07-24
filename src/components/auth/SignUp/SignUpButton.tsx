import { AuthContext } from "@/context/AuthContext";
import { Box, Button, useTheme } from "@mui/material";
import { useContext } from "react";
import {
  isNotEmptyField,
  isValidConfirmPassword,
  isValidEmail,
  isValidPassword,
} from "../validation";

const SignUpButton = () => {
  const theme = useTheme();

  const authContext = useContext(AuthContext);

  const handleSubmit = () => {
    if (!authContext) return;

    const emailIsValid = isValidEmail(authContext.regFormData.email.value);
    const passwordIsValid = isValidPassword(
      authContext.regFormData.password.value
    );
    const confirmPasswordIsValid = isValidConfirmPassword(
      authContext.regFormData.password.value,
      authContext.regFormData.confirmPassword.value
    );
    const nameIsValid = isNotEmptyField(authContext.regFormData.name.value);
    const surnameIsValid = isNotEmptyField(
      authContext.regFormData.surname.value
    );
    const legalIsValid = authContext.regFormData.legal.isValid;

    authContext.setRegFormData({
      email: { ...authContext?.regFormData.email, isValid: emailIsValid },
      password: {
        ...authContext?.regFormData.password,
        isValid: passwordIsValid,
      },
      confirmPassword: {
        ...authContext?.regFormData.confirmPassword,
        isValid: confirmPasswordIsValid,
      },
      name: {
        ...authContext.regFormData.name,
        isValid: nameIsValid,
      },
      surname: {
        ...authContext.regFormData.surname,
        isValid: surnameIsValid,
      },
      legal: {
        ...authContext?.regFormData.legal,
        isValid: legalIsValid,
      },
    });

    if (emailIsValid && passwordIsValid) {
    } else {
      authContext.setOpenSnackbar(true);
    }
  };

  return (
    <Box sx={{ py: "15px" }}>
      <Button
        variant="outlined"
        onClick={handleSubmit}
        sx={{
          bgcolor: theme.palette.info.light,
          color: theme.palette.secondary.main,
          borderColor: theme.palette.info.main,
          width: "300px",
          "&:hover": {
            bgcolor: theme.palette.info.main,
            borderColor: theme.palette.info.main,
          },
        }}
      >
        Sign up
      </Button>
    </Box>
  );
};

export default SignUpButton;
