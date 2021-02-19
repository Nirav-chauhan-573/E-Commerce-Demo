import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
// import { Redirect } from "react-router-dom";


const ProductNav = () => {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand >E-Commerce Demo</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/Product" style={{ paddingRight: "10px" }}>Product</Link>
          <Link to="/AddToCart" style={{ paddingRight: "10px" }}>Cart</Link>
          <Link to="/Order" style={{ paddingRight: "10px" }}>Orders</Link>
          {/* <Link to="/Profile" style={{ paddingRight: "10px" }}>Profile</Link> */}



        </Nav>
        <Nav>
          <Link to="/" style={{ paddingRight: "10px" }} onClick={() => {
            localStorage.removeItem("UserName");
            localStorage.removeItem("IsAdmin");


          }}>Logout</Link>
          {/* <Link to="/Registration">Registration</Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default ProductNav;
