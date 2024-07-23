import { Snackbar, Alert } from "@mui/material";

const SignUpSnackbar = () => {
  return (
    <Snackbar
      sx={{ width: 500 }}
      //   open={openSnackbar}
      //   onClose={() => setOpenSnackbar(false)}
    >
      <Alert
      // onClose={() => setOpenSnackbar(false)}
      // severity={snackbar.severity}
      >
        {/* {snackbar.message} */}
      </Alert>
    </Snackbar>
  );
};

export default SignUpSnackbar;
