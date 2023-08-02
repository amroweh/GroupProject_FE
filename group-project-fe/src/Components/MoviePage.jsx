import React, { useEffect } from "react";
import WeatherSummary from "./WeatherSummary";
import OSMap from "./OSMap";
import LocationCarousel from "./LocationCarousel";
import "./css/moviepage.css";
import { useLocation } from "react-router-dom";
import FlightWidget from "./FlightWidget";
import { useState } from "react";
import DateSelector from "./DateSelector";
import axios from "axios";

const MoviePage = (props) => {
  let { state } = useLocation();
  // console.log(state);
  const [weatherDetails, setWeather] = useState([])
  const [locationDetails, setLocationDetails] = useState(JSON.parse(state)[0])
  const [date, setDate] = useState((new Date()).toISOString().split('T')[0])
  const [geoL, setGeo] = useState({long: "-1.021", lat: "51.03"})

  const locationHandler = (locationDet)=>{
    setLocationDetails(locationDet)
  }

  const dateChangeHandler = (e)=>{    
    setDate(e.target.value)
  }

  // API functions
  //function to call the BestFlight
  const getWeather = async (date, long, lat)=>{
    try{
      const url = `http://18.130.102.78:8082/weather?date=${date}&lon=${lat}&lat=${long}&days=7`
      const res = await axios.get(url);
      const data = await res.data;
      return data;      
    }
    catch(e){
        return {error: `Data not available from server: ${e.message}`}
    }
  }
  const getGeo = async (city)=>{
    try{
      const url = `http://18.130.102.78:8082/location?city=${city}`
      const res = await axios.get(url);
      const data = await res.data;
      return data;
    }
    catch(e){
        return {error: `Data not available from server: ${e.message}`}
    }
  }
  const getGeoAndWeather = async (city)=>{

    const year = date.substring(0,4)
    const month = date.substring(5,7)
    const day = date.substring(8,10)
    const myDate = day+"-"+month+"-"+year;

    console.log("function running...")
    const geoStuff = await getGeo(city)
    console.log(geoStuff)
    setGeo({long: geoStuff.longitude, lat: geoStuff.latitude})    
    const weatherStuff = await getWeather(myDate, geoStuff.longitude, geoStuff.latitude)
    setWeather(weatherStuff)
  }

  useEffect(()=>{ // FIRST CALL - ON LOAD
      getGeoAndWeather(locationDetails.city)
  }, [])
  
  useEffect(()=>{  // SECOND CALL - ON CHANGE
    getGeoAndWeather(locationDetails.city)  
  }, [date, locationDetails])
 

  return (
    <div className="container moviePage">
      <h1>{props.movieTitle}</h1>
      <LocationCarousel locs={state} locationHandler={locationHandler} />{" "}
      {/* the props being passed into carousel is the locations */}
      <DateSelector dateChangeHandler={dateChangeHandler}/>
      <WeatherSummary weather={weatherDetails} location={locationDetails.city+", "+locationDetails.country} />
      <OSMap longitude={geoL.long} latitude={geoL.lat} />
      <FlightWidget date={date} destination={locationDetails.nearest_airport_code}  origin="LHR"></FlightWidget>     
    </div>
  );
};

export default MoviePage;
