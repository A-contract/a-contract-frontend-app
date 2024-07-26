import { AppBar, Box, Toolbar, Typography, useTheme } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LanguageSelector from "@/components/landing/Header/components/LanguageSelector";

const drawerWidth = 200;

const Header = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${drawerWidth})`,
        ml: `${drawerWidth}px`,
        bgcolor: "primary.main",
        color: "secondary.main",
        //zIndex: 10000,
      }}
    >
      <Toolbar>
        <Box sx={{ pl: 4 }}>
          <Typography variant="h6">Cabinet</Typography>
        </Box>
        <Box sx={{ ml: "auto", display: "flex" }}>
          <Box sx={{}}>
            <LanguageSelector />
          </Box>
          <Box sx={{ my: "auto" }}>
            <AccountCircleIcon
              sx={{
                fontSize: "40px",
                color: "#cbcbcb",
              }}
            />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
