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
import { useCurrentLocale, useScopedI18n } from "@/locales/client";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Footer = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const scopedT = useScopedI18n("Landing.Footer");
  const footerState = useSelector((state: RootState) => state.landingFooter);

  console.log(footerState);

  const navigation = [
    {
      title: scopedT("Navigation.title"),
      color: scopedT("Navigation.color"),
      items: [
        {
          name: scopedT("Navigation.section1.name"),
          href: scopedT("Navigation.section1.href"),
          target: scopedT("Navigation.section1.target"),
          color: scopedT("Navigation.section1.color"),
          pt: scopedT("Navigation.section1.pt"),
          pb: scopedT("Navigation.section1.pb"),
        },
        {
          name: scopedT("Navigation.section2.name"),
          href: scopedT("Navigation.section2.href"),
          target: scopedT("Navigation.section2.target"),
          color: scopedT("Navigation.section2.color"),
          pt: scopedT("Navigation.section2.pt"),
          pb: scopedT("Navigation.section2.pb"),
        },
        {
          name: scopedT("Navigation.section3.name"),
          href: scopedT("Navigation.section3.href"),
          target: scopedT("Navigation.section3.target"),
          color: scopedT("Navigation.section3.color"),
          pt: scopedT("Navigation.section3.pt"),
          pb: scopedT("Navigation.section3.pb"),
        },
      ],
    },
    {
      title: "Legal",
      color: scopedT("Legal.color"),
      items: [
        {
          name: scopedT("Legal.section1.name"),
          href: scopedT("Legal.section1.href"),
          target: scopedT("Legal.section1.target"),
          color: scopedT("Legal.section1.color"),
          pt: scopedT("Legal.section1.pt"),
          pb: scopedT("Legal.section1.pb"),
        },
        {
          name: scopedT("Legal.section2.name"),
          href: scopedT("Legal.section2.href"),
          target: scopedT("Legal.section2.target"),
          color: scopedT("Legal.section2.color"),
          pt: scopedT("Legal.section2.pt"),
          pb: scopedT("Legal.section2.pb"),
        },
      ],
    },
    {
      title: "Social",
      color: scopedT("Social.color"),
      items: [
        {
          name: <TelegramIcon />,
          href: scopedT("Social.section1.href"),
          target: scopedT("Social.section1.target"),
          color: scopedT("Social.section1.color"),
          pt: scopedT("Social.section1.pt"),
          pb: scopedT("Social.section1.pb"),
        },
        {
          name: <InstagramIcon />,
          href: scopedT("Social.section2.href"),
          target: scopedT("Social.section2.target"),
          color: scopedT("Social.section2.color"),
          pt: scopedT("Social.section2.pt"),
          pb: scopedT("Social.section2.pb"),
        },
        {
          name: <LinkedInIcon />,
          href: scopedT("Social.section3.href"),
          target: scopedT("Social.section3.target"),
          color: scopedT("Social.section3.color"),
          pt: scopedT("Social.section3.pt"),
          pb: scopedT("Social.section3.pb"),
        },
      ],
    },
  ];

  return (
    <>
      <Box
        component="footer"
        display="flex"
        flexDirection="column"
        bgcolor={theme.palette.primary.main}
        alignItems="center"
        width="100%"
        py="20px"
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
                            color={value.color}
                            letterSpacing="0.7px"
                            fontSize="18px"
                          >
                            {value.title}
                          </Typography>
                        }
                      ></ListItemText>
                    </ListItem>
                    {value.items.map((valueItem, indexItem) => (
                      <ListItem
                        component={Link}
                        href={valueItem.href}
                        target={valueItem.target}
                        key={indexItem}
                      >
                        <ListItemText
                          primary={
                            <Typography sx={{ color: valueItem.color }}>
                              {valueItem.name}
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
    </>
  );
};

export default Footer;
