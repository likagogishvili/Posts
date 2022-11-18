// import CustomInput from "./components/CustomInput";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Link from "@mui/material/Link";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { useNavigate } from "react-router";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { useForm } from "react-hook-form";

function SignUp() {
  // eslint-disable-next-line
  const [registrationData, setRegistrationData] = useState();
  let navigate = useNavigate();
  function GoToSignIn() {
    navigate("/SignIn");
  }
  const noPointer = { cursor: "pointer" };

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
    setRegistrationData(data);
    alert("Account Created");
    navigate("/");
  };
  return (
    <div className="inputForm">
      <ThemeProvider theme={darkTheme}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="pSignIn">Sign Up</p>
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
              {...register("name", { required: "Required" })}
              error={!!errors?.name}
              helperText={errors?.name ? errors.name.message : null}
            />
            <TextField
              required
              id="lname"
              sx={{ mt: 1 }}
              label="Last Name"
              variant="outlined"
              {...register("lname", { required: "Required" })}
              error={!!errors?.lname}
              helperText={errors?.lname ? errors.lname.message : null}
            />
          </Box>
          <TextField
            required
            sx={{ mt: 1, width: "80%" }}
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
            endIcon={<VpnKeyIcon />}
            // onClick={SignUp}
            type="submit"
          >
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
