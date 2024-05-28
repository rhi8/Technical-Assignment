import { Container, Typography } from "@mui/material";
import { Inter } from "next/font/google";
import { Fragment } from "react";
import Grid from '@mui/material/Grid';
import BlogCard from "@/components/blog/BlogCard";
import useSWR from 'swr';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {


  const { data, error, isLoading } = useSWR(
    '/api/getblog',
    (url) => fetch(url).then(res => res.json())
  );


  if (error) {
    return <p>Failed to load.</p>;
  }

  if (isLoading ) {
    return <p>Loading...</p>;
  }

  console.log(data.blogs[0])


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
      <Container maxWidth= {"xl"} disableGutters>
          <Grid container spacing={2} sx={{
          
            marginTop:"25px"
          }}>
            {
              data.blogs.map((blog)=>(
                <Grid item xs={12} md={4} sx={{
             
                }}> 
                   <BlogCard id={blog._id} title={blog.blog.title} description={blog.blog.description} />
                </Grid>
              ))
            }
            
            
          </Grid>
      </Container>
    </Fragment>
  );
}



/* export async function getStaticProps() {
  

  fetch('/api/getblog', {
    method: 'GET',
    body: JSON.stringify(),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) =>{ 
      console.log(data)
      return {
        props: {
          blogs: data,
        },
        revalidate: 1800,
      };
    });


  
} */
