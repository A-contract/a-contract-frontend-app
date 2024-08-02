import LanguageSelector from "@/components/landing/Header/components/LanguageSelector";
import { useScopedI18n } from "@/locales/client";
import { AppBar, Toolbar, Box, Typography } from "@mui/material";

const Header = () => {
  const scopedT = useScopedI18n("Auth");
  return (
    <AppBar
      sx={{
        width: "100%",
        bgcolor: "primary.main",
        color: "secondary.main",
      }}
    >
      <Toolbar>
        <Box>
          <Typography variant="h6" noWrap component="div">
            {scopedT("Title")}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", ml: "auto" }}>
          <Box sx={{ display: "flex" }}>
            <LanguageSelector />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
