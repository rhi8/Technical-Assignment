import { Box, Typography } from "@mui/material";
import { use, useEffect, useState } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import Loading from "@/components/loading";
import { Container } from "@mui/material";

const SingleBlog = () => {
  const router = useRouter();
  const blogId = router.query.eventid;

  const [loading, setLoading] = useState(true);
  const [blogdata, setData] = useState(false);

  useEffect(() => {
    fetch("/api/singleblog/getsingleblog", {
      method: "POST",
      body: JSON.stringify({ blogId: blogId }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const bloginfo = data.blogs[0]
        setData(bloginfo);
        setLoading(false);
      });
  }, []);

  if (loading || !blogdata) {
    return <Loading />;
  }

  console.log(blogdata.blog, "state data")

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <Typography
        textAlign="center"
        variant="body1"
        paddingTop="25px"
        sx={(theme) => ({
          ...theme.specialText,
          fontSize: { xs: "30px", sm: "40px" },
        })}
      >
        Individual Blog
      </Typography>
      <Box
        sx={(theme) => ({
          ...theme.glassMorp,
          width: "100%",
          height: "70vh",
        })}
      >
        <Typography
          component="h1"
          sx={(theme) => ({
            ...theme.customSub,
            textAlign: "center",
          })}
        >
       {blogdata.blog.title}
        </Typography>
        <Typography>
        {blogdata.blog.description}
        </Typography>
      </Box>
    </Container>
  );
};

export default SingleBlog;
