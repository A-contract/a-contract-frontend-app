"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  Toolbar,
  Typography,
} from "@mui/material";

import React, { useContext, useEffect } from "react";
import TermsAndConditions from "./TermsAndConditions";
import SideBar from "./SideBar";
import { LegalContext, LegalContextValue } from "./Context";
import PrivacyPolicy from "./PrivacyPolicy";
import { usePathname } from "next/navigation";

const drawerWidth = 240;

const Legal = () => {
  const data = useContext(LegalContext);
  const route = usePathname();
  const splitRoute = route.split("/");
  const typeLegacy = splitRoute[splitRoute.length - 1];

  useEffect(() => {
    if (data) {
      switch (typeLegacy) {
        case "terms-of-use":
          data?.setTab(0);
          break;
        case "privacy-policy":
          data?.setTab(1);
          break;
        default:
          break;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          bgcolor: "primary.dark",
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Legal
          </Typography>
        </Toolbar>
      </AppBar>
      <SideBar drawerWidth={drawerWidth} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 3,
          borderLeft: "1px solid #0000001f",
          width: "100%",
          height: "100%",
        }}
      >
        <Toolbar />
        {data?.tab === 0 && <TermsAndConditions />}
        {data?.tab === 1 && <PrivacyPolicy />}
      </Box>
    </Box>
  );
};

export default Legal;
