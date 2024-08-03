"use client";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LanguageSelector from "@/components/landing/Header/components/LanguageSelector";
import { UserContext } from "@/context/UserContext";
import { BaseSyntheticEvent, useContext, useState } from "react";
import { CabinetContext } from "@/context/CabinetContext";
import { useScopedI18n } from "@/locales/client";

const drawerWidth = 200;

const Header = () => {
  const userData = useContext(UserContext);
  const cabinetData = useContext(CabinetContext);
  const scopedT = useScopedI18n("Cabinet");
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down(1200));
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event: BaseSyntheticEvent) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: !isMatch ? `calc(100% - ${drawerWidth}px)` : "100%",
        ml: !isMatch ? `${drawerWidth}px` : 0,
        bgcolor: "primary.main",
        color: "secondary.main",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: { xs: 2, md: 3 },
        }}
      >
        {!isMatch && (
          <>
            <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
              <Typography variant="h6" sx={{ color: "secondary.main" }}>
                {scopedT("Title")}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", ml: "auto" }}>
              <Box sx={{ display: "flex", mr: 2 }}>
                <LanguageSelector />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
                <Typography sx={{ color: "secondary.main" }}>
                  {userData.user.name}
                </Typography>
              </Box>
            </Box>
          </>
        )}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <AccountCircleIcon
            sx={{
              fontSize: !isMatch ? 40 : 30,
              color: "info.dark",
            }}
            onClick={handleMenuOpen}
          />
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>{userData.user.name}</MenuItem>
          </Menu>
        </Box>
        {isMatch && (
          <Box sx={{ display: "flex", alignItems: "center", ml: "auto" }}>
            <Box sx={{ display: "flex" }}>
              <LanguageSelector />
            </Box>
            <IconButton
              sx={{ color: "secondary.main" }}
              onClick={() =>
                cabinetData?.setOpenDrawer(!cabinetData?.openDrawer)
              }
            >
              <MenuIcon sx={{ color: "secondary.main" }} />
            </IconButton>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
