import React, { useState } from "react";

import { Box, useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

//Components
import SignUp from "../../components/SignUp/SignUp";
import Login from "../../components/Login/Login";
import GoogleOAuth from "../../components/GoogleOAuth/GoogleOAuth";

//Color Theme
import { tokens } from "../../theme";

const Landing = ({ user, setUser }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [button, setButton] = useState("Login");

  return (
    <>
      <Box sx={{ height: "5vh" }}></Box>
      {!user && (
        <>
          <Box
            sx={{ justifyContent: "center", alignItems: "center" }}
            display="flex"
          >
            <ButtonGroup
              variant="outlined"
              aria-label="outlined primary button group"
              size="large"
            >
              <Button
                style={{
                  color: colors.primary[100],
                  border: `1px solid ${colors.primary[100]}`,
                }}
                onClick={() => setButton("SignUp")}
              >
                Sign Up
              </Button>
              <Button
                style={{
                  color: colors.primary[100],
                  border: `1px solid ${colors.primary[100]}`,
                }}
                onClick={() => setButton("Login")}
              >
                Login
              </Button>
              <Button
                style={{
                  color: colors.primary[100],
                  border: `1px solid ${colors.primary[100]}`,
                }}
                onClick={() => setButton("GoogleOAuth")}
              >
                Google Auth
              </Button>
            </ButtonGroup>
          </Box>
          <Box
            sx={{
              //   height: "40vh",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            display="flex"
          >
            {button === "Login" && <Login colors={colors} setUser={setUser} />}
            {button === "SignUp" && (
              <SignUp colors={colors} setUser={setUser} />
            )}
            {button === "GoogleOAuth" && (
              <GoogleOAuth colors={colors} setUser={setUser} />
            )}
          </Box>
        </>
      )}
    </>
  );
};

export default Landing;
