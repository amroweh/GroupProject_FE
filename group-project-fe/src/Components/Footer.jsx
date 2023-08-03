import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Components/css/footer.css'

const Footer = () => {
  return (
    <footer>
      {/* Bootstrap container to adjust width */}
      <div className='container'>
        {/* Left Footer Section */}
        <div id='footer-logo-section'>
          <img src="/sky_logo.png" alt=""/>
          <span>© 2023 Sky UK</span>
        </div>
        {/* Middle Footer Section */}
        <ul id='footer-middle-section'>
          <li><NavLink className="footer-nav-link" to="/">Home</NavLink></li> 
          <li><NavLink className="footer-nav-link" to="/">About</NavLink></li> 
          <li><NavLink className="footer-nav-link" to="/">Movies</NavLink></li> 
          <li><NavLink className="footer-nav-link" to="/">Sky</NavLink></li> 
        </ul>
        {/* Right Footer Section */}
        <div id='footer-language-section'>
          <label htmlFor="footer-countries-dropdown">Country: </label>
          <select name="footer-countries-dropdown" id="footer-countries-dropdown">
            <option value="uk">UK</option>
            <option value="ireland">Ireland</option>
          </select>
        </div>     
      </div>  
    </footer>
  )
}

export default Footer