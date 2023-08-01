import React from 'react'
import "./css/header.css"
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div className='container'>
            <div id="headerLogo"><img src="/sky_logo.png" alt="" /></div>
            <ul id="headerMenu">
                <li><NavLink style={{all: "unset"}} to="/">Home</NavLink></li> 
                <li><NavLink style={{all: "unset"}} to="/">About</NavLink></li> 
                <li><NavLink style={{all: "unset"}} to="/movie">Movie</NavLink></li> 
                <li><NavLink style={{all: "unset"}} to="/">Contact</NavLink></li> 
            </ul>
            <div id="headerLogin">
                <div className='headerLoginButton'>
                    <NavLink style={{all: "unset"}} to="/">Login</NavLink>
                </div>                
            </div>
        </div>
    </header>
  )
}

export default Header