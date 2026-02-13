import CurrentMeteoComponent from "./CurrentMeteoComponent";
import MeteoSearchbar from "./MeteoSearchbar";
import { useState } from "react";
const apiKey = "8c213aae94d24bcb33da8a0f54e3d6e1";

const MeteoHome = function () {
  const [currentWeatherURL, setCurrentWeatherURL] = useState(`https://api.openweathermap.org/data/2.5/weather?q=rome,it&appid=${apiKey}`);
  return (
    <main className="flex-grow-1 d-flex flex-column">
      <MeteoSearchbar setCurrentWeatherURL={setCurrentWeatherURL}></MeteoSearchbar>
      <CurrentMeteoComponent currentWeatherURL={currentWeatherURL}></CurrentMeteoComponent>
    </main>
  );
};

export default MeteoHome;
