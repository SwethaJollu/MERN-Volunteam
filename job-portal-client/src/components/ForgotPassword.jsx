import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import op2 from "../assets/op2.jpg";
import { useNavigate, Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.backgroundImage = `url(${op2})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.overflow = "hidden"; // Prevent scrolling if image is larger than viewport
    document.body.style.margin = "0"; // Ensure no margin
    document.body.style.padding = "0"; // Ensure no padding
    document.documentElement.style.height = "100%"; // Ensure HTML element covers entire viewport height
    document.body.style.height = "100%"; // Ensure body element covers entire viewport height
    return () => {
      document.body.style.backgroundImage = ""; // Reset background image when component unmounts
      document.body.style.overflow = ""; // Reset overflow property
      document.body.style.margin = ""; // Reset margin
      document.body.style.padding = ""; // Reset padding
      document.documentElement.style.height = ""; // Reset HTML element height
      document.body.style.height = ""; // Reset body element height
    };
  }, []);

  const clearErrorMessage = () => {
    setErrorMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/auth/forgot-password", {
        email,
      })
      .then((response) => {
        if (response.data.status) {
          alert("Reset Password link sent Successfully to " + email);
          navigate("/");
        } else {
          setErrorMessage("Please Enter Registered Email");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="sign-up-container">
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h1>
          <b>Reset Password</b>
        </h1>
        <br />

        <div className="form-group">
          <label htmlFor="email">Email : </label>
          <br />
          <br />
          <input
            type="email"
            placeholder=" Enter your Email"
            onChange={(e) => setEmail(e.target.value)}
            onFocus={clearErrorMessage}
            required
          />
        </div>

        <div className="form-group">
          <button className="btn-submit" type="submit">
            Send
          </button>
        </div>

        <div className="form-group">
          <p>
            New User?{" "}
            <Link className="link" to="/signup">
              Sign up
            </Link>
          </p>
        </div>

        <p className="error-message">{errorMessage}</p>
      </form>
    </div>
  );
};

export default ForgotPassword;
