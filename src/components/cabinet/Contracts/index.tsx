import { Box, Container, Paper, Typography } from "@mui/material";
import Table from "./Table";

const Contracts = () => {
  return (
    <Container
      sx={{
        width: "100% !important",
        padding: { xs: 0, md: 0 },
        maxWidth: { xs: "100%" },
      }}
    >
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: "100%",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Typography sx={{ fontSize: 20 }}>Contracts</Typography>
        </Box>
        <Box>
          <Table />
        </Box>
      </Paper>
    </Container>
  );
};

export default Contracts;
