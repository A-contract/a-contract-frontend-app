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

import React, { useContext } from "react";
import TermsAndConditions from "./TermsAndConditions";
import SideBar from "./SideBar";
import { LegalContext } from "./Context";
import PrivacyPolicy from "./PrivacyPolicy";

const drawerWidth = 240;

const Legal = () => {
  const data = useContext(LegalContext);
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
        {data?.expanded === "panel1" ? (
          <TermsAndConditions />
        ) : (
          <PrivacyPolicy />
        )}
      </Box>
    </Box>
  );
};

export default Legal;
