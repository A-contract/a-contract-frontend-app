import { useScopedI18n } from "@/locales/client";
import { RootState } from "@/store/store";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  useMediaQuery,
  useTheme,
  Button,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { setActiveAuthForm } from "@/store/authForm/authForm";
import BadgeIcon from "@mui/icons-material/Badge";
import GavelIcon from "@mui/icons-material/Gavel";
import PaymentIcon from "@mui/icons-material/Payment";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import NotInterestedIcon from "@mui/icons-material/NotInterested";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import PhishingIcon from "@mui/icons-material/Phishing";

const iconMap = {
  BadgeIcon: <BadgeIcon />,
  GavelIcon: <GavelIcon />,
  PaymentIcon: <PaymentIcon />,
  AccessTimeIcon: <AccessTimeIcon />,
  NotInterestedIcon: <NotInterestedIcon />,
  Diversity3Icon: <Diversity3Icon />,
  AssuredWorkloadIcon: <AssuredWorkloadIcon />,
  PhishingIcon: <PhishingIcon />,
};

const getIcon = (nameIcon: keyof typeof iconMap): JSX.Element => {
  return iconMap[nameIcon] || <></>;
};

const Description = () => {
  const { items } = useSelector(
    (state: RootState) => state.landingAnalyseContract
  );
  const scopedT = useScopedI18n("Landing.AnalyseContract");
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const dispatch = useDispatch();

  return (
    <Box alignItems="center" display={isMatch ? "grid" : "block"}>
      <Typography
        variant="h4"
        fontWeight="600"
        align={isMatch ? "center" : "left"}
        color="primary.dark"
        pb={2}
        gutterBottom
      >
        <Box component="span" sx={{ color: "info.light" }}>
          A
        </Box>
        {scopedT("title")}
      </Typography>

      <Typography
        fontSize={20}
        textAlign={isMatch ? "center" : "justify"}
        color="primary.dark"
        paragraph
      >
        {scopedT("paragraph1")}
      </Typography>
      <Typography
        fontSize={20}
        color="primary.dark"
        textAlign={isMatch ? "center" : "left"}
      >
        {scopedT("paragraph2")}
      </Typography>

      <Box sx={{ pt: 4, mb: 4 }}>
        <Divider sx={{ bgcolor: "#577c619c" }} />
        <List sx={{ my: 1, px: 2 }}>
          {items.map((value, index) => (
            <ListItem
              key={index}
              sx={{
                paddingTop: 1,
                paddingBottom: 1,
                paddingLeft: 0,
                paddingRight: 0,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: "20px",
                  color: "primary.dark",
                  pr: 2,
                }}
              >
                {getIcon(value.icon)}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography fontSize={18} color="primary.dark">
                    {scopedT(value.point)}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
        <Divider sx={{ bgcolor: "#577c619c" }} />
      </Box>
      <Box
        component={Link}
        href="auth"
        onClick={() => dispatch(setActiveAuthForm(1))}
        sx={{ m: "auto" }}
      >
        <Button
          size="large"
          variant="outlined"
          sx={{
            bgcolor: "info.main",
            color: "secondary.main",
            borderColor: "info.light",
            borderRadius: 4,
            width: isMatch ? 300 : 440,
            "&:hover": {
              bgcolor: "info.light",
              borderColor: "info.main",
            },
          }}
        >
          <Typography color="text.main">{scopedT("button1")}</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default Description;
