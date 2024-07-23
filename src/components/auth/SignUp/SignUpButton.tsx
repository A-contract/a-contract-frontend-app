import { Box, Button, useTheme } from "@mui/material";

const SignUpButton = () => {
  const theme = useTheme();

  const handleSubmit = async () => {};

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
