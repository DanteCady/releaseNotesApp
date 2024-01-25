import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  overrides: {
    MuiInput: {
      underline: {
        "&::before": {
          borderBottomColor: "black !important", // Change this to your desired color
        },
      },
    },
  },
});

export default theme;
