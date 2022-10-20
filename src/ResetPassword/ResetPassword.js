import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Link from "@mui/material/Link";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router";
import { ThemeProvider, createTheme } from "@mui/material/styles";
function ResetPassword() {
  const [inputedData, setInputedData] = useState({
    email: "",
    newPassword: "",
  });
  let navigate = useNavigate();
  const noPointer = { cursor: "pointer" };
  function GoToSignIn() {
    let url = window.location.pathname;
    let newurl = url.replace("/ResetPassword", "/");
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
            id="email"
            label="Email"
            variant="outlined"
            onChange={(e) =>
              setInputedData({ ...inputedData, email: e.target.value })
            }
          />
          <TextField
            required
            sx={{ mt: 1 }}
            id="password"
            label="New Password"
            type="password"
            variant="outlined"
            autoComplete="current-password"
            onChange={(e) =>
              setInputedData({ ...inputedData, newPassword: e.target.value })
            }
          />

          <Button variant="contained" sx={{ mt: 2 }} endIcon={<LoginIcon />}>
            Change Password
          </Button>
          <Link sx={{ mt: 2, mb: 2 }} onClick={GoToSignIn} style={noPointer}>
            Already have an account?
          </Link>
        </form>
      </ThemeProvider>
    </div>
  );
}
export default ResetPassword;
