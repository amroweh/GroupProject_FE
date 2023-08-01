import React from "react";
import WeatherBox from "./WeatherBox";
import "./css/weathersummary.css";

const WeatherSummary = (props) => {
  return (
    <div className="container weatherContainer">
      <h4>Weather Forecast</h4>
      <h6>{props.location}</h6>
      <div className="weatherSummary">
        {props.weather.map((el) => {
          return (
            <WeatherBox key={el.day} high={el.high} low={el.low} day={el.day} />
          );
        })}
      </div>
    </div>
  );
};

export default WeatherSummary;
