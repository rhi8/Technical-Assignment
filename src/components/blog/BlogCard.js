import { Typography, colors } from "@mui/material";
import { Box, IconButton, Rating, styled } from "@mui/material";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

const Card = styled(Box)(({ theme }) => ({
  ...theme.glassMorp,
  width: "100%",
  display:'flex',
  flexDirection:'column',
  justifyContent:"space-around"
}));

const TruncatedTypography = styled(Box)(({ theme }) => ({
  ...theme.customSub,
}));

/* const Card = styled(Box)({
    minHeight:"300px",
    background: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
  });
 */

const TruncatedText = ({ text, maxLength = 100, sx }) => {
  const truncatedText =
    text.length > maxLength ? text.substring(0, maxLength) + "..." : text;

  return (
    <TruncatedTypography sx={{ ...sx }}>{truncatedText}</TruncatedTypography>
  );
};

const BlogCard = () => {
  return (
    <Card>
      <Typography
        component="h1"
        sx={(theme) => ({
          ...theme.customSub,
        })}
      >
        ssssssssssssssssss
      </Typography>
      <TruncatedText
        sx={{ color: "black" }}
        text="
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus eros eu massa facilisis bibendum. Aliquam dapibus volutpat congue. Nam consequat velit libero, sed pharetra ligula ultrices nec. Integer faucibus auctor felis ac dapibus. Morbi sed turpis dictum, maximus diam quis, ultricies ex. Pellentesque faucibus sit amet mi et pellentesque. Etiam feugiat ultricies lacus, vel ullamcorper massa fermentum ut. In dignissim volutpat purus et consectetur. Praesent pellentesque, diam et rutrum tempor, turpis lectus ornare ligula, in rhoncus neque augue nec metus. Ut arcu massa, aliquam imperdiet massa non, malesuada aliquam leo. Ut tortor ex, feugiat et rhoncus pulvinar, sollicitudin eget ligula. Vestibulum felis elit, ornare a porttitor quis, cursus a ex. Integer faucibus et arcu vel malesuada. Maecenas vestibulum leo non nisi hendrerit vulputate.

Proin at lorem ut nunc pulvinar rhoncus. In hac habitasse platea dictumst. Curabitur convallis molestie metus, at sodales ex porttitor ut. Pellentesque odio mauris, sagittis viverra mauris eu, semper pellentesque mi. Nullam et nunc vel felis fermentum varius sed in sem. Nam pharetra ultricies est, id egestas massa pellentesque at."
      />
      <Stack direction="row" spacing={2}>
        
        <Button variant="contained" endIcon={<SendIcon />}>
          Read More
        </Button>
        <Button variant="contained" endIcon={<DeleteIcon />}>
          Delete
        </Button>
      </Stack>
    </Card>
  );
};

export default BlogCard;
