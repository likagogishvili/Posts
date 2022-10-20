import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./SingIn/SignIn";
import SignUp from "./SignUp/SignUp";
import ResetPassword from "./ResetPassword/ResetPassword";
import Posts from "./Posts/Posts";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" excact element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/Posts" element={<Posts />} />

      </Routes>
    </Router>
  );
}

export default App;
