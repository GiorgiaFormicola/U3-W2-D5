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
              five days! What's more you can check the meteo of some of the most famous cities in the world, and mostly important the meteo of your city!
            </p>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};

export default MeteoWelcome;
