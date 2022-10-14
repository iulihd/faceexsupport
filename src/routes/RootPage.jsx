import React, { useState, useEffect } from "react";
import NavbarComponent from "../components/NavbarComponent";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import FooterComponent from "../components/FooterComponent";
import jwt_decode from "jwt-decode";

export default function RootPage() {
  const [token, setToken] = useState();
  let location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const _token = sessionStorage.getItem("token");

    if (_token) {
      if (new Date(parseInt(jwt_decode(_token).exp) * 1000) < new Date()) {
        sessionStorage.removeItem("token");
        return navigate("/login");
      }
    }
    setToken(_token);
  }, [location]);

  return (
    <div className="main-grid-container">
      <NavbarComponent token={token} className="header" />
      <Outlet className="content" />
      <FooterComponent className="footer" />
    </div>
  );
}
