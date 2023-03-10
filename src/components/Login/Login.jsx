import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Box, TextField, Button } from "@mui/material";

//User Login
import { login } from "../../utilities/service/user";

const Login = ({ colors, setUser }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  //Navigate to other Pages
  const navigate = useNavigate();

  //Handle User Login State Change
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  //Handle User Login
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login(credentials);
    console.log(user);
    setUser(user);
    navigate("/dashboard");
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "250px" },
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mt: "20px",
      }}
      noValidate
      autoComplete="off"
      display="flex"
      onSubmit={handleSubmit}
    >
      <TextField
        required
        id="outlined"
        label="Email"
        value={credentials.email}
        name="email"
        onChange={handleChange}
      />
      <TextField
        required
        id="outlined"
        label="Password"
        value={credentials.password}
        name="password"
        type="password"
        onChange={handleChange}
        autoComplete="current-password"
      />
      <Button
        style={{
          color: colors.primary[100],
          border: `1px solid ${colors.primary[100]}`,
        }}
        type="submit"
      >
        Login
      </Button>
    </Box>
  );
};

export default Login;
