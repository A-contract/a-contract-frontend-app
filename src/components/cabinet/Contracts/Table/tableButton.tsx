import { useScopedI18n } from "@/locales/client";
import { Button } from "@mui/material";

const TableButton = (label: string, icon: JSX.Element, callback: () => {}) => {
  const scopedT = useScopedI18n("Cabinet.Contracts");
  return (
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
      {scopedT(label as any)}
    </Button>
  );
};

export default TableButton;
