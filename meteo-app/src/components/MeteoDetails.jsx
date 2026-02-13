import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
const apiKey = "1f6d80a9f986d3ef0f8760677fe6965f";

const MeteoDetails = function () {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [forecast, setForecast] = useState(null);

  const navigate = useNavigate();
  const params = useParams();
  const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${params.city},${params.country}&appid=${apiKey}`;
  console.log(forecastURL);

  const getMeteoForecast = function () {
    fetch(forecastURL)
      .then((response) => {
        if (response.ok) {
          setLoading(false);
          console.log(response);
          return response.json();
        } else {
          throw new Error("Error in getting the forecast info");
        }
      })
      .then((forecastData) => {
        console.log(forecastData);
        setForecast(forecastData);
      })
      .catch((error) => {
        console.log("ERROR", error);
        setLoading(false);
        setError(true);
        navigate("/error");
      });
  };

  useEffect(() => {
    getMeteoForecast();
  }, []);

  return (
    <main className="flex-grow-1 d-flex flex-column">
      <Container fluid className="text-secondary-emphasis pb-4">
        {forecast && (
          <Row className="gap-4 justify-content-center">
            <Col xs={12} className="text-center">
              <h3 className="mb-0 mt-5">Forecast details for</h3>
              <h1 className="my-3">
                {forecast.city.name}, {forecast.city.country}
              </h1>
            </Col>
            {forecast.list.map((element) => {
              return (
                <>
                  <Col xs={12} sm={6} md={4} lg={3} xl={2} className="bg-primary bg-opacity-25 rounded-3 py-3 text-center shadow-sm" key={element.dt}>
                    <h6 className="">
                      Date and time: <br />
                      {element.dt_txt}
                    </h6>
                    <h5 className="mb-3">Temperature</h5>
                    <p> MIN: {Math.round(element.main.temp_min - 273.15)} °</p>
                    <p> CURRENT: {Math.round(element.main.temp - 273.15)} °</p>
                    <p> MAX: {Math.round(element.main.temp_max - 273.15)}°</p>
                    <p> FEELS LIKE: {Math.round(element.main.feels_like - 273.15)}° </p>
                    <h5 className="mb-3">Description</h5>
                    <p className="mb-1">{element.weather[0].description.charAt(0).toUpperCase() + element.weather[0].description.slice(1)}</p>
                  </Col>
                </>
              );
            })}
          </Row>
        )}
      </Container>
    </main>
  );
};
export default MeteoDetails;
