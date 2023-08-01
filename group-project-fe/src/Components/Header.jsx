import React from 'react'
import "./css/header.css"
import { NavLink } from 'react-router-dom'
import { useEffect } from "react";
import jwt_decode from "jwt-decode"
const google = window.google;

const Header = () => {

    function handleCallbackResponse(response){
    console.log("Encoded JWT ID:" + response.credential);
    var userObject = jwt_decode(response.credential)
    console.log(userObject)
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
            <ul id="headerMenu">
                <li><NavLink style={{all: "unset"}} to="/">Home</NavLink></li> 
                <li><NavLink style={{all: "unset"}} to="/">About</NavLink></li> 
                <li><NavLink style={{all: "unset"}} to="/movie">Movie</NavLink></li> 
                <li><NavLink style={{all: "unset"}} to="/">Contact</NavLink></li> 
            </ul>
            <div id="headerLogin">
                <div id="signInDiv" className='headerLoginButton'>
                    <NavLink style={{all: "unset"}} to="/">Login</NavLink>
                </div>                
            </div>
        </div>
    </header>
  )
}

export default Header