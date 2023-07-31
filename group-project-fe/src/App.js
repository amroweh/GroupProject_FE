import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Movies from "./Components/Movies";
import Footer from "./Components/Footer";
import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";
import OSMap from "./Components/OSMap";
import FlightWidget from "./Components/FlightWidget";

function App() {
  return (
    <BrowserRouter>
    <FlightWidget></FlightWidget>
      <Movies />

      <h1>Testing Open Street Maps here...</h1>
      <h3>Note: can add multiple pins to map</h3>
      {/* Testing Open Street Maps with Leaflet package to display markers and maps */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginBottom: "50px",
          marginTop: "50px",
        }}
      >
        <OSMap />
      </div>
      <OSMap longitude={50.01} latitude={1.23} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
