import { Drawer, IconButton, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HeaderTabs from "../HeaderTabs";
import { useState } from "react";

const DrawerMenu = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();

  return (
    <>
      <Drawer
        anchor="top"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <HeaderTabs orientation={"verical"} />
      </Drawer>
      <IconButton
        sx={{ color: theme.palette.secondary.main }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon sx={{ color: theme.palette.secondary.main }} />
      </IconButton>
    </>
  );
};

export default DrawerMenu;
