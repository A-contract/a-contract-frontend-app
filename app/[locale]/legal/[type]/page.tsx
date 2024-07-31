import Legal from "@/components/legal";
import LegalContextProvider from "@/context/LegalContext";
import React from "react";

const LegalPage = () => {
  return (
    <LegalContextProvider>
      <Legal />
    </LegalContextProvider>
  );
};

export default LegalPage;
