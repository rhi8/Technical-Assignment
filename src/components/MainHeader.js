import { Fragment } from "react";
import AppBar from "@mui/material/AppBar";
import {
  Button,
  Container,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import DesktopTabs from "./desktopTabs";
import TemporaryDrawer from "./MobileDrawer";
import { useState } from "react";

import { NextLinkComposed } from "../Link";

const MainHeader = (props) => {
  const [toggleState, setToggleState] = useState(false);

  const toggleDrawer = (toggle) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setToggleState(toggle);
  };

  const onDrawerClick = () => {
    setToggleState(!toggleState);
  };

  const navRoutes = [
    { name: "Home", link: "/" },
    { name: "Add Blog", link: "/addblog" },
    
  ];

  return (
    <Fragment>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar disableGutters>
          <Container maxWidth="xl">
            <Grid container alignItems="center">
              <Grid item xs={6} xl={6}>
                <Button
                  variant="text"
                  disableRipple
                  component={NextLinkComposed}
                  to="/"
                  aria-label="load home page"
                >
                  <Typography
                    variant="h2"
                    noWrap
                    sx={(theme) => ({
                      ...theme.typography.ralewayTypo,
                      fontSize: {md:"1.5rem", xs: "1.3rem"},
                      color: "white",
                    })}
                  >
                    Fintrellis
                  </Typography>
                </Button>
              </Grid>
              {/*mobileButton*/}
              <Grid
                item
                xs={6}
                container
                justifyContent="flex-end"
                sx={{ display: { xs: "flex", lg: "none" } }}
              >
                <IconButton
                  size="large"
                  onClick={onDrawerClick}
                  aria-label="open mobile navigation"
                >
                  <MenuOpenIcon
                    sx={{ fontSize: "52px", color: "white" }}
                    aria-label="open menu"
                  />
                </IconButton>
              </Grid>
              {/*desktopTabs*/}
              <Grid
                item
                lg={6}
                xl={6}
                container
                justifyContent="flex-end"
                sx={{ display: { xs: "none", lg: "flex" } }}
              >
                <DesktopTabs navRoutes={navRoutes} />
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
      <TemporaryDrawer
        toggleState={toggleState}
        toggleDrawer={toggleDrawer}
        navRoutes={navRoutes}
      />
    </Fragment>
  );
};

export default MainHeader;
