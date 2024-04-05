import { useScopedI18n } from "@/locales/client";
import { setActiveLandpageTab } from "@/store/landing/header";
import { RootState } from "@/store/store";
import { Tabs, Tab } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

const HeaderTabs = (props: any) => {
  const scopedT = useScopedI18n("Landing.Header.Tabs");
  const selectTabsData = (state: RootState) => state.landingHeader;
  const { tabsDesktop, activeTabId } = useSelector(selectTabsData);
  const dispatch = useDispatch();

  return (
    <Tabs
      orientation={props.orient}
      textColor="secondary"
      value={activeTabId}
      onChange={(event: any, value: any) => {
        if (value < 3) dispatch(setActiveLandpageTab(value));
      }}
      color="secondary.main"
      TabIndicatorProps={{
        sx: { backgroundColor: "secondary.main" },
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
    </Tabs>
  );
};

export default HeaderTabs;
