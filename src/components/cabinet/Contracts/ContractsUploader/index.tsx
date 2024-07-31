import { UserContext } from "@/context/UserContext";
import { Paper, Box, Typography, Button } from "@mui/material";
import { DropzoneArea } from "mui-file-dropzone";
import { useContext, useRef } from "react";

const renderLawyerContractDetails = () => (
  <>
    {["Number", "Name"].map((label) => (
      <Box
        key={label}
        sx={{
          pb: "20px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            width: "120px",
            color: "primary.main",
          }}
        >
          <Typography>{label}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "160px",
          }}
        >
          <Typography>contract 1</Typography>
        </Box>
      </Box>
    ))}
  </>
);

const ContractsUploader = () => {
  const { user } = useContext(UserContext);
  const dropzoneRef = useRef<any>(null);

  return (
    <Paper sx={{ p: 2 }}>
      <Box sx={{ pb: 2 }}>
        {user.role === "Customer" && (
          <Typography sx={{ fontSize: 18, textTransform: "uppercase" }}>
            Analyse contract
          </Typography>
        )}
        {user.role === "Lawyer" && (
          <Typography sx={{ fontSize: 18, textTransform: "uppercase" }}>
            Selected contract
          </Typography>
        )}
      </Box>
      {user.role === "Lawyer" && renderLawyerContractDetails()}
      <Box sx={{ p: "15px", pb: "20px" }}>
        <Box
          component={DropzoneArea}
          ref={dropzoneRef}
          filesLimit={1}
          acceptedFiles={[".doc", ".docx", ".pdf"]}
          dropzoneText={"Attach your contract"}
          onChange={() => {}} // (files) => setFile(files[0])
        />
      </Box>
      <Box sx={{ pb: "15px", display: "flex" }}>
        <Button
          variant="outlined"
          sx={{
            mx: "auto",
            width: "100%",
            maxWidth: {
              xs: "-webkit-fill-available",
              md: "-webkit-fill-available",
              lg: "280",
            },
            bgcolor: "success.main",
            color: "secondary.main",
            borderColor: "success.light",
            "&:hover": {
              bgcolor: "info.light",
              borderColor: "info.main",
            },
          }}
          //   onClick={() => sendContract()}
        >
          {user.role === "Customer" ? "Analyse contract" : "Finish"}
        </Button>
      </Box>
    </Paper>
  );
};

export default ContractsUploader;
