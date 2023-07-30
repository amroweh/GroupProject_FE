import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from "./Components/Footer";
import Movies from "./Components/Movies";
import { BrowserRouter, ReactRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* Please add components here */}
      <Movies />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
