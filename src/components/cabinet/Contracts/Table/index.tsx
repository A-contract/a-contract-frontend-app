import { Box, Paper, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { CreateColumn, CreateGrid } from "./tableComponents";

const Table = () => {
  return (
    <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
      <Box sx={{ pb: 2 }}>
        <Typography>Contracts</Typography>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <DataGrid
          sx={{
            height: "100%",
            maxWidth: {
              xs: "-webkit-fill-available",
              md: "-webkit-fill-available",
            },

            "& .MuiDataGrid-cell": { whiteSpace: "inherit" },
          }}
          rows={CreateGrid()}
          columns={CreateColumn()}
        />
      </Box>
    </Paper>
  );
};

export default Table;
