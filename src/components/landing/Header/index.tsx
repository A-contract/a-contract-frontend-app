"use client";
import { AppBar, Box, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import LanguageSelector from "./components/LanguageSelector";
import ButtonsPanel from "./components/ButtonsPanel";
import HeaderTabs from "./components/HeaderTabs";
import DrawerMenu from "./components/DrawerMenu";

const Header = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar
      component="header"
      color="primary"
      sx={{ bgcolor: "primary.dark", alignItems: "center" }}
    >
      <Box maxWidth={1300} width="100%">
        <Toolbar>
          <Box>
            <Box component="a" href="/">
              <Box
                component="img"
                src="/static/images/logo.png"
                alt="logo"
                width={160}
              />
            </Box>
          </Box>
          {isMatch ? (
            <Box ml="auto">
              <DrawerMenu />
            </Box>
          ) : (
            <>
              <Box mr="auto" ml={8}>
                <HeaderTabs orientation="horizontal" />
              </Box>
              <Box display="flex" alignItems="center">
                <LanguageSelector />
                <ButtonsPanel />
              </Box>
            </>
          )}
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default Header;
