import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Loading = () => {
  return <Box sx={{ display: "flex", alignItems:'center', justifyContent:'center', width:"100%", height:"100vh" }}>
    <CircularProgress />
  </Box>;
};

export default Loading;
