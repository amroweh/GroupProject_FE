import React from 'react'
import "./css/weatherbox.css"

const WeatherBox = (props) => {
 
    return (
    <div className="weatherBox">
        <h5>{props.day}</h5>
        <img src="/sunny.png" alt=""/>
        <div className='temperature'><span>{props.high}&deg;</span>&nbsp;&nbsp;&nbsp;<span>{props.low}&deg;</span></div>
        <div className='precipitation'>Precipitation: {props.high}%</div>
        <div className='precipitation'>Wind: {props.high}%</div>
    </div>
  )
}

export default WeatherBox