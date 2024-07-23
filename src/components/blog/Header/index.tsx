import LanguageSelector from "@/components/landing/Header/components/LanguageSelector";
import { AppBar, Toolbar, Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar
      sx={{
        bgcolor: "primary.dark",
        display: "flex",
      }}
    >
      <Toolbar sx={{ bgcolor: "primary.dark" }}>
        <Box component="a" href="/">
          <Box
            component="img"
            src="/static/images/logo.png"
            alt="logo"
            width={160}
          />
        </Box>
        <Box sx={{ ml: 15 }}>
          <Typography variant="h6" noWrap component="div">
            Blog
          </Typography>
        </Box>
        <Box sx={{ ml: "auto", mr: 10 }}>
          <LanguageSelector />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
