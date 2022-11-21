import {ThemeProvider ,createTheme } from "@mui/material/styles";

const dark = createTheme({
    palette: {
      mode: "dark",
    },
  });
export{
    ThemeProvider,
    dark
} 