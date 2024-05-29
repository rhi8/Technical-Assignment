import { Typography } from "@mui/material";
import { useEffect } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";

const SingleBlog = () => {

  const router = useRouter();
  const blogId = router.query.eventid;
 

   useEffect(()=>{
    fetch('/api/singleblog/getsingleblog', {
      method: 'POST',
      body: JSON.stringify({blogId: blogId}),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  },[]) 

 


  //console.log(data);

  return <Typography>Single page</Typography>;
};

export default SingleBlog;
