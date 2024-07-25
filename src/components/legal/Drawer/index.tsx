import { Drawer, Toolbar, Box, Divider, Tabs, Tab } from "@mui/material";
import Link from "next/link";
import TermsAndConditionsContent from "../TermsAndConditions/TermsAndConditionsContent";
import PrivacyPolicyContent from "../PrivacyPolicy/PrivacyPolicyContent";
import { useScopedI18n } from "@/locales/client";

const SideBar = (props: { drawerWidth: number; tab: number }) => {
  const scopedT = useScopedI18n("Legal");
  return (
    <Drawer
      sx={{
        width: props.drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: props.drawerWidth,
          boxSizing: "border-box",
          borderRight: "none",
          overflow: "hidden",
          boxShadow:
            "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
        },
      }}
      variant="permanent"
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
        value={props.tab}
        textColor="inherit"
        sx={{ minHeight: 100 }}
      >
        <Tab
          component={Link}
          sx={{ fontWeight: props.tab === 0 ? "bold" : "inherit" }}
          label={scopedT("TermAndConditions.nameTab")}
          href="/legal/terms-of-use"
        />
        <Tab
          component={Link}
          sx={{ fontWeight: props.tab === 1 ? "bold" : "inherit" }}
          label={scopedT("PrivacyPolice.nameTab")}
          href="/legal/privacy-policy"
        />
      </Tabs>
      <Divider />
      <Box>
        {props.tab === 0 ? (
          <TermsAndConditionsContent />
        ) : (
          <PrivacyPolicyContent />
        )}
      </Box>
    </Drawer>
  );
};

export default SideBar;
