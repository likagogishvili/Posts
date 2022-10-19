import Button from '@mui/material/Button';
import { useState } from "react";
import './styles/signIn.scss'
function SignIn() {
    const [inputedData, setInputedData] = useState({
        email: "",
        password: "",
      });
  return <div className="inputForm">
      <form >
        {/* <CustomInput
          labelText="Email"
          id="email"
          formControlProps={{
            fullWidth: true,
          }}
          onChange={(e) =>
            setInputedData({ ...props.inputedData, email: e.target.value })
          }
          type="text"
        />
        <CustomInput
          labelText="Password"
          id="password"
          formControlProps={{
            fullWidth: true,
          }}
          onChange={(e) =>
            setInputedData({ ...props.inputedData, password: e.target.value })
          }
          type="password"
        /> */}

<Button variant="contained">Contained</Button>

      </form>
  </div>;
}
export default SignIn;
