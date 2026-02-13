import Nav from "react-bootstrap/Nav";
const MeteoFooter = function () {
  return (
    <footer>
      <Nav className="justify-content-center d-flex flex-column align-items-center bg-primary pt-1">
        <Nav.Item>
          <a href="#top" className="text-light text-decoration-none nav-link">
            Go to top
          </a>
        </Nav.Item>
        <Nav.Item className="mb-2">
          <small className="text-light text-opacity-50">&copy; 2026 Giorgia Formicola</small>
        </Nav.Item>
      </Nav>
    </footer>
  );
};

export default MeteoFooter;
