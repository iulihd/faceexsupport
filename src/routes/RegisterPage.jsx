import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function RegisterPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  function handleRegisterButton(event) {
    event.preventDefault();
    axios
      .post("http://localhost:4000/api/register", {
        email: email,
        password: password,
        firstName: fname,
        lastName: lname,
      })
      .then((response) => {
        console.log(response);
        setError("");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.response);
        setError(error.response.data.message);
      });
  }

  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [lname, setLname] = useState("");
  const [fname, setFname] = useState("");

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  function handleLnameChange(event) {
    setLname(event.target.value);
  }
  function handleFnameChange(event) {
    setFname(event.target.value);
  }
  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
  }

  return (
    <div>
      <div className="registerpage-container">
        <form className="register-form">
          <h2>Register</h2>

          <div className="login-errorfield">{error}</div>
          <div className="login-textfield">
            <input
              type="text"
              value={fname}
              onChange={handleFnameChange}
              required
              autoFocus
            />
            <label>First Name</label>
            <span />
          </div>
          <div className="login-textfield">
            <input
              type="text"
              value={lname}
              onChange={handleLnameChange}
              required
            />
            <label>Last Name</label>
            <span />
          </div>
          <div className="login-textfield register-email">
            <input
              type="text"
              value={email}
              onChange={handleEmailChange}
              required
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
          <div className="login-textfield">
            <input
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
            <label>Confirm Password</label>
            <span />
          </div>
          <div className="login-button register-login">
            <button type="submit" onClick={handleRegisterButton}>
              Sign in
            </button>
          </div>
          <div className="signup-link register-already">
            <p>
              Already signed in?{" "}
              <Link className="signup-link-link" to="/login">
                {" "}
                Login here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
