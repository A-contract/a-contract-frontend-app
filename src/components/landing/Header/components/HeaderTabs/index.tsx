import { useScopedI18n } from "@/locales/client";
import { setActiveLandpageTab } from "@/store/landing/header";
import { RootState } from "@/store/store";
import { Tabs, Tab, Box, useMediaQuery, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

interface HeaderTabsProps {
  orientation: "horizontal" | "vertical";
}

const HeaderTabs: React.FC<HeaderTabsProps> = ({ orientation }) => {
  const scopedT = useScopedI18n("Landing.Header.Tabs");
  const { tabsDesktop, activeTabId } = useSelector(
    (state: RootState) => state.landingHeader
  );
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const handleTabClick = (index: number) => {
    dispatch(setActiveLandpageTab(index < 3 ? index : activeTabId));
  };

  const renderTab = (tab: any, index: number) => (
    <Tab
      key={index}
      label={scopedT(tab.name)}
      href={tab.href}
      target={tab.target}
      onClick={() => handleTabClick(index)}
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

  return (
    <Box sx={{ bgcolor: "primary.main" }}>
      <Tabs
        orientation={orientation}
        value={activeTabId}
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
