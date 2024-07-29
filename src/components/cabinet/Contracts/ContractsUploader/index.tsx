import { Paper, Box, Typography, Button } from "@mui/material";
import { DropzoneArea } from "mui-file-dropzone";
import Link from "next/link";
import { useRef } from "react";

const ContractsUploader = () => {
  const dropzoneRef = useRef<any>(null);
  return (
    <Paper sx={{ p: 2 }}>
      <Box sx={{ pb: 2 }}>
        <Typography>Analyse contract</Typography>
      </Box>
      <Box sx={{ p: "15px", pb: "20px" }}>
        <Box
          component={DropzoneArea}
          ref={dropzoneRef}
          filesLimit={1}
          acceptedFiles={[".doc", ".docx,", ".pdf"]}
          dropzoneText={"Attach your contract"}
          onChange={() => {}} // (files) => setFile(files[0])
        />
      </Box>
      <Box sx={{ pb: "15px", display: "flex" }}>
        <Button
          variant="outlined"
          sx={{
            mx: "auto",
            width: "-webkit-fill-available",
            maxWidth: 280,
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
          Analyse
        </Button>
      </Box>
    </Paper>
  );
};

export default ContractsUploader;
