"use client";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import { useScopedI18n } from "@/locales/client";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Footer = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const scopedT = useScopedI18n("Landing.Footer");
  const { navigation } = useSelector((state: RootState) => state.landingFooter);

  const getIcon = (name: string) => {
    switch (name) {
      case "TelegramIcon":
        return <TelegramIcon />;
      case "InstagramIcon":
        return <InstagramIcon />;
      case "LinkedInIcon":
        return <LinkedInIcon />;
      default:
        return null;
    }
  };

  const nameNav = (name: any) => {
    const icon = getIcon(name);
    if (icon) {
      return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {icon}
          <Box sx={{ px: 2 }}>{name.replace("Icon", "")}</Box>
        </Box>
      );
    }
    return scopedT(name);
  };

  return (
    <Box
      component="footer"
      display="flex"
      flexDirection="column"
      bgcolor={"primary.main"}
      alignItems="center"
      width="100%"
      py="50px"
    >
      <Box
        maxWidth="1300px"
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Toolbar
          component={Box}
          display="flex"
          flexDirection={isMatch ? "column" : "row"}
          alignItems="center"
          justifyContent="center"
          width="100%"
          px={isMatch ? 0 : 5}
          gap={isMatch ? 2 : 60}
        >
          <Box
            sx={{ m: 1, textAlign: "center" }}
            display="flex"
            flexDirection="column"
            alignItems="center"
            minWidth={200}
          >
            <Box
              component="img"
              src={"static/images/logo.png"}
              alt="logo"
              width="160px"
              mb={2}
            />
            <Typography color={theme.palette.secondary.main}>
              © 2023-{new Date().getFullYear()}, A-contract.{" "}
              {scopedT("paragraph1")}
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection={isMatch ? "column" : "row"}
            alignItems={isMatch ? "center" : "flex-start"}
            mt={isMatch ? 3 : 0}
            ml={isMatch ? 0 : 5}
            width="100%"
          >
            {navigation.map((value, index) => (
              <Box
                key={index}
                py={1}
                width={isMatch ? "100%" : "auto"}
                mb={isMatch ? 2 : 0}
              >
                <List>
                  <ListItem>
                    <ListItemText
                      primary={
                        <Typography
                          color={"secondary.main"}
                          letterSpacing="0.7px"
                          fontSize="18px"
                        >
                          {scopedT(value.title)}
                        </Typography>
                      }
                    />
                  </ListItem>
                  {value.items.map((valueItem: any, indexItem: number) => (
                    <ListItem
                      component={Link}
                      href={valueItem.href}
                      target={valueItem.target}
                      key={indexItem}
                    >
                      <ListItemText
                        primary={
                          <Typography color={"secondary.main"}>
                            {nameNav(valueItem.name)}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </Box>
        </Toolbar>
      </Box>
    </Box>
  );
};

export default Footer;
