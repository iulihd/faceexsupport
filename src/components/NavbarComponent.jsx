import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavbarComponent(props) {
  const isLogedIn = true && props.token;
  const navigate = useNavigate();

  function handleLogoutButton() {
    sessionStorage.removeItem("token");
    navigate("/");
  }

  return (
    <div>
      <Navbar bg="light" expand="lg" className="pe-3">
        <Navbar.Brand as={Link} to="/" className="navbar-logo-title">
          <img
            src="/FaceExIcon.svg"
            alt="FaceEx Logo"
            className="navbar-logo-img"
          ></img>
          FaceEx
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {isLogedIn && (
              <Nav.Link as={Link} to="/manage" className="text-center">
                Manage
              </Nav.Link>
            )}
            <Nav.Link as={Link} to="/support" className="text-center">
              Support
            </Nav.Link>
            {!isLogedIn && (
              <Nav.Link as={Link} to="/register" className="text-center">
                Register
              </Nav.Link>
            )}
            {!isLogedIn && (
              <Nav.Link as={Link} to="/login" className="text-center">
                Login
              </Nav.Link>
            )}
            {isLogedIn && (
              <Nav.Link onClick={handleLogoutButton} className="text-center">
                Logout
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
