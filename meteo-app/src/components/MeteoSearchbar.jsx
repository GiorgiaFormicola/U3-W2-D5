import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

const MeteoSearchbar = function () {
  return (
    <section>
      <Container fluid>
        <Alert className=" border-3">
          <h2 className="text-center text-secondary mb-3">Search the city you want to have info about</h2>
          <Form>
            <Row className="justify-content-center">
              <Col md={6} className="mb-3 mb-md-0">
                <Form.Control type="text" placeholder="Type the name of the city here..." className=" mr-sm-2" />
              </Col>
              <Col md={4} className="mb-3 mb-md-0">
                <Form.Control type="text" placeholder="Type the country code here..." className=" mr-sm-2" />
              </Col>
              <Col md={2} className="d-flex flex-column">
                <Button type="submit" className="bg-primary bg-opacity-75 border-0 fw-medium">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Alert>
      </Container>
    </section>
  );
};
export default MeteoSearchbar;
