"use client";
import { Box, CssBaseline } from "@mui/material";
import React from "react";
import TermsAndConditions from "./TermsAndConditions";
import SideBar from "./Drawer";
import PrivacyPolicy from "./PrivacyPolicy";
import { usePathname } from "next/navigation";
import Header from "./Header";

const drawerWidth = 280;

const Legal = () => {
  const route = usePathname();
  const typeLegacy = route.split("/").pop();

  const currentTab = typeLegacy === "privacy-policy" ? 1 : 0;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header drawerWidth={drawerWidth} />

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
