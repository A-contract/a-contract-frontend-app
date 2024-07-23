import theme from "@/theme/theme";
import {
  Box,
  FormControl,
  FormControlLabel,
  Checkbox,
  FormHelperText,
  Link,
} from "@mui/material";

const SignUpLegacy = () => {
  return (
    <>
      <Box sx={{ pb: "10px", pl: "10px" }}>
        <FormControl sx={{ minWidth: 120, width: 300 }} size="medium">
          <FormControlLabel
            control={
              <Checkbox
                required
                // checked={formFields.terms}
                // onChange={handleCheckboxChange}
              />
            }
            label={
              <Link
                sx={{
                  textAlign: "center",
                  fontSize: "14px",
                  cursor: "pointer",
                  "&:hover": { color: theme.palette.info.main },
                }}
                target="_blank"
                href="/legal/terms-and-conditions"
              >
                By signing up, you agree to our terms of service and privacy
                policy
              </Link>
            }
          />
          {/* {!formErrors.terms && (
            <FormHelperText error>Required field</FormHelperText>
          )} */}
        </FormControl>
      </Box>
    </>
  );
};

export default SignUpLegacy;
