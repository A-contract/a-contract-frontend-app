import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "number", headerName: "Number", width: 150 },
  { field: "contractName", headerName: "Contract Name", width: 150 },
  { field: "paymentStatus", headerName: "Payment Status", width: 150 },
  { field: "progressStatus", headerName: "Progress Status", width: 150 },
  { field: "download", headerName: "Download", width: 150 },
];

const rows: GridRowsProp = [
  {
    id: 1,
    number: "Hello",
    contractName: "World",
    paymentStatus: "World",
    progressStatus: "World",
    download: "World",
  },
  {
    id: 2,
    number: "DataGridPro",
    contractName: "is Awesome",
    paymentStatus: "World",
    progressStatus: "World",
    download: "World",
  },
  {
    id: 3,
    number: "MUI",
    contractName: "is Amazing",
    paymentStatus: "World",
    progressStatus: "World",
    download: "World",
  },
];

const Table = () => {
  return (
    <DataGrid
      sx={{
        maxWidth: {
          xs: "-webkit-fill-available",
          md: "-webkit-fill-available",
        },
      }}
      rows={rows}
      columns={columns}
    ></DataGrid>
  );
};

export default Table;
