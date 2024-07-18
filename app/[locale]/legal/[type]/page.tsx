import Legal from "@/components/legal";
import Context from "@/components/legal/Context";
import { useRouter } from "next/router";
import React from "react";

const LegalPage = () => {
  return (
    <Context>
      <Legal />
    </Context>
  );
};

export default LegalPage;
