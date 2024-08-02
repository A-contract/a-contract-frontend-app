import { HomeContext, tabsDesktop } from "@/context/HomeContext";
import { useScopedI18n } from "@/locales/client";
import { Tabs, Tab, Box, useMediaQuery, useTheme } from "@mui/material";
import { useContext, useEffect } from "react";

interface HeaderTabsProps {
  orientation: "horizontal" | "vertical";
}

const HeaderTabs: React.FC<HeaderTabsProps> = ({ orientation }) => {
  const homeData = useContext(HomeContext);
  const scopedT = useScopedI18n("Landing.Header.Tabs");
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const renderTab = (tab: any, index: number) => (
    <Tab
      key={index}
      label={scopedT(tab.name)}
      href={tab.href}
      target={tab.target}
      onClick={() => homeData?.setActiveTab(index)}
      sx={{
        color: tab.color,
        ml: isMatch ? 1 : 0,
        "&.Mui-selected": {
          color: "secondary.main",
        },
      }}
    />
  );

  const mainTabs = tabsDesktop.map(renderTab);

  const additionalTabs =
    orientation === "vertical"
      ? [
          <Tab
            key="signIn"
            label="Sign In"
            href="/auth"
            sx={{
              color: "secondary.main",
              borderTop: "1px solid",
              borderColor: "#ffffff4a",
              ml: isMatch ? 1 : 0,
              "&.Mui-selected": {
                color: "secondary.main",
              },
            }}
          />,
          <Tab
            key="signUp"
            label="Sign Up"
            href="/auth"
            sx={{
              color: "secondary.main",
              ml: isMatch ? 1 : 0,
              "&.Mui-selected": {
                color: "secondary.main",
              },
            }}
          />,
        ]
      : [];

  useEffect(() => {
    const activeTab =
      tabsDesktop.filter((element) => element.href === location.hash)[0]?.id ||
      0;

    homeData?.setActiveTab(activeTab);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box sx={{ bgcolor: "primary.main" }}>
      <Tabs
        orientation={orientation}
        value={homeData?.activeTab}
        sx={{
          bgcolor: "primary.main",
        }}
        TabIndicatorProps={{
          sx: { backgroundColor: "secondary.main" },
        }}
      >
        {mainTabs.concat(additionalTabs)}
      </Tabs>
    </Box>
  );
};

export default HeaderTabs;
