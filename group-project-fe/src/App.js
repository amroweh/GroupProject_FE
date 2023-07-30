import './App.css';
import Footer from './Components/Footer';
import {BrowserRouter, ReactRouter} from 'react-router-dom'
import OSMap from './Components/OSMap';

function App() {
  return (
    <BrowserRouter>
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
  );
}

export default App;
