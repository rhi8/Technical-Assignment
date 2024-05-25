import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { NextLinkComposed } from "../Link";


import { useState, useEffect, } from "react";
import { useRouter } from "next/router";

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 55,
    width: "100%",
    backgroundColor: "#fff",
  },
});

 const StyledTab = styled((props) => <Tab {...props} />)(({ theme }) => ({
  textTransform: "none",
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.typography.pxToRem(16),
  fontFamily: ["Raleway"],
  marginRight: theme.spacing(1),
  color: "rgba(255, 255, 255, 10)",
  "&.Mui-selected": {
    color: "#fff",
  },
  "&.Mui-focusVisible": {
    backgroundColor: "rgba(100, 95, 228, 0.32)",
  },
}));

export default function CustomizedTabs(props) {
  const router = useRouter();
  const activeLink = router.pathname;

  const [value, setValue] = useState();

  useEffect(() => {
    setValue(activeLink);
  }, [activeLink]);

  return (
    <Box>
      <StyledTabs value={value} aria-label="Navigation Tabs">
        {props.navRoutes.map((route) => (
          <StyledTab
          value={route.link}
            label={route.name}
            
            component={NextLinkComposed}
            to={route.link}
            key={route.name}
          />
        ))}
      </StyledTabs>
    </Box>
  );
}
