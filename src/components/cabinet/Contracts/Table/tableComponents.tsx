import FileDownloadIcon from "@mui/icons-material/FileDownload";
import PaymentIcon from "@mui/icons-material/Payment";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { UserContext } from "@/context/UserContext";
import { useContext } from "react";
import TableButton from "./TableButton";
import { GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { useScopedI18n } from "@/locales/client";

export const CreateColumn: () => GridColDef[] = () => {
  const userData = useContext(UserContext);
  const scopedT = useScopedI18n("Cabinet.Contracts");

  return [
    {
      field: "number",
      headerName: scopedT("contracts.table.column1"),
      width: 70,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "contractName",
      headerName: scopedT("contracts.table.column2"),
      headerAlign: "center",
      align: "center",
      width: 200,
    },
    {
      field: "paymentStatus",
      headerName: scopedT("contracts.table.column3"),
      width: 200,
      headerAlign: "center",
      align: "center",
      renderCell: () =>
        TableButton("contracts.table.button1", <PaymentIcon />, () => {
          return {};
        }),
    },
    {
      field: "progressStatus",
      headerName: scopedT("contracts.table.column4"),
      width: 200,
      headerAlign: "center",
      align: "center",
      renderCell: () =>
        userData.user.role === "Customer" ? (
          <>In progress</>
        ) : (
          TableButton("contracts.table.button2", <PlayArrowIcon />, () => {
            return {};
          })
        ),
    },
    {
      field: "download",
      headerName: scopedT("contracts.table.column5"),
      width: 200,
      headerAlign: "center",
      align: "center",
      renderCell: () =>
        TableButton("contracts.table.button3", <FileDownloadIcon />, () => {
          return {};
        }),
    },
  ];
};

export const CreateGrid: () => GridRowsProp = () => {
  return [
    {
      id: 1,
      number: 1,
      contractName: "World fdfdfdfd rrrreerer ff ddddsdsdsd",
      paymentStatus: "World",
      progressStatus: "World",
      download: "World",
    },
    {
      id: 2,
      number: 2,
      contractName: "is Awesome",
      paymentStatus: "World",
      progressStatus: "World",
      download: "World",
    },
    {
      id: 3,
      number: 3,
      contractName: "is Amazing",
      paymentStatus: "World",
      progressStatus: "World",
      download: "World",
    },
  ];
};
