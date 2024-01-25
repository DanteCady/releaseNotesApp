// src/components/EmailButton.js
import React from "react";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const EmailButton = ({ onClick, loading }) => {
  return (
    <Button
      variant="outlined"
      startIcon={<SendIcon />}
      onClick={onClick}
      disabled={loading} // Disable the button while loading
          sx={{ mt: "15px", color: "#ff671f", borderColor: "#ff671f", ml: "10px" }}
    >
      {loading ? "Sending..." : "Send Email"}
    </Button>
  );
};

export default EmailButton;
