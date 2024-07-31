"use client";

import { Divider } from "@mui/material";
import AnalyseContract from "./AnalyseContract";
import Footer from "./Footer";
import Header from "./Header";
import ScrollHandler from "./ScrollHandler";
import Support from "./Support";
import Tarrifs from "./Tarrifs";

const Landing = () => {
  return (
    <>
      <ScrollHandler />
      <Header />
      <AnalyseContract />
      <Divider />
      <Tarrifs />
      <Divider />
      <Support />
      <Footer />
    </>
  );
};

export default Landing;
