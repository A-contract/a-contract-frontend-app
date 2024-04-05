import { useScopedI18n } from "@/locales/client";
import { RootState } from "@/store/store";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useSelector } from "react-redux";

const Description = () => {
  const selectTabsData = (state: RootState) => state.landingAnalyseContract;
  const { items } = useSelector(selectTabsData);
  const scopedT = useScopedI18n("Landing.AnalyseContract");

  return (
    <Box maxWidth={530} alignItems="center">
      <Typography
        variant="h4"
        fontWeight="600"
        align="left"
        color={"primary.dark"}
        pb={2}
        gutterBottom
      >
        {scopedT("title")}
      </Typography>

      <Typography
        fontSize={20}
        align="left"
        textAlign="justify"
        color={"primary.dark"}
        paragraph
      >
        {scopedT("paragraph1")}
      </Typography>
      <Typography fontSize={20} align="left" color={"primary.dark"}>
        {scopedT("paragraph2")}
      </Typography>
      <List component={Box} fontSize={20}>
        {items.map((value, index) => (
          <ListItem component={Box} key={index}>
            <ListItemIcon
              sx={{
                minWidth: "20px",
                color: "primary.dark",
              }}
            >
              {value.icon}
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography fontSize={18} color={"primary.dark"}>
                  {scopedT(value.point)}
                </Typography>
              }
            ></ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Description;
