import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MeteoFooter from "./components/MeteoFooter";
import MeteoHeader from "./components/MeteoHeader";
import MeteoHome from "./components/MeteoHome";

function App() {
  return (
    <>
      <div className="min-vh-100 bg-primary-subtle d-flex flex-column justify-content-center">
        <BrowserRouter>
          <MeteoHeader />
          <Routes>
            <Route path="/" element={<MeteoHome />} />
            {/* <Route path="/details/:city" element={<MeteoDetails />} />
          <Route path="*" element={<MeteoNotFound />} /> */}
          </Routes>

          <MeteoFooter />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
