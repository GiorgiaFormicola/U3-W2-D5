import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CurrentMeteoComponent = function (props) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentMeteo, setCurrentMeteo] = useState(null);
  const navigate = useNavigate();

  const getCurrentMeteo = function () {
    fetch(props.currentWeatherURL)
      .then((response) => {
        if (response.ok) {
          setLoading(false);
          return response.json();
        } else {
          throw new Error("Error in gettin the meteo info");
        }
      })
      .then((currentMeteoData) => {
        console.log(currentMeteoData);
        setCurrentMeteo(currentMeteoData);
      })
      .catch((error) => {
        console.log("ERROR", error);
        setLoading(false);
        setError(true);
        navigate("/error");
      });
  };

  useEffect(() => {
    getCurrentMeteo();
  }, [props.currentWeatherURL]);

  return (
    <Container fluid className="align-content-center text-secondary">
      {currentMeteo && (
        <>
          <Row className="text-center py-3 mx-1 flex-column align-items-center">
            <Col xs={12} md={6} lg={4} xl={3} className="bg-light-subtle rounded-top-3 shadow-lg py-3">
              <h3 className="mb-0 mt-2">Current meteo for</h3>
              <h1 className="my-4">
                {currentMeteo.name}, {currentMeteo.sys.country}
              </h1>
              <div>
                <h5 className="mb-3">Temperature</h5>
                <p> MIN: {Math.round(currentMeteo.main.temp_min - 273.15)} °</p>
                <p> CURRENT: {Math.round(currentMeteo.main.temp - 273.15)} °</p>
                <p> MAX: {Math.round(currentMeteo.main.temp_max - 273.15)}°</p>
                <p> FEELS LIKE: {Math.round(currentMeteo.main.feels_like - 273.15)}° </p>
                <h5 className="mb-3">Description</h5>
                <p className="mb-1">{currentMeteo.weather[0].description.charAt(0).toUpperCase() + currentMeteo.weather[0].description.slice(1)}</p>
              </div>
            </Col>
            <Col
              style={{ cursor: "pointer" }}
              xs={12}
              md={6}
              lg={4}
              xl={3}
              className="bg-primary bg-opacity-75 rounded-bottom-3 shadow-lg py-2 text-white"
              onClick={() => {
                navigate("/details/" + currentMeteo.name + "/" + currentMeteo.sys.country);
              }}
            >
              <h4 className="mb-0 py-1">Click for more info</h4>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default CurrentMeteoComponent;
