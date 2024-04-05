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

  const nameNav = (name: any) => {
    switch (name) {
      case "TelegramIcon":
        return <TelegramIcon />;
      case "InstagramIcon":
        return <InstagramIcon />;
      case "LinkedInIcon":
        return <LinkedInIcon />;
      default:
        return scopedT(name);
    }
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
      <Box maxWidth="1300px" width="inherit">
        <Toolbar
          component={Box}
          display={isMatch ? "grid" : "flex"}
          alignItems="center"
        >
          <Box mr="auto">
            <Box
              component="img"
              src={"static/images/logo.png"}
              alt="logo"
              width="160px"
            />
            <Typography color={theme.palette.secondary.main}>
              © 2023-{new Date().getFullYear()}, A-contract.{" "}
              {scopedT("paragraph1")}
            </Typography>
          </Box>
          <Box display={isMatch ? "grid" : "flex"}>
            {navigation.map((value, index) => (
              <Box key={index} pl={isMatch ? "" : "30px"}>
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
                    ></ListItemText>
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
                      ></ListItemText>
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
