"use client";
import {
  Box,
  Container,
  CssBaseline,
  Divider,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Header from "./Header";
import { useScopedI18n } from "@/locales/client";

const Blog = () => {
  const [activeTab, setActiveTab] = useState(0);
  const scopedT = useScopedI18n("Blog");

  const handleTabChange = (
    event: React.SyntheticEvent,
    newTabIndex: number
  ) => {
    setActiveTab(newTabIndex);
  };

  const tabs = [{ label: scopedT("Categories.allPosts"), component: <></> }];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header />
      <Divider />

      <Container sx={{ pt: "80px", mb: "100px" }}>
        <Box
          sx={{
            mt: "20px",
            mb: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4" component="h1">
            {scopedT("Title")}
          </Typography>
        </Box>
        <Divider />

        <Box sx={{ width: "100%", mt: "5px", mb: "5px", color: "text.main" }}>
          <Tabs value={activeTab} onChange={handleTabChange}>
            {tabs.map((tab, index) => (
              <Tab key={index} label={tab.label} value={index} />
            ))}
          </Tabs>
        </Box>
        <Divider />

        <Box sx={{ display: "flex", maxWidth: "1200px" }}>
          {tabs[activeTab].component}
        </Box>
      </Container>
      <Divider />
    </Box>
  );
};

export default Blog;
