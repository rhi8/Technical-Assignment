import { Typography, Box } from "@mui/material";
import BlogForm from "./blogform";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import { useEffect, useState } from "react";

const AddBlog = () => {
  const [showNotification, setShowNotification] = useState(false);

  const INITIAL_VALUES = {
    title: "",
    description: "",
  };

  const handleFormSubmit = (values) => {
    console.log(values);

    fetch("/api/addnewblog", {
      method: "POST",
      body: JSON.stringify({ blog: values }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setShowNotification(true);
      });
  };

  useEffect(() => {
    let timer;
    if (showNotification) {
      timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000); // Hide notification after 3 seconds
    }
    return () => clearTimeout(timer);
  }, [showNotification]);

  return (
    <Box py={4}>
      <Typography
        mb={2}
        variant="body1"
        paddingTop="25px"
        sx={(theme) => ({
          ...theme.specialText,
          fontSize: { xs: "30px", sm: "40px" },
        })}
      >
        Add New Blog
      </Typography>

      <BlogForm
        initialValues={INITIAL_VALUES}
        handleFormSubmit={handleFormSubmit}
      />
      {showNotification && (
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
          Here is a gentle confirmation that your blog was successful added.
        </Alert>
      )}
    </Box>
  );
};

export default AddBlog;
