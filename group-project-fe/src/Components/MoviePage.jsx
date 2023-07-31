import React from 'react'
import WeatherSummary from './WeatherSummary'
import OSMap from './OSMap'
import "./css/moviepage.css"

const MoviePage = (props) => {

  const weather = [
    {high:21, low: 17, day: "Mon"}, 
    {high:19, low: 11, day: "Tue"}, 
    {high:20, low: 7, day: "Wed"}, 
    {high:20, low: 11, day: "Thu"},
    {high:16, low: 12, day: "Fri"}, 
    {high:16, low: 6, day: "Sat"},
    {high:18, low: 10, day: "Sun"}
  ]
  const location = "London, UK"

  return (
    <div className='container moviePage'>
      <h1>{props.movieTitle}</h1>
      <h1 style={{backgroundColor: "lightgrey"}}>Carousel here...(maybe map inside carousel?)</h1>
      <OSMap longitude={50.01} latitude={1.23} />
      <WeatherSummary weather={weather} location={location}/>   
    </div>
  )
}

export default MoviePage