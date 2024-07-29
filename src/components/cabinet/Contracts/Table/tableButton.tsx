import { Button } from "@mui/material";

const tableButton = (label: string, icon: JSX.Element, callback: () => {}) => (
  <Button
    variant="outlined"
    sx={{
      color: "secondary.light",
      bgcolor: "info.main",
      borderColor: "success.light",
      "&:hover": {
        bgcolor: "info.light",
        borderColor: "info.main",
      },
    }}
    startIcon={icon}
    onClick={() => {}}
  >
    {label}
  </Button>
);

export default tableButton;
