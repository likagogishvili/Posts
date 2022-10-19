import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from './SingIn/SignIn';
import SignUp from './SignUp/SignUp';
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          excact
          element={
            <SignIn
            />
          }
        />
        <Route
          path="/SignUp"
          element={
            <SignUp />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
