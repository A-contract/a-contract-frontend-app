import { createSlice } from "@reduxjs/toolkit";

export interface FooterState {
  navigation: any[];
}

const initialState: FooterState = {
  navigation: [
    {
      title: "Navigation.title",
      color: "Navigation.color",
    },
  ],
};

export const footer = createSlice({
  name: "footer",
  initialState,
  reducers: {},
});

export const {} = footer.actions;

export default footer.reducer;
