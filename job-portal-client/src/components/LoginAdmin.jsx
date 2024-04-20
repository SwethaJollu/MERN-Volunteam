import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginAdmin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // State to hold error message
  const navigate = useNavigate(); // Using useNavigate hook for navigation

  const handleLogin = (event) => {
    event.preventDefault(); // Prevents default form submission behavior

    // Reset error states
    setEmailError(false);
    setPasswordError(false);
    setErrorMessage("");

    // Check if the email and password match
    if (email === "swethajollu2002@gmail.com" && password === "9346191251") {
      // If the credentials match, navigate to the admin dashboard
      navigate("/post-job");
    } else {
      // If credentials don't match, set error message and highlight invalid inputs
      if (!email) {
        setEmailError(true);
      }
      if (!password) {
        setPasswordError(true);
      }
      setErrorMessage("Invalid credentials");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div>
        <h1 className="ad">
          <b>Admin Login</b>
        </h1><br/>
        <form onSubmit={handleLogin}>
          <div className="input-container">
            <label>Email:</label>
            <input
              className={emailError ? "inp invalid" : "inp"}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div><br/>
          <div className="input-container">
            <label>Password:</label>
            <input
              className={passwordError ? "inp invalid" : "inp"}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div><br/>
          <button className="but" type="submit">
            Login
          </button>
        </form>
        {/* Render error message at the bottom */}
        {errorMessage && (
          <div style={{ color: "red", fontWeight: "bold", marginTop: "10px" }}>
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginAdmin;
