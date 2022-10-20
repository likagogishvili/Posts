// import CustomInput from "./components/CustomInput";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Link from "@mui/material/Link";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { useNavigate } from "react-router";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

function SignUp() {
  const [registrationData, setRegistrationData] = useState({
    name: "",
    lname: "",
    email: "",
    password: "",
  });

  let navigate = useNavigate();
  function GoToSignIn() {
    let url = window.location.pathname;
    let newurl = url.replace("/SignUp", "/");
    navigate(`${newurl}`, { replace: true });
  }
  const noPointer = { cursor: "pointer" };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <div className="inputForm">
      <ThemeProvider theme={darkTheme}>
        <form>
          <p>Sign Up</p>

          <Box
            sx={{
              display: "flex",
              gap: 1,
              justifyContent: "center",
              width: "80%",
            }}
          >
            <TextField
              required
              sx={{ mt: 1 }}
              id="name"
              label="First Name"
              variant="outlined"
              onChange={(e) =>
                setRegistrationData({
                  ...registrationData,
                  name: e.target.value,
                })
              }
            />
            <TextField
              required
              id="lname"
              sx={{ mt: 1 }}
              label="Last Name"
              variant="outlined"
              onChange={(e) =>
                setRegistrationData({
                  ...registrationData,
                  lname: e.target.value,
                })
              }
            />
          </Box>
          <TextField
            required
            sx={{ mt: 1, width: "80%" }}
            id="email"
            label="Email"
            variant="outlined"
            onChange={(e) =>
              setRegistrationData({
                ...registrationData,
                email: e.target.value,
              })
            }
          />
          <TextField
            required
            sx={{ mt: 1, width: "80%" }}
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            autoComplete="current-password"
            onChange={(e) =>
              setRegistrationData({
                ...registrationData,
                password: e.target.value,
              })
            }
          />
          <Button variant="contained" sx={{ mt: 2 }} endIcon={<VpnKeyIcon />}>
            Create an Account
          </Button>

          <Link sx={{ mt: 2, mb: 2 }} onClick={GoToSignIn} style={noPointer}>
            Already have an account?
          </Link>
        </form>
      </ThemeProvider>
    </div>
  );
}
export default SignUp;
