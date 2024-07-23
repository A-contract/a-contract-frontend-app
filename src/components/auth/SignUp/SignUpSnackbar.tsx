import { Snackbar, Alert } from "@mui/material";
import { useState } from "react";

const SignUpSnackbar = () => {
    // const [snackbar, setSnackbar] = useState<SnackbarState>({
    //     message: "",
    //     severity: "success",
    // });
    const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
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
