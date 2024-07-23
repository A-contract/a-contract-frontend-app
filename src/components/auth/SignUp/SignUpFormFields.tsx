import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Typography,
} from "@mui/material";
import { useState } from "react";

const SignUpFormFields = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  //   const handleInputChange =
  //     (field: keyof FormFields) =>
  //     (event: React.ChangeEvent<HTMLInputElement>) => {
  //       const newValue = event.target.value;
  //       setFormFields({ ...formFields, [field]: newValue });
  //       validateField(field, newValue);
  //     };

  //   const [formErrors, setFormErrors] = useState<FormErrors>({
  //     name: true,
  //     surname: true,
  //     email: true,
  //     password: true,
  //     passwordConfirmation: true,
  //     terms: true,
  //   });

  return (
    <>
      <Box sx={{ pb: "25px" }}>
        <Typography sx={{ fontWeight: 600 }}>Sign up</Typography>
      </Box>
      {[
        { label: "name", placeholder: "name" },
        { label: "surname", placeholder: "surname" },
        { label: "email", placeholder: "email", type: "email" },
        {
          label: "password",
          placeholder: "password",
          type: showPassword ? "text" : "password",
        },
        {
          label: "confirm password",
          placeholder: "password confirmation",
          type: "password",
          field: "passwordConfirmation",
        },
      ].map(({ label, placeholder, type = "text", field = label }, index) => (
        <Box key={index} sx={{ pb: "10px" }}>
          <TextField
            required
            placeholder={placeholder}
            label={label}
            type={type}
            // error={!formErrors[field as keyof FormErrors]}
            // helperText={
            //   !formErrors[field as keyof FormErrors]
            //     ? `${label} is not correct`
            //     : ""
            // }
            // value={formFields[field as keyof FormFields]}
            autoComplete="off"
            // onChange={handleInputChange(field as keyof FormFields)}
            InputProps={
              label === "password" ? (
                {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        onMouseDown={(e) => e.preventDefault()}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }
              ) : (
                <></>
              )
            }
            sx={{ width: "300px" }}
          />
        </Box>
      ))}
    </>
  );
};

export default SignUpFormFields;
