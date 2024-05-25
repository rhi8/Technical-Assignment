import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Fragment } from 'react';

import List from '@mui/material/List';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemText from '@mui/material/ListItemText';

import { NextLinkComposed } from "../Link";
import { useRouter } from "next/router";
import "@fontsource/raleway";

const TemporaryDrawer =(props) => {


  const router = useRouter();
  const activeLink = router.pathname;


  const list =  (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={props.toggleDrawer(false)}
      onKeyDown={props.toggleDrawer( false)}
    >
      <List  component="nav" sx={{marginTop: "100px"}}>
        {props.navRoutes.map((route)=> (
          <ListItem divider disablePadding key ={route.name}>
            <ListItemButton component={NextLinkComposed} to ={route.link}  selected={route.link === activeLink}>
              <ListItemText primary = {route.name} 
              sx={{color: "white"}}
              primaryTypographyProps={{
                fontSize: 20,
               
                letterSpacing: 0,
                fontFamily: "Raleway",
                
                lineHeight: 1.5,
                //color: "white",
                fontWeight: 700,
              }}
              /> 
            </ListItemButton>

          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    
        <Fragment key='right'>
          
          <Drawer
            sx={{
              '& .MuiDrawer-paper':{
                bgcolor: "#0093E9"
              }
            }}
            anchor="left"
            open={props.toggleState}
             onClose={props.toggleDrawer(false)}
            
          >
            {list}
          </Drawer>
        </Fragment>
   
  );
}



export default TemporaryDrawer;