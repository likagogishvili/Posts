import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./SingIn/SignIn";
import SignUp from "./SignUp/SignUp";
import ResetPassword from "./ResetPassword/ResetPassword";
import Posts from "./Posts/Posts";
import Author from "./Author/Author";
import ChosenPost from "./ChosenPost/ChosenPost";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" excact element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/Posts" element={<Posts />} />
        <Route path="/Author" element={<Author />} />
        <Route path="/Post" element={< ChosenPost/>} />
      </Routes>
    </Router>
  );
}

export default App;
