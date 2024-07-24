import { AuthContext } from "@/context/AuthContext";
import theme from "@/theme/theme";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  FormControl,
  FormControlLabel,
  Checkbox,
  Link,
  FormHelperText,
} from "@mui/material";
import { useContext, useState } from "react";

const SignUpFormFields = () => {
  const authContext = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const handleInputChange =
    (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const value =
        field === "legal" ? event.target.checked : event.target.value;
      const isValid = field === "legal" ? event.target.checked : true;

      authContext?.setRegFormData((prevData) => ({
        ...prevData,
        [field]: { value: value, isValid },
      }));
    };

  const inputs = [
    {
      placeholder: "name",
      lable: "name",
      type: "text",
      error: !authContext?.regFormData.name?.isValid,
      helperText: !authContext?.regFormData.name?.isValid
        ? "Field of name is required"
        : "",
      autocomplete: "off",
      InputProps: <></>,
    },
    {
      placeholder: "surname",
      lable: "surname",
      type: "text",
      error: !authContext?.regFormData.surname?.isValid,
      helperText: !authContext?.regFormData.surname?.isValid
        ? "Field of surname is required"
        : "",
      autocomplete: "off",
      InputProps: <></>,
    },
    {
      placeholder: "email",
      lable: "email",
      type: "text",
      error: !authContext?.regFormData.email?.isValid,
      helperText: !authContext?.regFormData.email?.isValid
        ? "Field of email is required"
        : "",
      autocomplete: "off",
      InputProps: <></>,
    },
    {
      placeholder: "password",
      lable: "password",
      type: "password",
      error: !authContext?.regFormData.password?.isValid,
      helperText: !authContext?.regFormData.password?.isValid
        ? "Password is not correct"
        : "",
      autocomplete: "off",
      InputProps: {
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowPassword((prev) => !prev)}
              onMouseDown={(e) => e.preventDefault()}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      },
    },
    {
      placeholder: "confirmPassword",
      lable: "confirm password",
      type: "password",
      error: !authContext?.regFormData.confirmPassword?.isValid,
      helperText: !authContext?.regFormData.confirmPassword?.isValid
        ? "Confirm password is not correct"
        : "",
      autocomplete: "off",
      InputProps: {
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle confirm password visibility"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              onMouseDown={(e) => e.preventDefault()}
              edge="end"
            >
              {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      },
    },
  ];

  return (
    <>
      {inputs.map((element, index) => (
        <Box key={index} sx={{ pb: "10px" }}>
          <TextField
            required
            placeholder={element.placeholder}
            label={element.lable}
            type={element.type}
            error={element.error}
            helperText={element.helperText}
            autoComplete={element.autocomplete}
            onChange={handleInputChange(element.lable)}
            InputProps={element.InputProps}
            sx={{ width: "300px" }}
          />
        </Box>
      ))}

      <Box sx={{ pb: "10px", pl: "10px" }}>
        <FormControl sx={{ minWidth: 120, width: 300 }} size="medium">
          <FormControlLabel
            control={
              <Checkbox
                required
                checked={authContext?.regFormData.legal?.value || false}
                onChange={handleInputChange("legal")}
              />
            }
            label={
              <Link
                sx={{
                  textAlign: "center",
                  fontSize: "14px",
                  cursor: "pointer",
                  "&:hover": {
                    color: theme.palette.info.main,
                  },
                }}
                target="_blank"
                href="/legal/terms-and-conditions"
              >
                By signing up, you agree to our terms of service and privacy
                policy
              </Link>
            }
          />
          {!authContext?.regFormData.legal?.isValid && (
            <FormHelperText error>Required field</FormHelperText>
          )}
        </FormControl>
      </Box>
    </>
  );
};

export default SignUpFormFields;
