import { createSlice } from "@reduxjs/toolkit";

export interface FooterState {
  navigation: any[];
}

const initialState: FooterState = {
  navigation: [
    {
      title: "Navigation.title",
      items: [
        {
          name: "Navigation.section1.name",
          href: "#analyse-contract",
          target: "",
        },
        {
          name: "Navigation.section2.name",
          href: "#tariffs",
          target: "",
        },
        {
          name: "Navigation.section3.name",
          href: "#support",
          target: "",
        },
      ],
    },
    {
      title: "Legal.title",
      items: [
        {
          name: "Legal.section1.name",
          href: "/legal/terms-and-conditions",
          target: "_blank",
        },
        {
          name: "Legal.section2.name",
          href: "/legal/privacy-policy",
          target: "_blank",
        },
      ],
    },
    {
      title: "Social.title",
      items: [
        {
          name: "TelegramIcon",
          href: "https://telegram.org/",
          target: "_blank",
        },
        {
          name: "InstagramIcon",
          href: "https://www.instagram.com/",
          target: "_blank",
        },
        {
          name: "LinkedInIcon",
          href: "https://www.linkedin.com/login/",
          target: "_blank",
        },
      ],
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
