import { AuthContext } from "@/context/AuthContext";
import { Box, Button, useTheme } from "@mui/material";
import { useContext } from "react";
import {
  isNotEmptyField,
  isValidConfirmPassword,
  isValidEmail,
  isValidPassword,
} from "../validation";
import { useScopedI18n } from "@/locales/client";

const SignUpButton = () => {
  const authContext = useContext(AuthContext);
  const scopedT = useScopedI18n("Auth.SignUp");

  const handleSubmit = () => {
    if (!authContext) return;

    const emailIsValid = isValidEmail(authContext.regFormData.email.value);

    const passwordIsValid = isValidPassword(
      authContext.regFormData.password.value
    );

    console.log(
      authContext.regFormData.password.value,
      authContext.regFormData.confirmPassword.value
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
          bgcolor: "info.light",
          color: "secondary.main",
          borderColor: "info.main",
          width: "300px",
          "&:hover": {
            bgcolor: "info.main",
            borderColor: "info.main",
          },
        }}
      >
        {scopedT("form.button")}
      </Button>
    </Box>
  );
};

export default SignUpButton;
