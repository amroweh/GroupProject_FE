import React from "react";
import WeatherSummary from "./WeatherSummary";
import OSMap from "./OSMap";
import LocationCarousel from "./LocationCarousel";
import "./css/moviepage.css";
import { useLocation } from "react-router-dom";

const MoviePage = (props) => {
  let { state } = useLocation();

  const weather = [

    {high:21, low: 17, day: "Mon", precipitation: "33", wind: "28"}, 
    {high:19, low: 11, day: "Tue", precipitation: "35", wind: "55"}, 
    {high:31, low: 21, day: "Wed", precipitation: "41", wind: "81"}, 
    {high:33, low: 21, day: "Thu", precipitation: "3", wind: "10"},
    {high:16, low: 12, day: "Fri", precipitation: "98", wind: "56"}, 
    {high:26, low: 6, day: "Sat", precipitation: "48", wind: "34"},
    {high:18, low: 10, day: "Sun", precipitation: "67", wind: "22"}
  ]
  const location = "London, UK";

  return (
    <div className="container moviePage">
      <h1>{props.movieTitle}</h1>
      <LocationCarousel locs={state} />{" "}
      {/* the props being passed into carousel is the locations */}
      <OSMap longitude={50.01} latitude={1.23} />
      <WeatherSummary weather={weather} location={location} />
    </div>
  );
};

export default MoviePage;
