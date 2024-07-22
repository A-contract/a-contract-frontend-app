"use client";
import { AppBar, Box, CssBaseline, Toolbar, Typography } from "@mui/material";
import React from "react";
import TermsAndConditions from "./TermsAndConditions";
import SideBar from "./SideBar";
import PrivacyPolicy from "./PrivacyPolicy";
import { usePathname } from "next/navigation";
import LanguageSelector from "../landing/Header/components/LanguageSelector";

const drawerWidth = 280;

const Legal = () => {
  const route = usePathname();
  const typeLegacy = route.split("/").pop();

  const currentTab = typeLegacy === "privacy-policy" ? 1 : 0;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
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
      <SideBar drawerWidth={drawerWidth} tab={currentTab} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 3,
          px: 7,
          borderLeft: "1px solid #0000001f",
          width: "100%",
          height: "100%",
        }}
      >
        {currentTab === 0 ? <TermsAndConditions /> : <PrivacyPolicy />}
      </Box>
    </Box>
  );
};

export default Legal;
