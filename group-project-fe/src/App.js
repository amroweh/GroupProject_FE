import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./Components/Header";
import Movies from "./Components/Movies";
import Footer from "./Components/Footer";
import LocationCarousel from "./Components/LocationCarousel";
import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";
import OSMap from "./Components/OSMap";
import FlightWidget from "./Components/FlightWidget";
import DateSelector from "./Components/DateSelector";
import WeatherSummary from "./Components/WeatherSummary";
import MoviePage from "./Components/MoviePage";
import AboutPage from "./Components/AboutPage";


function App() {
  return (    

    <BrowserRouter>
     
      <Header />

      <div style={{minHeight: "100vh"}}>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/:id/plan" element={<MoviePage />} />
          <Route path="/about" element={<AboutPage />}/>
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
