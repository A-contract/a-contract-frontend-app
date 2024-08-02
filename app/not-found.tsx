import { Box, Container, Grid, Typography, Button } from "@mui/material";
import Link from "next/link";

const NotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid container item xs={6}>
            <Typography variant="h1">404</Typography>
            <Typography variant="h6">
              The page you’re looking for doesn’t exist.
            </Typography>
            <Button
              component={Link}
              href="/"
              variant="contained"
              sx={{ mt: 2 }}
            >
              Back Home
            </Button>
            <Button
              component={Link}
              href="auth"
              variant="contained"
              sx={{ mt: 2, mx: 3 }}
            >
              Go Auth
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NotFound;
