import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface HeaderState {
  tabsDesktop: any[];
  tabsMobile: any[];
  activeTabId: number;
}

const initialState: HeaderState = {
  tabsDesktop: [
    {
      id: 0,
      name: "Analyse contract",
      href: "/#analyse-contract",
      target: "",
      color: "secondary.light",
    },
    {
      id: 1,
      name: "Tariffs",
      href: "/#tariffs",
      target: "",
      color: "secondary.light",
    },
    {
      id: 2,
      name: "Support",
      href: "/#support",
      target: "",
      color: "secondary.light",
    },
    {
      id: 3,
      name: "Blog",
      href: "/blog",
      target: "/blog",
      color: "secondary.light",
    },
  ],
  tabsMobile: [
    {
      id: 0,
      name: "Analyse contract",
      href: "/#analyse-contract",
      target: "",
      color: "secondary.main",
      marginTop: "",
      borderTop: "",
      divider: false,
    },
    {
      id: 1,
      name: "Tariffs",
      href: "/#tariffs",
      target: "",
      color: "secondary.main",
      marginTop: "",
      borderTop: "",
      divider: false,
    },
    {
      id: 2,
      name: "Support",
      href: "/#support",
      target: "",
      color: "secondary.main",
      marginTop: "",
      borderTop: "",
      divider: true,
    },
    {
      id: 3,
      name: "Blog",
      href: "/blog",
      target: "",
      color: "secondary.main",
      marginTop: "",
      borderTop: "",
      divider: true,
    },
  ],
  activeTabId: 0,
};

export const header = createSlice({
  name: "header",
  initialState,
  reducers: {
    setActiveLandpageTab: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        activeTabId: action.payload,
      };
    },
    getState: (state) => {
      return state;
    },
  },
});

export const { setActiveLandpageTab, getState } = header.actions;

export default header.reducer;
