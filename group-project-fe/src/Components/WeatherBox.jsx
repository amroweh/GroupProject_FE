import React from 'react'
import "./css/weatherbox.css"

const WeatherBox = (props) => {
 
    return (
    <div className="weatherBox">
        <h5>{props.day}</h5>
        {/* This determines which icon is displayed based on high temperature (should be replaced with proper logic) */}
        <div className='weatherIconContainer'>
          {(()=>{
            if(props.high>=30) return (<img src="/Sunny.png" alt=""/>)
            else if(props.high>=20) return (<img src="/Cloudy.png" alt=""/>)
            else return (<img src="/Rainy.png" alt=""/>)          
          })()}
        </div>
        <div className='temperature'><span>{props.high}&deg;</span>&nbsp;&nbsp;&nbsp;<span>{props.low}&deg;</span></div>
        <div className='precipitation'>Precipitation: {props.precipitation}%</div>
        <div className='precipitation'>Wind: {props.wind}%</div>
    </div>
  )
}

export default WeatherBox