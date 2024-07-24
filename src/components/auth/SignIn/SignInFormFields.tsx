import { Box, TextField, InputAdornment, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import React, { useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";

const FormFields = () => {
  const authContext = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleInputChange =
    (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      authContext?.setAuthFormData((prevData) => ({
        ...prevData,
        [field]: { value: event.target.value, isValid: true },
      }));
    };

  const handlePasswordToggle = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <Box sx={{ pb: "25px" }}>
        <TextField
          required
          placeholder="email"
          label="email"
          error={!authContext?.authFormData.email.isValid}
          helperText={
            !authContext?.authFormData.email.isValid
              ? "Email is not correct"
              : ""
          }
          onChange={handleInputChange("email")}
          sx={{ width: "300px" }}
        />
      </Box>
      <Box sx={{ pb: "25px" }}>
        <TextField
          required
          placeholder="password"
          label="password"
          type={showPassword ? "text" : "password"}
          sx={{ width: "300px" }}
          error={!authContext?.authFormData.password.isValid}
          helperText={
            !authContext?.authFormData.password.isValid
              ? "Password is not correct"
              : ""
          }
          onChange={handleInputChange("password")}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handlePasswordToggle}
                  onMouseDown={(e) => e.preventDefault()}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </>
  );
};

export default FormFields;
