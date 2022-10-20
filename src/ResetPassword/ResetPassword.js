import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Link from "@mui/material/Link";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useForm } from "react-hook-form";

function ResetPassword() {
  // eslint-disable-next-line
  const [resetPasswordData, setResetPasswordData] = useState();
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setResetPasswordData(data);
    alert("Password Updated");
    navigate("/");
  };
  return (
    <div className="inputForm">
      <ThemeProvider theme={darkTheme}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="pSignIn">Reset Password</p>
          <TextField
            required
            id="email"
            label="Email"
            variant="outlined"
            {...register("email", {
              required: "Required field",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            error={!!errors?.email}
            helperText={errors?.email ? errors.email.message : null}

          />
          <TextField
            required
            sx={{ mt: 1 }}
            id="password"
            label="New Password"
            type="password"
            variant="outlined"
            autoComplete="current-password"
               {...register("password", {
              required: "Required field",
              pattern: {
                value: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                message:
                  "Invalid password It must be min 8 letter password, with at least a symbol, upper and lower case letters and a number",
              },
            })}
            error={!!errors?.password}
            helperText={errors?.password ? errors.password.message : null}
          />

          <Button variant="contained" sx={{ mt: 2 }} endIcon={<LoginIcon />} type='submit'>
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
