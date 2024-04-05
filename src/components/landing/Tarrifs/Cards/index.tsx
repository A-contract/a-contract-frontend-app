import { useScopedI18n } from "@/locales/client";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const Cards = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const scopedT = useScopedI18n("Landing.Tarrifs.Cards");

  return (
    <Box component="div" sx={{ mx: "auto", mb: 5 }}>
      <Box sx={{ mx: "10px" }}>
        <Typography
          component="h2"
          variant="h4"
          align="left"
          fontWeight="600"
          pb="10px"
          color={theme.palette.primary.dark}
          gutterBottom
        >
          {scopedT("title")}
        </Typography>
      </Box>

      <Box
        sx={{
          display: isMatch ? "grid" : "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 400,
            width: 300,
            mx: isMatch ? "" : "50px",
            my: isMatch ? 2 : 0,
          }}
        >
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="/static/images/standart_pricing.png"
            />
            <CardContent>
              <Typography gutterBottom fontSize={20}>
                {scopedT("card1.title")}
              </Typography>
              <Typography fontSize={20} color="text.secondary">
                {scopedT("card1.info")}
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box sx={{ maxWidth: 400, width: 300 }}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="/static/images/legal_person.png"
            />
            <CardContent>
              <Typography gutterBottom fontSize={20}>
                {scopedT("card2.title")}
              </Typography>
              <Typography fontSize={20} color="text.secondary">
                {scopedT("card2.info")}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Cards;
