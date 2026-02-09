import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  InputAdornment
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/config";

const LoginForm = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    let tempErrors = {};

    if (!form.username)
      tempErrors.username = "Username is required";
    else if (form.username.length < 3)
      tempErrors.username = "Username must be at least 3 characters";

    if (!form.password)
      tempErrors.password = "Password is required";
    else if (form.password.length < 6)
      tempErrors.password = "Password must be at least 6 characters";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log("Form validated successfully");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      navigate("/token", {
        state: {
          accessToken: user.accessToken,
          name: user.displayName,
        },
      });
    } catch (error) {
      console.error("Google login failed", error);
    }
  };

  return (
    <Box flex={1} display="flex" alignItems="center" justifyContent="center" px={3}>
      <Box width="100%" maxWidth={420}>
        <Typography variant="h3" fontWeight="bold" gutterBottom align="center">
          Welcome back!
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          mb={3}
          align="center"
        >
          Simplify your workflow and boost your productivity with {" "}
          <Typography component="span" color="text.primary" fontWeight="bold">
          Tuga’s App.
          </Typography> 
          {" "}Get started for free.
        </Typography>

        <TextField
          fullWidth
          label="Username"
          name="username"
          value={form.username}
          onChange={handleChange}
          margin="normal"
          error={Boolean(errors.username)}
          helperText={errors.username}
          sx={{ "& .MuiOutlinedInput-root": { borderRadius: "32px" } }}
        />

        <TextField
          fullWidth
          label="Password"
          name="password"
          type={showPassword ? "text" : "password"}
          value={form.password}
          onChange={handleChange}
          margin="normal"
          error={Boolean(errors.password)}
          helperText={errors.password}
          sx={{ "& .MuiOutlinedInput-root": { borderRadius: "32px" } }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Typography
          variant="body2"
          align="right"
          sx={{ cursor: "pointer", mt: 1 }}
        >
          <Link to="#">Forgot Password?</Link>
        </Typography>

        <Button
          fullWidth
          variant="contained"
          onClick={handleSubmit}
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

        <Typography align="center" mt={3} mb={1}>
          or continue with
        </Typography>

        <Box display="flex" justifyContent="center" gap={2}>
          <IconButton onClick={handleGoogleLogin}>
            <GoogleIcon />
          </IconButton>
          <IconButton>
            <AppleIcon />
          </IconButton>
          <IconButton>
            <FacebookIcon />
          </IconButton>
        </Box>

        <Typography align="center" mt={3}>
          Not a member?{" "}
          <span style={{ color: "green", cursor: "pointer" }}>
            <Link to="#">Register now</Link>
          </span>
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginForm;
