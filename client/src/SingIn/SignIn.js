import { useState } from "react";
import { useNavigate } from "react-router";
import "./styles/signIn.scss";
import { useForm } from "react-hook-form";
import axios from "axios";
import * as muiSignIn from "./styles/muiSignIn";
function SignIn() {
  const [userNotFound, setUserNotFound] = useState();
  const [signIn, SetSignIn] = useState(false);

  let navigate = useNavigate();
  const noPointer = { cursor: "pointer" };

  function GoToSignUp() {
    navigate("/SignUp");
  }

  function GoToResetPassword() {
    navigate("/ResetPassword");
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data) {
      axios.post("http://localhost:3001/login", { data }).then((res) => {
        if (res.data.length) {
          setUserNotFound("");
          navigate("/Posts");
          SetSignIn(true);
        } else {
          setUserNotFound(res.data.message);
          SetSignIn(false);
        }
      });
    }
  };

  return (
    <div className="inputForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="pSignIn">Sign In</p>
        <muiSignIn.TextField
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
        <muiSignIn.TextField
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
        {userNotFound?.length && (
          <muiSignIn.Alert severity="error" sx={{ mt: 2 }}>
            {userNotFound}
          </muiSignIn.Alert>
        )}

        <muiSignIn.Button
          variant="contained"
          sx={{ mt: 2 }}
          endIcon={<muiSignIn.LoginIcon />}
          type="submit"
        >
          Sign In
        </muiSignIn.Button>

        <muiSignIn.Link sx={{ mt: 2 }} onClick={GoToSignUp} style={noPointer}>
          Do Not have an account?
        </muiSignIn.Link>

        <muiSignIn.Link
          sx={{ mt: 2 }}
          style={noPointer}
          onClick={GoToResetPassword}
        >
          Reset Password
        </muiSignIn.Link>
      </form>
    </div>
  );
}
export default SignIn;
