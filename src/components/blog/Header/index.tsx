import LanguageSelector from "@/components/landing/Header/components/LanguageSelector";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const Header = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

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
        {!isMatch && (
          <Box sx={{ ml: 15 }}>
            <Typography variant="h6" noWrap component="div">
              Blog
            </Typography>
          </Box>
        )}

        <Box sx={{ ml: "auto" }}>
          <LanguageSelector />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
