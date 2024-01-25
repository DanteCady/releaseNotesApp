import React from "react";
import { TextField, FormHelperText } from "@mui/material";

const MarkdownEditor = ({ value, onChange }) => {
  return (
    <>
      <TextField
        label="Markdown Input"
        multiline
        fullWidth
        rows={30}
        value={value}
        onChange={onChange}
        variant="outlined"
        margin="normal"
      />

      <FormHelperText>{`${value.length} characters`}</FormHelperText>
    </>
  );
};

export default MarkdownEditor;
