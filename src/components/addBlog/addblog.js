import { Typography, Box } from "@mui/material";
import BlogForm from "./blogform";











const AddBlog = () => {

    const INITIAL_VALUES = {
        title: "",
        description: ""
      };
    
      const handleFormSubmit = values => {
        console.log(values);
      };
    
      return <Box py={4}>
          <Typography mb={2} variant="body1"
          paddingTop="25px"
          sx={(theme) => ({
            ...theme.specialText,
            fontSize: { xs: "30px", sm:"40px" },
          })}>Add New Blog</Typography>
    
          <BlogForm initialValues={INITIAL_VALUES} handleFormSubmit={handleFormSubmit} />
        </Box>;


};

export default AddBlog;