import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MeteoFooter from "./components/MeteoFooter";
import MeteoHeader from "./components/MeteoHeader";

function App() {
  return (
    <>
      <BrowserRouter>
        <MeteoHeader />
        {/* <Routes>
          <Route path="/" element={<MeteoHome />} />
          <Route path="/details/:city" element={<MeteoDetails />} />
          <Route path="*" element={<MeteoNotFound />} />
        </Routes>
         */}
        <MeteoFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
