import { Grid, Typography, Container } from "@mui/material";
import AddBlog from "@/components/addBlog/addblog";


const AddBlogPage =() => {

    return (
        <Container  maxWidth= {"xl"}>
            <AddBlog />
        </Container>
        
    );
};

export default AddBlogPage;