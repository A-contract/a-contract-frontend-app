import { useScopedI18n } from "@/locales/client";
import { setActiveLandpageTab } from "@/store/landing/header";
import { RootState } from "@/store/store";
import {
  Tabs,
  Tab,
  Box,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

interface HeaderTabsProps {
  orientation: "horizontal" | "vertical";
}

const HeaderTabs: React.FC<HeaderTabsProps> = (props) => {
  const scopedT = useScopedI18n("Landing.Header.Tabs");
  const selectTabsData = (state: RootState) => state.landingHeader;
  const { tabsDesktop, activeTabId } = useSelector(selectTabsData);
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const mainTabs = tabsDesktop.map((tab: any, index: number) => (
    <Tab
      key={index}
      label={scopedT(tab.name)}
      href={tab.href}
      onClick={() => {
        dispatch(setActiveLandpageTab(index));
      }}
      sx={{
        color: tab.color,
        ml: isMatch ? 1 : 0,
        "&.Mui-selected": {
          color: "primary.light",
        },
      }}
    />
  ));

  const additionalTabs =
    props.orientation === "vertical"
      ? [
          <Tab
            key="signIn"
            label={"Sign In"}
            href={"/auth"}
            sx={{
              color: "primary.light",
              borderTop: "1px solid",
              borderColor: "#ffffff4a",

              ml: isMatch ? 1 : 0,
              "&.Mui-selected": {
                color: "primary.light",
              },
            }}
          />,
          <Tab
            key="signUp"
            label={"Sign Up"}
            href={"/auth"}
            sx={{
              color: "primary.light",
              ml: isMatch ? 1 : 0,
              "&.Mui-selected": {
                color: "primary.light",
              },
            }}
          />,
        ]
      : [];

  return (
    <Box>
      <Tabs
        orientation={props.orientation}
        value={activeTabId}
        onChange={(event: React.SyntheticEvent, value: number) => {
          if (value < 3) dispatch(setActiveLandpageTab(value));
        }}
        sx={{
          bgcolor: "primary.dark",
        }}
        TabIndicatorProps={{
          sx: { backgroundColor: "primary.light" },
        }}
      >
        {[...mainTabs, ...additionalTabs]}
      </Tabs>
    </Box>
  );
};

export default HeaderTabs;
