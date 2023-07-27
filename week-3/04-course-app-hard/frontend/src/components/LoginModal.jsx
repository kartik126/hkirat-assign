import React, { useState } from "react";
import { Button, Modal, Box, TextField } from "@mui/material";

const LoginModal = ({ isOpen, onClose }) => {

  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Implement your login logic here using 'email' and 'password' state values
    console.log("Login button clicked!");
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 300,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 2,
        }}
      >
        <h2>Login</h2>
        <TextField
          fullWidth
          label="Email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter your password"
          variant="outlined"
          margin="normal"
        />
        <Button variant="contained" onClick={handleLogin}>
          Login
        </Button>
        <Button variant="outlined" onClick={onClose}>
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default LoginModal;
