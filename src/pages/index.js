import { Container, Typography } from "@mui/material";
import { Inter } from "next/font/google";
import { Fragment } from "react";
import Grid from '@mui/material/Grid';
import BlogCard from "@/components/blog/BlogCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Fragment>
      <Container>
        <Typography
          textAlign="center"
          variant="body1"
          paddingTop="25px"
          sx={(theme) => ({
            ...theme.specialText,
            fontSize: { xs: "30px", sm:"40px" },
          })}
        >
          My Personal Blog
        </Typography>
      </Container>
      <Container maxWidth= {"xl"}>
          <Grid container spacing={2} sx={{
          
            marginTop:"25px"
          }}>
             <Grid item xs={12} md={4} sx={{
             
             }}> 
                <BlogCard />
             </Grid>
          </Grid>
      </Container>
    </Fragment>
  );
}
