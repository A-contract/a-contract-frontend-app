import LanguageSelector from "@/components/landing/Header/components/LanguageSelector";
import { AppBar, Toolbar, Box, Typography } from "@mui/material";

const Header = (props: { drawerWidth: number }) => {
  return (
    <AppBar
      sx={{
        width: `calc(100% - ${props.drawerWidth}px)`,
        ml: `${props.drawerWidth}px`,
        bgcolor: "primary.dark",
        display: "flex",
      }}
    >
      <Toolbar>
        <Box>
          <Typography variant="h6" noWrap component="div">
            Legal
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
