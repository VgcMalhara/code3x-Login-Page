import React from "react";
import { Box, Typography } from "@mui/material";
import LoginForm from "../components/LoginForm";
import illustration from "../assets/illustration.svg";

const Login = () => {
  return (
    <Box display="flex" minHeight="100vh">

      {/* LEFT SIDE */}
      <LoginForm />

      {/* RIGHT SIDE */}
      <Box
        flex={1}
        display={{ xs: "none", md: "flex" }}
        alignItems="center"
        justifyContent="center"
        sx={{ backgroundColor: "#f2faf5", m: 4, borderRadius: "18px" }}
      >
        <Box textAlign="center" display="flex" flexDirection="column" alignItems="center" px={3}>
          <img src={illustration} alt="illustration" style={{ width: "100%", maxWidth: 480 }} />
          <Typography mt={3}  variant="h6" color="text.secondary">Make your work easier and organized</Typography>
          <Typography color="text.secondary" variant="h6" >
            with{' '}
            <Typography component="span" variant="h6" color="text.primary" fontWeight="bold">
              Tuga’s App
            </Typography>
          </Typography>
        </Box>
      </Box>

    </Box>
  );
};

export default Login;
