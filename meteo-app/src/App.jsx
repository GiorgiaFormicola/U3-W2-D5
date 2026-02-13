import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MeteoFooter from "./components/MeteoFooter";
import MeteoHeader from "./components/MeteoHeader";

function App() {
  return (
    <>
      <div className="vh-100 bg-primary-subtle">
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
      </div>
    </>
  );
}

export default App;
