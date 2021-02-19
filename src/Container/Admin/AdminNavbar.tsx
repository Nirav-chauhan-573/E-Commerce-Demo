import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";



const AdminNav = () => {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand >E-Commerce Demo</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {/* <Link to="/" style={{ paddingRight: "10px" }}>Home</Link> */}
          <Link to="/Addproduct" style={{ padding: "10px" }}>Add Products</Link>
          <Link to="/Addcategories" style={{ padding: "10px" }}>Add Categories </Link>
          <Link to="/AddSubCategories"style={{ padding: "10px" }}>Add Sub Categories </Link>

          {/* <a onClick={nextPath}>Logout</a> */}

        </Nav>
        <Nav>
          <Link to="/Login" style={{ paddingRight: "10px" }} onClick={() => {
            localStorage.removeItem("UserName");
            localStorage.removeItem("IsAdmin");


          }}>Logout</Link>
          {/* <Link to="/Registration">Registration</Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default AdminNav;
