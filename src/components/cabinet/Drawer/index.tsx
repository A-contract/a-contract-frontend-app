import {
  Toolbar,
  Box,
  Tabs,
  Tab,
  Typography,
  Drawer as MuiDrawer,
} from "@mui/material";
import theme from "@/theme/theme";

const DRAWER_TABS = [
  {
    name: "Contracts",
    icon: "/static/images/icons/contracts_icon.png",
    mlIcon: 2,
    mlText: 2,
  },
  {
    name: "Workspace",
    icon: "/static/images/icons/workspace_icon.png",
    mlIcon: 1.6,
    mlText: 1.6,
  },
  {
    name: "Support",
    icon: "/static/images/icons/support_icon.png",
    mlIcon: 2,
    mlText: 2,
  },
  {
    name: "Settings",
    icon: "/static/images/icons/settings_icon.png",
    mlIcon: 2,
    mlText: 1.6,
  },
  {
    name: "Logout",
    icon: "/static/images/icons/logout_icon.png",
    mlIcon: 2.5,
    mlText: 1.6,
    mt: 3,
  },
];

const drawerWidth = 200;

const Drawer = () => {
  return (
    <MuiDrawer
      sx={{
        width: drawerWidth,
        minWidth: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.secondary.main,
          boxShadow:
            "0px 5px 6px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar>
        <Box component="a" href="/">
          <Box
            component="img"
            src={"/static/images/logo.png"}
            alt="logo"
            sx={{ width: 140 }}
          />
        </Box>
      </Toolbar>
      <Tabs
        orientation="vertical"
        textColor="secondary"
        value={0}
        sx={{
          backgroundColor: theme.palette.primary.main,
          mt: 5,
        }}
        TabIndicatorProps={{
          sx: { display: "none" },
        }}
      >
        {DRAWER_TABS.map(({ name, icon, mlIcon, mlText, mt = 0.5 }) => (
          <Tab
            key={name}
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
            }}
            icon={<Box component="img" src={icon} sx={{ ml: mlIcon }} />}
            iconPosition="start"
          />
        ))}
      </Tabs>
    </MuiDrawer>
  );
};

export default Drawer;
