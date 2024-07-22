"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setActiveLandpageTab } from "@/store/landing/header";

const ScrollHandler: React.FC = () => {
  const selectTabsData = (state: RootState) => state.landingHeader;
  const { tabsDesktop } = useSelector(selectTabsData);
  const dispatch = useDispatch();

  useEffect(() => {
    const sections = document.querySelectorAll(".sections");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          dispatch(
            setActiveLandpageTab(
              tabsDesktop.filter((element: any) => element.href === `#${id}`)[0]
                .id
            )
          );
          window.history.pushState(null, "", `#${id}`);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default ScrollHandler;
