import Nav from "react-bootstrap/Nav";
import { Link, useLocation } from "react-router-dom";
const MeteoFooter = function () {
  const location = useLocation();
  return (
    <footer>
      <Nav className="justify-content-center d-flex flex-column align-items-center bg-primary pt-1">
        <Nav.Item>
          <Link to={location.pathname} className="nav-link link-light">
            Go to top
          </Link>
        </Nav.Item>
        <Nav.Item className="mb-2">
          <small className="text-light text-opacity-50">&copy; 2026 Giorgia Formicola</small>
        </Nav.Item>
      </Nav>
    </footer>
  );
};

export default MeteoFooter;
