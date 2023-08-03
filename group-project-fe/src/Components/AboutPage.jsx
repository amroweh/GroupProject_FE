import React from 'react'
import "./css/aboutpage.css"

function AboutPage() {

  return (
    <div className="container aboutMainDiv">
        <div className="aboutDescription">
          <h1>About this Site</h1>
          <p>Explore your favourite movie titles and discover the filming locations used to bring entertainment to your screens. See somewhere interesting? Easily view the upcoming weather to see when the best time to travel is! We also provide the latest flight information to that location</p>
        </div>
        <div className='aboutImage'>
          <img src="/About.png" alt="" />
        </div>
    </div>
  )
}

export default AboutPage