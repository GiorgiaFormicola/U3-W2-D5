import MeteoSearchbar from "./MeteoSearchbar";
import { useState } from "react";

const MeteoHome = function () {
  const [currentWeatherURL, setCurrentWeatherURL] = useState(null);
  return (
    <main className="flex-grow-1">
      <MeteoSearchbar setCurrentWeatherURL={setCurrentWeatherURL}></MeteoSearchbar>
    </main>
  );
};

export default MeteoHome;
