import { Routes, Route } from "react-router-dom";
import { SignUp } from "./auth/signUp/SignUp";
import { LogIn } from "./auth/logIn/LogIn"

function App() {
  return (
      <>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/log-in" element={<LogIn />} />
        </Routes>
      </>
  );
}

export default App;
