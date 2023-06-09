import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    secondary: {
      main: "#34CE87",
      contrastText: "#fff",
    },
  },
});

export default theme;
