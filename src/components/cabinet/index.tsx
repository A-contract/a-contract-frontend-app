"use client";
import Drawer from "./Drawer";
import Header from "./Header";
import Contracts from "./Contracts";
import Workspace from "./Workspace";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Support from "./Support";
import Settings from "./Settings";
import { notFound, usePathname } from "next/navigation";

const TABS: { [key: string]: JSX.Element } = {
  contracts: <Contracts />,
  workspace: <Workspace />,
  support: <Support />,
  settings: <Settings />,
};

const Cabinet = () => {
  const route = usePathname();
  const activeTab = route.split("/").pop();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down(1200));

  if (!TABS[activeTab as string]) return notFound();

  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <Drawer activeTab={activeTab as string} />
      <Box
        sx={{
          display: "flex",
          mt: "65px",
          width: "100%",
          height: "100%",
          p: isMatch ? 0 : 2,
          overflow: "auto",
          bgcolor: "secondary.dark",
        }}
      >
        {TABS[activeTab as string]}
      </Box>
    </Box>
  );
};

export default Cabinet;
