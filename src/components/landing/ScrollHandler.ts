"use client";
import { useEffect, useCallback, useContext } from "react";
import { HomeContext, tabsDesktop } from "@/context/HomeContext";

const ScrollHandler: React.FC = () => {
  const homeData = useContext(HomeContext);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const matchedTab = tabsDesktop.find(
            (element: any) => element.href === `#${id}`
          );
          if (matchedTab) {
            homeData?.setActiveTab(matchedTab.id);
            window.history.pushState(null, "", `#${id}`);
          }
        }
      });
    },

    [homeData]
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
