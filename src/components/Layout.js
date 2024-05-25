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
      <Paper elevation={0} sx={(theme) => ({ ...theme.glassMorpBg, height:"100vh" })}>
        <main>
          {props.children}
        </main>
      </Paper>
       <Grid container sx={theme => ({ bgcolor:"primary.dark" })}>
        <Grid item xs={12} >
            <Typography sx={theme =>({textAlign: "center", ...theme.typography.ralewayTypo,  color:"white"})}>Simple Web Solutions </Typography>
        </Grid>
         <Grid item xs={12} >
            <Typography  sx={theme =>({textAlign: "center", ...theme.typography.ralewayTypo,  color:"white"})}>Bringing your ideas to the web</Typography>
        </Grid> 
      </Grid> 
    </Fragment>
  );
}

export default Layout;
