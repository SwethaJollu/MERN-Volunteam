import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const location = useLocation();

  // Check if the current location is /login, /signup, or /forgotPassword
  const isLoginOrSignupOrForgotPassword =
    location.pathname === "/" ||
    location.pathname === "/signup" ||
    location.pathname === "/forgotPassword";

  // Render Navbar only if the current location is not /login, /signup, or /forgotPassword
  return (
    <>
      {!isLoginOrSignupOrForgotPassword && <Navbar />}
      <Outlet />
    </>
  );
}

export default App;
