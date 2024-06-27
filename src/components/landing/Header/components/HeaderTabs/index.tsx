import { useScopedI18n } from "@/locales/client";
import { setActiveLandpageTab } from "@/store/landing/header";
import { RootState } from "@/store/store";
import { Tabs, Tab, Divider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

const HeaderTabs = (props: any) => {
  const scopedT = useScopedI18n("Landing.Header.Tabs");
  const selectTabsData = (state: RootState) => state.landingHeader;
  const { tabsDesktop, activeTabId } = useSelector(selectTabsData);
  const dispatch = useDispatch();

  return (
    <Tabs
      orientation={props.orientation}
      textColor="secondary"
      value={activeTabId}
      onChange={(event: any, value: any) => {
        if (value < 3) dispatch(setActiveLandpageTab(value));
      }}
      color="primary.light"
      sx={{
        bgcolor: "primary.main",
      }}
      TabIndicatorProps={{
        sx: { backgroundColor: "primary.light" },
      }}
    >
      {tabsDesktop.map((tab: any, index: number) => (
        <Tab
          key={index}
          label={scopedT(tab.name)}
          href={tab.href}
          sx={{ color: tab.color }}
        />
      ))}
      <Divider sx={{ bgcolor: "primary.light", opacity: 0.2, my: 1 }} />
      {props.orientation === "vertical" && (
        <>
          <Tab
            label={"Sign In"}
            href={"/auth"}
            sx={{ color: "primary.light", opacity: 1 }}
          />
          <Tab
            label={"Sign Up"}
            href={"/auth"}
            sx={{ color: "primary.light", opacity: 1 }}
          />
        </>
      )}
    </Tabs>
  );
};

export default HeaderTabs;
