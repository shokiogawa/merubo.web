import { Box, Container, Typography } from "@mui/joy";
import Link from "next/link";
import Store from "./Store";
import MeruboIcon from "./MeruboIcon";
export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        textAlign: "center",
        height: "400px",
        border: "solid 1px rgba(255, 161, 51, 1)",
        // padding: "10px 0px",
        margin: "20px 0px",
        backgroundColor: "rgba(255, 161, 51, 0.2)",
      }}
    >
      <Container sx={{ padding: "40px 0px 0px" }}>
        <MeruboIcon />
        <Store />
        <Typography component="p" sx={{ paddingTop: "15px", fontSize: "17px" }}>
          Copyright © 2023 shouki. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};
