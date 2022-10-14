import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

export default function Homepage() {
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  function handleLogout(event) {
    sessionStorage.removeItem("token");
    setToken("");
    navigate("/");
  }

  function handleNavigation(event) {
    navigate(event.target.name);
  }

  useEffect(() => {
    const _token = sessionStorage.getItem("token");
    if (_token) {
      setUser(jwt_decode(_token).firstName);
      setToken(_token);
    }
  }, []);

  return (
    <div className="homepage-container">
      <div className="homepage-title">FACEEX SUPPORT PORTAL</div>
      <div className="homepage-buttons-container">
        <div className="homepage-welcome">Welcome {user}</div>
        {!token && (
          <button
            className="homepage-button"
            onClick={handleNavigation}
            name="/login"
          >
            Login
          </button>
        )}
        {!token && (
          <button
            className="homepage-button"
            onClick={handleNavigation}
            name="/register"
          >
            Register
          </button>
        )}
        {token && (
          <button
            className="homepage-button"
            onClick={handleNavigation}
            name="/manage"
          >
            Manage
          </button>
        )}
        <button
          className="homepage-button"
          onClick={handleNavigation}
          name="/support"
        >
          Support
        </button>
        {token && (
          <button className="homepage-button" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
}
