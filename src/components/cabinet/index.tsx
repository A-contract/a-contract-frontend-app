"use client";
import Drawer from "./Drawer";
import Header from "./Header";
import Contracts from "./Contracts";
import Workspace from "./Workspace";
import { Box } from "@mui/material";
import Support from "./Support";
import Settings from "./Settings";
import { usePathname } from "next/navigation";

const TABS_CONTENT: { [key: string]: JSX.Element } = {
  contracts: <Contracts />,
  workspace: <Workspace />,
  support: <Support />,
  settings: <Settings />,
};

const Cabinet = () => {
  const route = usePathname();
  const activeTab = route.split("/").pop() || "contracts";

  return (
    <Box display="flex">
      <Header />
      <Drawer activeTab={activeTab as string} />
      <Box
        sx={{
          display: "flex",
          mt: "65px",
          width: "100%",
          height: "100%",
          p: "25px",
          overflow: "auto",
        }}
      >
        {TABS_CONTENT[activeTab as string]}
      </Box>
    </Box>
  );
};

export default Cabinet;
