import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/esm/Container";
const MeteoWelcome = function () {
  return (
    <Alert variant="light" className="my-3 mx-2">
      <Alert.Heading>Welcome on board!</Alert.Heading>
      <hr />
      <p className="mb-0">
        On this app you'll be able to check the meteo of any city you'll desire, having both info about its current meteo and its forecasts for the next five
        days! What's more you can check the meteo of some of the most famous cities in the world, and mostly important the meteo of your city!
      </p>
    </Alert>
  );
};

export default MeteoWelcome;
