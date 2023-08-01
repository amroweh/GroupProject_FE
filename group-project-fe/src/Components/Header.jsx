import React, { useState } from 'react'
import "./css/header.css"
import { NavLink } from 'react-router-dom'

const Header = () => {
    const [menuClass, setMenuClass] = useState("")
    const toggleMenuClass = ()=>{
        if(menuClass=="") setMenuClass("show")
        else setMenuClass("")
    }

  return (
    <header>
        <div className='container'>
            <div id="headerLogo"><img src="/IronDevsLogo.png" alt="" /></div>
            <ul id="headerMenu" className={menuClass}>
                <li><NavLink style={{all: "unset"}} to="/">Home</NavLink></li> 
                <li><NavLink style={{all: "unset"}} to="/">About</NavLink></li> 
                <li><NavLink style={{all: "unset"}} to="/movie">Movie</NavLink></li> 
                <li><NavLink style={{all: "unset"}} to="/">Contact</NavLink></li> 
            </ul>
            <div id="headerHamburgerMenu">
                <div id='headerHamburgerIcon'>
                    {/* <NavLink style={{all: "unset"}} to="/">Login</NavLink> */}
                    <img src="/hamburgerIcon.png" alt="" onClick={toggleMenuClass}/>
                </div>                
            </div>
        </div>
    </header>
  )
}

export default Header