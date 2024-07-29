import FileDownloadIcon from "@mui/icons-material/FileDownload";
import PaymentIcon from "@mui/icons-material/Payment";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { UserContext } from "@/context/UserContext";
import { useContext } from "react";
import TableButton from "./TableButton";

export const CreateColumn: () => GridColDef[] = () => {
    const userData = useContext(UserContext);
    return [
        {
            field: "number",
            headerName: "№",
            width: 70,
            headerAlign: "center",
            align: "center",
        },
        {
            field: "contractName",
            headerName: "Contract Name",
            width: 200,
        },
        {
            field: "paymentStatus",
            headerName: "Payment Status",
            width: 250,
            headerAlign: "center",
            align: "center",
            renderCell: () =>
                TableButton("To pay", <PaymentIcon />, () => {
                    return {};
                }),
        },
        {
            field: "progressStatus",
            headerName: "Progress Status",
            width: 200,
            renderCell: () =>
                userData.user.role === "customer" ? (
                    <>In progress</>
                ) : (
                    TableButton("To process", <PlayArrowIcon />, () => {
                        return {};
                    })
                ),
        },
        {
            field: "download",
            headerName: "Download",
            width: 250,
            headerAlign: "center",
            align: "center",
            renderCell: () =>
                TableButton("Download", <FileDownloadIcon />, () => {
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
