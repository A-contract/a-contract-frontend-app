import {
  Box,
  FormControl,
  FormControlLabel,
  Checkbox,
  Link,
  FormHelperText,
} from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useScopedI18n } from "@/locales/client";
import theme from "@/theme/theme";

interface LegalCheckboxProps {
  handleInputChange: (
    field: string
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const LegalCheckbox: React.FC<LegalCheckboxProps> = ({ handleInputChange }) => {
  const authContext = useContext(AuthContext);
  const scopedT = useScopedI18n("Auth.SignUp");

  return (
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
              {scopedT("form.legalCheckBox")}
            </Link>
          }
        />
        {!authContext?.regFormData.legal?.isValid && (
          <FormHelperText error>Required field</FormHelperText>
        )}
      </FormControl>
    </Box>
  );
};

export default LegalCheckbox;
