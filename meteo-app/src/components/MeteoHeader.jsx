import { useLocation } from "react-router-dom";
import MeteoNavbar from "./MeteoNavbar";
import MeteoWelcome from "./MeteoWelcome";

const MeteoHeader = function () {
  const location = useLocation();
  return (
    <header>
      <MeteoNavbar />
      {location.pathname === "/" && <MeteoWelcome />}
    </header>
  );
};
export default MeteoHeader;
