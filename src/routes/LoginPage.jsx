import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleLoginButton(event) {
    event.preventDefault();
    axios
      .post("http://faceexsupport.com:4000/api/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        sessionStorage.setItem("token", response.data.message);
        setError("");
        navigate("/");
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
  }

  return (
    <div className="loginpage-container">
      <form className="login-form">
        <h2>Login</h2>

        <div className="login-errorfield">{error}</div>
        <div className="login-textfield">
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            required
            autoFocus
          />
          <label>Email Address</label>
          <span />
        </div>
        <div className="login-textfield">
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <label>Password</label>
          <span />
        </div>
        <div className="login-button">
          <button type="submit" onClick={handleLoginButton}>
            Login
          </button>
        </div>
        <div className="signup-link">
          <p>
            Not a member?{" "}
            <Link className="signup-link-link" to="/register">
              {" "}
              Register here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
