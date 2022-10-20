import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Link from "@mui/material/Link";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router";
import "./styles/signIn.scss";
import { ThemeProvider, createTheme } from "@mui/material/styles";
function SignIn() {

  const [inputedData, setInputedData] = useState({
    username: "",
    password: "",
  });
  let navigate = useNavigate();
  let url = window.location.pathname;

  const noPointer = { cursor: "pointer" };

  function GoToSignUp() {
    let newurl = url.replace("/", "/SignUp");
    navigate(`${newurl}`, { replace: true });
  }

  function GoToResetPassword() {
    let newurl = url.replace("/", "/ResetPassword");
    navigate(`${newurl}`, { replace: true });
  }

  function GoToPosts() {
    let newurl = url.replace("/", "/Posts");
    navigate(`${newurl}`, { replace: true });
  }


  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  
  return (
    <div className="inputForm">
      <ThemeProvider theme={darkTheme}>
        <form>
          <p>Sign In</p>
          <TextField
            required
            id="username"
            label="Username"
            variant="outlined"
            onChange={(e) =>
              setInputedData({ ...inputedData, username: e.target.value })
            }
          />
          <TextField
            required
            sx={{ mt: 1 }}
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            autoComplete="current-password"
            onChange={(e) =>
              setInputedData({ ...inputedData, password: e.target.value })
            }
          />

          <Button
            variant="contained"
            sx={{ mt: 2 }}
            endIcon={<LoginIcon />}
            onClick={GoToPosts}
          >
            Sign In
          </Button>

          <Link sx={{ mt: 2 }} onClick={GoToSignUp} style={noPointer}>
            Do Not have an account?
          </Link>

          <Link sx={{ mt: 2 }} style={noPointer} onClick={GoToResetPassword}>
            Reset Password
          </Link>
        </form>
      </ThemeProvider>
    </div>
  );
}
export default SignIn;
