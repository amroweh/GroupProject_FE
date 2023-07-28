import './App.css';
import Footer from './Components/Footer';
import {BrowserRouter, ReactRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        {/* Please add components here */}

        <div style={{height: "100vh", textAlign: "center"}}>Random space to separate footer from top of page, will be deleted once components are added</div>
        <Footer />
    </BrowserRouter>      
  );
}

export default App;
