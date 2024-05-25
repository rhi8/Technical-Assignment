import { createTheme } from "@mui/material/styles";
import "@fontsource/raleway";
import { indigo } from "@mui/material/colors";
import "@fontsource/pacifico";
const primaryBlue = indigo[900];

const breakpoints = {
  values: {
    xs: 0,
    sm: 425,
    md: 760,
    lg: 1030,
    xl: 1430,
  },
};

const theme = createTheme({
  breakpoints: {
    ...breakpoints,
  },
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
   
    background: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
    border: "1px solid rgba(37, 41, 171, 0.3)",
    padding: "20px",
    minHeight:"300px",
    //  textAlign: 'center',
   // width: "300px",
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
