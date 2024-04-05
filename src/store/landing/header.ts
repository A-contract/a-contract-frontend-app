import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface HeaderState {
  tabsDesktop: any[];
  activeTabId: number;
}

const initialState: HeaderState = {
  tabsDesktop: [
    {
      id: 0,
      name: "section1.name",
      href: "#analyse-contract",
      target: "",
      color: "secondary.light",
    },
    {
      id: 1,
      name: "section2.name",
      href: "#tariffs",
      target: "",
      color: "secondary.light",
    },
    {
      id: 2,
      name: "section3.name",
      href: "#support",
      target: "",
      color: "secondary.light",
    },
    {
      id: 3,
      name: "section4.name",
      href: "/blog",
      target: "/blog",
      color: "secondary.light",
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
  },
});

export const { setActiveLandpageTab } = header.actions;

export default header.reducer;
