import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
// import { Redirect } from "react-router-dom";


const FrontNav = () => {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>E-Commerce Demo</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/" style={{ paddingRight: "10px" }}>Home</Link>
          <Link to="/" style={{ paddingRight: "10px" }}>About Us</Link>
          <Link to="/">Contact Us</Link>
          {/* <a onClick={nextPath}>Logout</a> */}

        </Nav>
        <Nav>
          <Link to="/Login" style={{ paddingRight: "10px" }}>Login</Link>
          <Link to="/Registration">Registration</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default FrontNav;
