import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import { useState } from "react";
const apiKey = "8c213aae94d24bcb33da8a0f54e3d6e1";

const MeteoSearchbar = function (props) {
  const [cityName, setCityName] = useState("");
  const [countryCode, setCountryCode] = useState("");

  return (
    <section>
      <Container fluid>
        <Alert className=" border-3 mb-0">
          <h2 className="text-center text-secondary mb-3">Search the city you want to have info about it</h2>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              props.setCurrentWeatherURL(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&appid=${apiKey}`);
              setCityName("");
              setCountryCode("");
            }}
          >
            <Row className="justify-content-center">
              <Col md={6} className="mb-3 mb-md-0">
                <Form.Control
                  required
                  type="text"
                  placeholder="Type the name of the city here..."
                  className=" mr-sm-2"
                  value={cityName}
                  onChange={(e) => {
                    setCityName(e.target.value);
                  }}
                />
              </Col>
              <Col md={4} className="mb-3 mb-md-0">
                <Form.Control
                  required
                  type="text"
                  placeholder="Type the country here..."
                  className=" mr-sm-2"
                  value={countryCode}
                  onChange={(e) => {
                    setCountryCode(e.target.value);
                  }}
                />
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
