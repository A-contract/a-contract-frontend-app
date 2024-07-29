import { Box, Container, Paper, Typography } from "@mui/material";
import Table from "./Table";
import ContractsUploader from "./ContractsUploader";

const Contracts = () => {
  return (
    <Container
      sx={{
        width: "100% !important",
        padding: { xs: 0, md: 0 },
        maxWidth: { xs: "100%" },
        overflow: "hidden",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Box sx={{ width: "400px", minWidth: "350px" }}>
          <ContractsUploader />
        </Box>
        <Box
          sx={{
            pl: 2,
            width: "100%",
            maxWidth: "100%",
            overflow: "auto",
          }}
        >
          <Table />
        </Box>
      </Box>
    </Container>
  );
};

export default Contracts;
