"use client";
import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setActiveLandpageTab } from "@/store/landing/header";

const ScrollHandler: React.FC = () => {
  const selectTabsData = (state: RootState) => state.landingHeader;
  const { tabsDesktop } = useSelector(selectTabsData);
  const dispatch = useDispatch();

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const matchedTab = tabsDesktop.find(
            (element: any) => element.href === `#${id}`
          );
          if (matchedTab) {
            dispatch(setActiveLandpageTab(matchedTab.id));
            window.history.pushState(null, "", `#${id}`);
          }
        }
      });
    },

    [dispatch, tabsDesktop]
  );

  useEffect(() => {
    const sections = document.querySelectorAll(".sections");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [handleIntersection]);

  return null;
};

export default ScrollHandler;
