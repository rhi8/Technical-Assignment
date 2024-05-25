import { Container, Typography } from "@mui/material";
import { Inter } from "next/font/google";
import { Fragment } from "react";

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
    </Fragment>
  );
}
