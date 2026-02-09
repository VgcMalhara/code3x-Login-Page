import { Typography, Box } from "@mui/material";
import { useLocation } from "react-router-dom";

const TokenPage = () => {
  const location = useLocation();
  const { accessToken, name } = location.state || {};

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Welcome, {name} 👋
      </Typography>

      <Typography variant="body1" mb={2}>
        You have successfully logged in using Google.
      </Typography>

      <Typography variant="body2" sx={{ wordBreak: "break-all" }}>
        Access Token:
      </Typography>

      <Typography color="text.secondary">
        {accessToken}
      </Typography>
    </Box>
  );
};

export default TokenPage;
