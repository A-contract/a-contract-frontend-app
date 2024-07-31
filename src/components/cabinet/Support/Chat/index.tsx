import { Box, Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Chat = () => {
  return (
    <Box
      sx={{
        width: "100%",
        ml: { lg: 2 },
        mt: { lg: 0, xs: 2, md: 2 },
        border: 1,
        borderRadius: 2,
        maxHeight: "70vh",
        maxWidth: {
          xs: "-webkit-fill-available",
          md: "-webkit-fill-available",
          lg: 900,
        },
        minHeight: 400,
        color: "info.dark",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <Box
        sx={{
          borderBottom: 1,
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column-reverse",
            p: 2,
            overflow: "auto",
          }}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          maxWidth: "1000px",
          mx: "auto",
          px: 2,
          py: 1,
          color: "info.dark",
          display: "flex",
          alignItems: "center",
        }}
      >
        <TextField
          size="small"
          sx={{ flexGrow: 1 }}
          // value={message}
          // onChange={(e) => {
          //   setMessage(e.target.value);
          // }}
        />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          sx={{
            ml: 2,
            color: "secondary.light",
            bgcolor: "info.main",
            borderColor: "success.light",
            "&:hover": {
              bgcolor: "info.light",
              borderColor: "info.main",
            },
          }}
          // onClick={() => {
          //   sendMessage();
          // }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default Chat;
