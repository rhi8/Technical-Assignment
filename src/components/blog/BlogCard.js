import { Typography, colors } from "@mui/material";
import { Box, styled } from "@mui/material";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { NextLinkComposed } from "@/Link";

const Card = styled(Box)(({ theme }) => ({
  ...theme.glassMorp,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
}));

/* const TruncatedTypography = styled(Typography)(({ theme }) => ({
  ...theme.customSub,
 
  
})); */

const TruncatedText = ({ text, maxLength = 100, sx }) => {
  const truncatedText =
    text.length > maxLength ? text.substring(0, maxLength) + "..." : text;

  return (
    <Typography  textAlign="center"
    variant="body1"
    sx={(theme)=>({...theme.customSub , ...sx,  })}>{truncatedText}</Typography>
  );
};

const BlogCard = ({title, description, id,deleteBlogHandler}) => {


  
  return (
    <Card >
      <Typography
        component="h1"
        sx={(theme) => ({
          ...theme.customSub,
        })}
      >
        {title}
      </Typography>
       <TruncatedText
        sx={{ color: "black",  }}
        text={description}
      /> 
      <Stack direction="row" spacing={2}>
        <Button variant="contained" endIcon={<SendIcon />}
          component={NextLinkComposed}
          to={`/singleblog/${id}`}
        >
          Read More
        </Button>
        <Button variant="contained" endIcon={<DeleteIcon />} onClick={deleteBlogHandler.bind(null, id)}>
          Delete
        </Button>
      </Stack>
    </Card>
  );
};

export default BlogCard;
