import { Drawer, Toolbar, Box, Divider, Tabs, Tab } from "@mui/material";
import { useContext } from "react";
import { LegalContext } from "../Context";
import Link from "next/link";

const SideBar = (props: { drawerWidth: number }) => {
  const data = useContext(LegalContext);

  return (
    <>
      <Drawer
        sx={{
          width: props.drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: props.drawerWidth,
            boxSizing: "border-box",
            borderRight: "none",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar sx={{ bgcolor: "primary.dark" }}>
          <Box
            component="img"
            src="/static/images/logo.png"
            alt="logo"
            width={160}
          />
        </Toolbar>
        <Divider sx={{ mt: 2 }} />
        <Tabs orientation="vertical" value={data?.tab}>
          <Tab
            component={Link}
            label="Умови використання"
            href="/legal/terms-of-use"
          />
          <Tab
            component={Link}
            label="Політика конфіденційності"
            href="/legal/privacy-policy"
          />
        </Tabs>
      </Drawer>
    </>
  );
};

export default SideBar;
