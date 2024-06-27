import AnalyseContract from "@/components/landing/AnalyseContract";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Support from "@/components/landing/Support";
import Tarrifs from "@/components/landing/Tarrifs";
import { Divider } from "@mui/material";

export default function Home() {
  return (
    <>
      <Header />
      <AnalyseContract />
      <Divider sx={{ height: 2 }} />
      <Tarrifs />
      <Divider />
      <Support />
      <Footer />
    </>
  );
}
