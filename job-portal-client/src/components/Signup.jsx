import React, { useState , useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";
import { useNavigate } from "react-router-dom";
import eyeOpenImage from "../assets/eye-open.png";
import eyeCloseImage from "../assets/eye-close.png";
import signupb from "../assets/signupb.jpeg";

const Signup = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

   useEffect(() => {
     document.body.style.backgroundImage = `url(${signupb})`;
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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/auth/signup", {
        username,
        email,
        password,
      })
      .then((response) => {
        if (response.data.status) {
          navigate("/");
        } else {
          // setErrorMessage("Email Already Registered");
        }
      })
      .catch((err) => {
        setErrorMessage("Email Already Registered");
        console.log(err);
      });
  };

  return (
    <div className="sign-up-container">
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h1>Sign up</h1>
        <label className="lab" htmlFor="name">
          Name
        </label>
        <input
          className="inp"
          type="text"
          id="name"
          placeholder="Name"
          required
          onChange={(e) => setUserName(e.target.value)}
          onFocus={clearErrorMessage}
        />
        <label className="lab" htmlFor="email">
          Email
        </label>
        <input
          className="inp"
          type="email"
          id="email"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
          onFocus={clearErrorMessage}
        />
        <label className="lab" htmlFor="password">
          Password
        </label>
        <div className="password-input">
          <input
            className="inp"
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
            onFocus={clearErrorMessage}
          />
          <img
            src={showPassword ? eyeOpenImage : eyeCloseImage}
            alt="toggle password visibility"
            id="eyeicon"
            className="password-toggle"
            onClick={togglePasswordVisibility}
          />
        </div>
        <button className="but" type="submit">Sign up</button>
        <p>
          Already Registered?{" "}
          <Link className="link" to="/">
            Login
          </Link>
        </p>
        <p className="error-message">{errorMessage}</p>
      </form>
    </div>
  );
};

export default Signup;
