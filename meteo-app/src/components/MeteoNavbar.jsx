import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";

const MeteoNavbar = function () {
  const location = useLocation();
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" data-bs-theme="dark">
      <Container fluid>
        <Link to="/" className="navbar-brand">
          Meteo-App
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto me-2">
            <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
              Homepage
            </Link>
            <Link to="/your-city" className={location.pathname === "/your-city" ? "nav-link active" : "nav-link"}>
              Your city
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MeteoNavbar;
