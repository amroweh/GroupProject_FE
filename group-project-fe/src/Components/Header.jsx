import React, { useState } from 'react'
import "./css/header.css"
import { NavLink } from 'react-router-dom'
import { useEffect } from "react";
import jwt_decode from "jwt-decode"
const google = window.google;
import "./css/aboutpage.css"


const Header = () => {


    const [user, setUser ] = useState({})
    const [menuClass, setMenuClass] = useState("")
    
    const toggleMenuClass = ()=>{
        if(menuClass=="") setMenuClass("show")
        else setMenuClass("")
    }

    function handleCallbackResponse(response){
    var userObject = jwt_decode(response.credential)
    setUser(userObject)
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut() {
    setUser({})
    document.getElementById("signInDiv").hidden = false;
  }

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: "205852275312-07o8o2jk2cfd3dtad0m7h3m2c1s3piq4.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: "outline", size: "large"}
    )
  },[]);
  
  

  return (
    <header>
        <div className='container'>
            <div id="headerLogo"><img src="/IronDevsLogo.png" alt="" /></div>
            <ul id="headerMenu" className={menuClass}>
                <li><NavLink style={{all: "unset"}} to="/">Home</NavLink></li> 
                <li><NavLink style={{all: "unset"}} to="/about">About</NavLink></li> 
                <li><NavLink style={{all: "unset"}} to="/movie">Movie</NavLink></li> 
                <li><NavLink style={{all: "unset"}} to="/">Contact</NavLink></li> 
            </ul>
            <div id="headerLogin">
                <div id="signInDiv" className='headerLoginButton'></div>
                { Object.keys(user).length != 0 &&
                  <button onClick={(e)=> handleSignOut()}>Sign out</button>  
                }
                     
                {user &&
                    <div>
                        <img src={user.picture}/>
                        <h3>{user.given_name}</h3>
                    </div>
                }         
            <div id="headerHamburgerMenu">
                <div id='headerHamburgerIcon'>
                    {/* <NavLink style={{all: "unset"}} to="/">Login</NavLink> */}
                    <img src="/hamburgerIcon.png" alt="" onClick={toggleMenuClass}/>
                </div>                
            </div>
        </div>
        </div>
    </header>
  )
}

export default Header