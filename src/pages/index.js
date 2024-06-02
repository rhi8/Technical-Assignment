import { Container, Typography } from "@mui/material";
import { Inter } from "next/font/google";
import { Fragment } from "react";
import Grid from "@mui/material/Grid";
import BlogCard from "@/components/blog/BlogCard";
import useSWR from "swr";
import Loading from "@/components/loading";
import { useState, useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [blogdata, setData] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/getblog", {
      method: "POST",
      body: JSON.stringify(),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  /*   const { data, error, isLoading } = useSWR(
    '/api/getblog',
    (url) => fetch(url).then(res => res.json())
  ); */

  /* 
   if (error) {
    return <p>Failed to load.</p>;
  } */

  if (loading) {
    return <Loading />;
  }

  console.log(blogdata.blogs);

  const deleteBlogHandler = (blogId) => {
    setLoading(true);
    fetch("/api/deleteblog", {
      method: "POST",
      body: JSON.stringify({ blogId: blogId }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => 
       { console.log(data)
       
        fetch("/api/getblog", {
          method: "POST",
          body: JSON.stringify(),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setData(data);
            setLoading(false);
          });

       });

     
  };

  return (
    <Fragment>
      <Container>
        <Typography
          textAlign="center"
          variant="body1"
          paddingTop="25px"
          sx={(theme) => ({
            ...theme.specialText,
            fontSize: { xs: "30px", sm: "40px" },
          })}
        >
          My Personal Blog
        </Typography>
      </Container>
      <Container maxWidth={"xl"} disableGutters>
        <Grid
          container
          spacing={2}
          sx={{
            marginTop: "25px",
          }}
        >
          {blogdata.blogs.map((blog) => (
            <Grid item xs={12} md={4} key={blog._id} sx={{}}>
              <BlogCard
                id={blog._id}
                title={blog.blog.title}
                description={blog.blog.description}
                deleteBlogHandler={deleteBlogHandler}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Fragment>
  );
}


