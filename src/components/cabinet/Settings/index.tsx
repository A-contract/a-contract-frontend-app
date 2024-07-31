"use client";
import {
  Paper,
  Box,
  Typography,
  Container,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Divider,
  TextField,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Settings = () => {
  return (
    <Container
      sx={{
        width: "100% !important",
        padding: { xs: 0, md: 0 },
        maxWidth: { xs: "-webkit-fill-available" },
        overflow: "hidden",
      }}
    >
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          minWidth: { xs: "-webkit-fill-available" },
        }}
      >
        <Typography sx={{ fontSize: 18, textTransform: "uppercase", pb: 2 }}>
          Settings
        </Typography>

        <Box sx={{ display: "flex", px: 2 }}>
          <Accordion
            sx={{
              width: "-webkit-fill-available",
              minWidth: {
                xs: "-webkit-fill-available",
                md: "-webkit-fill-available",
                lg: "-webkit-fill-available",
              },
              maxWidth: { xs: "-webkit-fill-available" },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Personal information
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Divider />
              <Box sx={{ display: "flex", my: 2 }}>
                <Box sx={{ width: 170, mt: "5px" }}>
                  <Typography>Name</Typography>
                </Box>
                <Box sx={{ width: 200, mr: 1, mt: "1px" }}>
                  <TextField
                    size="small"
                    variant="standard"
                    // value={name}
                    // onChange={(e) => {
                    //   setName(e.target.value);
                    // }}
                  />
                </Box>
                <Box sx={{ width: 200 }}>
                  <Button
                    variant="outlined"
                    size={"small"}
                    sx={{
                      color: "secondary.light",
                      bgcolor: "info.main",
                      borderColor: "success.light",
                      "&:hover": {
                        bgcolor: "info.light",
                        borderColor: "info.main",
                      },
                    }}
                    // onClick={() => {
                    //   saveFullName();
                    // }}
                  >
                    Save
                  </Button>
                </Box>
              </Box>
              <Divider />
              <Box sx={{ display: "flex", my: 2 }}>
                <Box sx={{ width: 170, mt: "5px" }}>
                  <Typography>Surname</Typography>
                </Box>
                <Box sx={{ width: 200, mr: 1, mt: "1px" }}>
                  <TextField
                    size="small"
                    variant="standard"
                    // value={surname}
                    // onChange={(e) => {
                    //   setSurname(e.target.value);
                    // }}
                  />
                </Box>
                <Box sx={{ width: 200 }}>
                  <Button
                    variant="outlined"
                    size={"small"}
                    sx={{
                      color: "secondary.light",
                      bgcolor: "info.main",
                      borderColor: "success.light",
                      "&:hover": {
                        bgcolor: "info.light",
                        borderColor: "info.main",
                      },
                    }}
                    // onClick={() => {
                    //   saveFullName();
                    // }}
                  >
                    Save
                  </Button>
                </Box>
              </Box>
              <Divider />
            </AccordionDetails>
          </Accordion>
        </Box>
      </Paper>
    </Container>
  );
};

export default Settings;
