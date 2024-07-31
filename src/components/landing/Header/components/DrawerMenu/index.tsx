import { Box, Drawer, IconButton, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HeaderTabs from "../HeaderTabs";
import { useState } from "react";
import ButtonsPanel from "../ButtonsPanel";
import LanguageSelector from "../LanguageSelector";

const DrawerMenu = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <Box sx={{ bgcolor: "primary.main" }}>
      <Drawer
        open={openDrawer}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "primary.main",
          },
        }}
        onClose={() => setOpenDrawer(false)}
      >
        <HeaderTabs orientation={"vertical"} />
      </Drawer>
      <IconButton
        sx={{ color: "secondary.main" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon sx={{ color: "secondary.main" }} />
      </IconButton>
    </Box>
  );
};

export default DrawerMenu;
