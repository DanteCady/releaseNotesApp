import React from "react";
import { Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const AddNewVersionButton = ({ onClick }) => {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      sx={{ mt: "15px", color:"#0c51a1",  }}
      startIcon={<AddCircleIcon />}
    >
     New Version
    </Button>
  );
};

export default AddNewVersionButton;
