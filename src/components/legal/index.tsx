"use client";
import { Box, CssBaseline } from "@mui/material";
import React from "react";
import TermsAndConditions from "./TermsAndConditions";
import Drawer from "./Drawer";
import PrivacyPolicy from "./PrivacyPolicy";
import { notFound, usePathname } from "next/navigation";
import Header from "./Header";

const drawerWidth = 280;

const TABS: { [key: string]: JSX.Element } = {
  "privacy-policy": <PrivacyPolicy />,
  "terms-and-conditions": <TermsAndConditions />,
};

const Legal = () => {
  const route = usePathname();
  const activeTab = route.split("/").pop();

  if (!TABS[activeTab as string]) return notFound();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header />

      <Drawer drawerWidth={drawerWidth} activeTab={activeTab as string} />
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
        {TABS[activeTab as string]}
      </Box>
    </Box>
  );
};

export default Legal;
