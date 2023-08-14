import { Routes, Route } from "react-router-dom";
import { SignUp } from "./auth/signUp/SignUp";
import { LogIn } from "./auth/logIn/LogIn"
import Overview from "./pages/dashboard/Overview";
import Users from "./pages/dashboard/Users";
import Admins from "./pages/dashboard/Admin";
import DashboardLayout from "./pages/dashboard/DashboardLayout";

function App() {
  return (
      <>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/overview" element={<DashboardLayout><Overview /></DashboardLayout>} />
          <Route path="/users" element={<DashboardLayout><Users /></DashboardLayout>} />
          <Route path="/admins" element={<DashboardLayout><Admins /></DashboardLayout>} />
        </Routes>
      </>
  );
}

export default App;
