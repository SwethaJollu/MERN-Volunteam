import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import eyeOpenImage from "../assets/eye-open.png";
import eyeCloseImage from "../assets/eye-close.png";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const { token } = useParams();
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/auth/reset-password/" + token, {
        password,
      })
      .then((response) => {
        if (response.data.status) {
          navigate("/");
        }
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="sign-up-container">
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h1>Reset Password</h1>

        <label className="lab" htmlFor="password">
          New Password
        </label>
        <div className="password-input">
          <input
            className="inp"
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <img
            src={showPassword ? eyeOpenImage : eyeCloseImage}
            alt="toggle password visibility"
            id="eyeicon"
            className="password-toggle"
            onClick={togglePasswordVisibility}
          />
        </div>

        <button className="but" type="submit">
          Reset
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
