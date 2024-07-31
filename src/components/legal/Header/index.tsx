import LanguageSelector from "@/components/landing/Header/components/LanguageSelector";
import { LegalContext } from "@/context/LegalContext";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { useContext } from "react";

const drawerWidth = 280;

const Header = () => {
  const legalData = useContext(LegalContext);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down(1200));
  return (
    <AppBar
      sx={{
        width: !isMatch ? `calc(100% - ${drawerWidth}px)` : "100%",
        ml: !isMatch ? `${drawerWidth}px` : 0,
        bgcolor: "primary.main",
        color: "secondary.main",
      }}
    >
      <Toolbar>
        <Box>
          <Typography variant="h6" noWrap component="div">
            Legal
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", ml: "auto" }}>
          <Box sx={{ display: "flex" }}>
            <LanguageSelector />
          </Box>
          {isMatch && (
            <IconButton
              sx={{ color: "secondary.main" }}
              onClick={() => legalData?.setOpenDrawer(!legalData?.openDrawer)}
            >
              <MenuIcon sx={{ color: "secondary.main" }} />
            </IconButton>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
