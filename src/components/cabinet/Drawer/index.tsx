import React, { useContext, useMemo, useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Toolbar,
  Box,
  Tabs,
  Tab,
  Typography,
  Drawer as MuiDrawer,
  useMediaQuery,
  useTheme,
  IconButton,
} from "@mui/material";
import Link from "next/link";
import { UserContext } from "@/context/UserContext";
import { CabinetContext } from "@/context/CabinetContext";

const DRAWER_TABS = [
  {
    name: "Contracts",
    tab: "contracts",
    href: "/cabinet/contracts",
    icon: "/static/images/icons/contracts_icon.png",
    mlIcon: 2,
    mlText: 2,
  },
  {
    name: "Workspace",
    tab: "workspace",
    href: "/cabinet/workspace",
    icon: "/static/images/icons/workspace_icon.png",
    mlIcon: 1.6,
    mlText: 1.6,
    access: ["Lawyer"],
  },
  {
    name: "Support",
    tab: "support",
    href: "/cabinet/support",
    icon: "/static/images/icons/support_icon.png",
    mlIcon: 2,
    mlText: 2,
  },
  {
    name: "Settings",
    tab: "settings",
    href: "/cabinet/settings",
    icon: "/static/images/icons/settings_icon.png",
    mlIcon: 2,
    mlText: 1.6,
  },
  {
    name: "Logout",
    tab: "logout",
    href: "/auth",
    icon: "/static/images/icons/logout_icon.png",
    mlIcon: 2.5,
    mlText: 1.6,
    mt: 3,
  },
];

const drawerWidth = 200;

const Drawer = React.memo(({ activeTab }: { activeTab: string }) => {
  const cabinetData = useContext(CabinetContext);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down(1200));
  const userData = useContext(UserContext);
  const activeIndex = useMemo(
    () => DRAWER_TABS.findIndex((item) => item.tab === activeTab),
    [activeTab]
  );

  const tabComponents = useMemo(
    () =>
      DRAWER_TABS.map(
        ({
          name,
          tab,
          href,
          icon,
          mlIcon,
          mlText,
          mt = 0.5,
          access = ["Customer", "Lawyer"],
        }) =>
          access.includes(userData.user.role) && (
            <Tab
              key={name}
              component={Link}
              href={href}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography sx={{ ml: mlText }}>{name}</Typography>
                </Box>
              }
              sx={{
                width: "100%",
                color: "secondary.main",
                textTransform: "inherit",
                minHeight: 48,
                mt: mt,
                justifyContent: "initial",
                opacity: 1,
                bgcolor: tab === activeTab ? "primary.light" : "inherit",
              }}
              onClick={() => {
                cabinetData?.setOpenDrawer(false);
              }}
              icon={
                <Box
                  component="img"
                  src={icon}
                  sx={{
                    ml: mlIcon,
                    color: "secondary.main",
                  }}
                />
              }
              iconPosition="start"
            />
          )
      ),
    [activeTab, cabinetData, userData.user.role]
  );
  console.log(cabinetData?.openDrawer);

  return (
    <>
      <MuiDrawer
        open={cabinetData?.openDrawer ? true : false}
        sx={{
          width: !isMatch ? drawerWidth : 0,
          minWidth: !isMatch ? drawerWidth : 0,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "primary.main",
            color: "secondary.main",
            boxShadow:
              "0px 5px 6px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
          },
        }}
        onClose={() => cabinetData?.setOpenDrawer(false)}
        variant={isMatch ? "temporary" : "permanent"}
        anchor="left"
      >
        <Toolbar sx={{ pl: { xs: "18px !important" } }}>
          <Box component="a" href="/" sx={{ pl: 0, pr: "5px !important" }}>
            <Box
              component="img"
              src={"/static/images/logo.png"}
              alt="logo"
              sx={{ width: 140, mr: 2 }}
            />
          </Box>
        </Toolbar>
        <Tabs
          orientation="vertical"
          textColor="secondary"
          value={activeIndex}
          sx={{
            backgroundColor: "primary.main",
            mt: 5,
          }}
          TabIndicatorProps={{
            sx: { display: "none" },
          }}
        >
          {tabComponents}
        </Tabs>
      </MuiDrawer>
    </>
  );
});

Drawer.displayName = "Drawer";

export default Drawer;
