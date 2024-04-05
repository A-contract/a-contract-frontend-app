import { useScopedI18n } from "@/locales/client";
import theme from "@/theme/theme";
import { Box, List, ListItem, ListItemIcon, Typography } from "@mui/material";

const Description = () => {
  const scopedT = useScopedI18n("Landing.Tarrifs.Description");
  return (
    <Box>
      <List sx={{ fontSize: "20px" }}>
        <ListItem>
          <ListItemIcon
            sx={{
              minWidth: "20px",
              color: theme.palette.primary.dark,
            }}
          >
            {scopedT("icon")}
          </ListItemIcon>
          <Typography fontSize={20}>{scopedT("paragraph1")}</Typography>
        </ListItem>
        <ListItem>
          <ListItemIcon
            sx={{
              minWidth: "20px",
              color: theme.palette.primary.dark,
            }}
          >
            {scopedT("icon")}
          </ListItemIcon>
          <Typography fontSize={20}>{scopedT("paragraph2")}</Typography>
        </ListItem>
        <ListItem>
          <ListItemIcon
            sx={{
              minWidth: "20px",
              color: theme.palette.primary.dark,
            }}
          >
            {scopedT("icon")}
          </ListItemIcon>
          <Typography fontSize={20}>{scopedT("paragraph3")}</Typography>
        </ListItem>
        <ListItem>
          <ListItemIcon
            sx={{
              minWidth: "20px",
              color: theme.palette.primary.dark,
            }}
          >
            {scopedT("icon")}
          </ListItemIcon>
          <Typography fontSize={20}>{scopedT("paragraph4")}</Typography>
        </ListItem>
      </List>
    </Box>
  );
};

export default Description;
