import { SyntheticEvent, useEffect, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  IconButton,
  InputAdornment,
  Link,
  Snackbar,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import SignUpFormFields from "./SignUpFormFields";
import SignUpLegacy from "./SignUpLegacy";
import SignUpSnackbar from "./SignUpSnackbar";
import SignUpButton from "./SignUpButton";

interface FormFields {
  name: string;
  surname: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  terms: boolean;
}

interface FormErrors {
  name: boolean;
  surname: boolean;
  email: boolean;
  password: boolean;
  passwordConfirmation: boolean;
  terms: boolean;
}

interface SnackbarState {
  message: string;
  severity: "success" | "error";
}

const SignUp = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    message: "",
    severity: "success",
  });
  const [formFields, setFormFields] = useState<FormFields>({
    name: "",
    surname: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    terms: false,
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({
    name: true,
    surname: true,
    email: true,
    password: true,
    passwordConfirmation: true,
    terms: true,
  });

  useEffect(() => {
    if (openSnackbar) {
      const timeoutId = setTimeout(() => setOpenSnackbar(false), 15000);
      return () => clearTimeout(timeoutId);
    }
  }, [openSnackbar]);

  const isValidEmail = (value: string) =>
    value.includes("@") && value.includes(".");
  const isNotEmptyField = (value: string) => value.length > 0;
  const isValidPassword = (value: string) => value.length > 11;
  const isValidConfirmPassword = (password: string, confirmPassword: string) =>
    password === confirmPassword;

  const handleInputChange =
    (field: keyof FormFields) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      setFormFields({ ...formFields, [field]: newValue });
      validateField(field, newValue);
    };

  const validateField = (field: keyof FormFields, value: string | boolean) => {
    let isValid;
    switch (field) {
      case "email":
        isValid = isValidEmail(value as string);
        break;
      case "password":
        isValid = isValidPassword(value as string);
        break;
      case "passwordConfirmation":
        isValid = isValidConfirmPassword(formFields.password, value as string);
        break;
      case "terms":
        isValid = value === true;
        break;
      default:
        isValid = isNotEmptyField(value as string);
    }
    setFormErrors({ ...formErrors, [field]: isValid });
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.checked;
    setFormFields({ ...formFields, terms: newValue });
    setFormErrors({ ...formErrors, terms: newValue });
  };

  return (
    <>
      <SignUpFormFields />
      <SignUpLegacy />
      <SignUpSnackbar />
      <SignUpButton />
    </>
  );
};

export default SignUp;
