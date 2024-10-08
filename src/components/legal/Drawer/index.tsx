import React, { useContext, useMemo } from "react";
import {
  Drawer as MuiDrawer,
  Toolbar,
  Box,
  Divider,
  Tabs,
  Tab,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import TermsAndConditionsContent from "../TermsAndConditions/TermsAndConditionsContent";
import PrivacyPolicyContent from "../PrivacyPolicy/PrivacyPolicyContent";
import { useScopedI18n } from "@/locales/client";
import { LegalContext } from "@/context/LegalContext";

const DRAWER_TABS = [
  {
    tab: "privacy-policy",
    component: <PrivacyPolicyContent />,
    href: "/legal/privacy-policy",
    locale: "PrivacyPolice.nameTab",
  },
  {
    tab: "terms-and-conditions",
    component: <TermsAndConditionsContent />,
    href: "/legal/terms-and-conditions",
    locale: "TermAndConditions.nameTab",
  },
];

const Drawer = React.memo(
  ({ drawerWidth, activeTab }: { drawerWidth: number; activeTab: string }) => {
    const legalData = useContext(LegalContext);
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down(1200));
    const scopedT = useScopedI18n("Legal");

    const activeIndex = useMemo(
      () => DRAWER_TABS.findIndex((item) => item.tab === activeTab),
      [activeTab]
    );

    const tabComponents = useMemo(
      () =>
        DRAWER_TABS.map(({ href, locale }, index) => (
          <Tab
            key={index}
            component={Link}
            href={href}
            label={scopedT(locale as any)}
          />
        )),
      [scopedT]
    );

    return (
      <MuiDrawer
        open={legalData?.openDrawer ? true : false}
        sx={{
          width: !isMatch ? drawerWidth : 0,
          minWidth: !isMatch ? drawerWidth : 0,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRight: "none",
            overflow: "hidden",
            boxShadow:
              "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
          },
        }}
        onClose={() => legalData?.setOpenDrawer(false)}
        variant={isMatch ? "temporary" : "permanent"}
        anchor="left"
      >
        <Toolbar sx={{ bgcolor: "primary.dark" }}>
          <Box component="a" href="/">
            <Box
              component="img"
              src="/static/images/logo.png"
              alt="logo"
              width={160}
            />
          </Box>
        </Toolbar>

        <Tabs
          orientation="vertical"
          value={activeIndex}
          sx={{
            color: "primary.main",
          }}
          TabIndicatorProps={{
            sx: { display: "block" },
          }}
        >
          {tabComponents}
        </Tabs>
        <Divider />
        <Box>{DRAWER_TABS[activeIndex].component}</Box>
      </MuiDrawer>
    );
  }
);

Drawer.displayName = "Drawer";

export default Drawer;
