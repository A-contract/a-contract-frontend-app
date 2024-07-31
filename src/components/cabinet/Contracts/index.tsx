import { Box, Container } from "@mui/material";
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
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "column", lg: "row" },
        }}
      >
        <Box
          sx={{
            width: {
              xs: "-webkit-fill-available",
              md: "-webkit-fill-available",
              lg: 400,
            },
          }}
        >
          <ContractsUploader />
        </Box>
        <Box
          sx={{
            pl: { lg: 2 },
            pt: { lg: 0, xs: 2, md: 2 },
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
