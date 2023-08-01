import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./Components/Header";
import Movies from "./Components/Movies";
import Footer from "./Components/Footer";
import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";
import MoviePage from "./Components/MoviePage"
import { useEffect } from "react";
import jwt_decode from "jwt-decode"

const google = window.google;

function App() {


  function handleCallbackResponse(response){
    console.log("Encoded JWT ID:" + response.credential);
    var userObject = jwt_decode(response.credential)
    console.log(userObject)
  }

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: "205852275312-07o8o2jk2cfd3dtad0m7h3m2c1s3piq4.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: "outline", size: "large"}
    )
  },[]);

  return (
    <BrowserRouter>
      {/* <Movies /> */}
      <Header />
      <div id="signInDiv"></div>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movie" element={<MoviePage movieTitle="Guardians of the Galaxy"/>} />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
