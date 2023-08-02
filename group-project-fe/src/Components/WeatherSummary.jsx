import React from "react";
import WeatherBox from "./WeatherBox";
import "./css/weathersummary.css";

const WeatherSummary = (props) => {  

// console.log(props.weather)

    if(props.weather.forecast){
        return (
            <div className='container weatherContainer'>         
                <h4>Weather Forecast</h4>
                <h6>{props.location}</h6>
                <div className="weatherSummary">
                    {props.weather.forecast.forecastday.map(el=>{return <WeatherBox key={el.date} high={el.day.maxtemp_c} low={el.day.mintemp_c} day={el.date} precipitation={el.day.daily_chance_of_rain} wind={el.day.maxwind_kph} />})}
                </div>
            </div>
        );
    }
    else { return "loading..." } 
}

export default WeatherSummary;
