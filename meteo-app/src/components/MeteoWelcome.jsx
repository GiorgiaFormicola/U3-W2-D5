import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
const MeteoWelcome = function () {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Alert variant="light" className="my-3">
            <Alert.Heading>Welcome on board!</Alert.Heading>
            <hr />
            <p className="mb-0">
              On this app you'll be able to check the meteo of any city you'll desire, having both info about its current meteo and its forecasts for the next
              five days! <br />
              Start with searching a city!
            </p>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};

export default MeteoWelcome;
