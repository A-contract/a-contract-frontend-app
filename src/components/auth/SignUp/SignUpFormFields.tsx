import { AuthContext } from "@/context/AuthContext";
import { useScopedI18n } from "@/locales/client";
import theme from "@/theme/theme";
import { Box } from "@mui/material";
import { useContext, useState } from "react";
import FormInputs from "./FormInputs";
import LegalCheckbox from "./LegalCheckBox";

const SignUpFormFields = () => {
  const authContext = useContext(AuthContext);
  const scopedT = useScopedI18n("Auth.SignUp");

  const handleInputChange =
    (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const value =
        field === "legal" ? event.target.checked : event.target.value;
      const isValid = field === "legal" ? event.target.checked : true;

      authContext?.setRegFormData((prevData) => ({
        ...prevData,
        [field]: { value, isValid },
      }));
    };

  return (
    <Box>
      <FormInputs handleInputChange={handleInputChange} />
      <LegalCheckbox handleInputChange={handleInputChange} />
    </Box>
  );
};

export default SignUpFormFields;
