import { Box, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import MobileTable from "./MobileTable";
import { CreateGrid, CreateColumn } from "./TableComponents";

const Table = () => {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down(800));
    return (
        <Paper
            sx={{
                px: 2,
                py: 2,
                mt: { xs: 2, md: 2, lg: 0 },
                display: "flex",
                flexDirection: "column",
                height: "100%",

                maxHeight: 600,
            }}
        >
            <Box sx={{ pb: 2 }}>
                <Typography sx={{ fontSize: 18, textTransform: "uppercase" }}>
                    Contracts
                </Typography>
            </Box>
            <Box sx={{ flexGrow: 1, minHeight: 400, overflow: "auto" }}>
                {!isMatch ? (
                    <DataGrid
                        sx={{
                            height: "100%",
                            "& .MuiDataGrid-cell": { whiteSpace: "inherit" },
                        }}
                        rows={CreateGrid()}
                        columns={CreateColumn()}
                    />
                ) : (
                    <MobileTable />
                )}
            </Box>
        </Paper>
    );
};

export default Table;
