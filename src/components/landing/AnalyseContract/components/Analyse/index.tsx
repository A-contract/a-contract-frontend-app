import { useScopedI18n } from "@/locales/client";
import { setActiveAuthForm } from "@/store/authForm/authForm";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { useDispatch } from "react-redux";

const Analyse = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const dispatch = useDispatch();
  const scopedT = useScopedI18n("Landing.AnalyseContract");
  return (
    <Box maxWidth={550} mx={5} ml={isMatch ? 0 : 5} alignItems="center">
      <Card
        component={Box}
        width={isMatch ? 350 : 530}
        border={0}
        p={7}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <CardMedia
          component={Box}
          image="/static/images/analyse-contract.png"
          height="400px"
          width={isMatch ? 300 : 440}
          borderRadius={3}
        />
        <CardContent component={Box} mr="auto">
          <Typography gutterBottom color="text.main">
            {scopedT("paragraph3")}
          </Typography>
        </CardContent>
        <Box
          component={Link}
          href="auth"
          onClick={() => dispatch(setActiveAuthForm(1))}
        >
          <Button
            size="medium"
            variant="outlined"
            sx={{
              bgcolor: "info.light",
              color: "secondary.main",
              borderColor: "info.light",
              width: isMatch ? 300 : 440,
              "&:hover": {
                bgcolor: "info.light",
                borderColor: "info.light",
              },
            }}
          >
            {scopedT("button1")}
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default Analyse;
