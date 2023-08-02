import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./Components/Header";
import Movies from "./Components/Movies";
import Footer from "./Components/Footer";
import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";
import MoviePage from "./Components/MoviePage"


function App() {
  return (    

    <BrowserRouter>
      {/* <Movies /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movie" element={<MoviePage movieTitle="Guardians of the Galaxy"/>} />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
