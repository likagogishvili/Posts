import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import Link from "@mui/material/Link";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router";
import "./styles/signIn.scss";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import axios from "axios";
function SignIn() {
  // eslint-disable-next-line
  const [inputedData, setInputedData] = useState();
  let navigate = useNavigate();
  const noPointer = { cursor: "pointer" };

  function GoToSignUp() {
    navigate("/SignUp");
  }

  function GoToResetPassword() {
    navigate("/ResetPassword");
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
    if (data) {
      axios.post("http://localhost:3001/login", { data }).then((res) => {
        if (res.data.length) {
          setInputedData(res.data);
          navigate("/Posts");
        }else{
          console.log(res)
        }
      });
    }
  };

  useEffect(() => {
    if (inputedData) {
      console.log("here");
      axios.post("http://localhost:3001/login", { inputedData }).then((res) => {
        console.log(res.data);
      });
    }
  }, [inputedData]);
  return (
    <div className="inputForm">
      <ThemeProvider theme={darkTheme}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="pSignIn">Sign In</p>
          <TextField
            required
            sx={{ mt: 1, width: "80%" }}
            id="username"
            label="Username"
            variant="outlined"
            {...register("name", { required: "Required" })}
            error={!!errors?.name}
            helperText={errors?.name ? errors.name.message : null}
          />
          <TextField
            required
            sx={{ mt: 1, width: "80%" }}
            id="password"
            label="Password"
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

          <Button
            variant="contained"
            sx={{ mt: 2 }}
            endIcon={<LoginIcon />}
            type="submit"
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
