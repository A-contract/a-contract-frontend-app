import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LanguageSelector from "@/components/landing/Header/components/LanguageSelector";
import { UserContext } from "@/context/UserContext";
import { useContext } from "react";

const drawerWidth = 200;

const Header = () => {
  const userData = useContext(UserContext);
  return (
    <AppBar
      position="fixed"
      sx={{
        width: {
          xs: "100%",
          md: `calc(100% - ${drawerWidth}px)`,
        },
        ml: {
          xs: 0,
          md: `${drawerWidth}px`,
        },
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
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h6" sx={{ color: "secondary.main" }}>
            Cabinet
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 2 }}>
            <LanguageSelector />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
            <Typography sx={{ color: "secondary.main" }}>
              {userData.user.name}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
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
