import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";

const MeteoNotFound = function () {
  return (
    <main className="flex-grow-1 align-content-center">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} lg={6} className="text-center">
            <Alert variant="warning" className="">
              <Alert.Heading className="py-4">Oops, something went wrong!</Alert.Heading>
              <hr />
              <p className="mb-0 py-3">
                We're sorry! Go back to the
                <span> </span>
                <Link to="/" className="link-dark fw-bold link-underline-opacity-0">
                  homepage
                </Link>
                <span> </span>
                to search for a new forecast!
              </p>
            </Alert>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default MeteoNotFound;
