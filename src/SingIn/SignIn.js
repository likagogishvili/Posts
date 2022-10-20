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
  const [nameError, setNameError] = useState("");
  const [passwordError, setpasswordError] = useState("");

  let navigate = useNavigate();
  const noPointer = { cursor: "pointer" };

  function GoToSignUp() {
    navigate("/SignUp");
  }

  function GoToResetPassword() {
    navigate("/ResetPassword");
  }

  function GoToPosts(event) {
    event.preventDefault();
    if (inputedData.username.length === 0) {
      setNameError("Please Fill Up The Username Form Correctly");
    }
    if (inputedData.password.length === 0 || inputedData.password.length < 8) {
      setpasswordError("Please Fill Up The Password Form Correctly");
    } else {
      navigate("/Posts");
    }
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
          <p className="pSignIn">Sign In</p>
          <TextField
            required
            id="username"
            label="Username"
            variant="outlined"
            error={nameError !== ""}
            helperText={nameError !== "" ? nameError : " "}
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
            error={passwordError !== ""}
            helperText={passwordError !== "" ? passwordError : " "}
            onChange={(e) =>
              setInputedData({ ...inputedData, password: e.target.value })
            }
          />

          <Button
            variant="contained"
            sx={{ mt: 2 }}
            endIcon={<LoginIcon />}
            onClick={(event) => GoToPosts(event)}
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
