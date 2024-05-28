import { Fragment } from "react";
import MainHeader from "./MainHeader";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import { Grid, Typography } from "@mui/material";

function Layout(props) {
  return (
    <Fragment>
      <MainHeader />
      <Box sx={{ mt: { xs: "75px", sm: "62px" } }}></Box>
      <Paper elevation={0} sx={(theme) => ({ ...theme.glassMorpBg, minHeight:"100vh", maxHeight:"100%"})}>
        <main>
          {props.children}
        </main>
      </Paper>
  
    </Fragment>
  );
}

export default Layout;
