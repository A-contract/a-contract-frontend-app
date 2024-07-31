"use client";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { CreateGrid, CreateColumn } from "../TableComponents";

const MobileTable = () => {
  const columns = CreateColumn();
  const rows = CreateGrid();

  return (
    <Box
      sx={{
        height: "100%",
        overflow: "auto",
        px: 1,
        py: 2,
        border: 1,
        borderRadius: 2,
        borderColor: "info.dark",
        "& .MuiDataGrid-cell": { whiteSpace: "inherit" },
      }}
    >
      {rows.map((row) => (
        <TableContainer
          key={row.id}
          sx={{
            border: 1,
            borderRadius: 2,
            borderColor: "info.dark",
            my: 1,
            pt: 1,
          }}
        >
          <Table>
            <TableBody>
              {columns.map(({ field, headerName, renderCell }) => (
                <TableRow key={field}>
                  <TableCell sx={{ fontWeight: 600, width: 140 }}>
                    {headerName}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {renderCell ? <Box component={renderCell} /> : row[field]}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ))}
    </Box>
  );
};

export default MobileTable;
