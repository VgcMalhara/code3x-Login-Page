import React from "react";
import { Box, TextField, Button, Typography, IconButton } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";
import illustration from "../assets/illustration.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Box display="flex" minHeight="100vh">
      
      {/* LEFT SIDE – LOGIN FORM */}
      <Box
        flex={1}
        display="flex"
        alignItems="center"
        justifyContent="center"
        px={3}
      >
        <Box width="100%" maxWidth={420}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Welcome back!
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={3}>
            Simplify your workflow and boost your productivity with Tuga’s App.
          </Typography>
          <TextField fullWidth label="Username" margin="normal" />
          <TextField fullWidth label="Password" type="password" margin="normal" />
          <Typography variant="body2" align="right" sx={{ cursor: "pointer", mt: 1 }}>
            Forgot Password?
          </Typography>
          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              py: 1.4,
              borderRadius: 5,
              backgroundColor: "black",
              "&:hover": { backgroundColor: "#222" },
            }}
          >
            LOGIN
          </Button>
          <Typography align="center" mt={3} mb={1}>or continue with</Typography>
          <Box display="flex" justifyContent="center" gap={2}>
            <IconButton><GoogleIcon /></IconButton>
            <IconButton><AppleIcon /></IconButton>
            <IconButton><FacebookIcon /></IconButton>
          </Box>
          <Typography align="center" mt={3}>
            Not a member? <span style={{ color: "green", cursor: "pointer" }}><Link href="#" target="_blank" rel="noopener">Register now</Link></span>
          </Typography>
        </Box>
      </Box>

      {/* RIGHT SIDE – ILLUSTRATION */}
      <Box
        flex={1}
        display={{ xs: "none", md: "flex" }}
        alignItems="center"
        justifyContent="center"
        sx={{ backgroundColor: "#F3FAF5" }}
      >
        <Box textAlign="center" display="flex" flexDirection="column" alignItems="center" px={3}>
          <img src={illustration} alt="illustration" style={{ width: "100%", maxWidth: 480 }} />
          <Typography mt={3} fontWeight="bold">Make your work easier and organized</Typography>
          <Typography color="text.secondary">with Tuga’s App</Typography>
        </Box>
      </Box>

    </Box>
  );
};

export default Login;
