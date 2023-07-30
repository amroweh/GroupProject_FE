<<<<<<< HEAD
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from "./Components/Footer";
import Movies from "./Components/Movies";
import { BrowserRouter, ReactRouter } from "react-router-dom";
=======
import './App.css';
import Footer from './Components/Footer';
import {BrowserRouter, ReactRouter} from 'react-router-dom'
import OSMap from './Components/OSMap';
>>>>>>> a04a34b5a5c6d07cbb074fd87a573178094a1c3a

function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      {/* Please add components here */}
      <Movies />
      <Footer />
    </BrowserRouter>
=======
        {/* Please add components here */}
        
        <h1>Testing Open Street Maps here...</h1>
        <h3>Note: can add multiple pins to map</h3>
        {/* Testing Open Street Maps with Leaflet package to display markers and maps */}
        <div style={{width: "100%", display: "flex", justifyContent: "center", marginBottom: "50px", marginTop: "50px"}}>
          <OSMap />          
        </div>        
        <OSMap longitude={50.01} latitude={1.230}/>        
        <Footer />
    </BrowserRouter>      
>>>>>>> a04a34b5a5c6d07cbb074fd87a573178094a1c3a
  );
}

export default App;
