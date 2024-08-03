import { TextField, InputAdornment, IconButton, Box } from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useScopedI18n } from "@/locales/client";

interface FormInputsProps {
  handleInputChange: (
    field: string
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInputs: React.FC<FormInputsProps> = ({ handleInputChange }) => {
  const authContext = useContext(AuthContext);
  const scopedT = useScopedI18n("Auth.SignUp");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const inputs = [
    {
      placeholder: "name",
      label: scopedT("form.name"),
      type: "text",
      error: !authContext?.regFormData.name?.isValid,
      helperText: !authContext?.regFormData.name?.isValid
        ? "Field of name is required"
        : "",
      autocomplete: "off",
      InputProps: {},
    },
    {
      placeholder: "surname",
      label: scopedT("form.surname"),
      type: "text",
      error: !authContext?.regFormData.surname?.isValid,
      helperText: !authContext?.regFormData.surname?.isValid
        ? "Field of surname is required"
        : "",
      autocomplete: "off",
      InputProps: {},
    },
    {
      placeholder: "email",
      label: scopedT("form.email"),
      type: "text",
      error: !authContext?.regFormData.email?.isValid,
      helperText: !authContext?.regFormData.email?.isValid
        ? "Field of email is required"
        : "",
      autocomplete: "off",
      InputProps: {},
    },
    {
      placeholder: "password",
      label: scopedT("form.password"),
      type: showPassword ? "text" : "password",
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
      label: scopedT("form.confirmPassword"),
      type: showConfirmPassword ? "text" : "password",
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
            label={scopedT(element.label as any)}
            type={element.type}
            error={element.error}
            helperText={element.helperText}
            autoComplete={element.autocomplete}
            onChange={handleInputChange(element.placeholder)}
            InputProps={element.InputProps}
            sx={{ width: "300px" }}
          />
        </Box>
      ))}
    </>
  );
};

export default FormInputs;
