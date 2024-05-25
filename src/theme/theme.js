import { createTheme } from "@mui/material/styles";
import "@fontsource/raleway";
import { indigo } from "@mui/material/colors";
import "@fontsource/pacifico";
const primaryBlue = indigo[900];

const theme = createTheme({
  palette: {
    primary: {
      main: primaryBlue,
    },
  },
  typography: {
    ralewayTypo: {
      fontFamily: "Raleway",
      fontSize: "2.5rem",
      lineHeight: 1.1,
      //color: "white",
      fontWeight: 700,
    },
  },
  glassMorpBg: {
    backgroundColor: "#0093E9",
    backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
  },
  glassMorp: {
    backgroundColor: "rgba(11, 24, 129, 0.15)",
    //backgroundColor: "white",
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(4.2px)",
    WebkitBackdropFilter: "blur(4.2px)",
    border: "1px solid rgba(11, 24, 129, 0.24)",
  },
  serviceContainer: {
    marginTop: "10rem",
  },
  customSub: {
    fontSize: "1.25rem",
    fontWeight: 300,
    color: "white",
  },
  specialText: {
    fontFamily: "Pacifico",
    color: "orange",
  },
});

export default theme;
