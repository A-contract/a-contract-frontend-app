import { useScopedI18n } from "@/locales/client";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

const Description = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const scopedT = useScopedI18n("Landing.Support");

  return (
    <Box maxWidth={isMatch ? "100%" : "530px"} mr={isMatch ? 0 : 10}>
      <Typography
        component="h2"
        variant="h4"
        align={isMatch ? "center" : "left"}
        fontWeight={600}
        pb={2}
        color="primary.dark"
        gutterBottom
      >
        {scopedT("title")}
      </Typography>
      <Typography
        fontSize={20}
        align="left"
        textAlign="justify"
        color="primary.dark"
        paragraph
      >
        {scopedT("paragraph1")}
      </Typography>
      <Typography
        fontSize={20}
        align="left"
        textAlign="justify"
        color="primary.dark"
        paragraph
      >
        {scopedT("paragraph2")}
      </Typography>
    </Box>
  );
};

export default Description;
