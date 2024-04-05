import { useScopedI18n } from "@/locales/client";
import theme from "@/theme/theme";
import { Box, Typography } from "@mui/material";

const Description = () => {
  const scopedT = useScopedI18n("Landing.Support");
  return (
    <Box maxWidth="530px" mr={10} alignItems="center">
      <Typography
        component="h2"
        variant="h4"
        align="left"
        fontWeight={600}
        pb={2}
        color={theme.palette.primary.dark}
        gutterBottom
      >
        {scopedT("title")}
      </Typography>
      <Typography
        fontSize={20}
        align="left"
        textAlign="justify"
        color={theme.palette.primary.dark}
        paragraph
      >
        {scopedT("paragraph1")}
      </Typography>
      <Typography
        fontSize={20}
        align="left"
        textAlign="justify"
        color={theme.palette.primary.dark}
        paragraph
      >
        {scopedT("paragraph2")}
      </Typography>
    </Box>
  );
};

export default Description;
