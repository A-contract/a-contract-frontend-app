import { Drawer, Toolbar, Box, Divider, Tabs, Tab } from "@mui/material";
import { useContext } from "react";
import { LegalContext } from "../Context";
import Link from "next/link";
import TermsAndConditionsContent from "../TermsAndConditions/TermsAndConditionsContent";
import PrivacyPolicyContent from "../PrivacyPolicy/PrivacyPolicyContent";

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
            overflow: "hidden",
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
        <Tabs
          orientation="vertical"
          textColor="primary"
          value={data?.tab}
          sx={{ minHeight: 100 }}
        >
          <Tab
            component={Link}
            sx={{ color: "primary.dark" }}
            label="Умови використання"
            href="/legal/terms-of-use"
          />
          <Tab
            component={Link}
            sx={{ color: "primary.dark" }}
            label="Політика конфіденційності"
            href="/legal/privacy-policy"
          />
        </Tabs>
        <Divider sx={{ mb: 2 }} />
        <Divider sx={{ mb: 2 }} />
        <Box>
          {data?.tab === 0 && <TermsAndConditionsContent />}
          {data?.tab === 1 && <PrivacyPolicyContent />}
        </Box>
      </Drawer>
    </>
  );
};

export default SideBar;
