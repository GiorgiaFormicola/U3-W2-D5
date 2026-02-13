import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MeteoNavbar from "./components/MeteoNavbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <MeteoNavbar />
        {/* <MeteoWelcome /> */}
        {/* <Routes>
          <Route path="/" element={<MeteoHome />} />
          <Route path="/details/:city" element={<MeteoDetails />} />
          <Route path="*" element={<MeteoNotFound />} />
        </Routes>
        <MeteoFooter /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
