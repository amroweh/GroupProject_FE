import "./App.css";
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
