import { useScopedI18n } from "@/locales/client";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  useMediaQuery,
  useTheme,
  Button,
} from "@mui/material";

const Cards = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const scopedT = useScopedI18n("Landing.Tarrifs.Cards");

  return (
    <Box sx={{ mx: "auto", mb: 5 }} display={isMatch ? "grid" : ""}>
      <Box>
        <Typography
          variant="h4"
          fontWeight="600"
          align={isMatch ? "center" : "left"}
          color="primary.dark"
          pb={2}
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
            <CardContent
              sx={{
                display: "grid",
                justifyItems: "center",
                alignItems: "center",
              }}
            >
              <Box>
                <Typography gutterBottom fontSize={26} sx={{ mb: 2 }}>
                  {scopedT("card1.title")}
                </Typography>
              </Box>

              <Box>
                {" "}
                <Typography fontSize={20} sx={{ mb: 3 }} color="text.secondary">
                  {scopedT("card1.info")}
                </Typography>
              </Box>
              <Box>
                <Typography
                  align="center"
                  fontSize={16}
                  sx={{ mb: 3 }}
                  color="text.secondary"
                >
                  Neque porro quisquam est qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit...
                </Typography>
              </Box>

              <Box>
                <Button
                  size="medium"
                  variant="outlined"
                  sx={{
                    bgcolor: "info.main",
                    color: "secondary.main",
                    borderColor: "info.light",
                    borderRadius: 4,
                    width: 200,
                    "&:hover": {
                      bgcolor: "info.light",
                      borderColor: "info.main",
                    },
                  }}
                >
                  Get
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box sx={{ maxWidth: 400, width: 300 }}>
          <Card>
            <CardContent
              sx={{
                display: "grid",
                justifyItems: "center",
                alignItems: "center",
              }}
            >
              <Box>
                <Typography gutterBottom fontSize={26} sx={{ mb: 2 }}>
                  {scopedT("card2.title")}
                </Typography>
              </Box>
              <Box>
                <Typography fontSize={20} sx={{ mb: 3 }} color="text.secondary">
                  {scopedT("card2.info")}
                </Typography>
              </Box>

              <Box>
                <Typography
                  align="center"
                  fontSize={16}
                  sx={{ mb: 3 }}
                  color="text.secondary"
                >
                  Neque porro quisquam est qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit...
                </Typography>
              </Box>
              <Box>
                <Button
                  size="medium"
                  variant="outlined"
                  sx={{
                    bgcolor: "info.main",
                    color: "secondary.main",
                    borderColor: "info.light",
                    borderRadius: 4,
                    width: 200,
                    "&:hover": {
                      bgcolor: "info.light",
                      borderColor: "info.main",
                    },
                  }}
                >
                  Get
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Cards;
