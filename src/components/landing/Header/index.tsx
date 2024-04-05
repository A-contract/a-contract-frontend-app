"use client";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import LanguageSelector from "./components/LanguageSelector";
import ButtonsPanel from "./components/ButtonsPanel";
import HeaderTabs from "./components/HeaderTabs";
import DrawerMenu from "./components/DrawerMenu";

const Header = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar component={Box} color="primary" alignItems="center">
      <Box maxWidth={1300} width="inherit">
        <Toolbar>
          {isMatch ? (
            <>
              <Box>
                <Box component="a" href="/">
                  <Box
                    component="img"
                    src={"/static/images/logo.png"}
                    alt="logo"
                    width={160}
                  />
                </Box>
              </Box>
              <Box ml={"auto"}>
                <DrawerMenu />
              </Box>
            </>
          ) : (
            <>
              <Box>
                <Box component="a" href="/">
                  <Box
                    component="img"
                    src={"/static/images/logo.png"}
                    alt="logo"
                    width={160}
                  />
                </Box>
              </Box>
              <Box mr="auto" ml={8}>
                <HeaderTabs orientation={"horizontal"} />
              </Box>

              <Box display="contents">
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
