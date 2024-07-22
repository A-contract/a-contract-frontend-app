import { useScopedI18n } from "@/locales/client";
import theme from "@/theme/theme";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";

import PaymentIcon from "@mui/icons-material/Payment";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import NumbersIcon from "@mui/icons-material/Numbers";
import AssignmentIcon from "@mui/icons-material/Assignment";

const getIcon = (nameIcon: string) => {
  switch (nameIcon) {
    case "PaymentIcon":
      return <PaymentIcon />;
    case "DocumentScannerIcon":
      return <DocumentScannerIcon />;
    case "NumbersIcon":
      return <NumbersIcon />;
    case "AssignmentIcon":
      return <AssignmentIcon />;
    default:
      return <></>;
  }
};

const Description = () => {
  const scopedT = useScopedI18n("Landing.Tarrifs.Description");

  return (
    <Box sx={{ mt: 10 }}>
      <Divider sx={{ bgcolor: "#577c619c", my: 2 }} />
      <List sx={{ fontSize: "20px" }}>
        <ListItem>
          <ListItemIcon
            sx={{
              minWidth: "20px",
              color: theme.palette.primary.dark,
              pr: 2,
            }}
          >
            <PaymentIcon />
          </ListItemIcon>
          <Typography fontSize={20}>{scopedT("paragraph1")}</Typography>
        </ListItem>
        <ListItem>
          <ListItemIcon
            sx={{
              minWidth: "20px",
              color: theme.palette.primary.dark,
              pr: 2,
            }}
          >
            <DocumentScannerIcon />
          </ListItemIcon>
          <Typography fontSize={20}>{scopedT("paragraph2")}</Typography>
        </ListItem>
        <ListItem>
          <ListItemIcon
            sx={{
              minWidth: "20px",
              color: theme.palette.primary.dark,
              pr: 2,
            }}
          >
            <NumbersIcon />
          </ListItemIcon>
          <Typography fontSize={20}>{scopedT("paragraph3")}</Typography>
        </ListItem>
        <ListItem>
          <ListItemIcon
            sx={{
              minWidth: "20px",
              color: theme.palette.primary.dark,
              pr: 2,
            }}
          >
            <AssignmentIcon />
          </ListItemIcon>
          <Typography fontSize={20}>{scopedT("paragraph4")}</Typography>
        </ListItem>
      </List>
      <Divider sx={{ bgcolor: "#577c619c", my: 2 }} />
    </Box>
  );
};

export default Description;
